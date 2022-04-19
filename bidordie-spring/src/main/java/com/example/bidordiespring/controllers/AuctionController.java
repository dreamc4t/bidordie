package com.example.bidordiespring.controllers;


import com.example.bidordiespring.models.Auction;
import com.example.bidordiespring.payload.response.MessageResponse;
import com.example.bidordiespring.repository.AuctionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/users")
public class AuctionController {

    @Autowired
    AuctionRepository auctionRepository;



    @PostMapping("/create")
    public ResponseEntity<?> createAuction(@Valid @RequestBody Auction auctionRequest){
        auctionRepository.save(auctionRequest);
        return ResponseEntity.ok(new MessageResponse("Auction created succesfully"));
    }



}
