import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product = { productId: 1, productName: 'Bardak', categoryId: 1, unitPrice: 5 }
  product1 = { productId: 2, productName: 'Laptop', categoryId: 1, unitPrice: 15 }
  product2 = { productId: 3, productName: 'Kitap', categoryId: 1, unitPrice: 12 }
  product3 = { productId: 4, productName: 'Kulaklık', categoryId: 1, unitPrice: 16 }

  products = [this.product, this.product1, this.product2, this.product3];

  constructor() { }

  ngOnInit(): void {
  }

}
