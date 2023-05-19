import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private ps:ProductService){}
  ngOnInit(){
    this.ListProduct=this.ps.getProducts();
  }
  ListProduct : Product [] =[]   ;
    searchQuantity:number=100;
   
}
