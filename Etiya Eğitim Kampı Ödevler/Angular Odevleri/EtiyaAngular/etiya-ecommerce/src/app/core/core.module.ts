import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CreateFakeArrayPipe } from './pipes/create-fake-array.pipe';


@NgModule({
  declarations: [CreateFakeArrayPipe],
  imports: [CommonModule, CoreRoutingModule],
  exports: [CreateFakeArrayPipe],
})
export class CoreModule { }
