import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import {retrivedBookList } from "./books.actions";
import { Book } from "./books.model";

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(initialState,on(retrivedBookList,(state,{ books })=>books));
