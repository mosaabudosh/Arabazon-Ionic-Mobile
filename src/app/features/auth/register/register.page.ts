
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false
})
export class RegisterPage {

  registerForm: FormGroup;

  passwordVisible = false;
  confirmPasswordVisible = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group(
      {
        fullName: ['', [Validators.required, Validators.minLength(3)]],

        email: ['', [Validators.required, Validators.email]],

        phone: ['', Validators.required],

        password: ['', [
          Validators.required,
          Validators.minLength(8)
        ]],

        confirmPassword: ['', Validators.required],

        agreeTerms: [false, Validators.requiredTrue]
      },
      {
        validators: this.passwordMatchValidator
      }
    );
  }

  passwordMatchValidator(
    control: AbstractControl
  ): ValidationErrors | null {

    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (!password || !confirmPassword) {
      return null;
    }

    return password === confirmPassword
      ? null
      : { passwordMismatch: true };
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const {
      confirmPassword,
      agreeTerms,
      ...registrationData
    } = this.registerForm.getRawValue();

    // TODO: Connect registrationData to your existing AuthService.
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

}
