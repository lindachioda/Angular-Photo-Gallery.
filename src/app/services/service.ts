import { Injectable } from '@angular/core';
import { HttpInterceptorFn, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Service {
  //importa "http" nel costruttore
  constructor(private http:HttpClient){}
  //chiamata api: this.http.get(url)/ poi ricevilo in ts: this.subscribe(data=>{})
  getPhotos(){
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/photos`) //any così puo essere letto come array e come oggetto
  }
  //metodi per chiamare diversi dati dall'api

}
