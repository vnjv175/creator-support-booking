# Troubleshooting Guide

Common issues and how to fix them.

---

## Dashboard Issues

### Dashboard shows "No data found" or blank

**Possible Causes:**
1. Referrer code doesn't exist
2. Google Sheet isn't published
3. CSV URL is incorrect

**Solutions:**
1. Verify the code exists in Referrers tab (check exact spelling, case-sensitive)
2. Check File → Share → Publish to web (should show "Published")
3. Test CSV URL directly in browser - should download/display CSV data

---

### Dashboard shows wrong data

**Possible Causes:**
1. referrerCode mismatch in Models tab
2. Data formatting issue

**Solutions:**
1. Check that model's referrerCode exactly matches the referrer's code (case-sensitive)
2. Verify monthlyRevenue format: `Mon YYYY:amount,Mon YYYY:amount`
3. Check for extra spaces or typos in the data

---

### Dashboard not updating after sheet changes

**Cause:** Google caches published sheets for ~5 minutes

**Solutions:**
1. Wait 5 minutes and refresh
2. Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
3. Try incognito/private browser window

---

## Google Sheets Issues

### Can't find the Google Sheet

**Link:** https://docs.google.com/spreadsheets/d/1kCFAavAsfbb3p-cNTxudFh6eMd3uOHxkYJrAZqgCpRE

**If link doesn't work:**
1. Check you're logged into the correct Google account
2. Request access from the owner
3. Search Google Drive for "Aruna Talent - Referral Data"

---

### Sheet tabs are missing

**Solution:**
1. Check if tabs are hidden (right-click on any tab → "Show all sheets")
2. If truly missing, check version history to restore
3. Create missing tabs following the structure in [Operations Manual](OPERATIONS_MANUAL.md)

---

### Data formatting looks wrong

**Common formatting issues:**

| Issue | Wrong | Correct |
|-------|-------|---------|
| Date format | 04/01/2025 | 2025-04-01 |
| Revenue format | Jan 2026: 50000 | Jan 2026:50000 |
| Multiple months | Jan 2026:50000 Feb 2026:60000 | Jan 2026:50000,Feb 2026:60000 |
| Status | Active | active |

**Fix:** Edit the cell to match the correct format exactly.

---

## Email/Notification Issues

### Not receiving email notifications

**Check these:**
1. Verify intake@arunatalent.com inbox (and spam folder)
2. Check Google Apps Script is deployed:
   - Open Google Sheet → Extensions → Apps Script
   - Click "Deployments" → Verify active deployment exists
3. Check script triggers are set up:
   - In Apps Script, click Triggers (clock icon)
   - Verify triggers exist for form submissions

---

### Automation emails not sending

**Debug steps:**
1. Open Apps Script (Extensions → Apps Script)
2. Click "Executions" in left sidebar
3. Look for failed executions and error messages
4. Common fixes:
   - Re-authorize the script (Run any function manually)
   - Check email quota hasn't been exceeded
   - Verify NOTIFY_EMAIL constant is correct

---

### Welcome email didn't send to new referrer

**Manual workaround:**
1. Copy the welcome email template from [Email Templates](email-templates.md#referrer-welcome)
2. Fill in their details and send manually
3. Check Apps Script triggers to prevent future issues

---

## Form Submission Issues

### Form submissions not appearing in sheet

**Check these:**
1. Verify Google Apps Script web app is deployed
2. Test the deployment URL directly
3. Check script execution logs for errors
4. Verify form is pointing to correct Apps Script URL

---

### Duplicate submissions appearing

**Cause:** User submitted form multiple times

**Solution:**
1. Delete duplicate rows (keep the first one)
2. Consider adding duplicate detection to the script

---

## Code/Technical Issues

### Referrer code not working

**Checks:**
1. Code exists in Referrers tab (Column A)
2. Code is entered exactly right (case-sensitive: SARAH123 ≠ sarah123)
3. No extra spaces before/after the code

---

### Monthly revenue calculation seems wrong

**Verify:**
1. All months are recorded in correct format
2. No duplicate month entries
3. Amounts don't have currency symbols ($)
4. Amounts use periods for decimals (50000.50 not 50000,50)

**Recalculate manually:**
Add up all amounts in monthlyRevenue column for that model.

---

## Quick Fixes Reference

| Problem | Quick Fix |
|---------|-----------|
| Dashboard blank | Check code exists, sheet published |
| Data not updating | Wait 5 min, hard refresh |
| Email not received | Check spam, verify script deployed |
| Wrong revenue shown | Check monthlyRevenue format |
| Can't access sheet | Request access, check account |
| Form not working | Check Apps Script deployment |

---

## When to Escalate

**Escalate to Developer if:**
- Apps Script errors you can't resolve
- Website/dashboard code issues
- Deployment or hosting problems

**Escalate to CEO if:**
- Referrer disputes about commissions
- Data discrepancies affecting payments
- Policy questions

---

## Getting Help

1. **Check this guide first** - most issues are covered above
2. **Check the SOPs** - step-by-step procedures often prevent issues
3. **Search Google** - for Google Sheets/Apps Script specific errors
4. **Ask the team** - someone may have seen the issue before
5. **Escalate** - if you've tried the above and still stuck

---

## Logging Issues

When reporting a problem, include:
1. What you were trying to do
2. What happened instead
3. Any error messages (screenshot if possible)
4. When it started happening
5. What you've already tried
