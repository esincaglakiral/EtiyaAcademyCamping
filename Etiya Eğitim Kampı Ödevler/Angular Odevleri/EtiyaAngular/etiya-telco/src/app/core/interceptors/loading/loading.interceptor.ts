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
  constructor(private loadService: LoadingService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.method != 'GET'){
      
      this.loadService.setIsLoading(true);
    } 

    return next.handle(request).pipe(
      finalize(() => {
        setTimeout(() => {
          this.loadService.setIsLoading(false);
        }, 3500);
      })
    );
  }
}