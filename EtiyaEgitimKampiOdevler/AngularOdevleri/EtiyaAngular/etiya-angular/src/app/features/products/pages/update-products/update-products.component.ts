import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products/products.service';



@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.css']
})
export class UpdateProductsComponent implements OnInit {

  productForm!: FormGroup;
  product!: Product;

  constructor(private formBuilder:FormBuilder,private activatedRoute:ActivatedRoute,
    private productService: ProductsService, private router:Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this. getProductIdFromRoute();
  }

  createProductForm(): void{ 
    this.productForm = this.formBuilder.group({
      name: [this.product?.name  || '',Validators.required],
      supplierId: [this.product?.supplierId || '',Validators.required],
      categoryId: [this.product?.categoryId || '',Validators.required],
      quantityPerUnit: [this.product?.quantityPerUnit || '',Validators.required],
      unitPrice: [this.product?.unitPrice || '',Validators.required],
      unitsInStock: [this.product?.unitsInStock  || '',Validators.required],
      unitsOnOrder: [this.product?.unitsOnOrder || '',Validators.required],
      reorderLevel: [this.product?.reorderLevel  || '',Validators.required],
      discontinued: [this.product?.discontinued  || '',Validators.required],
      
    })    
  } 

  getProductIdFromRoute(){
    this.activatedRoute.params.subscribe((param) => {
      if(param['id']) this.getProductById(param['id']);
        // this.chooseId = param['id'];
      else{
        this.createProductForm();

      }
    });
  }

  getProductById(id:number){
    console.log("getProductById çalıştı");
    this.productService.getProductById(id).subscribe((p) =>{
      this.product = p;
      this.createProductForm();
    });
  }

  save(){
    if(this.product){
      this.updateProduct();
    } 
    else{
      this.addProduct();
    }
  }

  updateProduct(){
    if(!this.productForm.valid){
      alert("There are still empty fields, please fill in all required fields!!");
      return;
    }
    const product: Product = Object.assign({id: this.product.id}, this.productForm.value);
   
    this.productService.updateProduct(product).subscribe(() => {
      setTimeout(() => {
        this.router.navigateByUrl("/products-dashboard/products");
        this.toastr.success("Product Update!!", "Update");
      }, 1000);
    });
  }

  addProduct(){
    if(!this.productForm.valid){
      this.toastr.warning("please fill in the required fields!", "Empty Fields")
      return;
    }

    const product:Product = {
      ...this.productForm.value,
    }

    this.productService.addProduct(product).subscribe(response =>{
      setTimeout(() => {
        this.toastr.success("Product succesfully add!","Add")
        this.router.navigateByUrl("/products-dashboard/products");
      }, 1000);
    })
  }


}
