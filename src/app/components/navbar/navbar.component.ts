import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/products.service';//importo il service


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  totaleProdottiCarrello: number = 0; //variabile per contare i prodotti nel carrello
  constructor(private prodSrv: ProductService) { }

  ngOnInit(): void {
    this.prodSrv.sub.subscribe((conta)=>{
      this.totaleProdottiCarrello = conta;
    })
    this.prodSrv.sub.subscribe((sottrai)=>{
      this.totaleProdottiCarrello = sottrai;
    })
    this.prodSrv.sub.subscribe((azzerraConta)=>{
      this.totaleProdottiCarrello = azzerraConta;

  })
  }
}
