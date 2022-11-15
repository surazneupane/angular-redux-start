import { createAction, props } from '@ngrx/store';
import { Book } from './books.model';

export const addBook = createAction(
  '[Book List] Add Book',
  props<{
    bookId: string;
  }>()
);

export const removeBook = createAction(
  '[Book Collection] Remove Book',
  props<{ bookId: string }>()
);

export const retrivedBookList = createAction(
  '[Book List / API] Retrive Books Success',
  props<{
    books: ReadonlyArray<Book>;
  }>()
);
