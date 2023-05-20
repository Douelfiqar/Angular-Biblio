import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PreterService } from '../service/preter.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pretation-book',
  templateUrl: './pretation-book.component.html',
  styleUrls: ['./pretation-book.component.css']
})
export class PretationBookComponent implements OnInit {

  @Input() bookId !: string;

  addPretation: FormGroup;
  Adherents:any
  selectedCIN !:string;
  @ViewChild('CloseBookBtn3') CloseBookBtn!: ElementRef;


    constructor(private _fb: FormBuilder, private preterService:PreterService){
      this.addPretation = this._fb.group({
        idDocument: null,
        codeAdherent: null,
      })
    }
  ngOnInit(): void {
    this.getAllAdherent();
  }
  

  getAllAdherent(){
      this.preterService.getAdherent().subscribe((data)=>{
        this.Adherents = data
      })
  }
    
  addPretationF(){

    this.addPretation.patchValue({
      idDocument: this.bookId,
      codeAdherent: this.addPretation.value.codeAdherent
    })

    if(this.addPretation.valid){
        this.preterService.addPretation(this.addPretation.value.idDocument, this.addPretation.value.codeAdherent).subscribe(()=>{
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
