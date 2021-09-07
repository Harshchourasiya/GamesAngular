import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from 'src/app/Services/get-data.service';
import { Game } from 'src/app/Models/Game';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public qurey!: string;
  game: Game[] = [];
  
  constructor(private getData: GetDataService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.qurey = params.get('qurey') as string;
      this.game = this.getData.getSearchData(this.qurey);

    });
  }

  ngOnInit(): void {

  }

}
