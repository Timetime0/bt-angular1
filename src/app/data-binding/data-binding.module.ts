import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingComponent } from './data-binding.component';
import { OnewayBindingComponent } from './oneway-binding/oneway-binding.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import {  FormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    DataBindingComponent,
    OnewayBindingComponent,
    TwowayBindingComponent,
  ],
  exports:[
    DataBindingComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DataBindingModule { }
