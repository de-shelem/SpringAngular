import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Book} from '../model/book';
import {Observable} from 'rxjs/Observable';
import {UserComment} from "../model/user-comment";

@Injectable()
export class BookService {

  private booksUrl: string;
  private commentUrl: string;

  constructor(private http: HttpClient) {
    this.booksUrl = 'http://localhost:8080/books';
    this.commentUrl = 'http://localhost:8080/comments';
  }

  public findAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl);
  }

  public save(book: Book) {
    return this.http.post<Book>(this.booksUrl, book);
  }

  public deleteBook(id: string) {
    return this.http.delete(`${this.booksUrl}/${id}`, {responseType: 'text'});
  }

  public editBook(book: Book) {
    return this.http.put(`${this.booksUrl}/${book.id}`, book);
  }

  public addComment( comment: UserComment) {
    return this.http.post<UserComment>(`${this.commentUrl}/${comment.id}`, comment);
  }

  public getAllCommentsByBookId(id: string): Observable<UserComment[]> {
    return this.http.get<UserComment[]>(`${this.commentUrl}/${id}`);
  }

  deleteComment(id: string) {
    return this.http.delete(`${this.commentUrl}/${id}`, {responseType: 'text'});
  }


}
