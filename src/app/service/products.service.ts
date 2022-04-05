import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Subject, throwError } from 'rxjs';//subject per contatore - throwError emette gli errori
import { catchError } from 'rxjs/operators';//operatore per gestire gli errori


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:4201/';
  baseUrlProduct = 'http://localhost:4201/products/';
  public prodottiNelCarrello: Product[] = [];
  sub = new Subject<number>();//subject per il contatore
  counter = 0;

  constructor(private http: HttpClient) { }

  //gestione errori e chiamata
  //fa il get di un array (con inter product) in base baseUrlProduct
  get(){
    return this.http.get<Product[]>(this.baseUrlProduct).pipe(catchError(err => {
      return throwError(this.getErrorMess(err.status));
    }))
  }

  getProduct(id: number){
    return this.http.get<Product>(this.baseUrlProduct + id).pipe(catchError(err => {
      return throwError(this.getErrorMess(err.status));
    }))
  }
  private getErrorMess(status:number){
    let mess = '';
    switch (status){
      case 404:
        mess = 'Risorsa non trovata';
        break;
        case 500:
          mess = 'Errore interno del server';
          break;
          default:
            mess = 'Qualcosa non va';
            break;
          }
          return mess
        }


aggiungiProdottoAlCarrello(prod: Product){
  this.prodottiNelCarrello.push(prod);
}

getProdottiNelCarrello(){
  return this.prodottiNelCarrello;
}

rimuoviProdotto(idProd: number){
  this.prodottiNelCarrello.splice(idProd, 1);
  this.sottrai();
}


conta(){
  this.counter++;
  this.sub.next(this.counter);
}

sottrai(){
  this.counter--;
  this.sub.next(this.counter);
}

azzerraConta(){
  this.counter = 0;
  this.sub.next(this.counter);
}



}
