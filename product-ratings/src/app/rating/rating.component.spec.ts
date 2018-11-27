import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';

import { RatingComponent } from './rating.component';
import { reducer } from './../reducers/product.reducer';


describe('RatingComponent', () => {
  let component: RatingComponent;
  let fixture: ComponentFixture<RatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingComponent ],
      imports: [StoreModule.forRoot({product : reducer})]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('On click return all products', () => {
    const productAction = {type: 'RANK_PRODUCT'} as any;
    const changeState = reducer(undefined, productAction);
    
  });
  
  it('Rank Product on clicking on Star.', async(() => { 
     component.product = {"id":1,"name":"Predator","productType":"Movie","rating":1, "desc": "a", "price":"100"}
     component.onClick(2);
     expect(component.product.rating).toEqual(2);   
  }));
  
  it('Set input name.', async(() => { 
     component.product = {"id":1,"name":"Predator","productType":"Movie","rating":1, "desc": "a", "price":"100"}
     component.ngOnInit();
     expect(component.inputName).toEqual("1_rating");   
  }));
  
});
