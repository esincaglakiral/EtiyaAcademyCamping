import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoriesRoutingModule} from './categories-routing.module';
import {CategoriesMenuBarComponent} from './components/categories-menu-bar/categories-menu-bar.component';
import {CategoriesService} from './services/categories/categories.service';
import {MegaMenuModule} from 'primeng/megamenu';

const primeNgModules = [MegaMenuModule];

@NgModule({
  declarations: [CategoriesMenuBarComponent],
  imports: [CommonModule, CategoriesRoutingModule, ...primeNgModules],
  exports: [CategoriesMenuBarComponent],
  providers: [{provide: CategoriesService, useClass: CategoriesService}],
})
export class CategoriesModule {}
