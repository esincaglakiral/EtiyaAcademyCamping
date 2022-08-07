import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductsService } from 'src/app/features/products/services/products/products.service';
import { Product } from '../../models/product';



@Component({
  selector: 'app-products-dashboard',
  templateUrl: './products-dashboard.component.html',
  styleUrls: ['./products-dashboard.component.css']
})
export class ProductsDashboardComponent implements OnInit {

  productsList! : Product[];
  
  constructor(private productService:ProductsService, private router:Router,  private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getList().subscribe((response) =>{
      this.productsList = response;
    })
  }

  removeProduct(id:number){
    if(confirm("Are you sure you want to remove this product?")){
      this.productService.deleteProduct(id).subscribe(()=>{
        this.toastr.success("Product Remove!!", "Delete");
        setTimeout(() => {
          this.getProducts();
        }, 1000);
      })
    } 
  }

  chooseProductId(chooseProduct: Product):void{
    this.router.navigateByUrl(`products-dashboard/product/${chooseProduct.id}`);
 }
}
