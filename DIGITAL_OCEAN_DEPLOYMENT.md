# Digital Ocean App Platform Deployment Guide

This guide will help you deploy your portfolio website to Digital Ocean App Platform.

## Prerequisites

1. **Digital Ocean Account**: Sign up at [digitalocean.com](https://digitalocean.com)
2. **doctl CLI**: Install the Digital Ocean CLI tool
3. **AWS SES**: Your AWS SES service should be configured

## Step 1: Install doctl CLI

### macOS (using Homebrew)
```bash
brew install doctl
```

### Linux/Windows
Download from: https://docs.digitalocean.com/reference/doctl/how-to/install/

## Step 2: Authenticate with Digital Ocean

```bash
doctl auth init
```

Follow the prompts to authenticate with your Digital Ocean account.

## Step 3: Configure Environment Variables

Edit `.do/app.yaml` and update the environment variables:

```yaml
envs:
- key: NODE_ENV
  value: production
- key: AWS_REGION
  value: ca-central-1
- key: FROM_EMAIL
  value: joao.vrpontes@gmail.com
- key: TO_EMAIL
  value: joao.vrpontes@gmail.com
- key: AWS_ACCESS_KEY_ID
  value: your-access-key
- key: AWS_SECRET_ACCESS_KEY
  value: your-secret-key
```

## Step 4: Deploy to Digital Ocean

### Option A: Using the deployment script
```bash
./deploy-do.sh
```

### Option B: Manual deployment
```bash
doctl apps create --spec .do/app.yaml
```

## Step 5: Configure Custom Domain

1. **Go to your Digital Ocean App Platform dashboard**
2. **Select your app**
3. **Go to Settings → Domains**
4. **Add your domain:** `joao-pontes.com`
5. **Follow the DNS configuration instructions**

## Step 6: Update Cloudflare DNS

1. **Go to your Cloudflare dashboard**
2. **Select your domain:** `joao-pontes.com`
3. **Go to DNS → Records**
4. **Add a CNAME record:**
   - **Name:** `@` (or `www`)
   - **Target:** `your-app-name.ondigitalocean.app`
   - **Proxy status:** Proxied (orange cloud)

## Step 7: Test Your Deployment

1. **Visit your domain:** `https://joao-pontes.com`
2. **Test the contact form**
3. **Check your email for the test message**

## Monitoring and Updates

### Check deployment status
```bash
doctl apps list
```

### View logs
```bash
doctl apps logs <app-id>
```

### Update deployment
```bash
git push origin main
```
Digital Ocean will automatically redeploy when you push to your main branch.

## Troubleshooting

### Common Issues

1. **Build failures**: Check the build logs in the Digital Ocean dashboard
2. **Environment variables**: Ensure all AWS credentials are correctly set
3. **Domain issues**: Verify DNS configuration in Cloudflare

### Support

- **Digital Ocean Docs**: https://docs.digitalocean.com/products/app-platform/
- **doctl CLI Docs**: https://docs.digitalocean.com/reference/doctl/

## Cost Estimation

- **Basic Plan**: $5/month
- **Custom Domain**: Free
- **SSL Certificate**: Free (included)

Total estimated cost: **$5/month**
