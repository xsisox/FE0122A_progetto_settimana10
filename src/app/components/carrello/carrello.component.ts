import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/products.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.scss']
})
export class CarrelloComponent implements OnInit {

  prodottiNelCarrello!: Product[]; //creo la variabile
  totaleCarrello: number = 0; //totale dei prodotti nel carrello
  prodottoRimosso!: Product;


  constructor(private prodSrv: ProductService) {

  }

  ngOnInit(): void {

    this.prodottiNelCarrello = this.prodSrv.prodottiNelCarrello //assegno il contenuto del carrello alla variabile
    var total = 0;
    for (var i = 0; i < this.prodottiNelCarrello.length; i++) {
      total += this.prodottiNelCarrello[i].price;
    }
    this.totaleCarrello = total;

    console.clear();
    console.log('PRODUCTS IN CART:');
    console.table(this.prodottiNelCarrello);

  }

  rimuoviProdotto(idProd: number) {
    this.prodSrv.rimuoviProdotto(idProd);

    var total = 0;
    for (var i = 0; i < this.prodottiNelCarrello.length; i++) {
      total += this.prodottiNelCarrello[i].price;
    }
    this.totaleCarrello = total;

    console.clear();
    console.log('PRODUCTS IN CART UPDATED:')
    console.table(this.prodottiNelCarrello);

  }

  login(form: NgForm) {
    this.prodSrv.azzerraConta();
    this.prodottiNelCarrello = [];
    this.prodSrv.prodottiNelCarrello = [];
    this.totaleCarrello = 0;
    form.resetForm();

    console.log(form.value.name);



  }
}
