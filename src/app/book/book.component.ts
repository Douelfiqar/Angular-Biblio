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

  constructor(private bookService:ServiceService, private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.bookId = this.route.snapshot.paramMap.get('id') as string;
    this.bookService.getDocsById(this.bookId).subscribe((data:any)=>{
        this.book = data;
        console.log(this.book);
    })
    
  }
  

}
