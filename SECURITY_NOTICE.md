# ⚠️ SECURITY NOTICE - API Key Exposure

## Issue Found
The Resend API key was found in git history from a `.env.example` file that was committed and then deleted.

## Immediate Actions Required

### 1. **REVOKE THE EXPOSED API KEY IMMEDIATELY**
   - Go to: https://resend.com/api-keys
   - Find the key: `re_jLKuEuVT_JzkmszE6MQpbd8pdTu1tHWW3`
   - **DELETE/REVOKE** it immediately
   - Generate a new API key

### 2. **Update Environment Variables**
   - Update the new API key in Vercel (old project)
   - Update the new API key in Vercel (new client project) when setting up

### 3. **Git History Cleanup (Optional but Recommended)**
   
   The API key exists in commit history. If the repository is public or shared, consider cleaning history:
   
   **Option A: If repository is private and only you have access:**
   - Less critical, but still recommended to clean
   
   **Option B: If repository is public or shared:**
   - **CRITICAL** - Must clean git history
   - Use `git filter-branch` or BFG Repo-Cleaner to remove the API key from all commits
   - Force push to overwrite history (coordinate with team if shared)

### 4. **Prevent Future Exposure**
   - ✅ Never commit `.env` files or `.env.example` files with real API keys
   - ✅ Use placeholder values like `[YOUR_API_KEY]` in example files
   - ✅ Add sensitive files to `.gitignore`
   - ✅ Use environment variables in CI/CD and hosting platforms

## Files Fixed
The following files were updated to remove the API key:
- ✅ `TRANSFER_GUIDE.md` - API key replaced with `[YOUR_RESEND_API_KEY]`
- ✅ `TRANSFER_STATUS.md` - API key replaced with `[YOUR_RESEND_API_KEY]`
- ✅ `SETUP_ENV_VARS.sh` - API key replaced with `[YOUR_RESEND_API_KEY]`
- ✅ `transfer-to-client.sh` - API key replaced with `[YOUR_RESEND_API_KEY]`

These files are now in `.gitignore` to prevent accidental commits.

## Next Steps
1. Revoke the exposed API key in Resend dashboard
2. Generate a new API key
3. Update Vercel environment variables with the new key
4. When transferring to client, use the NEW API key (not the exposed one)
