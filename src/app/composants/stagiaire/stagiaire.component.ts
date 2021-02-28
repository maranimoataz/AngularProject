import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.css']
})
export class StagiaireComponent implements OnInit {
  nom : any;
  prenom : any;

  constructor(private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.nom = this.route.snapshot.queryParams.nom;
    this.prenom = this.route.snapshot.queryParams.prenom;
  }
}
