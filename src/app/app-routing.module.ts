import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FotoListComponent } from './pages/foto-list/foto-list.component';
import { FotoFormComponent } from './pages/foto-form/foto-form.component';
import { NotFoundComponent } from './erros/not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'user/padrao', pathMatch: 'full'},
  {path: 'user/padrao', component: FotoListComponent},
  {path: 'foto/add', component: FotoFormComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
