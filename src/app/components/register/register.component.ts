import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private authService: AuthService, private router: Router) {
    localStorage.clear();
  }
  // onSubmit(form: NgForm) {
  //   console.log('Form submitted:', form.value);
  //   // Process form data here (e.g., send to server)
  //   form.reset(); // Reset form after submission
  // }
  fullname = '';
  username = '';
  country = '';
  email = '';
  password = '';

  containerClass: string = 'login-container';

  addClass() {
    this.containerClass = 'login-container right-panel-active';
  }
  removeClass() {
    this.containerClass = 'login-container';
  }

  login() {
    const data = {
      email: this.email,
      password: this.password,
    };

    this.authService.login(data).subscribe({
      next: (response) => {
        console.log(response.isSucceed);
        if (response.isSucceed === true) {
          const decodedToken: any = jwtDecode(response.token);
          localStorage.setItem('userId', decodedToken.id);
          console.log(decodedToken);
          if (decodedToken.Role === 'Admin') {
            this.router.navigate(['/category']);
          } else if (decodedToken.Role === 'User' || decodedToken.Role === "" ) {
            this.router.navigate(['/overview']);
          }

          this.email = '';
          this.password = '';
        } else {
          console.log('keldi lekin response null');
          // alert('Oops! Something went wrong. Please try again.');
          console.log(response);
          this.email = '';
          this.password = '';
        }
      },
      error: (err) => {
        alert(err.error.message);
        console.log('vashshe error');
        // alert('Oops! Something went wrong. Please try again.');
        this.email = '';
        this.password = '';
      },
    });
  }

  register() {
    const data = {
      fullName: this.fullname,
      username: this.username,
      country: this.country,
      email: this.email,
      password: this.password,
    };

    this.authService.register(data).subscribe({
      next: (response) => {
        if (response.isSuccess) {
          this.removeClass();
          this.fullname = '';
          this.country = '';
          this.username = '';
          this.email = '';
          this.password = '';
        } else {
          alert('Oops !, Can you try again');
          this.fullname = '';
          this.country = '';
          this.username = '';
          this.email = '';
          this.password = '';
        }
      },
      error: (err) => {
        // alert(err.message)
        alert('Oops !, Can you try again');
        this.fullname = '';
        this.country = '';
        this.username = '';
        this.email = '';
        this.password = '';
      },
    });
  }
}
