package ua.khai.shelemonchak.application.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ua.khai.shelemonchak.application.dto.BookDto;
import ua.khai.shelemonchak.application.dto.CommentsDto;
import ua.khai.shelemonchak.application.entity.Book;
import ua.khai.shelemonchak.application.entity.Comments;
import ua.khai.shelemonchak.application.services.BookDepository;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CommentsRestController {

    @Autowired
    BookDepository bookDepository;

    @GetMapping("/comments/{id}")
    public List<CommentsDto> getComments(@PathVariable(value = "id") String id) {
        List<Comments> comments = bookDepository.findAllCommentByBookId(Integer.parseInt(id));
        List<CommentsDto> commentsDtos = comments
                .stream()
                .map(CommentsDto::new)
                .collect(Collectors.toList());

        return commentsDtos;
    }

    @PostMapping("/comments/{id}")
    void addComment(@PathVariable(value = "id") String id, @RequestBody CommentsDto commentsDto) {
        System.out.println("\n\n\n"+commentsDto.toString()+"\n\n\n");
        bookDepository.addCommentByBookId(Integer.parseInt(id), commentsDto);
    }

    @DeleteMapping("/comments/{id}")
    void deleteComment(@PathVariable(value = "id") String id) {
        System.out.println("\n\n\n"+id+"\n\n\n");
        bookDepository.deleteCommentsById(Integer.parseInt(id));
    }

}
