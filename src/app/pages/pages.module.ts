import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FotoListComponent } from './foto-list/foto-list.component';
import { FotoComponent } from '../componentes/foto/foto.component';
import { FotoFormComponent } from './foto-form/foto-form.component';
import { ListaComponent } from '../componentes/lista/lista.component';
import { SearchComponent } from '../componentes/search/search.component';
import { FilterByDescriptionPipe } from '../pipes/filter-by-description.pipe';
import { LoadButtonComponent } from '../componentes/load-button/load-button.component';
import { FotoFormModule } from './foto-form/foto-form.module';
import { FotoListModule } from './foto-list/foto-list.module';
import { ComponentesModule } from '../componentes/componentes.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FotoFormModule,
    FotoListModule,
    ComponentesModule,
  ]
})
export class PagesModule { }
