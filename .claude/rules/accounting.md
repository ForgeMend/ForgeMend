# Accounting & Operations Domain Rules

## File Structure
```
accounting/
  invoices/    # YYYYMMDD_<ClientCode>_INV<####>.pdf + source CSV/XLSX
  expenses/    # YYYYMMDD_<category>_<description>.csv
```

## Invoice Standards

### Naming
`YYYYMMDD_<ClientCode>_INV<####>` — sequential numbering, never reuse

### Required Fields
- ForgeMend name, address, phone, email
- Client name and billing address
- Invoice number and date
- Due date (Net 30 default)
- Line items: description, quantity, rate, amount
- Subtotal, tax (if applicable), total
- Payment instructions (check payable to / ACH / Zelle)
- Late payment notice: 1.5%/month after due date

### MA Sales Tax on Services
- Consulting / professional services: generally exempt in MA
- Software customization or product sales: may be taxable — flag for CPA review

## Expense Tracking

### Categories
- Software & Subscriptions
- Professional Development
- Marketing & Advertising
- Office Supplies
- Travel (mileage at IRS rate, meals at 50% deductible)
- Professional Services (subcontractors, legal, accounting)
- Equipment

### Mileage Log (required for IRS)
Columns: `date, origin, destination, purpose, miles, rate, amount`
IRS standard mileage rate: check current year rate at irs.gov

## Reporting
- Monthly P&L summary: `accounting/YYYY_MM_PL.xlsx`
- Quarterly estimated tax worksheet: `accounting/YYYY_QN_estimated_tax.xlsx`
- Year-end summary for CPA: export all invoices + expenses by Jan 31
