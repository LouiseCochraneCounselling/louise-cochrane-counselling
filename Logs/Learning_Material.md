# Learning Material

## Frontend

### Next.js Framework

#### Overview
Next.js is a React framework that provides server-side rendering, static site generation, and various optimisations out of the box. For this project, we're using it primarily as a static site generator.

#### Key Concepts

**Pages Directory Structure**:
- Files in `src/pages/` automatically become routes
- `index.jsx` becomes the homepage (`/`)
- `about.jsx` becomes `/about`
- `_app.jsx` is a special file that wraps all pages

**Example**:
```javascript
// src/pages/index.jsx
export default function Home() {
  return <div>Home Page</div>;
}
```

**Why Use Next.js**:
- Automatic code splitting for better performance
- Built-in optimisations (image optimisation, font optimisation)
- Easy deployment to Vercel or Netlify
- Server-side rendering capabilities if needed later
- File-based routing (no need to configure routes manually)

#### CSS Modules

**What They Are**:
CSS Modules allow you to write CSS that's scoped to a specific component, preventing style conflicts.

**How to Use**:
```javascript
// Component.jsx
import styles from './Component.module.css';

export default function Component() {
  return <div className={styles.container}>Content</div>;
}
```

```css
/* Component.module.css */
.container {
  padding: 2rem;
  background-color: white;
}
```

**Benefits**:
- Styles are scoped to the component
- No naming conflicts
- Better maintainability
- Automatic class name generation

### React Components

#### Functional Components with Hooks

**useState Hook**:
Used for managing component state (form data, UI state, etc.)

**Example**:
```javascript
import { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  
  return (
    <input 
      value={name} 
      onChange={(e) => setName(e.target.value)} 
    />
  );
}
```

**Why Use Hooks**:
- Simpler than class components
- Better code reusability
- Easier to understand and maintain
- Modern React best practice

#### Client Components

In Next.js 13+, components are server components by default. For interactive components (with state, event handlers), use `'use client'` directive:

```javascript
'use client';

import { useState } from 'react';

export default function InteractiveComponent() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

### Form Handling

#### Netlify Forms Integration

**How It Works**:
1. Add `data-netlify="true"` attribute to form
2. Add hidden `form-name` input
3. Form submissions are automatically handled by Netlify
4. No backend code required

**Example**:
```jsx
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  <input type="text" name="name" required />
  <button type="submit">Submit</button>
</form>
```

**Why This Approach**:
- No backend server needed
- Free tier available
- Automatic spam protection
- Email notifications configurable
- Submissions stored in Netlify dashboard

#### Form Validation

**Client-Side Validation**:
- Use HTML5 `required` attribute
- Use `type="email"` for email validation
- Use JavaScript for custom validation

**Example**:
```jsx
<input 
  type="email" 
  name="email" 
  required 
  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
/>
```

**Best Practices**:
- Always validate on client side for UX
- Provide clear error messages
- Validate on submit, not just on blur
- Consider server-side validation for security

### Responsive Design

#### CSS Media Queries

**Mobile-First Approach**:
Design for mobile first, then enhance for larger screens.

**Example**:
```css
/* Mobile styles (default) */
.container {
  padding: 1rem;
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    padding: 3rem;
  }
}
```

**Common Breakpoints**:
- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: >= 1024px

#### Flexbox and Grid

**Flexbox** (for one-dimensional layouts):
```css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

**Grid** (for two-dimensional layouts):
```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
```

**When to Use Each**:
- Flexbox: Navigation bars, centering content, one-row layouts
- Grid: Card layouts, complex page layouts, two-dimensional designs

## Deployment

### Netlify Deployment

#### Process
1. Push code to Git repository (GitHub, GitLab, Bitbucket)
2. Connect repository to Netlify
3. Netlify automatically detects Next.js
4. Builds and deploys automatically
5. Provides HTTPS URL

#### Configuration File (netlify.toml)
```toml
[build]
  command = "npm run build"
  publish = ".next"
```

**What It Does**:
- Tells Netlify what command to run for building
- Specifies the output directory
- Can include redirects, headers, and other settings

### Vercel Deployment

#### Process
Similar to Netlify:
1. Push to Git repository
2. Connect to Vercel
3. Automatic detection and deployment
4. Provides HTTPS URL

#### Configuration File (vercel.json)
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs"
}
```

## Best Practices

### Code Organisation

**Component Structure**:
- One component per file
- Co-locate CSS modules with components
- Use descriptive file names
- Keep components focused and small

**File Naming**:
- Components: PascalCase (e.g., `ContactForm.jsx`)
- CSS Modules: Component name + `.module.css` (e.g., `ContactForm.module.css`)
- Pages: lowercase (e.g., `about.jsx`)

### Performance Optimisation

**Image Optimisation**:
- Compress images before uploading
- Use appropriate formats (JPG for photos, PNG for graphics)
- Use Next.js Image component for automatic optimisation (if needed)

**Code Splitting**:
- Next.js automatically splits code by route
- Each page only loads its own code
- Improves initial load time

**CSS Optimisation**:
- Use CSS Modules to avoid unused CSS
- Minify CSS in production build
- Avoid inline styles for better caching

### Accessibility

**Semantic HTML**:
- Use proper HTML elements (`<nav>`, `<header>`, `<main>`, `<footer>`)
- Use heading hierarchy correctly (`<h1>` to `<h6>`)
- Provide alt text for images

**Form Accessibility**:
- Associate labels with inputs using `htmlFor` and `id`
- Provide error messages that are accessible
- Use ARIA attributes where needed

**Example**:
```jsx
<label htmlFor="email">Email</label>
<input type="email" id="email" name="email" required />
```

## Common Patterns

### Conditional Rendering

**Example**:
```jsx
{status === 'success' && (
  <p className={styles.successMessage}>Form submitted!</p>
)}
```

### Event Handlers

**Example**:
```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  // Form submission logic
};
```

### State Management

**Example**:
```jsx
const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: ''
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};
```

## Backend

### Resend Email Service

#### Overview
Resend is a modern email API service designed for transactional emails. It provides reliable email delivery with good deliverability rates and a developer-friendly API.

#### Basic Setup

**Installation**:
```bash
npm install resend
```

**Initialisation**:
```javascript
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
```

**Sending an Email**:
```javascript
const { data, error } = await resend.emails.send({
  from: "noreply@yourdomain.com",
  to: "recipient@example.com",
  subject: "Hello",
  html: "<p>Email content</p>",
  text: "Email content",
});
```

**Why Use Resend**:
- Simple API
- Good free tier (3,000 emails/month)
- High deliverability rates
- Domain verification for professional emails
- Built for developers

#### Environment Variables

Always use environment variables for API keys:

```env
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL=your-email@example.com
RESEND_FROM_EMAIL=noreply@yourdomain.com
```

**Security Best Practices**:
- Never commit API keys to Git
- Use different keys for staging and production
- Store keys in hosting platform's environment variables
- Rotate keys periodically

#### Multi-Client Management

**The Problem**:
When managing multiple client websites, you need:
- Separate monthly limits per client
- Centralised control over all accounts
- Client isolation (one client shouldn't affect another)

**The Solution: Resend Multiple Teams (Requires Pro Account)**

⚠️ **Important**: Resend's Multiple Teams feature requires a **Pro account** ($20/month). This is the recommended solution for production scenarios.

Resend provides a "Multiple Teams" feature that allows you to create separate workspaces for each client under a single Resend account.

**How It Works**:
1. **Upgrade to Pro**: $20/month enables Multiple Teams feature
2. **Create a Team per Client**: Each team operates independently
3. **Separate API Keys**: Each team generates its own API keys
4. **Independent Limits**: Each team has its own monthly quota (3,000/month on free tier per team)
5. **Separate Billing**: Each team can have its own payment method
6. **Domain Verification**: Each team can verify its own domains

**Setup Process**:
1. Upgrade to Resend Pro account ($20/month)
2. Log in to Resend dashboard
3. Use Team switcher to create new team
4. Name it after the client (e.g., "Client Name - Email Service")
5. Generate API key for that team
6. Verify client's domain in that team
7. Use that API key in the client's deployment environment variables

**Code Implementation**:
Your code doesn't need to change - it already uses environment variables:

```javascript
const resend = new Resend(process.env.RESEND_API_KEY);
```

Each client's deployment simply uses a different `RESEND_API_KEY` environment variable pointing to their team's API key.

**Cost Structure**:
- Pro account: $20/month (enables multiple teams)
- Each team can be on free tier: 3,000 emails/month at no extra cost
- Only upgrade individual teams if they need more than 3,000 emails/month
- Example: Pro ($20/month) + 5 teams on free tier = $20/month total

**Benefits**:
- Complete isolation between clients
- Separate usage tracking per client
- Centralised management from one account
- Professional setup for each client
- Scalable as you add more clients
- Industry standard for agencies

**Alternative: Separate Free Accounts**:
If budget is tight, create separate Resend accounts (one per client):
- Each account gets free tier (3,000 emails/month)
- Complete isolation
- Trade-off: Multiple logins, less centralised control

**Best Practices**:
- Use consistent naming: `[Client Name] - Email Service`
- Verify each client's domain in their team
- Monitor usage per team regularly
- Consider separate teams for staging/production
- Document which API key belongs to which client

### Email Service Alternatives

**Free Alternatives to Resend**:

**Brevo (formerly Sendinblue)**:
- Free tier: 9,000 emails/month (300/day)
- Best free tier available
- REST API and SMTP
- Good for multiple clients (separate free accounts)

**Mailjet**:
- Free tier: 6,000 emails/month (200/day)
- REST API and SMTP
- Template management included

**MailerSend**:
- Free tier: 3,000/month (12,000/month if domain verified)
- REST API and SMTP
- Clean API design

**Vercel Email**:
- Unlimited emails (via Cloudflare/MailChannels)
- Only works on Vercel
- No API keys needed
- Single account only

**When to Use Each**:
- **Brevo**: Multiple clients, need highest free tier
- **Mailjet**: Need templates and analytics
- **MailerSend**: Have verified domains (gets 12k/month)
- **Vercel Email**: Single account, unlimited volume, Vercel-only
- **Resend**: Professional setup, willing to pay for Pro ($20/month)

**Multi-Client Strategy**:
- **Free**: Create separate free accounts (Brevo/Mailjet) - each gets own limits
- **Paid**: Resend Pro + Multiple Teams - centralised control

## Resources

- Next.js Documentation: https://nextjs.org/docs
- React Documentation: https://react.dev
- Netlify Forms: https://docs.netlify.com/forms/setup/
- CSS Modules: https://github.com/css-modules/css-modules
- Resend Documentation: https://resend.com/docs
- Resend Multiple Teams: https://resend.com/blog/multiple-teams
- Brevo Documentation: https://developers.brevo.com
- Mailjet Documentation: https://dev.mailjet.com
- MDN Web Docs: https://developer.mozilla.org/

