package com.example.bidordiespring.payload.response;

public class LoginResponse {

    boolean isLoggedIn;
    boolean isCompany;
    String userId;

    public LoginResponse(boolean isLoggedIn, boolean isCompany, String userId) {
        this.isLoggedIn = isLoggedIn;
        this.isCompany = isCompany;
        this.userId = userId;
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
}
