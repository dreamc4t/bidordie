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
    @DBRef
    private String ownerId;
    @NotBlank
    private Double openingPrice;
    @NotBlank
    private Double buyoutPrice;

    private Bid currentHighestBid;
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

    public Double getBuyoutPrice() {
        return buyoutPrice;
    }

    public void setBuyoutPrice(Double buyoutPrice) {
        this.buyoutPrice = buyoutPrice;
    }

    public Bid getcurrentHighestBid() {
        return this.currentHighestBid;
    }

    public void setCurrentHighestBid(Bid bid) {
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
