package com.example.bidordiespring.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotBlank;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Document(collection = "auctions")
public class Auction {

    @Id
    private String auctionId;
    @NotBlank
    private Date availablePeriodStart;
    @NotBlank
    private Date availablePeriodEnd;
    @NotBlank
    @DBRef
    private String ownerId;
    @NotBlank
    private Double openingPrice;
    private Double currentHighestBid;
    private Double currentBid;
    @NotBlank
    private Double buyoutPrice;
    private List<String> bidIdHistory;
    private Date auctionStartTime;
    @NotBlank
    private Date auctionEndTime;


    public Auction() {
    }

    public Auction(Date availablePeriodStart, Date availablePeriodEnd, Double openingPrice, Double buyoutPrice, Date auctionEndTime, String ownerId) {
        this.availablePeriodStart = availablePeriodStart;
        this.availablePeriodEnd = availablePeriodEnd;
        this.openingPrice = openingPrice;
        this.buyoutPrice = buyoutPrice;
        this.auctionStartTime = new Date();
        this.auctionEndTime = auctionEndTime;
        this.ownerId = ownerId;
    }

    public String getAuctionId() {
        return auctionId;
    }

    public void setAuctionId(String auctionId) {
        this.auctionId = auctionId;
    }

    public String getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(String ownerId) {
        this.ownerId = ownerId;
    }

    public Date getAvailablePeriodStart() {
        return availablePeriodStart;
    }

    public void setAvailablePeriodStart(Date availablePeriodStart) {
        this.availablePeriodStart = availablePeriodStart;
    }

    public Date getAvailablePeriodEnd() {
        return availablePeriodEnd;
    }

    public void setAvailablePeriodEnd(Date availablePeriodEnd) {
        this.availablePeriodEnd = availablePeriodEnd;
    }

    public String getOwnerAuctionId() {
        return ownerId;
    }

    public void setOwnerAuctionId(String ownerAuctionId) {
        this.ownerId = ownerAuctionId;
    }

    public Double getOpeningPrice() {
        return openingPrice;
    }

    public void setOpeningPrice(Double openingPrice) {
        this.openingPrice = openingPrice;
    }

    public Double getCurrentHighestBid() {
        return currentHighestBid;
    }

    public void setCurrentHighestBid(Double currentHighestBid) {
        this.currentHighestBid = currentHighestBid;
    }

    public Double getCurrentBid() {
        return currentBid;
    }

    public void setCurrentBid(Double currentBid) {
        this.currentBid = currentBid;
    }

    public Double getBuyoutPrice() {
        return buyoutPrice;
    }

    public void setBuyoutPrice(Double buyoutPrice) {
        this.buyoutPrice = buyoutPrice;
    }

    public List<String> getBidIdHistory() {
        return bidIdHistory;
    }

    public void setBidIdHistory(List<String> bidIdHistory) {
        this.bidIdHistory = bidIdHistory;
    }

    public Date getAuctionStartTime() {
        return auctionStartTime;
    }

    public void setAuctionStartTime(Date auctionStartTime) {
        this.auctionStartTime = auctionStartTime;
    }

    public Date getAuctionEndTime() {
        return auctionEndTime;
    }

    public void setAuctionEndTime(Date auctionEndTime) {
        this.auctionEndTime = auctionEndTime;
    }
}
