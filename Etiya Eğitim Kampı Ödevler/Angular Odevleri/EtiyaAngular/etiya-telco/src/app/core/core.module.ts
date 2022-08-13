import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './interceptors/loading/loading.interceptor';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  providers : [
    {provide: HTTP_INTERCEPTORS, useClass : LoadingInterceptor, multi : true}
  ]
})
export class CoreModule { }
