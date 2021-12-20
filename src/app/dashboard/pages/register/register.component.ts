import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegisterData, Rol, Vehicle } from '../../models/register-data';
import { ModifyUserService } from '../../services/modify-user.service';
import { UserComplete } from '../../models/user-structure';

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
      id:2,
      name:'Motocicleta',
      isDeleted:0
    },
    {
      id:3,
      name:'Automovil',
      isDeleted:0
    },
    {
      id:1,
      name:'Bicicleta',
      isDeleted:0
    }
  ];
  value:Rol={
    id:0,
    name:'',
    isDeleted:0
  };
 
  
  userSend :UserComplete={
    id:0,
    fullName:'' ,
      email:'' ,
      cellPhone: '',
      address: '',
      password: '',
      isAccepted:true,
      isDeleted:false,
      observations:'',
      vehicle:{
        id:0,
        name:'',
        isDeleted:0,
      } ,
      rol : {
        id:0,
        name:'',
        isDeleted:0

      }
  };
  
  registerForm: FormGroup;

  constructor(private route:Router, public dialog:MatDialog, private modifyUserService:ModifyUserService) { 
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
    
 
   
    this.userSend=this.registerForm.value;
    this.userSend.cellPhone=this.registerForm.value.cellPhone.toString();
    this.userSend.isAccepted=true;
    this.userSend.isDeleted=false;
    this.userSend.id=0;
    
    
    
    console.log(this.userSend);
    formDirective.resetForm();
    this.registerForm.reset();
    this.modifyUserService.modifyUser(this.userSend).subscribe(resp=>{
      console.log(resp);
      alert('usuario creado con exito');

    },
    error=>{
      alert('No se pudo registrar el ususario correctamente')
    })
    
       
      
      
      
  
  }
}
