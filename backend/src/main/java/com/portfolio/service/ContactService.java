package com.portfolio.service;

import com.portfolio.dto.ContactMessageDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class ContactService {
    
    @Autowired
    private JavaMailSender mailSender;
    
    public void sendMessage(ContactMessageDto messageDto) {
        // Create email message
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo("your.email@example.com"); // Replace with your email
        message.setSubject("Portfolio Contact: " + messageDto.getSubject());
        message.setText(
            "Name: " + messageDto.getName() + "\n" +
            "Email: " + messageDto.getEmail() + "\n" +
            "Subject: " + messageDto.getSubject() + "\n\n" +
            "Message:\n" + messageDto.getMessage()
        );
        
        // Send email
        mailSender.send(message);
    }
}
