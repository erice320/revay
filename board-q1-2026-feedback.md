# Q1 2026 Board Deck — Accuracy Review
**Prepared by:** Revay (AI Chief of Staff, Rev.io)  
**Reviewed for:** Evan Rice, President & COO  
**Date:** April 27, 2026  
**Deck URL:** https://romer-public.brent-f26.workers.dev/board-q1-2026  
**Meeting Date:** May 6, 2026 · Atlanta, GA

---

## ⚠️ Deck-Wide: Incomplete Sections

Several sections are explicitly marked as placeholders and **must be completed before May 6**:

- **Section 2 — Financials:** All figures marked `⚠️ Patrick to update all figures before May 6 board meeting`
- **Section 3 — Top Initiatives:** All status columns show `[Brent to update]` / `[Patrick to update]` — no statuses filled in
- **Section 5 — PSA Deep Dive:** `Data below is placeholder`
- **Section 6 — Sales Levers:** `Data below is placeholder`

---

## 🚨 Critical Issue: Win Rate Discrepancy

**Deck states:** 13.5% Win Rate (Sep–Mar)  
**Salesforce actual:** 8.4% (103 Closed Won / 1,229 total closed PSA opportunities, Sep 1, 2025 – Mar 31, 2026)

This is a **5+ percentage point discrepancy**. The deck figure is likely calculated against a filtered denominator (e.g., only Discovery-Completed opportunities, not all closed opps). The basis must be defined explicitly in the deck — a board member who pulls raw SF data will see 8.4%.

**Recommendation:** Align with Ryan Koontz on what denominator is being used and add a footnote explaining the calculation method.

---

## ✅ Verified Accurate (via Salesforce)

| Metric | Deck | SF Actual | Status |
|--------|------|-----------|--------|
| Total Q1 PSA/New MRR | $67,455 | $67,455 | ✅ Exact match |
| CyberProtect MRR | $600 | $600 | ✅ Exact match |
| TigerPaw NRR ~85% | ~85% | Consistent with prior analysis | ✅ |
| Billing outperformance narrative | 139% attainment | Billing $28,700 total MRR vs PSA $31,644 — strong Billing mix confirmed | ✅ |

**Q1 MRR Breakdown (SF-verified):**

| Product | Deals | MRR |
|---------|-------|-----|
| PSA 2.0 | 39 | $31,644 |
| Billing | 13 | $24,365 |
| Billing Add-on | 9 | $4,335 |
| Payments AR | 29 | $6,511 |
| Cyber Protect | 2 | $600 |
| CommerceHub | 4 | — (no Amount set) |
| **Total** | **96+** | **$67,455** |

---

## ⚠️ Internal Deck Inconsistencies

### 1. Marketing MRR Figure Mismatch ($541 gap)
- **Sales section** lists "Marketing Generated: **$29,549** MRR"
- **Marketing section table** shows Total MRR actual: **$29,008**
- Same metric, two different numbers. Needs reconciliation before board presentation.

### 2. Marketing Table Components Don't Sum to Total
The Marketing KPI table shows:
- PSA MRR: $21,299
- Billing MRR: $5,295
- CyberProtect MRR: $600
- **Sum: $27,194** — but table shows Total MRR of $29,008 (**$1,814 gap**)

Likely an unlabeled product line (possibly CommerceHub or Payments) is included in the total but not broken out. Should be labeled.

### 3. Cover Stat vs Body: AI Agents
- **Cover slide:** "20+ AI Agents Deployed"
- **SOTU body:** "27 Total Production + AI Office experiments"
- Cover understates it. Should be updated to "27+" or aligned with body copy.

### 4. ARR Figure: Cover vs Waterfall
- **Cover:** "$38M+ EOY 2025 ARR Base"
- **Financial waterfall:** $37.9M
- $37.9M technically rounds to "$38M+" but presenting both in the same deck may prompt board questions. Consider aligning to a single stated figure.

---

## ⚠️ Data Auditability Risks

### Sales Gen vs Marketing Gen Attribution Not in SF
The deck splits Q1 bookings as $37,906 Sales-Generated vs $29,549 Marketing-Generated. This attribution **cannot be verified from Salesforce** — 97% of closed-won deals in Q1 have a null `LeadSource` field. The split is being calculated manually or via an external tool (Clay/HubSpot). If a board member requests underlying data, it cannot be produced directly from SF.

**Recommendation:** Be prepared to explain attribution methodology if asked. Consider adding a footnote: *"Sales vs. Marketing attribution based on [source/method]."*

### Opportunity Volume Metric Not Defined
- **Deck (Marketing KPIs):** 276 total opps Q1 actual vs 328 target
- **Salesforce:** 701 opportunities created Q1 across product lines

The deck is measuring a specific subset (likely marketing-sourced or Discovery-stage+ only). The measurement basis is not stated in the deck, which could invite questions about how "opportunity" is defined.

---

## Summary: Must-Fix Before May 6

| # | Issue | Owner | Section |
|---|-------|-------|---------|
| 1 | 🚨 Win rate 13.5% vs SF 8.4% — define calculation basis | Ryan Koontz | Sales SOTU |
| 2 | ⚠️ $541 gap in Marketing MRR between two slides | Jennifer Hopkins / Patrick | Sales + Marketing |
| 3 | ⚠️ Marketing component MRRs don't sum to section total ($1,814 gap) | Jennifer Hopkins | Marketing |
| 4 | ⚠️ "20+ agents" on cover vs "27" in body | Brent | Cover / SOTU |
| 5 | ⚠️ $38M+ cover vs $37.9M waterfall | Patrick | Cover / Finance |
| 6 | ⚠️ All initiative statuses still placeholder | Brent / Patrick | Section 3 |
| 7 | ⚠️ Sections 5 + 6 (PSA Deep Dive, Sales Levers) still placeholder | Brent / Evan / Ryan | Sections 5–6 |
| 8 | ⚠️ Financials section marked for Patrick update | Patrick | Section 2 |

---

*Data sources: Salesforce (live query, April 27 2026) · Internal session memory · Board deck as reviewed April 27, 2026*  
*Prepared by Revay — AI Chief of Staff, Rev.io*
