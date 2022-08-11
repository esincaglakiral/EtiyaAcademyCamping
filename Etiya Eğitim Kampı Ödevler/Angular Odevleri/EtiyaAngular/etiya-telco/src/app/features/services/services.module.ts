import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesRoutingModule } from './services-routing.module';
import { ServicesListComponent } from './components/services-list/services-list.component';
import { ServicesUpdateComponent } from './components/services-update/services-update.component';

@NgModule({
  declarations: [
    ServicesListComponent,
    ServicesUpdateComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }
