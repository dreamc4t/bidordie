package com.example.bidordiespring.controllers;

import com.example.bidordiespring.payload.request.LoginRequest;
import com.example.bidordiespring.payload.response.MessageResponse;
import com.example.bidordiespring.payload.response.LoginResponse;
import com.example.bidordiespring.repository.CompanyRepository;
import com.example.bidordiespring.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    UserRepository userRepository;
    @Autowired
    CompanyRepository companyRepository;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        if (userRepository.findByEmail(loginRequest.getEmail()).isPresent()){
            if (userRepository.findByEmail(loginRequest.getEmail()).get().getPassword().equals(loginRequest.getPassword())){
                return ResponseEntity.ok().body(new LoginResponse(true, false, userRepository.findByEmail(loginRequest.getEmail()).get().getId()));
            }
        } else if (companyRepository.findByEmail(loginRequest.getEmail()).isPresent()) {
            if (companyRepository.findByEmail(loginRequest.getEmail()).get().getPassword().equals(loginRequest.getPassword())) {
                return ResponseEntity.ok().body(new LoginResponse(true, true, companyRepository.findByEmail(loginRequest.getEmail()).get().getId()));
            }
        }

        return ResponseEntity.badRequest().body(new MessageResponse("The login failed. Please check username and password."));
    }
}
