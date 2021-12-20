import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { RegisterData } from '../models/register-data';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  sendRegister(user :RegisterData) :Observable<RegisterData>{

    return this.http.post<RegisterData>('http://logistica.asambleas.cl/api/Users',user);

  }

}
