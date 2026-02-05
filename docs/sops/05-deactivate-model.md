# SOP 05: Deactivate Model

## Trigger
Model leaves the agency, stops working, or needs to be removed for any reason.

## Overview
When a model is no longer active, update their status in the sheet so they stop appearing in active counts while preserving historical revenue data for the referrer.

---

## Steps

### 1. Confirm Deactivation
Before deactivating, confirm:
- [ ] Model has officially ended their relationship with the agency
- [ ] All outstanding payments are settled
- [ ] Any required offboarding is complete

### 2. Open the Models Sheet
Go to [Google Sheets - Models tab](https://docs.google.com/spreadsheets/d/1kCFAavAsfbb3p-cNTxudFh6eMd3uOHxkYJrAZqgCpRE)

### 3. Find the Model's Row
Locate the model by name in Column B (modelName)

### 4. Update Status Fields

1. **Column E (status):** Change from `active` to `inactive`
2. **Column F (lastActive):** Enter the last month they were active in YYYY-MM-DD format
   - Example: If they were last active in December 2025, enter: `2025-12-01`

### 5. Final Revenue Update
Ensure Column G (monthlyRevenue) includes their final month's revenue:
- If their last month isn't recorded, add it now
- This preserves the referrer's commission history

### 6. Verify Changes
After updating:
- [ ] Status shows "inactive"
- [ ] lastActive date is filled in
- [ ] Monthly revenue history is complete
- [ ] Check the referrer's dashboard to confirm model appears in "inactive" section

---

## Example

**Before:**
| referrerCode | modelName | emoji | startDate | status | lastActive | monthlyRevenue |
|--------------|-----------|-------|-----------|--------|------------|----------------|
| SARAH123 | Isabella N. | 🌙 | 2025-04-22 | active | | Apr 2025:17623,May 2025:34891,Jun 2025:47234 |

**After:**
| referrerCode | modelName | emoji | startDate | status | lastActive | monthlyRevenue |
|--------------|-----------|-------|-----------|--------|------------|----------------|
| SARAH123 | Isabella N. | 🌙 | 2025-04-22 | inactive | 2025-12-01 | Apr 2025:17623,May 2025:34891,Jun 2025:47234,Jul 2025:51679,Aug 2025:44524,Sep 2025:38912,Oct 2025:27457,Nov 2025:14789 |

---

## Important Notes

### DO NOT Delete the Row
- Inactive models must remain in the sheet
- Their historical revenue contributes to the referrer's lifetime earnings
- Deleting would remove commission history

### Referrer Impact
- The referrer will still see this model in their dashboard under "Inactive Models"
- Their lifetime earnings from this model are preserved
- The model just won't count toward "Active Models"

### Reactivation
If a model returns and becomes active again:
1. Change status back to `active`
2. Clear the lastActive field
3. Continue adding monthly revenue as normal

---

## Time to Complete
2-3 minutes per model

## When to Deactivate

**Do Deactivate:**
- Model voluntarily leaves
- Model is removed for cause
- Model hasn't had activity for 3+ months (confirm first)

**Don't Deactivate:**
- Model is on temporary break (just skip revenue updates)
- Model is switching accounts (update modelName instead)
- You're unsure - check with CEO first

## Escalation
Notify CEO if:
- High-earning model is leaving (>$50k lifetime)
- Model is being removed for policy violation
- Referrer disputes the deactivation
