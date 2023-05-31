import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoreeRoutingModule } from './loree-routing.module';
import { HttpClientComponent } from './http-client/http-client.component';
import { PainAllComponent } from './pain/pain-all/pain-all.component';
import { PainOneComponent } from './pain/pain-one/pain-one.component';
import { PainCreateComponent } from './pain/pain-create/pain-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { HistoriqueComponent } from './historique/historique.component';



@NgModule({
  declarations: [
    PainOneComponent,
    HttpClientComponent,
    PainAllComponent,
    PainOneComponent,
    PainCreateComponent,
    ContactComponent,
    HistoriqueComponent
  ],
  imports: [
    CommonModule,
    LoreeRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class LoreeModule { }
