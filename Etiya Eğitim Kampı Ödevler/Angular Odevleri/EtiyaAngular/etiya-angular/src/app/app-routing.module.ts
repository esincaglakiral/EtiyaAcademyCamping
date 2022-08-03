import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { DashboardCustomersComponent } from './pages/dashboard-customers/dashboard-customers.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductsDashboardComponent } from './pages/products-dashboard/products-dashboard.component';
// import { RegisterComponent } from './pages/register/register.component';
import { UpdateCustomersComponent } from './pages/update-customers/update-customers.component';
import { UpdateProductsComponent } from './pages/update-products/update-products.component';

const routes: Routes = [
  {path:'', redirectTo: 'homepage', pathMatch: 'full'},
  {path:'homepage', component: HomepageComponent},
  {path:'add-product', component:AddProductComponent},
  {path: 'dashboard-customers/customer/addCustomer',component:UpdateCustomersComponent },
  {path:'dashboard-customers/customers', component:DashboardCustomersComponent},
  {path: 'dashboard-customers/customer/:id',component:UpdateCustomersComponent },
  {path: 'products-dashboard/products',component:ProductsDashboardComponent },
  {path: 'products-dashboard/product/id', component:UpdateProductsComponent},
  {path: 'products-dashboard/product/addProduct', component:UpdateProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
