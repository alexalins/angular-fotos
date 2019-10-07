import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';
import { ErrosModule } from './erros/erros.module';
import { FilterByDescriptionPipe } from './pipes/filter-by-description.pipe';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PagesModule,
    ErrosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
