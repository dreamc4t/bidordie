package com.example.bidordiespring.payload.request;

import javax.validation.constraints.NotBlank;

public class MessageRequest {

    @NotBlank
    private String message;
    @NotBlank
    private String emailOfSender;
    @NotBlank
    private String nameOfSender;
    @NotBlank
    private String phone;

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
