import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { IfNotDirective } from './directives/ifNot/if-not.directive';
import { MultipleDirective } from './directives/multiple/multiple.directive';
import { WelcomeDirective } from './directives/welcome/welcome.directive';
import { StorageModule } from './storage/storage.module';
import { AuthModule } from './auth/auth.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandlingInterceptor } from './interceptors/error-handling/error-handling.interceptor';


@NgModule({
  declarations: [IfNotDirective,MultipleDirective,WelcomeDirective,],
  imports: [
    CommonModule,
    CoreRoutingModule,
    AuthModule,
    StorageModule
  ],
  exports:[IfNotDirective,MultipleDirective,WelcomeDirective],
  providers:[
    {provide: HTTP_INTERCEPTORS, useClass: ErrorHandlingInterceptor, multi:true}
  ]
})
export class CoreModule { }
