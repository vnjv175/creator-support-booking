# Google Sheets Setup for Referral Dashboard

## Step 1: Create Google Sheets

You need **2 sheets** in one Google Spreadsheet:

### Sheet 1: "Referrers"
| Column A | Column B | Column C |
|----------|----------|----------|
| code | name | joinDate |
| SARAH123 | Sarah M. | 2025-04-01 |
| JAMES456 | James K. | 2025-05-15 |
| ALEX789 | Alex R. | 2025-11-01 |

### Sheet 2: "Models"
| Column A | Column B | Column C | Column D | Column E | Column F | Column G |
|----------|----------|----------|----------|----------|----------|----------|
| referrerCode | modelName | emoji | startDate | status | lastActive | monthlyRevenue |
| SARAH123 | Emma T. | 🌸 | 2026-01-15 | active | | Jan 2026:145000 |
| SARAH123 | Mia R. | 🦋 | 2025-11-01 | active | | Nov 2025:72000,Dec 2025:89000,Jan 2026:98000 |
| SARAH123 | Isabella N. | 🌙 | 2025-04-22 | inactive | 2025-12-01 | Apr 2025:18000,May 2025:35000,Jun 2025:48000 |

**monthlyRevenue format**: `Month Year:amount,Month Year:amount,...`

---

## Step 2: Publish Sheets as CSV

1. Open your Google Sheet
2. Go to **File → Share → Publish to web**
3. Select **Sheet 1 (Referrers)** → **CSV** → Click **Publish**
4. Copy the URL (looks like: `https://docs.google.com/spreadsheets/d/e/XXXXX/pub?gid=0&single=true&output=csv`)
5. Repeat for **Sheet 2 (Models)** with gid=1

---

## Step 3: Update the Code

Replace the spreadsheet IDs in my-referrals.html:

```javascript
const REFERRERS_CSV = 'https://docs.google.com/spreadsheets/d/e/YOUR_ID/pub?gid=0&single=true&output=csv';
const MODELS_CSV = 'https://docs.google.com/spreadsheets/d/e/YOUR_ID/pub?gid=MODELS_GID&single=true&output=csv';
```

---

## Step 4: Data Entry Workflow

### Adding a New Referrer:
1. Add a row to "Referrers" sheet with their code, name, and join date

### Adding a New Model:
1. Add a row to "Models" sheet with the referrer's code, model details

### Recording Monthly Revenue:
1. Find the model's row
2. Append to monthlyRevenue column: `,Feb 2026:125000`

### Marking a Model as Inactive:
1. Change status from "active" to "inactive"
2. Fill in the lastActive date

---

## Automation Options

### Option A: Google Apps Script (Free)
Create a script that:
- Pulls data from your payment processor
- Updates the monthlyRevenue column automatically
- Runs on a schedule (e.g., 1st of every month)

### Option B: Zapier/Make Integration
Connect your payment platform (Stripe, etc.) to Google Sheets:
- Trigger: New payment received
- Action: Update the model's revenue in the sheet

### Option C: Manual Entry
Update the sheet manually at the end of each month.

---

## Testing

After setup:
1. Visit: `your-site.com/my-referrals.html?code=SARAH123`
2. Check that data loads from the sheet
3. Make a change in the sheet, wait 5 minutes (Google cache), refresh

---

## Troubleshooting

**Data not loading?**
- Ensure sheet is published (not just shared)
- Check the CSV URLs are correct
- Look for CORS errors in browser console

**Changes not showing?**
- Google caches published sheets for ~5 minutes
- Hard refresh: Cmd+Shift+R

**Wrong data format?**
- Dates must be: YYYY-MM-DD
- monthlyRevenue must be: `Mon YYYY:amount,Mon YYYY:amount`
