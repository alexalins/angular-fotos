import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FotoComponent } from './foto/foto.component';
import { ListaComponent } from './lista/lista.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    FotoComponent,
    ListaComponent,
    LoadButtonComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FotoComponent,
    ListaComponent,
    LoadButtonComponent,
    SearchComponent
  ]
})
export class ComponentesModule { }
