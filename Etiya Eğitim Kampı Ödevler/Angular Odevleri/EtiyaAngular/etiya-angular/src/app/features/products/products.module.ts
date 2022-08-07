import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ClickProductCardDirective } from './directives/clickProductCard/click-product-card.directive';
import { SaleDirective } from './directives/sale/sale.directive';
import { KdvPipe } from './pipes/kdv/kdv.pipe';
import { ProductFilteredPipe } from './pipes/productFiltered/product-filtered.pipe';
import { CoreModule } from 'src/app/core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsDashboardComponent } from './pages/products-dashboard/products-dashboard.component';
import { UpdateProductsComponent } from './pages/update-products/update-products.component';
import { AddProductComponent } from './pages/add-product/add-product.component';


@NgModule({
  declarations: [
    ProductsDashboardComponent,
    UpdateProductsComponent,
    ProductCardComponent,
    ProductListComponent,
    AddProductComponent,
    ClickProductCardDirective,
    SaleDirective,
    KdvPipe,
    ProductFilteredPipe,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    SharedModule,
    CoreModule,
    ReactiveFormsModule
  ],
  exports: [
    ProductListComponent,
    ProductCardComponent  
  ]
})
export class ProductsModule { }
