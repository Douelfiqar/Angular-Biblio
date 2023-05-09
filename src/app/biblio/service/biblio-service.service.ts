import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

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

}
