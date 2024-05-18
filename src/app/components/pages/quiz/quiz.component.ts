import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss',
})
export class QuizComponent {
  @ViewChild('checkAnswer') myDivElement!: ElementRef;

  selected: string = 'form-item';
  selected2: string = 'form-item';
  selected3: string = 'form-item';
  selected4: string = 'form-item';
  selected5: string = 'form-item';
  check: string = 'btn1  cursor';
  disabled: string = '';

  ngAfterViewInit() {
    this.myDivElement.nativeElement.disabled = true;
  }

  answer() {
    console.log('answer');
  }


  addClass() {
    this.selected = 'form-item form-item-selected';
    this.selected2 = 'form-item';
    this.selected3 = 'form-item';
    this.selected4 = 'form-item';
    this.selected5 = 'form-item';
    this.disabled = 'disabled';
    this.check = 'btn1 cursor check';
    this.myDivElement.nativeElement.disabled = false;
  }
  addClass2() {
    this.selected2 = 'form-item form-item-selected';
    this.selected = 'form-item';
    this.selected3 = 'form-item';
    this.selected4 = 'form-item';
    this.selected5 = 'form-item';
    this.disabled = 'disabled';
    this.check = 'btn1 cursor check';
    this.myDivElement.nativeElement.disabled = false;
  }
  addClass3() {
    this.selected3 = 'form-item form-item-selected';
    this.selected = 'form-item';
    this.selected2 = 'form-item';
    this.selected4 = 'form-item';
    this.selected5 = 'form-item';
    this.disabled = 'disabled';
    this.check = 'btn1 cursor check';
    this.myDivElement.nativeElement.disabled = false;
  }
  // ==================
  addClass4() {
    this.selected4 = 'form-item form-item-selected';
    this.selected = 'form-item';
    this.selected2 = 'form-item';
    this.selected3 = 'form-item';
    this.selected5 = 'form-item';
  }
  addClass5() {
    this.selected5 = 'form-item form-item-selected';
    this.selected = 'form-item';
    this.selected2 = 'form-item';
    this.selected3 = 'form-item';
    this.selected4 = 'form-item';
  }
}
