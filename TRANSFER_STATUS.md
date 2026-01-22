# Transfer Status - The Holding Space Jersey

## ✅ Completed Steps

1. **Git Remote Updated**
   - Removed old remote: `LewisSteven2022/LCCouncelling`
   - Added new remote: `theholdingspacejersey/theHoldingSpaceJerseyWebsite`
   - Verified: `git remote -v` shows correct remote

2. **Helper Scripts Created**
   - `transfer-to-client.sh` - Complete automation script
   - `SETUP_ENV_VARS.sh` - Environment variables setup
   - `TRANSFER_GUIDE.md` - Detailed step-by-step guide

3. **Current Project State**
   - Branch: `m`
   - Uncommitted: `Documentation/` folder (untracked)
   - `.vercel` directory exists (linked to your account - will be replaced when client links)

## ⏳ Pending Steps

### Step 1: Create GitHub Repository
**Action Required:** Create the repository on GitHub
- URL: `https://github.com/theholdingspacejersey/theHoldingSpaceJerseyWebsite`
- Instructions: See `TRANSFER_GUIDE.md` Step 1

**Once created, run:**
```bash
git push -u origin m
```

### Step 2: Login to Client's Vercel Account
**Action Required:** Authenticate with client's Vercel account
```bash
vercel login
# Follow prompts to login with client's account
```

### Step 3: Link Project to Client's Vercel Account
**After logging in:**
```bash
# Remove current .vercel link (if exists)
rm -rf .vercel

# Link to client's account
vercel link
# Select: Create a new project
# Project name: the-holding-space-jersey
# Directory: ./
```

### Step 4: Set Environment Variables
**Run the helper script:**
```bash
./SETUP_ENV_VARS.sh
```

**Or manually:**
```bash
# RESEND_API_KEY
echo "[YOUR_RESEND_API_KEY]" | vercel env add RESEND_API_KEY production
echo "[YOUR_RESEND_API_KEY]" | vercel env add RESEND_API_KEY preview
echo "[YOUR_RESEND_API_KEY]" | vercel env add RESEND_API_KEY development

# CONTACT_EMAIL
echo "theholdingspacejersey@gmail.com" | vercel env add CONTACT_EMAIL production
echo "theholdingspacejersey@gmail.com" | vercel env add CONTACT_EMAIL preview
echo "theholdingspacejersey@gmail.com" | vercel env add CONTACT_EMAIL development

# RESEND_FROM_EMAIL
echo "hello@theholdingspacejersey.com" | vercel env add RESEND_FROM_EMAIL production
echo "hello@theholdingspacejersey.com" | vercel env add RESEND_FROM_EMAIL preview
echo "hello@theholdingspacejersey.com" | vercel env add RESEND_FROM_EMAIL development
```

### Step 5: Add Domain to Vercel
```bash
vercel domains add theholdingspacejersey.co.uk
vercel domains add www.theholdingspacejersey.co.uk  # if using www
```

### Step 6: Deploy
```bash
vercel --prod
```

### Step 7: Get DNS Records
After adding domain, check Vercel Dashboard → Project Settings → Domains for DNS records.

### Step 8: Update Cloudflare DNS
**CRITICAL:** Only do this AFTER verifying new deployment works!

1. Log into client's Cloudflare account
2. Update DNS records to point to new Vercel deployment
3. Keep Cloudflare proxy ON (orange cloud)
4. Wait for DNS propagation (5-60 minutes)

### Step 9: Verify SSL Certificate
- Check Vercel Dashboard → Domains → SSL status
- Verify: `https://theholdingspacejersey.co.uk`

### Step 10: Remove Domain from Old Vercel Project
**Only after confirming new deployment works:**
- Log into your Vercel account
- Remove domain from old project

## 📋 Quick Reference

**GitHub Repo:** `https://github.com/theholdingspacejersey/theHoldingSpaceJerseyWebsite.git`

**Environment Variables:**
- `RESEND_API_KEY`: `[YOUR_RESEND_API_KEY]` (get from Resend dashboard)
- `CONTACT_EMAIL`: `theholdingspacejersey@gmail.com`
- `RESEND_FROM_EMAIL`: `hello@theholdingspacejersey.com`

**Domain:** `theholdingspacejersey.co.uk`

## 🚀 Quick Start (After Prerequisites)

Run the complete automation script:
```bash
./transfer-to-client.sh
```

Or follow the detailed guide:
```bash
cat TRANSFER_GUIDE.md
```
