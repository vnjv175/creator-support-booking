# Operational Checklists

## Daily Checklist

Run through this each business day:

### Morning (9 AM)
- [ ] Check intake@arunatalent.com for new notifications
- [ ] Review any new referrer applications ([SOP 01](sops/01-new-referrer.md))
- [ ] Review any new creator applications ([SOP 02](sops/02-creator-application.md))
- [ ] Review any new direct referrals ([SOP 03](sops/03-direct-referral.md))
- [ ] Follow up on pending items from previous days

### End of Day (5 PM)
- [ ] Ensure all new applications have been reviewed or marked pending
- [ ] Send any follow-up emails needed
- [ ] Update status columns in Google Sheets for processed items
- [ ] Note any items needing CEO attention

---

## Weekly Checklist

Complete every Monday:

### Application Review
- [ ] Review all applications from the past week
- [ ] Ensure no applications are older than 5 business days without action
- [ ] Follow up on "Pending" applications that need more info

### Direct Referral Follow-ups
- [ ] Contact any direct referrals not yet reached
- [ ] Send follow-ups to referrals with no response (3+ days old)
- [ ] Update status for all direct referrals

### Data Hygiene
- [ ] Check Google Sheet for any formatting issues
- [ ] Verify all new referrers have complete information
- [ ] Verify all new models have correct referrer codes

### Reporting
- [ ] Note weekly totals:
  - New referrer applications: ___
  - New creator applications: ___
  - New direct referrals: ___
  - Referrers approved: ___
  - Models started: ___

---

## Monthly Checklist

Complete on the 1st-5th of each month:

### Revenue Update (CRITICAL)
- [ ] Pull revenue report from payment platform
- [ ] Update ALL active models in Google Sheet ([SOP 04](sops/04-monthly-revenue.md))
- [ ] Verify monthly revenue format is correct
- [ ] Spot-check 3 referrer dashboards to confirm data displays

### Model Status Review
- [ ] Identify any models with $0 revenue for 2+ months
- [ ] Confirm if inactive models should be deactivated ([SOP 05](sops/05-deactivate-model.md))
- [ ] Update any status changes

### Referrer Review
- [ ] Check for inactive referrers (no referrals in 3+ months)
- [ ] Send re-engagement email to inactive referrers (optional)
- [ ] Review top performers for any recognition

### Month-End Reporting
- [ ] Total new referrers this month: ___
- [ ] Total new models this month: ___
- [ ] Total revenue across all models: ___
- [ ] Total commissions owed to referrers: ___

---

## New Referrer Onboarding Checklist

When approving a new referrer:

- [ ] Generate unique referrer code ([SOP 06](sops/06-generate-code.md))
- [ ] Add to Referrers sheet (code, name, joinDate)
- [ ] Send welcome/approval email with:
  - [ ] Their referrer code
  - [ ] Dashboard link
  - [ ] Creator referral link
  - [ ] Referrer recruitment link
- [ ] Mark application as "Approved" in Applications tab
- [ ] Test their dashboard link works

---

## New Model Onboarding Checklist

When adding a new model who has completed onboarding:

- [ ] Verify referrer code (if referred)
- [ ] Add to Models sheet:
  - [ ] referrerCode (or blank if no referrer)
  - [ ] modelName
  - [ ] emoji (unique)
  - [ ] startDate (YYYY-MM-DD)
  - [ ] status = "active"
  - [ ] lastActive = blank
  - [ ] monthlyRevenue = blank (until first revenue)
- [ ] If referred, verify referrer is notified (auto or manual)
- [ ] Update Creator Applications status to "Started"

---

## Model Deactivation Checklist

When a model leaves:

- [ ] Confirm model has officially left
- [ ] Ensure final month's revenue is recorded
- [ ] Update Models sheet:
  - [ ] status → "inactive"
  - [ ] lastActive → their final active month (YYYY-MM-DD)
- [ ] DO NOT delete the row
- [ ] Notify CEO if high-earner (>$50k lifetime)

---

## Quarterly Review Checklist

Complete every 3 months:

### Program Health
- [ ] Total active referrers: ___
- [ ] Total active models: ___
- [ ] Average models per referrer: ___
- [ ] Total commission obligations: ___

### Top Performers
- [ ] Top 5 referrers by model count
- [ ] Top 5 referrers by total revenue
- [ ] Any referrers to recognize/reward?

### Process Improvements
- [ ] Any SOPs that need updating?
- [ ] Any new automations needed?
- [ ] Any common issues to address?

### Documentation
- [ ] Review and update all SOPs if needed
- [ ] Update email templates if messaging changed
- [ ] Archive outdated documentation

---

## Emergency Checklist

If something goes wrong:

### Data Issues
- [ ] Don't panic - changes can usually be undone
- [ ] Check Google Sheets version history (File → Version history)
- [ ] Restore from previous version if needed
- [ ] Document what happened

### Email System Issues
- [ ] Check Google Apps Script for errors (Extensions → Apps Script → Executions)
- [ ] Verify triggers are still active
- [ ] Test with a manual function run

### Dashboard Not Loading
- [ ] Verify Google Sheet is still published (File → Share → Publish to web)
- [ ] Check CSV URLs are still valid
- [ ] Clear browser cache and retry
- [ ] Check for JavaScript errors in browser console

### Escalation
- [ ] Technical issues → Developer
- [ ] Referrer disputes → CEO
- [ ] Payment questions → Finance
