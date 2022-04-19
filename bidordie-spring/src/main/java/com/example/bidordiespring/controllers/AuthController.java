package com.example.bidordiespring.controllers;

import com.example.bidordiespring.payload.request.LoginRequest;
import com.example.bidordiespring.payload.response.MessageResponse;
import com.example.bidordiespring.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    UserRepository userRepository;


    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        if (userRepository.findByEmail(loginRequest.getEmail()).isPresent()){
            if (userRepository.findByEmail(loginRequest.getEmail()).get().getPassword().equals(loginRequest.getPassword())){
                return ResponseEntity.ok(new MessageResponse("Login Successfully"));
            }
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new MessageResponse("The login failed. Please check username and password."));
    }
}
