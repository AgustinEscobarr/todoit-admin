import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserTypesService } from '../../services/user-types.service';
import { Vehicle, Rol } from '../../models/register-data';
import { UserComplete } from '../../models/user-structure';

export interface Usuario{
  Nombre:string,
  
  Dirección:string,
  Teléfono:string,
  Email:string,
  Acciones:string,
  Vehiculo?:string,
  user:UserComplete

}


@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
  
})
export class ListsComponent implements OnInit {


  color:ThemePalette='warn';
  
  valueFinal:boolean=false;
  valueCadete:boolean=false;
  valueAdmin:boolean=false;

  columnsClient:string[]=['Nombre','Dirección','Teléfono','Email','Acciones'];
  columnsCadete:string[]=['Nombre','Dirección','Teléfono','Email', 'Vehiculo','Acciones'];
  buttonsEdit:string='Acciones';

  clientsArray: Usuario[]=[];
  cadetesArray: Usuario[]=[];
  adminsArray :Usuario[]=[];

 



  cadetes :MatTableDataSource<Usuario>=new MatTableDataSource(this.cadetesArray);
  clients :MatTableDataSource<Usuario>=new MatTableDataSource(this.clientsArray);
  admins :MatTableDataSource<Usuario>=new MatTableDataSource(this.adminsArray);
  constructor(private userTypesService:UserTypesService) { }


  ngOnInit(): void {
    
    this.getFinalUsers();
    this.getCadetes();
    this.getAdmins();
    
  }


  getFinalUsers(){
    this.userTypesService.getFinalUsers();
    this.userTypesService.getFinalsUsers$().subscribe(resp=>{
      let cliente :Usuario;
      console.log(resp);
      resp.forEach(e=>{
        cliente={
         
          Nombre: e.fullName,
          
          Dirección:e.address,
          Teléfono:e.cellPhone,
          Email:e.email,
          Acciones:'',
          user:e,
        }
        this.clientsArray.push(cliente);
      });
      this.valueFinal=true;
      
    })

  }
  getCadetes(){
    this.userTypesService.getCadete();
    this.userTypesService.getCadete$().subscribe(resp=>{
      let cadete :Usuario;
      console.log(resp);
      resp.forEach(e=>{
        cadete={
          Nombre: e.fullName,
          
          Dirección:e.address,
          Teléfono:e.cellPhone,
          Email:e.email,
          Acciones:'',
          Vehiculo:(e.vehicle?e.vehicle.name:''),
          user:e
        }
        console.log(cadete)
        this.cadetesArray.push(cadete);
      });
      this.valueCadete=true;
    })
  }
  getAdmins(){
    this.userTypesService.getAdmins();
    this.userTypesService.getAdmins$().subscribe(resp=>{
      let admin :Usuario;
      console.log(resp);
      resp.forEach(e=>{
        admin={
          Nombre: e.fullName,
          
          Dirección:e.address,
          Teléfono:e.cellPhone,
          Email:e.email,
          Acciones:'',
          Vehiculo:(e.vehicle?e.vehicle.name:''),
          user:e
        }
        this.adminsArray.push(admin);
      });
      this.valueAdmin=true;
    })


    
  }

}
