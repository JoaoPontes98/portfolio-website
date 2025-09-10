#!/bin/bash

# Simplified deployment script for joao-pontes.com
# Vercel-only deployment with serverless functions

echo "🚀 Portfolio Deployment Script (Vercel-Only)"
echo "============================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

echo "✅ Found project files"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Dependency installation failed"
    exit 1
fi

# Build frontend for production
echo "📦 Building frontend for production..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Frontend build successful"
else
    echo "❌ Frontend build failed"
    exit 1
fi

echo ""
echo "🎉 Build completed successfully!"
echo ""
echo "Next steps:"
echo "1. Deploy to Vercel:"
echo "   - Go to vercel.com"
echo "   - Import GitHub repository"
echo "   - Add environment variables:"
echo "     * AWS_REGION=ca-central-1"
echo "     * AWS_ACCESS_KEY_ID=your_key"
echo "     * AWS_SECRET_ACCESS_KEY=your_secret"
echo "     * FROM_EMAIL=joao.vrpontes@gmail.com"
echo "     * TO_EMAIL=joao.vrpontes@gmail.com"
echo ""
echo "2. Add custom domain:"
echo "   - Add joao-pontes.com in Vercel"
echo "   - Add www.joao-pontes.com in Vercel"
echo ""
echo "3. Configure Cloudflare DNS:"
echo "   - Add CNAME records pointing to Vercel"
echo ""
echo "📖 See VERCEL_DEPLOYMENT.md for detailed instructions"
echo ""
echo "🎯 This is a Vercel-only deployment - no separate backend needed!"
