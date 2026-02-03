# Google Sheets Setup Instructions

## Quick Start (5 minutes)

### Step 1: Create Google Sheet
1. Go to [sheets.google.com](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it: "Aruna Talent - Referral Data"

### Step 2: Import Referrers Data
1. Go to **File → Import**
2. Select **Upload** tab
3. Upload `referrers.csv` from this folder
4. Choose **Replace current sheet**
5. Rename the sheet tab to "Referrers"

### Step 3: Import Models Data
1. Click **+** at bottom to add new sheet
2. Go to **File → Import**
3. Upload `models.csv`
4. Choose **Insert new sheet(s)**
5. Rename the new sheet tab to "Models"

### Step 4: Publish as CSV
1. Go to **File → Share → Publish to web**
2. In the dropdown, select **Referrers** sheet
3. Change format to **CSV**
4. Click **Publish**
5. Copy the URL (save it!)
6. Repeat for **Models** sheet (note: different gid in URL)

### Step 5: Update Your Website Code
Open `my-referrals.html` and find this section near the top:

```javascript
const SHEETS_CONFIG = {
    useGoogleSheets: false,  // ← Change to: true
    referrersUrl: 'https://docs.google.com/spreadsheets/d/e/YOUR_ID/pub?gid=0&single=true&output=csv',
    modelsUrl: 'https://docs.google.com/spreadsheets/d/e/YOUR_ID/pub?gid=XXXXX&single=true&output=csv'
};
```

Replace the URLs with your published CSV URLs.

---

## Data Structure Reference

### Referrers Sheet
| Column | Description | Example |
|--------|-------------|---------|
| code | Unique access code (uppercase) | SARAH123 |
| name | Display name | Sarah M. |
| joinDate | When they joined (YYYY-MM-DD) | 2025-04-01 |

### Models Sheet
| Column | Description | Example |
|--------|-------------|---------|
| referrerCode | Links to referrer's code | SARAH123 |
| modelName | Creator's name | Emma T. |
| emoji | Display emoji | 🌸 |
| startDate | When model started (YYYY-MM-DD) | 2026-01-15 |
| status | "active" or "inactive" | active |
| lastActive | Last active date if inactive | 2025-12-01 |
| monthlyRevenue | Revenue by month (see format below) | Jan 2026:145000.50 |

### Monthly Revenue Format
```
Month YYYY:amount,Month YYYY:amount,Month YYYY:amount
```
Example: `Nov 2025:71489.32,Dec 2025:88752.18,Jan 2026:96341.67`

**Important:**
- Use full month names (Jan, Feb, Mar, etc.)
- Amounts can have decimals
- Separate entries with commas
- No spaces around colons or commas

---

## Monthly Update Process

### Adding Monthly Revenue (1st of each month)
1. Open the Models sheet
2. Find each active model's row
3. Append to their monthlyRevenue column:
   - Current: `Nov 2025:71489.32,Dec 2025:88752.18`
   - Add: `,Jan 2026:96341.67`
   - Result: `Nov 2025:71489.32,Dec 2025:88752.18,Jan 2026:96341.67`

### Adding a New Referrer
1. Open Referrers sheet
2. Add new row with: code, name, joinDate
3. Generate a unique code (e.g., NEWREF001)

### Adding a New Model
1. Open Models sheet
2. Add new row with all columns
3. Start monthlyRevenue with first month's data

### Marking Model as Inactive
1. Find the model's row
2. Change `status` from "active" to "inactive"
3. Add `lastActive` date (their final month)

---

## Automation Ideas

### Google Apps Script (Free)
Add a script to auto-calculate totals or send notifications:
1. **Extensions → Apps Script**
2. Add triggers for monthly updates
3. Send email alerts when new referrals come in

### Zapier Integration
Connect external sources:
- Stripe → Google Sheets (auto-add revenue)
- Form submissions → Google Sheets (new referrers)
- Google Sheets → Email (notifications)

---

## Troubleshooting

**Data not showing?**
- Check that `useGoogleSheets: true` is set
- Verify CSV URLs are correct (test in browser)
- Google caches for ~5 minutes after changes

**Wrong numbers?**
- Check monthlyRevenue format (no extra spaces)
- Ensure dates are YYYY-MM-DD format
- Verify referrerCode matches exactly (case-sensitive)

**Access denied?**
- Make sure sheet is published, not just shared
- Check "Anyone with link" in sharing settings
