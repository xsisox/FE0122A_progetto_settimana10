import { Component, OnInit, Input } from '@angular/core';//importo i metodi
import { Product } from 'src/app/models/product';//importo l'interfaccia prodotto


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product!: Product;//importo una variabile che abbia come interfaccia Product
  constructor() { }

  ngOnInit(): void {
  }

}
