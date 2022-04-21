package com.example.bidordiespring.controllers;

import com.example.bidordiespring.models.Company;
import com.example.bidordiespring.models.User;
import com.example.bidordiespring.payload.request.CompanyRequest;
import com.example.bidordiespring.payload.request.UserRequest;
import com.example.bidordiespring.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
    public Company getCompanyById(@PathVariable String id) {
        return companyRepository.findCompanyById(id);
    }

    @PutMapping("/editCompanyById/{id}")
    public ResponseEntity<?> editCompany(@PathVariable("id") String id, @RequestBody CompanyRequest companyRequest) {
        Optional<Company> companyData = companyRepository.findById(id);
        if (companyData.isPresent()) {
            Company company = companyData.get();
            company.setCompanyName(companyRequest.getCompanyName());
            company.setOrgNr(companyRequest.getOrgNr());
            company.setEmail(companyRequest.getEmail());
            company.setPassword(companyRequest.getPassword());
            company.setImageUrl(companyRequest.getImageUrl());
            company.setPhone(companyRequest.getPhone());
            company.setAddress(companyRequest.getAddress());
            company.setZipCode(companyRequest.getZipCode());
            company.setTown(companyRequest.getTown());
            company.setWebpage(companyRequest.getWebpage());
            company.setOtherLinks(companyRequest.getOtherLinks());
            company.setCompanyInfo(companyRequest.getCompanyInfo());
            return new ResponseEntity<>(companyRepository.save(company), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/deleteCompanyById/{id}")
    public Company deleteCompany(@PathVariable String id) {
        return companyRepository.deleteCompanyById(id);
    }

    @PostMapping("/new")
    public ResponseEntity<?> newCompany(@RequestBody CompanyRequest c) {
        Company company = new Company(c.getCompanyName(), c.getOrgNr(), c.getEmail(), c.getPassword(), c.getImageUrl(), c.getPhone(), c.getAddress(), c.getZipCode(), c.getTown(), c.getWebpage(), c.getOtherLinks(), c.getCompanyInfo());

        companyRepository.save(company);
        return ResponseEntity.ok("Gytt med nytt företag reggat. Grattis alla");
    }
}
