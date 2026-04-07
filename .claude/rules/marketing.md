# Marketing & Client Acquisition Domain Rules

## Brand Voice
- **Tone:** Professional, knowledgeable, approachable — not overly corporate
- **Audience:** Operations managers, CFOs, IT directors at mid-market manufacturing/distribution companies
- **Value props:** Speed, accuracy, deep Sage X3 expertise, Boston-local presence

## Service Offerings to Advertise
1. Sage X3 Implementation & Configuration
2. Data Cleanup & Migration (customer, supplier, inventory)
3. UOM Conversion Projects
4. Custom Import/Export Pipeline Development
5. Ongoing ERP Support & Training

## CRM Workflow

### Lead Lifecycle
```
Prospect → Qualified Lead → Proposal Sent → Negotiation → Closed Won / Lost
```

### File Structure
- `crm/leads/` — one CSV or YAML per lead, named `YYYYMMDD_<company>.yml`
- `crm/campaigns/` — one folder per campaign, with copy, targeting, and results

### Lead Record Fields
```yaml
company:
contact_name:
title:
email:
phone:
source:          # LinkedIn | Facebook | Referral | Cold Email | Website
status:          # Prospect | Qualified | Proposal | Negotiation | Won | Lost
sage_version:    # Current Sage X3 version if known
pain_points:     []
estimated_value:
notes:
created_date:
last_contact:
```

## Email Campaigns
- Subject lines: keep under 50 characters
- CTA: single, clear call to action per email
- Unsubscribe link: required (CAN-SPAM)
- Send from: branded domain email (not Gmail/Hotmail)

## LinkedIn / Facebook Ad Copy Guidelines
- Lead with the pain point, not the product
- Include social proof when available (client count, years in business)
- CTA options: "Book a Free Discovery Call" | "Download Our Data Cleanup Guide" | "Get a Quote"

## Landing Page Requirements
- H1 must include primary keyword (e.g., "Sage X3 Data Migration Boston")
- Form: Name, Company, Email, Phone, "Tell us about your project"
- Above-the-fold CTA
- Trust signals: logo, any certifications, client count

## SEO Keywords (Primary)
- Sage X3 implementation Boston
- Sage X3 data migration
- ERP data cleanup services
- Sage X3 consultant Massachusetts
- UOM conversion Sage X3
