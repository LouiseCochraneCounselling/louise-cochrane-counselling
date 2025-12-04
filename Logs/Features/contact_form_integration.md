# Contact Form Integration Feature

## Overview
Implementation of a contact form using Netlify Forms for the counselling website. This allows clients to submit enquiries without requiring a backend server or database.

## Implementation Details

### Technology Used
- **Netlify Forms**: Serverless form handling service
- **React**: Component-based form implementation
- **Next.js**: Framework integration

### Component Structure

The contact form is implemented as a React component (`ContactForm.jsx`) with the following features:

1. **Form Fields**:
   - Name (required)
   - Email (required)
   - Phone (optional)
   - Message (required)

2. **Validation**:
   - Client-side validation using HTML5 required attributes
   - Email format validation
   - Real-time form state management

3. **Spam Protection**:
   - Netlify honeypot field (`bot-field`)
   - Hidden field that bots may fill but humans won't see

4. **User Feedback**:
   - Loading state during submission
   - Success message on successful submission
   - Error message on failure
   - Form reset after successful submission

### How It Works

#### Step 1: Form Setup
The form includes special attributes for Netlify Forms:
```jsx
<form 
  name="contact" 
  method="POST" 
  data-netlify="true" 
  netlify-honeypot="bot-field"
>
```

#### Step 2: Hidden Fields
- `form-name`: Identifies the form to Netlify
- `bot-field`: Honeypot field for spam protection

#### Step 3: Form Submission
When submitted, the form data is sent to Netlify's servers via POST request:
```javascript
const response = await fetch('/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: new URLSearchParams(data).toString()
});
```

#### Step 4: Email Notification
After deployment, configure email notifications in Netlify dashboard:
1. Go to Site settings > Forms
2. Add notification
3. Choose email notification
4. Enter recipient email address

### Real-Life Example

**Scenario**: A potential client visits the contact page and wants to enquire about counselling services.

1. Client fills out the form with:
   - Name: "Jane Smith"
   - Email: "jane@example.com"
   - Phone: "07123456789"
   - Message: "I'm interested in booking an initial consultation"

2. Client clicks "Send Message"

3. Form validates all required fields

4. Form submits to Netlify Forms

5. Netlify processes the submission and sends email notification to configured address

6. Client sees success message: "Thank you! Your message has been sent."

7. Counsellor receives email with all form details

### Why This Approach?

1. **No Backend Required**: Netlify handles all form processing serverlessly
2. **No Database Needed**: Submissions are stored by Netlify and can be accessed via dashboard
3. **Cost Effective**: Free tier includes 100 submissions/month
4. **Easy Setup**: Minimal configuration required
5. **Spam Protection**: Built-in honeypot protection
6. **Reliable**: Managed service with high uptime

### Configuration Steps

1. **Deploy Site**: Deploy to Netlify (automatic via Git integration)

2. **Verify Form Detection**: Netlify automatically detects forms with `data-netlify="true"`

3. **Set Up Notifications**:
   - Navigate to Netlify dashboard
   - Go to Forms section
   - Click "Add notification"
   - Select "Email notification"
   - Enter recipient email
   - Save

4. **Test Submission**: Submit a test form to verify email delivery

### Alternative: Formspree

If not using Netlify, Formspree can be used as an alternative:

1. Sign up at formspree.io
2. Create a form
3. Get form endpoint URL
4. Update ContactForm component to use Formspree endpoint
5. Configure email notifications in Formspree dashboard

### Best Practices

1. **Always validate on client side** for better UX
2. **Provide clear feedback** to users about submission status
3. **Use honeypot fields** for spam protection
4. **Test thoroughly** before going live
5. **Monitor submissions** regularly in dashboard
6. **Set up email notifications** immediately after deployment

### Troubleshooting

**Form not submitting**:
- Check that `data-netlify="true"` is present
- Verify hidden `form-name` input matches form name
- Check browser console for errors

**Not receiving emails**:
- Verify email notification is configured in Netlify dashboard
- Check spam/junk folder
- Verify email address is correct

**Spam submissions**:
- Ensure honeypot field is present and hidden
- Consider adding additional validation
- Use Netlify's spam filtering features

## Files Modified/Created

- `src/components/ContactForm.jsx` - Main form component
- `src/components/ContactForm.module.css` - Form styling
- `src/pages/contact.jsx` - Contact page with form integration

## Related Documentation

- Netlify Forms Documentation: https://docs.netlify.com/forms/setup/
- Next.js Forms: https://nextjs.org/docs/guides/building-forms

