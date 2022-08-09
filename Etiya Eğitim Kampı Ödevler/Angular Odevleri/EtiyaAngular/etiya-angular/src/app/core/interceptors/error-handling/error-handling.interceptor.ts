import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
                        .pipe(catchError((errorResponse: HttpErrorResponse) =>{
                          let errorMessage = "";

                          if(errorResponse.error instanceof ErrorEvent){
                            errorMessage = `Client Side Error , ${errorResponse.error.message}`;
                          }else{
                            errorMessage = `Server Side Error , ${errorResponse.error.message} Status Code: ${errorResponse.status}`;
                          }

                          return throwError(() => new Error(errorMessage))
                        }));
    
  }
}
