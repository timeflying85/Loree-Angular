import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PainDTO } from '../models/pain';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  private baseUrl = 'http://localhost:8080/pain/'

  constructor(private http: HttpClient) { }

  getPain(): Observable<PainDTO[]> {
    return this.http.get<PainDTO[]>(this.baseUrl + 'all');
  }


  getPainByName(nom: string): Observable<PainDTO> {
    return this.http.get<PainDTO>(this.baseUrl + nom);
  }

}
