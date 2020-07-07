package ua.khai.shelemonchak.application.dto;

import lombok.Data;
import ua.khai.shelemonchak.application.entity.Author;
import ua.khai.shelemonchak.application.entity.Comments;

import java.util.Iterator;


public class CommentsDto {

    public String getId() {
        return id;
    }

    public String getText() {
        return text;
    }

    public String getUsername() {
        return username;
    }

    public String getDate() {
        return date;
    }

    private String id;
    private String text;
    private String username;
    private String date;

    public CommentsDto() {
        this.id = "";
        this.text = "";
        this.username = "";
        this.date = "";
    }

    public CommentsDto(Comments comments) {
        this.id = String.valueOf(comments.getId());
        this.text = comments.getComment();
        this.username = comments.getUser().getName();
        this.date = comments.getDate().toString();
    }

    @Override
    public String toString() {
        return "CommentsDto{" +
                "id='" + id + '\'' +
                ", text='" + text + '\'' +
                ", username='" + username + '\'' +
                ", date='" + date + '\'' +
                '}';
    }
}
