import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../services/loading/loading.service';

@Component({
  selector: 'etiya-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.css']
})
export class LoadingPageComponent implements OnInit {
  isLoading: boolean = false;
  constructor(private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.pageToLoadingStatus();
  }
  pageToLoadingStatus() {
    this.loadingService.isLoading.subscribe((value) => {
      this.isLoading = value;
    });
  }

}
