import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  constructor(private router: Router) {}

  public canActivate(): boolean | UrlTree {
    const user = localStorage.getItem('user');
    return user && user.length
      ? true
      : this.router.createUrlTree(['/login']);
  }
}
