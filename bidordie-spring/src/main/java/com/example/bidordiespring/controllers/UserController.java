package com.example.bidordiespring.controllers;


import com.example.bidordiespring.models.User;
import com.example.bidordiespring.payload.request.UserRequest;
import com.example.bidordiespring.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @PostMapping("/new")
    public ResponseEntity<?> newUser(@RequestBody UserRequest u) {

        User user = new User(u.getFirstName(), u.getLastName(), u.getEmail(), u.getPassword(), u.getImageUrl(),u.getCvUrl(), u.getPhone(), u.getAddress(), u.getZipCode(), u.getTown(), u.getGithubLink(), u.getLinkedinLink(), u.getOtherLinks(), u.getOtherInfo(), u.getBiography(), u.getCompetence());
        System.out.println(user.getEmail());
        userRepository.save(user);
        return ResponseEntity.ok("Gytt med ny user");
    }

    @GetMapping("/getUserById/{id}")
    public User getUserById(@PathVariable String id) {
        try {
            return userRepository.findById(id).orElseThrow();
        }catch(Exception e) {
            System.out.println(userRepository.findById(id));
            System.out.println(e);
        }
        return null;
    }

}
