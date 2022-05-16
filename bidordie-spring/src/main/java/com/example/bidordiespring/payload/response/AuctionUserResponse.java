package com.example.bidordiespring.payload.response;

public class AuctionUserResponse {

    private String email;
    private String imageUrl;
    private String firstName;
    private String lastName;
    private String town;
    private String biography;
    private String [] competence;

    public AuctionUserResponse(String email, String imageUrl, String firstName, String lastName, String town, String biography, String [] competence) {
        this.email = email;
        this.imageUrl = imageUrl;
        this.firstName = firstName;
        this.lastName = lastName;
        this.town = town;
        this.biography = biography;
        this.competence = competence;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getTown() {
        return town;
    }

    public void setTown(String town) {
        this.town = town;
    }

    public String getBiography() {
        return biography;
    }

    public void setBiography(String biography) {
        this.biography = biography;
    }

    public String[] getCompetence() {
        return competence;
    }

    public void setCompetence(String[] competence) {
        this.competence = competence;
    }
}
