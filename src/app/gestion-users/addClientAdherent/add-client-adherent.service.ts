import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddClientAdherentService {

  private link:string = "http://localhost:8080"

  constructor(private http: HttpClient) { }

  addClient(data:any){
    return this.http.post(this.link+"/Biblio/addUser/",data);
  }

  addAdherent(data:any){
    return this.http.post(this.link+"/Biblio/addAdherent/",data);
  }

}
