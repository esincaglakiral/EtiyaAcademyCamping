import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { Category } from '../../models/category';
import { CategoriesService } from '../../services/categories/categories.service';

@Component({
  selector: 'app-categories-menu-bar',
  templateUrl: './categories-menu-bar.component.html',
  styleUrls: ['./categories-menu-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.Default, //todo: research onPush
})
export class CategoriesMenuBarComponent implements OnInit {
  categories!: Category[];
  items!: MegaMenuItem[];

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoriesService.getList().subscribe((response) => {
      this.categories = response;

      this.configureItems();
    });
  }

  configureItems() {
    this.items = this.categories.map((category) => {
      // /categories/1 // Route params
      // /categories?category=1 // Query params
      return {
        label: category.name,
        routerLink: [''],
        queryParams: { categoryId: category.id },
      };
    });
    this.items.unshift({
      label: 'All',
      routerLink: [''],
    });
  }
}
