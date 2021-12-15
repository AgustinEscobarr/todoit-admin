import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TravelByStateService {

  constructor(private http: HttpClient) { }

  travelsGet(statusTravel:number): Observable<[]> {
    return this.http.get<[]>(`/api/Travel/2/${statusTravel}`);
  }
}
