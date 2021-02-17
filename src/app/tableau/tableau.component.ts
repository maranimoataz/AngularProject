import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
  id='';
  tableau = [2,3,8,1];
  suivant='';
  precedent = '';
  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void{
    this.route.paramMap.subscribe(
        res => {
          console.log(this.tableau);
        }
    );
    this.suivant = this.route.snapshot.params.this.tableau[this.id+1];
  }

}
