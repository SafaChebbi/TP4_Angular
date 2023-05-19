import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../model/Product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent {
  constructor(private ps:ProductService, private router:Router){}
  produit:Product={id:0,categorie:"",prix:0,quantite:0};
  save(f:NgForm){
    this.produit=f.value;
    this.ps.addProduct(this.produit);
    this.router.navigate(['/home'])
  }


}
