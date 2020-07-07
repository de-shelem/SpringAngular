import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {BookListComponent} from './book-list/book-list.component';
import {BookFormComponent} from './book-form/book-form.component';
import {BookService} from './service/book.service';
import {BookEditComponent} from './book-edit/book-edit.component';
import {CommentFormComponent} from './comment-form/comment-form.component';
import {CommentListComponent} from './comment-list/comment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookFormComponent,
    BookEditComponent,
    CommentFormComponent,
    CommentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
