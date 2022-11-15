import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addBook, removeBook, retrivedBookList } from 'src/book-list/books.actions';
import { GoogleBooksService } from 'src/book-list/books.service';
import { selectBookCollection, selectBooks } from 'src/state/books.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  onAdd(bookId: string) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(removeBook({ bookId }));
  }

  constructor(
    private booksService: GoogleBooksService,
    private store: Store
  ) {}

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) => this.store.dispatch(retrivedBookList({ books })));
  }
}
