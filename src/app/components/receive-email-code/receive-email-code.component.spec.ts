import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveEmailCodeComponent } from './receive-email-code.component';

describe('ReceiveEmailCodeComponent', () => {
  let component: ReceiveEmailCodeComponent;
  let fixture: ComponentFixture<ReceiveEmailCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReceiveEmailCodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReceiveEmailCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
