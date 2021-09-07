import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { MainHomeComponent } from './Components/main-home/main-home.component';
import { SubHomeComponent } from './Components/sub-home/sub-home.component';
import { PlateComponent } from './Components/plate/plate.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './Components/search/search.component';
import { DetailComponent } from './Components/detail/detail.component';
import { GenreComponent } from './Components/genre/genre.component';
import { LikeComponent } from './Components/like/like.component'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainHomeComponent,
    SubHomeComponent,
    PlateComponent,
    SearchComponent,
    DetailComponent,
    GenreComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
