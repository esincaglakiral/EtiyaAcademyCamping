import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {path:'', redirectTo: 'homepage', pathMatch: 'full'},
  {path:'homepage', component: HomepageComponent, pathMatch: 'full'},
  {path:'about', component:AboutComponent, pathMatch: 'full'},
  {path:'projects', component:ProjectsComponent, pathMatch: 'full'},
  {path:'contact', component:ContactComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
