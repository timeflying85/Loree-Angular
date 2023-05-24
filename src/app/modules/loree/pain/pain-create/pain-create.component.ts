import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PainDTO } from 'src/app/shared/models/pain';
import { MyServiceService } from 'src/app/shared/services/my-service.service';

@Component({
  selector: 'app-pain-create',
  templateUrl: './pain-create.component.html',
  styleUrls: ['./pain-create.component.scss']
})
export class PainCreateComponent implements OnInit{

  newPain! : PainDTO[];

  painForm! : FormGroup;

  ingredientsList!: any[];

  constructor(private _myService: MyServiceService, private _router: Router, private _formBuilder: FormBuilder) {

    this.painForm = this._formBuilder.group({
      nom: ['', [Validators.required]],
      prix: ['', [Validators.required]],
      description: ['', [Validators.required]],
      ingredients: [[]]
    })

  }
  ngOnInit(): void {
    this.getIngredientsList();
  }


  createPain() : void {
    if (this.painForm.valid){
      const selectedIngredients = this.painForm.get('ingredients')?.value;
      this._myService.createPain(this.painForm.value).subscribe({
        next : (data) => {
          console.log(data);
          this._router.navigateByUrl('/loree/pain/all');
        },

        error : (err) => {
          console.log(err);
        }

      });
    }

  }


  getIngredientsList(): void {
    this._myService.getIngredients().subscribe({
        next: data => {
          this.ingredientsList = data; // Mettez à jour la liste des ingrédients
        },
        error: error => {
          console.error('Erreur lors de la récupération de la liste des ingrédients :', error);
        }
    });
  }

  addIngredient(selectElement: HTMLSelectElement): void {
    const selectedOptions = Array.from(selectElement.selectedOptions);
    const selectedIngredients = selectedOptions.map((option) => option.value);

    const currentIngredients = this.painForm.get('ingredients')?.value || [];
    const updatedIngredients = [...currentIngredients, ...selectedIngredients];

    this.painForm.get('ingredients')?.setValue(updatedIngredients);
  }

}
