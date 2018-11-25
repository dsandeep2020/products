import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Product } from './../models/product.model';

export const RANK_PRODUCT = '[PRODUCT] Rank';
export const RANDOM_RANK_PRODUCT = '[PRODUCT] Random Rank';

export class RankProduct implements Action {
    readonly type = RANK_PRODUCT;
    constructor(public payload: Product) {}
}

export class RandomRankProduct implements Action {
    readonly type = RANDOM_RANK_PRODUCT;
    constructor(public payload: Product[]) {}
}



export type Actions = RankProduct | RandomRankProduct ;
