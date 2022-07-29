import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  {path:'', redirectTo: 'homepage', pathMatch: 'full'},
  {path:'homepage', component: HomepageComponent, pathMatch: 'full'},
  {path:'add-product', component:AddProductComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
