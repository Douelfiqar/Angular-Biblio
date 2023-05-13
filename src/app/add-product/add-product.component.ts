import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ServiceService } from './service.service';
import { BiblioServiceService } from '../biblio/service/biblio-service.service';
import { BiblioComponent } from '../biblio/biblio.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  @ViewChild('CloseBookBtn') CloseBookBtn!: ElementRef;

  addBook: FormGroup;
  
  constructor(private _fb: FormBuilder, private bookService:ServiceService, private biblioService:BiblioComponent){
    this.addBook = this._fb.group({
      sujet: '',
      titre: '',
      auteur: '',
      categorie: '',
      nombreExemplaire: null,
      dateEdition: '',
      prixLocation: null,
      linkImage: '',
      shortDesc: '',
    })
  }

  onSubmit() {
    if(this.addBook.valid){
      this.bookService.addBook(this.addBook.value).subscribe(()=>{
        this.CloseBookBtn.nativeElement.click();
        this.biblioService.functionOnInit();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        
        
      })
    }  
  }

  
}
