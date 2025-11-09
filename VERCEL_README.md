# Vercel Deployment Configuration

## Environment Variables (Set in Vercel Dashboard)
VERCEL=true
NODE_ENV=production

## Build Configuration
- Build Command: `npm run build:vercel`
- Output Directory: `dist`
- Install Command: `npm install`

## Features Enabled
- Automatic HTTPS
- Edge Network CDN
- Image Optimization
- Gzip/Brotli Compression
- Cache Headers for Assets

## Performance Optimizations
- Manual chunk splitting for better caching
- Optimized headers for static assets
- SPA routing with fallback to index.html