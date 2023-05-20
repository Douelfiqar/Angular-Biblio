import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BiblioServiceService } from './service/biblio-service.service';
import { shuffle, slice } from 'lodash';
import { faPen, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { UpdateBookComponent } from './update-book/update-book.component';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-biblio',
  templateUrl: './biblio.component.html',
  styleUrls: ['./biblio.component.css']
})
export class BiblioComponent implements OnInit {

  updateBook!: FormGroup;
  book!:any;
  @ViewChild('CloseBookBtn1') CloseBookBtn!: ElementRef;

  constructor(private biblioService:BiblioServiceService, private _fb: FormBuilder){
    this.updateBook = this._fb.group({
      id: '',
      sujet: '',
      titre: '',
      auteur: '',
      categorie: '',
      nombreExemplaire: '',
      dateEdition: '',
      prixLocation: '',
      linkImage: '',
      shortDesc: '',
    })
  }

  faTrash = faTrash;
  faPlus = faPlus;
  faUpdate = faPen;

  public docs:any;
  public currentCateg = 0
  public p:number=1;
  public itemsPerPage:number = 9
  public totalProduct:any;

  public categories:string[] = []; 
  public randomCategories: any;
  public randomNames: any;
  public names:string[] = [];


  public ngOnInit(): void {
    this.functionOnInit();
  }

  public functionOnInit(){
    this.biblioService.getDocs().subscribe((data:any)=>{

      this.docs = data.sort((a, b) => b.id - a.id);

      this.totalProduct = data.length;

      for(let d of data){
        this.categories.push(d.categorie)
        this.names.push(d)
      }
      
      this.randomCategories = slice(shuffle(this.categories), 0, 5);
      this.randomNames = slice(shuffle(this.names), 0, 15);

    })
  }

    public filterByCateg(categ:string){

      if(categ === 'All'){
        this.functionOnInit();
      }else{
        this.biblioService.getDocsByCateg(categ).subscribe((data:any)=>{
        this.docs = data

        })
      }

    }

    //Delete Iteam
  sweet(id:number){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.biblioService.deleteDocsById(id).subscribe(()=>{
          this.docs = this.docs.filter(item => item.id !== id);
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        })
        
      }
    })
  }

  SortHigherPrice(){
    this.docs = this.docs.sort((a, b) => b.prixLocation - a.prixLocation);
  }

  SortLowerPrice(){
    this.docs = this.docs.sort((a, b) => a.prixLocation  - b.prixLocation);
  }

  SortAlpha(){
    this.docs = this.docs.sort((a, b) => a.titre.localeCompare(b.titre));
  }

  public searchTerm:string = '';

  onSearch(){
      this.biblioService.searchDocs(this.searchTerm).subscribe((data:any)=>{
      this.docs = data
      })

      if(this.searchTerm === ''){
      this.functionOnInit()
      }
  }


  getDocByIdToUpdate(id:number){

    this.biblioService.getDocById(id).subscribe((data)=>{   
        this.book = data;

        this.updateBook.patchValue({
          id: this.book.id,
          sujet: this.book.sujet,
          titre: this.book.titre,
          auteur: this.book.auteur,
          categorie: this.book.categorie,
          nombreExemplaire: this.book.nombreExemplaire,
          dateEdition: this.book.dateEdition,
          prixLocation: this.book.prixLocation,
          linkImage: this.book.linkImage,
          shortDesc: this.book.shortDesc
        });
    })
  }

  updateBookF(){
    if(this.updateBook.valid){
      this.biblioService.updateBook(this.updateBook.value).subscribe(()=>{
        this.functionOnInit();
        this.CloseBookBtn.nativeElement.click();
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
