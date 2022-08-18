import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  constructor(){}

  public numberOfRequests: number = 0;
  public showLoadingOverlay: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  handleRequest = (value: string = 'minus'): void => {
    this.numberOfRequests = (value === 'plus') ? this.numberOfRequests + 1 : this.numberOfRequests - 1;
    this.showLoadingOverlay.next(this.numberOfRequests > 0);
  };
}