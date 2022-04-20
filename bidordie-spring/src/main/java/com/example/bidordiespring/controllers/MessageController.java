package com.example.bidordiespring.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import com.example.bidordiespring.models.FaqMessage;
import com.example.bidordiespring.payload.request.MessageRequest;
import com.example.bidordiespring.repository.MessagesRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/FAQ")
public class MessageController {

    @Autowired
    MessagesRepository messagesRepository;

    @GetMapping("/allmessages")
    public List<FaqMessage> getAllMessages() {
        return messagesRepository.findAll();
    }

    @PostMapping("/messages")
        public ResponseEntity<?> newMessage(@RequestBody MessageRequest m) {
        FaqMessage message = new FaqMessage(m.getNameOfSender(), m.getPhone(), m.getEmailOfSender(), m.getMessage());

        messagesRepository.save(message);
        return ResponseEntity.ok("Question has been sent!");
    }
}
