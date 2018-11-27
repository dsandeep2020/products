import { TestBed, async,fakeAsync ,tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { ReadProductsComponent } from './read-products/read-products.component';
import { RatingComponent } from './rating/rating.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { appState } from './app.state';
import * as ProductActions from './actions/product.actions';
import { reducer } from './reducers/product.reducer';

describe('AppComponent', () => {
  let store;
  let fixture;
  let comp;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        StoreModule.forRoot({product : reducer})
      ],
      declarations: [
        AppComponent,
        ReadProductsComponent,
        RatingComponent
      ],
       providers: []
    }).compileComponents();
    
     fixture = TestBed.createComponent(AppComponent);
     comp = fixture.debugElement.componentInstance;
     store = TestBed.get(Store);
  }));

  it('should create the app', () => {
    expect(comp).toBeTruthy();
  });
  
  it('Store have been called.', async(() => { 
    spyOn(store, 'dispatch').and.callThrough();
    comp.initializeStore().subscribe(res=>{
      expect(store.dispatch).toHaveBeenCalled();   
    });  
  }));
  
  it('Store have been called once.', async(() => { 
    spyOn(store, 'dispatch').and.callThrough();
    comp.initializeStore().subscribe(res=>{
      expect(store.dispatch).toHaveBeenCalledTimes(1);   
    });  
  }));
  
  it('store have been called with product JSON.', async(() => { 
    spyOn(store, 'dispatch').and.callThrough();
    comp.initializeStore().subscribe(res=>{
      expect(store.dispatch).toHaveBeenCalledWith(new ProductActions.RandomRankProduct(res));
    });  
  }));
  
  
});
