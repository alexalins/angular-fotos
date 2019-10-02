import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FotosRoutingModule } from './fotos-routing.module';
import { FotoComponent } from './foto/foto.component';

@NgModule({
  declarations: [FotoComponent],
  imports: [
    CommonModule,
    FotosRoutingModule,
  ],
  exports: [FotoComponent]
})
export class FotosModule { }
