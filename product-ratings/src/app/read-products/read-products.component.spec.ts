import { TestBed, async,fakeAsync ,tick, ComponentFixture } from '@angular/core/testing';
import { ReadProductsComponent } from './read-products.component';
import { RatingComponent } from './../rating/rating.component';
import { Observable } from 'rxjs/Observable';
import { Product } from './../models/product.model';
import { appState } from './../app.state';
import * as ProductActions from './../actions/product.actions';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { reducer } from './../reducers/product.reducer';
import { Store, StoreModule } from '@ngrx/store';





describe('ReadProductsComponent', () => {
  let component: ReadProductsComponent;
  let fixture: ComponentFixture<ReadProductsComponent>;
  let store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadProductsComponent, RatingComponent ],
      imports: [HttpClientModule, StoreModule.forRoot({product : reducer})]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadProductsComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    fixture.detectChanges();
  });

   it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('sort collection', () => {
    component.productsArray = [{"id":1,"name":"Predator","productType":"Movie","rating":2, "desc": "a", "price":"100"},
    {"id":2,"name":"Terminator","productType":"Movie","rating":3, "desc": "b", "price":"100"},
    {"id":3,"name":"Harry Porter","productType":"Book","rating":1, "desc": "c", "price":"100"}];
    const sortedCollection = component.sortCollection(component.productsArray);
    expect(sortedCollection[0].rating).toEqual(3);
  });
  
  it('on click toggle - Enable random order', () => {
    component.status = false;
    component.onClickToggle();
    expect(component.status).toBe(true);
  });
  
  it('on click toggle - Disable random order', () => {
    component.status = true;
    component.onClickToggle();
    expect(component.status).toBe(false);
    
  });
  
  it('on click toggle - Enable Random order - Random Order for ratings. ', () => {
     component.productsArray = [
        {"id":1,"name":"Predator","productType":"Movie","rating":0, "desc": "a", "price":"100"},
        {"id":2,"name":"Terminator","productType":"Movie","rating":0, "desc": "b", "price":"100"},
        {"id":3,"name":"Harry Porter","productType":"Book","rating":0, "desc": "c", "price":"100"}];
     component.sortProductsRandomly();
     expect(component.productsArray[0].rating).not.toEqual(0);
     expect(component.productsArray[1].rating).not.toEqual(0);
     expect(component.productsArray[2].rating).not.toEqual(0);
     expect(component.productsArray[0].rating).toBeGreaterThan(0);
  });
  
  it('on click toggle - Disable Random order - Random Order for ratings.', () => {
     component.productsArray = [
        {"id":1,"name":"Predator","productType":"Movie","rating":1, "desc": "a", "price":"100"},
        {"id":2,"name":"Terminator","productType":"Movie","rating":2, "desc": "b", "price":"100"},
        {"id":3,"name":"Harry Porter","productType":"Book","rating":3, "desc": "c", "price":"100"}];
     component.resetRandomSorting();
     expect(component.productsArray[0].rating).toEqual(1);
     expect(component.productsArray[1].rating).toEqual(2);
     expect(component.productsArray[2].rating).toEqual(3);
  });
  
});
