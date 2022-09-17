import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationDetailComponent } from './formation-detail.component';

const routes: Routes = [
  { path:'', component: FormationDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormationDetailRoutingModule { }
