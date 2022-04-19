package com.example.bidordiespring.repository;

import com.example.bidordiespring.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository <User, String> {
}
