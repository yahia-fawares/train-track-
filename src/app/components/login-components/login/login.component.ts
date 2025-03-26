import { Component } from '@angular/core';
import { AuthService } from '../../../Services/auth.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormControl, Validators, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public auth: AuthService, public router: Router) { }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  // Get error messages
  getErrorMessage() {
    if (this.loginForm.controls.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.loginForm.controls.email.hasError('email') ? 'Not a valid email' : '';
  }

  // Login function
  Login() {
    // debugger
    if (this.loginForm.invalid) {
      console.log("Form is invalid");
      return;
    }

    const email = this.loginForm.controls.email.value;
    const password = this.loginForm.controls.password.value;

    console.log("AuthService Instance:", this.auth);
    console.log("Email Value:", email);
    console.log("Password Value:", password);

    if (!this.auth) {
      console.error("AuthService is not injected!");
      return;
    }

    // Proceed with login
    this.auth.login(email ?? '', password ?? '');
  }

  // Navigate to the Register page
  GoToRegister() {
    this.router.navigate(['register']);
  }
}
