import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingBusComponent } from './booking-bus.component';
import { DanhsachgheComponent } from './danhsachghe/danhsachghe.component';
import { GheComponent } from './ghe/ghe.component';



@NgModule({
  declarations: [
    BookingBusComponent,
    DanhsachgheComponent,
    GheComponent
  ],
  exports:[
    BookingBusComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BookingBusModule { }
