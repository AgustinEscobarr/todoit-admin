import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { UserComplete } from '../models/user-structure';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class UserTypesService {
  
  private usersCadete :UserComplete[]=[];
  private usersFinals :UserComplete[]=[];
  private usersAdmin :UserComplete[]=[];
  private userCadeteComplete$ :Subject<UserComplete[]>;
  private userFinalsComplete$ :Subject<UserComplete[]>;
  private userAdminComplete$ :Subject<UserComplete[]>;

  constructor(private userService:UsersService) { 
    this.userCadeteComplete$=new Subject();
    this.userFinalsComplete$=new Subject();
    this.userAdminComplete$=new Subject();
  }
  getCadete(){
    this.userService.getUsers().subscribe(resp=>{
      resp.forEach(element=>{
        if(element.rol.id==2 && element.isAccepted){
          this.usersCadete.push(element);
        }
      })
      this.userCadeteComplete$.next(this.usersCadete);
    })
  }

  getFinalUsers(){
    this.userService.getUsers().subscribe(resp=>{
      resp.forEach(element=>{
        if(element.rol.id==3){
          this.usersFinals.push(element);
        }
      })
      this.userFinalsComplete$.next(this.usersFinals);
    })
  }

  getAdmins(){
    this.userService.getUsers().subscribe(resp=>{
      resp.forEach(element=>{
        if(element.rol.id==1){
          this.usersAdmin.push(element);
        }
      })
      this.userAdminComplete$.next(this.usersAdmin);
    })
  }
  


  getCadete$():Observable<UserComplete[]>{

    return this.userCadeteComplete$.asObservable();
  }

  getFinalsUsers$():Observable<UserComplete[]>{
    return this.userFinalsComplete$.asObservable();
  }
  getAdmins$():Observable<UserComplete[]>{

    return this.userAdminComplete$.asObservable();
  }
}
