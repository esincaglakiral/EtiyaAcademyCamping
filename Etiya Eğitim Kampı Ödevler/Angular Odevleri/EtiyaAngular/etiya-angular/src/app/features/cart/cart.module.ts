import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import { CartShowComponent } from './components/cart-show/cart-show.component';
import { CartSummaryService } from './services/cart-summary.service';



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
  ],
  providers:[CartSummaryService]
})
export class CartModule { }
