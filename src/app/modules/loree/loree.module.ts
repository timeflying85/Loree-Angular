import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoreeRoutingModule } from './loree-routing.module';
import { HttpClientComponent } from './http-client/http-client.component';
import { PainAllComponent } from './pain/pain-all/pain-all.component';
import { PainOneComponent } from './pain/pain-one/pain-one.component';



@NgModule({
  declarations: [
    PainOneComponent,
    HttpClientComponent,
    PainAllComponent,
    PainOneComponent
  ],
  imports: [
    CommonModule,
    LoreeRoutingModule,

  ]
})
export class LoreeModule { }
