# OZlume Agency Website - Product Requirements Document

## Original Problem Statement
Build a modern, professional agency website for "OZlume" - a design and branding agency based in Melbourne, Australia. The website should showcase services, establish brand identity, and generate client inquiries through functional contact forms.

## Brand Details
- **Company Name:** OZlume
- **Tagline:** "Elevating Brands - The OZ Way"
- **Primary Color:** Teal `#00A3A8`
- **Contact Email:** contact@ozlume.com.au
- **WhatsApp:** 0452 039 863
- **Instagram:** @ozlumeau
- **Location:** Melbourne, Australia

## Architecture

### Frontend: React + TailwindCSS + Custom CSS
### Backend: FastAPI + MongoDB
### Email: Resend API

### File Structure
```
/app
├── backend/
│   ├── server.py
│   ├── requirements.txt
│   ├── .env
│   └── tests/test_ozlume_api.py
└── frontend/
    ├── public/
    │   ├── clients/, images/
    │   ├── index.html, manifest.json, robots.txt, sitemap.xml
    └── src/
        ├── components/
        │   ├── Header.jsx        # Fixed nav with dropdown, below TopBanner
        │   ├── TopBanner.jsx     # Fixed CTA banner at very top
        │   ├── Hero.jsx
        │   ├── Services.jsx
        │   ├── WhyChoose.jsx
        │   ├── Process.jsx
        │   ├── FutureDesign.jsx  # Animated tool icons section
        │   ├── CustomCursor.jsx  # Teal dot + ring cursor
        │   ├── PortfolioCTA.jsx
        │   ├── Clients.jsx
        │   ├── Testimonials.jsx
        │   ├── Contact.jsx
        │   └── Footer.jsx
        ├── pages/
        │   ├── HomePage.jsx
        │   ├── ServicesListPage.jsx  # /services
        │   ├── ServicePage.jsx       # /services/:serviceId
        │   ├── ContactPage.jsx       # /contact
        │   ├── FAQPage.jsx           # /faq
        │   ├── AboutPage.jsx         # /about
        │   └── WorkPage.jsx          # /work
        ├── App.js, App.css, index.js, index.css
```

## Pages & Routes
| Route | Page | Description |
|---|---|---|
| `/` | HomePage | Hero, Services, WhyChoose, Process, FutureDesign, Clients, Testimonials, Contact |
| `/services` | ServicesListPage | All 6 services with detailed cards |
| `/services/:id` | ServicePage | Individual service detail (no pricing) |
| `/contact` | ContactPage | Contact form + info (email, WhatsApp, location) |
| `/faq` | FAQPage | 16 FAQs in 5 categories, accordion-style |
| `/about` | AboutPage | Who We Are, What We Do, Our Approach |
| `/work` | WorkPage | Instagram feed via Behold.so |

## Completed Features (All Tested ✓)

### Structural
- Multi-page architecture with React Router
- Fixed TopBanner with CTA ("LET'S DESIGN SOLUTIONS TOGETHER!")
- Fixed Header below banner with full navigation + Services dropdown
- Custom cursor (teal dot + ring, hover effects, hidden on mobile)
- Professional background images on all page hero sections

### Homepage Sections
- Hero: "Creative Design That Helps Your Brand Stand Out"
- Services overview with "View All Services" button
- Why Choose Us with animated icon cards
- Our Process vertical timeline
- FutureDesign: "Leading the Future of Design..." with animated tool icons (Figma, React, Shopify, WordPress, etc.)
- Clients logo carousel
- Testimonials (3 reviews)
- Contact form

### Services
- ServicesListPage with 6 detailed cards (icon, description, what's included)
- Individual ServicePage for each service (no pricing, "Get Free Quote" CTA)

### Contact
- Dedicated ContactPage with form + contact info
- Form sends email via Resend to ejazhamza28@gmail.com
- Homepage also has contact section

### FAQ
- 5 categories: Services, Pricing, Process, Timelines, Revisions
- 16 accordion-style questions with smooth open/close

### Design
- Modern, minimal dark theme with teal accents
- White headings, clean typography (no uppercase)
- Glass-morphism, scroll animations
- Mobile responsive with hamburger menu

### SEO
- Meta title/description with keywords (graphic design, logo design, branding, web design, Melbourne)
- Open Graph, Twitter Card meta tags
- Structured data (Organization, LocalBusiness, Services, Reviews, FAQ, Breadcrumb)
- sitemap.xml, robots.txt, manifest.json

### Footer
- Clean layout, no flags
- "Creative design and branding services" / "Helping businesses grow through design"
- Email: contact@ozlume.com.au, WhatsApp, Instagram

## API Endpoints
- `GET /api/` — Health check
- `POST /api/contact` — Contact form {name, email, whatsapp, company, message}
- `GET /api/status` — Status checks
- `POST /api/status` — Create status check

## 3rd Party Integrations
- Resend (email delivery)
- Behold.so (Instagram feed widget)

## Backlog
- P2: Production deployment
- P2: Verify Behold.so Instagram feed in real browser
- P3: Blog section
- P3: Additional testimonials

## Last Updated
April 5, 2026 — Major restructuring: separate pages, TopBanner, FutureDesign, CustomCursor, FAQ page, Contact page, Services listing page
