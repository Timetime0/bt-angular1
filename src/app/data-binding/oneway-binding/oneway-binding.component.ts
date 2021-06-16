import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneway-binding',
  templateUrl: './oneway-binding.component.html',
  styleUrls: ['./oneway-binding.component.scss']
})
export class OnewayBindingComponent implements OnInit {

  fullName:string = 'Nguyen Nhu Hoang Tan'
  constructor() {}

  ngOnInit(): void {
  }

  eventBinding (hoTen:string){
    console.log(hoTen)
    this.fullName = hoTen
  }
}
