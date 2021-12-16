import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { TravelByStateService } from '../../services/travel-by-state.service';
import { TravelsData } from '../../models/travels-data';
import { StatusTravelPipe } from '../../pipes/status-travel.pipe';
import { MatTableDataSource } from '@angular/material/table';

interface options{
  value:number,
  viewValue:string
}
interface travels{
  Cliente:string,
  Dirección:string,
  date:string,
  Estado:string,

}


@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.scss']
})
export class TravelsComponent implements OnInit {
  
  selected :number=0;

  options:options[]=[
    {
      value:1,
      viewValue:'Viajes Activos'
    },
    {
      value:2,
      viewValue:'Viajes Pendientes'
    },
    {
      value:3,
      viewValue:'Viajes en Curso'
    }
  ];
  buttonEnable:string='Estado';
  nameButton :string='Hacer algo'
  columns:string[] = ['Cliente', 'Dirección', 'Estado'];
  element :travels[]=[];
  element2 :travels[]=[];
  element3:travels[]=[];
  elementTable: MatTableDataSource<any>=new MatTableDataSource(this.element);
  elementTable2: MatTableDataSource<any>=new MatTableDataSource(this.element2);
  elementTable3: MatTableDataSource<any>=new MatTableDataSource(this.element3);
  
  

  constructor(private travelByStateService :TravelByStateService, private statusTravelPipe:StatusTravelPipe) { }
  

  ngOnInit(): void {
    this.getActiveTravels();
    this.getPendingTravels();
    this.getTravelsInProgress();
  }
  getPendingTravels(){
    let array :TravelsData[]=[]
    let uno = this.travelByStateService.travelsGet(1);
    let cinco = this.travelByStateService.travelsGet(5);
   
   forkJoin([uno,cinco]).subscribe(
     resp=>{
       let travel :travels;
       array=[...resp[0],...resp[1]];
       array.forEach(e=>{
         
         travel={
           Cliente:e.travelEquipmentDTOs[e.travelEquipmentDTOs.length-1].equipment.cliente.fullName,
           Dirección:e.travelEquipmentDTOs[e.travelEquipmentDTOs.length-1].equipment.cliente.address,
           Estado: this.statusTravelPipe.transform(e.lastStatusTravel),
           date: e.travelEquipmentDTOs[e.travelEquipmentDTOs.length-1].operationDate
         };
         this.element2.push(travel);
        
         this.element2.sort((a,b)=>{
           return (Date.parse(a.date)- Date.parse(b.date))
         });
        
       });
       
  
     }
     
   )
    
  }
  getActiveTravels(){
    let array :TravelsData[]=[]
    let uno = this.travelByStateService.travelsGet(1);
    let dos = this.travelByStateService.travelsGet(2);
    let tres = this.travelByStateService.travelsGet(3); 
    let cinco = this.travelByStateService.travelsGet(5);
    let seis = this.travelByStateService.travelsGet(6);
    let siete =this.travelByStateService.travelsGet(7);
    let ocho = this.travelByStateService.travelsGet(8);

    forkJoin([uno,dos,tres,cinco,seis,siete,ocho]).subscribe(
      resp=>{
        let travel :travels;
        array=[...resp[0],...resp[1],...resp[2],...resp[3],...resp[4],...resp[5],...resp[6]];
        array.forEach(e=>{
          
          travel={
            Cliente:e.travelEquipmentDTOs[e.travelEquipmentDTOs.length-1].equipment.cliente.fullName,
            Dirección:e.travelEquipmentDTOs[e.travelEquipmentDTOs.length-1].equipment.cliente.address,
            Estado: this.statusTravelPipe.transform(e.lastStatusTravel),
            date: e.travelEquipmentDTOs[e.travelEquipmentDTOs.length-1].operationDate
          };
          this.element.push(travel);
         
          this.element.sort((a,b)=>{
            return (Date.parse(a.date)- Date.parse(b.date))
          });
          
         
          
        });
        this.selected=1;
   
      }
      
    )

  }
  getTravelsInProgress(){
    let array :TravelsData[]=[]
    
    let dos = this.travelByStateService.travelsGet(2);
    let tres = this.travelByStateService.travelsGet(3); 
    let seis = this.travelByStateService.travelsGet(6);
    let siete =this.travelByStateService.travelsGet(7);
    let ocho = this.travelByStateService.travelsGet(8);

    forkJoin([dos,tres,seis,siete,ocho]).subscribe(
      resp=>{
        let travel :travels;
        array=[...resp[0],...resp[1],...resp[3],...resp[4]];
        array.forEach(e=>{
          
          travel={
            Cliente:e.travelEquipmentDTOs[e.travelEquipmentDTOs.length-1].equipment.cliente.fullName,
            Dirección:e.travelEquipmentDTOs[e.travelEquipmentDTOs.length-1].equipment.cliente.address,
            Estado: this.statusTravelPipe.transform(e.lastStatusTravel),
            date: e.travelEquipmentDTOs[e.travelEquipmentDTOs.length-1].operationDate
          };
          this.element3.push(travel);
         
          this.element3.sort((a,b)=>{
            return (Date.parse(a.date)- Date.parse(b.date))
          });
          
         
          
        });
        
   
      }
      
    )

  }

}
