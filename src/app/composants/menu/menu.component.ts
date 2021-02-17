import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    lienStagiaire = '';
    param1 = 'moataz';
    param2 = 'marani';
  constructor() {
    this.lienStagiaire = '/stagiaire' + this.param1 + '/' + this.param2;
   }
  ngOnInit(): void {

  }
}
