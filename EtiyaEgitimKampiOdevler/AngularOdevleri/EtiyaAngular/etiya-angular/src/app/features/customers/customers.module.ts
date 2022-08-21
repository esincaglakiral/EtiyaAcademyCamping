import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { UpdateCustomersComponent } from './pages/update-customers/update-customers.component';
import { DashboardCustomersComponent } from './pages/dashboard-customers/dashboard-customers.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UpdateCustomersComponent,
    DashboardCustomersComponent,
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    ReactiveFormsModule
  ]
})
export class CustomersModule { }
