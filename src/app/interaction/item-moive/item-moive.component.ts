import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-moive',
  templateUrl: './item-moive.component.html',
  styleUrls: ['./item-moive.component.scss']
})
export class ItemMoiveComponent implements OnInit {

  @Input() movie:any;
  
  @Output() eventLike = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  like(){
    this.eventLike.emit(this.movie.maPhim)
  }

}
