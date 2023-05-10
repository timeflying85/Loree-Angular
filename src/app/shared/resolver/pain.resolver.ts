import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { MyServiceService } from '../services/my-service.service';
import { Observable } from 'rxjs';
import { PainDTO } from '../models/pain';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PainResolver implements Resolve<boolean> {

  constructor(private _service : MyServiceService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PainDTO | any> {

    return this._service.getPain();

  }


};

