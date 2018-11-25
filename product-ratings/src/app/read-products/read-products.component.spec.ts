import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReadProductsComponent } from './read-products.component';
import { RatingComponent } from './../rating/rating.component';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Product } from './../models/product.model';
import { appState } from './../app.state';
import * as ProductActions from './../actions/product.actions';
import { HttpClient } from '@angular/common/http';


describe('ReadProductsComponent', () => {
  let component: ReadProductsComponent;
  let fixture: ComponentFixture<ReadProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadProductsComponent, RatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

   it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('sort collection', () => {
    component.productsArray = [{"id":1,"name":"Predator","productType":"Movie","rating":2,"price":"300$", "desc":"about"},
    {"id":2,"name":"Terminator","productType":"Movie","rating":3,"price":"300$","desc":"about"},
    {"id":3,"name":"Harry Porter","productType":"Book","rating":1,"price":"300$","desc":"about"}];
    const sortedCollection = component.sortCollection(component.productsArray);
    expect(sortedCollection[0].rating).toEqual(3);
  });
  
});
