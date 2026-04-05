# OZlume Agency Website - Product Requirements Document

## Original Problem Statement
Build a modern, professional agency website for "OZlume" - a design and branding agency based in Melbourne, Australia. The website should showcase services, establish brand identity, and generate client inquiries through functional contact forms.

## Brand Details
- **Company Name:** OZlume
- **Primary Color:** Teal `#00A3A8`
- **Contact Email:** contact@ozlume.com.au
- **WhatsApp:** +61 452 039 863
- **Instagram:** @ozlumeau
- **Location:** Melbourne, Australia

## Pages & Routes
| Route | Page | Description |
|---|---|---|
| `/` | HomePage | Hero, Services, WhyChoose, Process, FutureDesign, Clients, Testimonials, Contact |
| `/services` | ServicesListPage | 6 services with detailed cards |
| `/services/:id` | ServicePage | Individual service detail (no pricing) |
| `/contact` | ContactPage | Contact form + info |
| `/faq` | FAQPage | 16 FAQs in 5 categories, accordion |
| `/about` | AboutPage | Who We Are, What We Do, Our Approach |
| `/work` | WorkPage | 5 project images grid + Instagram CTA |
| `/client-login` | ClientLoginPage | Demo login form (non-functional) |

## Completed Features (All Tested)
- Multi-page architecture with React Router
- Fixed TopBanner with CTA + professional background image
- Fixed Header with Services dropdown + Client Login nav
- Custom cursor (teal dot + ring, hover effects, hidden on mobile)
- Hero: "Creative Design That Helps Your Brand Stand Out"
- FutureDesign: animated tool icons row (Figma, React, Shopify, etc.)
- Services overview + dedicated /services page
- Why Choose Us, Our Process, Clients, Testimonials on homepage
- Work page with 5 project image cards (Flora's Botanicals, Gnomish Press, Basic Bricks, Logo Collections)
- "See More Projects on Instagram" CTA button
- WhatsApp floating button (bottom-right, all pages, links to +61452039863)
- Contact page with form + info (Resend email integration)
- FAQ page (5 categories, 16 questions, accordion)
- About page (Who We Are, What We Do, Our Approach)
- Client Login demo page (email/password form, toast message)
- Clean footer (no flags, neutral text, Client Login link)
- Mobile responsive with hamburger menu
- SEO meta tags, sitemap.xml, robots.txt, structured data
- No pricing on service pages

## API Endpoints
- `GET /api/` — Health check
- `POST /api/contact` — Contact form submission
- `GET /api/status` — Status checks
- `POST /api/status` — Create status check

## 3rd Party Integrations
- Resend (email delivery for contact form)

## Backlog
- P2: Production deployment
- P3: Make Client Login functional (actual auth)
- P3: Blog section
- P3: Additional testimonials

## Last Updated
April 5, 2026 — Added WhatsApp button, Work page with project images, Client Login demo
