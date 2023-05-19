import { Injectable } from '@angular/core';
import { Product } from './model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  Produits:Product[]=[];
  getProducts():Product[]{
    return this.Produits;
  }
  addProduct(product: Product){
    this.Produits.push(product);
  }
}
