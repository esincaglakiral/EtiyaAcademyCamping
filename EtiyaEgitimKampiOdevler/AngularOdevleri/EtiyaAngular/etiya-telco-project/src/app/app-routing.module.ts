import { CustomerDashboardComponent } from './features/customers/pages/customer-dashboard/customer-dashboard.component';
import { ShowcaseComponent } from './shared/pages/showcase/showcase.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path:'',redirectTo:'showcase',pathMatch:'full'},
  // {path:'showcase',component:ShowcaseComponent}
  {
    path: 'dashboard',
    component: CustomerDashboardComponent,
    children: [
       {path: '', component: CustomerDashboardComponent, pathMatch: 'full'},
      {
        path: 'customers',
        loadChildren: () =>
          import('./features/customers/customers-routing.module').then(
            m => m.CustomersRoutingModule
          ),
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
