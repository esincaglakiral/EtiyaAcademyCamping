import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/models/categories';
import { Product } from 'src/app/models/product';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'etiya-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // productList: any[] = [];
     productList!: Product[];
     cartItems:any[]=[];
    //  categoryList!: Categories[];
    // httpClient!: HttpClient;

     
  constructor(private productsService: ProductsService) {
    // *dependency ınjection ile angular otomatik olarak inject eder.
    // this.httpClient = this.httpClient;
    // , private categoriesService: CategoriesService
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
 
  //  getCategories(){
  //   this.categoriesService.getCategoryList().subscribe((response) => {
  //    this.categoryList = response;
  //   });
  //  }



  addToCard(product:Product){
  console.log(product);

    let itemToFind = this.cartItems.find((c) => c == product.name);
    if(!itemToFind){
      this.cartItems.push(product.name);  
    }
    else{
      alert("Ürün zaten eklenmiştir!!")
    }
  }

}
