import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserComplete } from '../models/user-structure';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http :HttpClient){}

  getUsers():Observable<UserComplete[]> {
    return this.http.get<UserComplete[]>('/api/Users?userOperation=1');
  }
}

