package com.example.bidordiespring.models;

import org.springframework.data.annotation.Id;

import javax.validation.constraints.NotBlank;

import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.HashSet;
import java.util.Set;

@Document(collection = "users")
public class User {

    @Id
    private String id;

    @NotBlank
    private String firstName;
    @NotBlank
    private String lastName;
    @NotBlank
    private String email;
    @NotBlank
    private String password;

    @NotBlank
    private String username;

    private String companyName;
    private String orgNr;
    private String companyInfo;

    private String imageUrl;
    private String cvUrl;
    private String phone;
    private String address;
    private String zipCode;
    private String town;
    private String githubLink;
    private String linkedinLink;
    private String [] otherLinks;
    private String otherInfo;
    private String biography;
    private String [] competence;

    @DBRef
    private Set<Auction> auctions; // Variabeln bör ha samma namn som den collection den refererar till i databasen.

    @DBRef
    private Set<Role> roles = new HashSet<>();


    public User() {
    }

    public User(String firstName, String lastName, String email, String password, String username,String imageUrl, String cvUrl, String phone, String address, String zipCode, String town, String githubLink, String linkedinLink, String[] otherLinks, String otherInfo, String biography, String[] competence) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;

        this.username = username;

        this.imageUrl = imageUrl;
        this.cvUrl = cvUrl;
        this.phone = phone;
        this.address = address;
        this.zipCode = zipCode;
        this.town = town;
        this.githubLink = githubLink;
        this.linkedinLink = linkedinLink;
        this.otherLinks = otherLinks;
        this.otherInfo = otherInfo;
        this.biography = biography;
        this.competence = competence;
        this.auctions = new HashSet<>();
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getOrgNr() {
        return orgNr;
    }

    public void setOrgNr(String orgNr) {
        this.orgNr = orgNr;
    }

    public String getCompanyInfo() {
        return companyInfo;
    }

    public void setCompanyInfo(String companyInfo) {
        this.companyInfo = companyInfo;
    }

    public void addAuction(Auction auction) {
        this.auctions.add(auction);
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getCvUrl() {
        return cvUrl;
    }

    public void setCvUrl(String cvUrl) {
        this.cvUrl = cvUrl;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public String getTown() {
        return town;
    }

    public void setTown(String town) {
        this.town = town;
    }

    public String getGithubLink() {
        return githubLink;
    }

    public void setGithubLink(String githubLink) {
        this.githubLink = githubLink;
    }

    public String getLinkedinLink() {
        return linkedinLink;
    }

    public void setLinkedinLink(String linkedinLink) {
        this.linkedinLink = linkedinLink;
    }

    public String[] getOtherLinks() {
        return otherLinks;
    }

    public void setOtherLinks(String[] otherLinks) {
        this.otherLinks = otherLinks;
    }

    public String getOtherInfo() {
        return otherInfo;
    }

    public void setOtherInfo(String otherInfo) {
        this.otherInfo = otherInfo;
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

    public Set<Auction> getAuctions() {
        return auctions;
    }

    public void setAuctions(Set<Auction> auctions) {
        this.auctions = auctions;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }
}
