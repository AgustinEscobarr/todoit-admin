import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DecisionList } from '../../../models/decision-list';
import { Vehicle, Rol } from '../../../models/register-data';
import { UserComplete } from '../../../models/user-structure';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
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
  hide:boolean=true;
  valueAccepted:boolean;
  valueDeleted:boolean;
  userRol:number;
  userVehicle:number;
  

  constructor(public dialogRef: MatDialogRef<EditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data:DecisionList) { 
      this.valueAccepted=this.data.user.isAccepted;
      this.valueDeleted=this.data.user.isDeleted;
      this.userRol=this.data.user.rol.id;
      this.userVehicle=(this.data.user.vehicle?this.data.user.vehicle.id:0);
    }


    formData :UserComplete={
      id: this.data.user.id,
      email: this.data.user.email,
      fullName: this.data.user.fullName,
      address: this.data.user.address,
      cellPhone: this.data.user.cellPhone,
      isAccepted: this.data.user.isAccepted,
      isDeleted: this.data.user.isDeleted,
      observations: this.data.user.observations,
      password: this.data.user.password,
      vehicle:{
        id:0,
        name:'',
        isDeleted:0
      },
      rol:{
        id:3,
        name:'',
        isDeleted:0
      }

    }
    

  ngOnInit(): void {
  }
  onSubmit() :UserComplete{
    this.formData.isAccepted=this.valueAccepted;
    this.formData.isDeleted=this.valueDeleted;
    this.formData.rol.id=this.userRol;
    this.formData.vehicle.id=this.userVehicle;
    return this.formData;

  }
  

}
