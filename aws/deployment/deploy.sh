#!/bin/bash

# Portfolio Website Deployment Script
# This script deploys the portfolio website to AWS

set -e

# Configuration
ENVIRONMENT=${1:-prod}
REGION=${2:-us-east-1}
STACK_NAME="portfolio-${ENVIRONMENT}"
TEMPLATE_FILE="aws/infrastructure/cloudformation-template.yml"

echo "🚀 Starting deployment for environment: ${ENVIRONMENT}"
echo "📍 Region: ${REGION}"
echo "📦 Stack Name: ${STACK_NAME}"

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo "❌ AWS CLI is not installed. Please install it first."
    exit 1
fi

# Check if user is logged in to AWS
if ! aws sts get-caller-identity &> /dev/null; then
    echo "❌ Not logged in to AWS. Please run 'aws configure' first."
    exit 1
fi

# Build React application
echo "🔨 Building React application..."
cd frontend
npm run build
cd ..

# Upload React build to S3
echo "📤 Uploading React build to S3..."
aws s3 sync frontend/build/ s3://${ENVIRONMENT}-portfolio-website-$(aws sts get-caller-identity --query Account --output text) --delete

# Deploy CloudFormation stack
echo "☁️ Deploying CloudFormation stack..."
aws cloudformation deploy \
    --template-file ${TEMPLATE_FILE} \
    --stack-name ${STACK_NAME} \
    --parameter-overrides Environment=${ENVIRONMENT} \
    --capabilities CAPABILITY_IAM \
    --region ${REGION}

# Get stack outputs
echo "📋 Getting stack outputs..."
WEBSITE_URL=$(aws cloudformation describe-stacks \
    --stack-name ${STACK_NAME} \
    --region ${REGION} \
    --query 'Stacks[0].Outputs[?OutputKey==`WebsiteURL`].OutputValue' \
    --output text)

DB_ENDPOINT=$(aws cloudformation describe-stacks \
    --stack-name ${STACK_NAME} \
    --region ${REGION} \
    --query 'Stacks[0].Outputs[?OutputKey==`DatabaseEndpoint`].OutputValue' \
    --output text)

echo "✅ Deployment completed successfully!"
echo "🌐 Website URL: ${WEBSITE_URL}"
echo "🗄️ Database Endpoint: ${DB_ENDPOINT}"
echo ""
echo "📝 Next steps:"
echo "1. Update your DNS records to point to the CloudFront distribution"
echo "2. Configure your backend to connect to the RDS database"
echo "3. Set up SSL certificates for your domain"
echo "4. Configure environment variables for your backend application"
