package com.example.bidordiespring.controllers;


import com.example.bidordiespring.models.Auction;
import com.example.bidordiespring.models.User;
import com.example.bidordiespring.payload.request.BidRequest;
import com.example.bidordiespring.payload.request.AuctionRequest;
import com.example.bidordiespring.payload.response.MessageResponse;
import com.example.bidordiespring.repository.AuctionRepository;
import com.example.bidordiespring.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auctions")
public class AuctionController {

    @Autowired
    AuctionRepository auctionRepository;

    @Autowired
    UserRepository userRepository;

    @GetMapping("/getAuctionById/{id}")
    public Auction getAuctionById(@PathVariable String id) {
        try {
            return auctionRepository.findById(id).orElseThrow();
        } catch (Exception e) {
            System.out.println("getAuctionById error was: " + e);
        }
        return null;
    }

    @PostMapping("/placeBid/{id}")
    public ResponseEntity<?> placeBid(@Valid @RequestBody BidRequest bidRequest, @PathVariable String id) {

        if (this.getAuctionById(id) == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("No auction found with passed id.");
        }
        if (bidRequest.getAmount() < this.getAuctionById(id).getcurrentHighestBid()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Amount was not higher than current highest bid.");
        }

        Auction relevantAuction = this.getAuctionById(id);
        relevantAuction.setCurrentHighestBid(bidRequest.getAmount());
        relevantAuction.setHighestBidderId(bidRequest.getBidderId());
        relevantAuction.setTimeOfBid(new Date());

        auctionRepository.save(relevantAuction);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body("Bid was placed successfully.");
    }

    @PostMapping("/create/{userId}")
    public ResponseEntity<?> createAuction(@Valid @RequestBody AuctionRequest aReq, @PathVariable String userId) throws ParseException {

        Date availablePeriodStart = null;
        Date availablePeriodEnd = null;
        Double openingPrice = null;
        Double buyoutPrice = null;
        Date auctionEndTime = null;
        try{
            availablePeriodStart = new SimpleDateFormat("yyyy-MM-dd").parse(aReq.getAvailablePeriodStart());
            availablePeriodEnd = new SimpleDateFormat("yyyy-MM-dd").parse(aReq.getAvailablePeriodEnd());
            openingPrice = aReq.getOpeningPrice();
            buyoutPrice = aReq.getBuyoutPrice();
            auctionEndTime = new SimpleDateFormat("yyyy-MM-dd").parse(aReq.getAuctionEndTime());

        }catch (Exception e){
            System.out.println(e);
        }

        Auction auction = new Auction(availablePeriodStart, availablePeriodEnd, openingPrice, buyoutPrice,  auctionEndTime);
        auctionRepository.save(auction);

        User user;
        try {
            user = userRepository.findById(userId).orElseThrow();
            user.addAuction(auction);
            userRepository.save(user);
        } catch(Exception e) {
            System.out.println(e);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("No such user");
        }

        return ResponseEntity.ok(new MessageResponse("Auction created successfully"));
    }

}
