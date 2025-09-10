#!/bin/bash

# Digital Ocean App Platform Deployment Script
# This script helps deploy your portfolio website to Digital Ocean

echo "🚀 Digital Ocean Deployment Script"
echo "=================================="

# Check if doctl is installed
if ! command -v doctl &> /dev/null; then
    echo "❌ doctl CLI is not installed"
    echo "📥 Install it from: https://docs.digitalocean.com/reference/doctl/how-to/install/"
    exit 1
fi

# Check if user is authenticated
if ! doctl account get &> /dev/null; then
    echo "❌ Not authenticated with Digital Ocean"
    echo "🔐 Run: doctl auth init"
    exit 1
fi

echo "✅ doctl CLI is installed and authenticated"

# Create the app
echo "🏗️  Creating Digital Ocean App..."
doctl apps create --spec .do/app.yaml

echo "🎉 Deployment initiated!"
echo "📊 Check status with: doctl apps list"
echo "🌐 Your app will be available at: https://your-app-name.ondigitalocean.app"
