import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FotoListComponent } from './pages/foto-list/foto-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'user/padrao', pathMatch: 'full'},
  {path: 'user/padrao', component: FotoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
