import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PainDTO } from 'src/app/shared/models/pain';
import { MyServiceService } from 'src/app/shared/services/my-service.service';

@Component({
  selector: 'app-pain-all',
  templateUrl: './pain-all.component.html',
  styleUrls: ['./pain-all.component.scss']
})
export class PainAllComponent {

  pains! : PainDTO[];

  constructor(private router : Router, private myService: MyServiceService, private _activatedRoute : ActivatedRoute, private hhtp: HttpClient) {
    this.pains = this._activatedRoute.snapshot.data['pains']
  }

  ngOnInit(): void {
    this.getPains()
  }

  getPains() {
    this.myService.getPain().subscribe(objects => {
        this.pains = objects
    });
  }

  deletePain(id:number) {
    this.myService.deletePain(id).subscribe(
      {
        next : () => {
          this.getPains()
        },
        error : (err) => {console.log(err)}
       }
    )
  }

}

