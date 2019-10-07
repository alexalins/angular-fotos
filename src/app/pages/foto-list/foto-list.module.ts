import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterByDescriptionPipe } from 'src/app/pipes/filter-by-description.pipe';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { FotoListComponent } from './foto-list.component';

@NgModule({
  declarations: [
    FotoListComponent,
    FilterByDescriptionPipe
  ],
  imports: [
    CommonModule,
    ComponentesModule
  ],
  exports: [FotoListComponent]
})
export class FotoListModule { }
