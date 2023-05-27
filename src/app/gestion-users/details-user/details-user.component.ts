import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { GestionUsersComponent } from '../gestion-users.component';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css']
})
export class DetailsUserComponent implements OnInit {
  
  ngOnInit(): void {

    // if(this.isAdherent)
    //    this.SelectionerPret()
  }

  faCheck = faCheck

  constructor(private userService:UsersService, private gestionUser:GestionUsersComponent){

  }

  @Input() idChild!:number;
  isAdherent!:boolean;


  @Input() listLocation :any;


  @Input() listPret:any;


  @Input() adh:any;
  @Input() isAdhCheck!:boolean;
  
  renduLocation(id:number){

    this.userService.renduLocation(id, this.idChild).subscribe(()=>{
      
      this.gestionUser.giveIdToChild(this.idChild)
    })
  }


  renduPret(id:number){
    
        this.userService.renduPret(id, this.idChild).subscribe((data)=>{
      this.gestionUser.giveIdToChild(this.idChild)
    })
  }
}
