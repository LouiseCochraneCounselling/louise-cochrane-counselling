# Project Transfer Guide - The Holding Space Jersey

## Prerequisites Checklist

### 1. GitHub Repository Setup
- [ ] Repository created at: `https://github.com/theholdingspacejersey/theHoldingSpaceJerseyWebsite`
- [ ] Repository is empty (or you're okay overwriting it)
- [ ] You have push access to the repository

**To create the repository:**
1. Go to https://github.com/theholdingspacejersey
2. Click "New repository"
3. Name: `theHoldingSpaceJerseyWebsite`
4. Set to Private (recommended) or Public
5. **DO NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

### 2. Vercel Account Access
- [ ] You have access to the client's Vercel account
- [ ] You can log in via: `vercel login`

## Automated Steps (Run these after prerequisites are met)

### Step 1: Push to GitHub (Already configured)
```bash
git push -u origin m
```

### Step 2: Login to Client's Vercel Account
```bash
vercel login
# Follow the prompts to authenticate with client's account
```

### Step 3: Link Project to Vercel
```bash
vercel link
# Select: Create a new project
# Project name: the-holding-space-jersey (or your preferred name)
# Directory: ./
```

### Step 4: Set Environment Variables
```bash
# Set RESEND_API_KEY
vercel env add RESEND_API_KEY production
# Paste: [YOUR_RESEND_API_KEY]

# Set RESEND_API_KEY for preview
vercel env add RESEND_API_KEY preview
# Paste: [YOUR_RESEND_API_KEY]

# Set RESEND_API_KEY for development
vercel env add RESEND_API_KEY development
# Paste: [YOUR_RESEND_API_KEY]

# Set CONTACT_EMAIL
vercel env add CONTACT_EMAIL production
# Paste: theholdingspacejersey@gmail.com

vercel env add CONTACT_EMAIL preview
# Paste: theholdingspacejersey@gmail.com

vercel env add CONTACT_EMAIL development
# Paste: theholdingspacejersey@gmail.com

# Set RESEND_FROM_EMAIL
vercel env add RESEND_FROM_EMAIL production
# Paste: hello@theholdingspacejersey.com

vercel env add RESEND_FROM_EMAIL preview
# Paste: hello@theholdingspacejersey.com

vercel env add RESEND_FROM_EMAIL development
# Paste: hello@theholdingspacejersey.com
```

### Step 5: Add Domain to Vercel Project
```bash
# Add root domain
vercel domains add theholdingspacejersey.co.uk

# Add www subdomain (if using)
vercel domains add www.theholdingspacejersey.co.uk
```

### Step 6: Deploy to Production
```bash
vercel --prod
```

### Step 7: Get DNS Records from Vercel
After adding the domain, Vercel will provide DNS records. Check them in:
- Vercel Dashboard → Project Settings → Domains
- Or run: `vercel domains ls`

**Note the DNS records:**
- A record IP address (if using A record)
- CNAME target (if using CNAME - preferred)

### Step 8: Update Cloudflare DNS Records

**IMPORTANT: Do this AFTER verifying the new deployment works**

1. Log into client's Cloudflare account
2. Select the domain: `theholdingspacejersey.co.uk`
3. Go to DNS → Records
4. Find the current A or CNAME record pointing to your Vercel deployment
5. Update it to point to the NEW Vercel deployment:
   - If using A record: Update IP to Vercel's IP (e.g., `76.76.21.21`)
   - If using CNAME: Update target to Vercel's CNAME (e.g., `cname.vercel-dns.com`)
6. Keep Cloudflare proxy ON (orange cloud)
7. Update both root domain and www subdomain if applicable

### Step 9: Verify SSL Certificate
- Check Vercel Dashboard → Domains → SSL status
- Should provision automatically within a few minutes after DNS update
- Verify: `https://theholdingspacejersey.co.uk`

### Step 10: Remove Domain from Old Vercel Project
**Only after confirming new deployment works:**
1. Log into YOUR Vercel account
2. Find the old project
3. Project Settings → Domains → Remove domain

### Step 11: Final Verification
- [ ] Website loads: https://theholdingspacejersey.co.uk
- [ ] SSL certificate is valid
- [ ] Booking form works
- [ ] Email delivery works
- [ ] All pages load correctly

## Environment Variables Summary

- **RESEND_API_KEY**: `[YOUR_RESEND_API_KEY]` (get from Resend dashboard)
- **CONTACT_EMAIL**: `theholdingspacejersey@gmail.com`
- **RESEND_FROM_EMAIL**: `hello@theholdingspacejersey.com`

## Important Notes

- Keep old Vercel deployment active until new one is confirmed working
- DNS propagation can take 5-60 minutes
- Cloudflare proxy may cache - wait a few minutes after DNS update
- SSL certificate provisioning is automatic but may take a few minutes
