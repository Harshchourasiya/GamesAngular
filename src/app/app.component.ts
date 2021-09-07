import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Games';
  @ViewChild('home') home!: ElementRef;
  @ViewChild('loading') loading!: ElementRef;
  ngAfterViewInit(){
    setTimeout(() => {
      this.home.nativeElement.style.display = "flex";
      this.loading.nativeElement.style.display = "none";
    }, 2000);
  }
}
