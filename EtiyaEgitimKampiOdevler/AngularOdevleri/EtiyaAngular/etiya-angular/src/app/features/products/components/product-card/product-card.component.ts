import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartSummaryService } from 'src/app/features/cart/services/cart-summary.service';
import { Product } from '../../models/product';


@Component({
  selector: 'etiya-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product!:Product;
  @Output() onBtnClick:any = new EventEmitter();
  onMouseColor: string = 'blue';
  isCard: boolean = true;
  onSaleText: string = 'İndirim!!!';
  
  constructor(private cartSummaryService:CartSummaryService) { }

  ngOnInit(): void {
    console.log(this.product)
  }

  addToCardEvent(product:Product){
    this.onBtnClick.emit(this.product);
    this.cartSummaryService.CartItems = {product:this.product,quantity:1}
  }

}
