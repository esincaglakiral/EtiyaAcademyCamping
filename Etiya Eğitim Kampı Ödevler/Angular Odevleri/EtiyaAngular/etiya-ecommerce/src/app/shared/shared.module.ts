import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';



@NgModule({
  declarations: [
    NavbarComponent,
    MainLayoutComponent,
    DashboardLayoutComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[NavbarComponent, MainLayoutComponent,DashboardLayoutComponent]
})
export class SharedModule { }
