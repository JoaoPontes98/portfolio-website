package com.portfolio.service;

import com.portfolio.dto.ContactMessageDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import software.amazon.awssdk.services.ses.SesClient;
import software.amazon.awssdk.services.ses.model.*;

@Service
public class ContactService {
    
    @Autowired
    private SesClient sesClient;
    
    @Value("${aws.ses.from-email}")
    private String fromEmail;
    
    @Value("${aws.ses.to-email}")
    private String toEmail;
    
    public void sendMessage(ContactMessageDto messageDto) {
        try {
            // Create the email content
            String subject = "Portfolio Contact: " + messageDto.getSubject();
            String bodyText = String.format(
                "Name: %s\n" +
                "Email: %s\n" +
                "Subject: %s\n\n" +
                "Message:\n%s",
                messageDto.getName(),
                messageDto.getEmail(),
                messageDto.getSubject(),
                messageDto.getMessage()
            );
            
            // Create the email body
            Body body = Body.builder()
                    .text(Content.builder()
                            .data(bodyText)
                            .charset("UTF-8")
                            .build())
                    .build();
            
            // Create the message
            Message message = Message.builder()
                    .subject(Content.builder()
                            .data(subject)
                            .charset("UTF-8")
                            .build())
                    .body(body)
                    .build();
            
            // Create the destination
            Destination destination = Destination.builder()
                    .toAddresses(toEmail)
                    .build();
            
            // Create the send email request
            SendEmailRequest emailRequest = SendEmailRequest.builder()
                    .source(fromEmail)
                    .destination(destination)
                    .message(message)
                    .build();
            
            // Send the email
            SendEmailResponse response = sesClient.sendEmail(emailRequest);
            
            System.out.println("Email sent successfully. Message ID: " + response.messageId());
            
        } catch (Exception e) {
            System.err.println("Error sending email: " + e.getMessage());
            throw new RuntimeException("Failed to send email", e);
        }
    }
}
