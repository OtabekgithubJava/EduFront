import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Token } from '../../models/token';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('accessToken');
    
    if (token) {
      const decoded: Token = jwtDecode(token);

      const expireDate = new Date(decoded.exp * 1000); // Convert expiration timestamp to Date object
      const currentDate = new Date();
      
      if (expireDate > currentDate) {
        // Token is not expired
        return true;
      } else {
        // Token is expired, navigate to login page
        this.router.navigateByUrl('/login');
        return false;
      }
    } else {
      // Token is null, navigate to login page
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
