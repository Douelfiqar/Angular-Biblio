import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookComponent } from '../book/book.component';
import { ReservationService } from './service/reservation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-liste-reservation',
  templateUrl: './liste-reservation.component.html',
  styleUrls: ['./liste-reservation.component.css']
})
export class ListeReservationComponent implements OnInit {
  addReservation: FormGroup;
  clients:any
  @Input() bookId !: string;
  selectedCIN !:string;
  @ViewChild('CloseBookBtn4') CloseBookBtn!: ElementRef;


  constructor(private _fb: FormBuilder, private bookComp:BookComponent, private reservationService:ReservationService){
    this.addReservation = this._fb.group({
      idDocument: null,
      cinClient: null,
    })
  }

  ngOnInit(): void {
    this.getAllClient();
    
  }

  getAllClient(){
    this.reservationService.getAllClient().subscribe((data)=>{
      this.clients = data
    })
  }

  addReservationF(){
    this.addReservation.patchValue({
      idDocument: this.bookId,
      cinClient: this.addReservation.value.cinClient
    })

    if(this.addReservation.valid){
        this.reservationService.addReservation(this.addReservation.value.idDocument, this.addReservation.value.cinClient).subscribe(()=>{
          this.CloseBookBtn.nativeElement.click();
          this.bookComp.btnDisplayPretation()
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
