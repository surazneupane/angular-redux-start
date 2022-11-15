import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/book-list/books.model';

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.css'],
})
export class BookCollectionComponent {
  @Input() books: any = [];
  @Output() remove = new EventEmitter<string>();
}
