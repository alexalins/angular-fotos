import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FotoComponent } from './foto/foto.component';
import { ListaComponent } from './lista/lista.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { SearchComponent } from './search/search.component';
import { CardComponent } from './card/card.component';
import { DarkenOnHoverModule } from '../directives/darken-on-hover/darken-on-hover.module';
import { VmessageComponent } from './vmessage/vmessage.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { CardGrayComponent } from './card-gray/card-gray.component';

@NgModule({
  declarations: [
    FotoComponent,
    ListaComponent,
    LoadButtonComponent,
    SearchComponent,
    CardComponent,
    VmessageComponent,
    HeaderComponent,
    CardGrayComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    DarkenOnHoverModule,
  ],
  exports: [
    FotoComponent,
    ListaComponent,
    LoadButtonComponent,
    SearchComponent,
    CardComponent,
    VmessageComponent,
    HeaderComponent,
    CardGrayComponent
  ]
})
export class ComponentesModule { }
