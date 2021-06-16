import { Component, OnInit, ViewChild } from '@angular/core';
import {ListMovieComponent} from './list-movie/list-movie.component'

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss']
})
export class InteractionComponent implements OnInit {

  @ViewChild(ListMovieComponent) domListMovie:ListMovieComponent = new ListMovieComponent
  
  constructor() { }

  ngOnInit(): void {}

  addMovie(
    maPhim:string,
    tenPhim:string,
    gia:string,
    hinhAnh:string,
  ){
    const movie: any = {
      maPhim:maPhim,
      tenPhim:tenPhim,
      gia:gia,
      hinhAnh:hinhAnh,
    }
    this.domListMovie.addMovieInArr(movie)
  }
}
