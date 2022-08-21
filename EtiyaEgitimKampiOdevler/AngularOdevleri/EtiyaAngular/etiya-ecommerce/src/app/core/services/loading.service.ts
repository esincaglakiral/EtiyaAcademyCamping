import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() {}

  setIsLoading(loading: boolean) {
    this.isLoading.next(loading);
  }
}
