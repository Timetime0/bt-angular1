import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baitap2Component } from './baitap2.component';
import { Baitap2HeaderComponent } from './baitap2-header/baitap2-header.component';
import { Baitap2CarouselComponent } from './baitap2-carousel/baitap2-carousel.component';
import { Baitap2WwdComponent } from './baitap2-wwd/baitap2-wwd.component';
import { Baitap2ContactComponent } from './baitap2-contact/baitap2-contact.component';
import { Baitap2ListcardComponent } from './baitap2-listcard/baitap2-listcard.component';
import { Baitap2FooterComponent } from './baitap2-footer/baitap2-footer.component';
import { Baitap2CardComponent } from './baitap2-card/baitap2-card.component';



@NgModule({
  declarations: [
    Baitap2Component,
    Baitap2HeaderComponent,
    Baitap2CarouselComponent,
    Baitap2WwdComponent,
    Baitap2ContactComponent,
    Baitap2ListcardComponent,
    Baitap2FooterComponent,
    Baitap2CardComponent
  ],
  exports:[
    Baitap2Component
  ],
  imports: [
    CommonModule
  ]
})
export class Baitap2Module { }
