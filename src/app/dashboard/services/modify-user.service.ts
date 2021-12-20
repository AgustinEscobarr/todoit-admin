import { Injectable } from '@angular/core';
import { UserComplete } from '../models/user-structure';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModifyUserService {

  constructor(private http: HttpClient) { }

  modifyUser(change:UserComplete): Observable<UserComplete> {
    
    return this.http.post<UserComplete>(`http://logistica.asambleas.cl/api/Users`,change);
  }
}
