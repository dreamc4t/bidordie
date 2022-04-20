package com.example.bidordiespring.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.bidordiespring.models.FaqMessage;

public interface MessagesRepository extends MongoRepository <FaqMessage, String> {
    Optional<FaqMessage> findById(String id);
}
