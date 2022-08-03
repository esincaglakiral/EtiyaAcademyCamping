import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products/products.service';

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

     
  constructor(private productsService: ProductsService) {
    // *dependency ınjection ile angular otomatik olarak inject eder.

   }

  ngOnInit(): void {
    setTimeout(() => {
      this.getProducts();
    }, 2000);
    
  }

  getProducts(){
   this.productsService.getList().subscribe((response) => {
    this.productList = response;
    //ürünlerin gelmesini istemezsek response yerine [] koyarız
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
