import { Product } from './../models/product.model';
import { reducer } from './product.reducer';
import * as ProductActions from './../actions/product.actions';

describe ('product reducer', () => {
 
  it('empty state products', () =>{
    const productAction = {type: 'NOOP'} as any;
    const changeState = reducer(undefined, productAction);
    console.log(changeState);
    expect(changeState.length).toEqual(0);
  });
  it('Rank products', () =>{
    const productAction = {type: ProductActions.RANK_PRODUCT,payload:{id:2,"name":"Terminator","productType":"Movie","rating":6,"price":"300$","desc":"The Terminator is a 1984 American science fiction film directed by James Cameron"}} as any;
    const product = [{id:2,"name":"Terminator","productType":"Movie","rating":3,"price":"300$","desc":"The Terminator is a 1984 American science fiction film directed by James Cameron"}];
    const changeState = reducer(product, productAction);
    console.log(changeState);
    expect(changeState[0].rating).toEqual(6);
  });
  
  it('Random Rank products', () =>{
    const productAction = {type: ProductActions.RANDOM_RANK_PRODUCT,payload:[{id:2,"name":"Terminator","productType":"Movie","rating":6,"price":"300$","desc":"The Terminator is a 1984 American science fiction film directed by James Cameron"}]} as any;
    const changeState = reducer(undefined, productAction);
    console.log(changeState);
    expect(changeState[0].rating).toEqual(6);
  });
  
});
