import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { AdresseComponent } from './composants/adresse/adresse.component';
import {TableauComponent} from './tableau/tableau.component';
import { CamionComponent } from './modules/vehicule/camion/camion.component';
import {VehiculeModule} from './modules/vehicule/vehicule.module';

const routes: Routes = [
  {path : 'stagiaire' , component:StagiaireComponent},
  {path : 'stagiaire/:nom/:prenom' , component:StagiaireComponent},
  {path: 'adresse' , component:AdresseComponent},
  {path : 'tableau/:id',component:TableauComponent},
  {path: 'vehicule',
  loadChildren: () => import('./modules/vehicule/vehicule.module').
  then(m => m.VehiculeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing : true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
