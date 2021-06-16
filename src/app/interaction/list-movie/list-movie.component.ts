import { Component, OnInit ,ViewChildren, QueryList} from '@angular/core';
import {ItemMoiveComponent} from '../item-moive/item-moive.component'

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss']
})
export class ListMovieComponent implements OnInit {

  @ViewChildren(ItemMoiveComponent) tagListItemMovie: QueryList<ItemMoiveComponent> = new QueryList

  danhSachPhim:any = [
    {maPhim: 1, tenPhim: "Minions", gia: "85000", hinhAnh:"./assets/img/minions.jpg"},
    {maPhim: 2, tenPhim: "Home", gia: "85000", hinhAnh:"./assets/img/home.jpg"},
    {maPhim: 3, tenPhim: "Harvie", gia: "85000", hinhAnh:"./assets/img/harvie.jpg"},
    {maPhim: 4, tenPhim: "Insideout", gia: "85000", hinhAnh:"./assets/img/insideout.jpg"},
  ];

  
  danhSachLike = [
    {maPhim: 1, tenPhim: "Minions", soLike: 0},
    {maPhim: 2, tenPhim: "Home", soLike: 0},
    {maPhim: 3, tenPhim: "Harvie", soLike: 0},
    {maPhim: 4, tenPhim: "Insideout", soLike: 0},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  eventLikeMovie(id:any){
    let movie:any =  this.danhSachLike.find((item)=>item.maPhim===id)
    movie.soLike ++
  }

  addMovieInArr(movie:object){
    this.danhSachPhim.push(movie)
  }

  viewChildren () {
    console.log(this.tagListItemMovie)
    this.tagListItemMovie?.forEach((item:any)=>{
      if(item.movie.maPhim===2){
        item.movie.gia = 100000
      }
    })
  }

}
