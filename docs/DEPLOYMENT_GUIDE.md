# Google Apps Script Deployment Guide

Step-by-step instructions to deploy the referral program automations.

---

## Prerequisites

- Access to the Google Sheet: [Aruna Talent - Referral Data](https://docs.google.com/spreadsheets/d/1kCFAavAsfbb3p-cNTxudFh6eMd3uOHxkYJrAZqgCpRE)
- Google account with edit permissions on the sheet

---

## Step 1: Open Google Apps Script

1. Open the Google Sheet
2. Click **Extensions** in the top menu
3. Click **Apps Script**
4. A new tab will open with the script editor

---

## Step 2: Replace the Code

1. In the Apps Script editor, you'll see existing code (if any)
2. **Select all** the existing code (Cmd+A on Mac, Ctrl+A on Windows)
3. **Delete** it
4. Open the file `google-apps-script.js` from the repository
5. **Copy all** the code from that file
6. **Paste** it into the Apps Script editor
7. Click the **Save** icon (floppy disk) or press Cmd+S / Ctrl+S

---

## Step 3: Set Up Triggers

1. In the Apps Script editor, find the function dropdown at the top (says "Select function")
2. Select **setupTriggers** from the dropdown
3. Click the **Run** button (play icon)
4. A popup will appear asking for authorization - click **Review Permissions**
5. Select your Google account
6. Click **Advanced** (bottom left)
7. Click **Go to [project name] (unsafe)** - this is safe, it's your own script
8. Click **Allow**

The script will now set up all 4 automations and send a confirmation email to intake@arunatalent.com.

---

## Step 4: Verify Triggers Are Active

1. In the Apps Script editor, click the **clock icon** (Triggers) in the left sidebar
2. You should see 4 triggers:
   - `checkForNewReferrers` - every 10 minutes
   - `checkForNewModels` - every 10 minutes
   - `monthlyRevenueReminder` - 1st of month at 9am
   - `weeklySummaryEmail` - Monday at 9am

If you don't see these, run `setupTriggers` again.

---

## Step 5: Test the Automations

### Test Weekly Summary
1. In the function dropdown, select **testWeeklySummary**
2. Click **Run**
3. Check intake@arunatalent.com for the test email

### Test Monthly Reminder
1. In the function dropdown, select **testMonthlyReminder**
2. Click **Run**
3. Check intake@arunatalent.com for the test email

### Test New Referrer Welcome Email
1. Add a test row to the **Referrers** sheet:
   - Column A: `TEST001`
   - Column B: `Test User`
   - Column C: Today's date (YYYY-MM-DD)
2. Wait 10 minutes (or run `testCheckNewReferrers` manually)
3. Check that intake@ receives notification (email won't send to referrer without matching application)
4. **Delete the test row** when done

### Test New Model Notification
1. Add a test row to the **Models** sheet:
   - Column A: `SARAH123` (existing referrer code)
   - Column B: `Test Model`
   - Column C: Any emoji
   - Column D: Today's date
   - Column E: `active`
2. Wait 10 minutes (or run `testCheckNewModels` manually)
3. Check that notification is sent
4. **Delete the test row** when done

---

## Step 6: Initialize Row Counters

The first time the automation runs, it sets a baseline of current rows. This prevents sending welcome emails to all existing referrers.

If you need to reset this baseline (e.g., after testing):
1. Select **resetRowCounters** from the function dropdown
2. Click **Run**
3. The next check will set new baselines without sending emails

---

## Troubleshooting

### "Authorization required" error
- Run the function again and complete the authorization flow
- Make sure you're logged into the correct Google account

### Triggers not firing
- Check the Triggers panel (clock icon) to verify they exist
- Check **Executions** (list icon) to see if there are errors
- Make sure the script is saved

### Emails not sending
- Check spam folder
- Verify NOTIFY_EMAIL is correct in the script
- Check daily email quota (free accounts: 100/day)

### Wrong data being read
- Verify sheet tab names match exactly: "Referrers", "Models", "Applications", etc.
- Check that column order matches expected structure

---

## What the Automations Do

| Automation | Trigger | Action |
|------------|---------|--------|
| New Referrer Welcome | Every 10 min | Sends welcome email when new referrer added to sheet |
| New Model Notification | Every 10 min | Emails referrer when their referred model starts |
| Monthly Revenue Reminder | 1st of month, 9am | Reminds team to update revenue data |
| Weekly Summary | Monday, 9am | Sends activity summary for the week |

---

## Re-deployment

If you update the script code in the future:
1. Open Apps Script (Extensions → Apps Script)
2. Replace the code
3. Save
4. **Do NOT run setupTriggers again** unless you want to reset triggers
5. Existing triggers will use the updated code automatically
