import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyServiceService } from './shared/services/my-service.service';

const routes: Routes = [
  {path: 'loree', loadChildren : () => import('./modules/loree/loree.module').then(m => m.LoreeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [MyServiceService],
})
export class AppRoutingModule { }
