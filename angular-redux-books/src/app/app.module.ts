import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { booksReducer } from 'src/book-list/books.reducer';
import { collectionReducer } from 'src/state/collection.reducer';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { BookListComponent } from 'src/book-list/book-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookCollectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({books:booksReducer,collection : collectionReducer}),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
