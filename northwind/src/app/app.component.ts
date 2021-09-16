import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'northwind';
  user: string = 'Bilal Can Altındağ';
  product = { productId: 1, productName: 'Bardak', categoryId: 1, unitPrice: 5 }
  product1 = { productId: 2, productName: 'Laptop', categoryId: 1, unitPrice: 15 }
  product2 = { productId: 3, productName: 'Kitap', categoryId: 1, unitPrice: 12 }
  product3 = { productId: 4, productName: 'Kulaklık', categoryId: 1, unitPrice: 16 }

  products = [this.product, this.product1, this.product2, this.product3]
}
