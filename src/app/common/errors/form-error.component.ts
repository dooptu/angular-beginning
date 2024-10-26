// app/shared/form-error/form-error.component.ts
import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-error',
  template: `
    <span *ngIf="control?.touched && control?.errors">
      <ng-container *ngFor="let error of getErrors()">
        {{ error }}<br />
      </ng-container>
    </span>
  `,
  styles: [`
    span {
      color: rgba(220, 53, 69, 0.5);
      font-size: 15px; // Customize font size
    }
  `]
})
export class FormErrorComponent {
  @Input() control: AbstractControl | null = null; // Allow null

  getErrors(): string[] {
    const errorMessages: string[] = [];
    if (this.control?.errors) {
      if (this.control.errors['required']) {
        errorMessages.push('This field is required.');
      }
      if (this.control.errors['email']) {
        errorMessages.push('Please enter a valid email address.');
      }
      if (this.control.errors['minlength']) {
        errorMessages.push(`Minimum length is ${this.control.errors['minlength'].required} characters.`);
      }
      // Add more error conditions as needed
    }
    return errorMessages;
  }
}
