import { Component, OnInit } from '@angular/core';
import { UserLoged, UserLogin } from '../../models/user-loged';
import { FormGroup, FormControl, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { MatDialog } from '@angular/material/dialog';
import { UserComplete } from '../../models/user-structure';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  hide :boolean = true;
  user= new UserLogin();
  

  loginForm: FormGroup;

  constructor(private route:Router, private loginService:  LoginService, public dialog:MatDialog, private _snackBar: MatSnackBar) { 
    this.loginForm  = new FormGroup({
    
      email : new FormControl(''),
      password  : new FormControl(''),
      
    })

   
    
    
  }
  
  onSubmit(formDirective:FormGroupDirective){
    
   
    
    this.user  = this.loginForm.value;
    formDirective.resetForm();
    this.loginForm.reset();
      
      this.loginService.login (this.user).subscribe(  (resp:UserComplete) => {
  
      let userLoged= new UserLoged('');
      if(resp.rol.id==1){
        userLoged.id=resp.id.toString()
        userLoged.fullName=resp.fullName;
        userLoged.email=resp.email;
        
        localStorage.setItem('userLoged', JSON.stringify(userLoged));
        let loged = JSON.parse(localStorage.getItem('userLoged')||"");
        
        this.openSnackBar('Bienvenido','Ok!','green');
        
        this.redirect();

      }
      else{
        this.openSnackBar('Usuario no permitido', 'Ok!!','red');
      }    
      
  },
  error=>{
    this.openSnackBar('Error en el servidor: No se encuentra el Usuario','Ok!!','red');

  }
  );
  
  }
  redirect(){
    this.route.navigate(['dashboard/register']);
  }
  
  

  openSnackBar(message: string, action: string,color:string) {
    if(color=='green'){
      this._snackBar.open(message, action,{
        duration: 3000,
        panelClass: ['snackbar-green']
      });
    }
    if(color=='red'){
      this._snackBar.open(message, action,{
        duration: 3000,
        panelClass: ['snackbar-red']
      });
    }
    
  }


  ngOnInit(){
    
  }
}
