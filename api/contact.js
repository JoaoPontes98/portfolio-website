// Vercel serverless function for contact form
// This replaces the Spring Boot backend

const AWS = require('aws-sdk');

// Configure AWS SES
const ses = new AWS.SES({
  region: process.env.AWS_REGION || 'ca-central-1',
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validate input
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    if (name.length < 2 || name.length > 100) {
      return res.status(400).json({ error: 'Name must be between 2 and 100 characters' });
    }

    if (subject.length < 5 || subject.length > 200) {
      return res.status(400).json({ error: 'Subject must be between 5 and 200 characters' });
    }

    if (message.length < 10 || message.length > 1000) {
      return res.status(400).json({ error: 'Message must be between 10 and 1000 characters' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Please provide a valid email address' });
    }

    // Create email content
    const emailSubject = `Portfolio Contact: ${subject}`;
    const emailBody = `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
    `.trim();

    // Send email using AWS SES
    const params = {
      Source: process.env.FROM_EMAIL || 'joao.vrpontes@gmail.com',
      Destination: {
        ToAddresses: [process.env.TO_EMAIL || 'joao.vrpontes@gmail.com'],
      },
      Message: {
        Subject: {
          Data: emailSubject,
          Charset: 'UTF-8',
        },
        Body: {
          Text: {
            Data: emailBody,
            Charset: 'UTF-8',
          },
        },
      },
    };

    const result = await ses.sendEmail(params).promise();

    console.log('Email sent successfully:', result.MessageId);

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully',
      messageId: result.MessageId,
    });

  } catch (error) {
    console.error('Error sending email:', error);
    
    return res.status(500).json({
      error: 'Failed to send message',
      details: error.message,
    });
  }
}
