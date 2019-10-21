import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentesModule } from 'src/app/shared/componentes/componentes.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ComponentesModule,
    RouterModule
  ]
})
export class SigninModule { }
