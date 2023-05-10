import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PainDTO } from 'src/app/shared/models/pain';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss']
})
export class HttpClientComponent {

  constructor(private http: HttpClient) {  }

  getPains() {
    return this.http.get<PainDTO[]>('http://localhost:6969/flight/all');
  }

}
