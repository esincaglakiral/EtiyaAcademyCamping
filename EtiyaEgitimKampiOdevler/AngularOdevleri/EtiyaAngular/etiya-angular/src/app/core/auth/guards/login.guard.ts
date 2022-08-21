import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private authService:AuthService,private router:Router,private toastrService:ToastrService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!this.authService.isAuthhenticated) {
      this.router.navigateByUrl("login")
      this.toastrService.warning('Please sign in to continue!')
      return false;
        
    }
    
    this.toastrService.success('Please sign in to continue!')
    return true;
  }
  
}
