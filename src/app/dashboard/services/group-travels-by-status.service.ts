import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Travels } from '../models/travels-byModify-data';
import { forkJoin, Observable, Subject } from 'rxjs';
import { TravelByStateService } from './travel-by-state.service';
import { TravelsData } from '../models/travels-data';
import { StatusTravelPipe } from '../pipes/status-travel.pipe';

@Injectable({
  providedIn: 'root'
})
export class GroupTravelsByStatusService {

  totalTravelsData : TravelsData[]=[];
  totalTravels :Travels[]=[];

  finishedTravels: Travels[]=[];
  activeTravels:Travels[]=[];
  pendingTravels: Travels[]=[];
  inProgressTravels: Travels[]=[];
  finishedTravels$: Subject<Travels[]>;
  activeTravels$:Subject<Travels[]>;
  pendingTravels$: Subject<Travels[]>;
  inProgressTravels$: Subject<Travels[]>;

  constructor(private travelByStateService :TravelByStateService, private statusTravelPipe :StatusTravelPipe) {
    this.finishedTravels$=new Subject();
    this.activeTravels$=new Subject();
    this.pendingTravels$=new Subject();
    this.inProgressTravels$=new Subject();
   }

   getArrayTravels(selectArray: string, ...statusTravels :number[]){
     let arrayTravels :Observable<TravelsData[]>[]=[];
     let travel :Travels;
     statusTravels.forEach(statusNumber=>{
      arrayTravels.push(this.travelByStateService.travelsGet(statusNumber));
     });
     forkJoin([...arrayTravels]).subscribe((resp)=>{
       this.totalTravelsData = resp.reduce((travelsUnstructured,travelArray)=>{
         travelsUnstructured.push(...travelArray);
         return travelsUnstructured;
       },[]);

       if(selectArray.toLowerCase()=='pending'||selectArray.toLowerCase()=='finished'){
        this.totalTravelsData.forEach(e=>{
          if( e.travelEquipmentDTOs[e.travelEquipmentDTOs.length-1].equipment.cliente!=undefined){
          travel={
            Cliente:e.travelEquipmentDTOs[e.travelEquipmentDTOs.length-1].equipment.cliente.fullName,
            Dirección:e.travelEquipmentDTOs[e.travelEquipmentDTOs.length-1].equipment.cliente.address,
            Estado: this.statusTravelPipe.transform(e.lastStatusTravel),
            date: e.travelEquipmentDTOs[e.travelEquipmentDTOs.length-1].operationDate,
            lastStatusTravel:e.lastStatusTravel,
            observation:e.travelEquipmentDTOs[e.travelEquipmentDTOs.length-1].observation,
            cadeteId:(e.lastStatusTravel==1|| e.lastStatusTravel==5 ? 0 : e.travelEquipmentDTOs[e.travelEquipmentDTOs.length-1].cadete.id),
            isReasigned:false,
            travelId:e.id
          };
          if(selectArray.toLowerCase()=='pending'){
            this.pendingTravels.push(travel);
         
            this.pendingTravels.sort((a,b)=>{
            return (Date.parse(a.date)- Date.parse(b.date))
          });
          }
          if(selectArray.toLowerCase()=='finished'){
            this.finishedTravels.push(travel);
         
            this.finishedTravels.sort((a,b)=>{
            return (Date.parse(a.date)- Date.parse(b.date))
          });
          }
        }  
      });
        this.pendingTravels$.next(this.pendingTravels);
        this.finishedTravels$.next(this.finishedTravels);
       }

       if(selectArray.toLowerCase()=='active'){
         this.totalTravelsData.forEach(e=>{
          if(e.travelEquipmentDTOs[e.travelEquipmentDTOs.length-1].cadete!=null && e.travelEquipmentDTOs[e.travelEquipmentDTOs.length-1].equipment.cliente!=undefined){
          travel={
            Cliente:e.travelEquipmentDTOs[e.travelEquipmentDTOs.length-1].equipment.cliente.fullName,
           Dirección:e.travelEquipmentDTOs[e.travelEquipmentDTOs.length-1].equipment.cliente.address,
           Estado: this.statusTravelPipe.transform(e.lastStatusTravel),
           date: e.travelEquipmentDTOs[e.travelEquipmentDTOs.length-1].operationDate,
           lastStatusTravel:e.lastStatusTravel,
           observation:e.travelEquipmentDTOs[e.travelEquipmentDTOs.length-1].observation,
           cadeteId:(e.lastStatusTravel==1|| e.lastStatusTravel==5||e.lastStatusTravel==4 ? 0 : e.travelEquipmentDTOs[e.travelEquipmentDTOs.length-1].cadete.id),
           isReasigned:false,
           travelId:e.id
          };
          this.activeTravels.push(travel);
          this.activeTravels.sort((a,b)=>{
            return (Date.parse(a.date)- Date.parse(b.date))
          });
        } 
        });
        this.activeTravels$.next(this.activeTravels);
       }

       if(selectArray.toLowerCase()=='inprogress'){
        this.totalTravelsData.forEach(e=>{
          if(e.travelEquipmentDTOs[e.travelEquipmentDTOs.length-1].cadete!=null && e.travelEquipmentDTOs[e.travelEquipmentDTOs.length-1].equipment.cliente!=undefined && (e.lastStatusTravel!=1 && e.lastStatusTravel!=5)){
          travel={
          Cliente:e.travelEquipmentDTOs[e.travelEquipmentDTOs.length-1].equipment.cliente.fullName,
           Dirección:e.travelEquipmentDTOs[e.travelEquipmentDTOs.length-1].equipment.cliente.address,
           Estado: this.statusTravelPipe.transform(e.lastStatusTravel),
           date: e.travelEquipmentDTOs[e.travelEquipmentDTOs.length-1].operationDate,
           lastStatusTravel:e.lastStatusTravel,
           observation:e.travelEquipmentDTOs[e.travelEquipmentDTOs.length-1].observation,
           cadeteId:(e.lastStatusTravel==1|| e.lastStatusTravel==5 ? 0 : e.travelEquipmentDTOs[e.travelEquipmentDTOs.length-1].cadete.id),
           isReasigned:false,
           travelId:e.id
          };
          this.inProgressTravels.push(travel);
          this.inProgressTravels.sort((a,b)=>{
            return (Date.parse(a.date)- Date.parse(b.date));
          });  
        }  
        });
        this.inProgressTravels$.next(this.inProgressTravels);
       }
     });
   }

   getActiveTravels() :Observable<Travels[]>{
     return this.activeTravels$.asObservable();
   }
   getPendingTravels():Observable<Travels[]>{
     return this.pendingTravels$.asObservable();
   }
   getFinishedTravels() :Observable <Travels[]>{
     return this.finishedTravels$.asObservable();
   }
   getInProgressTravels() :Observable <Travels[]>{
     return this.inProgressTravels$.asObservable();
   } 
  
}
