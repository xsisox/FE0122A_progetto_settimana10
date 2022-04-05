import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';//importo l'interfaccia prodotto'
import { ProductService } from 'src/app/service/products.service';//importo il service
import { ActivatedRoute } from '@angular/router';//importo la rotta attuale


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  prodottoSelezionato: Product | any;//creo una variabile che abbia come interfaccia Product
  idProdottoSelezionato!: number;//creo una variabile per l'id

  constructor(private prodSrv: ProductService, private router: ActivatedRoute) { }// importo la rotta attiva


  ngOnInit(): void {
    this.router.params.subscribe(params => {
      const id = +params['id'];//prendo l'id dalla rotta attiva (il simbolo + converte in numero)
      this.idProdottoSelezionato = id;//assegno l'id alla variabile
    });

    console.clear();
    console.log('YOU NOW LOOKING ON PRODUCT:');
    console.log(this.prodottoSelezionato);


    this.prodSrv.getProduct(this.idProdottoSelezionato).subscribe((prodottoSelezionato: Product) => {
    this.prodottoSelezionato = prodottoSelezionato;//riempio la mia variabile con il contenuto del database
  })
  }
  aggiungiProdottoAlCarrello(){
    this.prodSrv.aggiungiProdottoAlCarrello(this.prodottoSelezionato);
    console.clear();
    console.log('PRODUCT ADDED TO CART');
    console.log(this.prodottoSelezionato);
    this.prodSrv.conta();
  }






  }


