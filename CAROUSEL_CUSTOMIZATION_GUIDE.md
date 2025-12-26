# 🎪 Upcoming Products Carousel - Complete Implementation Guide

## 🎉 What You Got

A professional **upcoming products carousel** that:
- Displays 11 new products with real images
- Auto-rotates every 5 seconds
- Shows on the hero section (between hero and regular products)
- Includes navigation controls and smooth animations
- Is fully responsive on all devices

## 📍 Location

**On Your Website:**
```
Hero Section (Main heading & CTA buttons)
        ↓
[NEW] Upcoming Products Carousel ← YOU ARE HERE
        ↓
Products Section (40 current products)
```

The carousel appears automatically when you visit http://localhost:3000

## 🎨 Visual Details

### Carousel Appearance
- **Header**: "Coming Soon" with clock icon
- **Product Cards**: 4 visible on desktop
- **Image**: Real product photo with gradient overlay
- **Badge**: Orange "Soon" badge in top-right
- **Info**: Category label, product name, launch date
- **Button**: "Notify Me" button (ready for functionality)
- **Navigation**: Left/Right arrows + dot indicators

### Colors & Styling
- **Orange Accents**: `#f97316` for Coming Soon theme
- **Cards**: White with subtle shadows
- **Hover Effect**: Image zooms, shadow grows, border turns orange
- **Responsive**: 4 → 2 → 1 products as screen shrinks

## 📊 The 11 Upcoming Products

All product images are in `/public/`:
- `up1.jpeg` → Organic Turmeric
- `up2.jpeg` → Premium Basmati
- `up3.jpeg` → Natural Hair Oil
- `up4.jpeg` → Eco Friendly Bags
- `up5.jpeg` → Protein Mix
- `up6.jpeg` → Organic Ghee
- `up7.jpeg` → Face Cream
- `up8.jpeg` → Mosquito Repellent
- `up9.jpeg` → Energy Bars
- `up10.jpeg` → Herbal Tea
- `up11.jpeg` → Body Scrub

## 🔧 How to Customize

### Change Product Details
Edit `src/data/index.ts`, find `upcomingProducts` array:

```typescript
{
  id: "up1",
  name: "Your Product Name",        // ← Change name
  comingSoon: "January 2026",        // ← Change date
  category: "Food",                  // ← Change category
  image: "/up1.jpeg",                // ← Change image
}
```

### Add More Products
Just add new objects to the `upcomingProducts` array:
1. Add images to `/public/` (e.g., `up12.jpeg`)
2. Add new product entry in `src/data/index.ts`
3. Update image path to match

### Change Colors
Edit `src/components/ui/UpcomingCarousel.tsx`:
- Replace `orange-500` with your color (e.g., `emerald-500`)
- Replace `orange-600` with darker shade
- Update hover states (`orange-200`, `orange-100`)

### Change Carousel Speed
In `UpcomingCarousel.tsx`, find:
```typescript
}, 5000)  // ← Change 5000ms to your preferred speed
```

### Change Number of Visible Products
In `UpcomingCarousel.tsx`:
```typescript
const displayCount = 4  // ← Change to 3, 5, or whatever you want
```

## 🎯 Component Architecture

```
UpcomingCarousel.tsx
├── Auto-play logic (5 second interval)
├── Manual navigation (arrows + dots)
├── Product cards display (4 per row)
├── Image optimization (Next.js Image)
└── Responsive grid layout

Hero.tsx (Updated)
├── Original hero section
└── <UpcomingCarousel /> ← New component inserted
```

## 🚀 Future Functionality

The buttons are ready for these features:

### 1. Email Notification
```typescript
// "Notify Me" button currently shows, but can connect to:
- Email subscription
- Notification service
- CRM system
```

### 2. Pre-Order System
```typescript
// Can replace "Notify Me" with "Pre-Order Now"
- Track interest
- Collect pre-orders
- Set reservation quantities
```

### 3. Wishlist Integration
```typescript
// Add heart icon to save products
- User wishlist
- Track most wanted products
- Send discount on launch
```

## 📱 Responsive Behavior

### Desktop (1024px+)
- 4 products visible
- Full navigation controls
- Hover effects active
- Large images

### Tablet (640px - 1023px)
- 2 products visible
- Navigation controls visible
- Touch-optimized buttons
- Medium images

### Mobile (< 640px)
- 1 product visible
- Large tap targets
- Simplified layout
- Touch-friendly

## ⚙️ Technical Details

### Performance
- Uses `Next.js Image` for optimization
- Auto-play pauses during interactions
- Lazy loading for images
- Responsive image sizes

### Browser Support
- Chrome, Firefox, Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Android Chrome)
- Touch and mouse input support

### Accessibility
- Semantic HTML
- ARIA labels on buttons
- Alt text on images
- Keyboard navigation support
- High contrast colors

## 🧪 Testing

To verify everything works:

1. **Auto-Play**: Watch carousel advance every 5 seconds
2. **Manual Navigation**: Click left/right arrows
3. **Dot Indicators**: Click any dot to jump to that position
4. **Hover Effects**: Hover over cards to see zoom effect
5. **Responsive**: Resize browser to see layout adapt
6. **Mobile**: Test on phone/tablet
7. **Images**: Verify all 11 product images load

## 📋 Customization Checklist

- [ ] Review the 11 products
- [ ] Update product names if needed
- [ ] Adjust coming soon dates
- [ ] Update categories if needed
- [ ] Change carousel speed (optional)
- [ ] Customize colors (optional)
- [ ] Test on mobile/tablet
- [ ] Plan next features (email, pre-order, etc.)

## 📝 Files Modified

### New File
- `src/components/ui/UpcomingCarousel.tsx` (280 lines)
  - Complete carousel component with auto-play
  - Navigation and indicators
  - Responsive grid

### Updated Files
- `src/components/sections/Hero.tsx` 
  - Added UpcomingCarousel import
  - Wrapped in section with carousel
  
- `src/data/index.ts`
  - Added `UpcomingProduct` interface
  - Added `upcomingProducts` array with 11 items

## 🎬 Live Demo

Visit: **http://localhost:3000**

The carousel automatically:
1. Loads with the first 4 products visible
2. Rotates to next set every 5 seconds
3. Shows helpful navigation arrows on hover
4. Displays dot indicators for quick jumping

## 💡 Pro Tips

1. **Update Images**: Rename your image files to `up1.jpeg`, `up2.jpeg`, etc. for consistency
2. **Create Buzz**: Use the carousel to build anticipation for launches
3. **Category Mix**: Mix categories to showcase product diversity
4. **Dates**: Stagger launch dates to create ongoing excitement
5. **Connect Email**: Link "Notify Me" to email marketing tool

## 🔗 Related Documentation

- `UPCOMING_CAROUSEL_DOCS.md` - Full technical documentation
- `PRODUCT_IMAGES_IMPLEMENTATION.md` - Current products guide
- `src/data/index.ts` - All product data
- `src/components/ui/UpcomingCarousel.tsx` - Component source code

## ❓ FAQ

**Q: Can I have more than 4 products visible?**
A: Yes! Change `displayCount` in `UpcomingCarousel.tsx`

**Q: How do I change the orange color?**
A: Replace all `orange-*` classes with your preferred color (e.g., `blue-*`, `emerald-*`)

**Q: Can I disable auto-play?**
A: Yes! Set `const [autoPlay, setAutoPlay] = useState(false)` initially

**Q: How do I add the "Notify Me" functionality?**
A: Connect the button onClick to your email service or CRM

**Q: Can I show different products on mobile?**
A: Yes! Use React conditional rendering based on screen size

## ✅ Status

✅ **Complete and Live**
- 11 upcoming products integrated
- Carousel fully functional
- All features working
- Ready for customization
- Build passing with no errors

---

**You now have a professional carousel showcasing upcoming products!**
Start with the quick start guide above, and customize as needed.
