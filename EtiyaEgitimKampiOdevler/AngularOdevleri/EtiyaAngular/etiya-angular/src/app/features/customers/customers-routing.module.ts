import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardCustomersComponent } from './pages/dashboard-customers/dashboard-customers.component';
import { UpdateCustomersComponent } from './pages/update-customers/update-customers.component';

const routes: Routes = [
  {path: 'dashboard-customers/customer/addCustomer',component:UpdateCustomersComponent },
  {path:'dashboard-customers/customers', component:DashboardCustomersComponent},
  {path: 'dashboard-customers/customer/:id',component:UpdateCustomersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
