import { Injectable } from '@angular/core';
import { Games } from 'src/app/Models/Games';
import { Game } from 'src/app/Models/Game';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { DetailedGame } from 'src/app/Models/DetailedGame';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  GENRE_URL = "https://api.rawg.io/api/genres?key=" + environment.API_KEY;
  GENRE_GAME_URL = "https://api.rawg.io/api/games?key=" + environment.API_KEY;
  SEARCH_URL = "https://api.rawg.io/api/games?key=" + environment.API_KEY + "&page_size=20&search=";
  GAME_DETAIL_URL = "https://api.rawg.io/api/games/";
  API_KEY = "?key=" + environment.API_KEY;
  TRAILER_URL = "/movies";
  SCREENSHOT_URL = "/screenshots";
  games: Games[] = [];
  searchGames: Game[] = [];
  detailedGame!: DetailedGame;
  private data: Subject<any> = new Subject<any>();
  public detail = this.data.asObservable()



  constructor(private http: HttpClient) {
  }

  getData() {
    var i = 0;
    this.http.get(this.GENRE_URL).subscribe((response: any) => {
      response.results.map((data: any) => {
        if (i == 5) {
          return;
        }
        var gamesArray: Game[] = [];
        this.games.push({
          "id": data.id,
          "name": data.name,
          "games": gamesArray
        });
        this.http.get(this.GENRE_GAME_URL + `&genres=${data.id}&page=${Math.floor(Math.random() * 11) + 1}&page_size=8`).subscribe((res: any) => {
          res.results.map((re: any) => {
            gamesArray.push({
              "id": re.id,
              "name": re.name,
              "img": re.background_image,
              "rate": re.rating
            });
          });
        });
        i++;
      })
    });
  }



  getGamesData() {
    this.getData();
    return this.games;
  }

  getSearchData(qurey: string) {
    this.http.get(this.SEARCH_URL + qurey).subscribe((res: any) => {
      res.results.map((data: any) => {
        this.searchGames.push({
          "id": data.id,
          "img": data.background_image,
          "name": data.name,
          "rate": data.rating
        });
      });
    });
    return this.searchGames;
  }

  getDetailedGameData(id: string) {
    this.http.get(this.GAME_DETAIL_URL + id + this.API_KEY).subscribe((res: any) => {
      var screenshots: string[] = [];
      var trailer: string = "";
      this.http.get(this.GAME_DETAIL_URL + id + this.TRAILER_URL + this.API_KEY).subscribe((respone: any) => {
        if (respone.count != 0) {
          trailer = respone[0].data['480'];
          console.log(this.detailedGame.trailer);
        }
      });
      this.http.get(this.GAME_DETAIL_URL + id + this.SCREENSHOT_URL + this.API_KEY).subscribe((re: any) => {
        re.results.map((data: any) => {
          screenshots.push(data.image);
        });
      });

      this.detailedGame = {
        "name": res.name,
        "description": res.description,
        "background_img": res.background_image_additional,
        "playtime": res.playtime,
        "rating": res.rating,
        "website": res.website,
        "poster_img": res.background_image,
        "trailer": trailer,
        "reddit_url": res.reddit_url,
        "tags": res.tags,
        "genres": res.genres,
        "screenshots": screenshots
      }
      console.log(this.detailedGame);
      this.data.next(this.detailedGame);
    });
    return this.detailedGame;
  }



  getGenreGames(id: string, page: string) {
    var gamesArray: Game[] = [];
    this.http.get(this.GENRE_GAME_URL + `&genres=${id}&page=${page}&page_size=20`).subscribe((res: any) => {
      res.results.map((re: any) => {
        gamesArray.push({
          "id": re.id,
          "name": re.name,
          "img": re.background_image,
          "rate": re.rating
        });
      });
    });

    return gamesArray;
  }



  getLikedGames() {

    var gamesArray: Game[] = [];

    var data: any = localStorage.getItem("likes");
    var likes: [] = JSON.parse(data);

    likes.map((res: any) => {

      this.http.get(this.GAME_DETAIL_URL + res.id + this.API_KEY).subscribe((res: any) => {
        gamesArray.push({
          "id": res.id,
          "img": res.background_image,
          "name": res.name,
          "rate": res.rating
        }
        );
      });
    });


    return gamesArray;

  }



}
