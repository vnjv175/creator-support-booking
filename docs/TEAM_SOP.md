# Aruna Talent Referral Program - Team SOP

**Last Updated:** February 2026
**Owner:** Mitchell McConachy, CEO
**Contact:** admin@arunatalent.com

---

## Table of Contents

1. [Program Overview](#program-overview)
2. [System Map](#system-map)
3. [Your Daily Workflow](#your-daily-workflow)
4. [Core Processes](#core-processes)
   - [Processing Referrer Applications](#1-processing-referrer-applications)
   - [Processing Creator Applications](#2-processing-creator-applications)
   - [Processing Direct Referrals](#3-processing-direct-referrals)
   - [Monthly Revenue Updates](#4-monthly-revenue-updates)
   - [Model Deactivation](#5-model-deactivation)
5. [Commission Structure](#commission-structure)
6. [Tools & Access](#tools--access)
7. [Google Sheets Reference](#google-sheets-reference)
8. [Automated Emails](#automated-emails)
9. [Email Templates (Manual)](#email-templates-manual)
10. [Troubleshooting](#troubleshooting)
11. [Escalation](#escalation)

---

## Program Overview

Aruna Talent runs a referral program where **referrers** (affiliates) bring in new **creators** (models) to the agency. Referrers earn commission on their creators' revenue.

**The flow:**
```
Referrer signs up → Gets a unique code → Shares link → Creator applies →
Creator starts earning → Referrer earns commission → Everyone wins
```

**Your role:** Process applications, keep data up to date, and ensure referrers and creators are supported.

---

## System Map

| Component | URL / Location | Purpose |
|-----------|---------------|---------|
| **Referrer Landing Page** | https://refer.arunatalent.com | Recruits new referrers |
| **Creator Application** | https://apply.arunatalent.com | Creator sign-up form |
| **Direct Referral Form** | https://refer.arunatalent.com/refer-direct | Referrers submit warm leads |
| **Referrer Dashboard** | https://refer.arunatalent.com/my-referrals?code=CODE | Each referrer's personal stats |
| **Leaderboard** | https://refer.arunatalent.com/leaderboard | Public affiliate ranking |
| **Creator Hub** | https://refer.arunatalent.com/dashboard | Resources for signed creators |
| **Google Sheet** | [Aruna Talent - Referral Data](https://docs.google.com/spreadsheets/d/1kCFAavAsfbb3p-cNTxudFh6eMd3uOHxkYJrAZqgCpRE) | Central database (all tabs) |
| **Notification Inbox** | intake@arunatalent.com | Receives all automated alerts |
| **Apps Script** | Extensions > Apps Script (in the Sheet) | Email automations & form handlers |

**How data flows:**
1. Someone fills out a form on the website
2. The form sends data to Google Apps Script
3. Apps Script logs it to the correct Google Sheets tab
4. Apps Script sends an email notification to intake@arunatalent.com
5. You review the notification and take action

---

## Your Daily Workflow

### Morning (9 AM)

1. **Check intake@arunatalent.com** for overnight notifications
2. **Process new referrer applications** — review, approve/reject, send email (see [Section 4.1](#1-processing-referrer-applications))
3. **Process new creator applications** — review, pass to onboarding team (see [Section 4.2](#2-processing-creator-applications))
4. **Process new direct referrals** — reach out to referred creators (see [Section 4.3](#3-processing-direct-referrals))
5. **Follow up** on any pending items from previous days (3-5 day rule)

### End of Day (5 PM)

1. Ensure all new applications have been reviewed or marked pending
2. Send any outstanding follow-up emails
3. Update status columns in Google Sheets
4. Flag anything needing CEO attention

### Weekly (Every Monday)

- Review all pending applications older than 5 business days
- Send follow-ups to unresponsive direct referrals
- Check Google Sheet data hygiene (formatting, missing info)
- Monday 9 AM: You'll receive an automated **Weekly Summary Email** to intake@ with activity counts

### Monthly (1st-5th of each month)

- **CRITICAL:** Update revenue for ALL active models (see [Section 4.4](#4-monthly-revenue-updates))
- Review model statuses (anyone inactive 2+ months?)
- Spot-check 3 referrer dashboards to confirm data displays correctly
- The system auto-sends a **Monthly Revenue Reminder** on the 1st at 9 AM

---

## Core Processes

### 1. Processing Referrer Applications

**Trigger:** Email notification — "New Referrer Application: [NAME]"
**Sheet tab:** Applications

**Steps:**

1. Open the [Google Sheet - Applications tab](https://docs.google.com/spreadsheets/d/1kCFAavAsfbb3p-cNTxudFh6eMd3uOHxkYJrAZqgCpRE)
2. Find the new row (most recent at bottom)
3. Review their information:
   - **Name, Email, Phone** — basic contact info
   - **Instagram** — check their profile (active? real followers? relevant audience?)
   - **Background** — do they have experience in talent, marketing, or recruitment?
   - **Network** — do they have access to potential creators?
   - **Ref Code** — were they referred by an existing referrer?

4. **Decision:**

   | Decision | Action |
   |----------|--------|
   | **Approve** | Generate code > Add to Referrers tab > Send welcome email |
   | **Reject** | Send rejection email |
   | **Need More Info** | Send info request email |

5. **If approving:**
   - Generate a unique code: `FIRSTNAME` + 3-digit number (e.g., `SARAH123`)
   - Verify code doesn't already exist in the Referrers tab
   - Add a new row to the **Referrers** tab:
     - Column A: `SARAH123` (the code)
     - Column B: `Sarah M.` (display name)
     - Column C: `2026-02-06` (today's date, YYYY-MM-DD)
   - The system auto-sends a welcome email within 10 minutes (checks every 10 min)
   - If their email isn't found in Applications, the system notifies intake@ to send manually

6. **If rejecting or needing more info:** Copy the appropriate template from [Email Templates](email-templates.md) and send manually.

**Time:** 5-10 minutes per application

---

### 2. Processing Creator Applications

**Trigger:** Email notification — "New Creator Application: [NAME]"
**Sheet tab:** Creator Applications

**Steps:**

1. Open the [Google Sheet - Creator Applications tab](https://docs.google.com/spreadsheets/d/1kCFAavAsfbb3p-cNTxudFh6eMd3uOHxkYJrAZqgCpRE)
2. Review the application:
   - **Instagram** — check profile quality, follower count, content style
   - **Age** — must be 18+
   - **Experience** — prior content creation experience
   - **Income Goal** — realistic expectations?
   - **Referred By** — note the referrer code (Column K) for commission tracking

3. **If promising:** Forward to the onboarding/talent team for follow-up
4. **If not a fit:** Send a polite decline (no template needed — keep it brief)
5. **Do NOT add to the Models sheet yet** — only add after they complete onboarding and actually start earning

6. **When a creator starts (after onboarding):**
   - Add a new row to the **Models** tab:
     - Column A: Referrer code (e.g., `SARAH123`) — blank if no referrer
     - Column B: Model name (e.g., `Emma T.`)
     - Column C: Emoji (pick a unique one, e.g., `🌸`)
     - Column D: Start date (`2026-02-06`)
     - Column E: `active`
     - Column F: leave blank
     - Column G: leave blank (until first revenue)
   - The system auto-notifies the referrer within 10 minutes

**Time:** 5-10 minutes per application

---

### 3. Processing Direct Referrals

**Trigger:** Email notification — "New Direct Referral from [NAME]"
**Sheet tab:** Direct Referrals

A direct referral means an existing referrer has submitted someone's contact info for us to reach out to.

**Steps:**

1. Open the [Google Sheet - Direct Referrals tab](https://docs.google.com/spreadsheets/d/1kCFAavAsfbb3p-cNTxudFh6eMd3uOHxkYJrAZqgCpRE)
2. Review the referral info:
   - **Referrer Name & Email** — who submitted this
   - **Referral Name, Phone, Email, Instagram** — the person being referred
   - **Relationship** — how they know each other
   - **Notes** — any additional context

3. **Reach out within 24-48 hours:**
   - Use the [Direct Referral Outreach template](email-templates.md#direct-referral-outreach)
   - Mention the referrer by name ("Sarah thought you'd be a great fit...")
   - Include the apply link: https://apply.arunatalent.com

4. **If no response after 3-5 days:**
   - Send ONE follow-up using the [Follow-up template](email-templates.md#direct-referral-followup)
   - If still no response, mark as "No Response" and move on

5. **If they apply:** Process as a normal creator application (Section 4.2)

**Time:** 5 minutes per referral outreach

---

### 4. Monthly Revenue Updates

**Trigger:** 1st of each month (automated reminder sent at 9 AM)
**Sheet tab:** Models
**Deadline:** Complete by the 5th

This is the most important recurring task. Revenue data drives commissions and dashboard displays.

**Steps:**

1. Pull revenue data from the payment platform for the previous month
2. Open the [Google Sheet - Models tab](https://docs.google.com/spreadsheets/d/1kCFAavAsfbb3p-cNTxudFh6eMd3uOHxkYJrAZqgCpRE)
3. For each active model, update **Column G (monthlyRevenue)**

**Revenue format:**
```
Mon YYYY:amount
```
Multiple months are comma-separated:
```
Nov 2025:71489.32,Dec 2025:88752.18,Jan 2026:96341.67
```

**Rules:**
- Use 3-letter month abbreviations: `Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec`
- No currency symbols — just the number
- Use periods for decimals (not commas): `96341.67`
- No spaces around colons or commas
- Append new months to the end, separated by comma

**Example:** If a model's current value is `Dec 2025:88752.18` and they earned $96,341.67 in January:
- New value: `Dec 2025:88752.18,Jan 2026:96341.67`

4. After updating, spot-check 3 referrer dashboards to confirm the data displays correctly
5. Allow ~5 minutes for Google's cache to refresh before checking

**Time:** 30-60 minutes depending on number of active models

---

### 5. Model Deactivation

**Trigger:** Model leaves the agency or goes inactive
**Sheet tab:** Models

**Steps:**

1. Confirm the model has officially left (don't deactivate on assumption)
2. Ensure their final month's revenue is recorded in Column G
3. Update the Models sheet:
   - Column E: Change from `active` to `inactive`
   - Column F: Set to the last active date (`2026-01-31`)
4. **Do NOT delete the row** — historical data is needed for commission tracking
5. Notify CEO if the model was a high earner (>$50K lifetime)

**Time:** 2-3 minutes

---

## Commission Structure

| Tier | Monthly Portfolio Revenue | Commission Rate |
|------|--------------------------|-----------------|
| **Intro** (first 3 months) | Any | **5%** of each creator's net revenue |
| **Base** | Under $500K | **2.5%** lifetime |
| **Gold** | $500K - $2M | **2.75%** lifetime |
| **Diamond** | Over $2M | **3%** lifetime |

**Key points:**
- Referrers earn 5% on each creator for their first 3 months, regardless of tier
- After 3 months, the rate drops to their tier rate (based on total portfolio revenue)
- Commissions are calculated and paid **monthly**
- No cap on earnings
- Revenue is based on the creator's **net** revenue (what the agency receives)
- Tier is based on the referrer's **total monthly portfolio** (sum of all their active creators)

**How the dashboard calculates tiers:**
- The leaderboard and my-referrals pages automatically calculate each referrer's tier based on their total portfolio revenue and display the corresponding badge (Base/Gold/Diamond)

---

## Tools & Access

To do this job, you need access to:

| Tool | Access | Purpose |
|------|--------|---------|
| Google Sheets | Editor access to the Referral Data sheet | All data management |
| intake@arunatalent.com | Email access | Receive notifications, send responses |
| admin@arunatalent.com | For escalation | CEO contact for approvals |
| Google Apps Script | Via Extensions menu in Sheet | View automations, check errors |

**Request access from:** Mitchell McConachy (admin@arunatalent.com)

---

## Google Sheets Reference

**Sheet URL:** https://docs.google.com/spreadsheets/d/1kCFAavAsfbb3p-cNTxudFh6eMd3uOHxkYJrAZqgCpRE

### Tab: Referrers

| Column | Field | Example |
|--------|-------|---------|
| A | Code | `SARAH123` |
| B | Name | `Sarah M.` |
| C | Join Date | `2026-01-15` |

### Tab: Models

| Column | Field | Example |
|--------|-------|---------|
| A | Referrer Code | `SARAH123` |
| B | Model Name | `Emma T.` |
| C | Emoji | `🌸` |
| D | Start Date | `2026-01-15` |
| E | Status | `active` or `inactive` |
| F | Last Active | blank or `2026-01-31` |
| G | Monthly Revenue | `Jan 2026:96341.67` |

### Tab: Applications
Auto-populated by referrer application form. Columns: Timestamp, Name, Email, Phone, Instagram, Background, How Heard, Network, Ref Code.

### Tab: Creator Applications
Auto-populated by creator application form. Columns: Timestamp, Name, Instagram, Age, Experience, Platforms, Photo, Streaming, Income Goal, Phone, Referred By.

### Tab: Direct Referrals
Auto-populated by direct referral form. Columns: Timestamp, Referrer Name, Referrer Email, Referral Name, Referral Phone, Referral Email, Referral Instagram, Relationship, Notes.

### Tab: Leaderboard
Manually maintained ranking of active referrers. Columns: Name, Emoji, Models, Retention, AvgPerModel, Revenue, Code.

**Important:** Tab names are **case-sensitive**. They must be exactly: `Referrers`, `Models`, `Applications`, `Direct Referrals`, `Creator Applications`, `Leaderboard`. If these are renamed or misspelled, the automations and dashboards will break.

---

## Automated Emails

The system sends these emails automatically — you don't need to do anything unless they fail.

| Email | When | To | What It Does |
|-------|------|-----|-------------|
| **Welcome Email** | Within 10 min of adding a referrer to the Referrers tab | The referrer (looked up from Applications tab) | Sends their code, dashboard link, referral links, and commission info |
| **New Model Notification** | Within 10 min of adding a model to the Models tab | The referrer (looked up from Applications tab) | Notifies referrer that their creator has started |
| **Monthly Reminder** | 1st of each month, 9 AM | intake@arunatalent.com | Reminds team to update revenue data |
| **Weekly Summary** | Every Monday, 9 AM | intake@arunatalent.com | Activity summary: new apps, referrals, referrers, models |

**If a welcome email or model notification can't find the referrer's email:** The system sends a "Manual Action Needed" email to intake@ instead. You'll need to send the email manually using the templates below.

**To check automation health:** Open the Google Sheet > Extensions > Apps Script > Executions (left sidebar). This shows all recent runs and any errors.

---

## Email Templates (Manual)

Use these when the system can't auto-send, or for situations that need a human touch.

### Approving a Referrer

**Subject:** Welcome to Aruna Talent's Referral Program!

```
Hi [FIRST NAME],

Great news - your application to join our referral program has been approved!

YOUR REFERRER CODE: [CODE]

YOUR DASHBOARD:
https://refer.arunatalent.com/my-referrals?code=[CODE]
(Bookmark this - it shows your referrals, earnings, and stats)

YOUR REFERRAL LINKS:
- For potential creators: https://apply.arunatalent.com?ref=[CODE]
- To recruit other referrers: https://refer.arunatalent.com?ref=[CODE]

HOW IT WORKS:
1. Share your creator link with people who might want to join our agency
2. When they sign up and start earning, you earn commission on their revenue
3. Track everything in real-time on your dashboard

YOUR COMMISSION:
- 5% of each creator's revenue for their first 3 months
- 2.5% lifetime after that (Base tier)
- Hit $500K+ monthly portfolio revenue = Gold tier (2.75%)
- Hit $2M+ monthly portfolio revenue = Diamond tier (3%)

Paid monthly. No cap on earnings.

Questions? Just reply to this email.

Welcome aboard!
[YOUR NAME]
Aruna Talent
```

### Rejecting a Referrer

**Subject:** Your Aruna Talent Referral Application

```
Hi [NAME],

Thank you for your interest in joining our referral program.

After reviewing your application, we've decided not to move forward at this time.

This isn't necessarily permanent - you're welcome to reapply in 6 months.

Best regards,
[YOUR NAME]
Aruna Talent
```

### Reaching Out to a Direct Referral

**Subject:** [REFERRER NAME] Recommended You

```
Hi [NAME],

[REFERRER NAME] thought you'd be a perfect fit for Aruna Talent and passed along your info.

We're a talent agency that helps creators earn significant income through streaming and content creation. Our top creators earn $50k-$150k+ per month.

What we offer:
- Full support and training
- Marketing and growth strategies
- Technical setup assistance
- 24/7 support team

Interested? Apply here: https://apply.arunatalent.com
Or just reply to this email with questions.

Best,
[YOUR NAME]
Aruna Talent
```

### Follow-Up (3-5 days, no response)

**Subject:** Following up - Aruna Talent

```
Hi [NAME],

Just following up on my email from a few days ago. [REFERRER NAME] recommended you for our talent program.

If you have any questions, I'm happy to help. Just reply.

If this isn't for you, no worries - just let me know.

Best,
[YOUR NAME]
Aruna Talent
```

### Notifying Referrer of New Creator (Manual)

**Subject:** Great News - New Creator Added to Your Account!

```
Hi [REFERRER FIRST NAME],

Exciting update - [MODEL NAME] has officially started with Aruna Talent and has been added to your referral account!

What this means:
- You'll earn 5% of [MODEL NAME]'s revenue for their first 3 months
- Then your tier rate (2.5%+) on their revenue for life
- Track their earnings: https://refer.arunatalent.com/my-referrals?code=[CODE]
- Commissions are calculated and paid monthly

Keep up the great work!

- The Aruna Talent Team
```

---

## Troubleshooting

### Dashboard shows blank or "No data found"
1. Verify the referrer code exists in the Referrers tab (exact match, case-sensitive)
2. Check the Google Sheet is still published: File > Share > Publish to web
3. Wait 5 minutes (Google caches published data)
4. Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

### Dashboard shows wrong revenue
1. Check the model's `referrerCode` (Column A) matches exactly
2. Check `monthlyRevenue` format: `Jan 2026:96341.67` (no spaces around colon, comma-separated months)
3. Check for extra spaces or typos

### Not receiving email notifications
1. Check intake@arunatalent.com spam folder
2. Open the Sheet > Extensions > Apps Script > Triggers — verify 4 triggers exist
3. Check Apps Script > Executions for error messages
4. Try manually running a test function (e.g., `testWeeklySummary`)

### Form submissions not appearing in the sheet
1. Check Apps Script deployment is active: Apps Script > Deploy > Manage deployments
2. Look at Apps Script > Executions for errors
3. The deployment URL should be: `https://script.google.com/macros/s/AKfycbwxHZjtRkCnsFnZbYZFJRjtY0ArWacoRntz5HkODOU2ptHeNTN3PJAxRmT6Scbby7Mn/exec`

### Data accidentally changed or deleted
1. Don't panic — Google Sheets has version history
2. Go to File > Version history > See version history
3. Find the version before the mistake and restore it

---

## Escalation

| Issue | Contact | Email |
|-------|---------|-------|
| Technical problems | Mitchell McConachy (CEO) | admin@arunatalent.com |
| Referrer disputes | Mitchell McConachy (CEO) | admin@arunatalent.com |
| Payment questions | Mitchell McConachy (CEO) | admin@arunatalent.com |
| Policy questions | Mitchell McConachy (CEO) | admin@arunatalent.com |

**When to escalate:**
- Apps Script errors you can't resolve after checking the troubleshooting section
- Referrer disputes about commissions or attribution
- Data discrepancies that affect payments
- Any question about program policy or terms

---

*This document covers all day-to-day operations for the Aruna Talent Referral Program. For detailed step-by-step procedures, see the individual SOPs in the `docs/sops/` folder. For the full technical system architecture, see the [Operations Manual](OPERATIONS_MANUAL.md).*
