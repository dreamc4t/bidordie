package com.example.bidordiespring.repository;

import com.example.bidordiespring.models.Company;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CompanyRepository extends MongoRepository <Company, String> {
}
