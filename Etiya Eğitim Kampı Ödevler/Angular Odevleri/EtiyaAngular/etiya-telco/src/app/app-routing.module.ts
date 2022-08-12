import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesListComponent } from './features/services/components/services-list/services-list.component';

const routes: Routes = [
  {path:'', pathMatch:'full', component:ServicesListComponent} //routing yapısı
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
