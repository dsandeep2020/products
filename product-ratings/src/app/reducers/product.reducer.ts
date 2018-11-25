import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Product } from './../models/product.model';
import * as ProductActions from './../actions/product.actions';


export function reducer(state: Product[] = [], action: ProductActions.Actions) {
    switch (action.type) {
        case ProductActions.RANK_PRODUCT:
            let newState = [...state];
            newState = newState.map(function(p) {
              if (p.id === action.payload.id) {
                p = action.payload;
              }
              return p;
            });
            return newState;
        case ProductActions.RANDOM_RANK_PRODUCT:
          return action.payload;
        default:
            return state;
    }
}
