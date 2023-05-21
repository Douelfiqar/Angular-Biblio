import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faPen, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { UsersService } from './service/users.service';
import { slice, shuffle } from 'lodash';

@Component({
  selector: 'app-gestion-users',
  templateUrl: './gestion-users.component.html',
  styleUrls: ['./gestion-users.component.css']
})
export class GestionUsersComponent {
  updateBook!: FormGroup;
  book!:any;
  @ViewChild('CloseBookBtn1') CloseBookBtn!: ElementRef;
  adhrent:boolean = true
  NonAdherent:boolean = false

  
  constructor(private _fb: FormBuilder, private gestionUsersService:UsersService){
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

  public clients:any;
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
    this.gestionUsersService.getAllClient().subscribe((data:any)=>{

      this.clients = data.sort((a, b) => b.id - a.id);

      this.totalProduct = data.length;

    })
  }



    //Delete Iteam
  // sweet(id:number){
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "You won't be able to revert this!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       this.gestionUsersService.deleteClientById(id).subscribe(()=>{
  //         this.clients = this.clients.filter(item => item.id !== id);
  //         Swal.fire(
  //           'Deleted!',
  //           'Your file has been deleted.',
  //           'success'
  //         )
  //       })
        
  //     }
  //   })
  // }

  getClients(){
    this.functionOnInit()
  }

  getAdherents(){
    this.clients = this.gestionUsersService.getAdherents().subscribe((data)=>{
      this.clients = data
    })
  }


  public searchTerm:string = '';

  onSearch(){
      this.gestionUsersService.searchClient(this.searchTerm).subscribe((data:any)=>{
      this.clients = data
      })

      if(this.searchTerm === ''){
      this.functionOnInit()
      }
  }


  // getDocByIdToUpdate(id:number){

  //   this.biblioService.getDocById(id).subscribe((data)=>{   
  //       this.book = data;

  //       this.updateBook.patchValue({
  //         id: this.book.id,
  //         sujet: this.book.sujet,
  //         titre: this.book.titre,
  //         auteur: this.book.auteur,
  //         categorie: this.book.categorie,
  //         nombreExemplaire: this.book.nombreExemplaire,
  //         dateEdition: this.book.dateEdition,
  //         prixLocation: this.book.prixLocation,
  //         linkImage: this.book.linkImage,
  //         shortDesc: this.book.shortDesc
  //       });
  //   })
  // }

  // updateBookF(){
  //   if(this.updateBook.valid){
  //     this.biblioService.updateBook(this.updateBook.value).subscribe(()=>{
  //       this.functionOnInit();
  //       this.CloseBookBtn.nativeElement.click();
  //       Swal.fire({
  //         position: 'top-end',
  //         icon: 'success',
  //         title: 'Your work has been saved',
  //         showConfirmButton: false,
  //         timer: 1500
  //       }) 
  //     })
  //   }
  // }

}
