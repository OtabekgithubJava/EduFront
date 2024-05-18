import { Component } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {
  courseName: string = '';
  description: string = '';
  totalTime: string = '';
  price: string = '';
  language: string = '';
  teacherName: string = '';



  submit() {
    // Add your submit logic here
    this.courseName = '';
    this.description = '';
    this.totalTime = '';
    this.price = '';
    this.language = '';
    this.teacherName = '';
  }
}
