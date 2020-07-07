import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BookListComponent} from './book-list/book-list.component';
import {BookFormComponent} from './book-form/book-form.component';
import {BookEditComponent} from "./book-edit/book-edit.component";
import {CommentFormComponent} from "./comment-form/comment-form.component";
import {CommentListComponent} from "./comment-list/comment-list.component";

const routes: Routes = [
  {path: 'books', component: BookListComponent},
  {path: 'addBook', component: BookFormComponent},
  {path: 'editBookName/:id', component: BookEditComponent},
  {path: 'addComment/:id', component: CommentFormComponent} ,
  {path: 'showComments/:id', component: CommentListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
