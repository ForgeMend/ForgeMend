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
├── website/        # Business website source and assets
├── legal/          # Legal templates and disclaimers
├── contracts/      # Client contracts (templates + signed copies)
├── crm/            # Lead tracking, campaigns, CRM workflows
└── accounting/     # Invoices, expenses, financial records
```

**Rule:** All files stay within these subfolders unless explicitly directed otherwise.

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
  website:  website/src/
  assets:   website/assets/
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
