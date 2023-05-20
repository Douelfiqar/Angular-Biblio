import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private link:string = "http://localhost:8080"


  constructor(private http: HttpClient) { }

  getAllClient(){
    return this.http.get(this.link+"/Biblio/getClients")

  }

  addLocation(idDocument:number, idClient:number){
    return this.http.get(this.link+"/Biblio/addLocation?idDocument="+idDocument+"&cinClient="+idClient)
  }



}
