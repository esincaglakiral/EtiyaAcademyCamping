import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductCardComponent } from './component/product-card/product-card.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { SaleDirective } from './directives/sale/sale.directive';
import { KdvPipe } from './pipes/kdv/kdv.pipe';
import { ProductFilteredPipe } from './pipes/productFiltered/product-filtered.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProductCardComponent, ProductListComponent, SaleDirective, KdvPipe, ProductFilteredPipe],
  imports: [
    CommonModule,
    ProductsRoutingModule, FormsModule
  ],
  exports:[ProductCardComponent,ProductListComponent]
})
export class ProductsModule { }
