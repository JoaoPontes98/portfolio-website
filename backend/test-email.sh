#!/bin/bash

# Test script for AWS SES email functionality
# Make sure to set your environment variables before running

echo "Testing AWS SES Email Functionality..."
echo "======================================"

# Load environment variables from config file
if [ -f "env-config.sh" ]; then
    echo "🔑 Loading environment variables from env-config.sh..."
    source env-config.sh
else
    echo "⚠️ env-config.sh not found, using current environment variables"
fi

# Check if environment variables are set
if [ -z "$AWS_ACCESS_KEY_ID" ]; then
    echo "❌ AWS_ACCESS_KEY_ID is not set"
    exit 1
fi

if [ -z "$AWS_SECRET_ACCESS_KEY" ]; then
    echo "❌ AWS_SECRET_ACCESS_KEY is not set"
    exit 1
fi

echo "✅ Environment variables are set"

# Test data
TEST_DATA='{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Message from Portfolio",
    "message": "This is a test message to verify AWS SES integration is working correctly."
}'

echo "📧 Sending test email..."

# Send POST request to your contact endpoint
RESPONSE=$(curl -s -w "\n%{http_code}" -X POST \
    -H "Content-Type: application/json" \
    -d "$TEST_DATA" \
    http://localhost:8080/api/contact/send)

# Extract response body and status code
HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
RESPONSE_BODY=$(echo "$RESPONSE" | sed '$d')

echo "Response Code: $HTTP_CODE"
echo "Response Body: $RESPONSE_BODY"

if [ "$HTTP_CODE" -eq 200 ]; then
    echo "✅ Email sent successfully!"
    echo "📬 Check your email inbox for the test message"
else
    echo "❌ Email sending failed"
    echo "Check your AWS credentials and SES configuration"
fi

echo "======================================"
echo "Test completed"
