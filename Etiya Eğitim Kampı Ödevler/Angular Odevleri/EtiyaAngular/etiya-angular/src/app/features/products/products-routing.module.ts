import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { ProductsDashboardComponent } from './pages/products-dashboard/products-dashboard.component';
import { UpdateProductsComponent } from './pages/update-products/update-products.component';

const routes: Routes = [
  // {path:"add-product",component:AddProductComponent, canActivate:[LoginGuard]},
  {path: 'add-product', component:AddProductComponent},
  {path: 'products-dashboard/products',component:ProductsDashboardComponent },
  {path: 'products-dashboard/product/addProduct', component:UpdateProductsComponent},
  {path: 'products-dashboard/product/:id', component:UpdateProductsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
