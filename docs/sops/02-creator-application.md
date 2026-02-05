# SOP 02: Creator Application

## Trigger
Email notification to intake@arunatalent.com with subject "New Creator Application: [Name]"

## Overview
When a potential creator applies through apply.arunatalent.com, review their application and process accordingly. If they were referred, credit the referrer.

---

## Steps

### 1. Review the Application
Open the email notification and review:
- [ ] **Name** - Real name provided?
- [ ] **Instagram** - Check their profile for follower count and content type
- [ ] **Age** - Must be 18+
- [ ] **Experience** - Prior creator experience?
- [ ] **Platforms** - What platforms are they on/interested in?
- [ ] **Photo** - Have they provided required photos?
- [ ] **Streaming** - Comfortable with live streaming?
- [ ] **Income Goal** - Realistic expectations?
- [ ] **Referred By** - Note the referrer code if present

### 2. Check for Referrer Credit
If the application has a referrer code in "Referred By":
1. Open [Google Sheets - Referrers tab](https://docs.google.com/spreadsheets/d/1kCFAavAsfbb3p-cNTxudFh6eMd3uOHxkYJrAZqgCpRE)
2. Verify the code exists (e.g., SARAH123)
3. Note the referrer's name for later notification

### 3. Make Decision

#### If APPROVED (Moving Forward):
1. Contact the creator directly to schedule onboarding call
2. **Do NOT add to Models sheet yet** - only add after they complete onboarding and start
3. If they were referred, note the referrer code for when they're added later

#### If NOT A FIT:
1. Send polite rejection email
2. Mark as "Rejected" in Creator Applications tab

#### If NEED MORE INFO:
1. Reply requesting additional information
2. Mark as "Pending" in Creator Applications tab

### 4. When Creator Starts (After Onboarding)
Once the creator has completed onboarding and is ready to start:

1. Open the **Models** sheet
2. Add a new row:
   - Column A (referrerCode): The referrer's code (e.g., SARAH123) or leave blank if no referrer
   - Column B (modelName): Creator's name (e.g., Emma T.)
   - Column C (emoji): Choose a unique emoji (e.g., 🌸)
   - Column D (startDate): Today's date (YYYY-MM-DD)
   - Column E (status): "active"
   - Column F (lastActive): Leave blank
   - Column G (monthlyRevenue): Leave blank until first revenue

3. If they have a referrer, the automation will notify the referrer automatically
   - Or manually notify using [Email Templates](../email-templates.md#referrer-new-model)

### 5. Update Application Status
In Creator Applications tab:
- Add Status column: Started/Rejected/Pending
- Add notes with any relevant information

---

## Emoji Selection Guide
Choose unique emojis that haven't been used recently:
🌸 🦋 🌺 💫 ✨ 🌙 🌟 🔥 💕 🌷 🌼 💎 🎀 💝 🌹 🍑 🌻 🌊 💜 🎭

Check existing emojis in Models sheet before assigning.

---

## Time to Complete
- Initial review: 5-10 minutes
- Adding to Models sheet (when they start): 2 minutes

## Escalation
Forward to CEO if:
- Creator has very large following (100k+)
- Any concerns about identity verification
- Questions about referrer commission eligibility
