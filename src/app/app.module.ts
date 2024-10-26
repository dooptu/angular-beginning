// app/app.module.ts
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    // other components
  ],
  imports: [
    BrowserModule,
    AuthenticationModule, // Import the AuthenticationModule here
    // other modules
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule {}
