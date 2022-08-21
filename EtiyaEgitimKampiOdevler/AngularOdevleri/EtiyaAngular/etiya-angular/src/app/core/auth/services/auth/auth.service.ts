import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { MessageResultModel } from 'src/app/core/models/messageResultModel';
import { LocalStrorageService } from 'src/app/core/storage/services/local-storage/local-strorage.service';
import { environment } from 'src/environments/environment';
import { TokenUserModel } from '../../models/tokenUserModel';
import { UserForLoginModel } from '../../models/userForLoginModel';
import { UserLoginResponseModel } from '../../models/userLoginResponseModel';
import { removeTokenUserModel, setTokenUserModel } from '../../store/actions/auth.actions';
import { AuthStates } from '../../store/auth.reducers';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apicontrollerUrl:string = `${environment.apiUrl}/auth`;

  tokenUserModel$: Observable<TokenUserModel | undefined> = this.store
  .select(state => state.appAuth)
  .pipe(map(state => state.tokenUserModel));


  constructor(
    private httpClient:HttpClient, 
    private localStrorageService:LocalStrorageService, 
    private jwtHelperService:JwtHelperService,
    private store: Store<AuthStates>
    ) { }

  login(userForLoginModel:UserForLoginModel): Observable<UserLoginResponseModel>{
    return this.httpClient.post<UserLoginResponseModel>(`${this.apicontrollerUrl}/login`,userForLoginModel)
  }

  saveAuth(userLoginResponseModel:UserLoginResponseModel){
    this.localStrorageService.set('token',userLoginResponseModel.access_token)
    this.setTokenUserModel(this.jwtHelperService.decodeToken(this.jwtHelperService.tokenGetter()));

  }

  test():Observable<MessageResultModel>{
    return this.httpClient.get<MessageResultModel>(`${this.apicontrollerUrl}/test`)
  }

  get isAuthhenticated(): boolean{
    if(!this.jwtHelperService.tokenGetter()) return false;
    if(this.jwtHelperService.isTokenExpired()) return false;
    return true;
  }

  setTokenUserModel(tokenUserModel : TokenUserModel){
    this.store.dispatch(setTokenUserModel({tokenUserModel}));
  }

  removeUserToken() {
    this.store.dispatch(removeTokenUserModel());
  }

  logOut(){
    this.removeUserToken();
    return this.localStrorageService.remove('token')
  }
}

export function tokenGetter(){
  return localStorage.getItem('token')
}
