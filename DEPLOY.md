# ForgeMend Website — Deployment Guide
# version: 1.0

The website is a static HTML/CSS/JS site with no build step required.
All production files live in the `website/` directory.

---

## Option A: Deploy to Netlify (Recommended)

### First Deploy
1. Push this repo to GitHub (or GitLab / Bitbucket)
2. Log in to [netlify.com](https://netlify.com) → **Add new site → Import from Git**
3. Select your repo
4. Set these build settings:
   - **Base directory:** *(leave blank)*
   - **Build command:** *(leave blank — no build step)*
   - **Publish directory:** `website`
5. Click **Deploy site**
6. Once deployed, go to **Site settings → Domain management**
7. Add custom domain: `forgemend.com`
8. Follow Netlify's DNS instructions to point your domain (update name servers or add CNAME/A records at your domain registrar)
9. Netlify auto-provisions an SSL certificate via Let's Encrypt

### Contact Form Setup (Netlify Forms — Free)
The contact form uses `data-netlify="true"` — Netlify detects it automatically.
- Form submissions appear under **Site → Forms** in your Netlify dashboard
- Set up email notifications: **Forms → contact → Settings → Email notifications**
- Add `info@forgemend.com` as the notification recipient

### Environment & DNS Settings
| Setting              | Value                     |
|----------------------|---------------------------|
| Publish directory    | `website`                 |
| Custom domain        | `forgemend.com`           |
| Force HTTPS          | Enabled (Netlify default) |
| www redirect         | Configured in netlify.toml|

---

## Option B: Deploy to Vercel

1. Push repo to GitHub
2. Log in to [vercel.com](https://vercel.com) → **Add New Project → Import Git Repository**
3. Set **Output Directory** to `website`
4. Leave **Build Command** blank
5. Click **Deploy**
6. Add custom domain under **Project Settings → Domains** → add `forgemend.com`
7. Follow Vercel's DNS setup instructions

### Contact Form on Vercel
Vercel does not include form handling. Use **Formspree** (free tier):
1. Create account at [formspree.io](https://formspree.io)
2. Create a new form, get your endpoint URL (e.g. `https://formspree.io/f/xyzabc12`)
3. In `website/contact.html`, update the form's `action` attribute:
   ```html
   <form
     id="contact-form"
     action="https://formspree.io/f/YOUR_FORM_ID"
     method="POST"
   >
   ```
4. Remove the `data-netlify="true"` and `netlify-honeypot` attributes
5. Formspree handles submission and emails you at `info@forgemend.com`

---

## Local Development

Open `website/index.html` directly in a browser — no server needed for basic review.

For live-reload development, use Python's built-in server:
```bash
cd website
python -m http.server 8000
# Open: http://localhost:8000
```

Or use VS Code's **Live Server** extension.

---

## Post-Deploy Checklist

- [ ] Site loads at `https://forgemend.com`
- [ ] www redirects to non-www (or vice versa)
- [ ] SSL certificate active (HTTPS padlock in browser)
- [ ] Contact form submits and you receive email at `info@forgemend.com`
- [ ] All 4 pages load: `/`, `/services.html`, `/about.html`, `/contact.html`
- [ ] Favicon appears in browser tab
- [ ] Mobile layout looks correct (test at 375px and 768px)
- [ ] Run Lighthouse audit (target: Performance >85, SEO >95, Accessibility >90)
- [ ] Submit sitemap to Google Search Console: `https://forgemend.com/sitemap.xml`

---

## Updating the Site

1. Edit files in `website/`
2. Commit and push to main branch
3. Netlify/Vercel auto-deploys within ~30 seconds

No build step. No dependencies. No CI pipeline needed.

---

## Google Analytics Setup (Optional)

Add to `<head>` of all HTML pages, replacing `G-XXXXXXXXXX` with your Measurement ID:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Add above the closing `</head>` tag in each page.

---

## Search Console Verification

After launching:
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://forgemend.com`
3. Verify via HTML file (upload to `website/`) or DNS TXT record
4. Submit sitemap: `https://forgemend.com/sitemap.xml`
