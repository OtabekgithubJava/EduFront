import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receive-email-code',
  templateUrl: './receive-email-code.component.html',
  styleUrl: './receive-email-code.component.scss'
})



export class ReceiveEmailCodeComponent {
code = 0;

constructor(private router: Router) {
  
}
confirmCode() {
  if (this.code == 123456) {
    this.router.navigate(['/confirm-password']);
    
}
}
}
