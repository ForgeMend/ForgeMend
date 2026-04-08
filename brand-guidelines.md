# ForgeMend Brand Guidelines
# version: 1.0

---

## Brand Identity

**Name:** ForgeMend
**Tagline:** *Built for the Data Behind Your ERP*
**Founded:** Boston, MA

**Positioning:** ForgeMend is the specialist that manufacturing and food & beverage companies call when their Sage X3 data is wrong, messy, or not ready for go-live. We are technical, precise, and deeply experienced — not a generalist IT shop.

---

## Voice & Tone

| Attribute       | Description                                                                 |
|-----------------|-----------------------------------------------------------------------------|
| **Confident**   | We know Sage X3. We don't hedge on our expertise.                          |
| **Direct**      | No fluff. Clients are busy operations managers, not marketing audiences.   |
| **Trustworthy** | We cite specifics: row counts, audit logs, version numbers.                |
| **Boston-rooted** | Practical, no-nonsense New England sensibility.                          |
| **Not:** | Overly corporate, jargon-heavy, casual/playful, or salesy.               |

### Voice Examples

| Don't say                           | Do say                                             |
|-------------------------------------|----------------------------------------------------|
| "Leverage synergies in your ERP"    | "Fix your item master before you go live."        |
| "We provide holistic solutions"     | "We clean, convert, and import your Sage X3 data."|
| "Our team is passionate about..."   | "We've processed over 150 customer import files." |

---

## Color Palette

| Name           | Hex       | Usage                                              |
|----------------|-----------|----------------------------------------------------|
| **Navy**       | `#1B2D5B` | Primary brand color, headings, nav, dark sections  |
| **Navy Dark**  | `#0F1D3D` | Deep backgrounds, footer                          |
| **Navy Light** | `#2D4478` | Gradient partner, hover states                    |
| **Steel Blue** | `#2D6A9F` | Secondary, links, interactive elements            |
| **Forge Amber**| `#D97706` | Primary CTA, accent, icons — the "forge" fire     |
| **Amber Light**| `#F59E0B` | Hover states for amber                            |
| **Amber Pale** | `#FEF3C7` | Light backgrounds for amber highlights            |
| **White**      | `#FFFFFF` | Background, text on dark                         |
| **Off-White**  | `#F8FAFC` | Alternate page sections                           |
| **Gray 800**   | `#1E293B` | Body text                                         |
| **Gray 600**   | `#475569` | Secondary text, captions                         |

**Color meaning:**
- Navy = expertise, trust, depth — like Boston harbor
- Amber = the forge itself — heat, transformation, craftsmanship
- Steel Blue = technology, data, clarity

---

## Typography

| Role         | Font          | Weight(s)   | Notes                              |
|--------------|---------------|-------------|-------------------------------------|
| **Headings** | Montserrat    | 700, 800    | Google Fonts. All caps for eyebrows.|
| **Body**     | Inter         | 400, 500    | Google Fonts. Highly legible.       |
| **Mono**     | JetBrains Mono| 400         | Code blocks, data outputs.          |

**Scale:** Use CSS `clamp()` for fluid headings. Body text: 16px (1rem) minimum.

**Fallbacks:** `'Arial Black', sans-serif` for headings; `'Helvetica Neue', Arial, sans-serif` for body.

---

## Logo Concepts

Four concepts are provided in `website/assets/logo/concepts/`:

| File                        | Name              | Best Use                              |
|-----------------------------|-------------------|---------------------------------------|
| `concept_01_blockmark.svg`  | The Block Mark    | Icon, app badge, favicon              |
| `concept_02_flame_wordmark.svg` | Flame Wordmark | Primary web logo, email header      |
| `concept_03_hexbadge.svg`   | Hex Badge         | Stamps, certifications, social media |
| `concept_04_stacked.svg`    | Stacked Arc       | Print, banners, letterhead            |

**Recommended primary:** `concept_02_flame_wordmark.svg` — versatile, readable at all sizes.

**Logo files (production):**
- `forgemend_logo_dark.svg` — on white/light backgrounds (navy wordmark)
- `forgemend_logo_white.svg` — on dark/navy backgrounds (white wordmark)
- `forgemend_icon.svg` — icon only (hex badge, for favicon/app)

### Logo Clear Space
Minimum clear space = cap-height of "F" in the wordmark on all four sides.

### Logo Don'ts
- Do not change colors outside the palette
- Do not add drop shadows
- Do not stretch or distort
- Do not place on busy photographic backgrounds without a color overlay
- Minimum display width: 120px (wordmark), 24px (icon only)

---

## Iconography

Use line icons (24×24px, 1.5px stroke) from Heroicons or Lucide. Amber accent color for category icons, gray-600 for utility icons.

---

## Photography Style

Not required for v1 website. When used:
- Industrial manufacturing settings (clean, organized facilities)
- Real data / screens / dashboards (authentic, not stock)
- Boston exteriors (subtle, not tourist-y)
- No generic "handshake" or "diverse team on laptop" stock photos

---

## Update Log

| Date       | Version | Change                 |
|------------|---------|------------------------|
| 2026-04-07 | 1.0     | Initial brand guidelines |
