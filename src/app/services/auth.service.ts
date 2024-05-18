import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable, map } from 'rxjs';
import { Register } from '../models/register';
import { Response } from '../models/response';
import { Login } from '../models/login';
import { TokenModel } from '../models/token-model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://edu-api.tohirjon.uz/api/';

  constructor(private router: Router, private http: HttpClient) {}
  decodedToken: any;
  tokenKey = 'accessToken';
  role: string = '';

  decodeToken(): any {
    try {
      return jwtDecode(localStorage.getItem(this.tokenKey)!);
      // console.log(this.decodedToken);
    } catch (error) {
      console.error('Error decoding token:', error);
      console.log('Token decode qilinmadi');
      return null;
    }
  }

  register(data: any): Observable<Response> {
    console.log('ishladi');
    return this.http.post<Response>(`${this.apiUrl}Auth/Register`, data).pipe(
      map((response) => {
        console.log('keldi');
        if (response.isSuccess) {
          console.log('Registered');
        }
        return response;
      })
    );
  }

  login(data: Login): Observable<TokenModel> {
    return this.http.post<TokenModel>(`${this.apiUrl}Auth/Login`, data).pipe(
      map((response) => {
        console.log(response);
        if (response && response.isSucceed === true) {
          console.log('Login');
          localStorage.setItem(this.tokenKey, response.token);
          
          this.decodedToken = this.decodeToken();
          // localStorage.setItem('userId', this.decodeToken);
          console.log(this.decodeToken);
        }
        return response;
      })
    );
  }

  isAuthenticated(): boolean {
    console.log('Is authenticated ga keldi');
    this.decodedToken = this.decodeToken();
    if (this.decodedToken) {
      const expireDate = new Date(this.decodedToken.expireDate * 1000); // Convert expiration timestamp to Date object
      const currentDate = new Date();
      console.log('hozir exp date tekshiriladi');
      return expireDate > currentDate; // Compare expiration date with current date
    }
    console.log('keldi lekin decodedToken null');
    return false; // Handle case where decodedToken is null or undefined
  }

  isUser(): any {
    this.decodedToken = this.decodeToken();
    if (this.decodedToken != 'User') {
      this.router.navigate(['/register']);
    }
  }
}
