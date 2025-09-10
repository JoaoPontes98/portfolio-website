# AWS SES Setup Guide for Portfolio Contact Form

This guide will help you set up AWS Simple Email Service (SES) for your portfolio contact form.

## Prerequisites

1. AWS Account
2. AWS CLI installed (optional but recommended)
3. Domain verification (for production use)

## Step 1: AWS SES Setup

### 1.1 Create AWS SES Account
1. Log into your AWS Console
2. Navigate to Simple Email Service (SES)
3. Choose your preferred region (recommended: us-east-1 for better deliverability)

### 1.2 Verify Email Addresses
1. In SES Console, go to "Verified identities"
2. Click "Create identity"
3. Choose "Email address"
4. Enter your email: `joao.vrpontes@gmail.com`
5. Click "Create identity"
6. Check your email and click the verification link

### 1.3 Create IAM User (Recommended for security)
1. Go to IAM Console
2. Create a new user: `portfolio-ses-user`
3. Attach policy: `AmazonSESFullAccess` (or create custom policy with minimal permissions)
4. Generate access keys
5. Save the Access Key ID and Secret Access Key

## Step 2: Environment Configuration

Create a `.env` file in your backend directory with the following variables:

```bash
# AWS SES Configuration
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your_aws_access_key_here
AWS_SECRET_ACCESS_KEY=your_aws_secret_key_here
FROM_EMAIL=joao.vrpontes@gmail.com
TO_EMAIL=joao.vrpontes@gmail.com
```

## Step 3: Production Considerations

### 3.1 Domain Verification (For Production)
1. In SES Console, verify your domain
2. Add DNS records to your domain's DNS settings
3. This allows you to send emails from any address on your domain

### 3.2 Move Out of Sandbox Mode
1. In SES Console, go to "Account dashboard"
2. Click "Request production access"
3. Fill out the form explaining your use case
4. Wait for AWS approval (usually 24-48 hours)

### 3.3 Rate Limits
- Sandbox mode: 200 emails per day, 1 email per second
- Production mode: Higher limits based on your request

## Step 4: Testing

1. Start your backend server
2. Test the contact form on your frontend
3. Check your email for the message
4. Monitor AWS CloudWatch for SES metrics

## Step 5: Security Best Practices

1. **Never commit AWS credentials to version control**
2. Use environment variables or AWS Secrets Manager
3. Rotate access keys regularly
4. Use IAM roles when running on AWS infrastructure
5. Monitor SES usage and costs

## Troubleshooting

### Common Issues:
1. **Email not received**: Check spam folder, verify sender email
2. **Access denied**: Verify IAM permissions and credentials
3. **Rate limit exceeded**: Wait or request production access
4. **Invalid email format**: Ensure email addresses are properly formatted

### Debug Steps:
1. Check application logs for error messages
2. Verify AWS credentials are correct
3. Ensure email addresses are verified in SES
4. Check AWS CloudWatch logs for SES errors

## Cost Information

- First 62,000 emails per month are free (when sent from EC2)
- After that: $0.10 per 1,000 emails
- No charges for receiving emails

## Support

For AWS SES specific issues, refer to:
- [AWS SES Documentation](https://docs.aws.amazon.com/ses/)
- [AWS SES Pricing](https://aws.amazon.com/ses/pricing/)
- [AWS Support](https://aws.amazon.com/support/)
