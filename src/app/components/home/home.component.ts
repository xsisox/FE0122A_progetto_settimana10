import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[] | undefined; //creo l'array
  constructor(private prodSrv: ProductService) { } //al caricamento

  ngOnInit(): void {
    this.prodSrv.get().subscribe( //fai il get presente nel prodservice, subscribe mettimi in contatto con il json
      (data: Product[]) => {
        this.products = data;//dati presenti adesso nel array
        console.clear(); //pulisci tutto
        console.log(data); //stampa tutti i dati

      }, (err) => {
        alert(err); //se c'è un errore, mostra un alert
      }

    );
  }

}
