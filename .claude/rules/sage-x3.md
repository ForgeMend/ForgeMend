# Sage X3 Domain Rules

## Import Pipeline Standards

### General Flow
```
Raw source file (CSV/XLSX)
  → Validation (schema check, required fields, type coercion)
  → Deduplication (configurable key fields)
  → Transformation (field mapping to Sage X3 spec)
  → Output CSV (Sage X3 import format)
  → Audit log
```

### Required Script Structure (Python)
```python
# version: 1.0
"""
Script: <name>
Purpose: <what it does>
Input:   data/imports/<file>
Output:  data/exports/<file>, data/logs/<timestamp>_<name>.log
"""
```

### Standard Field Mappings

#### Customer Import (BPCUSTOMER)
| Source Field        | Sage X3 Field | Notes                        |
|---------------------|---------------|------------------------------|
| CustomerCode        | BPCNUM        | Max 15 chars, alphanumeric   |
| CustomerName        | BPCNAM        | Max 35 chars                 |
| Address1            | BPAADDLIG1    |                              |
| Address2            | BPAADDLIG2    |                              |
| City                | BPACITY       |                              |
| State               | BPACRY        | 2-char state code            |
| ZipCode             | BPAZIPCD      |                              |
| Country             | BPACRY1       | Default: US                  |
| Phone               | TEL           |                              |
| Email               | WEB           |                              |
| Currency            | CUR           | Default: USD                 |
| PaymentTerms        | PTE           |                              |
| TaxID               | TAXID         |                              |

#### Supplier Import (BPSUPPLIER)
| Source Field        | Sage X3 Field | Notes                        |
|---------------------|---------------|------------------------------|
| SupplierCode        | BPSNUM        | Max 15 chars                 |
| SupplierName        | BPSNAM        | Max 35 chars                 |
| Address1            | BPAADDLIG1    |                              |
| City                | BPACITY       |                              |
| State               | BPACRY        |                              |
| ZipCode             | BPAZIPCD      |                              |
| Country             | BPACRY1       | Default: US                  |
| Currency            | CUR           | Default: USD                 |
| PaymentTerms        | PTE           |                              |

### UOM Conversion Standards

Common UOM codes used in Sage X3:
| Description     | Sage X3 Code |
|-----------------|--------------|
| Each            | EA           |
| Case            | CS           |
| Box             | BX           |
| Pound           | LB           |
| Kilogram        | KG           |
| Liter           | LT           |
| Gallon          | GL           |
| Foot            | FT           |
| Meter           | M            |
| Dozen           | DZ           |
| Pallet          | PL           |

UOM conversion scripts must:
1. Accept a conversion factor per product/category
2. Validate that source UOM exists in Sage X3 reference table
3. Round to 6 decimal places maximum
4. Log every conversion with before/after values

### Validation Rules
- Required fields must not be blank
- String fields must not exceed max length (truncate + warn, never silently truncate)
- Codes must match pattern: `^[A-Z0-9_-]{1,15}$`
- Dates: ISO 8601 (`YYYY-MM-DD`) in scripts; Sage X3 import format is `MM/DD/YYYY`
- Deduplication key: `CustomerCode` / `SupplierCode` — flag duplicates, do not silently drop

### Audit Log Format
```
[TIMESTAMP] INFO  | Script: <name> v<version>
[TIMESTAMP] INFO  | Input file: <path> | Rows read: N
[TIMESTAMP] WARN  | Row 42: CustomerCode exceeds 15 chars — truncated
[TIMESTAMP] ERROR | Row 87: Missing required field: CustomerName — row skipped
[TIMESTAMP] INFO  | Output file: <path> | Rows written: N | Skipped: N | Errors: N
```

### Error Handling
- Never crash silently — always write errors to the audit log
- A script with any ERROR-level rows should exit with code 1
- Include a summary report at the end of every log

### Import Template Headers
Sage X3 CSV imports expect a specific column order. Always generate a mapping config file alongside the output CSV documenting column positions.
