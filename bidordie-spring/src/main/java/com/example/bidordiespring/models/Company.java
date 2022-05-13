package com.example.bidordiespring.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Document(collection = "companies")
public class Company {

    @Id
    private String id;

    @NotBlank
    private String companyName;
    @NotBlank
    private String orgNr;
    @NotBlank
    @Email
    private String email;
    @NotBlank
    private String password;
    private String imageUrl;
    private String phone;
    private String address;
    private String zipCode;
    private String town;
    private String webpage;
    private String [] otherLinks;
    private String companyInfo;

    public Company(String companyName, String orgNr, String email, String password, String imageUrl, String phone, String address, String zipCode, String town, String webpage, String[] otherLinks, String companyInfo) {
        this.companyName = companyName;
        this.orgNr = orgNr;
        this.email = email;
        this.password = password;
        this.imageUrl = imageUrl;
        this.phone = phone;
        this.address = address;
        this.zipCode = zipCode;
        this.town = town;
        this.webpage = webpage;
        this.otherLinks = otherLinks;
        this.companyInfo = companyInfo;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
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

    public String getWebpage() {
        return webpage;
    }

    public void setWebpage(String webpage) {
        this.webpage = webpage;
    }

    public String[] getOtherLinks() {
        return otherLinks;
    }

    public void setOtherLinks(String[] otherLinks) {
        this.otherLinks = otherLinks;
    }

    public String getCompanyInfo() {
        return companyInfo;
    }

    public void setCompanyInfo(String companyInfo) {
        this.companyInfo = companyInfo;
    }
}
