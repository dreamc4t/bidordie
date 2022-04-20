package com.example.bidordiespring.repository;

import com.example.bidordiespring.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends MongoRepository <User, String> {
    List<User> getUserByName(String name);
}
