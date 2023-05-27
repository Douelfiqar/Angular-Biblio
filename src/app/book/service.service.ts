import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private link:string = "http://localhost:8080"


  constructor(private http: HttpClient) { }

  getDocsById(id:string){
    return this.http.get(this.link+'/Biblio/book/'+id+'/')
  }


  getNombrePretation(categorie:string){
    return this.http.get(this.link+"/Biblio/NombreDoc?categorie="+categorie)
  }

  ListReservation(idBook:number){
    return this.http.get(this.link+"/Biblio/ListReservation?idBook="+idBook)
  }
  
}
