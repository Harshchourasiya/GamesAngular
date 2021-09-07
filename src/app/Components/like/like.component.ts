import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/Models/Game';
import { GetDataService } from 'src/app/Services/get-data.service';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  games: Game[] = [];

  constructor(private getData: GetDataService) { }

  ngOnInit(): void {
    this.collectData();
  }

  collectData() {
    this.games = this.getData.getLikedGames();
  }

}
