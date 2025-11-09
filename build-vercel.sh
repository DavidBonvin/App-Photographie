#!/bin/bash

# Vercel Build Script
echo "Starting Vercel build process..."

# Set environment variable for Vercel
export VERCEL=true

# Install dependencies
echo "Installing dependencies..."
npm ci

# Run TypeScript compilation
echo "Compiling TypeScript..."
npx tsc

# Run Vite build
echo "Building with Vite..."
npx vite build

echo "Build completed successfully!"