import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MessageResultModel } from '../../models/messageResultModel';
import { LocalStorageService } from '../../storage/services/local-storage.service';
import { TokenUserModel } from '../models/tokenUserModel';
import { UserForLogin } from '../models/userForLogin';
import { UserLoginResponse } from '../models/userLoginResponse';
import { removeTokenUserModel, setTokenUserModel } from '../store/actions/auth.actions';
import { AuthStates } from '../store/auth.reducer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tokenUserModel$: Observable<TokenUserModel | undefined> = this.store
  .select(state => state.appAuth)
  .pipe(map(state => state.tokenUserModel));


apicontrollerUrl:string = `${environment.apiUrl}/auth`;


constructor(
  private httpClient:HttpClient,
  private localStrorageService:LocalStorageService,
  private jwtHelperService:JwtHelperService,
  private store: Store<AuthStates>,
  private router: Router
  ) { }

login(userForLoginModel:UserForLogin): Observable<UserLoginResponse>{
  return this.httpClient.post<UserLoginResponse>(`${this.apicontrollerUrl}/login`,userForLoginModel)
}

saveToken(userLoginResponseModel:UserLoginResponse){
  this.localStrorageService.set('token',userLoginResponseModel.access_token);
  console.log(this.jwtHelperService.decodeToken(this.jwtHelperService.tokenGetter()))
  this.setTokenUserModel(this.jwtHelperService.decodeToken(this.jwtHelperService.tokenGetter()));    //token'ı decode ediyoruz
}

test():Observable<MessageResultModel>{
  return this.httpClient.get<MessageResultModel>(`${this.apicontrollerUrl}/test`)
}

get isAuthhenticated(): boolean{
  if(!this.jwtHelperService.tokenGetter()) return false;
  if(this.jwtHelperService.isTokenExpired()) return false;
  return true;
}

logOut(){
  this.localStrorageService.remove('token')
  this.removeTokenUserModel();
  this.router.navigateByUrl('');
}

setTokenUserModel(tokenUserModel: TokenUserModel) {
  this.store.dispatch(setTokenUserModel({ tokenUserModel }));
}

removeTokenUserModel(){
  this.store.dispatch(removeTokenUserModel());
}

}

export function tokenGetter(){
return localStorage.getItem('token')
}
