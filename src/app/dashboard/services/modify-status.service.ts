import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { DataModifier } from '../models/modify-travel-data';
import { TravelsData } from '../models/travels-data';

@Injectable({
  providedIn: 'root'
})
export class ModifyStatusService {

  constructor(private http: HttpClient) { }

  modify(change:DataModifier): Observable<TravelsData> {
    
    return this.http.post<TravelsData>(`/api/Travel?travelId=${change.travelId}&statusTravel=${change.newStatusTravel}&userOperation=${change.userOperation}&cadeteId=${change.cadeteId}&isReasigned=${change.isReasigned}&observations=${change.Observations}`,change);
  }
}
