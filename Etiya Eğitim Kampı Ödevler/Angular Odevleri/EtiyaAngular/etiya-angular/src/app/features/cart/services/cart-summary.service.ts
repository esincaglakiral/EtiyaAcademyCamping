import { EventEmitter, Injectable } from '@angular/core';
import { CartShowModel } from '../models/cartShowModel';
import { CartShowModels } from '../models/cartShowModels';

@Injectable({
  providedIn: 'root'
})
export class CartSummaryService {

  addProductToCart : EventEmitter<any> = new EventEmitter;
  constructor() { }

  get CartItems():any{
    return CartShowModels
  }

  set CartItems(value:CartShowModel){

    let item = CartShowModels.find((c) => c.product.id === value.product.id);
    if (item) ++item.quantity;
    else CartShowModels.push(value);  
    this.addProductToCart.emit(CartShowModels)

  }

  deleteProductFromCart(cartItem:CartShowModel){

    let item : any = CartShowModels.find(c=>c.product.id===cartItem.product.id);
    CartShowModels.splice(CartShowModels.indexOf(item),1); 
    
  }
}
