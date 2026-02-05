# Aruna Talent Referral Program - Operations Manual

## Quick Reference Card

| Item | Value |
|------|-------|
| **Referrer Landing Page** | refer.arunatalent.com |
| **Creator Application** | apply.arunatalent.com |
| **Google Sheet** | [Aruna Talent - Referral Data](https://docs.google.com/spreadsheets/d/1kCFAavAsfbb3p-cNTxudFh6eMd3uOHxkYJrAZqgCpRE) |
| **Notification Email** | intake@arunatalent.com |
| **Commission Rate** | 10% of model revenue (lifetime) |

---

## System Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        REFERRAL PROGRAM FLOW                            │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────────────────┐  │
│  │   Websites   │───▶│ Google Apps  │───▶│     Google Sheets        │  │
│  │              │    │   Script     │    │                          │  │
│  │ • refer.*   │    │              │    │ Tabs:                    │  │
│  │ • apply.*   │    │ • doPost()   │    │ • Referrers              │  │
│  │              │    │ • doGet()    │    │ • Models                 │  │
│  └──────────────┘    │ • triggers   │    │ • Applications           │  │
│                      └──────────────┘    │ • Direct Referrals       │  │
│                             │            │ • Creator Applications   │  │
│                             ▼            └──────────────────────────┘  │
│                      ┌──────────────┐                                   │
│                      │    Email     │                                   │
│                      │ Notifications│                                   │
│                      │              │                                   │
│                      │ intake@      │                                   │
│                      └──────────────┘                                   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Google Sheets Structure

### Sheet ID
`1kCFAavAsfbb3p-cNTxudFh6eMd3uOHxkYJrAZqgCpRE`

### Tab 1: Referrers
Active referrers who can earn commissions.

| Column | Field | Description | Example |
|--------|-------|-------------|---------|
| A | code | Unique referrer code (uppercase) | SARAH123 |
| B | name | Display name | Sarah M. |
| C | joinDate | Date approved (YYYY-MM-DD) | 2025-04-01 |

### Tab 2: Models
Creators managed under the agency, linked to referrers.

| Column | Field | Description | Example |
|--------|-------|-------------|---------|
| A | referrerCode | Links to referrer's code | SARAH123 |
| B | modelName | Creator's name | Emma T. |
| C | emoji | Display emoji for dashboard | 🌸 |
| D | startDate | When model started (YYYY-MM-DD) | 2026-01-15 |
| E | status | "active" or "inactive" | active |
| F | lastActive | Last active date if inactive | 2025-12-01 |
| G | monthlyRevenue | Revenue by month (see format) | Jan 2026:145000 |

**Monthly Revenue Format:**
```
Month YYYY:amount,Month YYYY:amount,Month YYYY:amount
```
Example: `Nov 2025:71489.32,Dec 2025:88752.18,Jan 2026:96341.67`

### Tab 3: Applications
New referrer applications (auto-populated by form).

| Column | Field |
|--------|-------|
| A | Timestamp |
| B | Name |
| C | Email |
| D | Phone |
| E | Instagram |
| F | Background |
| G | How Heard |
| H | Network |
| I | Ref Code (if referred) |

### Tab 4: Direct Referrals
Referrals submitted directly by existing referrers.

| Column | Field |
|--------|-------|
| A | Timestamp |
| B | Referrer Name |
| C | Referrer Email |
| D | Referral Name |
| E | Referral Phone |
| F | Referral Email |
| G | Referral Instagram |
| H | Relationship |
| I | Notes |

### Tab 5: Creator Applications
Potential creators who applied via the website.

| Column | Field |
|--------|-------|
| A | Timestamp |
| B | Name |
| C | Instagram |
| D | Age |
| E | Experience |
| F | Platforms |
| G | Photo |
| H | Streaming |
| I | Income Goal |
| J | Phone |
| K | Referred By |

---

## URLs & Domains

| URL | Purpose |
|-----|---------|
| `refer.arunatalent.com` | Referrer landing page - to recruit new referrers |
| `apply.arunatalent.com` | Creator application form |
| `my-referrals.html?code=XXXX` | Referrer dashboard (personalized) |
| `referral-link.html?code=XXXX` | Referrer's shareable links page |
| `leaderboard.html` | Public leaderboard |

---

## Role Responsibilities

### Operations Manager (Day-to-Day)
- Process new applications (referrers, creators, direct referrals)
- Add approved referrers to the Referrers sheet
- Add new models to the Models sheet
- Update monthly revenue on the 1st of each month
- Handle status changes (model activations/deactivations)
- Respond to referrer inquiries

### CEO (Oversight)
- Final approval on referrer applications
- Review weekly summary reports
- Handle escalations and disputes
- Strategic decisions on program terms

---

## Key Processes Summary

| Process | Trigger | SOP |
|---------|---------|-----|
| New referrer applies | Email notification | [01-new-referrer.md](sops/01-new-referrer.md) |
| Creator applies | Email notification | [02-creator-application.md](sops/02-creator-application.md) |
| Referrer submits lead | Email notification | [03-direct-referral.md](sops/03-direct-referral.md) |
| Monthly revenue update | 1st of month | [04-monthly-revenue.md](sops/04-monthly-revenue.md) |
| Model leaves agency | As needed | [05-deactivate-model.md](sops/05-deactivate-model.md) |
| Generate referrer code | After approval | [06-generate-code.md](sops/06-generate-code.md) |

---

## Automation Summary

The Google Apps Script (`google-apps-script.js`) handles:

1. **Form Submissions** - Automatically logs applications to appropriate sheets
2. **Email Notifications** - Sends alerts to intake@ when forms are submitted
3. **Welcome Emails** - Auto-sends welcome email with referral links to new referrers
4. **Monthly Reminders** - Reminds team to update revenue on 1st of month
5. **New Model Notifications** - Notifies referrers when their referred models are added
6. **Weekly Summaries** - Sends weekly activity summary every Monday

---

## Emergency Contacts

| Issue | Contact |
|-------|---------|
| Technical problems | [Developer contact] |
| Referrer disputes | CEO |
| Payment questions | Finance team |

---

## Document Index

- [Email Templates](email-templates.md) - Copy-paste emails for common scenarios
- [Checklists](checklists.md) - Daily/weekly/monthly task lists
- [Troubleshooting](troubleshooting.md) - Common issues and fixes
- [SOPs](sops/) - Step-by-step procedures for all processes
