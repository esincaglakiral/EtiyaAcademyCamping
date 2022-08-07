import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products/products.service';


@Component({
  selector: 'etiya-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

     productList!: Product[];
     cartItems:any[]=[];
     today: number = Date.now();
     filterProductName:string="";
    //  status:string = "init";

     
  constructor(private productsService: ProductsService) {
    // *dependency ınjection ile angular otomatik olarak inject eder.

   }

  ngOnInit(): void {
    setTimeout(() => {
      this.getProducts();
    }, 1500);
  }

  getProducts() {
    // this.status = 'loading';
    this.productsService.getList().subscribe(response => {
      this.productList = response;
      // setTimeout(() => (this.status = 'loaded'), 1000);
    });
  }

  addToCard(product:Product){
  console.log(product);

    let itemToFind = this.cartItems.find((pr) => pr == product.name);
    if(!itemToFind){
      this.cartItems.push(product.name);  
    }
    else{
      alert("Ürün zaten eklenmiştir!!")
    }
  }

}
