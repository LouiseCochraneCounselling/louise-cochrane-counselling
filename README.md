# Counselling Website

Modern, simple website for counselling business with contact form functionality.

## Features

- Responsive design that works on all devices
- Contact form with Netlify Forms integration
- Clean, modern UI
- Easy to navigate
- No backend required
- No database needed

## Technology Stack

- **Framework**: Next.js (React)
- **Styling**: CSS Modules
- **Form Handling**: Netlify Forms
- **Hosting**: Netlify or Vercel (free tier)

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### Netlify

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Sign up for a free Netlify account
3. Click "New site from Git"
4. Connect your repository
5. Netlify will automatically detect Next.js and configure build settings
6. Click "Deploy site"

### Vercel

1. Push your code to a Git repository
2. Sign up for a free Vercel account
3. Click "Import Project"
4. Connect your repository
5. Vercel will automatically detect Next.js
6. Click "Deploy"

## Form Configuration

### Netlify Forms Setup

The contact form is already configured with Netlify Forms. After deployment:

1. Go to your Netlify dashboard
2. Navigate to Forms section
3. Configure email notifications:
   - Go to Site settings > Forms > Form notifications
   - Add a notification
   - Choose "Email notification"
   - Enter the email address where you want to receive submissions
   - Save

### Form Fields

- Name (required)
- Email (required)
- Phone (optional)
- Message (required)

## Image Requirements

Add your images to `/public/images/`:

- **logo.png**: Logo image, max 200px width, PNG format with transparent background
- **hero-image.jpg**: Hero section image, optimised, max 1920px width
- **profile-photo.jpg**: Profile photo, square aspect ratio, max 400px

**Image Optimisation**: Use tools like [TinyPNG](https://tinypng.com/) to compress images before uploading.

## Customisation

### Update Content

- Home page: Edit `src/pages/index.jsx`
- About page: Edit `src/pages/about.jsx`
- Services page: Edit `src/pages/services.jsx`
- Contact page: Edit `src/pages/contact.jsx`

### Update Styling

- Global styles: Edit `src/styles/globals.css`
- Home page styles: Edit `src/styles/Home.module.css`
- Page styles: Edit `src/styles/Page.module.css`
- Component styles: Edit individual component CSS modules

### Update Branding

- Logo: Replace `/public/images/logo.png`
- Colours: Update CSS variables in component stylesheets
- Fonts: Update font-family in `globals.css`

## Domain Setup

1. Purchase a domain from a registrar (Namecheap, GoDaddy, etc.)
2. In Netlify/Vercel dashboard:
   - Go to Domain settings
   - Add your custom domain
   - Follow DNS configuration instructions
   - SSL certificate will be automatically provisioned

## Support

For issues or questions:
- Next.js documentation: https://nextjs.org/docs
- Netlify Forms: https://docs.netlify.com/forms/setup/
- Vercel documentation: https://vercel.com/docs

## License

All rights reserved.

