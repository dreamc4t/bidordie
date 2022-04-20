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
            user.setFirstName(userRequest.getFirstName());
            user.setLastName(userRequest.getLastName());
            user.setEmail(userRequest.getEmail());
            user.setPassword(userRequest.getEmail());
            user.setImageUrl(userRequest.getImageUrl());
            user.setCvUrl(userRequest.getCvUrl());
            user.setPhone(userRequest.getPhone());
            user.setAddress(userRequest.getAddress());
            user.setZipCode(userRequest.getZipCode());
            user.setTown(userRequest.getTown());
            user.setGithubLink(userRequest.getGithubLink());
            user.setLinkedinLink(userRequest.getLinkedinLink());
            user.setOtherLinks(userRequest.getOtherLinks());
            user.setOtherInfo(userRequest.getOtherInfo());
            user.setBiography(userRequest.getBiography());
            user.setCompetence(userRequest.getCompetence());
            // user.setAuctions(userRequest.getAuctionsId());
            return new ResponseEntity<>(userRepository.save(user), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    /*@PutMapping("/editUserById/{id}")
    public ResponseEntity<User> editUser(@PathVariable String id, @Valid @RequestBody User user) {
        Optional<User> userToEdit = userRepository.findById(id));
        if (!userToEdit.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        if(userToEdit.get().getFirstName() != null) {
            userToEdit.get().setFirstName(user.getFirstName());
        }

    }*/

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
