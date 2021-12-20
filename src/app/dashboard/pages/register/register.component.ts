import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegisterData, Rol, Vehicle } from '../../models/register-data';

interface RolSelect{
  id:{
    rol: Rol

  }

}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent   {
  hide :boolean = true;
  selectRol :Rol[]=[
    {
      id:1,
      name:'Administrador',
      isDeleted:0
    },
    {
      id:2,
      name:'Cadete',
      isDeleted:0
    },
    {
      id:3,
      name:'Usuario final',
      isDeleted:0
    }
  ];
  selectVehicle :Vehicle[]=[
    {
      id:1,
      name:'Motocicleta',
      isDeleted:0
    },
    {
      id:2,
      name:'Automovil',
      isDeleted:0
    },
    {
      id:3,
      name:'Bicicleta',
      isDeleted:0
    }
  ];
 
  user= new RegisterData();
  
  registerForm: FormGroup;

  constructor(private route:Router, public dialog:MatDialog) { 
    this.registerForm  = new FormGroup({
      fullName: new FormControl(),
      email: new FormControl(),
      cellPhone :new FormControl(),
      address: new FormControl(),
      password:new FormControl(),
      observations:new FormControl(),
      vehicle: new FormControl(),
      rol : new FormControl()
      
    })

   
    
    
  }
  onSubmit(formDirective:FormGroupDirective){
    
 
   
    this.user=this.registerForm.value;
    this.user.isAccepted=true;
    this.user.isDeleted=false
    
    
    console.log(this.user);
    formDirective.resetForm();
    this.registerForm.reset();
    
       
      
      
      
  
  }
}
