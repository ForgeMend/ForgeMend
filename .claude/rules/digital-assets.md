# Digital Assets Domain Rules

## Brand Identity

### Name & Tagline
- **Business name:** ForgeMend
- **Tagline (working):** "Building Better ERP Data" (confirm with owner)

### Color Palette (TBD — update when finalized)
```
Primary:    TBD
Secondary:  TBD
Accent:     TBD
Background: TBD
Text:       TBD
```

### Typography (TBD)
- Heading font: TBD
- Body font: TBD

### Logo Usage
- Store master files in `website/assets/logo/`
- Provide: SVG (primary), PNG transparent, PNG white variant, PNG dark variant
- Minimum size: 120px wide
- Clear space: equal to cap-height on all sides

---

## Website Standards

### Tech Stack (default recommendation)
- Static site: HTML/CSS/JS or Astro / Next.js
- Hosting: Vercel or Netlify (free tier adequate for marketing site)
- CMS: none required for v1 — markdown files or direct HTML

### Required Pages (v1)
1. **Home** — hero, value props, services overview, CTA
2. **Services** — one section per service offering
3. **About** — founder bio, company story, Boston focus
4. **Contact** — form + phone + email + LinkedIn
5. **Privacy Policy** — required for any forms / analytics

### SEO Requirements
- `<title>` and `<meta description>` on every page
- Open Graph tags for social sharing
- `robots.txt` and `sitemap.xml`
- Google Analytics or equivalent (with cookie consent if needed)
- Page load < 3s on mobile (Lighthouse score > 85)

### Accessibility
- WCAG 2.1 AA minimum
- All images have `alt` text
- Keyboard-navigable navigation

---

## File Naming Conventions
```
website/assets/
  logo/
    forgemend_logo.svg
    forgemend_logo_white.png
    forgemend_logo_dark.png
  images/
    YYYYMMDD_<description>.<ext>
  documents/
    forgemend_<doc_name>_v<N>.pdf
```
