import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const isUser = this.authService.getAccessToken();
    if (isUser) {
      // authorised so return true
      return true;
    } else {

      // not logged in so redirect to login page with the return url
      this.router.navigate(['/login']);
      return false;
    }
  }

}
