import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, Subject } from 'rxjs';
import { LocalStorageService } from 'src/app/core/storage/services/local-storage/local-storage.service';
import { environment } from 'src/environments/environment';
import { UserForLogin } from '../../models/userForLogin';
import { UserLoginResponse } from '../../models/userLoginResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiControllerUrl:string = `${environment.apiUrl}/auth`


  constructor(private httpClient:HttpClient,
    private localStorageService:LocalStorageService,
    private jwtHelperService:JwtHelperService,
    private router:Router) { }

  login(userForLoginModel:UserForLogin):Observable<UserLoginResponse>{

    const subject = new Subject<UserLoginResponse>();

    this.httpClient.post<UserLoginResponse>(this.apiControllerUrl + '/login',
    userForLoginModel).subscribe(response =>{

      if (!response.success) return;

      this.saveToken(response)
      subject.next(response);
    });

    return subject.asObservable();
  }

  saveToken(userLoginResponse:UserLoginResponse){
    this.localStorageService.set('token',userLoginResponse.access_token);

  }

  get isAuthenticated():boolean{
    if(this.jwtHelperService.isTokenExpired()) return false;

    return true;
  }

  logOut(){
    this.localStorageService.remove('token')
    this.router.navigateByUrl('/login')
  }
}
