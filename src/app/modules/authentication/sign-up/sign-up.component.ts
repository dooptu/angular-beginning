import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Constant
const MAX_FULL_NAME_LENGTH = 100;
const MIN_FULL_NAME_LENGTH = 100;
const MAX_PASSWORD_LENGTH = 20;
const MIN_PASSWORD_LENGTH = 12;

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})

export class SignUpComponent {

  signUpForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signUpForm = this.fb.group({
      fullName: [
        '',
        [
          Validators.required,
          Validators.maxLength(MAX_FULL_NAME_LENGTH),
          Validators.minLength(MIN_FULL_NAME_LENGTH),
        ]
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(MIN_PASSWORD_LENGTH),
          Validators.maxLength(MAX_PASSWORD_LENGTH),
        ]
      ],
    })
  }

  /**
   * Log data form
   */
  _handleOnSubmit() {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm);
    }
  }
}
