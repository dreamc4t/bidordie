package com.example.bidordiespring.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotBlank;

@Document(collection = "messages")
public class FaqMessage {
    @Id
    private String id;

    @NotBlank
    private String nameOfSender;
    @NotBlank
    private String phone;
    @NotBlank
    private String emailOfSender;
    @NotBlank
    private String message;

    public FaqMessage(String nameOfSender, String phone, String emailOfSender, String message) {
        this.message = message;
        this.emailOfSender = emailOfSender;
        this.nameOfSender = nameOfSender;
        this.phone = phone;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getEmailOfSender() {
        return emailOfSender;
    }

    public void setEmailOfSender(String emailOfSender) {
        this.emailOfSender = emailOfSender;
    }

    public String getNameOfSender() {
        return nameOfSender;
    }

    public void setNameOfSender(String nameOfSender) {
        this.nameOfSender = nameOfSender;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

}
