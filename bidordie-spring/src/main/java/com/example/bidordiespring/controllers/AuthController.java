package com.example.bidordiespring.controllers;

import com.example.bidordiespring.payload.request.LoginRequest;
import com.example.bidordiespring.payload.response.JwtResponse;
import com.example.bidordiespring.payload.response.MessageResponse;
import com.example.bidordiespring.payload.response.LoginResponse;
import com.example.bidordiespring.repository.CompanyRepository;
import com.example.bidordiespring.repository.RoleRepository;
import com.example.bidordiespring.repository.UserRepository;
import com.example.bidordiespring.security.jwt.JwtUtils;
import com.example.bidordiespring.security.services.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {


    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    JwtUtils jwtUtils;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    UserRepository userRepository;

    @Autowired
    CompanyRepository companyRepository;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {


        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.getId(),
                userDetails.getUsername(),
                userDetails.getEmail(),
                roles));


        /*if (userRepository.findByEmail(loginRequest.getEmail()).isPresent()){
            if (userRepository.findByEmail(loginRequest.getEmail()).get().getPassword().equals(loginRequest.getPassword())){
                return ResponseEntity.ok().body(new LoginResponse(true, false, userRepository.findByEmail(loginRequest.getEmail()).get().getId()));
            }
        } else if (companyRepository.findByEmail(loginRequest.getEmail()).isPresent()) {
            if (companyRepository.findByEmail(loginRequest.getEmail()).get().getPassword().equals(loginRequest.getPassword())) {
                return ResponseEntity.ok().body(new LoginResponse(true, true, companyRepository.findByEmail(loginRequest.getEmail()).get().getId()));
            }
        }
        return ResponseEntity.badRequest().body(new MessageResponse("The login failed. Please check username and password."));*/
    }
}
