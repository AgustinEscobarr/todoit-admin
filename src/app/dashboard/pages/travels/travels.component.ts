import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { TravelByStateService } from '../../services/travel-by-state.service';
import { TravelsData } from '../../models/travels-data';
import { StatusTravelPipe } from '../../pipes/status-travel.pipe';
import { MatTableDataSource } from '@angular/material/table';
import { Travels, InfoTravelChange } from '../../models/travels-byModify-data';
import { MatDialog } from '@angular/material/dialog';
import { ChangeTravelComponent } from '../../components/dialogs/change-travel/change-travel.component';
import { ModifyStatusService } from '../../services/modify-status.service';

export interface States{
  viewValue:string,
  stateChange:number
}
interface options{
  value:number,
  viewValue:string
}



@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.scss']
})
export class TravelsComponent implements OnInit {
  
  selected :number=0;

  states:States[]=[
    {
      viewValue:'Pendiente al Loc.',
      stateChange:1
    },
    {
      viewValue:'Asignado al Loc',
      stateChange:2
    },
    {
      viewValue:'En curso al Loc.',
      stateChange:3
    },
    {
      viewValue:'A reparar',
      stateChange:4
    },
    {
      viewValue:'Reparado',
      stateChange:5
    },
    {
      viewValue:'Asignado al Dom.',
      stateChange:6
    },
    {
      viewValue:'En curso al Dom.',
      stateChange:7
    },
    {
      viewValue:'Entregado',
      stateChange:8
    },
    {
      viewValue:'Recibido',
      stateChange:9
    },
    {
      viewValue:'Cancelado',
      stateChange:10
    }
  ]
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
    },
    {
      value:4,
      viewValue:'Viajes Finalizados'
    }
  ];
  buttonEnable:string='Estado';
  nameSelect :string='Puedes cambiar el Estado';
  nameButton :string='Hacer algo'
  columns:string[] = ['Cliente', 'Dirección', 'Estado'];
  element :Travels[]=[];
  element2 :Travels[]=[];
  element3 :Travels[]=[];
  element4 :Travels[]=[];
  elementTable: MatTableDataSource<Travels>=new MatTableDataSource(this.element);
  elementTable2: MatTableDataSource<Travels>=new MatTableDataSource(this.element2);
  elementTable3: MatTableDataSource<Travels>=new MatTableDataSource(this.element3);
  elementTable4: MatTableDataSource<Travels>=new MatTableDataSource(this.element4);
  
  

  constructor(private travelByStateService :TravelByStateService, private statusTravelPipe:StatusTravelPipe, public dialog :MatDialog, private modifyStatusService:ModifyStatusService ) { }
  

  ngOnInit(): void {
    this.getActiveTravels();
    this.getPendingTravels();
    this.getTravelsInProgress();
    this.getFinishedTravels();
  }
  getPendingTravels(){
    let array :TravelsData[]=[]
    let uno = this.travelByStateService.travelsGet(1);
    let cinco = this.travelByStateService.travelsGet(5);
   
   forkJoin([uno,cinco]).subscribe(
     resp=>{
       let travel :Travels;
       array=[...resp[0],...resp[1]];
       array.forEach(e=>{
         
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
    let cuatro=this.travelByStateService.travelsGet(4); 
    let cinco = this.travelByStateService.travelsGet(5);
    let seis = this.travelByStateService.travelsGet(6);
    let siete =this.travelByStateService.travelsGet(7);
    let ocho = this.travelByStateService.travelsGet(8);

    forkJoin([uno,dos,tres,cuatro,cinco,seis,siete,ocho]).subscribe(
      resp=>{
        let travel :Travels;
        array=[...resp[0],...resp[1],...resp[2],...resp[3],...resp[4],...resp[5],...resp[6],...resp[7]];
        array.forEach(e=>{
          
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
        let travel :Travels;
        array=[...resp[0],...resp[1],...resp[3],...resp[4]];
        array.forEach(e=>{
          
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
          this.element3.push(travel);
         
          this.element3.sort((a,b)=>{
            return (Date.parse(a.date)- Date.parse(b.date))
          });
          
         
          
        });
        
   
      }
      
    )

  }
  getFinishedTravels(){
    let array :TravelsData[]=[]
    
     
    let cuatro = this.travelByStateService.travelsGet(4);
    let ocho =this.travelByStateService.travelsGet(8);
    

    forkJoin([cuatro,ocho]).subscribe(
      resp=>{
        let travel :Travels;
        array=[...resp[0],...resp[1]];
        array.forEach(e=>{
          
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
          this.element4.push(travel);
         
          this.element4.sort((a,b)=>{
            return (Date.parse(a.date)- Date.parse(b.date))
          });
          
         
          
        });
        
   
      });

  }
  changeState(change:InfoTravelChange){
    console.log(change);
    const dialogRef =this.dialog.open(ChangeTravelComponent,{data:change})
    dialogRef.afterClosed().subscribe(resp=>{
      console.log('Estoy acá entonces funciona');
      console.log(resp);
      
    })
  }

}
