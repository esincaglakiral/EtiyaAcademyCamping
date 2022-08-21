import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FilterProductPipe } from './pipes/filter-product.pipe';
import { CardSkeletonComponent } from '../../shared/components/card-skeleton/card-skeleton.component';
import { CoreModule } from 'src/app/core/core.module';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { InputTextModule } from 'primeng/inputtext';

import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ProductCardComponent,
    ProductListComponent,
    FilterProductPipe,
    AddProductComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    CoreModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
  ],
  exports: [ProductListComponent],
})
export class ProductsModule {}
