import {SkeletonModule} from 'primeng/skeleton';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './components/navbar/navbar.component';
import {CardSkeletonComponent} from './components/card-skeleton/card-skeleton.component';
import {CoreModule} from '../core/core.module';
import {RouterModule} from '@angular/router';
import { DashboardHomeComponent } from './pages/dashboard-home/dashboard-home/dashboard-home.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';


@NgModule({
  declarations: [
    NavbarComponent,
    MainLayoutComponent,
    DashboardLayoutComponent,
    CardSkeletonComponent,
    FooterComponent,
    DashboardHomeComponent,
  ],
  imports: [CommonModule, SkeletonModule, CoreModule, RouterModule],
  exports: [
    NavbarComponent,
    MainLayoutComponent,
    DashboardLayoutComponent,
    CardSkeletonComponent,
  ],
})
export class SharedModule {}
