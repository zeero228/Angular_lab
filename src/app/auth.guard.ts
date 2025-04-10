import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private apiService: ApiService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const isLoggedIn = sessionStorage.getItem('token') !== null;
    const isLoginPage = state.url === '/login';

    if (isLoginPage) {
      if (isLoggedIn) {
        alert('Ви вже увійшли в систему. Перенаправлення на домашню сторінку...');
        return this.router.createUrlTree(['/home']);
      } else {
        return true;
      }
    } else {
      if (!isLoggedIn) {
        return this.router.createUrlTree(['/login']);
      } else {
        return true;
      }
    }
  }
}
