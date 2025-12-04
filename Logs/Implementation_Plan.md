# Counselling Website Implementation Plan

## Project Overview
Modern, simple counselling business website with contact form functionality. No payment processing required.

## Technology Stack

### Frontend
- **Framework**: Next.js (React)
- **Styling**: CSS Modules
- **Form Handling**: Netlify Forms (recommended) or Formspree

### Hosting
- **Primary Option**: Netlify (Free tier)
- **Alternative**: Vercel (Free tier)
- **Domain**: Purchase separately (~£10-15/year)

### Image Storage
- Images stored in `/public/images/` directory
- Optimised using tools like TinyPNG before upload
- Served via hosting provider's CDN

### Backend Requirements
- **None required** - Static site with form service

### Database Requirements
- **None required** - Form submissions handled by form service

## Cost Breakdown

### Monthly Costs
- Hosting: £0 (Free tier)
- Form Service: £0 (Netlify Forms free) or £5-10/month (Formspree Pro if needed)
- **Total**: £0-10/month

### One-Time Costs
- Domain Registration: £10-15/year
- SSL Certificate: Included free with hosting

## Project Structure

```
LCounselling/
├── public/
│   ├── images/          # All website images
│   └── favicon.ico
├── src/
│   ├── components/      # Reusable React components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Navigation.jsx
│   │   └── ContactForm.jsx
│   ├── pages/          # Page components
│   │   ├── index.jsx (Home)
│   │   ├── about.jsx
│   │   ├── services.jsx
│   │   └── contact.jsx
│   └── styles/         # CSS files
│       ├── globals.css
│       ├── Home.module.css
│       └── Page.module.css
├── package.json
├── netlify.toml        # Netlify configuration
├── vercel.json         # Vercel configuration
└── README.md
```

## Implementation Steps

### Phase 1: Project Setup ✅
1. ✅ Initialise Next.js project structure
2. ✅ Set up Git repository
3. ✅ Create folder structure
4. ✅ Install dependencies (run `npm install`)
5. ✅ Configure Netlify/Vercel deployment files

### Phase 2: Design Implementation ✅
1. ✅ Create base layout components (Header, Footer, Navigation)
2. ✅ Implement responsive design
3. ✅ Style components with modern, clean design
4. ⏳ Add images and optimise them (client to provide)
5. ✅ Ensure mobile responsiveness

### Phase 3: Contact Form Integration ✅
1. ✅ Create ContactForm component
2. ✅ Configure Netlify Forms integration
3. ✅ Add form validation
4. ⏳ Test form submissions (after deployment)
5. ⏳ Set up email notifications (in Netlify dashboard)

### Phase 4: Content Pages ✅
1. ✅ Create Home page
2. ✅ Create About page
3. ✅ Create Services page
4. ✅ Create Contact page with form
5. ⏳ Add client-specific content and images

### Phase 5: Testing & Deployment ⏳
1. ⏳ Test all pages and forms locally
2. ⏳ Test on multiple devices/browsers
3. ⏳ Deploy to Netlify/Vercel
4. ⏳ Configure custom domain
5. ⏳ Set up SSL certificate (automatic)
6. ⏳ Final testing and go-live

## Form Configuration

### Netlify Forms Setup
1. ✅ Add `data-netlify="true"` to form element
2. ✅ Add hidden input: `<input type="hidden" name="form-name" value="contact" />`
3. ✅ Add honeypot field for spam protection
4. ⏳ Configure email notifications in Netlify dashboard (after deployment)
5. ⏳ Set up form submission notifications

### Form Fields Required
- Name (required)
- Email (required)
- Phone (optional)
- Message (required)

## Image Requirements

### Image Specifications
- Logo: PNG format, transparent background, max 200px width
- Hero Image: JPG format, optimised, max 1920px width
- Profile Photo: JPG format, square aspect ratio, max 400px
- All images: Compressed using TinyPNG or similar

### Image Storage
- Store in `/public/images/` directory
- Use descriptive filenames (e.g., `hero-image.jpg`)
- Optimise all images before upload

## Deployment Checklist

- [x] Project structure created
- [x] All components created
- [x] All pages created and styled
- [x] Contact form integrated
- [ ] Images optimised and uploaded
- [ ] Content reviewed and updated
- [ ] Mobile responsiveness verified
- [ ] Cross-browser testing completed
- [ ] Local testing completed
- [ ] Deployed to hosting platform
- [ ] Domain configured
- [ ] SSL certificate active
- [ ] Form notifications configured
- [ ] Form submissions tested
- [ ] Analytics setup (optional)
- [ ] SEO meta tags verified

## Next Steps

1. **Install Dependencies**: Run `npm install` in the project directory
2. **Add Images**: Place optimised images in `/public/images/` directory
3. **Customise Content**: Update page content in `src/pages/` files
4. **Test Locally**: Run `npm run dev` and test all pages
5. **Deploy**: Push to Git and deploy via Netlify or Vercel
6. **Configure Forms**: Set up email notifications in hosting dashboard
7. **Domain Setup**: Configure custom domain and SSL

## Maintenance

### Regular Tasks
- Monitor form submissions
- Update content as needed
- Check for broken links monthly
- Review and update images quarterly
- Monitor hosting usage

### Updates Required
- Content updates: As needed by client
- Security updates: Automatic via hosting provider
- Framework updates: Quarterly review

## Support & Resources

### Documentation
- Next.js: https://nextjs.org/docs
- Netlify Forms: https://docs.netlify.com/forms/setup/
- Formspree: https://formspree.io/documentation

### Tools
- Image Optimisation: https://tinypng.com/
- Domain Registration: Namecheap, GoDaddy, or similar
- Hosting: Netlify or Vercel

## Notes
- No database required for this project
- No backend server needed
- All form submissions handled by form service
- Images served via CDN automatically
- SSL certificate included free with hosting
- Project uses UK English spelling throughout

