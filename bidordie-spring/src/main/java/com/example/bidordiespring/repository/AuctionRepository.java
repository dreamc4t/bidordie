package com.example.bidordiespring.repository;

import com.example.bidordiespring.models.Auction;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface AuctionRepository extends MongoRepository<Auction, String> {

    Optional<Auction> findById(String id);
}
