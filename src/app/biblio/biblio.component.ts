import { Component, OnInit } from '@angular/core';
import { BiblioServiceService } from './service/biblio-service.service';
import { shuffle, slice } from 'lodash';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-biblio',
  templateUrl: './biblio.component.html',
  styleUrls: ['./biblio.component.css']
})
export class BiblioComponent implements OnInit {

    constructor(private biblioService:BiblioServiceService){

    }
    faTrash = faTrash;
    faPlus = faPlus
    
    public docs:any;
    public currentCateg = 0
    public p:number=1;
    public itemsPerPage:number = 9
    public totalProduct:any;

    public categories:string[] = []; 
    public randomCategories: any;
    public randomNames: any;
    public names:string[] = [];

    public functionOnInit(){
      this.biblioService.getDocs().subscribe((data:any)=>{
        this.docs = data;
        this.totalProduct = data.length;

        for(let d of data){
          this.categories.push(d.categorie)
          this.names.push(d)
        }
        
        this.randomCategories = slice(shuffle(this.categories), 0, 5);
        this.randomNames = slice(shuffle(this.names), 0, 15);

      })
    }
    public ngOnInit(): void {
      this.functionOnInit();
    }


    public filterByCateg(categ:string){

      if(categ === 'All'){
        this.functionOnInit();
      }else{
        this.biblioService.getDocsByCateg(categ).subscribe((data:any)=>{
        this.docs = data;
        this.totalProduct = data.length;
        })
      }

    }

    public deleteIteam(id:any){
        this.biblioService.deleteDocsById(id).subscribe(()=>{

        });

    }

    sweet(id:number){
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.biblioService.deleteDocsById(id).subscribe(()=>{
            this.docs = this.docs.filter(item => item.id !== id);
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          })
          
        }
      })
    }
}
