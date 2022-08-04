import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { IfNotDirective } from './directives/ifNot/if-not.directive';



@NgModule({
  declarations: [IfNotDirective],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports:[IfNotDirective]
})
export class CoreModule { }
