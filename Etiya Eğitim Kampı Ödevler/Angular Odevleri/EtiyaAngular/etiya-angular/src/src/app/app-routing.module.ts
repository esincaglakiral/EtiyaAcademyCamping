import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { DashboardCustomersComponent } from './pages/dashboard-customers/dashboard-customers.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RegisterComponent } from './pages/register/register.component';
import { UpdateCustomersComponent } from './pages/update-customers/update-customers.component';

const routes: Routes = [
  {path:'', redirectTo: 'homepage', pathMatch: 'full'},
  {path:'homepage', component: HomepageComponent},
  {path:'add-product', component:AddProductComponent},
  {path:'register', component:RegisterComponent},
  {path:'dashboard-customers', component:DashboardCustomersComponent},
  {path: 'dashboard-customers/customer/:id',component:UpdateCustomersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
