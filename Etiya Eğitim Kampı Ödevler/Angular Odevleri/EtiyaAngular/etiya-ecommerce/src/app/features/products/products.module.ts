import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsRoutingModule} from './products-routing.module';
import {ProductCardComponent} from './components/product-card/product-card.component';
import {ProductListComponent} from './components/product-list/product-list.component';

@NgModule({
  declarations: [ProductCardComponent, ProductListComponent],
  imports: [CommonModule, ProductsRoutingModule],
  exports: [ProductListComponent],
})
export class ProductsModule {}