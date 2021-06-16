import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent implements OnInit {
  status:boolean = true
  isLogin:boolean= true
  constructor() { }

  ngOnInit(): void {
  }

  toggle (){
    this.status = !this.status
  }

  logOut (){
    this.isLogin = false
  }

  logIn (){
    this.isLogin = true
  }
  
}
