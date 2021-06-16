import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {
  dssv : any = [
    {ten: 'Tý', tuoi: 1},
    {ten: 'Sửu', tuoi: 2},
    {ten: 'Dần', tuoi: 3},
    {ten: 'Mẹo', tuoi: 4},
    {ten: 'Thìn', tuoi: 5},
    {ten: 'Tỵ', tuoi: 6},
    {ten: 'Ngọ', tuoi: 7},
    {ten: 'Mùi', tuoi: 8},
    {ten: 'Thân', tuoi: 9},
    {ten: 'Dậu', tuoi: 10},
    {ten: 'Tuất', tuoi: 11},
    {ten: 'Hợi', tuoi: 12},

  ]
  constructor() { }

  ngOnInit(): void {
  }


}
