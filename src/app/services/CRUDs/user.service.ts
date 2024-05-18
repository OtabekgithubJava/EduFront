import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://localhost:7250/api/';
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'User/GetAllUsers').pipe(
      map((response) => {
        console.log(response[0].userName);
        console.log(response[0].exp);
        console.log(response[0].country);
        console.log(response[0].photoPath);
        return response;
      })
    )
  }

  // getById(): Observable<any> {
  //   return this.http.get<any>(this.apiUrl + 'User/GetAllUsers').pipe(
  //     map((response) => {
  //       console.log(response.userName);
  //       console.log(response.exp);
  //       console.log(response.country);
  //       console.log(response.photoPath);
  //       return response;
  //     })
  //   )
  // }


}
