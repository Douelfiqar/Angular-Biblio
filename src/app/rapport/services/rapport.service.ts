import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RapportService {

  private link:string = "http://localhost:8080"

  constructor(private http: HttpClient) { }

  getBooks(){
    return this.http.get(this.link+'/Biblio/')
  }

  getBooksPretNmbre(dateDepart:string, dateFin:string, idDoc:number){
    return this.http.get(this.link+'/Biblio/NmbrePret?depart='+dateDepart+'&fin='+dateFin+'&idDoc='+idDoc)
  }

  getBooksLocationNmbre(dateDepart:string, dateFin:string, idDoc:number){
    return this.http.get(this.link+'/Biblio/NmbreLocation?depart='+dateDepart+'&fin='+dateFin+'&idDoc='+idDoc)
  }
}
