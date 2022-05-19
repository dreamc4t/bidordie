package com.example.bidordiespring.controllers;


import com.example.bidordiespring.models.ERole;
import com.example.bidordiespring.models.Role;
import com.example.bidordiespring.models.User;
import com.example.bidordiespring.payload.request.UserRequest;
import com.example.bidordiespring.payload.response.AuctionUserResponse;
import com.example.bidordiespring.payload.response.MessageResponse;
import com.example.bidordiespring.repository.RoleRepository;
import com.example.bidordiespring.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder encoder;

    @GetMapping("/all")
    public List<User> getAllUsers() {
        return userRepository.findAll();
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

    @PostMapping("/signup")
    public ResponseEntity<?> newUser(@Valid @RequestBody UserRequest u) {

        if (userRepository.existsByEmail(u.getEmail())) {
            System.out.println("Email already exists, no account created");
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already in use!"));


        }



        User user = new User(u.getFirstName(), u.getLastName(), u.getCompanyName(), u.getOrgNr(), u.getCompanyInfo(), u.getEmail(), encoder.encode(u.getPassword()), u.getEmail(), u.getImageUrl(),u.getCvUrl(), u.getPhone(), u.getAddress(), u.getZipCode(), u.getCompetence(), u.getGithubLink(), u.getLinkedinLink(), u.getOtherLinks(), u.getOtherInfo(), u.getBiography(), u.getTown());

        Set<Role> roles = new HashSet<>();
        Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
        roles.add(userRole);
        user.setRoles(roles);

        System.out.println(user.getEmail());
        userRepository.save(user);
        System.out.println("New user added");
        return ResponseEntity.ok(new MessageResponse("Gytt med ny user"));
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

    @GetMapping("/getAuctionUserById/{id}")
    public AuctionUserResponse getAuctionUserById(@PathVariable String id) {
        AuctionUserResponse response;
        try {
            User user = this.getUserById(id);
            response = new AuctionUserResponse(user.getEmail(), user.getImageUrl(), user.getFirstName(), user.getLastName(), user.getTown(), user.getBiography(), user.getCompetence());
            return response;
        } catch(Exception e) {
            return null;
        }
    }

}
