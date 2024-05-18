import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePartComponent } from './course-part.component';

describe('CoursePartComponent', () => {
  let component: CoursePartComponent;
  let fixture: ComponentFixture<CoursePartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursePartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoursePartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
