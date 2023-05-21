import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private link:string = "http://localhost:8080"


  constructor(private http: HttpClient) { }

  getAllClient(){
    return this.http.get(this.link+"/Biblio/getClients")
  }

  deleteClientById(id:number){
    return this.http.delete(this.link+"/Biblio/deleteClient?idClient="+id)
  }

  searchClient(term:string){
    return this.http.get(this.link+"/Biblio/searchClients?term="+term)
  }

  getAdherents(){
    return this.http.get(this.link+"/Biblio/getAdherents")
  }
}
