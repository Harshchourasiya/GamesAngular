import { Component, OnInit, Input } from '@angular/core';
import { Games } from 'src/app/Models/Games';

@Component({
  selector: 'app-sub-home',
  templateUrl: './sub-home.component.html',
  styleUrls: ['./sub-home.component.css']
})
export class SubHomeComponent implements OnInit {
  @Input() game!:Games;

  constructor() { }

  onClick(){
    document.location.href="/genres/"+this.game.name+"/"+this.game.id+"/1";
  }


  ngOnInit(): void {
    
  }

}
