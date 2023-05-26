import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faPen, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { UsersService } from './service/users.service';
import { slice, shuffle } from 'lodash';
import { DetailsUserComponent } from './details-user/details-user.component';

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
  
  idChild !: number;
  
  giveIdToChild(id:number){
    
    this.idChild = id
    this.isAdherentF(id)
    this.SelectionerLocation(id)
    this.SelectionerPret(id)
  }

  listLocation :any;

  SelectionerLocation(id:number){
    this.gestionUsersService.getLocationClient(id).subscribe((data)=>{
      this.listLocation = data
    })
  }
  listPret:any;

  SelectionerPret(id){
    this.gestionUsersService.getPretAdherent(this.idChild).subscribe((data)=>{
      this.listPret = data
      
    })
  }
  adh:any;
  isAdhCheck!:boolean;
  isAdherentF(id:number) {
    this.gestionUsersService.isAdherentF(id).subscribe((data) => {
      this.adh = data
      this.isAdhCheck = !!this.adh;
    });
  }


}

