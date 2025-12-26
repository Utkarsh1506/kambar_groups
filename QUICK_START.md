# Quick Reference Guide - Kambar Groups Website

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open http://localhost:3000 in browser
```

## Project Location
`c:\Users\admin\Desktop\kambar`

## Key Files to Customize

### 📦 Products & Data
**File**: `src/data/index.ts`
- Add/edit products
- Update testimonials
- Modify features list
- Change achievement numbers

### 🎨 Colors & Branding
**File**: `src/app/globals.css`
- Update CSS variables:
  - `--accent-green`
  - `--accent-orange`
  - `--accent-blue`

### 🎬 Animations
**File**: `src/lib/animations.ts`
- Adjust animation durations
- Modify transition easing
- Configure stagger delays

### 📝 Content
- **Hero**: `src/components/sections/HeroSection.tsx`
- **Products**: `src/components/sections/ProductGrid.tsx`
- **About**: `src/components/sections/AboutSection.tsx`
- **Footer**: `src/components/shared/Footer.tsx`

## Component Hierarchy

```
Header (fixed nav)
│
├─ HeroSection (full-width hero)
├─ AchievementsBar (counters)
├─ Marquee (scrolling logos)
├─ AboutSection (story + timeline)
├─ ProductGrid (filterable products)
├─ WhyChooseUs (feature cards)
├─ PartnerCTA (conversion section)
├─ Testimonials (carousel)
│
Footer (site footer)
```

## Common Tasks

### Add a New Product
1. Open `src/data/index.ts`
2. Add entry to `products` array:
```typescript
{
  id: "7",
  name: "New Product",
  category: "Food",
  description: "...",
  ingredients: [...],
  benefits: [...],
  packaging: [...],
  image: "/products/image.png",
  featured: false,
}
```
3. Save and refresh

### Change Brand Colors
1. Open `src/app/globals.css`
2. Update `:root` variables
3. All components automatically use new colors

### Add a Testimonial
1. Open `src/data/index.ts`
2. Add to `testimonials` array:
```typescript
{
  id: "5",
  name: "Name",
  title: "Position",
  company: "Company",
  content: "...",
  rating: 5,
  image: "/testimonials/image.jpg",
}
```

### Replace Placeholder Images
1. Add image to `public/` folder
2. Find placeholder `<div>` in component
3. Replace with `<Image>` from next/image:
```typescript
import Image from "next/image";

<Image
  src="/products/image.png"
  alt="Product"
  width={400}
  height={400}
/>
```

## Deploy to Production

### Option 1: Vercel (Recommended)
```bash
npm i -g vercel
vercel
# Follow prompts
```

### Option 2: Other Hosting
```bash
npm run build      # Creates .next folder
npm start          # Starts production server
```

## Performance Tips

1. **Images**: Always use `<Image>` from next/image (not `<img>`)
2. **Animations**: Use `whileInView` to trigger on scroll (saves CPU)
3. **Data**: Keep product list under 100 items for best performance
4. **Lighthouse**: Test with `npm run build` + Lighthouse

## Browser Testing

- Chrome/Firefox/Safari (latest)
- Mobile: Test on actual device or DevTools device mode
- Viewport sizes: 320px (mobile), 768px (tablet), 1920px (desktop)

## Helpful Shortcuts

- **Dev Server**: Ctrl+Shift+\` to open terminal, `npm run dev`
- **Build**: `npm run build` (takes ~10 seconds)
- **Lint**: `npm run lint` (check for errors)

## Emergency Fixes

### Site not starting
```bash
rm -r .next node_modules
npm install
npm run dev
```

### TypeScript errors
- Check `tsconfig.json` imports
- Verify component props are typed
- Run `npm run build` to see all errors

### Styling issues
- Check Tailwind classes (must be exact)
- Clear browser cache (Ctrl+Shift+Del)
- Verify dark mode CSS in `globals.css`

## File Size References (Current)

- Total bundle: ~450KB (gzipped: ~120KB)
- Main JS: ~200KB
- CSS: ~50KB
- Built site: ~500 static files

## Next Steps

1. Replace all placeholder images with real product images
2. Update contact information and links
3. Add Google Analytics / tracking code
4. Set up form submission backend
5. Configure email notifications for contact forms
6. Deploy to production domain

---

**Version**: 1.0.0 | **Last Updated**: December 2024
**Support**: Refer to README.md for full documentation
