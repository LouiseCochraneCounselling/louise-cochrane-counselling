# Netlify Forms Implementation - Best Practices

This document explains how the booking form is implemented according to [Netlify Forms documentation](https://docs.netlify.com/manage/forms/setup/).

## Implementation Overview

### For Next.js/SSR Frameworks

According to Netlify's documentation, for Next.js or SSR frameworks, you need:

1. **Static HTML Form** (`public/booking-form.html`)
   - Contains `data-netlify="true"` attribute
   - Has ALL input fields matching the JavaScript form
   - Used by Netlify to detect form structure during build
   - Must be accessible (in `public/` directory)

2. **JavaScript-Rendered Form** (`src/components/BookingForm.jsx`)
   - Contains `data-netlify="true"` attribute
   - Has hidden input: `<input type="hidden" name="form-name" value="booking" />`
   - Submits via AJAX to `/` endpoint

## Form Structure

### Static HTML Form (`public/booking-form.html`)
```html
<form name="booking" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
  <input type="hidden" name="form-name" value="booking" />
  <input type="text" name="name" required />
  <input type="tel" name="phone" />
  <input type="email" name="email" required />
  <textarea name="message"></textarea>
  <input type="text" name="bot-field" />
</form>
```

### JavaScript Form (`src/components/BookingForm.jsx`)
- Uses `data-netlify="true"` attribute
- Includes `<input type="hidden" name="form-name" value="booking" />`
- Submits via AJAX with URL-encoded data
- Uses `Content-Type: application/x-www-form-urlencoded` header

## AJAX Submission

According to Netlify docs, for JavaScript-rendered forms:

- Submit POST request to any path on your site (we use `/`)
- Body must be URL-encoded (using `URLSearchParams`)
- Header: `Content-Type: application/x-www-form-urlencoded`
- Include `form-name` in the request body

## Verification Steps

1. **Check Form Detection:**
   - Deploy site to Netlify
   - Go to Netlify Dashboard → Forms
   - Verify "booking" form appears in Active forms list

2. **Enable Form Detection:**
   - Netlify Dashboard → Forms → Enable form detection
   - This should be enabled by default

3. **Set Up Email Notifications:**
   - Netlify Dashboard → Site Settings → Forms
   - Find "booking" form
   - Click "Add notification" → "Email notification"
   - Enter your email address

4. **Test Submission:**
   - Submit form on live site
   - Check Forms dashboard for submission
   - Check email inbox for notification

## Troubleshooting

If forms aren't working:

1. **Form not detected:**
   - Verify `public/booking-form.html` exists
   - Check form has `data-netlify="true"`
   - Ensure all field names match between static and JS forms
   - Redeploy site

2. **Submissions not appearing:**
   - Check browser console for errors
   - Verify form submits to `/` endpoint
   - Check Network tab for POST request
   - Verify `form-name` is included in submission

3. **No email notifications:**
   - Verify email notification is configured
   - Check spam folder
   - Verify email address is correct
   - Check Forms dashboard for submissions

## References

- [Netlify Forms Setup Documentation](https://docs.netlify.com/manage/forms/setup/)
- [Forms for Next.js or SSR frameworks](https://docs.netlify.com/manage/forms/setup/#forms-for-nextjs-or-ssr-frameworks)
- [Submit JavaScript-rendered forms with AJAX](https://docs.netlify.com/manage/forms/setup/#submit-javascript-rendered-forms-with-ajax)

