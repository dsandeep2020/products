import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ReadProductsComponent } from './read-products/read-products.component';
import { RatingComponent } from './rating/rating.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Store, StoreModule } from '@ngrx/store';
import { appState } from './app.state';
import * as ProductActions from './actions/product.actions';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        StoreModule
      ],
      declarations: [
        AppComponent,
        ReadProductsComponent,
        RatingComponent
      ],
       providers: [Store]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  
  it('initialize store', () => {
   
  });
  
});
