import { Component } from '@angular/core';
import {Personne} from './classes/personne';

@Component({
  selector: 'am-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angularproject';
  personnes: Array<Personne> = [
    new Personne(100, "Wick", "John"),
    new Personne(101, "Abruzz", "John"),
    new Personne(102, "Marley", "Bob"),
    new Personne(103, "Segal", "Steven")
    ];
  pers : Personne = new Personne(1,"moataz","marani");
  constructor(){};
  tab : number[]=[1,2,13,14];
  nom="wil";
  couleur="blue";
  getColor(){
    return 'white';
  }
  getBackgroundColor(){
    return 'red';
  }
  afficherColorEnRouge():boolean{
    return this.couleur === 'blue'? true : false;
  }
  maDate = Date.now();
}