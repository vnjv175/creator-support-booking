# SOP 01: New Referrer Application

## Trigger
Email notification to intake@arunatalent.com with subject "New Referrer Application: [Name]"

## Overview
When someone applies to become a referrer through refer.arunatalent.com, review their application and either approve or reject them.

---

## Steps

### 1. Review the Application
Open the email notification and review:
- [ ] **Name** - Is this a real person?
- [ ] **Instagram** - Check their profile. Do they have followers? Is it active?
- [ ] **Background** - Relevant experience in talent/creator space?
- [ ] **Network** - Do they have access to potential creators?
- [ ] **How Heard** - Were they referred by an existing referrer?

### 2. Check for Duplicates
1. Open [Google Sheets - Applications tab](https://docs.google.com/spreadsheets/d/1kCFAavAsfbb3p-cNTxudFh6eMd3uOHxkYJrAZqgCpRE)
2. Search for their email/name to ensure they haven't applied before
3. Check the Referrers tab to ensure they're not already active

### 3. Make Decision

#### If APPROVED:
1. Follow [SOP 06: Generate Referrer Code](06-generate-code.md) to create their unique code
2. Add them to the **Referrers** sheet:
   - Column A: Their new code (e.g., SARAH123)
   - Column B: Their name (e.g., Sarah M.)
   - Column C: Today's date (YYYY-MM-DD format)
3. Send **Approval Email** (see [Email Templates](../email-templates.md#referrer-approved))
4. Mark application as "Approved" in Applications tab (add a Status column if needed)

#### If REJECTED:
1. Send **Rejection Email** (see [Email Templates](../email-templates.md#referrer-rejected))
2. Mark application as "Rejected" in Applications tab

#### If NEED MORE INFO:
1. Send **More Info Email** (see [Email Templates](../email-templates.md#referrer-more-info))
2. Mark application as "Pending" in Applications tab

### 4. Update Application Status
In the Applications tab, add notes:
- Add a "Status" column (if not exists) and mark: Approved/Rejected/Pending
- Add a "Processed Date" column with today's date
- Add any relevant notes

---

## Decision Criteria

**Auto-Approve if:**
- Referred by existing high-performing referrer
- Has 10k+ Instagram followers in relevant niche
- Has clear industry experience

**Review Carefully if:**
- No Instagram or private account
- Vague background description
- No clear network access

**Auto-Reject if:**
- Fake/spam application
- Inappropriate content on social media
- Previous rejection (check Applications tab)

---

## Time to Complete
5-10 minutes per application

## Escalation
If unsure about an application, forward to CEO with your recommendation.
