# Setup Guide - The Holding Space Website

This guide explains how to configure environment variables for the booking form email functionality.

## Environment Variables Required

The booking form requires the following environment variables to be configured:

### Required Variables

1. **`CONTACT_EMAIL`** - The email address where form submissions will be sent

   - Example: `your-email@example.com`
   - This is the recipient email for all booking form submissions

2. **`RESEND_API_KEY`** - Your Resend API key
   - Get your API key from: https://resend.com/api-keys
   - Format: `re_xxxxxxxxxxxxx`

### Optional Variables

3. **`RESEND_FROM_EMAIL`** - The sender email address (must be verified in Resend)
   - Default: `hello@theholdingspace.co.uk`
   - Only set this if you want to use a different sender email
   - The domain must be verified in your Resend account

## Setting Up Environment Variables in Vercel

### Step 1: Access Vercel Project Settings

1. Log in to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project: **The Holding Space Jersey**
3. Go to **Settings** → **Environment Variables**

### Step 2: Add Environment Variables

For each variable, click **Add** and enter:

#### Add CONTACT_EMAIL

- **Key**: `CONTACT_EMAIL`
- **Value**: Your email address (e.g., `your-email@example.com`)
- **Environment**: Select all environments (Production, Preview, Development)
- Click **Save**

#### Add RESEND_API_KEY

- **Key**: `RESEND_API_KEY`
- **Value**: Your Resend API key (starts with `re_`)
- **Environment**: Select all environments (Production, Preview, Development)
- Click **Save**

#### Add RESEND_FROM_EMAIL (Optional)

- **Key**: `RESEND_FROM_EMAIL`
- **Value**: Your verified sender email (e.g., `hello@theholdingspace.co.uk`)
- **Environment**: Select all environments (Production, Preview, Development)
- Click **Save**

### Step 3: Redeploy Your Application

After adding environment variables:

1. Go to the **Deployments** tab
2. Click the **⋯** (three dots) menu on the latest deployment
3. Select **Redeploy**
4. Wait for the deployment to complete

**Note**: Environment variables are only available after a redeploy. New deployments automatically include the latest environment variables.

## Getting Your Resend API Key

1. Sign up or log in to [Resend](https://resend.com)
2. Go to **API Keys** in your dashboard
3. Click **Create API Key**
4. Give it a name (e.g., "The Holding Space Website")
5. Copy the API key (it starts with `re_`)
6. Paste it into Vercel as `RESEND_API_KEY`

## Verifying Your Sender Domain in Resend

To send emails from your domain (e.g., `hello@theholdingspace.co.uk`):

1. Go to **Domains** in your Resend dashboard
2. Click **Add Domain**
3. Enter your domain: `theholdingspace.co.uk`
4. Add the DNS records provided by Resend to your Cloudflare DNS settings
5. Wait for verification (usually takes a few minutes)

Once verified, you can use any email address from that domain as the sender.

## Testing the Configuration

After setting up environment variables and redeploying:

1. Go to your website's booking form
2. Fill out and submit a test form
3. Check the email inbox specified in `CONTACT_EMAIL`
4. Check Vercel function logs if emails aren't arriving:
   - Go to **Deployments** → Select deployment → **Functions** → `api/submit-booking`

## Troubleshooting

### Form submission fails with "Email service is not configured"

- **Solution**: Ensure `RESEND_API_KEY` is set in Vercel environment variables
- Verify the API key is correct and active in Resend
- Redeploy after adding the variable

### Form submission fails with "Email recipient is not configured"

- **Solution**: Ensure `CONTACT_EMAIL` is set in Vercel environment variables
- Check that the email address is valid
- Redeploy after adding the variable

### Emails not being received

- Check spam/junk folder
- Verify `CONTACT_EMAIL` is set correctly
- Check Vercel function logs for detailed error messages
- Verify your Resend API key is valid and has sufficient credits
- Ensure sender domain is verified if using a custom domain

### "Domain verification issue" error

- Verify your sender domain in Resend dashboard
- Ensure DNS records are correctly configured in Cloudflare
- Wait a few minutes after adding DNS records for propagation

## Quick Reference: Changing the Recipient Email

To change where form submissions are sent:

1. Go to Vercel → Your Project → **Settings** → **Environment Variables**
2. Find `CONTACT_EMAIL`
3. Click **Edit**
4. Update the value to your new email address
5. Click **Save**
6. Redeploy your application

The new email address will be used for all future form submissions.

## Local Development Setup

For local development, create a `.env.local` file in the project root:

```bash
# Copy from .env.example
cp .env.example .env.local
```

Then edit `.env.local` with your actual values:

```
CONTACT_EMAIL=your-email@example.com
RESEND_API_KEY=re_your_api_key_here
RESEND_FROM_EMAIL=hello@theholdingspace.co.uk
```

**Important**: Never commit `.env.local` to git. It's already in `.gitignore`.

## Support

If you continue to experience issues:

1. Check the Vercel function logs for detailed error messages
2. Verify all environment variables are set correctly
3. Ensure your Resend account is active and has credits
4. Verify DNS records are correctly configured
