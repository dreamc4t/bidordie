package com.example.bidordiespring.repository;

import com.example.bidordiespring.models.Company;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface CompanyRepository extends MongoRepository <Company, String> {
    Company findCompanyById(String id);
    Company deleteCompanyById(String id);
}
