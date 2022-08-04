import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './features/products/component/product-list/product-list.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductCardComponent } from './features/products/component/product-card/product-card.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesComponent } from './components/category-list/categories/categories.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardCustomersComponent } from './pages/dashboard-customers/dashboard-customers.component';
import { UpdateCustomersComponent } from './pages/update-customers/update-customers.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ProductsDashboardComponent } from './pages/products-dashboard/products-dashboard.component';
import { KdvPipe } from './features/products/pipes/kdv/kdv.pipe';
import { SaleDirective } from './features/products/directives/sale/sale.directive';
import { UpdateProductsComponent } from './pages/update-products/update-products.component';
import { ProductFilteredPipe } from './features/products/pipes/productFiltered/product-filtered.pipe';
import { ClickProductCardDirective } from './directives/clickProductCard/click-product-card.directive';
import { MultipleDirective } from './directives/multiple/multiple.directive';
import { WelcomeDirective } from './directives/welcome/welcome.directive';
import { ProductsModule } from './features/products/products.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';





@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    HomepageComponent,
    NavbarComponent,
    CategoriesComponent,
    RegisterComponent,
    DashboardCustomersComponent,
    UpdateCustomersComponent,
    ProductsDashboardComponent,
    UpdateProductsComponent,
    ClickProductCardDirective,
    MultipleDirective,
    WelcomeDirective,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ProductsModule,
    CoreModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
