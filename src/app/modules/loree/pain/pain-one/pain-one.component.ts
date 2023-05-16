import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllergeneDTO } from 'src/app/shared/models/allergene';
import { PainDTO } from 'src/app/shared/models/pain';
import { MyServiceService } from 'src/app/shared/services/my-service.service';

@Component({
  selector: 'app-pain-one',
  templateUrl: './pain-one.component.html',
  styleUrls: ['./pain-one.component.scss']
})
export class PainOneComponent implements OnInit{

  selectedPain! : PainDTO;
  allergenes: AllergeneDTO[] = [];

  constructor(private _activatedRoute: ActivatedRoute, private _myservice: MyServiceService){}


  ngOnInit(): void {
    const nom = this._activatedRoute.snapshot.params['nom'];
    this._myservice.getPainByName(nom).subscribe({
      next : (data) => {
        this.selectedPain = data;
        const tempAllergene: AllergeneDTO[] = [];

        for (const ing of data.ingredients) {
          for (const allerg of ing.allergenes) {
            if( !tempAllergene.includes(allerg) ) // ATTENTION: si doublon ca vient probablement d'ici
              tempAllergene.push(allerg);
          }
        }


        this.allergenes = tempAllergene;
      }
    })
  }




}
