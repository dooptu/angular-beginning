// app/modules/authentication/authentication.route.ts
import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthScreenComponent } from './auth-screen/auth-screen.component';

export const authenticationRoutes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign', component: AuthScreenComponent }
];
