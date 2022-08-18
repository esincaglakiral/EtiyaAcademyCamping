import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../services/loading/loading.service';

@Component({
  selector: 'etiya-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.css']
})
export class LoadingPageComponent {

  isLoading: boolean = true;

  constructor(private loadingService: LoadingService) {

    this.loadingService.showLoadingOverlay.subscribe(this.showLoadingOverlay.bind(this));

   }

   showLoadingOverlay = (value: boolean): void => {
    this.isLoading = value;
   }
   

}
