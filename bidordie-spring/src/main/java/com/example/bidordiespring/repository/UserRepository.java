package com.example.bidordiespring.repository;

import com.example.bidordiespring.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository <User, String> {
    Optional<User> findById(String id);
}
