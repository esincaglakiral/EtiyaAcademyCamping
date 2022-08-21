import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './features/common/pages/homepage/homepage.component';
import { DashboardLayoutComponent } from './shared/layout/dashboard-layout/dashboard-layout.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent
    , children: [
      { path: '', 
      component:HomepageComponent
      }
    ],
  },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent
    , children: [
      { path: 'homepage', 
      component:HomepageComponent
      },
      {
        path: 'service',
        loadChildren: () =>
          import('./features/services/services-routing.module').then(
            m => m.ServicesRoutingModule
          ),
      },
      {
        path: 'user-login',
        loadChildren: () =>
          import('./core/auth/auth-routing.module').then(
            m => m.AuthRoutingModule
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