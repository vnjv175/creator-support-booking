# Meta Ads Campaign: Aruna Talent Referral Program

> **Last Updated:** 2026-02-11
> **Campaign Owner:** Aruna Talent Marketing
> **Landing Page:** refer.arunatalent.com
> **Instagram:** @arunatalent (269K followers, verified)

---

## Table of Contents

1. [Campaign Structure](#1-campaign-structure)
2. [Ad Copy -- 6 Variations](#2-ad-copy--6-variations)
3. [ManyChat Integration Guide](#3-manychat-integration-guide)
4. [Compliance Analysis](#4-compliance-analysis)
5. [Creative Brief](#5-creative-brief)
6. [Campaign Launch Checklist](#6-campaign-launch-checklist)

---

## 1. Campaign Structure

### Campaign Overview

| Setting | Value |
|---------|-------|
| **Campaign Name** | `ARUNA-REFER-Q1-2026` |
| **Objective** | Traffic (optimise for Landing Page Views) |
| **Buying Type** | Auction |
| **Special Ad Category** | None required (this is not employment, housing, credit, or politics) |
| **Daily Budget** | $30-50/day testing phase; scale to $100-200/day on winning ads |
| **Campaign Budget Optimization** | ON (let Meta distribute spend across ad sets) |

**Why Traffic over Lead Generation:** The landing page already captures form submissions with UTM attribution. A Traffic objective optimised for Landing Page Views will drive cheaper clicks than Lead Gen forms, and the existing form captures richer qualification data (background, network description) than a native Meta lead form can. If CPA is too high after 7 days, test a Lead Gen campaign as a secondary experiment.

**Alternative flow (Send Message):** For ads routed through ManyChat, use the **Messages** objective with Instagram Direct as the destination. This triggers the automated DM flow and allows conversational qualification before sending the landing page link. Run this as a separate campaign: `ARUNA-REFER-MC-Q1-2026`.

### Ad Set Configuration

#### Ad Set 1: Core Audience (Testing)

| Setting | Value |
|---------|-------|
| **Ad Set Name** | `US-AU_18-22_Creator-Affiliate-Interests` |
| **Locations** | United States, Australia |
| **Age** | 18-22 |
| **Gender** | All |
| **Placements** | Advantage+ Placements (let Meta optimise). If CPM is high, manually restrict to: Instagram Feed, Instagram Stories, Instagram Reels, Facebook Feed, Facebook Stories |
| **Optimization** | Landing Page Views (Traffic) or Conversations (Messages) |
| **Attribution** | 7-day click, 1-day view |
| **Schedule** | Run continuously; review after 7 days |

#### Detailed Targeting -- Interests

Layer these with OR logic (broad enough for Meta's algorithm to work):

**Tier 1 -- Direct relevance:**
- Affiliate marketing
- Passive income
- Digital marketing
- Influencer marketing
- Social media marketing
- Online business

**Tier 2 -- Adjacent audiences:**
- Entrepreneurship
- Side hustle
- Financial freedom
- Network marketing (careful -- see compliance notes)
- Content creation
- Instagram (app interest)

**Tier 3 -- Behavioural signals:**
- Engaged shoppers
- Small business owners
- Frequent travellers (proxy for aspirational lifestyle)

**Exclusions:**
- Exclude existing website visitors (install Meta Pixel on refer.arunatalent.com first)
- Exclude anyone who already submitted the referrer application form (custom audience from Google Sheets email list, uploaded monthly)

#### Ad Set 2: Lookalike (Scale Phase -- deploy after 50+ landing page views)

| Setting | Value |
|---------|-------|
| **Ad Set Name** | `US-AU_18-22_LAL-1pct-Referrers` |
| **Source** | 1% Lookalike of referrer application submissions (custom audience from email list) |
| **Age** | 18-22 |
| **Location** | United States, Australia |

#### Ad Set 3: Retargeting (Deploy after 500+ site visitors)

| Setting | Value |
|---------|-------|
| **Ad Set Name** | `RETARGET_Site-Visitors-30d` |
| **Source** | Website visitors (last 30 days) who did not submit the form |
| **Age** | 18-22 |
| **Creative** | Use social proof and urgency variations (Ads 4 and 6) |

### Budget Allocation Strategy

| Phase | Duration | Daily Budget | Goal |
|-------|----------|-------------|------|
| **Testing** | Days 1-7 | $30-50/day | Run all 6 ad variations. Identify top 2-3 by CTR and CPC. Kill anything under 1% CTR after $15 spend. |
| **Optimization** | Days 8-14 | $50-80/day | Consolidate budget into winning ads. Test 2-3 new headline/image combos against winners. |
| **Scale** | Day 15+ | $100-200/day | Deploy Lookalike ad set. Increase budget on winners by no more than 20% every 3 days. Launch retargeting. |

### UTM Parameters

All ads must include UTM parameters for attribution tracking in the landing page form.

**Traffic ads (direct to landing page):**
```
refer.arunatalent.com/?utm_source=facebook&utm_medium=paid&utm_campaign=ARUNA-REFER-Q1-2026&utm_content={ad_name}
```

**ManyChat ads (Send Message flow):**
The ManyChat flow appends its own UTMs when it sends the landing page link:
```
refer.arunatalent.com/?utm_source=manychat&utm_medium=dm&utm_campaign=refer-dm-flow&utm_content={ad_name}
```

Use `{ad_name}` dynamic parameter so Meta auto-fills the ad variation name for granular tracking.

### Meta Pixel Setup

Install the Meta Pixel on refer.arunatalent.com with these events:

| Event | Trigger | Purpose |
|-------|---------|---------|
| `PageView` | All pages | Baseline tracking |
| `ViewContent` | Landing page load | Optimise Traffic campaigns |
| `Lead` | Form submission success (fire on `alert('Thanks for applying...')`) | Conversion tracking and Lookalike seed |

**Implementation:** Add the Meta Pixel base code to `index.html` inside `<head>`. Fire the `Lead` event inside the form submit success handler, before the alert.

---

## 2. Ad Copy -- 6 Variations

**Global compliance reminders applied to every variation below:**
- No mention of OnlyFans, OF, or any specific adult platform
- "Content creators" and "creators" are the only terms used
- All income figures prefixed with "up to" or framed conditionally ("if... then...")
- No guaranteed income claims
- "Individual results vary" included in primary text (long version)

---

### Variation 1: Passive Income Hook

**Theme:** "What if one introduction could pay you every month?"

**Primary Text (Short -- 125 chars):**
> What if one introduction could pay you up to $5K/mo? We pay you monthly for connecting us with talented content creators.

**Primary Text (Long -- 500 chars):**
> What if one introduction could earn you up to $5,000 every single month?
>
> Aruna Talent manages top content creators -- and we pay referral commissions for every creator you introduce to us.
>
> No selling. No calls. No content required from you. Just introduce us to a creator you know, and if they join and start earning, you get a cut of their revenue. Monthly. For as long as they're with us.
>
> This isn't a side hustle -- it's a passive income stream that compounds.
>
> Individual results vary based on creator performance.

**Headline (40 chars):**
> Get Paid for Introductions

**Description (30 chars):**
> Earn up to $5K/mo passively

**CTA Button:** Learn More

**UTM `ad_name`:** `passive-income-hook`

---

### Variation 2: 5% Rate Hook

**Theme:** Lead with the specific commission rate and do the math for them.

**Primary Text (Short -- 125 chars):**
> You earn 5% of every creator you refer. If she earns $100K/mo, that's up to $5,000/mo in your pocket. No selling required.

**Primary Text (Long -- 500 chars):**
> Here's the math:
>
> You refer a content creator to Aruna Talent. She signs up and starts earning.
>
> For her first 3 months, you earn 5% of her revenue. If she earns $100K/mo, you could pocket $5,000/mo. After 3 months, your rate drops to 2.5% -- but it keeps paying. Every month. Indefinitely.
>
> Now imagine you refer 2 or 3 creators. It stacks.
>
> We manage 100+ person teams and have helped creators generate over $50M. We know how to grow them -- and that means your referral income grows too.
>
> Results depend on creator earnings.

**Headline (40 chars):**
> 5% of Everything She Earns

**Description (30 chars):**
> Real commissions. Real math.

**CTA Button:** Learn More

**UTM `ad_name`:** `5pct-rate-hook`

---

### Variation 3: Lifestyle / Freedom Hook

**Theme:** No work, no calls, no content. Just intros from your phone.

**Primary Text (Short -- 125 chars):**
> No selling. No calls. No content. Just introduce us to creators you know and earn up to thousands per month. From your phone.

**Primary Text (Long -- 500 chars):**
> This is the lowest-effort income stream you'll find.
>
> You don't sell anything. You don't take calls. You don't create content. You don't manage anyone.
>
> You just introduce us to a content creator you already know. We handle everything else -- the management, the strategy, the team.
>
> If she signs and starts earning, you get a monthly commission on her revenue. No cap. No expiry. For as long as she's with us.
>
> It takes 60 seconds to apply and you could have your first referral earning within a week.
>
> Individual results may differ.

**Headline (40 chars):**
> Zero Work. Monthly Income.

**Description (30 chars):**
> Just make introductions.

**CTA Button:** Learn More

**UTM `ad_name`:** `lifestyle-freedom-hook`

---

### Variation 4: Social Proof Hook

**Theme:** Other people are already doing this. Here are the numbers.

**Primary Text (Short -- 125 chars):**
> 9 referrers are already earning commissions with us. $50M+ generated for creators. Limited spots open -- apply now.

**Primary Text (Long -- 500 chars):**
> We've been doing this for a while.
>
> Aruna Talent has helped content creators generate over $50M in revenue. We have a 100+ person team. 19 creators have been referred through our program so far, and 9 referrers are actively earning commissions right now.
>
> We're opening up a limited number of new referrer spots this quarter.
>
> If you know content creators -- whether through social media, creator communities, or your personal network -- you could earn up to 5% of their revenue just for making the introduction.
>
> Individual results vary.

**Headline (40 chars):**
> 9 Referrers Already Earning

**Description (30 chars):**
> Limited spots open now.

**CTA Button:** Learn More

**UTM `ad_name`:** `social-proof-hook`

---

### Variation 5: Creator Network Hook

**Theme:** "Know girls who could be successful creators?" Careful, compliant framing.

**Primary Text (Short -- 125 chars):**
> Know someone who'd crush it as a content creator? Refer them to us and earn up to 5% of their monthly revenue. Paid monthly.

**Primary Text (Long -- 500 chars):**
> Think about the people in your life.
>
> Do you know someone with a strong social media presence? Someone with the personality and drive to build a following as a content creator?
>
> Aruna Talent is a creator management agency with a 100+ person team. We handle everything -- strategy, content, marketing, support. All we need is the talent.
>
> If you refer a creator and she joins us, you earn up to 5% of her revenue for 3 months, then 2.5%+ for life. No cap. No limit on referrals.
>
> One great introduction could change your income.
>
> Results vary by creator.

**Headline (40 chars):**
> Know a Future Top Creator?

**Description (30 chars):**
> Refer her. Get paid monthly.

**CTA Button:** Send Message *(routes to Instagram DM / ManyChat)*

**UTM `ad_name`:** `creator-network-hook`

---

### Variation 6: Stacking Hook

**Theme:** "3 referrals = $7,500/mo" -- the compounding math.

**Primary Text (Short -- 125 chars):**
> Refer 3 creators averaging $50K/mo each = up to $7,500/mo in your pocket. And it keeps paying after that. Here's how.

**Primary Text (Long -- 500 chars):**
> Most affiliate programs pay once. This one pays every month.
>
> Here's how it works:
>
> Refer 1 creator earning $50K/mo = up to $2,500/mo for you.
> Refer 2 = up to $5,000/mo.
> Refer 3 = up to $7,500/mo.
>
> Each referral stacks on top of the last. There's no cap on how many creators you can refer, and commissions are paid monthly for as long as the creator earns with us.
>
> We're a professional management agency with a 100+ person team and $50M+ generated. We grow creators -- which means your income grows too.
>
> Earnings depend on creator performance.

**Headline (40 chars):**
> Stack Referrals. Stack Income.

**Description (30 chars):**
> 3 referrals = up to $7.5K/mo

**CTA Button:** Learn More

**UTM `ad_name`:** `stacking-hook`

---

### Ad Copy Quick Reference Table

| # | Variation | Short Primary Text | Headline | CTA |
|---|-----------|-------------------|----------|-----|
| 1 | Passive Income | One intro = up to $5K/mo | Get Paid for Introductions | Learn More |
| 2 | 5% Rate | The math on 5% | 5% of Everything She Earns | Learn More |
| 3 | Lifestyle | No selling, no calls | Zero Work. Monthly Income. | Learn More |
| 4 | Social Proof | 9 referrers earning now | 9 Referrers Already Earning | Learn More |
| 5 | Creator Network | Know someone who'd crush it? | Know a Future Top Creator? | Send Message |
| 6 | Stacking | 3 referrals = $7,500/mo | Stack Referrals. Stack Income. | Learn More |

---

## 3. ManyChat Integration Guide

### Overview

ManyChat acts as the middle layer between Meta ads and the landing page. The flow: user sees ad on Instagram, taps "Send Message" or comments a keyword, ManyChat handles the conversation in Instagram DMs, qualifies the lead, and sends them to refer.arunatalent.com with UTM tracking.

### Trigger Keywords

Set these as ManyChat automation triggers on the @arunatalent Instagram account:

| Keyword | Trigger Type | Use Case |
|---------|-------------|----------|
| `REFER` | Exact match | Primary keyword used in ad copy and bio |
| `EARN` | Exact match | Alternative for passive income angle |
| `REFERRAL` | Exact match | Natural variation people will type |
| `AFFILIATE` | Exact match | For affiliate marketer audience |
| `5%` | Exact match | For people responding to the rate hook |
| `INFO` | Exact match | Generic catch-all |

**Bio link CTA:** Add "DM us 'REFER' to learn more" to the @arunatalent Instagram bio during campaign run.

**Comment trigger:** On organic posts about the referral program, set "REFER" as a comment-to-DM trigger (ManyChat Comments Growth Tool).

### DM Flow Structure

```
Trigger (keyword or ad tap)
    |
    v
[Message 1: Welcome]  -- immediate
    |
    v
[Message 2: Quick Question]  -- 1 second delay
    |
    v
[User responds with button tap]
    |
    v
[Message 3: The Offer + Landing Page Link]  -- immediate
    |
    v
[Message 4: Follow-Up / Nudge]  -- 24 hours later (if no click)
```

### Message Templates

**Message 1 -- Welcome (sent immediately):**

> Hey! Thanks for reaching out.
>
> You're interested in our creator referral program, right? Quick overview:
>
> We're Aruna Talent -- a creator management agency with a 100+ person team. We pay commissions to people who refer talented content creators to us.
>
> You earn up to 5% of their revenue for the first 3 months, then 2.5%+ monthly for life. No selling, no calls -- just introductions.
>
> Quick question before I send you all the details...

**Message 2 -- Qualifier (sent 1 second after Message 1):**

> How would you describe yourself?
>
> [Button: I know creators personally]
> [Button: I'm in creator/influencer circles]
> [Button: I'm an affiliate marketer]
> [Button: Just curious for now]

**Message 3a -- Qualified Response (user tapped any of the first 3 buttons):**

> Perfect -- sounds like this could be a great fit for you.
>
> Here's our referral program page with all the details -- commission tiers, how it works, and the 60-second application:
>
> https://refer.arunatalent.com/?utm_source=manychat&utm_medium=dm&utm_campaign=refer-dm-flow&utm_content=qualified
>
> We've got 9 referrers already earning. Limited spots this quarter.
>
> Any questions, just message us here.

**Message 3b -- Casual / "Just curious" Response:**

> No worries! Here's the page if you want to learn more when you're ready:
>
> https://refer.arunatalent.com/?utm_source=manychat&utm_medium=dm&utm_campaign=refer-dm-flow&utm_content=curious
>
> The application only takes 60 seconds. And there's no commitment -- you just refer people you already know.

**Message 4 -- Follow-Up Nudge (sent 24 hours later, only if user has NOT clicked the link):**

> Hey, just following up! Did you get a chance to check out the referral program?
>
> A few people applied this week and are already getting set up with their referral links.
>
> Here's the page again if you need it: https://refer.arunatalent.com/?utm_source=manychat&utm_medium=dm&utm_campaign=refer-dm-nudge
>
> Happy to answer any questions.

### ManyChat Configuration Notes

- **Set the flow to Instagram DMs only** (not Facebook Messenger) since the ads drive to @arunatalent on Instagram.
- **Enable "Notify live chat"** if someone types a free-text response that doesn't match a button -- a team member should jump in manually.
- **Tag users** by which button they pressed (tag: `referrer-knows-creators`, `referrer-affiliate`, `referrer-in-circles`, `referrer-curious`) for future segmentation and retargeting.
- **Track link clicks** using ManyChat's built-in link tracking to measure DM-to-landing-page conversion rate.
- **Avoid sending more than 4 messages** in the initial sequence. Instagram penalises accounts that send too many automated DMs. The 24-hour follow-up is the maximum.
- **Opt-in window:** ManyChat can only send follow-up messages within 24 hours of the user's last interaction (Instagram policy). After 24 hours, you need a new user-initiated message to re-engage.

---

## 4. Compliance Analysis

### Meta Advertising Standards -- What Applies

#### 4.1 Income Opportunity Advertising

**Policy:** Meta prohibits ads that "promote unrealistic expectations of financial returns" or that promise specific financial outcomes. Income opportunity ads face heightened scrutiny.

**What this means for us:**
- Never state someone WILL earn a specific amount. Always use "up to", "potential", or conditional framing ("if a creator earns X, you could earn Y").
- Do not show before/after financial transformations ("I went from broke to $10K/mo").
- Do not use language like "easy money", "get rich quick", "financial freedom guaranteed", or "make money while you sleep."
- The word "passive" is acceptable when used accurately (you genuinely don't do ongoing work), but avoid pairing it with large dollar figures in the same sentence. Split them apart.
- Including "individual results vary" or "results depend on creator performance" is strongly recommended in every long-form primary text.

**Our mitigation:**
All 6 ad variations use conditional framing. Income figures are preceded by "up to" or embedded in "if... then..." structures. Every long-form version includes a results disclaimer.

#### 4.2 Adult Content Adjacency

**Policy:** Meta prohibits ads promoting adult content, sexual services, or sexually suggestive content. Ads adjacent to the adult creator economy face automated and manual review flags.

**Risk level:** MODERATE. We are not promoting adult content -- we are promoting a referral program for a talent management agency. However, if Meta's review system associates "content creators" with adult content (which can happen based on landing page scanning or account history), ads may be flagged.

**Mitigations:**
- The landing page (refer.arunatalent.com) is completely SFW. No suggestive imagery, no mention of adult content, no OnlyFans branding.
- Ad copy never mentions OnlyFans, OF, adult content, NSFW, or anything sexually suggestive.
- Creative images should be professional and corporate-feeling (see Creative Brief).
- The Instagram account @arunatalent (269K followers, verified) is a legitimate business profile, which helps during manual review.
- If ads are flagged: request manual review immediately (see Section 4.7).

**Critical "never say" list for Meta ads:**
| Banned Term | Safe Alternative |
|-------------|-----------------|
| OnlyFans | content creators / creators |
| OF | (omit entirely) |
| adult content | content / digital content |
| models (in this context) | creators / talent |
| sexy / suggestive / NSFW | (omit entirely) |
| girls (objectifying) | creators / people you know |
| easy money | monthly income / commission |
| guaranteed income | potential income / up to |
| get rich | build an income stream |
| make money while you sleep | earn monthly commissions |
| MLM / pyramid | referral program / affiliate program |

#### 4.3 Age-Targeted Advertising (18-22)

**Policy:** Meta has special restrictions for ads targeting users under 18. Since our minimum age is 18, we are not in the restricted youth category. However, there are some considerations:

- You cannot use Custom Audiences or Lookalike Audiences to target people identified as under 18.
- For 18+ targeting, detailed targeting, Custom Audiences, and Lookalikes are all available.
- Special Ad Categories (housing, employment, credit) cannot use age targeting -- but our ads do not fall into these categories. A referral/affiliate program is not an employment opportunity under Meta's definitions (no employer-employee relationship, no salary, no job listing).

**Risk:** Low. Targeting 18-22 is straightforward and does not trigger special restrictions.

#### 4.4 Financial Products and Services

**Policy:** Ads for financial products (loans, insurance, crypto, investment advice) require additional disclosures and may require authorization.

**Does this apply?** No. A referral commission program is not a financial product or service. It's affiliate marketing. No authorization is needed.

#### 4.5 Multi-Level Marketing / Network Marketing

**Policy:** Meta does not explicitly ban MLM/network marketing ads, but they scrutinize income claims in this category aggressively.

**Risk:** Our program is a single-tier referral program (you refer creators, you earn commission). There is no multi-level structure -- referrers don't earn from other referrers' referrals. This is a critical distinction.

**Mitigation:** Never use MLM terminology (upline, downline, team building, levels, recruit). Frame it as a professional affiliate/referral program. The single-tier structure is our strongest compliance advantage.

#### 4.6 Specific Things That WILL Get Rejected

| Rejection Trigger | Why | How to Avoid |
|-------------------|-----|-------------|
| Mentioning "OnlyFans" anywhere | Adult content association | Use "content creators" only |
| Landing page mentions OF | Meta scans landing pages | refer.arunatalent.com is already clean |
| Income guarantees ("You WILL earn $5K") | Misleading claims | Always use "up to" or conditional framing |
| Before/after income testimonials | Deceptive practices | Use anonymised social proof without specific transformations |
| Sexually suggestive creative | Adult content policy | Professional, corporate-styled imagery only |
| "Easy money" or similar language | Misleading/too good to be true | Frame as professional opportunity |
| Targeting under 18 | Minor protection | Set age floor to 18 |
| Fake urgency ("only 2 spots left!") | Misleading if not true | "Limited spots this quarter" is acceptable if genuinely capacity-limited |
| Using personal attributes ("Are you broke?") | Personal attributes policy | Don't reference the user's financial situation directly |

#### 4.7 Review Timeline and Rejection Response Protocol

**Typical review timeline:**
- Most ads: reviewed within 24 hours (often within 1-4 hours)
- New ad accounts or first-time advertisers: may take up to 48 hours
- Flagged ads (income claims, creator/talent industry): may require manual review, 24-72 hours

**If an ad gets rejected:**

1. **Read the rejection reason carefully.** Meta provides a specific policy citation. Most rejections come with a category (e.g., "Misleading claims", "Adult content").

2. **If the rejection is for income claims:**
   - Soften the language further. Replace "up to $5,000/mo" with "monthly commissions" in the headline.
   - Move specific dollar figures to the primary text body only (not headline or description).
   - Add an explicit disclaimer: "Commission rates shown are potential earnings. Individual results depend on the performance of referred creators."
   - Resubmit.

3. **If the rejection is for adult content association:**
   - Ensure the landing page has zero adult references (it currently doesn't).
   - Remove any creative that could be interpreted as suggestive.
   - Change "creators" to "digital creators" or "online creators" to distance from adult connotation.
   - Request manual review through Ads Manager (Account Quality > Request Review).
   - If still rejected, appeal through Meta Business Help Centre.

4. **If the rejection is unclear or seems automated:**
   - Make no changes. Request manual review immediately.
   - Manual reviewers overturn automated rejections frequently, especially for legitimate businesses.
   - If manual review upholds the rejection, ask for specific guidance on what to change.

5. **Nuclear option:** If repeated rejections occur, create a dedicated landing page at a neutral URL (e.g., arunatalent.com/partner-program) that uses even more sanitised language. Sometimes the issue is the domain/URL pattern triggering an automated flag.

---

## 5. Creative Brief

### Image Guidelines

#### What Works for This Audience (18-22, aspiration-driven)

**Style 1: Lifestyle / Aspirational (Recommended for Testing)**
- Clean, bright lifestyle imagery: laptop on a beach, coffee shop with phone, travel scene
- Show the *result* (freedom, flexibility) not the *work*
- Avoid stock photo feel -- should look like a real person's Instagram story
- Warm colour grading, natural light
- Overlay text on image: large, bold number ("5%") or hook phrase

**Style 2: Data / Math-Forward**
- Dark background (match the refer.arunatalent.com dark theme: #0b0b0d)
- Pink accent text (#f96dcc) for key numbers
- Calculator-style layout showing the math: "1 creator x $100K/mo x 5% = $5,000/mo"
- Clean, minimal, typographic
- Works especially well with Variations 2 and 6

**Style 3: UGC-Style (Highest Engagement Potential)**
- Selfie-style video or photo of a real person (team member or paid UGC creator) talking to camera
- Casual, unpolished aesthetic -- should look like an Instagram story, not an ad
- Person holds phone showing the refer.arunatalent.com landing page
- Text overlay with the hook
- This format consistently outperforms polished creative for 18-22 demographic on Instagram

**Style 4: Branded Minimal**
- Aruna Talent logo + gradient background (pink-to-dark)
- Single powerful headline in large type
- Small "Referral Partner Program" subtext
- Best for retargeting (people who already visited the site recognise the brand)

#### What to Avoid

| Avoid | Reason |
|-------|--------|
| Photos of women in revealing clothing | Adult content flag, instant rejection |
| Screenshots of payment dashboards | Income proof = policy violation |
| Before/after photos of any kind | Misleading claims policy |
| Lamborghinis, mansions, cash | "Get rich quick" signal, will get flagged |
| Red/yellow alert-style urgency graphics | Looks like clickbait, hurts CTR and quality score |
| Aruna Talent website screenshots showing creator names | Privacy + adult content adjacency risk |
| Overly corporate / suit-and-tie imagery | Doesn't resonate with 18-22 audience |

### Canva Template Specifications

Create templates in Canva at these sizes:

| Format | Dimensions | Aspect Ratio | Use Case |
|--------|-----------|-------------|----------|
| Feed (Square) | 1080 x 1080 px | 1:1 | Instagram Feed, Facebook Feed |
| Story / Reels | 1080 x 1920 px | 9:16 | Instagram Stories, Reels, Facebook Stories |
| Landscape | 1200 x 628 px | 1.91:1 | Facebook Feed (alternative) |

**Brand elements for Canva:**
- Background: #0b0b0d (dark) or gradient from #0b0b0d to #16161a
- Accent colour: #f96dcc (pink) for highlights, CTAs, key numbers
- Secondary accent: #d4af37 (gold) for tier/premium elements
- Fonts: Inter (body), Plus Jakarta Sans (headings) -- both available in Canva
- Logo: Use the Aruna Talent logo (white version on dark backgrounds)

**Template layout for each variation:**
1. Top 20%: Hook text (largest font, 1 line)
2. Middle 40%: Image or supporting visual
3. Bottom 40%: Key benefit + CTA text

### Video Creative (If Budget Allows)

**15-second UGC Script Template:**

> [Person talking to camera, casual setting]
>
> "Ok so I just found out about this referral program... basically if you know any content creators, you can refer them to this management agency and they pay you up to 5% of everything she earns. Monthly. Like, every single month. I literally just applied, it took 60 seconds. Link's in my bio -- or DM them 'REFER'."

**Key production notes:**
- Film vertically (9:16) on an iPhone. Do NOT use professional lighting or a studio.
- Subtitles are mandatory (85% of Instagram users watch without sound). Use bold white text with dark outline, or use Canva/CapCut auto-captions.
- Keep it under 15 seconds for Reels placement. Under 30 seconds for Stories.
- The creator should look like the target audience (18-22, relatable, not aspirational-wealthy).

---

## 6. Campaign Launch Checklist

### Pre-Launch (Do Once)

- [ ] **Meta Pixel installed** on refer.arunatalent.com
  - Base pixel code in `<head>` of `index.html`
  - `PageView` firing on load
  - `Lead` event firing on successful form submission
  - Test with Meta Pixel Helper Chrome extension
- [ ] **Meta Business Manager** set up at business.facebook.com
  - Business verified (if not already)
  - @arunatalent Instagram account connected
  - Ad account created and payment method added
- [ ] **Custom Audience created:** upload referrer email list from Google Sheets (for exclusion)
- [ ] **Landing page reviewed:** confirm refer.arunatalent.com has zero mentions of OnlyFans, adult content, or anything suggestive
- [ ] **UTM parameters tested:** visit `refer.arunatalent.com/?utm_source=facebook&utm_medium=paid&utm_campaign=test` and confirm the form captures UTM values (check Google Sheets "Applications" tab after submitting a test application)

### ManyChat Setup (Do Once)

- [ ] **ManyChat account** connected to @arunatalent Instagram
- [ ] **Trigger keywords** set up: REFER, EARN, REFERRAL, AFFILIATE, 5%, INFO
- [ ] **DM flow** built with 4 messages (see Section 3)
- [ ] **UTM links** in DM flow messages confirmed working
- [ ] **User tags** configured for button responses
- [ ] **Live chat notification** enabled for free-text responses
- [ ] **Flow tested** end-to-end: trigger keyword -> messages -> link click -> landing page -> form submit

### Creative Production

- [ ] **6 static image variations** created in Canva (1080x1080 + 1080x1920 for each)
  - Variation 1: Lifestyle image + "$5K/mo" hook text
  - Variation 2: Dark math layout showing the 5% calculation
  - Variation 3: Phone/laptop lifestyle + "No selling. No calls." overlay
  - Variation 4: Social proof numbers layout (9 referrers, $50M+, 19 creators)
  - Variation 5: Warm, friendly image + "Know a creator?" text
  - Variation 6: Stacking math visual (1 referral, 2 referrals, 3 referrals)
- [ ] **1-2 UGC-style videos** filmed (15 seconds, vertical, subtitled)
- [ ] All creative reviewed for compliance: no suggestive imagery, no banned terms, no income guarantees in text overlays

### Campaign Build in Ads Manager

- [ ] **Campaign created:** `ARUNA-REFER-Q1-2026`, Traffic objective, CBO on
- [ ] **Ad Set created:** `US-AU_18-22_Creator-Affiliate-Interests`
  - Age: 18-22
  - Locations: US + AU
  - Interests added (see Section 1)
  - Placements: Advantage+
  - Optimization: Landing Page Views
  - Budget: $30-50/day
- [ ] **6 ads created** within the ad set, one per variation
  - Primary text (use long version for feed, short version for Stories/Reels)
  - Headline, description, CTA button set per variation table
  - UTM parameters appended to destination URL
  - Creative attached (1 image per ad minimum; test video as 7th ad if available)
- [ ] **Second campaign created (if using ManyChat):** `ARUNA-REFER-MC-Q1-2026`, Messages objective
  - Same targeting as above
  - Destination: Instagram Direct
  - Ad copy: use Variation 5 (creator network hook) with "Send Message" CTA
  - Budget: $15-20/day (separate from Traffic campaign)

### Launch Day

- [ ] **All ads submitted for review** (do this the evening before desired launch so they're approved by morning)
- [ ] **Check ad status** next morning -- confirm all approved, note any rejections
- [ ] **Handle rejections** per Section 4.7 protocol
- [ ] **Monitor ManyChat** for incoming DMs -- confirm flow is triggering correctly
- [ ] **Set calendar reminders:**
  - Day 1: Check all ads are running, confirm Pixel is tracking
  - Day 3: First performance check (CTR, CPC, CPM by ad variation)
  - Day 7: Kill underperformers (under 1% CTR after $15+ spend), increase budget on winners
  - Day 14: Build Lookalike audience from Pixel data if 50+ landing page views recorded
  - Day 30: Full performance review, decide on scale budget

### Performance Benchmarks (What Good Looks Like)

| Metric | Target (Testing Phase) | Target (Scaled) |
|--------|----------------------|-----------------|
| CTR (link click-through rate) | 1.5-3.0% | 2.0-4.0% |
| CPC (cost per link click) | $0.50-1.50 | $0.30-1.00 |
| CPM (cost per 1,000 impressions) | $8-15 | $6-12 |
| Landing Page View Rate | 70%+ of clicks | 75%+ of clicks |
| Form Submission Rate | 5-15% of landing page views | 10-20% |
| Cost per Lead (form submission) | $5-15 | $3-10 |
| ManyChat DM Open Rate | 80%+ | 80%+ |
| ManyChat Link Click Rate | 30-50% of opens | 40-60% |

### Weekly Reporting Template

Track these numbers every Monday in a Google Sheet or Notion page:

```
Week of: [date]
Spend: $[amount]
Impressions: [number]
Link Clicks: [number]
CTR: [%]
CPC: $[amount]
Landing Page Views: [number]
Form Submissions: [number]
Cost per Lead: $[amount]
ManyChat DMs Received: [number]
ManyChat Link Clicks: [number]
Top Performing Ad: [variation name]
Worst Performing Ad: [variation name]
Actions Taken: [what was paused, scaled, or changed]
```

---

## Appendix A: Quick-Start Summary

If you want to launch the simplest possible version today:

1. Create a Meta Business Manager account and connect @arunatalent
2. Install Meta Pixel on refer.arunatalent.com (just the base code + PageView event)
3. Create one campaign (Traffic, $30/day)
4. Create one ad set (US + AU, 18-22, interests: affiliate marketing + passive income + entrepreneurship)
5. Create 3 ads using Variations 1, 3, and 6 (passive income, lifestyle, stacking -- they cover three different psychological angles)
6. Use simple Canva graphics: dark background, pink text, one bold headline per image
7. Set UTMs and launch
8. Check back in 3 days, kill the worst performer, double down on the best

Everything else in this document (ManyChat, Lookalikes, retargeting, UGC video) can layer on once the baseline is working.

---

## Appendix B: UTM Parameter Reference

| Source | UTM String |
|--------|-----------|
| Meta ad (traffic) | `?utm_source=facebook&utm_medium=paid&utm_campaign=ARUNA-REFER-Q1-2026&utm_content={ad_name}` |
| Meta ad (messages) | `?utm_source=facebook&utm_medium=paid&utm_campaign=ARUNA-REFER-MC-Q1-2026&utm_content={ad_name}` |
| ManyChat qualified | `?utm_source=manychat&utm_medium=dm&utm_campaign=refer-dm-flow&utm_content=qualified` |
| ManyChat curious | `?utm_source=manychat&utm_medium=dm&utm_campaign=refer-dm-flow&utm_content=curious` |
| ManyChat nudge | `?utm_source=manychat&utm_medium=dm&utm_campaign=refer-dm-nudge` |
| Instagram bio link | `?utm_source=instagram&utm_medium=bio&utm_campaign=referral-bio` |
| Organic Instagram story | `?utm_source=instagram&utm_medium=organic&utm_campaign=story-swipeup` |

These map to the landing page form's existing UTM capture fields (`utm_source`, `utm_medium`, `utm_campaign`) and will appear in the Google Sheets "Applications" tab automatically.
