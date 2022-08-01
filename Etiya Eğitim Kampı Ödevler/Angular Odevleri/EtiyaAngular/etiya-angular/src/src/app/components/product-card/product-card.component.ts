import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'etiya-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product!:Product;
  @Output() onBtnClick:any = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log(this.product)
  }

  addToCardEvent(product:Product){
    this.onBtnClick.emit(this.product);
  }

}
