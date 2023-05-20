import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreterService {

  private link:string = "http://localhost:8080"


  constructor(private http: HttpClient) { }

  getAdherent(){
    return this.http.get(this.link+"/Biblio/getAdherents")

  }

  addPretation(idDocument:number, idAdherent:number){
    return this.http.get(this.link+"/Biblio/addPret?idDocument="+idDocument+"&codeAdherent="+idAdherent)
  }  
}
