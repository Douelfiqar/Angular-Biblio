import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BiblioServiceService {

  private link:string = "http://localhost:8080/"

  constructor(private http: HttpClient) { }

  getDocs(){
    return this.http.get(this.link+"Biblio/")
  }

  getDocsByCateg(categ:string){
    return this.http.get(this.link+"Biblio/categories/"+categ+"/")
  }

  deleteDocsById(id:number){
    return this.http.delete(this.link+"Biblio/delete/"+id+"/")
  }

  searchDocs(term:string){
    return this.http.get(this.link+"Biblio/Search?term="+term);
  }

  getDocById(id:number){
    return this.http.get(this.link+"Biblio/book/"+id+"/")
  }

  updateBook(data:any){
    return this.http.post(this.link+"Biblio/updateProduct/", data)
  }
}
