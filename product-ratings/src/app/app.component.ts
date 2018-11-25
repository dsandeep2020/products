import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { appState } from './app.state';
import * as ProductActions from './actions/product.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(public httpClient: HttpClient, public store: Store<any>){
    this.initializeStore();
  }
/**/
  initializeStore(): void {
    this.httpClient.get('./assets/products.json').subscribe((p:any) => {
       this.store.dispatch(new ProductActions.RandomRankProduct(p));
    });
  }
}
