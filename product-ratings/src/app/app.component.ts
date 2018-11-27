import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { appState } from './app.state';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/Operators';
import * as ProductActions from './actions/product.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(public httpClient: HttpClient, public store: Store<any>){
    this.initializeStore().subscribe();
  }

  initializeStore(): Observable<any> {
    return this.httpClient.get('./assets/products.json').pipe(tap((p:any) => {
       this.store.dispatch(new ProductActions.RandomRankProduct(p));
    }));
  }
}
