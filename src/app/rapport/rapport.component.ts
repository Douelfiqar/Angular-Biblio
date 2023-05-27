import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RapportService } from './services/rapport.service';

@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.css']
})
export class RapportComponent {


  public clients:any;
  public currentCateg = 0
  public p:number=1;
  public itemsPerPage:number = 9
  public totalProduct:any;

  public categories:string[] = []; 
  public randomCategories: any;
  public randomNames: any;
  public names:string[] = [];


  dateGestion: FormGroup;
  books!:any;
  @ViewChild('CloseBookBtn2') CloseBookBtn!: ElementRef;
  adhrent:boolean = true
  NonAdherent:boolean = false

  
  constructor(private _fb: FormBuilder, private rapportService:RapportService){
    this.dateGestion = this._fb.group({
      date_depart: '2023-05-17',
      date_fin: '2023-05-20',
    })
  }

  public ngOnInit(): void {
    this.functionOnInit();
  }
  public functionOnInit() {
    this.rapportService.getBooks().subscribe((data) => {
      this.books = data;
  
      if (this.books) {
        this.books.forEach((book) => {
          this.rapportService.getBooksPretNmbre(this.dateGestion.value.date_depart, this.dateGestion.value.date_fin, book.id).subscribe((counte) => {
            book.pretCount = counte;
          });
        });
      }

      if(this.books){
        this.books.forEach((book) => {
          this.rapportService.getBooksLocationNmbre(this.dateGestion.value.date_depart, this.dateGestion.value.date_fin, book.id).subscribe((counte) => {
            book.locationCount = counte;
          });
        });
      }
    });
    this.CloseBookBtn.nativeElement.click();
  }
  
}
