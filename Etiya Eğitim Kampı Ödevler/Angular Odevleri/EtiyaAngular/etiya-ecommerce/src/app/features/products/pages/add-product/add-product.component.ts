import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from '../../services/products.service';

@Component({
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  addProductForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.createAddProductForm();
  }

  createAddProductForm() {
    this.addProductForm = this.formBuilder.group({
      name: [''],
      reOrderLevel: [0],
      unitsInOrder: [0],
      unitsInStock: [0],
      unitPrice: [0],
      quantityPerUnit: [0],
    });
  }

  addProduct() {
    this.productService.add(this.addProductForm.value).subscribe((response) => {
      console.log(response);
    });
  }
}
