import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CamionComponent} from './camion/camion.component';

const routes: Routes = [
  {path : 'camion', component: CamionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiculeRoutingModule { }
