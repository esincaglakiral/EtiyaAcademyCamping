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
    //  status:string = "init";

     
  constructor(private productsService: ProductsService) {
    // *dependency ınjection ile angular otomatik olarak inject eder.

   }

  ngOnInit(): void {
    setTimeout(() => {
      this.getProducts();
    }, 1500);

        //const value: string = 'A';
    // if (value === 'B') console.log('B', value);
    // else if (value === 'A') console.log('A', value);
    // else console.log('else', value);
    // switch (value) {
    //   case 'B':
    //     console.log('B', value);
    //     break;
    //   case 'A':
    //     console.log('A', value);
    //     break;

    //   default:
    //     console.log('default', value);
    //     break;
    // }
    
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
