import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Product } from './../models/product.model';
import { appState } from './../app.state';
import * as ProductActions from './../actions/product.actions';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-read-products',
  templateUrl: './read-products.component.html',
  styleUrls: ['./read-products.component.css']
})
export class ReadProductsComponent implements OnInit {
  products: Observable<Product[]>;
  productsArray: Product[];
  status: boolean = false;

  constructor(private store: Store<appState>, public httpClient: HttpClient) {
    this.products = store.select('product');
  }

  ngOnInit() {
       this.products.subscribe((allProducts: any) => {
       this.productsArray = this.sortCollection(allProducts);
    }); 
  }
  
  public sortCollection(arrayObj: any): Product[] {
    arrayObj = arrayObj.sort((a, b) => a.rating > b.rating ? -1 : a.rating < b.rating ? 1 : 0);  
    return arrayObj;
  }
  
  onClickToggle(): void {
    this.status = !this.status;
    if(this.status) {
      this.productsArray.forEach(function(p) {
          p.rating = +(Math.random() * 10).toFixed();
        });
      this.productsArray = this.sortCollection(this.productsArray);
      this.store.dispatch(new ProductActions.RandomRankProduct(this.productsArray));
    } else {
       this.httpClient.get('./assets/products.json').subscribe((p: any) => {
       this.store.dispatch(new ProductActions.RandomRankProduct(p));
    });
    }
  }
}

