# Netlify Forms Troubleshooting Guide

## Issue: Forms not submitting or showing in dashboard

### Step 1: Verify Form Detection

1. **Check Netlify Dashboard:**
   - Go to your site dashboard → **Forms** section
   - You should see "booking" form listed
   - If not listed, the form wasn't detected during build

2. **Check Build Logs:**
   - Look for messages about form detection
   - Should see: "Detected form: booking"

### Step 2: Verify Static HTML Form

The static HTML form at `public/booking-form.html` must:
- ✅ Have `netlify="true"` attribute (not `data-netlify`)
- ✅ Have `name="booking"` matching your React form
- ✅ Include all form fields that match your React form
- ✅ Be accessible at `/booking-form.html` route

### Step 3: Verify React Form

Your React form must:
- ✅ Have `data-netlify="true"` attribute
- ✅ Have `name="booking"` matching static form
- ✅ Include `<input type="hidden" name="form-name" value="booking" />`
- ✅ Submit to `/` endpoint
- ✅ Use `application/x-www-form-urlencoded` content type

### Step 4: Test Form Submission

1. **Open Browser DevTools:**
   - Go to Network tab
   - Submit the form
   - Check the POST request to `/`

2. **Check Request:**
   - Method: POST
   - URL: `https://yoursite.netlify.app/`
   - Headers: `Content-Type: application/x-www-form-urlencoded`
   - Body should include: `form-name=booking&name=...&email=...`

3. **Check Response:**
   - Should return HTML (200 status)
   - Netlify Forms returns HTML page on success

### Step 5: Verify Email Notifications

1. **In Netlify Dashboard:**
   - Go to **Site settings** → **Forms**
   - Find "booking" form
   - Click **"Add notification"**
   - Select **"Email notification"**
   - Enter your email address
   - Save

2. **Check Spam Folder:**
   - Netlify emails sometimes go to spam
   - Check spam/junk folder

### Step 6: Check Form Submissions

1. **In Netlify Dashboard:**
   - Go to **Forms** section
   - Click on "booking" form
   - Check **"Active submissions"** tab
   - Should show all submissions

### Common Issues:

#### Issue: Form not detected
**Solution:** 
- Ensure `public/booking-form.html` exists
- Rebuild and redeploy
- Check that form has `netlify="true"` (not `data-netlify`)

#### Issue: Form submits but no email
**Solution:**
- Check email notifications are configured
- Verify email address is correct
- Check spam folder
- Check form submissions appear in dashboard

#### Issue: 404 on form submission
**Solution:**
- Ensure form submits to `/` (root)
- Check Next.js routing isn't intercepting POST requests
- Verify `action="/"` attribute on form

#### Issue: Form detected but submissions not working
**Solution:**
- Check browser console for errors
- Verify `form-name` hidden field is included
- Ensure all required fields match between static and React forms

### Alternative: Use Formspree (Easier)

If Netlify Forms continues to have issues, consider switching to Formspree:

1. Sign up at formspree.io
2. Create form, get endpoint URL
3. Update BookingForm.jsx to submit to Formspree endpoint
4. Configure email in Formspree dashboard

This is often more reliable and easier to debug.

