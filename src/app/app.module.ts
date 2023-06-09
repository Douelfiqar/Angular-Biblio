import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BiblioComponent } from './biblio/biblio.component';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { BookComponent } from './book/book.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // <-- import the module
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AddProductComponent } from './add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UpdateBookComponent } from './biblio/update-book/update-book.component';
import { PretationBookComponent } from './preter/pretation-book/pretation-book.component';
import { LocationComponent } from './location/location.component';
import { ListeReservationComponent } from './liste-reservation/liste-reservation.component';
import { GestionUsersComponent } from './gestion-users/gestion-users.component';
import { AddClientAdherentComponent } from './gestion-users/add-client-adherent/add-client-adherent.component';
import { RapportComponent } from './rapport/rapport.component';
import { DetailsUserComponent } from './gestion-users/details-user/details-user.component';

@NgModule({
  declarations: [
    AppComponent,
    BiblioComponent,
    BookComponent,
    AddProductComponent,
    UpdateBookComponent,
    PretationBookComponent,
    LocationComponent,
    ListeReservationComponent,
    GestionUsersComponent,
    AddClientAdherentComponent,
    RapportComponent,
    DetailsUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FontAwesomeModule,
    SweetAlert2Module,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
