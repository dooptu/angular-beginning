// app/app.module.ts
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
@NgModule({
  declarations: [
    AppComponent,
    // other components
  ],
  imports: [
    BrowserModule,
    AuthenticationModule, // Import the AuthenticationModule here
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule {}
