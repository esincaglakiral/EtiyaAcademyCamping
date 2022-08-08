import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import { CartShowComponent } from './components/cart-show/cart-show.component';



@NgModule({
  declarations: [
   
  
    CartShowComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ],
  exports: [
    CartShowComponent
  ]
})
export class CartModule { }
