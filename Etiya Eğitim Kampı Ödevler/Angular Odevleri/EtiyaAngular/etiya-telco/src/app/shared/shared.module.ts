import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MenubarModule} from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [FooterComponent,NavbarComponent, MainLayoutComponent, DashboardLayoutComponent],
  imports: [CommonModule,MenubarModule,InputTextModule, ButtonModule, CoreModule],
  exports: [NavbarComponent,FooterComponent, MainLayoutComponent, DashboardLayoutComponent]
})
export class SharedModule { }
