# Environment Variables Template

# Copy this file to .env.local and fill in your actual values

# ======================

# NextAuth Configuration

# ======================

# NextAuth Secret (generate with: openssl rand -base64 32)

NEXTAUTH_SECRET=your_nextauth_secret_here

# GitHub OAuth App Credentials

# Create at: https://github.com/settings/applications/new

GITHUB_ID=your_github_client_id_here
GITHUB_SECRET=your_github_client_secret_here

# GitHub Organization Name (for member verification)

GITHUB_ORG_NAME=swift-coding-club

# ======================

# Development Settings

# ======================

# Skip organization check in development (set to "true" for local testing)

SKIP_ORG_CHECK=false

# Next.js Environment

NODE_ENV=development

# ======================

# Setup Instructions

# ======================

# 1. Create a GitHub OAuth App:

# - Go to https://github.com/settings/developers

# - Click "New OAuth App"

# - Application name: Swift Coding Club (Dev/Prod)

# - Homepage URL: http://localhost:3000 (or your production URL)

# - Authorization callback URL: http://localhost:3000/api/auth/callback/github

# - Copy Client ID and Client Secret to this file

# 2. Generate NEXTAUTH_SECRET:

# Run: openssl rand -base64 32

# Copy the output to NEXTAUTH_SECRET above

# 3. For local development:

# - Set SKIP_ORG_CHECK=true to bypass organization verification

# 4. For production:

# - Set SKIP_ORG_CHECK=false

# - Ensure GITHUB_ORG_NAME matches your actual organization
