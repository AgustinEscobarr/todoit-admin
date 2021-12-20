import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../models/user-loged';
import { UserComplete } from '../models/user-structure';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

 
  login(client:UserLogin): Observable<UserComplete> {
    return this.http.get<UserComplete>(`/api/Login?email=${client.email}&password=${client.password}`)
  }
}