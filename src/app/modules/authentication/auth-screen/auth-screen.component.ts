import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-screen',
  templateUrl: './auth-screen.component.html',
  styleUrl: './auth-screen.component.scss'
})
export class AuthScreenComponent {
  toggleChangeAuthState: boolean;
  
constructor(){
  this.toggleChangeAuthState = false;
}

}