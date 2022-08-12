import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MenubarModule} from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';



@NgModule({
  declarations: [FooterComponent,NavbarComponent, DashboardLayoutComponent],
  imports: [CommonModule,MenubarModule,InputTextModule, ButtonModule],
  exports: [NavbarComponent,FooterComponent, DashboardLayoutComponent]
})
export class SharedModule { }
