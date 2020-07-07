import {Component} from '@angular/core';
import {BookService} from "../service/book.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CommentDto} from "../model/commentDto";
import {UserComment} from "../model/user-comment";

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent {

  comment: UserComment;


  constructor(private route: ActivatedRoute, private router: Router, private bookService: BookService) {
    this.comment = new UserComment();
    this.comment.id = this.route.snapshot.params['id'];
  }

  onSubmit() {

    this.bookService.addComment( this.comment).subscribe(result => this.gotoBookList());
  }

  gotoBookList() {
    this.router.navigate(['/books']);
  }

}

