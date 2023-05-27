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


  getLocationClient(idClient:number){
    return this.http.get(this.link+"/Biblio/ListLocation?idClient="+idClient)

  }

  getPretAdherent(idAdherent:number){
    return this.http.get(this.link+"/Biblio/ListPret?idAdherent="+idAdherent)
  }

  isAdherentF(idClient:number){
    return this.http.get(this.link+"/Biblio/isAdherent?idAdherent="+idClient)
  }

  public renduLocation(idDocument:number, idClient:number){
    return this.http.get(this.link+"/Biblio/renduLocation?idDocument="+idDocument+"&idClient="+idClient)
  }

  public renduPret(idDocument:number, idAdherent:number){
    return this.http.get(this.link+"/Biblio/renduPret?idDocument="+idDocument+"&idAdherent="+idAdherent)
  }

  public getAmendeLocation(idDocument:number, idClient:number){
    return this.http.get(this.link+"/Biblio/amendeLocation?idDocument="+idDocument+"&idClient="+idClient)
  }


  public getAmendePret(idDocument:number, idClient:number){
    return this.http.get(this.link+"/Biblio/amendePret?idDocument="+idDocument+"&idClient="+idClient)
  }
}
