import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/Models/Game';
import { GetDataService } from 'src/app/Services/get-data.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  games: Game[] = [];
  name: any = "";
  public id: any = "";
  public page: any = "";
  constructor(private getData: GetDataService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.page = params.get('page');
      this.name = params.get('name');
      this.games = this.getData.getGenreGames(this.id, this.page);

    });
  }

  onNextButton() {
    document.location.href = "/genres/" + this.name + "/" + this.id + "/" + (1 + Number(this.page));
  }
  ngOnInit(): void {
  }

}
