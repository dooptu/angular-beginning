import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  @Output() emailChanged = new EventEmitter<string>();
  @Output() passwordChanged = new EventEmitter<string>();
  @Output() fncTriggerFromParent = new EventEmitter<void>();
  @Input() dataFromParent: string = '';

  signInForm: FormGroup;
  showPassWord: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

  }

  onEmailChange(event: Event){
    const value = (event?.target as HTMLInputElement).value;
    this.emailChanged.emit(value);
  }

  onPasswordChange(event: Event){
    const value = (event?.target as HTMLInputElement).value;
    this.passwordChanged.emit(value);
  }

  onSubmit(): void {
    if (this.signInForm.valid) {
      const { email, password } = this.signInForm.value;
      console.log('Email:', email);
      console.log('Password:', password);
      this.passwordChanged = password;
      this.router.navigate(['/admin/dashboard'])
    }
  }

  resetForm() {
    this.signInForm.reset(); // Method to reset the form
    console.log("Form reset");
  }

  onFnTriggerFromParent(){
    this.fncTriggerFromParent.emit();
  }

  togglePasswordVisibility(){
    this.showPassWord = !this.showPassWord;
  }
}
