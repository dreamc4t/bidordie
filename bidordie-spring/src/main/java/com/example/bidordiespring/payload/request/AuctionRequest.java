package com.example.bidordiespring.payload.request;

import org.springframework.data.mongodb.core.mapping.DBRef;

import javax.validation.constraints.NotBlank;
import java.util.Date;
import java.util.List;

public class AuctionRequest {


    @NotBlank
    private String availablePeriodStart;
    @NotBlank
    private String availablePeriodEnd;
    @NotBlank
    @DBRef
    private String ownerId;
    @NotBlank
    private Double openingPrice;
    @NotBlank
    private Double buyoutPrice;
    @NotBlank
    private String auctionStartTime;
    @NotBlank
    private String auctionEndTime;


    public String getAvailablePeriodStart() {
        return availablePeriodStart;
    }

    public void setAvailablePeriodStart(String availablePeriodStart) {
        this.availablePeriodStart = availablePeriodStart;
    }

    public String getAvailablePeriodEnd() {
        return availablePeriodEnd;
    }

    public void setAvailablePeriodEnd(String availablePeriodEnd) {
        this.availablePeriodEnd = availablePeriodEnd;
    }

    public String getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(String ownerId) {
        this.ownerId = ownerId;
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

    public String getAuctionStartTime() {
        return auctionStartTime;
    }

    public void setAuctionStartTime(String auctionStartTime) {
        this.auctionStartTime = auctionStartTime;
    }

    public String getAuctionEndTime() {
        return auctionEndTime;
    }

    public void setAuctionEndTime(String auctionEndTime) {
        this.auctionEndTime = auctionEndTime;
    }
}


