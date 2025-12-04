# Quick Start Guide

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages including Next.js, React, and development dependencies.

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### 3. Make Changes

- Edit pages in `src/pages/`
- Edit components in `src/components/`
- Edit styles in `src/styles/` or component CSS modules
- The page will automatically reload when you save changes

### 4. Add Images

Place your images in `public/images/`:
- `logo.png` - Your logo (max 200px width)
- `hero-image.jpg` - Hero section image
- `profile-photo.jpg` - Profile photo

**Important**: Optimise images using [TinyPNG](https://tinypng.com/) before uploading.

### 5. Customise Content

Update the content in:
- `src/pages/index.jsx` - Homepage
- `src/pages/about.jsx` - About page
- `src/pages/services.jsx` - Services page
- `src/pages/contact.jsx` - Contact page

### 6. Build for Production

```bash
npm run build
```

This creates an optimised production build in `.next/` directory.

### 7. Deploy

#### Option A: Netlify (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Sign up at [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect your repository
5. Netlify will auto-detect Next.js settings
6. Click "Deploy site"
7. After deployment, configure form notifications:
   - Go to Site settings > Forms
   - Add email notification
   - Enter your email address

#### Option B: Vercel

1. Push your code to GitHub/GitLab/Bitbucket
2. Sign up at [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Connect your repository
5. Vercel will auto-detect Next.js
6. Click "Deploy"

### 8. Configure Domain

1. Purchase domain from registrar (Namecheap, GoDaddy, etc.)
2. In Netlify/Vercel dashboard:
   - Go to Domain settings
   - Add custom domain
   - Follow DNS configuration instructions
   - SSL certificate is automatic

## Project Structure

```
LCounselling/
├── public/              # Static files (images, favicon)
│   └── images/
├── src/
│   ├── components/      # Reusable components
│   ├── pages/          # Page components (routes)
│   └── styles/         # Global styles
├── package.json        # Dependencies
├── netlify.toml        # Netlify config
└── README.md          # Full documentation
```

## Common Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server (after build)
- `npm run lint` - Check for code issues (if ESLint configured)

## Next Steps

1. ✅ Install dependencies
2. ✅ Test locally
3. ⏳ Add images
4. ⏳ Customise content
5. ⏳ Deploy to hosting
6. ⏳ Configure form notifications
7. ⏳ Set up custom domain

## Need Help?

- Check `README.md` for detailed documentation
- Check `Logs/Implementation_Plan.md` for full implementation guide
- Check `Logs/Features/contact_form_integration.md` for form setup details

