#!/bin/bash

# Test script to verify AWS SES and IAM setup
echo "🧪 Testing AWS SES and IAM Setup"
echo "================================"

# Load environment variables from config file
if [ -f "env-config.sh" ]; then
    echo "🔑 Loading environment variables from env-config.sh..."
    source env-config.sh
else
    echo "⚠️ env-config.sh not found, using current environment variables"
fi

# Check if credentials are set
if [ "$AWS_ACCESS_KEY_ID" = "AKIA...your_actual_access_key_here" ]; then
    echo "❌ Please update AWS_ACCESS_KEY_ID in env-config.sh with your actual access key"
    exit 1
fi

if [ "$AWS_SECRET_ACCESS_KEY" = "your_actual_secret_key_here" ]; then
    echo "❌ Please update AWS_SECRET_ACCESS_KEY in env-config.sh with your actual secret key"
    exit 1
fi

echo "✅ Environment variables are configured"

# Test AWS CLI access (if installed)
if command -v aws &> /dev/null; then
    echo "🔍 Testing AWS CLI access..."
    aws ses get-send-quota --region $AWS_REGION
    if [ $? -eq 0 ]; then
        echo "✅ AWS SES access confirmed"
    else
        echo "❌ AWS SES access failed - check your credentials and permissions"
    fi
else
    echo "ℹ️ AWS CLI not installed - skipping CLI test"
fi

echo ""
echo "📝 Next steps:"
echo "1. Start your backend: ./mvnw spring-boot:run"
echo "2. Test the contact form or run: ./test-email.sh"
echo "3. Check your email for the test message"
