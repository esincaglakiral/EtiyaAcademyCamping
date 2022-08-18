import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { finalize, Observable, tap } from 'rxjs';
import { LoadingService } from '../../services/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.method != 'GET') this.loadingService.setIsLoading(true);

    return next.handle(request).pipe(
      finalize(() => {
        setTimeout(() => {
          this.loadingService.setIsLoading(false);
        }, 3000);
      })
    );
  }
}
