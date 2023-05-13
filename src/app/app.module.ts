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
import { FormsModule } from '@angular/forms'; // Import FormsModule here

@NgModule({
  declarations: [
    AppComponent,
    BiblioComponent,
    BookComponent,
    AddProductComponent
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
