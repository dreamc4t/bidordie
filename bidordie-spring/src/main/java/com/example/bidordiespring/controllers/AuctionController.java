package com.example.bidordiespring.controllers;


import com.example.bidordiespring.models.Auction;
import com.example.bidordiespring.models.Bid;
import com.example.bidordiespring.models.User;
import com.example.bidordiespring.payload.request.BidRequest;
import com.example.bidordiespring.payload.response.MessageResponse;
import com.example.bidordiespring.repository.AuctionRepository;
import com.example.bidordiespring.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/users")
public class AuctionController {

    @Autowired
    AuctionRepository auctionRepository;

    @GetMapping("/getAuctionById/{id}")
    public Auction getAuctionById(@PathVariable String id) {
        return auctionRepository.findById(id).orElseThrow();
    }

    @PostMapping("/placeBid/{id}")
    public ResponseEntity<?> placeBid(@Valid @RequestBody BidRequest bidRequest, @PathVariable String id) {

        if (this.getAuctionById(id) == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("No auction found with passed id.");
        }
        if (bidRequest.getAmount() < this.getAuctionById(id).getcurrentHighestBid().getAmount()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Amount was not higher than current highest bid.");
        }

        Auction relevantAuction = this.getAuctionById(id);
        Bid newBid = new Bid(bidRequest.getBidderId(), bidRequest.getAmount());
        relevantAuction.setCurrentHighestBid(newBid);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body("Bid was placed successfully.");
    }

    @PostMapping("/create")
    public ResponseEntity<?> createAuction(@Valid @RequestBody Auction auctionRequest){
        auctionRepository.save(auctionRequest);
        return ResponseEntity.ok(new MessageResponse("Auction created succesfully"));
    }

}
