import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MenubarModule} from 'primeng/menubar';


@NgModule({
  declarations: [FooterComponent,NavbarComponent],
  imports: [CommonModule,MenubarModule],
  exports: [NavbarComponent,FooterComponent]
})
export class SharedModule { }
