package com.example.bidordiespring.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;

import javax.validation.constraints.NotBlank;
import java.util.Date;
import java.util.List;

public class Auction {

    @Id
    private String auctionId;
    @NotBlank
    private Date startTimePeriod;
    @NotBlank
    private Date endTimePeriod;
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
    private Date auctionEndTime;


    public Auction() {
    }

    public Auction(Date startTimePeriod, Date endTimePeriod, String ownerId, Double openingPrice, Double buyoutPrice) {
        this.startTimePeriod = startTimePeriod;
        this.endTimePeriod = endTimePeriod;
        this.ownerId = ownerId;
        this.openingPrice = openingPrice;
        this.buyoutPrice = buyoutPrice;
    }

    public Date getStartTimePeriod() {
        return startTimePeriod;
    }

    public void setStartTimePeriod(Date startTimePeriod) {
        this.startTimePeriod = startTimePeriod;
    }

    public Date getEndTimePeriod() {
        return endTimePeriod;
    }

    public void setEndTimePeriod(Date endTimePeriod) {
        this.endTimePeriod = endTimePeriod;
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
