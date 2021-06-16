import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway-binding',
  templateUrl: './twoway-binding.component.html',
  styleUrls: ['./twoway-binding.component.scss']
})
export class TwowayBindingComponent implements OnInit {
  userName: string = 'Nguyen Tan'
  email: string = ""
  fullName: string = ""
  constructor() { }

  ngOnInit(): void {
  }

  onClick (hoTen:string){
    this.userName = hoTen
  }
  
  onClickFullName (fullName:string){
    this.fullName= fullName
  }
}
