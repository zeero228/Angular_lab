import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private apiService: ApiService, private router: Router) { }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.apiService.authStatus$.pipe(
      take(1),
      map(isLoggedIn => {
        if (isLoggedIn) {
          return true;
        }
        // Якщо користувач не авторизований, перенаправляємо на сторінку логіну
        return this.router.createUrlTree(['/login']);
      })
    );
  }
}
