import {Component, OnInit} from '@angular/core';
import {CategoriesService} from 'src/app/features/categories/services/categories/categories.service';
import {Product} from '../../models/product';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'etiya-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productList!: Product[];
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productsService.getAll().subscribe(response => {
      this.productList = response;
    });
  }
}