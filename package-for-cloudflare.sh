#!/bin/bash

# XCTF Landing Page - Cloudflare Packaging Script
# This script builds the project and creates a zip file ready for Cloudflare Pages upload

# Ensure we're in the project directory
echo "🚀 Starting build process for Cloudflare Pages deployment..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
npm run build

# Check if build was successful
if [ ! -d "out" ]; then
  echo "❌ Build failed! The 'out' directory was not created."
  exit 1
fi

# Create a zip file of the out directory
echo "📁 Creating deployment package..."
cd out
zip -r ../xctf-cloudflare-deploy.zip .
cd ..

echo "✅ Done! Upload 'xctf-cloudflare-deploy.zip' to Cloudflare Pages."
echo "📝 See DEPLOYMENT.md for detailed instructions."
