package ua.khai.shelemonchak.application.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ua.khai.shelemonchak.application.dto.CommentsDto;
import ua.khai.shelemonchak.application.entity.Comments;
import ua.khai.shelemonchak.application.services.BookDepository;

import java.util.List;
import java.util.stream.Collectors;

@RestController
public class CommentsRestController {

    @Autowired
    BookDepository bookDepository;


}
