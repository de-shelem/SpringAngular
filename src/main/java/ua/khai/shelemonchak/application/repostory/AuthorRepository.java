package ua.khai.shelemonchak.application.repostory;

import org.springframework.data.repository.CrudRepository;
import ua.khai.shelemonchak.application.entity.Author;
import ua.khai.shelemonchak.application.entity.Book;

import java.util.List;

public interface AuthorRepository extends CrudRepository<Author, Integer> {

    Author findAuthorById(int id);

    Author findAuthorByBooks(Book book);

    List<Author> findAll();

    Author findAuthorByName(String name);
}
