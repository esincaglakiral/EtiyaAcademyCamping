import { Component, OnInit } from '@angular/core';
import { CartShowModel } from '../../models/cartShowModel';
import { CartSummaryService } from '../../services/cart-summary.service';

@Component({
  selector: 'app-cart-show',
  templateUrl: './cart-show.component.html',
  styleUrls: ['./cart-show.component.css']
})
export class CartShowComponent implements OnInit {

  cartShowSummary!:CartShowModel[];

  constructor(private cartSummaryService:CartSummaryService) { }

  ngOnInit(): void {
    this.showCartSummary();
  }

  showCartSummary() {
    this.cartSummaryService.addProductToCart.subscribe(cartItem =>{
      this.cartShowSummary = cartItem
    })
  }

  deleteProductFromCart(cartItems:CartShowModel){
    this.cartSummaryService.deleteProductFromCart(cartItems)
  }


}
