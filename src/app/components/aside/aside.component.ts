import { Component } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss',
})
export class AsideComponent {
  isAdmin: boolean = false;
  token: string = localStorage.getItem('accessToken')!;
  role: any = '';

  constructor() {
    this.role = jwtDecode(this.token);
    localStorage.getItem('role') === 'admin'
      ? (this.isAdmin = true)
      : (this.isAdmin = false);
    this.role = this.role.Role;
    console.log(this.role);
  }
}
