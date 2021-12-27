import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Travels, InfoTravelChange } from '../../models/travels-byModify-data';
import { MatDialog } from '@angular/material/dialog';
import { ChangeTravelComponent } from '../../components/dialogs/change-travel/change-travel.component';
import { ModifyStatusService } from '../../services/modify-status.service';
import { GroupTravelsByStatusService } from '../../services/group-travels-by-status.service';

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
  elementTable: MatTableDataSource<Travels>=new MatTableDataSource();
  elementTable2: MatTableDataSource<Travels>=new MatTableDataSource();
  elementTable3: MatTableDataSource<Travels>=new MatTableDataSource();
  elementTable4: MatTableDataSource<Travels>=new MatTableDataSource();
  
  

  constructor( public dialog :MatDialog, private modifyStatusService:ModifyStatusService, private groupTravelsByStatusService:GroupTravelsByStatusService ) {
   }
  

  ngOnInit(): void {
    this.getActiveTravels();
    this.getPendingTravels();
    this.getTravelsInProgress();
    this.getFinishedTravels();
  }
  getPendingTravels(){
    this.groupTravelsByStatusService.getArrayTravels('pending', 1,5);
    this.groupTravelsByStatusService.getPendingTravels().subscribe(resp=>{
      this.elementTable2=new MatTableDataSource(resp);
    });
    
  }
  getActiveTravels(){
    this.groupTravelsByStatusService.getArrayTravels('active', 1,2,3,4,5,6,7,8);
    this.groupTravelsByStatusService.getActiveTravels().subscribe(resp=>{
      this.elementTable=new MatTableDataSource(resp);
      this.selected=1;
    });

  }
  getTravelsInProgress(){
    this.groupTravelsByStatusService.getArrayTravels('inProgress', 2,3,6,7,8);
    this.groupTravelsByStatusService.getInProgressTravels().subscribe(resp=>{
      this.elementTable3=new MatTableDataSource(resp); 
    });

  }
  getFinishedTravels(){
    this.groupTravelsByStatusService.getArrayTravels('finished', 4,8);
    this.groupTravelsByStatusService.getFinishedTravels().subscribe(resp=>{
      this.elementTable4=new MatTableDataSource(resp);
    });

  }
  changeState(change:InfoTravelChange){
    
    const dialogRef =this.dialog.open(ChangeTravelComponent,{data:change})
    dialogRef.afterClosed().subscribe(resp=>{
    
      this.modifyStatusService.modify(resp).subscribe(resp=>{
        
        alert('Se pudo cambiar la información del viaje');
      },
      error=>{
        alert('no se pudo cambiar la información del viaje : '+error.status );
      })
      
    })
  }

}