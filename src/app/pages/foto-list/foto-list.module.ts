import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FotoListComponent } from './foto-list.component';
import { FilterByDescriptionPipe } from './../../shared/pipes/filter-by-description.pipe';
import { ComponentesModule } from './../../shared/componentes/componentes.module';

@NgModule({
  declarations: [
    FotoListComponent,
    FilterByDescriptionPipe
  ],
  imports: [
    CommonModule,
    ComponentesModule,
  ],
  exports: [FotoListComponent]
})
export class FotoListModule { }
