import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private link:string = "http://localhost:8080/"

  constructor(private http:HttpClient) { }

  addBook(data:any){
    return this.http.post(this.link+"Biblio/addProduct",data)
  }
}
