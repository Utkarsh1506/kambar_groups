Project: Kambar Groups - Premium FMCG Brand Website

Tech Stack: Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, GSAP, Lucide React

Quick Start:
- npm install
- npm run dev (http://localhost:3000)
- npm run build (production build)

Key Features:
- Hero section with animated product visuals
- Product grid with category filters and quick view modals
- About section with timeline
- Achievements counter animation
- Trust marquee (GSAP powered)
- Why Choose Us feature cards
- Partner CTA with benefits checklist
- Testimonials carousel
- Responsive header with mobile menu
- Premium footer with newsletter signup

Project Structure:
src/
├── app/ (layout, page, globals.css)
├── components/ (sections, shared, ui)
├── lib/ (animations.ts - Framer Motion variants)
├── data/ (products, testimonials, features)
└── public/ (assets - placeholders to customize)

Animation System:
- Framer Motion: fadeInUp, slideInLeft/Right, scaleIn, container variants
- GSAP: Marquee infinite scroll, counters
- Tailwind: Responsive design, hover states
- All animations are performance-optimized with viewport triggers

Important Files:
- src/data/index.ts - Update products, testimonials, features here
- src/lib/animations.ts - Modify animation configs
- src/app/globals.css - Color theme CSS variables
- README.md - Complete documentation

Customization Tips:
1. Products: Edit src/data/index.ts (add/remove products)
2. Colors: Update --accent-* variables in globals.css
3. Animations: Adjust duration/easing in src/lib/animations.ts
4. Images: Replace placeholder divs with next/image components
5. Content: Update text in component files directly

Assets Note: Product images, hero visual, and about section images are placeholders (gradient divs). Replace with actual images in public/ folder and update component refs.

Performance: Built-in optimizations for Lighthouse > 90:
- next/font (Inter)
- next/image lazy loading
- CSS minification via Tailwind
- Route-based code splitting
- TypeScript for type safety

Browser Support: Latest 2 versions of Chrome, Firefox, Safari, and mobile browsers

Deployment: Use Vercel for one-click deployment (npm i -g vercel && vercel)

