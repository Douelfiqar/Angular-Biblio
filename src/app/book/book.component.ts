import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  
  bookId: string = '';
  book:any;
  categorie !: string;
  louerChild!: boolean;
  preter !: boolean;
  nombrePretation !: number
  louer!:boolean;
  reptureDeStock!:number
  reservation:boolean = false;


  constructor(private bookService:ServiceService, private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.bookId = this.route.snapshot.paramMap.get('id') as string;
    this.bookService.getDocsById(this.bookId).subscribe((data:any)=>{
        this.book = data;
        this.categorie = data.categorie
        this.reptureDeStock = data.nombreExemplaire
        this.btnDisplayPretation()
    })
  }
  

  btnDisplayPretation(){
    if(this.reptureDeStock > 0){
      
      this.reservation = false
      if(this.categorie === 'Livre'){
        this.bookService.getNombrePretation(this.categorie).subscribe((data)=>{
          this.nombrePretation = parseInt(data.toString())
          if(this.nombrePretation > 10){
            this.preter = false
            this.louer = true
          }else{
            this.preter = true
            this.louer = false
          }
        })
      }
      else{
        this.preter = false
        this.louer = true
      }
    }else{
      this.preter = false
      this.louer = false
      this.reservation = true
    }

  }



}
