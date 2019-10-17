import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FotoFormModule } from './foto-form/foto-form.module';
import { FotoListModule } from './foto-list/foto-list.module';
import { ComponentesModule } from '../shared/componentes/componentes.module';
import { SigninModule } from './signin/signin.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FotoFormModule,
    FotoListModule,
    SigninModule,
    ComponentesModule,
  ]
})
export class PagesModule { }
