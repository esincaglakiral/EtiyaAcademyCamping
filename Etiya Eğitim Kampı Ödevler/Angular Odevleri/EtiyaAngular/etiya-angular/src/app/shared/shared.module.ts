import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SharedRoutingModule } from './shared-routing.module'
import { CategoriesModule } from '../features/categories/categories.module';
import { ProductsModule } from '../features/products/products.module';
import { BrowserModule } from '@angular/platform-browser';
import { CartModule } from '../features/cart/cart.module';


@NgModule({
  declarations: [
    NavbarComponent,    
    HomepageComponent,
  ],
  
  imports: [
    CommonModule,
    SharedRoutingModule,    
    CategoriesModule,
    ProductsModule,
    BrowserModule,
    CartModule,
  ],
  exports:[NavbarComponent]
})
export class SharedModule { }
