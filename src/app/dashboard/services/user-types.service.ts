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
  private userCadeteComplete$ :Subject<UserComplete[]>;
  private userFinalsComplete$ :Subject<UserComplete[]>

  constructor(private userService:UsersService) { 
    this.userCadeteComplete$=new Subject();
    this.userFinalsComplete$=new Subject();
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

  getCadete$():Observable<UserComplete[]>{

    return this.userCadeteComplete$.asObservable();
  }

  getFinalsUsers$():Observable<UserComplete[]>{
    return this.userFinalsComplete$.asObservable();
  }
}
