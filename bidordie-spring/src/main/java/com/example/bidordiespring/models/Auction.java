package com.example.bidordiespring.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Document(collection = "auctions")
public class Auction {

    @Id
    private String auctionId;

    @NotNull
    private Date availablePeriodStart;
    @NotNull
    private Date availablePeriodEnd;
    @NotNull
    private Double openingPrice;
    @NotNull
    private Double buyoutPrice;

    private Date auctionStartTime;
    @NotNull
    private Date auctionEndTime;

    private double currentHighestBid;
    private String highestBidderId;
    private Date timeOfBid;

    public Auction(Date availablePeriodStart, Date availablePeriodEnd, Double openingPrice, Double buyoutPrice, Date auctionEndTime) {
        this.availablePeriodStart = availablePeriodStart;
        this.availablePeriodEnd = availablePeriodEnd;
        this.openingPrice = openingPrice;
        this.buyoutPrice = buyoutPrice;
        this.auctionStartTime = new Date();
        this.auctionEndTime = auctionEndTime;

        this.currentHighestBid = openingPrice;
        this.highestBidderId = null;
        this.timeOfBid = null;
    }

    public String getAuctionId() {
        return auctionId;
    }

    public void setAuctionId(String auctionId) {
        this.auctionId = auctionId;
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

    public Double getOpeningPrice() {
        return openingPrice;
    }

    public void setOpeningPrice(Double openingPrice) {
        this.openingPrice = openingPrice;
    }

    public Double getBuyoutPrice() {
        return buyoutPrice;
    }

    public void setBuyoutPrice(Double buyoutPrice) {
        this.buyoutPrice = buyoutPrice;
    }

    public double getcurrentHighestBid() {
        return this.currentHighestBid;
    }

    public void setCurrentHighestBid(double bid) {
        this.currentHighestBid = bid;
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

    public String getHighestBidderId() {
        return highestBidderId;
    }

    public void setHighestBidderId(String highestBidderId) {
        this.highestBidderId = highestBidderId;
    }

    public Date getTimeOfBid() {
        return timeOfBid;
    }

    public void setTimeOfBid(Date timeOfBid) {
        this.timeOfBid = timeOfBid;
    }
}
