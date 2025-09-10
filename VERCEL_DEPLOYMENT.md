# 🚀 Vercel-Only Deployment Guide - joao-pontes.com

**Simplified deployment using only Vercel with serverless functions!**

## 🎯 Architecture

```
Frontend (React) + API (Serverless) → Vercel → joao-pontes.com
Email → AWS SES (via serverless function)
```

**No database needed!** Your contact form sends emails directly via AWS SES.

## 📋 Prerequisites

- [x] Domain: `joao-pontes.com` (Cloudflare)
- [x] Vercel account
- [x] AWS SES configured
- [x] GitHub repository

## 🚀 Step 1: Deploy to Vercel

### 1.1 Connect Repository
1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Click "New Project"
4. Import your GitHub repository

### 1.2 Configure Environment Variables
In Vercel dashboard, go to your project → Settings → Environment Variables:

```bash
AWS_REGION = ca-central-1
AWS_ACCESS_KEY_ID = your_aws_access_key_here
AWS_SECRET_ACCESS_KEY = your_aws_secret_key_here
FROM_EMAIL = joao.vrpontes@gmail.com
TO_EMAIL = joao.vrpontes@gmail.com
```

### 1.3 Deploy
1. Vercel will auto-detect React
2. Click "Deploy"
3. Wait for deployment to complete

## 🌐 Step 2: Configure Custom Domain

### 2.1 Add Domain in Vercel
1. Go to your project dashboard
2. Click "Settings" → "Domains"
3. Add `joao-pontes.com`
4. Add `www.joao-pontes.com`

### 2.2 Configure Cloudflare DNS
In Cloudflare dashboard, add these DNS records:

```
Type: CNAME
Name: @
Target: cname.vercel-dns.com
Proxy: ✅ (Orange cloud)

Type: CNAME  
Name: www
Target: cname.vercel-dns.com
Proxy: ✅ (Orange cloud)
```

## 🧪 Step 3: Test Deployment

### 3.1 Test Frontend
- Visit `https://joao-pontes.com`
- Check if site loads correctly

### 3.2 Test Contact Form
- Fill out the contact form
- Submit and check if you receive the email
- Check Vercel function logs if there are issues

### 3.3 Test API Directly
```bash
curl -X POST https://joao-pontes.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Message",
    "message": "This is a test message from production."
  }'
```

## 🔧 Step 4: Optimize Performance

### 4.1 Cloudflare Settings
- Enable "Auto Minify" (CSS, JS, HTML)
- Enable "Brotli" compression
- Set "Browser Cache TTL" to 1 month
- Enable "Always Use HTTPS"

### 4.2 Vercel Settings
- Enable "Automatic HTTPS"
- Enable "Vercel Analytics" (optional)

## 🚨 Troubleshooting

### Common Issues:

1. **Contact Form Not Working**
   - Check Vercel function logs
   - Verify AWS SES credentials
   - Test API endpoint directly

2. **Domain Not Loading**
   - Check Cloudflare DNS settings
   - Verify Vercel domain configuration
   - Wait for DNS propagation (up to 24 hours)

3. **CORS Errors**
   - The serverless function handles CORS automatically
   - Check if function is deployed correctly

## 📊 Benefits of This Approach

✅ **Simpler**: No separate backend service needed
✅ **Cost-effective**: Only pay for Vercel (free tier available)
✅ **Fast**: Serverless functions are very fast
✅ **Scalable**: Automatically scales with traffic
✅ **Secure**: AWS SES handles email security
✅ **Maintainable**: Everything in one place

## 🎉 Success!

Your portfolio is now live at:
- **Primary**: https://joao-pontes.com
- **WWW**: https://www.joao-pontes.com

**Total deployment time: ~15 minutes!** 🚀

## 📞 Support

If you encounter issues:
1. Check Vercel function logs
2. Verify AWS SES credentials
3. Test locally first with `npm run build && npm start`
