# SOP 04: Monthly Revenue Update

## Trigger
1st of each month (automated reminder email sent to intake@arunatalent.com)

## Overview
Update each active model's revenue in the Google Sheet so referrer dashboards show accurate commission data.

---

## Steps

### 1. Gather Revenue Data
Pull revenue data from your payment platform for the previous month:
- Export monthly earnings report
- Note each model's total revenue for the month
- Revenue should be in dollars (e.g., 145823.45)

### 2. Open the Models Sheet
Go to [Google Sheets - Models tab](https://docs.google.com/spreadsheets/d/1kCFAavAsfbb3p-cNTxudFh6eMd3uOHxkYJrAZqgCpRE)

### 3. Update Each Active Model
For each model with status = "active":

1. Find their row in the Models sheet
2. Go to Column G (monthlyRevenue)
3. Append the new month's data:

**Format:** `Mon YYYY:amount`

**Examples:**
- If current value is: `Nov 2025:71489.32,Dec 2025:88752.18`
- Add January 2026 revenue of $96,341.67
- New value: `Nov 2025:71489.32,Dec 2025:88752.18,Jan 2026:96341.67`

### 4. Revenue Format Rules
- Month abbreviations: Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec
- Year: Full 4 digits (2026)
- Amount: Include decimals (96341.67)
- Separator: Comma between months, colon between month:amount
- No spaces around colons or commas

### 5. Verify Data Entry
After updating all models:
- [ ] Check that all active models have the new month's data
- [ ] Verify amounts match your revenue report
- [ ] Spot-check a few referrer dashboards to confirm data displays correctly

### 6. Handle Edge Cases

**Model started mid-month:**
- Enter partial month revenue as normal
- Example: Model started Jan 15, earned $50,000 in half month: `Jan 2026:50000`

**Model had zero revenue:**
- Enter $0: `Jan 2026:0`
- This is better than skipping the month for tracking purposes

**Model went inactive during month:**
- Enter their final revenue
- Follow [SOP 05: Deactivate Model](05-deactivate-model.md)

**New model (no previous data):**
- Start fresh: `Jan 2026:50000`

---

## Checklist

| Model | Previous Value | New Month Revenue | Updated |
|-------|----------------|-------------------|---------|
| Emma T. | Nov:71489,Dec:88752 | Jan: $96,341 | [ ] |
| Mia R. | ... | ... | [ ] |
| ... | ... | ... | [ ] |

---

## Time to Complete
- 5 minutes for <10 models
- 15-20 minutes for 10-30 models
- Consider automation for larger scale

## Deadline
Complete by the 5th of each month to ensure referrer dashboards are accurate.

## Automation Option
The Google Apps Script can be configured to:
1. Pull data from payment APIs automatically
2. Update the sheet programmatically
3. Send confirmation email when complete

---

## Escalation
Contact CEO if:
- Revenue data is significantly different from previous months
- Unable to access payment platform data
- Discrepancies between systems
