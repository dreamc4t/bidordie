package com.example.bidordiespring.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.bidordiespring.models.FaqMessage;
import com.example.bidordiespring.payload.request.MessageRequest;
import com.example.bidordiespring.repository.MessagesRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/faq")
public class MessageController {

    @Autowired
    MessagesRepository messagesRepository;

    @PostMapping("/messages")
        public ResponseEntity<?> newMessage(@RequestBody MessageRequest m) {
        FaqMessage message = new FaqMessage(m.getMessage(), m.getNameOfSender(), m.getEmailOfSender(), m.getPhone());

        messagesRepository.save(message);
        return ResponseEntity.ok("Question has been sent");
    }
}
