package com.example.bidordiespring.controllers;


import com.example.bidordiespring.models.Auction;

import com.example.bidordiespring.models.User;

import com.example.bidordiespring.payload.request.AuctionRequest;

import com.example.bidordiespring.payload.response.MessageResponse;
import com.example.bidordiespring.repository.AuctionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import java.util.List;

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

    //@GetMapping("/all")
    //public List<Auction> getAllAuctions() {
        //return auctionRepository.findAll();
    //}

    @PostMapping("/create")
    public ResponseEntity<?> createAuction(@Valid @RequestBody AuctionRequest aReq) throws ParseException {

        Date availablePeriodStart = null;
        Date availablePeriodEnd = null;
        Double openingPrice = null;
        Double buyoutPrice = null;
        String ownerId = "";
        Date auctionEndTime = null;
        try{
            availablePeriodStart = new SimpleDateFormat("yyyy-MM-dd").parse(aReq.getAvailablePeriodStart());
            availablePeriodEnd = new SimpleDateFormat("yyyy-MM-dd").parse(aReq.getAvailablePeriodEnd());
            openingPrice = aReq.getOpeningPrice();
            buyoutPrice = aReq.getBuyoutPrice();
            ownerId = aReq.getOwnerId();
            auctionEndTime = new SimpleDateFormat("yyyy-MM-dd").parse(aReq.getAuctionEndTime());

        }catch (Exception e){
            System.out.println(e);
        }


        Auction auction = new Auction(availablePeriodStart, availablePeriodEnd, openingPrice, buyoutPrice,  auctionEndTime, ownerId);
        auctionRepository.save(auction);
        return ResponseEntity.ok(new MessageResponse("Auction created succesfully"));
    }



}
