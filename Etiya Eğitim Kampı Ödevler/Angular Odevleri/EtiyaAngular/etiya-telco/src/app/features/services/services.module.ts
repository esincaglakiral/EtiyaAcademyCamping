import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesRoutingModule } from './services-routing.module';
import { ServicesListComponent } from './components/services-list/services-list.component';
import { ServicesUpdateComponent } from './components/services-update/services-update.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ServicesListComponent,
    ServicesUpdateComponent,

  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  exports:[
    ServicesListComponent,
    ServicesUpdateComponent
  ]
})
export class ServicesModule { }
