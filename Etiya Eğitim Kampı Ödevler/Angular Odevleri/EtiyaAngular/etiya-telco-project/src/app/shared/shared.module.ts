import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayTitleComponent } from './components/overlay-title/overlay-title.component';

@NgModule({
  declarations: [
    OverlayTitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    OverlayTitleComponent
    
  ]
})
export class SharedModule { }
