import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-title',
  templateUrl: './navbar-title.component.html',
  styleUrl: './navbar-title.component.scss',
})
export class NavbarTitleComponent {
  user: any;
  constructor() {
    localStorage.getItem('user');
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }
}
