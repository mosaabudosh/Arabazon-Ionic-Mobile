
import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
export interface LoginCredentials {
  identifier: string;
  password: string;
  rememberMe: boolean;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage {

  loginForm: FormGroup;

  passwordVisible = false;

  @Output()
  loginRequested = new EventEmitter<LoginCredentials>();

  @Output()
  forgotPasswordRequested = new EventEmitter<void>();

  @Output()
  registerRequested = new EventEmitter<void>();

  constructor(private formBuilder: FormBuilder,
    private router: Router) {

    this.loginForm = this.formBuilder.group({
      identifier: ['', Validators.required],

      password: ['', Validators.required],

      rememberMe: [false]
    });

  }

  get identifierControl() {
    return this.loginForm.get('identifier');
  }

  get passwordControl() {
    return this.loginForm.get('password');
  }

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  onSubmit(): void {

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const credentials =
      this.loginForm.getRawValue() as LoginCredentials;

    // Connect this event to your existing authentication service.
    this.loginRequested.emit(credentials);
  }

  onForgotPassword(): void {
    this.forgotPasswordRequested.emit();
  }

  onRegister(): void {
    this.registerRequested.emit();
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }

}
