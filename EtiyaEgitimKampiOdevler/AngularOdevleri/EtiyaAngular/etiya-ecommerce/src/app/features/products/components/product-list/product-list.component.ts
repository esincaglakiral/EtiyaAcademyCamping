import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CategoriesService } from 'src/app/features/categories/services/categories/categories.service';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'etiya-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnChanges {
  @Input() categoryId!: number;
  productList!: Product[];
  fetchStatus = 'pending';
  pageSize = 10;
  constructor(private productsService: ProductsService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.getAllProductsByCategoryId();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.getAllProducts();
    }, 2000);
  }

  getAllProductsByCategoryId() {
    if (!this.categoryId || this.categoryId <= 0) {
      this.getAllProducts();
      return;
    }
    this.fetchStatus = 'pending';
    setTimeout(() => {
      this.productsService.getAllByCategories(this.categoryId).subscribe(
        (response) => {
          this.productList = response;
          this.fetchStatus = 'loaded';
        },
        (error) => {
          this.fetchStatus = 'error';
        }
      );
    }, 2000);
  }

  getAllProducts() {
    this.productsService.getAll().subscribe(
      (response) => {
        this.productList = response;
        this.fetchStatus = 'loaded';
      },
      (error) => {
        this.fetchStatus = 'error';
      }
    );
  }
}
