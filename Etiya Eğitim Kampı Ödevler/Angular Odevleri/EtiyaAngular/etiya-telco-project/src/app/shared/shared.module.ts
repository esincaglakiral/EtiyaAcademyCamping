import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayTitleComponent } from './components/overlay-title/overlay-title.component';
import { SideFilterComponent } from './components/side-filter/side-filter.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InfoTitleComponent } from './components/info-title/info-title.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { SettingsMenuComponent } from './components/settings-menu/settings-menu.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { TableInfoComponent } from './components/table-info/table-info.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContainerComponent } from './components/container/container.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { WarningMessageComponent } from './components/warning-message/warning-message.component';
import { AddNewItemButtonComponent } from './components/add-new-item-button/add-new-item-button.component';
import { ShowcaseComponent } from './pages/showcase/showcase.component';




@NgModule({
  declarations: [
    OverlayTitleComponent,
    SideFilterComponent,
    NavbarComponent,
    InfoTitleComponent,
    MainLayoutComponent,
    SettingsMenuComponent,
    UserInfoComponent,
    TableInfoComponent,
    NotFoundComponent,
    ContainerComponent,
    ConfirmComponent,
    WarningMessageComponent,
    AddNewItemButtonComponent,
    ShowcaseComponent,
 
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OverlayTitleComponent,
    SideFilterComponent,
    NavbarComponent,
    InfoTitleComponent,
    MainLayoutComponent,
    SettingsMenuComponent,
    UserInfoComponent,
    ContainerComponent,
    NotFoundComponent,
    TableInfoComponent,
    ConfirmComponent,
    WarningMessageComponent
    
  ]
})
export class SharedModule { }