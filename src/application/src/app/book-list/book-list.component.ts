import {Component, OnInit} from '@angular/core';
import {Book} from '../model/book';
import {BookService} from '../service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];

  constructor(private bookService: BookService) {

  }

  deleteBook(id: string) {
    this.bookService.deleteBook(id).subscribe(
      data => {
        console.log(data);
        this.ngOnInit();
      },
      error => console.log(error));
  }

  ngOnInit() {
    this.bookService.findAll().subscribe(data => {
      this.books = data;
    });
  }
}
