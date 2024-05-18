import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizCRUDComponent } from './quiz-crud.component';

describe('QuizCRUDComponent', () => {
  let component: QuizCRUDComponent;
  let fixture: ComponentFixture<QuizCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizCRUDComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuizCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
