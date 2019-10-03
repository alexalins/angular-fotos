import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FotoListComponent } from './foto-list/foto-list.component';
import { FotoComponent } from '../componentes/foto/foto.component';
import { FotoFormComponent } from './foto-form/foto-form.component';

@NgModule({
  declarations: [FotoListComponent, FotoComponent, FotoFormComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
