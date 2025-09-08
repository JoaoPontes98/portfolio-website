package com.portfolio.controller;

import com.portfolio.dto.ContactMessageDto;
import com.portfolio.service.ContactService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:3000")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @PostMapping("/send")
    public ResponseEntity<?> sendMessage(@Valid @RequestBody ContactMessageDto messageDto) {
        try {
            contactService.sendMessage(messageDto);
            return ResponseEntity.ok().body("Message sent successfully");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Failed to send message: " + e.getMessage());
        }
    }
}
