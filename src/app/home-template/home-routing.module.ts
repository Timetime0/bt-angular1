import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeTemplateComponent } from './home-template.component';
import { HomeComponent } from './home/home.component';
import { ListMovieComponent } from './list-movie/list-movie.component';


const routes: Routes = [
  
{
  path: '',
  component: HomeTemplateComponent,
  children: [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'list-movie', component: ListMovieComponent },
  ],
},

  
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class HomeTemplateRoutingModule {}