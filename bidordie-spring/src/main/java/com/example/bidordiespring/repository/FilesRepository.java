package com.example.bidordiespring.repository;

import com.example.bidordiespring.models.Files;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*")
public interface FilesRepository extends MongoRepository <Files, String> {
}
