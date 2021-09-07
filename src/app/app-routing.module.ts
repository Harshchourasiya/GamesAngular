import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './Components/detail/detail.component';
import { GenreComponent } from './Components/genre/genre.component';
import { LikeComponent } from './Components/like/like.component';
import { MainHomeComponent } from './Components/main-home/main-home.component';
import { SearchComponent } from './Components/search/search.component';

const routes: Routes = [
  {path:'', component:MainHomeComponent},
  {path:'games/:id', component:DetailComponent},
  { path: 'search/:qurey', component: SearchComponent },
  { path: 'genres/:name/:id/:page', component: GenreComponent },
  { path: 'like', component: LikeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
