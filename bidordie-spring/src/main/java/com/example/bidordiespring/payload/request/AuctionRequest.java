package com.example.bidordiespring.payload.request;

import org.springframework.data.mongodb.core.mapping.DBRef;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.List;

public class AuctionRequest {

    @NotBlank
    private String availablePeriodStart;
    @NotBlank
    private String availablePeriodEnd;
    @NotNull
    private Double openingPrice;
    @NotNull
    private Double buyoutPrice;
    @NotBlank
    private String auctionEndTime;

    public String getAvailablePeriodStart() {
        return this.availablePeriodStart;
    }

    public void setAvailablePeriodStart(String availablePeriodStart) {
        this.availablePeriodStart = availablePeriodStart;
    }

    public String getAvailablePeriodEnd() {
        return this.availablePeriodEnd;
    }

    public void setAvailablePeriodEnd(String availablePeriodEnd) {
        this.availablePeriodEnd = availablePeriodEnd;
    }

    public Double getOpeningPrice() {
        return this.openingPrice;
    }

    public void setOpeningPrice(Double openingPrice) {
        this.openingPrice = openingPrice;
    }

    public Double getBuyoutPrice() {
        return this.buyoutPrice;
    }

    public void setBuyoutPrice(Double buyoutPrice) {
        this.buyoutPrice = buyoutPrice;
    }

    public String getAuctionEndTime() {
        return this.auctionEndTime;
    }

    public void setAuctionEndTime(String auctionEndTime) {
        this.auctionEndTime = auctionEndTime;
    }
}


