# OZlume Agency Website - Product Requirements Document

## Original Problem Statement
Build a modern, professional agency website for "OZlume" - a design and branding agency based in Melbourne, Australia. The website should showcase services, establish brand identity, and generate client inquiries through a functional contact form.

## Brand Details
- **Company Name:** OZlume
- **Tagline:** "Elevating Brands - The OZ Way"
- **Color Palette:**
  - Primary: Teal `#00A3A8`
  - Text Primary: White `#FFFFFF`
  - Text Secondary: Light Gray `#b0b0b0`
  - Background: Dark `#0a0b0a`
  - Card Background: `#1a1d1b`
- **Contact Email:** contact@ozlume.com.au
- **WhatsApp:** 0452 039 863
- **Instagram:** @ozlumeau

## Target Audience
- Businesses seeking branding, logo design, and web development services
- Startups and growing companies looking for professional creative agency services

## Architecture

### Frontend
- **Framework:** React with React Router
- **Styling:** TailwindCSS + Custom CSS (App.css with CSS variables)
- **Key Patterns:** Glass-morphism, scroll animations, IntersectionObserver

### Backend
- **Framework:** FastAPI
- **Database:** MongoDB (configured, used for contact form storage)
- **Email:** Resend API for contact form notifications

### File Structure
```
/app
├── backend/
│   ├── server.py          # FastAPI endpoints, Resend integration
│   ├── requirements.txt
│   ├── .env               # MONGO_URL, DB_NAME, RESEND_API_KEY, etc.
│   └── tests/
│       └── test_ozlume_api.py
└── frontend/
    ├── public/
    │   ├── clients/       # Client logos (12 images)
    │   ├── images/
    │   │   └── ozilum-logo.png
    │   ├── index.html     # SEO optimized meta tags
    │   ├── manifest.json
    │   ├── robots.txt
    │   └── sitemap.xml
    └── src/
        ├── components/
        │   ├── Header.jsx
        │   ├── Footer.jsx       # Clean, no flags
        │   ├── Hero.jsx         # "Creative Design That Helps Your Brand Stand Out"
        │   ├── Services.jsx
        │   ├── WhyChoose.jsx
        │   ├── Process.jsx
        │   ├── PortfolioCTA.jsx
        │   ├── Clients.jsx
        │   ├── Testimonials.jsx
        │   └── Contact.jsx      # With WhatsApp field, connected to backend
        ├── pages/
        │   ├── HomePage.jsx
        │   ├── ServicePage.jsx  # No pricing, "Get Free Quote" CTA
        │   ├── AboutPage.jsx    # Who We Are, What We Do, Our Approach
        │   └── WorkPage.jsx     # Behold.so Instagram widget
        ├── App.css
        └── App.js
```

## Completed Features

### Homepage
- Hero with headline: "Creative Design That Helps Your Brand Stand Out"
- Badge: "Design & Branding Agency"
- Subheading: "Logo Design, Brand Identity, Web Development & SEO — Simple, Smart Design for Growing Brands."
- Animated stats counters (50+ projects, 100% satisfaction, 5+ years)
- Services grid with 6 service cards
- Why Choose OZlume section with animated icons
- Our Process vertical timeline
- Portfolio CTA linking to Instagram
- Client logo carousel (12 logos, infinite scroll)
- Testimonials section (3 real reviews)
- Contact form with WhatsApp field
- Clean footer with updated email

### Service Pages (6 total)
- Logo Design, Brand Identity, Graphic Design, Web Development, SEO & Performance, Digital Solutions
- No pricing displayed — "Message Us for a Custom Offer"
- CTA: "Get Free Quote" button scrolling to contact form

### About Page
- Hero: "We Are OZlume"
- Location bar: Melbourne, Australia | 5 Creatives
- "Who We Are" section
- "What We Do" section
- "Our Approach" section (Creative Thinking, Quality First, Results Focused)

### Work Page
- Instagram feed via Behold.so widget (feed ID: ZxGiAOZX6jUflSBAaBx7)
- Follow @ozlumeau button
- Stats section (150+ Projects, 120+ Clients, 5 Years)

### Contact Form
- Backend POST /api/contact endpoint
- Stores in MongoDB
- Email via Resend to ejazhamza28@gmail.com
- Fields: name, email, whatsapp, company (optional), message

### Footer
- Clean layout, no flags, no country-specific wording
- Text: "Creative design and branding services" / "Helping businesses grow through design"
- Email: contact@ozlume.com.au
- WhatsApp: 0452 039 863
- Instagram only social icon

### Technical SEO
- Meta title: "OZlume | Graphic Design, Logo Design & Branding | Melbourne Web Design Agency"
- Keywords: graphic design, logo design, branding, web design, Melbourne
- Open Graph and Twitter Card meta tags
- Structured data: Organization, Local Business, Services, Reviews, FAQ, Breadcrumb
- sitemap.xml, robots.txt, manifest.json
- Canonical URL, geo meta tags

### Design
- Modern, elegant, minimal aesthetic
- White headings (not teal), clean typography
- No uppercase headings or buttons
- Glass-morphism effects
- Scroll-triggered animations
- Responsive mobile layout

## 3rd Party Integrations
- **Resend** — Email delivery for contact form (API key in backend .env)
- **Behold.so** — Instagram feed embed on Work page

## API Endpoints
- `GET /api/` — Health check
- `POST /api/contact` — Contact form submission
- `GET /api/status` — Status checks
- `POST /api/status` — Create status check

## Backlog / Future Tasks
- P2: Production deployment
- P2: Verify Behold.so Instagram feed loads actual images (may be account/config issue)
- P3: Additional testimonials
- P3: Blog section (if requested)

## Last Updated
April 5, 2026 — Major design refresh, content updates, SEO improvements
