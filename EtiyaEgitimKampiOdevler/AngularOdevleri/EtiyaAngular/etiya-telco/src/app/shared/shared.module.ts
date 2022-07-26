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
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent, 
    DashboardLayoutComponent, 
    MainLayoutComponent, 
  
    ],

  imports: [
    CommonModule,
    MenubarModule,
    InputTextModule, 
    BrowserModule,  
    BrowserAnimationsModule,
    ButtonModule, 
    // CoreModule, 
    // RouterModule
  ],
  
  exports: [
    NavbarComponent,
    FooterComponent, 
    DashboardLayoutComponent, 
    MainLayoutComponent, 
  ]
})
export class SharedModule { }
