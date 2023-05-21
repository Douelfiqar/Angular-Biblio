import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from '../service/users.service';
import { AddClientAdherentService } from '../addClientAdherent/add-client-adherent.service';
import { GestionUsersComponent } from '../gestion-users.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-client-adherent',
  templateUrl: './add-client-adherent.component.html',
  styleUrls: ['./add-client-adherent.component.css']
})
export class AddClientAdherentComponent {

  @Input() adhrent:boolean = false;
  addClient: FormGroup;
  @ViewChild('CloseBookBtn2') CloseBookBtn!: ElementRef;

  constructor(private _fb: FormBuilder, private UsersService:AddClientAdherentService, private gestionUsers:GestionUsersComponent){
    this.addClient = this._fb.group({
      idClient: null,
      cinClient: null,
      address: '',
      email: '',
      nmbreAllocationEnCours: 0,
      nom: '',
      numTelephone: null,
      prenom: ''
    })
  }

  addClientF(){
    if(this.adhrent){
      this.UsersService.addAdherent(this.addClient.value).subscribe(()=>{
        this.CloseBookBtn.nativeElement.click();
        this.gestionUsers.functionOnInit();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
      })
    }else{
      this.UsersService.addClient(this.addClient.value).subscribe(()=>{
        this.CloseBookBtn.nativeElement.click();
        this.gestionUsers.functionOnInit();
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
