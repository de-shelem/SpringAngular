import {Component, OnInit} from '@angular/core';
import {BookService} from '../service/book.service';
import {Book} from '../model/book';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent {

  book: Book;

  constructor(private route: ActivatedRoute, private router: Router, private bookService: BookService) {
    this.book = new Book();
    this.book.id = this.route.snapshot.params['id'];
  }

  onSubmit() {
    this.bookService.editBook(this.book).subscribe(result => this.gotoBookList());
  }

  gotoBookList() {
    this.router.navigate(['/books']);
  }

}



