import { Component } from '@angular/core';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrl: './messaging.component.scss',
})
export class MessagingComponent {
  toggleGroup: string = '';
  icon: string = 'fa-solid fa-chevron-down group4';
  toggle() {
    this.toggleGroup = this.toggleGroup === 'd-none' ? '' : 'd-none';
    this.icon = this.icon === 'fa-solid fa-chevron-up group4' ? 'fa-solid fa-chevron-down group4' : 'fa-solid fa-chevron-up group4';
  }
}
