import { Component, OnInit, Input } from '@angular/core';
import { Game } from 'src/app/Models/Game';

@Component({
  selector: 'app-plate',
  templateUrl: './plate.component.html',
  styleUrls: ['./plate.component.css']
})
export class PlateComponent implements OnInit {

  @Input() game!:Game;
  
  constructor() { }

  onClick(){
    document.location.href="/games/"+this.game.id;
  }

  ngOnInit(): void {
  }

}
