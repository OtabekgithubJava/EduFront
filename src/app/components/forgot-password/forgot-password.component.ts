import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
    email: string = '';
  constructor(private router: Router){
    
  }
    sendCode(){
        if (this.email === null || this.email.indexOf('@') < 0) {
            alert('Please enter a valid email address');
            this.email = '';
            this.router.navigate(['/forgot-password']);
            return;
        }
        this.router.navigate(['/receive-email-code']);
    }
}
