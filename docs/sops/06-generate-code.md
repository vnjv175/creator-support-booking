# SOP 06: Generate Referrer Code

## Trigger
After a referrer application is approved and ready to be added to the system.

## Overview
Create a unique referrer code that will be used for tracking referrals, accessing the dashboard, and sharing referral links.

---

## Steps

### 1. Determine the Code Format
Referrer codes follow this pattern:
```
[NAME][NUMBER]
```

**Components:**
- **NAME**: First name in uppercase (or nickname if preferred)
- **NUMBER**: 3-digit number to ensure uniqueness

**Examples:**
- SARAH123
- JAMES456
- ALEX789
- MORGAN001

### 2. Check for Existing Codes
1. Open [Google Sheets - Referrers tab](https://docs.google.com/spreadsheets/d/1kCFAavAsfbb3p-cNTxudFh6eMd3uOHxkYJrAZqgCpRE)
2. Search (Ctrl+F / Cmd+F) for the person's first name
3. Ensure your proposed code doesn't already exist

### 3. Generate the Code

**Option A: Simple Sequential**
Use next available number:
- Last code used: CHRIS005
- New code: NEWNAME006

**Option B: Random Number**
Generate a random 3-digit number:
- Pick any number 001-999
- Verify it's not already used with that name

**Option C: Memorable Number**
Use numbers that mean something (if appropriate):
- Their birth month: SARAH312 (March, 12th)
- Lucky number they mention: JAMES777
- Year they joined: ALEX025 (2025)

### 4. Verify Uniqueness
Before finalizing, check:
- [ ] Exact code doesn't exist in Referrers tab
- [ ] Code is easy to type and remember
- [ ] No offensive combinations

### 5. Document the Code
When approved, add to Referrers sheet:
- Column A: The new code (e.g., SARAH123)
- Column B: Display name (e.g., Sarah M.)
- Column C: Today's date (YYYY-MM-DD)

### 6. Communicate to Referrer
Send welcome email with:
- Their unique code
- Link to their dashboard: `https://refer.arunatalent.com/my-referrals?code=SARAH123`
- Their shareable referral links:
  - Creator referral: `https://apply.arunatalent.com?ref=SARAH123`
  - Referrer recruitment: `https://refer.arunatalent.com?ref=SARAH123`

See [Email Templates - Welcome Email](../email-templates.md#referrer-welcome)

---

## Code Generation Quick Reference

| First Name | Number | Final Code |
|------------|--------|------------|
| Sarah | 123 | SARAH123 |
| James | 456 | JAMES456 |
| Alexandra | 001 | ALEX001 |
| Christopher | 007 | CHRIS007 |
| MaryJane | 242 | MARYJANE242 |

### Handling Long Names
For names longer than 8 characters, consider abbreviating:
- Christopher → CHRIS
- Alexandra → ALEX
- Elizabeth → LIZ or BETH
- Stephanie → STEPH

### Handling Duplicate First Names
If "Sarah" already exists:
- Use last initial: SARAHM01
- Use middle name: SARAHANN1
- Use nickname: SALLY001
- Use different number: SARAH999

---

## Time to Complete
1-2 minutes

## Common Mistakes to Avoid
- [ ] Don't use lowercase letters
- [ ] Don't use special characters (no @, #, -, etc.)
- [ ] Don't use spaces
- [ ] Don't reuse existing codes
- [ ] Don't use easily guessable codes (NAME000, NAME111)

## Testing the Code
After adding to the sheet, test by visiting:
```
https://refer.arunatalent.com/my-referrals?code=NEWCODE
```
Should show the referrer's empty dashboard (no models yet).
