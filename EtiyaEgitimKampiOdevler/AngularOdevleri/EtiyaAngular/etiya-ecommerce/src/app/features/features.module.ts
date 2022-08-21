import { ProductsModule } from './products/products.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { HomepageComponent } from './common/pages/homepage/homepage.component';
import { SharedModule } from '../shared/shared.module';
import { CategoriesModule } from './categories/categories.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    HttpClientModule,
    ProductsModule,
    SharedModule,
    CategoriesModule,
  ],
  exports: [],
})
export class FeaturesModule {}
