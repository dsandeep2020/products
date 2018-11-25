import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { Store, StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ReadProductsComponent } from './read-products/read-products.component';
import { RatingComponent } from './rating/rating.component';

import { reducer } from './reducers/product.reducer';


@NgModule({
  declarations: [
    AppComponent,
    ReadProductsComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({product : reducer})
    ],
  providers: [Store, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
