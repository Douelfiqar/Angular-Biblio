import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UpdateServiceService {

  link:string = "http://localhost:8080/Biblio"
  constructor(private http:HttpClient) { }




}
