package com.example.bidordiespring.repository;

import com.example.bidordiespring.models.Files;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FilesRepository extends MongoRepository <Files, String> {
}
