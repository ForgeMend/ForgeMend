# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Business Context

**ForgeMend** is a Boston-based consulting firm specializing in Sage X3 ERP implementation, data engineering, UOM conversions, and customer/supplier import pipelines. All work in this repo supports client deliverables and internal operations.

---

## Project Structure

```
ForgeMend/
├── data/           # Data engineering: scripts, imports, exports, logs
├── website/        # Business website — static HTML/CSS/JS, no build step
├── legal/          # Legal templates and disclaimers
├── contracts/      # Client contracts (templates + signed copies)
├── crm/            # Lead tracking, campaigns, CRM workflows
├── accounting/     # Invoices, expenses, financial records
├── brand-guidelines.md  # Colors, typography, logo usage
├── netlify.toml    # Netlify deploy config (publish dir, headers, redirects)
└── vercel.json     # Vercel deploy config (alternative host)
```

**Rule:** All files stay within these subfolders unless explicitly directed otherwise.

---

## Website Development

### Local Development
```bash
cd website
python -m http.server 8000
# Open: http://localhost:8000
```
No build step, no dependencies, no bundler. Edit HTML/CSS/JS directly.

### Deploy
Push to `main` → Netlify auto-deploys within ~30 seconds. Publish directory is `website/`.

### Website Architecture
- **Single shared stylesheet:** `website/css/main.css`
- **Single shared script:** `website/js/main.js`
- **HTML pages live directly in `website/`** (not in `website/src/`)
- Current pages: `index.html`, `services.html`, `about.html`, `contact.html`, `thank-you.html`, `privacy.html`, `terms.html`
- `sitemap.xml` and `robots.txt` are in `website/` — update `sitemap.xml` whenever pages are added or significantly changed

### Contact Form
The form in `contact.html` uses Netlify Forms (`data-netlify="true"`). No backend code needed — Netlify handles submission and emails `info@forgemend.com`. The `thank-you` route is handled by a Netlify redirect back to `contact.html` with a 200 status.

### SEO & Metadata Checklist (for any new page)
Every HTML page must have: `<title>`, `<meta description>`, `<link rel="canonical">`, Open Graph tags, and an entry in `sitemap.xml`.

---

## Brand

Full details in `brand-guidelines.md`. Key values:

**Colors:**
| Token         | Hex       | Usage                          |
|---------------|-----------|--------------------------------|
| Navy          | `#1B2D5B` | Primary — headings, nav, dark sections |
| Navy Dark     | `#0F1D3D` | Footer, deep backgrounds       |
| Steel Blue    | `#2D6A9F` | Links, interactive elements    |
| Forge Amber   | `#D97706` | Primary CTA, accent, icons     |
| Amber Light   | `#F59E0B` | Hover on amber elements        |
| Gray 800      | `#1E293B` | Body text                      |
| Gray 600      | `#475569` | Secondary text                 |

**Fonts:** Montserrat (headings, 700/800) · Inter (body, 400/500) — both from Google Fonts. JetBrains Mono for code/data output.

**Tagline:** *Built for the Data Behind Your ERP*

---

## Domain Rules

### domain: sage-x3
```yaml
language: Python 3.11+
secondary: PowerShell, SQL (T-SQL / Sage X3 SQL dialect)
input_formats: [CSV, XLSX, TXT]
output_formats: [CSV per Sage X3 import spec, audit log TXT/CSV]
rules_file: .claude/rules/sage-x3.md
key_paths:
  scripts:  data/scripts/
  imports:  data/imports/
  exports:  data/exports/
  logs:     data/logs/
```

### domain: legal-tax
```yaml
jurisdiction: Massachusetts + Federal (US)
disclaimer: required_on_every_output
rules_file: .claude/rules/legal-tax.md
key_paths:
  templates:    legal/templates/
  disclaimers:  legal/disclaimers/
  contracts:    contracts/templates/
```

### domain: marketing
```yaml
channels: [LinkedIn, Facebook, Email, Website]
crm_tool: TBD (tracked in crm/)
rules_file: .claude/rules/marketing.md
key_paths:
  leads:      crm/leads/
  campaigns:  crm/campaigns/
```

### domain: digital-assets
```yaml
brand: ForgeMend
tone: professional, modern, trustworthy
rules_file: .claude/rules/digital-assets.md
key_paths:
  website:  website/        # HTML pages live here directly (not website/src/)
  assets:   website/assets/
  css:      website/css/
  js:       website/js/
```

### domain: accounting
```yaml
software: TBD
format: CSV / XLSX for exports
rules_file: .claude/rules/accounting.md
key_paths:
  invoices:  accounting/invoices/
  expenses:  accounting/expenses/
```

---

## Universal Workflow for Every Major Task

1. **Plan** — state what will be built and why
2. **Code / Files** — produce production-ready, commented, versioned output
3. **Test steps** — list how to validate the output
4. **Commit message** — provide a conventional-commit message

---

## Code Standards

- Python 3.11+ for all data scripts
- Include a `# version: X.Y` header comment and script-level docstring in every Python file
- Audit logs go to `data/logs/` with timestamp-prefixed filenames: `YYYYMMDD_HHMMSS_<task>.log`
- Every import/export script must handle and report: row counts in / out, validation errors, skipped rows
- Use `pathlib.Path` over `os.path` in Python

## Sage X3 Specifics

See `.claude/rules/sage-x3.md` for full field mappings, UOM standards, and import template specs.

## Legal / Tax

See `.claude/rules/legal-tax.md`. **Always include the standard disclaimer** when producing legal or tax content — never present it as licensed legal or CPA advice.
