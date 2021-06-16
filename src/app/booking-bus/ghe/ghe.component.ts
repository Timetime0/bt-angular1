import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss']
})
export class GheComponent implements OnInit {
  status: boolean = false

  @Input() ghe:any;
  @Output() choiceChair = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  chonGhe(){    
    if(!this.ghe.TrangThai){
      this.status = !this.status
      this.choiceChair.emit(this.status)
    }

  }


}
