import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FotoListComponent } from './pages/foto-list/foto-list.component';
import { FotoFormComponent } from './pages/foto-form/foto-form.component';
import { NotFoundComponent } from './erros/not-found/not-found.component';
import { PhotoListResolver } from './shared/resolver/PhotoListResolver';
import { SigninComponent } from './pages/signin/signin.component';

const routes: Routes = [
  {path: '', component: SigninComponent},
  {path: 'user/:userName', component: FotoListComponent, resolve: { photos: PhotoListResolver }},
  {path: 'foto/add', component: FotoFormComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
