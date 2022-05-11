package com.example.bidordiespring.repository;

import com.example.bidordiespring.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserRepository extends MongoRepository <User, String> {
    Optional<User> findByEmail(String email);
    Optional<User> findByUsername(String username);
    Optional<User> findUserById(String id);
    User deleteUserById(String id);
    Boolean existsByUsername(String username);
    Boolean existsByEmail(String email);
}
