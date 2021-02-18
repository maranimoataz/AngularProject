import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiculeRoutingModule } from './vehicule-routing.module';
import { CamionComponent } from './camion/camion.component';


@NgModule({
  declarations: [CamionComponent],
  imports: [
    CommonModule,
    VehiculeRoutingModule
  ]
})
export class VehiculeModule { 
  constructor() { console.log('vehicule-module'); }

}
