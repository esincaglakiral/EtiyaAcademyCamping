import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { finalize, Observable, tap } from 'rxjs';
import { LoadingService } from '../../services/loading/loading.service';


@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  
  constructor(private loadingService: LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if((request.method == "POST" || request.method == "PUT" || request.method == "DELETE")){
      this.loadingService.handleRequest('plus');
    return next
      .handle(request)
      .pipe(
        finalize(this.finalize.bind(this))
      );
    }
    return next.handle(request)
    
  }

  finalize = (): void =>{
    setTimeout(() => {
    this.loadingService.handleRequest()
  }, 1000)
  } 
}
