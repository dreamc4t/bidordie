package com.example.bidordiespring.payload.response;

public class LoginResponse {

    boolean isLoggedIn;
    boolean isCompany;
    String userId;
    String message;

    public LoginResponse(boolean isLoggedIn, boolean isCompany, String userId, String message) {
        this.isLoggedIn = isLoggedIn;
        this.isCompany = isCompany;
        this.userId = userId;
        this.message = message;
    }

    public boolean isLoggedIn() {
        return this.isLoggedIn;
    }

    public void setLoggedIn(boolean loggedIn) {
        isLoggedIn = loggedIn;
    }

    public boolean isCompany() {
        return this.isCompany;
    }

    public void setCompany(boolean company) {
        isCompany = company;
    }

    public String getUserId() {
        return this.userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getMessage() {
        return this.message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}

