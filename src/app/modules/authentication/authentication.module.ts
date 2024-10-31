// app/modules/authentication/authentication.module.ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { authenticationRoutes } from './authentication.route';
import { SharedCommonModule } from '../../common/common.module';
import { AuthScreenComponent } from './auth-screen/auth-screen.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
@NgModule({
  declarations: [SignInComponent, SignUpComponent, AuthScreenComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    RouterModule.forChild(authenticationRoutes),
    SharedCommonModule,
    FormsModule,
    NzButtonModule,
    NzInputModule,
    NzIconModule,
    NzCardModule,
    NzFormModule,
  ],
  exports: [RouterModule],  // Export if needed in other modules
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AuthenticationModule {}
