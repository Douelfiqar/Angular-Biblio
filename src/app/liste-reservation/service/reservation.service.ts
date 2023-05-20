import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private link:string = "http://localhost:8080"


  constructor(private http: HttpClient) { }

  getAllClient(){
    return this.http.get(this.link+"/Biblio/getClients")

  }

  addReservation(idDocument:number, idClient:number){
    return this.http.get(this.link+"/Biblio/addReservation?idDocument="+idDocument+"&cinClient="+idClient)
  }

}
