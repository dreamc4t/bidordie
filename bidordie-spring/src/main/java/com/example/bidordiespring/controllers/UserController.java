package com.example.bidordiespring.controllers;


import com.example.bidordiespring.models.User;
import com.example.bidordiespring.payload.request.UserRequest;
import com.example.bidordiespring.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping("/all")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/getUserById/{id}")
    public Optional<User> getUserById(@PathVariable String id) {
        return userRepository.findUserById(id);
    }

    @PutMapping("/editUserById/{id}")
    public ResponseEntity<?> editUser(@PathVariable("id") String id, @RequestBody UserRequest userRequest) {
        Optional<User> userData = userRepository.findById(id);
        if (userData.isPresent()) {
            User user = userData.get();
            if(userRequest.getFirstName() != null) {
                user.setFirstName(userRequest.getFirstName());
            }
            if(userRequest.getLastName() != null) {
                user.setLastName(userRequest.getLastName());
            }
            if(userRequest.getEmail() != null) {
                user.setEmail(userRequest.getEmail());
            }
            if(userRequest.getPassword() != null) {
                user.setPassword((userRequest.getPassword()));
            }
            if(userRequest.getImageUrl() != null) {
                user.setImageUrl(userRequest.getImageUrl());
            }
            if(userRequest.getCvUrl() != null) {
                user.setCvUrl(userRequest.getCvUrl());
            }
            if(userRequest.getPhone() != null) {
                user.setPhone(userRequest.getPhone());
            }
            if(userRequest.getAddress() != null) {
                user.setAddress(userRequest.getAddress());
            }
            if(userRequest.getZipCode() != null) {
                user.setZipCode(userRequest.getZipCode());
            }
            if(userRequest.getTown() != null) {
                user.setTown(userRequest.getTown());
            }
            if(userRequest.getGithubLink() != null) {
                user.setGithubLink(userRequest.getGithubLink());
            }
            if(userRequest.getLinkedinLink() != null) {
                user.setLinkedinLink(userRequest.getLinkedinLink());
            }
            if(userRequest.getOtherLinks() != null) {
                user.setOtherLinks(userRequest.getOtherLinks());
            }
            if(userRequest.getOtherInfo() != null) {
                user.setOtherInfo(userRequest.getOtherInfo());
            }
            if(userRequest.getBiography() != null) {
                user.setBiography(userRequest.getBiography());
            }
            if(userRequest.getCompetence() != null) {
                user.setCompetence(userRequest.getCompetence());
            }
            /*if(userRequest.getAuctions() != null) {
                user.setAuctions(userRequest.getAuctionsId());
            }*/
            return new ResponseEntity<>(userRepository.save(user), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("deleteUserById/{id}")
    public User deleteUser(@PathVariable String id) {
        return userRepository.deleteUserById(id);
    }

    @PostMapping("/new")
    public ResponseEntity<?> newUser(@RequestBody UserRequest u) {

        User user = new User(u.getFirstName(), u.getLastName(), u.getEmail(), u.getPassword(), u.getImageUrl(),u.getCvUrl(), u.getPhone(), u.getAddress(), u.getZipCode(), u.getTown(), u.getGithubLink(), u.getLinkedinLink(), u.getOtherLinks(), u.getOtherInfo(), u.getBiography(), u.getCompetence(), u.getAuctionsId());

        userRepository.save(user);
        return ResponseEntity.ok("Gytt med ny user");
    }

}
