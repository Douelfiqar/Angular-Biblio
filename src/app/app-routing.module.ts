import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiblioComponent } from './biblio/biblio.component';
import { BookComponent } from './book/book.component';
import { GestionUsersComponent } from './gestion-users/gestion-users.component';
import { RapportComponent } from './rapport/rapport.component';

const routes: Routes = [
  {path: 'biblio', component: BiblioComponent},
  {path: 'biblio/book/:id', component: BookComponent},
  {path: 'users', component:GestionUsersComponent},
  {path: 'rapport', component:RapportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
