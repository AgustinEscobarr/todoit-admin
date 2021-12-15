import { Component, OnInit } from '@angular/core';
import { TravelByStateService } from '../../services/travel-by-state.service';
interface options{
  value:boolean,
  viewValue:string
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
const ELEMENT_DATO: PeriodicElement[] = [
  {position: 1, name: 'jajajjaa', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Cambié', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Seeeeee', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Soy un capo', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Uwu', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.scss']
})
export class TravelsComponent implements OnInit {
  selected=true

  options:options[]=[
    {
      value:true,
      viewValue:'Viajes Disponibles'
    },
    {
      value:false,
      viewValue:'Viajes en Curso'
    }
  ];
  buttonEnable:string='symbol';
  nameButton :string='Hacer algo'
  element : PeriodicElement[]= ELEMENT_DATA;
  elemento:PeriodicElement[]=ELEMENT_DATO
  columns:string[] = ['position', 'name', 'weight', 'symbol'];

  constructor(private travelByStateService :TravelByStateService) { }

  ngOnInit(): void {


  }
  getTravels(){
   /* 
    let uno = this.travelByStateService.travelsGet(1);
   let cinco = this.travelByStateService.travelsGet(5);
   
   forkJoin([uno,cinco]).subscribe(
     resp=>{
       
       this.=[...resp[0],...resp[1]];
       
       this.cards.sort((a,b)=>{
         return (Date.parse(a.travelEquipmentDTOs[a.travelEquipmentDTOs.length- 1].operationDate)- Date.parse(b.travelEquipmentDTOs[b.travelEquipmentDTOs.length- 1].operationDate));
         
       });
       
     }
     
   )*/
    
  }

}
