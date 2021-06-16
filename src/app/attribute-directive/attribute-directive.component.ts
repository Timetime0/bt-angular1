import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.scss']
})
export class AttributeDirectiveComponent implements OnInit {
  dssp: any = []
  constructor() { }

  ngOnInit(): void {
  }

  addProduct(_maSP:string, _tenSP:string,_giaSP:string){
    const product ={
      maSP:_maSP,
      tenSP:_tenSP,
      giaSP:_giaSP,
    }
    this.dssp.push(product)
  }
}
