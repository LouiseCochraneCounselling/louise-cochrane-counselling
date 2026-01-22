#!/bin/bash

# Transfer Project to Client's GitHub and Vercel
# Run this script after:
# 1. GitHub repository is created
# 2. You're logged into client's Vercel account (vercel login)

set -e  # Exit on error

echo "🚀 Starting project transfer to client's accounts..."
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Step 1: Push to GitHub
echo -e "${YELLOW}Step 1: Pushing code to GitHub...${NC}"
if git push -u origin m; then
    echo -e "${GREEN}✓ Code pushed to GitHub successfully${NC}"
else
    echo -e "${RED}✗ Failed to push to GitHub. Make sure:${NC}"
    echo "  - Repository exists at: https://github.com/theholdingspacejersey/theHoldingSpaceJerseyWebsite"
    echo "  - You have push access"
    exit 1
fi
echo ""

# Step 2: Check Vercel login
echo -e "${YELLOW}Step 2: Checking Vercel authentication...${NC}"
if vercel whoami > /dev/null 2>&1; then
    VERCEL_USER=$(vercel whoami)
    echo -e "${GREEN}✓ Logged into Vercel as: ${VERCEL_USER}${NC}"
    read -p "Is this the client's account? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo -e "${YELLOW}Please run 'vercel login' to switch to client's account${NC}"
        exit 1
    fi
else
    echo -e "${RED}✗ Not logged into Vercel. Please run 'vercel login' first${NC}"
    exit 1
fi
echo ""

# Step 3: Link project to Vercel
echo -e "${YELLOW}Step 3: Linking project to Vercel...${NC}"
echo "When prompted:"
echo "  - Select: Create a new project"
echo "  - Project name: the-holding-space-jersey"
echo "  - Directory: ./"
echo ""
read -p "Press Enter to continue with vercel link..."
vercel link
echo ""

# Step 4: Set environment variables
echo -e "${YELLOW}Step 4: Setting environment variables...${NC}"
echo "This will set environment variables for all environments (production, preview, development)"
echo ""

ENV_VARS=(
    "RESEND_API_KEY:[YOUR_RESEND_API_KEY]"
    "CONTACT_EMAIL:theholdingspacejersey@gmail.com"
    "RESEND_FROM_EMAIL:hello@theholdingspacejersey.com"
)

ENVIRONMENTS=("production" "preview" "development")

for env_var in "${ENV_VARS[@]}"; do
    IFS=':' read -r VAR_NAME VAR_VALUE <<< "$env_var"
    echo "Setting $VAR_NAME..."
    
    for env in "${ENVIRONMENTS[@]}"; do
        echo "$VAR_VALUE" | vercel env add "$VAR_NAME" "$env" --yes
    done
    echo -e "${GREEN}✓ $VAR_NAME set for all environments${NC}"
done
echo ""

# Step 5: Add domain
echo -e "${YELLOW}Step 5: Adding domain to Vercel project...${NC}"
vercel domains add theholdingspacejersey.co.uk
echo ""
read -p "Do you want to add www subdomain? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    vercel domains add www.theholdingspacejersey.co.uk
fi
echo ""

# Step 6: Deploy
echo -e "${YELLOW}Step 6: Deploying to production...${NC}"
vercel --prod
echo ""

# Step 7: Get DNS information
echo -e "${YELLOW}Step 7: DNS Configuration${NC}"
echo "Please check DNS records in Vercel Dashboard:"
echo "  Vercel Dashboard → Project Settings → Domains"
echo ""
echo "You'll need to update Cloudflare DNS records with these values."
echo ""

echo -e "${GREEN}✓ Deployment complete!${NC}"
echo ""
echo "Next steps:"
echo "1. Verify deployment works on Vercel preview URL"
echo "2. Test booking form functionality"
echo "3. Update Cloudflare DNS records (see TRANSFER_GUIDE.md)"
echo "4. Verify SSL certificate"
echo "5. Remove domain from old Vercel project"
