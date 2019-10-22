import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentesModule } from 'src/app/shared/componentes/componentes.module';

@NgModule({
  declarations: [SignupComponent],
  imports: [
    ComponentesModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class SignupModule { }
