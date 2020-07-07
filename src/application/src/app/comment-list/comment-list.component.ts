import {Component, OnInit} from '@angular/core';
import {BookService} from "../service/book.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserComment} from "../model/user-comment";

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent  {

  comments: UserComment[];
  id: string;

  constructor(private route: ActivatedRoute, private router: Router, private bookService: BookService) {
    this.id = this.route.snapshot.params['id'];
  }

  deleteComment(id: string) {
    this.bookService.deleteComment(id).subscribe(
      data => {
        console.log(data);
        this.ngOnInit();
      },
      error => console.log(error));
  }

  ngOnInit() {
    this.bookService.getAllCommentsByBookId(this.id).subscribe(data => {
      this.comments = data;
    });
  }
}
