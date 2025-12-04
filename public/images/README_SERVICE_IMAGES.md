# Service Images

## Image Requirements

Place your service images in this directory:

1. **Children Counselling**: `children-counselling.jpg`
2. **Adults Counselling**: `adults-counselling.jpg`

### Recommended Specifications

- **Format**: JPG (optimised) or WebP
- **Dimensions**: Minimum 800px width × 600px height (landscape orientation)
- **Aspect Ratio**: 4:3 or 16:9 (landscape)
- **File Size**: Optimised to under 400KB each for fast loading
- **Style**: 
  - Professional, warm, and inviting
  - High quality, clear focus
  - Appropriate for counselling context
  - Good lighting
  - Natural, authentic feel

### Image Suggestions

#### Children Counselling Image
- Child in a safe, comfortable setting
- Could show child playing, drawing, or in a counselling environment
- Warm, friendly atmosphere
- Age-appropriate setting
- Professional but approachable

#### Adults Counselling Image
- Two people in a counselling setting (counsellor and client)
- Comfortable, calm environment
- Professional but welcoming
- Natural interaction or conversation setting
- Warm, supportive atmosphere

### Image Optimisation

Before uploading, optimise your images using:
- [TinyPNG](https://tinypng.com/) - Compress JPG/PNG files
- [Squoosh](https://squoosh.app/) - Advanced image compression
- [ImageOptim](https://imageoptim.com/) - Mac app for batch optimisation

### Alternative Formats

If you want to use WebP format (better compression), update the image src in `src/pages/index.jsx`:
```jsx
<img src="/images/children-counselling.webp" alt="..." />
<img src="/images/adults-counselling.webp" alt="..." />
```

### Styling Notes

The images will be displayed in:
- Service cards with rounded corners
- Fixed height containers (280px desktop, responsive on mobile)
- Hover zoom effect
- Responsive sizing (stacks on mobile)

### Example Image Sources

- Professional photography session
- Stock photo services (ensure commercial license):
  - Unsplash: Search "counselling", "therapy", "child therapy"
  - Pexels: Free stock photos
  - Pixabay: Free images
- Ensure images are appropriate and professional

Make sure you have the rights to use the images commercially.

