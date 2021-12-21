import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserTypesService } from '../../../services/user-types.service';
import { UserComplete } from '../../../models/user-structure';
import { InfoTravelChange } from '../../../models/travels-byModify-data';
import { FormGroup, FormControl, FormGroupDirective } from '@angular/forms';
import { DataModifier } from '../../../models/modify-travel-data';


@Component({
  selector: 'app-change-travel',
  templateUrl: './change-travel.component.html',
  styleUrls: ['./change-travel.component.scss']
})
export class ChangeTravelComponent implements OnInit {

  cadetes :UserComplete[]=[];
  selectCadete:boolean=false;
  value :number=0;
  changeStatusForm :FormGroup;
  changeStatusTravel :DataModifier={
    travelId:0,
    newStatusTravel:0,
    userOperation:1,
    cadeteId:0,
    isReasigned:false,
     Observations:''
  }
  
  constructor(public dialogRef: MatDialogRef<ChangeTravelComponent>,
    @Inject(MAT_DIALOG_DATA) public data:InfoTravelChange, private userTypesService :UserTypesService) {
      this.changeStatusForm= new FormGroup({
        
        observations: new FormControl()
      });
      this.value=this.data.elementTravel.cadeteId;
     }

  ngOnInit(): void {
    this.userTypesService.getCadete();
    this.userTypesService.getCadete$().subscribe(resp=>{
     this.cadetes=resp;
     this.selectCadete=true;
     
     
    })
  }
  onSubmit() :DataModifier{
    
    this.changeStatusTravel={
      travelId:this.data.elementTravel.travelId,
      newStatusTravel:(this.data.newStatus==10?this.data.elementTravel.lastStatusTravel-1:this.data.newStatus),
      userOperation:1,
      cadeteId:this.value,
      isReasigned:(this.data.newStatus==10?true:false),
      Observations:this.changeStatusForm.value.observations

    }

    if(this.data.newStatus==10 && this.data.elementTravel.lastStatusTravel==3){
      this.changeStatusTravel.newStatusTravel=1;
    }
    if(this.data.newStatus==10&&this.data.elementTravel.lastStatusTravel==7){
      this.changeStatusTravel.newStatusTravel=5;
    }
    
    return this.changeStatusTravel;

  }
  
}
