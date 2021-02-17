import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NomPipePipe } from './nom-pipe.pipe';
import { GetCharPipe } from './get-char.pipe';
import { SubArrayPipe } from './sub-array.pipe';
import { AdresseComponent } from './composants/adresse/adresse.component';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { MenuComponent } from './composants/menu/menu.component';
import { RouterModule } from '@angular/router';
import { CalculComponent } from './calcul/calcul.component';
import { TableauComponent } from './tableau/tableau.component';

@NgModule({
  declarations: [
    AppComponent,
    NomPipePipe,
    GetCharPipe,
    SubArrayPipe,
    AdresseComponent,
    StagiaireComponent,
    MenuComponent,
    CalculComponent,
    TableauComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path : 'stagiaire', component : StagiaireComponent },
      { path:'adresse',component : AdresseComponent },
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
