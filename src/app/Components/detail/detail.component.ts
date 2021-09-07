import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DetailedGame } from 'src/app/Models/DetailedGame';
import { GetDataService } from 'src/app/Services/get-data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @ViewChild("description") des!: ElementRef;
  @ViewChild("like") like!: ElementRef;

  isLiked = false;
  public id: any;

  constructor(private getData: GetDataService, private route: ActivatedRoute) {

  }

  detailedGame!: DetailedGame;

  ngAfterViewInit() {
    this.des.nativeElement.innerHTML = this.detailedGame.description;
  }

  getGameData() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')!;
      this.getData.getDetailedGameData(this.id);
      this.getData.detail.subscribe((data) => {
        this.detailedGame = data;
      })
    });
  }

  onLikeClick() {

    if (this.isLiked) {

      // already like so know dislike
      this.isLiked = false;
      this.disLikeGame();
    } else {

      this.isLiked = true;
      // like
      this.likeGame();

    }
  }

  likeGame() {

    var list = [];
    var data: any = localStorage.getItem("likes");
    if (data == null) {
      list.push({ "id": this.id });
    } else {
      var likes: [] = JSON.parse(data);
      likes.map((res) => {
        list.push(res);
      })
      list.push({ "id": this.id });
    }


    localStorage.setItem("likes", JSON.stringify(list));


  }

  disLikeGame() {

    var list: { id: any; }[] = [];
    var data: any = localStorage.getItem("likes");

    var likes: [] = JSON.parse(data);
    likes.map((res: any) => {
      if (res.id != this.id) {
        list.push({ "id": res.id });
      }
    })
    localStorage.setItem("likes", JSON.stringify(list));

  }


  onGenreClick(id: string, name: string) {
    document.location.href = "/genres/" + name + "/" + id + "/1";

  }



  ngOnInit(): void {
    this.getGameData();
    this.isGameLiked();
  }

  isGameLiked() {
    var data: any = localStorage.getItem("likes");
    if (data != null) {
      var likes: [] = JSON.parse(data);
      likes.map((res: any) => {
        if (res.id == this.id) {
          this.isLiked = true;
        }
      });
    }
  }

}
