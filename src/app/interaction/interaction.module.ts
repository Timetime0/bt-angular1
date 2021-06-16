import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InteractionComponent } from './interaction.component';
import { ListMovieComponent } from './list-movie/list-movie.component';
import { ItemMoiveComponent } from './item-moive/item-moive.component';



@NgModule({
  declarations: [
    InteractionComponent,
    ListMovieComponent,
    ItemMoiveComponent
  ],
  exports:[
    InteractionComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class InteractionModule { }
