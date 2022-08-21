import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesListComponent } from './components/services-list/services-list.component';
import { ServicesUpdateComponent } from './components/services-update/services-update.component';

const routes: Routes = [
  {path:'services',component:ServicesListComponent},
  {path:'service/addService',component:ServicesUpdateComponent},
  {path:'service/:id',component:ServicesUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
