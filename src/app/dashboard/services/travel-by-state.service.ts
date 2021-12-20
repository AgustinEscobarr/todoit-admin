import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { TravelsData } from '../models/travels-data';

@Injectable({
  providedIn: 'root'
})
export class TravelByStateService {

  constructor(private http: HttpClient) { }

  travelsGet(statusTravel:number): Observable<TravelsData[]> {
    
    return this.http.get<TravelsData[]>(`/api/Travel/1/${statusTravel}`);
  }
}
