import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz-crud',
  templateUrl: './quiz-crud.component.html',
  styleUrl: './quiz-crud.component.scss'
})
export class QuizCRUDComponent {
  title = "";
  courseId = "";
  
  submit() {
    this.title = "";
  }
}
