import { Component, OnInit } from '@angular/core';
import { TravelByStateService } from '../../services/travel-by-state.service';
import { MatTableDataSource } from '@angular/material/table';

interface options{
  value:boolean,
  viewValue:string
}
export interface HistoryData{
  Cadete:string,
  Cliente:string,
  Fecha:string,
  Hora:string,
  Estado:string
    
}


@Component({
  selector: 'app-travel-history',
  templateUrl: './travel-history.component.html',
  styleUrls: ['./travel-history.component.scss']
})
export class TravelHistoryComponent implements OnInit {


  value=false;
  buttonEnable:string='Estado';
  nameSelect :string='Puedes cambiar el Estado';
  nameButton :string='Hacer algo'
  columns:string[] = ['Cadete', 'Cliente', 'Fecha','Hora','Estado'];

  historyData :HistoryData[]=[];

  element :MatTableDataSource<HistoryData>=new MatTableDataSource(this.historyData);
  
  constructor(private travelByStateService:TravelByStateService) { }

  ngOnInit(): void {
    this.travelByStateService.travelsGet(9).subscribe(resp=>{
      resp.forEach(e=>{
        let data :HistoryData;
        
        data={
          Cadete:(e.travelEquipmentDTOs[e.travelEquipmentDTOs.length-1].cadete?e.travelEquipmentDTOs[e.travelEquipmentDTOs.length-1].cadete.fullName:''),
          Cliente:e.travelEquipmentDTOs[e.travelEquipmentDTOs.length-1].equipment.cliente.fullName,
          Fecha:e.travelEquipmentDTOs[e.travelEquipmentDTOs.length-1].operationDate.slice(0,-17),
          Hora:e.travelEquipmentDTOs[e.travelEquipmentDTOs.length-1].operationDate.slice(11,-11),
          Estado: 'Recibido'
        }
        this.historyData.push(data);
      
        
      })
      this.value=true
    });


  }
  getTravels(){
  
    
  }

}
