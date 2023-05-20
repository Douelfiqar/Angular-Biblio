import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { LocationService } from './service/location.service';
import { FormBuilder, FormGroup } from '@angular/forms';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  addLocation: FormGroup;
  clients:any
  @Input() Binding !:string 
  selectedCIN !:string;
  @ViewChild('CloseBookBtn2') CloseBookBtn!: ElementRef;


    constructor(private _fb: FormBuilder, private locationService:LocationService){
      this.addLocation = this._fb.group({
        idDocument: null,
        cinClient: null,
      })
    }
  ngOnInit(): void {
    this.getAllClient();
  }
  

  getAllClient(){
      this.locationService.getAllClient().subscribe((data)=>{
        this.clients = data
      })
  }
    
  addLocationF(){

    this.addLocation.patchValue({
      idDocument: this.Binding,
      cinClient: this.addLocation.value.cinClient
    })

    if(this.addLocation.valid){
        this.locationService.addLocation(this.addLocation.value.idDocument, this.addLocation.value.cinClient).subscribe(()=>{
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
