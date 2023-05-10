import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PainDTO } from 'src/app/shared/models/pain';
import { MyServiceService } from 'src/app/shared/services/my-service.service';

@Component({
  selector: 'app-pain-one',
  templateUrl: './pain-one.component.html',
  styleUrls: ['./pain-one.component.scss']
})
export class PainOneComponent implements OnInit{

  selectedPain! : PainDTO;

  constructor(private _activatedRoute: ActivatedRoute, private _myservice: MyServiceService){}

  nom : string = this._activatedRoute.snapshot.params['nom']


  ngOnInit(): void {
    this._myservice.getPainByName(this.nom).subscribe({
      next : (data) => {
        this.selectedPain = data
      }
    })
  }

}
