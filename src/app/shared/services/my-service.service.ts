import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PainCreate, PainDTO } from '../models/pain';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PainCreateComponent } from 'src/app/modules/loree/pain/pain-create/pain-create.component';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  private baseUrl = `http://localhost:8080/pain`;
  private apiUrl = 'http://localhost:8080/ingredient';


  constructor(private http: HttpClient) { }

  getPain(): Observable<PainDTO[]> {
    return this.http.get<PainDTO[]>(this.baseUrl + '/all');
  }


  getPainByName(nom: string): Observable<PainDTO> {
    let params = new HttpParams();
    params = params.set('nom', nom);
    return this.http.get<PainDTO>(this.baseUrl, { params: params });
  }

  deletePain(id:number) : Observable<any> {
    return this.http.get(this.baseUrl + id + '/delete');
  }

  createPain(pain: PainCreate): Observable<any> {
    return this.http.post(this.baseUrl + '/add', pain)
  }

  getIngredients(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/all');
  }

}
