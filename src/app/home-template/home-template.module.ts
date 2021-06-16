import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTemplateComponent } from './home-template.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ListMovieComponent } from './list-movie/list-movie.component';
import { HomeTemplateRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
    HomeTemplateComponent,
    HomeComponent,
    AboutComponent,
    ListMovieComponent
  ],
  imports: [
    CommonModule,
    HomeTemplateRoutingModule,
  ]
})
export class HomeTemplateModule { }
