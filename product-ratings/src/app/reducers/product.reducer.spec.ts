import { Product } from './../models/product.model';
import { reducer } from './product.reducer';

describe ('product reducer', () => {
 
  it('empty state products', () =>{
    const productAction = {type: 'NOOP'} as any;
    const changeState = reducer(undefined, productAction);
    console.log(changeState);
    expect(changeState.length).toEqual(0);
  });
  /*it('random rank products', () =>{
    const productAction = {type: 'RANDOM_RANK_PRODUCT'} as any;
    const product = {"id":2,"name":"Terminator","productType":"Movie","rating":3,"price":"300$","desc":"The Terminator is a 1984 American science fiction film directed by James Cameron"};
    product.rating = 1;
    const changeState = reducer(product, productAction);
    console.log(changeState);
    expect(changeState).toEqual(0);
  });
  
  it('Rank product', () =>{
    const productAction = {type: 'RANK_PRODUCT'} as any;
    const product = {"id":2,"name":"Terminator","productType":"Movie","rating":3,"price":"300$","desc":"The Terminator is a 1984 American science fiction film directed by James Cameron"};
    product.rating = 1;
    const changeState = reducer(product, productAction);
    console.log(changeState);
    expect(changeState).toEqual(0);
  });*/
  
});
