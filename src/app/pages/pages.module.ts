import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FotoListComponent } from './foto-list/foto-list.component';
import { FotoComponent } from '../componentes/foto/foto.component';

@NgModule({
  declarations: [FotoListComponent, FotoComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
