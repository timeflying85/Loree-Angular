import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainAllComponent } from './pain/pain-all/pain-all.component';
import { PainOneComponent } from './pain/pain-one/pain-one.component';
import { PainResolver } from 'src/app/shared/resolver/pain.resolver';
import { PainCreateComponent } from './pain/pain-create/pain-create.component';
import { MyServiceService } from 'src/app/shared/services/my-service.service';
import { ContactComponent } from './contact/contact.component';
import { HistoriqueComponent } from './historique/historique.component';

const routes: Routes = [
  {path: 'pain', children : [
    {path: 'all', resolve : {pains : PainResolver},  component : PainAllComponent},
    {path: 'create', component: PainCreateComponent},
    {path: ':nom', component: PainOneComponent}
  ] },
  {path: 'contact', component: ContactComponent},
  {path: 'historique', component: HistoriqueComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [MyServiceService],
})
export class LoreeRoutingModule { }
