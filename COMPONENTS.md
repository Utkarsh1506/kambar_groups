# Component Documentation - Kambar Groups Website

## Overview

This document describes all components in the project and their usage.

## 🧬 Core Components

### Sections (Full-Page Components)

#### **HeroSection**
**File**: `src/components/sections/HeroSection.tsx`
**Purpose**: Main landing hero with headline, CTAs, and animated visuals
**Props**: None
**Features**:
- Animated gradient headline
- Dual CTA buttons (View Products, Become Distributor)
- Floating animated badges
- Animated product visual placeholder
- Scroll indicator animation

**Usage**:
```tsx
<HeroSection />
```

#### **ProductGrid**
**File**: `src/components/sections/ProductGrid.tsx`
**Purpose**: Product showcase with filtering and quick view modal
**Props**:
```typescript
interface ProductGridProps {
  products: Product[];
}
```
**Features**:
- Category filter buttons
- Responsive grid layout (1, 2, or 3 columns)
- Product cards with hover effects
- Quick View modal integration
- Featured badge for special products

**Usage**:
```tsx
<ProductGrid products={products} />
```

#### **AboutSection**
**File**: `src/components/sections/AboutSection.tsx`
**Purpose**: Company story with timeline
**Props**: None
**Features**:
- Story narrative on left
- Company timeline on right
- Year badges with milestone descriptions
- Factory visual placeholder
- ISO certification floating badge

**Usage**:
```tsx
<AboutSection />
```

#### **WhyChooseUs**
**File**: `src/components/sections/WhyChooseUs.tsx`
**Purpose**: Feature cards highlighting company strengths
**Props**:
```typescript
interface WhyChooseUsProps {
  features: Feature[];
}
```
**Features**:
- 4 feature cards with icons
- Hover lift and glow effects
- Scroll-triggered animations
- Icon rotation on hover

**Usage**:
```tsx
<WhyChooseUs features={features} />
```

#### **PartnerCTA**
**File**: `src/components/sections/PartnerCTA.tsx`
**Purpose**: Conversion-focused partnership call-to-action
**Props**: None
**Features**:
- Gradient background with blur
- Benefits checklist (6 items)
- Dual CTA buttons
- Contact information
- Centered layout

**Usage**:
```tsx
<PartnerCTA />
```

#### **Testimonials**
**File**: `src/components/sections/Testimonials.tsx`
**Purpose**: Customer testimonial carousel
**Props**:
```typescript
interface TestimonialsProps {
  testimonials: Testimonial[];
}
```
**Features**:
- Motion-based carousel
- Star ratings display
- Previous/next buttons
- Dot navigation
- Testimonial counter

**Usage**:
```tsx
<Testimonials testimonials={testimonials} />
```

---

## 🎯 Shared Components

### **Header**
**File**: `src/components/shared/Header.tsx`
**Purpose**: Fixed navigation header with mobile menu
**Props**: None
**Features**:
- Sticky positioning with scroll effects
- Desktop nav links
- Mobile hamburger menu
- CTA buttons (Contact, Partner Now)
- Logo branding

**Usage**:
```tsx
<Header />
```

### **Footer**
**File**: `src/components/shared/Footer.tsx`
**Purpose**: Site footer with links and newsletter
**Props**: None
**Features**:
- Brand section with social icons
- 4-column link structure
- Newsletter signup
- Legal links
- Copyright info

**Usage**:
```tsx
<Footer />
```

---

## 🧩 UI Components (Reusable)

### **Button**
**File**: `src/components/ui/Button.tsx`
**Purpose**: Reusable button component with variants
**Props**:
```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}
```
**Variants**:
- `primary`: Green background, white text
- `secondary`: Gray background
- `outline`: Green border, transparent background

**Sizes**:
- `sm`: Small padding, 14px text
- `md`: Medium padding, 16px text
- `lg`: Large padding, 18px text

**Features**:
- Hover scale animation
- Tap feedback
- Accessible focus states

**Usage**:
```tsx
<Button variant="primary" size="md">
  Click Me
</Button>
```

### **AchievementsBar**
**File**: `src/components/ui/AchievementsBar.tsx`
**Purpose**: Animated counter display section
**Props**:
```typescript
interface AchievementsProps {
  data: { label: string; value: string }[];
}
```
**Features**:
- Auto-incrementing counters
- Scroll-triggered animation
- Staggered children
- Grid layout (2 or 3 columns)

**Usage**:
```tsx
<AchievementsBar data={achievements} />
```

**Example Data**:
```typescript
[
  { label: "Years Experience", value: "15+" },
  { label: "Products Delivered", value: "50M+" },
  { label: "Retail Partners", value: "5000+" },
]
```

### **Marquee**
**File**: `src/components/ui/Marquee.tsx`
**Purpose**: Auto-scrolling text/logo marquee
**Props**:
```typescript
interface MarqueeProps {
  items: string[];
  speed?: number; // duration in seconds
}
```
**Features**:
- GSAP-powered infinite scroll
- Configurable speed
- Dots between items
- Smooth looping

**Usage**:
```tsx
<Marquee items={partnerLogos} speed={50} />
```

### **QuickViewModal**
**File**: `src/components/ui/QuickViewModal.tsx`
**Purpose**: Product details modal with Framer Motion animations
**Props**:
```typescript
interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}
```
**Features**:
- Animated backdrop blur
- Scale-in animation
- Close button
- Product info tabs
- Enquire button

**Usage**:
```tsx
const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

<QuickViewModal
  product={selectedProduct}
  isOpen={selectedProduct !== null}
  onClose={() => setSelectedProduct(null)}
/>
```

---

## 📊 Data Models

### **Product**
```typescript
interface Product {
  id: string;
  name: string;
  category: "Food" | "Personal Care" | "Home Care";
  description: string;
  ingredients: string[];
  benefits: string[];
  packaging: string[];
  image: string;
  featured: boolean;
}
```

### **Testimonial**
```typescript
interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}
```

### **Feature**
```typescript
interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string; // Icon name from lucide-react
}
```

---

## 🎬 Animation Variants

All variants from `src/lib/animations.ts`:

### **fadeInUpVariants**
Fade in with upward slide motion
```typescript
{ opacity: 0, y: 20 } → { opacity: 1, y: 0 }
```

### **slideInLeftVariants**
Slide in from left with fade
```typescript
{ opacity: 0, x: -40 } → { opacity: 1, x: 0 }
```

### **slideInRightVariants**
Slide in from right with fade
```typescript
{ opacity: 0, x: 40 } → { opacity: 1, x: 0 }
```

### **scaleInVariants**
Scale up with fade effect
```typescript
{ opacity: 0, scale: 0.8 } → { opacity: 1, scale: 1 }
```

### **containerVariants**
Staggered container for child animations
```typescript
{
  staggerChildren: 0.1,
  delayChildren: 0.2
}
```

### **itemVariants**
Child item animation (used with containerVariants)
```typescript
{ opacity: 0, y: 10 } → { opacity: 1, y: 0 }
```

---

## 🔧 Utility Patterns

### Using Scroll-Triggered Animations
```tsx
<motion.div
  variants={fadeInUpVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
>
  Content
</motion.div>
```

### Using Container + Item Animations
```tsx
<motion.div variants={containerVariants} initial="hidden" whileInView="visible">
  <motion.div variants={itemVariants}>Item 1</motion.div>
  <motion.div variants={itemVariants}>Item 2</motion.div>
</motion.div>
```

### Using Hover Effects
```tsx
<motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
  Interactive Element
</motion.div>
```

---

## 🌓 Dark Mode Support

All components automatically support dark mode through Tailwind's `dark:` prefix:

```tsx
className="bg-white dark:bg-neutral-900"
className="text-gray-900 dark:text-white"
className="border-gray-200 dark:border-neutral-800"
```

---

## ♿ Accessibility Features

- ✅ Focus-visible states on all interactive elements
- ✅ Semantic HTML (nav, section, footer, etc.)
- ✅ ARIA labels on icon buttons
- ✅ Keyboard navigation support
- ✅ Color contrast ratios > 4.5:1
- ✅ Reduced motion support (uses prefers-reduced-motion)

---

## Performance Considerations

- **Images**: Use `next/image` with lazy loading
- **Animations**: Use `whileInView` to animate only visible elements
- **State**: Keep component state minimal
- **Variants**: Reuse animation variants across components
- **Fonts**: Optimized with `next/font` (no external CDN)

---

## Extension Examples

### Adding a New Section
1. Create `src/components/sections/NewSection.tsx`
2. Export as FC component
3. Import in `src/app/page.tsx`
4. Add to page layout

### Adding a New Product
1. Edit `src/data/index.ts`
2. Add to `products` array
3. Component auto-updates via props

### Customizing Animations
1. Modify `src/lib/animations.ts`
2. Change duration, delay, or easing
3. All using components auto-update

---

**Version**: 1.0.0 | **Last Updated**: December 2024
