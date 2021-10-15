import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { ProductResponseModel } from '../models/productResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://localhost:44335/api/products/getall';

  constructor(private httpClient: HttpClient) { }

  getProducts() {
    this.httpClient.get<ProductResponseModel>(this.apiUrl)
  }
}
