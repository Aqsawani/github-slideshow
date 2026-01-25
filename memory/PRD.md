# Ozilum Agency Website - Product Requirements Document

## Original Problem Statement
Build a modern, professional agency website for "Ozilum" - a design and digital agency based in Australia. The website should showcase services, establish brand identity, and generate client inquiries.

## Brand Details
- **Company Name:** Ozilum
- **Tagline:** "Elevating Brands - The OZ Way"
- **Color Palette:**
  - Primary: Teal `#00A3A8`
  - Secondary: Gray `#D3D3D3`
  - Background: Dark `#1A1C1B`

## Target Audience
- Businesses seeking branding, logo design, and web development services in Australia
- Startups and established companies looking for professional digital agency services

## Core Requirements

### Completed Features ✅
1. **Homepage Sections:**
   - Hero section with animated background
   - Services overview with cards
   - "Why Choose Us" section with animated icons
   - Process timeline with scroll-triggered animations
   - Client logo carousel (infinite sliding, 12 logos)
   - Testimonials section
   - Contact form (visual only, backend pending)
   - Footer with Australian flags (Australian, Aboriginal, Torres Strait Islander)

2. **Service Pages (6 total):**
   - Logo Design (`/services/logo-design`)
   - Brand Identity (`/services/brand-identity`)
   - Web Development (`/services/web-development`)
   - SEO & Performance (`/services/seo-performance`)
   - Marketing Materials (`/services/marketing-materials`)
   - Social Media (`/services/social-media`)

3. **About Page (`/about`):**
   - Company introduction: Melbourne-based agency
   - Team info: 5 designers and developers
   - Company story and values sections
   - Team roles showcase

4. **Work Page (`/work`):**
   - Portfolio redirect to Instagram (@ozilum_)
   - Instagram CTA button
   - Project statistics (50+ projects, 30+ clients, 5 years)

3. **Design & Animations:**
   - Glass-morphism effects
   - Floating orbs background
   - Scroll-triggered animations
   - Animated number counters
   - Modern dark theme aesthetic

4. **Branding:**
   - ✅ Official logo implemented (uploaded image with "OZ" teal, "LUME" gray)
   - ✅ Logo displayed in header and footer
   - Instagram link for portfolio (replacing on-site portfolio)

5. **Code Cleanup:**
   - ✅ Deleted obsolete `Logo.jsx` (replaced with image logo)
   - ✅ Deleted obsolete `Portfolio.jsx` (replaced with `PortfolioCTA.jsx`)

### Pending Features 🔄

#### P0 - Critical
- **Backend Contact Form Integration**
  - Create `/api/contact` endpoint
  - Validate form data
  - Store submissions in MongoDB
  - Connect frontend form to backend

#### P1 - Important
- **Website Deployment**
  - Deploy to production when ready
  - User has inquired about this

### Future/Backlog 📋
- Email notifications for contact form submissions
- Additional testimonials
- Blog section (if requested)

## Architecture

### Frontend
- **Framework:** React
- **Styling:** TailwindCSS + Custom CSS (`App.css`)
- **Routing:** React Router
- **Key Patterns:**
  - Glass-morphism with `backdrop-filter: blur()`
  - CSS keyframe animations
  - `IntersectionObserver` for scroll animations

### Backend
- **Framework:** FastAPI
- **Database:** MongoDB (configured but not actively used)
- **Endpoints:** Template only, no custom endpoints yet

### File Structure
```
/app
├── backend/
│   ├── server.py
│   ├── requirements.txt
│   └── .env (MONGO_URL, DB_NAME)
└── frontend/
    ├── public/
    │   ├── clients/          # Client logos
    │   └── images/
    │       └── ozilum-logo.png  # Official logo
    └── src/
        ├── components/
        │   ├── Header.jsx
        │   ├── Footer.jsx
        │   ├── Hero.jsx
        │   ├── Services.jsx
        │   ├── WhyChoose.jsx
        │   ├── Process.jsx
        │   ├── Clients.jsx
        │   ├── Testimonials.jsx
        │   ├── Contact.jsx
        │   └── PortfolioCTA.jsx
        ├── pages/
        │   ├── HomePage.jsx
        │   └── ServicePage.jsx
        ├── hooks/
        │   └── useScrollAnimation.js
        ├── App.css
        └── App.js
```

## Key Files Reference
- `/app/frontend/src/App.css` - All custom CSS, color variables, animations
- `/app/frontend/src/pages/ServicePage.jsx` - Dynamic service page template
- `/app/frontend/src/components/Clients.jsx` - Infinite logo carousel
- `/app/frontend/public/images/ozilum-logo.png` - Official logo

## Last Updated
January 25, 2026 - Logo implementation completed
