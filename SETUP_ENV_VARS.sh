#!/bin/bash

# Quick script to set all environment variables in Vercel
# Run this AFTER: vercel link (and you're logged into client's account)

set -e

echo "Setting environment variables for The Holding Space Jersey project..."
echo ""

# Environment variables
declare -A ENV_VARS=(
    ["RESEND_API_KEY"]="[YOUR_RESEND_API_KEY]"
    ["CONTACT_EMAIL"]="theholdingspacejersey@gmail.com"
    ["RESEND_FROM_EMAIL"]="hello@theholdingspacejersey.com"
)

# Environments
ENVIRONMENTS=("production" "preview" "development")

for var_name in "${!ENV_VARS[@]}"; do
    var_value="${ENV_VARS[$var_name]}"
    echo "Setting $var_name..."
    
    for env in "${ENVIRONMENTS[@]}"; do
        echo "$var_value" | vercel env add "$var_name" "$env"
    done
    
    echo "✓ $var_name configured for all environments"
    echo ""
done

echo "All environment variables have been set!"
echo ""
echo "Next: Add domain with: vercel domains add theholdingspacejersey.co.uk"
