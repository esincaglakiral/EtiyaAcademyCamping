import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesComponent } from './components/category-list/categories/categories.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardCustomersComponent } from './pages/dashboard-customers/dashboard-customers.component';
import { UpdateCustomersComponent } from './pages/update-customers/update-customers.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ProductsDashboardComponent } from './pages/products-dashboard/products-dashboard.component';
import { KdvPipe } from './pipes/kdv/kdv.pipe';
import { SaleDirective } from './directives/sale/sale.directive';

import { UpdateProductsComponent } from './pages/update-products/update-products.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AddProductComponent,
    HomepageComponent,
    NavbarComponent,
    ProductCardComponent,
    CategoriesComponent,
    RegisterComponent,
    DashboardCustomersComponent,
    UpdateCustomersComponent,
    ProductsDashboardComponent,
    KdvPipe,
    SaleDirective,
    UpdateProductsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
