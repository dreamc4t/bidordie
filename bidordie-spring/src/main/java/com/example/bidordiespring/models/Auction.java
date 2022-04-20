package com.example.bidordiespring.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotBlank;
import java.util.Date;
import java.util.List;

@Document(collection = "auctions")
public class Auction {

    @Id
    private String auctionId;

    @NotBlank
    private Date startTimePeriod;
    @NotBlank
    private Date endTimePeriod;
    @NotBlank
    private Double openingPrice;
    @NotBlank
    private Double buyoutPrice;

    private Date auctionStartTime;
    private Date auctionEndTime;

    private double currentHighestBid;
    private String highestBidderId;
    private Date timeOfBid;

    public Auction(Date startTimePeriod, Date endTimePeriod, Double openingPrice, Double buyoutPrice, Date auctionEndTime) {
        this.startTimePeriod = startTimePeriod;
        this.endTimePeriod = endTimePeriod;
        this.openingPrice = openingPrice;
        this.buyoutPrice = buyoutPrice;

        this.auctionStartTime = new Date();
        this.auctionEndTime = auctionEndTime;

        this.currentHighestBid = 0;
        this.highestBidderId = null;
        this.timeOfBid = null;
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
}
