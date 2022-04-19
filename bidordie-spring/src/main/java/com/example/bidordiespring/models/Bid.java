package com.example.bidordiespring.models;

import java.util.Date;

public class Bid {

    // Klassen motsvarar inte en collection i databasen utan objekt som lagras i ett array hos Auction-klassen

    private final Date timeOfBid;
    private final String bidderId;
    private final double amount;

    public Bid(String bidderId, double amount) {
        this.timeOfBid = new Date();
        this.bidderId = bidderId;
        this.amount = amount;
    }

    public Date getTimeOfBid() {
        return timeOfBid;
    }

    public String getBidderId() {
        return bidderId;
    }

    public double getAmount() {
        return amount;
    }
}
