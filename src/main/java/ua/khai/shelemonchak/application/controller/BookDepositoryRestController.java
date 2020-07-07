package ua.khai.shelemonchak.application.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import ua.khai.shelemonchak.application.dto.BookDto;
import ua.khai.shelemonchak.application.entity.Book;
import ua.khai.shelemonchak.application.services.BookDepository;

import java.util.List;
import java.util.stream.Collectors;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class BookDepositoryRestController {

    @Autowired
    private BookDepository bookDepository;


    @GetMapping("/books")
    public List<BookDto> getBooks() {
        List<Book> books = bookDepository.getAllBooks();
        List<BookDto> bookDtos = books
                .stream()
                .map(BookDto::new)
                .collect(Collectors.toList());
        return bookDtos;
    }

    @PostMapping("/books")
    void addBook(@RequestBody BookDto bookDto) {
        bookDepository.addBook(bookDto);
    }

    @PutMapping("/books/{id}")
    void editBook(@PathVariable(value = "id") String id, @RequestBody BookDto bookDto) {
        System.out.println("\n\n\n" + id + "\n\n\n");
        bookDepository.updateBookNameById(Integer.parseInt(id), bookDto.getName());
    }

    @DeleteMapping("/books/{id}")
    void deleteBook(@PathVariable(value = "id") String id) {
        bookDepository.deleteBookById(Integer.parseInt(id));
    }

}