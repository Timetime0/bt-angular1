import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private ele:ElementRef, private render2: Renderer2) { 
    // this.ele.nativeElement.style.backgroundColor = "green"
    this.render2.setStyle(this.ele.nativeElement, "background-color", "green")
    this.render2.setStyle(this.ele.nativeElement, "font-size", "45px")

  }
  @HostListener("mouseenter") eventHover(){
    this.render2.setStyle(this.ele.nativeElement, "background-color", "red")
  }
  @HostListener("mouseleave") eventleave(){
    this.render2.setStyle(this.ele.nativeElement, "background-color", "green")
  }
    
}


// Cần import vào module nào cần sửa dụng