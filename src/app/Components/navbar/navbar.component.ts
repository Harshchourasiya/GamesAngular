import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild("qurey") input!:ElementRef;

  constructor() { }

  onSearch(){
    document.location.href="/search/"+this.input.nativeElement.value;
  }

  ngOnInit(): void {
  }

}
