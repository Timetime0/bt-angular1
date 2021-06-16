import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.scss']
})
export class NgclassComponent implements OnInit {
  isColor :boolean =true;
  isFont : boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
