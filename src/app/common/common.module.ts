// app/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormErrorComponent } from './errors/form-error.component';

@NgModule({
  declarations: [
    FormErrorComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    FormErrorComponent
  ]
})
export class SharedCommonModule { }
