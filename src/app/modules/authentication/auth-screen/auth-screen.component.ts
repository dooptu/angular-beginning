import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { SignInComponent } from '../sign-in/sign-in.component';

@Component({
  selector: 'app-auth-screen',
  templateUrl: './auth-screen.component.html',
  styleUrl: './auth-screen.component.scss'
})
export class AuthScreenComponent {

  @ViewChild(SignInComponent) signInComponent!: SignInComponent;
  parentInput: string ='';

  constructor() {
  }

  toggleChangeAuthState: boolean = true;
  emailChangeSignIn: string = '';
  passwordChangeSignIn: string = '';

  onGetPassWordChange(value: string){
    this.passwordChangeSignIn = value;
  }

  onGetEmailChange(value: string) {
    this.emailChangeSignIn = value;
  }

  triggerReset(){
    this.signInComponent.resetForm();
  }

  passFncToChild(){
    window.alert('Auth screen function');
  }


}
