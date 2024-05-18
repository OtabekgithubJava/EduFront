import { Component } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent {
  question: string = '';
  optionA: string = '';
  optionB: string = '';
  optionC: string = '';
  correctOption: string = '';
  exp: string = '';

  submit() {
    this.question = '';
    this.optionA = '';
    this.optionB = '';
    this.optionC = '';
    this.correctOption = '';
    this.exp = '';
  }
}
