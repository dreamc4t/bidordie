package com.example.bidordiespring.repository;

import com.example.bidordiespring.models.ERole;
import com.example.bidordiespring.models.Role;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface RoleRepository extends MongoRepository<Role, String> {
    Optional<Role> findByName(ERole name);
}
