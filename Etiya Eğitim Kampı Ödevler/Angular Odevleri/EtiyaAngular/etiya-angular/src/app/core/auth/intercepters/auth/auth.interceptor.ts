import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private jwtHelperService:JwtHelperService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {  //kimliğimiz yanımızda yok
    const token = this.jwtHelperService.tokenGetter();
    const newRequest = request.clone(  // buradan itibaren kimlik yanımızda ve backende kimliğimiz ile istek atabiliriz
      {
        headers : request.headers.set('Authorization', `Bearer ${token}`)
      }
    )
    return next.handle(newRequest);
  }
}
