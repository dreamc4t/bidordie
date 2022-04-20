package com.example.bidordiespring.controllers;

import com.example.bidordiespring.models.Company;
import com.example.bidordiespring.payload.request.CompanyRequest;
import com.example.bidordiespring.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/companies")
public class CompanyController {

    @Autowired
    CompanyRepository companyRepository;

    @GetMapping("/all")
    public List<Company> getAllCompanies() {
        return companyRepository.findAll();
    }

    @GetMapping("/getCompanyById/{id}")
    public Company getCompanyById(@PathVariable String id) {return companyRepository.findCompanyById(id);}

    @DeleteMapping("/deleteCompanyById/{id}")
    public Company deleteCompany(@PathVariable String id) {return companyRepository.deleteCompanyById(id);}

    @PostMapping("/new")
    public ResponseEntity<?> newCompany(@RequestBody CompanyRequest c) {
        Company company = new Company(c.getCompanyName(), c.getOrgNr(), c.getEmail(), c.getPassword(), c.getImageUrl(), c.getPhone(), c.getAddress(), c.getZipCode(), c.getTown(), c.getWebpage(), c.getOtherLinks(), c.getCompanyInfo());

        companyRepository.save(company);
        return ResponseEntity.ok("Gytt med nytt företag reggat. Grattis alla");
    }
}
