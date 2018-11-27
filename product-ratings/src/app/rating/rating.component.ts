import { appState } from '../app.state';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Product } from './../models/product.model';
import { Store } from '@ngrx/store';
import * as ProductActions from './../actions/product.actions';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})

export class RatingComponent implements OnInit {
  @Input() product: Partial<Product> = {id: 1, rating: 3};

  inputName: string;
  constructor (public store: Store<appState>) {
  }

  ngOnInit() {
   this.inputName = this.product ? this.product.id + '_rating' : null;
  }

  onClick(rating: number): void {
    this.product.rating = rating;
    this.store.dispatch(new ProductActions.RankProduct(this.product as any));
  }
}
