import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { AdresseComponent } from './composants/adresse/adresse.component';
import {TableauComponent} from './tableau/tableau.component';
import { CamionComponent } from './modules/vehicule/camion/camion.component';
import {CompetenceComponent} from './composants/competence/competence.component'
import {VehiculeModule} from './modules/vehicule/vehicule.module';
import {ExperienceComponent} from './composants/experience/experience.component'
import {FormationComponent} from './composants/formation/formation.component';
import {AcceuilComponent} from './composants/acceuil/acceuil.component';

const routes: Routes = [
  {path : 'stagiaire' , component:StagiaireComponent},
  {path : 'stagiaire/:nom/:prenom' , component:StagiaireComponent},
  {path: 'adresse' , component:AdresseComponent},
  {path : 'tableau/:id',component:TableauComponent},
  {path:'competence',component:CompetenceComponent},
  {path : 'experience', component:ExperienceComponent},
  {path: 'formation', component:FormationComponent},
  {path : 'acceuil', component:AcceuilComponent},
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
