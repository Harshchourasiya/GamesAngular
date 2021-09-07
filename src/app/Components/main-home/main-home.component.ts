import { Component, OnInit } from '@angular/core';
import { Games } from 'src/app/Models/Games';
import { GetDataService } from 'src/app/Services/get-data.service';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {

  games!: Games[];

  constructor(private get: GetDataService) { }


  collectData() {
    this.games = this.get.getGamesData();
  }

  ngOnInit(): void {
    this.collectData();
  }

}
