import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './category-list/categories/categories.component';


@NgModule({
  declarations: [
    CategoriesComponent,
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ],
  exports:[
    CategoriesComponent
  ]
})
export class CategoriesModule { }
