package ua.khai.shelemonchak.application.repostory;

import org.springframework.data.repository.CrudRepository;
import ua.khai.shelemonchak.application.entity.Book;
import ua.khai.shelemonchak.application.entity.Comments;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
public interface CommentsRepository extends CrudRepository<Comments, Integer> {

    Comments findCommentsById(int id);

    List<Comments> findAllByBook(Book book);

    List<Comments> findAll();

    void deleteCommentsById(int id);

}
