package com.example.bidordiespring.repository;

import com.example.bidordiespring.models.Auction;
import com.example.bidordiespring.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserRepository extends MongoRepository <User, String> {

    Optional<User> findById(String id);

}
