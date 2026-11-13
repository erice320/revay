# GitHub full-year 2026 review: Marketing, Sales, Onboarding, Client Success

Research input for Evan's v2 pre-work. Draft only. Not sent to anyone.

Purpose: show at a granular level, across every department and sub-goal, how Rev.io performed against the 2026 plan. The baseline is the Jan 22, 2026 company One Page Plan, followed by the department sub-goals that sat under it.

Scope: every erice320 repo reachable on November 13, 2026, read for January 1 through November 12, 2026. Sources are the repos' current files plus their git history (dated snapshots, daily refresh commits, commit messages). Numbers are copied as each source states them, with that source's as-of date. Where two sources disagree, both are listed in [Open conflicts](#open-conflicts) and neither is picked. Where no source exists, the cell says GAP.

Locked facts used without reopening: the 2026 bookings target is $853,919 (pacing dashboard). The Fan tracker is the client-fans source of truth. ICP is 10+ employees AND $1K+ MRR, and a $1K+ deal with unknown employee count counts as ICP. TigerPaw is reported separately.

Language: "client" means a Rev.io client. "New Rev.io" replaces the source word "PSA" in prose. Salesforce or Notion labels such as "PSA 2.0" or "PSA Web" are kept in quotes or parentheses so a number can be traced.

## How to read the citations

| Short form | Means |
| --- | --- |
| `rv@abc1234 path` | erice320/revay, file at that commit |
| `RC m/MM-DD` | erice320/Revay-Cursor @ 514c293, `memory/2026-MM-DD.md` (suffixes such as `m/08-24-board-plan` are part of the file name) |
| `RC <path>` | erice320/Revay-Cursor @ 514c293, that path (for example `RC CONTEXT.md`, `RC agents/client-success.md`) |
| `pace@sha path` | erice320/revio-activity-pacing (HEAD f21ca74, Nov 12) |
| `wb@sha path` | erice320/revio-winback-report (HEAD 0fb80a5, Nov 12) |
| `dd@2fb53aa path` | erice320/revio-dealdesk (Oct 13) |
| `legal@sha path` | erice320/revay-legal (HEAD 800dcf4, Mar 3) |
| `bp@3bd8109 index.html` | erice320/board-preview (Apr 30) |
| `ws@2ca4611 path` | erice320/revay-workspace, `main` branch (Aug 15 copy) |
| `wsm@b175654 path` | erice320/revay-workspace, `master` branch (the OpenClaw archive, Feb 17–Oct 2026) |

Frequently cited revay files:

| Name | File |
| --- | --- |
| PACING | `bookings-pacing.html`. Month-end states: Mar 31 `fcf650e`, Apr 30 `7aaad70`, May 29 `20886f8`, Jun 30 `2fa5a25`, Jul 31 `7e45c26`, Aug 31 `e79cfa8`, Sep 30 `5cba16b`, Oct 30 `da436f2`, Nov 12 `177966f` |
| OPS | `ops/ops-snapshot.json`. Month-end states: May 28 `6b8343c`, Jun 30 `1a0781d`, Jul 31 `3b70249`, Aug 31 `8b97b21`, Sep 30 `7ceb86b`, Oct 30 `2d7d9d6`, Nov 12 `90abd40` |
| OFFSITE | `rv@b6595de elt-offsite-h2-2026-evan.html` (July 20 ELT deck) |
| SOL | `rv@19f37fe elt-offsite-h2-2026-sol-feedback.html` (July 9 review) |
| GOALS | `rv@3ebe9a4 elt-offsite-2026-goals-attainment.html` |
| GTMA | `rv@9159bc1 gtm-analysis.html` (data as of Mar 9) |
| DD2 | `rv@5bf8e65 board/dd2-board.html` (May board deep dive, data Apr 28) |
| V2 | `rv@136f256 gtm-alignment-v2.html` (data May 4) |
| SPD | `rv@aade4ce strategic-performance-diagnostic-operating-plan-2026-05-21.html` |
| FLY | `rv@6ce44c5 revenue-flywheel-council-presentation.html` (May 30) |
| VCP | `rv@b03e1a8 board/vcp-data.json` (Apr 16) |
| Q1FB | `rv@621dedb board-q1-2026-feedback.md` (Apr 27) |
| ONE | `rv@54a1007 psa-june-graduation-board-onepager-2026-07-20.html` |
| AUG | `rv@d50117a august-2026-board-deep-dive.html` (final, Aug 17) |
| XCHK | `rv@07663d7 data/board-roadmap/psa-smc-icp-outcome-crosscheck-2026-08-13.json` |
| FB-MMDD / WS-MMDD | `psa-onboarding-forecastbrief-2026-MM-DD.html` / `psa-onboarding-weekly-snapshot-2026-MM-DD.html` (SHA given at each use) |
| PRIOR | `wsm@b175654 data/elt-offsite-prep/goal-attainment-2026-06-30.json`. Targets extracted from the earlier offsite deck "H1_2026_ELTOffsite_ERice.pptx". |
| OBJ | `wsm@b175654 data/elt-offsite-prep/objective-goal-metrics-2026-06-30.json` (Salesforce pull through Jun 30) |
| MKWB | `wsm@b175654 data/elt-offsite-prep/marketing-2026-goals-workbook-2026-06-30.json` (workbook `Marketing_KPIs_7.1.26`) |
| EXPORT | `wsm@b175654 tmp/elt-content-export-2026-07-09/elt-offsite-and-linked-presentations-content-2026-07-09.md` (July ELT deck plus Billy's marketing strategy deck) |

Caveat on provenance. Most figures were produced by Evan's agents from live Salesforce, Notion, Outreach/Kaia, Fireflies and Zendesk pulls. Salesforce pulls before March 3 came from a Developer Edition org with fabricated test data and were thrown out (RC m/03-03). No January 2026 day file exists in any repo: Revay-Cursor memory starts Feb 17 and revay's first commit is Feb 25. January figures here are retroactive values computed later.

---

## Plan vs actual scorecard

### Where the baseline comes from

**The plan document itself is not in GitHub.** No text of a Jan 22, 2026 One Page Plan was found in any reachable repo. I searched for "One Page Plan", "one-page plan", "BHAG", "42.49", "47.99", "50MM", "20%+ EBITDA" and "1,890" in:
- revay: the working tree and `git log --all -S`.
- Revay-Cursor: CONTEXT, MEMORY, BRIEFING, wiki/hot, wiki/log, agents/gtm, and the 645 KB self-improvement log.
- revay-workspace: `master` tree file names, the ELT data files and the July 9 export.

GitHub code search does not index these private repos, and it returned 0 results even for a phrase known to be present. The six company targets below are used **as Evan stated them** in the Nov 13 assignment. Where GitHub corroborates a target, the corroborating source is cited.

**Partial corroboration:**
- **VCP board tracker (Apr 16, updated by Evan):** "Book $854k MRR", "1890+ Marketing Sourced Opportunities", "75+ Raving Fans using new Rev.io", retention 90% gross / 100%+ net, and a Rule of 40 exit target of "50% with ARR 20% YoY growth and 30% exit EBITDA" (VCP).
- **Department targets:** these come from the earlier offsite deck "H1_2026_ELTOffsite_ERice.pptx", extracted into PRIOR, plus the marketing workbook (MKWB) and the July 20 deck goal list (OFFSITE). That earlier offsite's date is not in GitHub.

Status key: **Hit** / **Missed** (period closed) / **Behind** (period still open) / **Partial** / **Not sourced** (no actual in GitHub) / **Dropped**.

### Company targets (One Page Plan)

| # | Target | Plan value | Latest sourced actual (as-of) | Status | Citation |
| --- | --- | --- | --- | --- | --- |
| P1 | MRR bookings | $854K = $853,919 (locked) | $195,691 from 302 deals, Nov 12. That is 22.9% of target and 28% of the $687,063 pace. Council FY forecast about $199K–$221K (Nov 9) | Behind; year closes Dec 31 | PACING `177966f`; RC m/11-09 |
| P2 | ARR by August 2026 | $42.49MM | $36.9M at June 2026 (−$718K, −1.9% YoY); "ARR $38.7M" cited Oct 12. No August figure | Missed on the latest sourced figures | OFFSITE; RC m/10-12 |
| P3 | Run rate by February 2027 | $47.99MM | Run-rate MRT $3.23M a month against a $3.54M H1 target (Jun 30). ×12 is about $38.8M (derived) | Behind; not closable until Feb 2027 | OFFSITE |
| P4 | BHAG: revenue | $50MM+ by EOY 2026 | ARR $38.7M (Oct 12) | Behind | RC m/10-12 |
| P4 | BHAG: EBITDA | 20%+ EBITDA | YTD EBITDA $2.574M, 20.1% through April, "+$326K vs budget because headcount is 33 below budget". No later margin in GitHub | On the bar through April only | SPD |
| P5 | Raving Fans in H1 | 50+ (Fan tracker is source of truth) | The Fan tracker is not in GitHub. Non-authoritative repo counts: 13 at Jun 30; "currently only 5" on Aug 10 | Not sourced from tracker; every repo count is below 50 | OFFSITE; RC agents/client-success.md; conflict 64 |
| P6 | Marketing-sourced opps | 1,890+ | 677 marketing opps created YTD (Amount > 0) at Sep 29, 36% of target (derived). About 75 a month in October | Behind | RC m/09-29-q3-marketing-booked-crosscheck; RC m/10-05 |

### Board levers under the plan (VCP, Apr 16)

| # | Lever | Target | Latest sourced actual (as-of) | Status | Citation |
| --- | --- | --- | --- | --- | --- |
| V1 | Rule of 40 | Q1 23%; exit 50% | End of 2025: 24.9%. No 2026 actual | Not sourced | VCP |
| V2 | Gross / net retention | 90%+ / 100%+ | 86.9% / 96.4% (Sep 21–28) | Behind | RC MEMORY.md; RC m/09-28; conflict 63 |
| V3 | Apollo and Viking releases on scope and time | All | Apollo 1 100%, Apollo 2 86% (under the 90% bar), Apollo 3 94% (Jun 30). Viking 1 contracts & agreements "still beta" (Aug 13) | Partial | OFFSITE; RC m/08-16 |
| V4 | Revii as primary CX | Primary CX | No measured actual | Not sourced | VCP |
| V5 | Payments | "$195k revenue by June '26"; $286.7K MRR gross at exit | No Payments revenue actual in GitHub. Payments bookings $21,503 YTD (Nov 12) | Not sourced | VCP; PACING |
| V6 | Win a $20K+ client | Lever | Removed by Evan Apr 17 | Dropped | RC m/04-16 |

### Sales sub-goals

| # | Sub-goal | Target | Latest sourced actual (as-of) | Status | Citation |
| --- | --- | --- | --- | --- | --- |
| S1 | Q1 bookings | $116,078 (PACING) | $67,455 / 98 deals (58%) | Missed | PACING `7aaad70`; conflict 1 |
| S2 | Q1 by line | New Rev.io $63,000; Billing $23,750; Payments $27,740; RMM $3,750 | $31,644 (50.2%); $28,700 (120.8%); $6,511 (23.5%); $600 (16%) | Billing hit; the rest missed | OFFSITE; OBJ |
| S3 | H1 bookings | $309,154 | $123,827 (40.1%) | Missed | OFFSITE; OBJ |
| S4 | H1 by line | New Rev.io $165,000; Billing $59,392; Odin $6,232; Payments $59,480; RMM $19,050; CommerceHub $8,001 | $71,499; $40,810; $0; $10,918; $600; $0 from 4 records | All missed | OBJ |
| S5 | FY New Rev.io bookings | $480,000 | $113,884 (Nov 12) | Behind | PACING `177966f` |
| S6 | FY New Rev.io logos | 480 | 100 new-logo wins, Jan 1–Nov 12 (about 21%, derived) | Behind | PRIOR; `pace@f21ca74 public/data.json` |
| S7 | FY Billing & Odin | $147,534 | $59,704 (40%), the strongest line | Behind | PACING; conflict 70 |
| S8 | FY Payments | $120,080 | $21,503 (18%) | Behind | PACING; conflict 70 |
| S9 | FY Cyber Protect & CommerceHub | $106,305 | $600 (1%); $0 every month after March | Behind; effectively not started | PACING |
| S10 | Q4 bookings | $295,386 (Finance re-baseline $53,976, Oct 26) | $21,620 / 25 deals (Nov 12) | Behind | PACING; RC m/10-26 |
| S11 | November New Rev.io new-business ramp | $23,024 | $1,000 MTD (Nov 12) | Behind | `pace@f21ca74 public/data.json` |
| S12 | 90-day New Rev.io win rate | 12.8% required for December | 8.0% (19 of 237) | Behind | same |
| S13 | Held rate | 75% | 64.5% | Behind | same |
| S14 | SDR activities per appointment set | 86 | 582 | Behind | same |
| S15 | First-appointment no-show | ≤25% | 57.1% (week of Nov 9) | Behind | same |
| S16 | Channel: Cloud Protection | 78 deals / $78,000 MRR | Cyber Protect $600 from 6 deals YTD (Oct 19) | Behind | PRIOR; RC m/10-19 |
| S17 | Channel: CommerceHub | $40,005 MRR; at least 1 order; 1 Phase 2 offering with touchless provisioning | $0 MRR from 4 records (H1). 0 Phase 2 offerings (Jun 30). No later source | Missed at H1; no later data | OBJ; OFFSITE; VCP |
| S18 | Channel-influenced bookings | $48,000 | No actual | Not sourced | PRIOR |
| S19 | Cross-sell deals (H1 incentive) | 55 | 13 at H1; 23 YTD at Aug 31 | Missed H1 | OFFSITE; RC m/08-31; conflict 23 |
| S20 | "6x+ top-line MRR" transaction | 1 | No actual | Not sourced | PRIOR |

### Marketing sub-goals

| # | Sub-goal | Target | Latest sourced actual (as-of) | Status | Citation |
| --- | --- | --- | --- | --- | --- |
| M1 | Q1 marketing MRR | $50,344 | $29,008 (57.6%) | Missed | MKWB |
| M2 | Q2 marketing MRR | $87,758 | $33,026 (37.6%) | Missed | MKWB |
| M3 | H1 marketing MRR | $138,102 | $62,034 (44.9%) | Missed | MKWB; conflict 69 |
| M4 | H1 leads / opps / pipeline / closed-won | 1,464 / 810 / $685,909 / 160 | 859 / 517 / $526,353 / 81 | All missed | MKWB |
| M5 | H1 by line, marketing MRR | Billing $27,672; New Rev.io $99,000; Cyber Protect $11,430 | $13,075; $46,160; $600 | All missed | MKWB |
| M6 | Q1 marketing opps (VCP) | 342 | 285 | Missed | VCP; MKWB |
| M7 | FY marketing opps (earlier offsite deck) | 855 | 677 at Sep 29 | Behind | PRIOR; RC m/09-29-q3-marketing-booked-crosscheck; conflict 67 |
| M8 | FY marketing bookings (earlier offsite deck) | $129,000 | Marketing Booked $82,570 YTD at Sep 29 (64%, derived) | Behind | PRIOR; same; conflict 69 |
| M9 | New Rev.io inbound leads a month | 8 (Q1) → 15 (H1) → 25 (FY) | No monthly series. New Rev.io web leads 92 in H1 (about 15 a month, derived) | Not sourced as defined | PRIOR; MKWB |
| M10 | Website leads | No target cell | 171 in H1 | Not targeted | MKWB |
| M11 | Tradeshows | 12 planned for Q2 (after 4 in Q1) | No Q2 count | Not sourced | VCP |
| M12 | H2 advocacy (Billy): G2/Capterra/Trustpilot/TrustRadius reviews, top-100 advocate list, 4+ new-platform case studies, 2 Brook events a month, monthly showcase webinar | As listed | No actuals. Earlier: "2/24 reviews from raving fans tapped" (Apr 28) | Not sourced | EXPORT; DD2 |

### Onboarding sub-goals

| # | Sub-goal | Target | Latest sourced actual (as-of) | Status | Citation |
| --- | --- | --- | --- | --- | --- |
| O1 | Q1 New Rev.io graduations | 50+ | 15 | Missed | OFFSITE |
| O2 | H1 New Rev.io graduations | 100+ | 68 (Evan-confirmed total graduated) | Missed | OFFSITE; conflict 51 |
| O3 | "Onboard 50 PSA Web clients by end of Apr '26" | 50 | Not measured as worded. Jan–Apr graduations 15 + 26 = 41 (derived) | Not sourced as defined | VCP; ONE |
| O4 | Graduate within 2–6 weeks depending on size | 14–42 days | About 118 days average, Mar–Aug cohort (New Rev.io expected 60) | Missed | VCP; RC m/09-15 |
| O5 | Kickoff the same or next day (CEO, Mar 18) | 0–1 day | 7-day median close-to-kickoff (May 30) | Missed | RC m/03-24; FLY |
| O6 | Go-live in 1 week for $700 or less with no migration | 1 week | Not measured | Not sourced | RC m/03-24 |
| O7 | Cancellation rate | 15% in 2026 (CEO); "RTS cancel rate" ≤10% for the year (earlier offsite deck) | ICP 16% / non-ICP 41% (Nov 9); cancels 35.7% of New Rev.io onboarding fees (Aug 7) | Behind | RC m/03-24; PRIOR; RC m/11-09; RC m/08-16; conflict 44 |
| O8 | Onboarding vs budget: New Rev.io Web | $427,910 FY | $51,173 in H1 (−$86,737 YTD variance) | Behind | OFFSITE |
| O9 | Onboarding vs budget: Billing | $124,778 FY | $81,770 in H1 (+$15,752) | Ahead at H1 | OFFSITE |
| O10 | Onboarding vs budget: Payments | $95,389 FY | $7,511 in H1 (−$35,058) | Behind | OFFSITE |
| O11 | Security/AV onboarding barriers generally available (Q1) | GA | Not met (Jun 30) | Missed | OFFSITE |
| O12 | Monthly graduation forecasts, Jun–Nov | Each month's original forecast | Jun 6–9 of 19–25; Jul 2 of 20; Aug 0–1 of 11; Sep 0 of 24; Oct 0 of 18; Nov 0 of 18 (to Nov 10) | Missed every month | Weekly series below; conflicts 48–55 |

### Client Success sub-goals

| # | Sub-goal | Target | Latest sourced actual (as-of) | Status | Citation |
| --- | --- | --- | --- | --- | --- |
| C1 | Q1 retention | Gross 90%+ / net 100%+ | 97.3% / 101.5% (owner-confirmed) | Hit | OFFSITE; conflict 63 |
| C2 | H1 retention | Gross 90%+ / net 100%+ | 86.2% / 94.6% | Missed | OFFSITE |
| C3 | FY retention | Gross ≥90% / net ≥100% | 86.9% / 96.4% (Sep 21–28) | Behind | PRIOR; RC MEMORY.md |
| C4 | Client Fans (H1 incentive) | 75 (plan P5 says 50+; VCP says 75+) | Fan tracker GAP. Repo: 13 (Jun 30) | Not sourced from tracker | OFFSITE; conflict 68 |
| C5 | Run-rate MRT (H1 incentive) | $3.54M | $3.23M (91.2%) | Missed | OFFSITE |
| C6 | TigerPaw migration (VCP backlog, Q3/Q4) | Execute | 49 closed/lost migrations = $60,900 MRR (Aug 13); 224 Unleashed accounts in triage (Sep 21) | Behind | RC m/08-16; RC MEMORY.md |
| C7 | Win back $1K+ onboarding cancels | No target set | 1 of 16 recovered ($1,240) | No target | `wb@0fb80a5 public/data.json` |

---

## Large misses: evidence trails

Each trail lists the dated signals in order, then the lesson and what would prevent a repeat. The lessons are read from the sources; they are not new analysis.

### Miss 1: Bookings ($853,919 target; $195,691 at Nov 12)

1. **Feb 24:** "The 5x target requires ~$47,500 MRR/month" for New Rev.io Web, against a run rate of about $9,500. January's win rate was 4.7% (`legal@ae0217d phase1-baseline.html`; `legal@beedc22 phase2-funnel-autopsy.html`).
2. **Mar 23:** Q1 at 44% with 8 days left (RC m/03-23).
3. **Apr 16:** "Book $854k MRR" marked Behind (VCP).
4. **Apr 27:** board win rate 13.5% versus 8.4% in Salesforce (Q1FB).
5. **May 21:** 43.8% of pace; "Late-stage PSA verbal commit is only $500" (SPD).
6. **Jun 3:** 56 of 68 YTD New Rev.io wins were under $1K (RC m/06-03).
7. **Jul 1:** H1 at 40.1%. **Jul 9:** H2 needs 4.0x the H1 pace (OFFSITE; SOL).
8. **Aug 13:** shipped features produced 0 wins among 103 lost $800+ accounts (XCHK).
9. **Sep 28:** council: FY "out of reach" (RC m/09-28).
10. **Oct 14:** the ramp model sets every rep's target above his or her own P90 capacity (`pace@f21ca74 config/targets.json`).
11. **Oct 19:** 0 New Rev.io new logos MTD; 310 SDR calls a day yielding 0.8 sets (RC m/10-19).
12. **Oct 26:** Finance re-baselines Q4 to $53,976 (RC m/10-26).
13. **Nov 12:** 22.9% of target (PACING `177966f`).

**Lesson.** The target assumed about a 5x step-up from the February run rate. The levers that would produce it (show rate, win rate, deal size, product readiness) moved little all year. Adding activity did not substitute for conversion.

**Prevention.**
- Set the target bottom-up from proven conversion rates per rep. The October model did this for the first time.
- Name the conversion changes that must happen and give each an owner.
- Lock definitions and denominators in January. The bookings classification was locked only on Aug 25 (RC m/09-03), and the H1 figure had to be corrected from $105,901 to $123,827 (RC m/07-01).

### Miss 2: Onboarding throughput and cancellations (H1 graduations 68 of 100; zero graduations Sep 1–Nov 10)

1. **Feb 25:** 152 clients with 10 graduated. Two New Rev.io Web SAs at 202% of capacity; "Constraint is product, not people" (`rv@9159bc1 onboarding-analysis.html`; `rv@1f7853b onboarding-team-efficiency.html`).
2. **Mar 6:** handoff scores red at 14–23/100 (RC m/03-06).
3. **Mar 18:** CEO sets a cancellation path from about 25% to 15% (RC m/03-24).
4. **Apr 2:** onboarding head listed as resigned (RC m/04-02).
5. **Apr 23:** Class 5 cancelled, never live; Ravguard churned after 31 days (RC m/04-23).
6. **Q1 close (Mar 31, reported Jun 30):** 15 of 50 (OFFSITE).
7. **May 20:** emergency brief; Product Gap in 34 of 35 high-risk calls (`rv@95ce19f`).
8. **Jul 1:** H1 68 of 100 (OFFSITE).
9. **Jul 8:** 12 of 20 $800+ cancels were Functionality (RC m/07-08).
10. **Jul 28:** onboarding costs more than Sales (RC m/07-28).
11. **Aug 7:** cancels are 35.7% of fees; "churns roughly half of what it sells" (RC m/08-16).
12. **Aug 14:** board: hire a VP of Onboarding; "training and enablement are lagging" (AUG).
13. **Sep 15:** about 118 days against 60 expected (RC m/09-15).
14. **Sep 30:** new VP Onboarding (RC m/09-30).
15. **Oct 12:** 24 graduations versus 96 starts; cap versus pause never answered (RC m/10-12, m/11-02).
16. **Nov 9:** not-billed backlog 96 clients / $95.7K (RC m/11-09).

**Lesson.** Sales volume outran what the product and the team could implement. Product gaps and data migration, not SA effort, drove the stalls and cancellations (`rv@95ce19f`; AUG). The onboarding leadership seat was vacant or in transition from April to September.

**Prevention.**
- Size bookings to graduation capacity.
- Gate deals on workflow fit before close (adopted Jul 20, OFFSITE).
- Make release-readiness enablement routine.
- Use the ICP signal: ICP wins cancel at 16% versus 41% (RC m/11-09).

### Miss 3: Retention (gross 90%+ / net 100%+; latest 86.9% / 96.4%)

1. **End of 2025:** 88.4% / 97.3% (VCP).
2. **Q1:** 97.3% / 101.5% (OFFSITE).
3. **Apr 16:** status "At Risk" (VCP).
4. **May 21:** "Downsell, not logo churn, is the systemic retention problem" (SPD).
5. **May 30:** New Rev.io seats −11.7%; Payments residual −23.4% (FLY).
6. **Jun 25:** 283 cancellation signals in the at-risk channel (`rv@028dd39`).
7. **Jul 20:** H1 86.2% / 94.6%; legacy New Rev.io 78.7% gross, Payments 73.1% (OFFSITE).
8. **Aug 13:** 49 lost TigerPaw migrations worth $60,900; contracts & agreements still beta (RC m/08-16).
9. **Sep 21–28:** 86.9% / 96.4% (RC MEMORY.md; RC m/09-28).
10. **Oct 2:** TigerPaw renewal-date field "exists but is not updated" (RC m/10-02).
11. **Oct 17:** Zendesk cutover went ahead with no SLA evidence recorded (RC m/10-19).
12. **Nov 9:** Spectrotel about $54,158 a month at risk (RC m/11-09).

**Lesson.**
- **Where the loss is:** concentrated in downsell, the legacy New Rev.io line, Payments, and stalled TigerPaw migrations.
- **Why it wasn't caught early:** support data was never joined to revenue (RC m/06-15), so the early warning was anecdotal.

**Prevention.**
- Join support tickets to revenue.
- Fill renewal dates.
- Give each at-risk line a named save motion and owner.
- Tie TigerPaw migration to readiness of the features it depends on.

### Miss 4: Marketing-sourced opps (1,890+) and marketing MRR (H1 44.9%)

1. **Mar 3:** paid media at a 3.3% win rate; spend shifted to LinkedIn (GTMA; `rv@03a32e5`).
2. **Apr 16:** "1890+" marked On Track with a Q1 target of 342 (VCP). The Q1 actual was 285 (MKWB).
3. **Apr 27:** 97% of Q1 wins had null LeadSource (Q1FB).
4. **Q2:** marketing opps 232 of 482 (48.1%) (MKWB).
5. **June:** CMO transition (`rv@9a1d3eb`). **Jun 15:** attribution "proxy-only" (RC m/06-15).
6. **Late July:** marketing is "effectively Ardit plus agency support" (AUG).
7. **Aug 13:** 585 YTD, 57% of pace (`rv@70a5990`).
8. **Aug 24:** paid stays off (RC m/08-24-board-plan-working-doc).
9. **Sep 29:** 677 YTD (RC m/09-29-q3-marketing-booked-crosscheck).
10. **Oct 26:** tradeshow strict ROI $17,287 on $515,686 (RC m/10-26).
11. **Nov 4–6:** team rebuilt; ICP share of marketing opps up to 52% (RC m/11-04, m/11-06).

**Lesson.**
- **Pace and capacity:** 1,890 needed about 158 opps a month. The function lost its leader and much of its team mid-year.
- **Volume versus quality:** the volume target ran against the ICP-quality push.
- **Plan of record:** two different targets coexisted, 1,890+ versus 855 (conflict 67).

**Prevention.**
- One marketing-sourced definition (conflict 33).
- Targets set on ICP opps and won MRR, not raw volume.
- Kill thresholds per channel, as Sol recommended (SOL).
- Leadership continuity.

### Miss 5: Product lines with plan but no motion (Payments, Cyber Protect, CommerceHub)

1. **Q1:** Payments 23.5% and RMM/Cyber 16% (OFFSITE).
2. **Jun 30:** CommerceHub Phase 2 offerings: 0 (OFFSITE).
3. **March onward:** Cyber Protect & CommerceHub at $0 in every month (PACING `177966f`).
4. **Oct 19:** "Payments has no new-logo motion" (RC m/10-19).
5. **H1:** Payments retention 73.1% gross (OFFSITE).

**Lesson.** $226,385 of the $853,919 plan ($120,080 Payments plus $106,305 Cyber Protect & CommerceHub) had no dedicated selling motion visible in GitHub.

**Prevention.** Each budgeted line has an owner, a motion and monthly inspection, or it is cut before the year starts.

### Miss 6: Raving Fans (50+ in H1)

1. **Mar 1:** Reference Fans 25 of 30+ (RC m/03-01).
2. **Apr 28:** "24 Raving Fans Q1 — Q1 goal hit"; 2 of 24 tapped for reviews (DD2).
3. **CS forecast actuals, Jan–Jun:** 15, 15, 25, 24, 25, 13 (RC agents/client-success.md).
4. **Fan tracker page:** blank since May 14 (RC agents/client-success.md).
5. **Jun 30:** 13 of 75 (OFFSITE).
6. **Aug 10:** "currently only 5", program being revamped (RC agents/client-success.md).
7. **Aug 24:** "do not fill Fan %" (RC m/08-24-board-plan-working-doc).
8. **Nov 12:** Fan tracker locked as source of truth (RC CONTEXT.md).

**Lesson.** No stable definition of a fan and no maintained system of record, so the count moved between 5 and 25 depending on who counted.

**Prevention.** Write the definition down, keep one tracker with one owner, and report it monthly next to retention.

### Miss 7: ARR and BHAG ($42.49MM by August; $50MM+ by EOY)

1. **June:** ARR $36.9M, −1.9% YoY (OFFSITE).
2. **Oct 12:** "ARR $38.7M" (RC m/10-12).

GitHub holds no ARR bridge (new, expansion, churn, downsell), so the size of each driver is a GAP. The direction follows from Misses 1, 3 and 5: new bookings at 23% of plan, gross retention under 90%, and payments residual down.

**Prevention.** Keep a monthly ARR bridge, owned by Finance, beside the bookings and retention scoreboards.

---

## What worked and should be scaled

- **Billing & Odin.**
  - Q1 Billing hit 120.8% of target (OFFSITE).
  - YTD is 40% of its annual budget, the best ratio of any line (PACING `177966f`).
  - Billing onboarding was ahead of budget at H1 (+$15,752, OFFSITE).
  - Billing retention was the best line at 89.8% / 98.2% (OFFSITE).
- **ICP deals.**
  - ICP New Rev.io wins average $1,558 versus $783 (RC m/11-02).
  - They cancel at 16% versus 41% (RC m/11-09), and 22 of 22 since the Aug 18 board are active (RC m/11-09).
  - Marketing's ICP share rose from 21% to 52% in three quarters (RC m/11-06).
- **Inbound and website/SEO.**
  - Win rates of 21–32% versus 6.2% for sales self-sourced (GTMA).
  - Website+SEO was the largest Q3 marketing source at $11,848 (RC m/09-29-q3-marketing-booked-crosscheck).
- **Selling to the existing base and migrations.** TigerPaw/migration and client-review sequences replied at 4.5–9.6%, versus about 0% for cold sequences (OPS `7ceb86b`, `2d7d9d6`). Billing-client cross-sells graduated at 13% versus 5% for net new (`rv@9159bc1 onboarding-analysis.html`).
- **Channel-sourced large deals:** AVIT $8,500 (RC m/10-06) and Forward Edge $8,250 at stage 3 (RC m/10-07).
- **Technical presales on the deal.**
  - Readiness was 62% with a pre-sales transcript versus 40% without (RC m/03-11).
  - Tony Mehner's projects graduated at 67% (`rv@46e6f1f`).
  - The September migration guardrail let the first deals pass with technical coverage (RC m/09-25).
- **Fast kickoff, then shorter Q2 durations.** 7-day median to kickoff (FLY). Median duration fell to 48 days in June (ONE).
- **Combined onboarding team and the Onboarding Consultant role** (RC m/06-30).
- **Evan's insistence on live, reconciled data.** He corrected the May denominator (RC m/05-21) and the H1 bookings figure (RC m/07-01), challenged the NetCentra claim (RC m/08-12), and caught the client double-count (RC m/08-12).
- **Win-back visibility and FIN chat.** The win-back report made onboarding cancellations visible to Sales (`wb@0fb80a5`). FIN chat resolved about 91% of 414 conversations (RC m/08-16).

---

## The year in one table

Total bookings, monthly actual versus budget. Source is PACING @ `177966f` (refreshed Nov 12, 8:35 AM CT), all four product lines.

| Month | Actual | Budget | YTD actual at month end | YTD vs budget pace at month end |
| --- | --- | --- | --- | --- |
| Jan | $21.2K | $29.2K | — (page created Mar 23) | — |
| Feb | $14.2K | $33.2K | — | — |
| Mar | $32.0K | $53.7K | $63,555 / 94 deals | 55% (`fcf650e`) |
| Apr | $20.1K | $60.1K | $86,959 / 129 | 49% (`7aaad70`) |
| May | $10.8K | $62.7K | $98,364 / 154 | 42% (`20886f8`) |
| Jun | $25.5K | $75.1K | $121,997 / 189 | 39% (`2fa5a25`) |
| Jul | $18.8K | $75.4K | $142,647 / 225 | 37% (`7e45c26`) |
| Aug | $16.2K | $79.6K | $159,590 / 251 | 34% (`e79cfa8`) |
| Sep | $15.2K | $89.5K | $174,071 / 277 | 31% (`5cba16b`) |
| Oct | $19.1K | $90.9K | $193,208 / 296 | 30% (`da436f2`) |
| Nov (to 12th) | $2.5K | $94.0K | $195,691 / 302 | 28% (`177966f`) |
| Dec | — | $110.5K | | |

Quarter finals on the same page: Q1 $67,455 / $116,078 (58%, 98 deals), Q2 $56,372 / $197,909 (28%, 94), Q3 $50,244 / $244,546 (21%, 85). Q4 as of Nov 12 is $21,620 / $295,386 (7%, 25), needing $5,587 a day. YTD $195,691 is 28% of the $687,063 budget pace and 22.9% of the $853,919 target (22.9% is derived here).

By line at Nov 12:
- **New Rev.io:** $113,884 of $480,000.
- **Billing & Odin:** $59,704 of $147,534. January alone was $13.9K against a $3.2K budget, driven by Global Data Systems at $13,250 on Jan 29 (RC m/03-23).
- **Payments:** $21,503 of $120,080.
- **Cyber Protect & CommerceHub:** $600 of $106,305. That is $250 in February, $350 in March and $0 in every month since.

The FY budget shows $853,919 in every month-end state from Mar 31 to Nov 12.

---

## Marketing

### Month by month

**January.** No contemporaneous record in GitHub.
- **Leads and opps:** retroactively, 199 New Rev.io new-logo opps were created in January (all owners; `pace@f21ca74 public/pipeline.json`).
- **Q1 targets:** from the July 1 workbook, Q1 targets were marketing MRR $50,344, leads 617, opps 328, pipeline $261,020 and closed-won 63 (GOALS).
- **Team capacity:** marketing calendar coverage for Aug 2025 to Feb 2026 ran at 49.4% to 61.1% of an 80% target for every member (`rv@4948eaa calendar-utilization.html`).

**February.**
- **Attribution work:** the Feb 24 GTM series in revay-legal added "Phase 7 Marketing & SDR Attribution" (`legal@6794b35`, commit message).
- **Sources:** the Phase 1 baseline found 1.6% of New Rev.io Web losses went to a competitor, while discovery no-shows were 34.8% (`legal@ae0217d phase1-baseline.html`).

**March.**
- **Paid media shift:** on Mar 2–3, 80%+ of paid moved from Meta to LinkedIn, X and Reddit, aimed at IT MSPs, with "No new work or ad spend" to integrators. Owner: Jennifer Hopkins (`rv@03a32e5 gtm-alignment.html`; RC m/03-03).
- **ICP pivot:** IT MSP primary, Security/AV deprioritized (RC m/03-03).
- **Win rate by source** (GTMA, Mar 9): SEO 32.1%, Rev.io Summit 30.0%, Website 21.2%, Tradeshow 11.9%, Email 8.3%, Sales self-sourced 6.2%, Paid Media 3.3% (4 of 120 opps, $1,770). There were 506 marketing-generated versus 838 sales-generated New Rev.io opps, which the deck called "an inverted funnel".
- **Win-card gallery:** launched Mar 5 with 29 cards (RC m/03-05).
- **Clay plan and RevOps:** Clay plan on Mar 12, with all RevOps shared between Ardit (RevOps Manager) and Billy (Marketing Director) as the "standing operating model" (RC m/03-12).
- **ISC West closes:** NetWatch $3,000, Frontline $660, A&B Security $590 (RC m/03-26).

**April.**
- **VCP lever:** set Apr 16 as "1890+ Marketing Sourced Opportunities", Q1 target 342, status On Track (VCP).
- **Website redesign:** brief on Apr 21; Evan: "As expected I'm getting pushback from Marketing" over SEO (RC m/04-21-seo-visual-changes).
- **Attribution failure:** the Q1 board deck review found "Marketing Generated: $29,549" versus a $29,008 marketing table. 97% of Q1 closed-won deals had a null LeadSource, so the sales-versus-marketing split "cannot be verified" (Q1FB).
- **Board deck (DD2, data Apr 28):**
  - Tradeshows YTD: 312 leads, 125 opps, $128.3K pipeline, $17.7K MRR won, 11.4% opp-to-won, framed as "Rev.io's #1 revenue-generating channel".
  - Paid budget raised from $28.3K to $49K a month for May; "conversions not at target level yet".
  - SEO top-3 keywords: 112.
  - "9 new MSP-focused events" added.
- **April attribution:** 50 of 153 April contacts were marketing-attributed (RC m/04-10).

**May.**
- **Flywheel evidence** (FLY, period not stated): 683 marketing-sourced leads, 423 marketing-created opps, 62 closed-won ($44,128).
- **May marketing MRR:** $6,461, of which $6,300 was New Rev.io (FLY).
- **Social:** the X account had about 400 followers against a 25K+ ambition (RC m/05-28-1810).
- **Joins:** Council round 2 found marketing ROI "unsupported" (RC m/05-30).

**June.**
- **Leadership change:** "Jennifer moving on, Billy stepping into VP Marketing" (`rv@9a1d3eb evan-revio-first-half-2026-docudrama.html`).
- **Attribution blocked:** the HubSpot campaign API returned 403 MISSING_SCOPES, and source-to-won was "proxy-only" as of Jun 15 (RC m/06-02, m/06-15).
- **Evan decision (Jun 12):** marketing joins must use the underlying HubSpot/Salesforce source, campaign, UTM and ID fields. He routed the blockers to Billy (RC m/06-12).
- **Pax8 Beyond:** 55 hot/warm contacts, 19 matched opps (`rv@0f4f80f gtm-alignment.html`).
- **Jun 22 pull:** marketing-sourced closed-won (`Marketing_Source__c`) was $48,429, or 97.8% of a $49.5K H1 marketing bookings target, flagged as needing certification (RC m/06-22).
- **H1 workbook:**
  - Marketing MRR $62,034 of $138,102 (44.9%).
  - Leads 859 of 1,464 (58.7%); website leads 171 with no target.
  - Opps 517 of 810 (63.8%).
  - Pipeline $526,353 of $685,909 (76.7%).
  - Closed-won 81 of 160 (50.6%) (OFFSITE).

**July.**
- **Sol review (Jul 9):** marketing was "activity-driven rather than economics-driven". Q1-to-Q2 attainment fell from 57.6% to 37.6% on MRR, 86.9% to 48.1% on opps, and 65.1% to 41.2% on closed-won count (SOL; RC m/07-09).
- **Offsite (Jul 20):** "Billy Owns The Marketing Plan" (OFFSITE).
- **Events and Summit:**
  - Rev.io sponsors "roughly 35 trade shows a year"; Freeman runs about 25 of them at about $100K a year (`rv@bd06bd3 revio-events-operations-handoff-2026.html`).
  - The Summit had 93 registrants on Jul 23 against a $533.6K budget (`rv@bd06bd3 revio-summit-2026-operations-handoff.html`).
- **Team state:** in the last week of July, marketing was "effectively Ardit plus agency support" (AUG).

**August.**
- **Board (Aug 12–17), Marketing Revamp in six workstreams:** Summit, messaging and ICP, content, assessment-led GTM, sales/marketing alignment, interim leadership (`rv@dbdfaae august-2026-board-deep-dive-gtm-workplan.html`).
- **New org (AUG):**
  - Interim CMO William Collins.
  - VP Marketing, Demand Gen and Product Marketing as planned hires.
  - Ardit (RevOps), Alex Fusco (Field), Alisha Badiani (Events), plus three agencies.
- **Cross-check slide, built and then removed Aug 13** (`rv@70a5990 snapshots/august-2026-board-deep-dive-before-strategic-rollback-20260813T010528Z.html`):
  - 585 marketing-created opps YTD (57% of pace).
  - $68.2K won MRR versus $186.1K pace (37%).
  - 14 of 53 marketing-sourced New Rev.io wins at $1K+.
- **Board plan locks (Aug 24):** paid stays off, no website rebuild, and the Summit becomes the voice-of-client engine (RC m/08-24-board-plan-working-doc).

**September.**
- **Summit:** Sep 1–3, Atlanta.
- **Website review (Sep 14):** "Revise". `/pricing`, `/compare`, `/products`, `/products/revii` and `/products/agenthub` all returned 404 (RC m/09-14).
- **Video and ad experiments:**
  - Parked Sep 6: "pause autonomous video until connected to real production UI" (RC m/09-06-gtm-video-demo-park).
  - The Billing "Sunday" ad was archived Sep 15 after about 12K+ Runway credits (RC m/09-15-billing-sunday-archive-pickup).
- **Marketing Booked MRR at Sep 29** (`Marketing_Source__c` filter; Billy's page and Salesforce matched):
  - YTD $82,570 from 111 wins.
  - July $6,009, Aug $8,332, Sep $6,195; Q3 $20,536.
  - Q3 by source: Website+SEO $11,848, Tradeshow $7,138, Summit $1,400, Paid $50.
  - Marketing share of all wins: 47.5% YTD.
  - Billy's "$722,640 pipeline" was a sum of opps created, not open pipeline. Open marketing pipeline was about $72.8K (RC m/09-29-q3-marketing-booked-crosscheck).

**October.**
- **Naming rule (Oct 1):** external material says "New Rev.io" (RC m/10-01).
- **October forecast (Oct 5):** used `Lead_Direction__c`, which gives marketing a 38.8% share. "Evan has not chosen one as the standing definition" (RC m/10-05).
- **Retainers (Oct 12):** council ask to hold website/SEO retainers until after the Nov 10 board (RC m/10-12).
- **Campaigns and leadership (Oct 19):** acquisition campaigns cut from 5 to 3; VP Marketing Kate Cohen starts Oct 27 (RC m/10-19, m/11-05).
- **Tradeshow ROI (Oct 26):**
  - 29 costed shows (Oct 2024–Nov 2025) cost $515,686.
  - Won MRR was $17,287 strict, $36,991 by rep sub-source, and $41,845 influenced, so payback is about 30, 14 or 12 months.
  - Seven shows produced zero in every view.
  - No 2026 show has cost in Salesforce; September financials alone show $104K of trade shows (RC m/10-26).

**November.**
- **Open ask (Nov 2):** freeze new event and demand commitments until the ROI analysis lands. Still unanswered (RC m/11-02).
- **Team in place by Nov 4:** Kate Cohen, Alisha Badiani, Alex Fusco, Ardit Berdyna, William Collins. The tagline "Turn the services you deliver into the revenue you collect" went live (RC m/11-04, m/11-05).
- **Board treatment (Nov 6):**
  - Marketing moves to slide 2 and tradeshow now counts as marketing-sourced.
  - Marketing's ICP share of created opps rose from 21% in Q1 to 37% in Q2, 50% in Q3 and 52% in October.
  - Since the Aug 18 board, marketing and tradeshow opps are 49% ICP versus 66% for sales outbound (RC m/11-06).
- **Sequences (Nov 12):** top Outreach sequences reply at 0–0.2% (MSP Sequence Q4'26: 2,745 enrolled, 0.2%) (OPS `90abd40`).

### What worked
- **Inbound sources:** inbound and Summit convert at 21–32% versus 6.2% for sales self-sourced (GTMA).
- **Website+SEO:** the largest Q3 marketing source at $11,848 (RC m/09-29-q3-marketing-booked-crosscheck).
- **Marketing ICP mix:** improved every quarter, from 21% to 52% (RC m/11-06).
- **Rebuild speed:** the team went from "Ardit plus agency support" in late July to a full roster by Nov 4 (AUG; RC m/11-04).

### What failed
- **Paid media:** 3.3% win rate in March (GTMA). By September paid had produced $50 of Q3 booked MRR (RC m/09-29-q3-marketing-booked-crosscheck).
- **Tradeshows:** $515,686 of logged cost against $17,287 of strict won MRR (RC m/10-26). This contradicts the April board's "#1 revenue-generating channel" claim (DD2).
- **H1 targets:** every H1 marketing target with a number was missed (OFFSITE).

### Recurring problems
- **Attribution never closed.** It was null LeadSource in Q1 (Q1FB), HubSpot 403 in June (RC m/06-15), and still two competing filters in October (RC m/10-05).
- **Leadership turnover.** Hopkins, then Billy, then interim Collins, then Cohen, all in one year (sources in [Open conflicts](#open-conflicts), item 21).

### Handoffs to Sales and where they broke
- **No-shows.** SDR-booked meetings no-showed at 40–75% (GTMA). Discovery no-show is the top loss reason all year; see Sales.
- **Volume over quality.** About 75 marketing opps a month by October (RC m/10-05), but only 14 of 53 marketing New Rev.io wins were $1K+ by Aug 13 (`rv@70a5990` snapshot).

---

## Sales

### Month by month

**January.**
- **Bookings:** $21.2K against $29.2K; New Rev.io $5.7K against $17K (PACING).
- **Win rate:** New Rev.io Web won 10 of 214 closed (4.7%), the lowest on record (`legal@beedc22 phase2-funnel-autopsy.html`). By all products, January was 7.7% (DD2).
- **Activity:** 9,401 activities, 139 sets, 79 held, 8 wins / $4,740 new-logo (`pace@f21ca74 public/data.json`). OPS logged 110 meetings (`6b8343c` monthlyTrends).

**February.**
- **Bookings:** $14.2K against $33.2K (PACING); Salesforce-verified February total $14,218 (RC m/03-04).
- **Baseline (Feb 24):**
  - New Rev.io Web since its Jun 29, 2025 launch: 115 wins, $75,940 MRR, $660 average, 9.2% win rate.
  - "The 5x target requires ~$47,500 MRR/month" against a run rate of about $9,500.
  - Rep win rates spread from 20.9% to 5.3% (`legal@ae0217d phase1-baseline.html`).
- **Apollo 2 unlock list:** 96 deals and $99,564 MRR "fully unlocked" by Apollo 2 (`legal@0b31d8b apollo2-deal-unlock.html`).

**March.**
- **Bookings:** $32.0K against $53.7K, the best month of the year (PACING).
- **GTM alignment (Mar 3):**
  - ICP pivot to IT MSP.
  - SDR comp moved to "meetings complete", not meetings set (`rv@03a32e5 gtm-alignment.html`).
  - Two MSP SDRs plus four integrator SDRs (RC m/03-03).
- **Pacing dashboard:** launched Mar 23; Q1 stood at 44% that day ($49,110 of $111,328; RC m/03-23).
- **Q1 close:** $67,455 against $116,078, 98 deals (PACING `7aaad70`).

**April.**
- **Bookings:** $20.1K against $60.1K (PACING).
- **VCP lever (Apr 16):** "Book $854k MRR" status Behind. Plan: 12 tradeshows in Q2, cut no-shows, re-engage Apollo-gap losses, sell New Rev.io/RMM to 55 existing clients (VCP).
- **Board accuracy (Apr 27):** the Q1 deck said a 13.5% win rate; Salesforce said 8.4% (Q1FB).
- **Board deck (DD2, data Apr 28):**
  - April MTD win rate 19.5%.
  - Discovery no-show 20.8%, down from 32.7% in February.
  - Rox and Retell prospecting tools proposed; Revii standalone wedge.
- **Activity peaks:** 204 sets and 15 wins (`pace@f21ca74 public/data.json`).

**May.**
- **Bookings:** $10.8K against $62.7K (17%), the weakest month against budget (PACING).
- **May 4 (V2):**
  - Loss Reason blank on 39% of losses.
  - Top closer Joe Abarno "departed in Q1" (see conflict 52).
  - The "Apollo 2 Is Live" battlecard was Not Started.
- **May 21 (SPD):**
  - YTD $94,928 was 43.8% of pace.
  - New Rev.io LTV/CAC below 3:1, payback over 36 months.
  - Recommended shifting "from demo volume to controlled mutual evaluation".
- **Ops command center:** launched May 4 (`rv@12ec7ed`).

**June.**
- **Bookings:** $25.5K against $75.1K, with New Rev.io at $19.7K, its best month (PACING).
- **Minimum-fee decision (Jun 3):**
  - Evan asked for analysis of raising the minimum from $500 to $1,000 and confirmed a 30-day grace period. YTD New Rev.io had 68 wins, 56 of them under $1K, ARPU $769.69, and price drove only 46 of 743 losses.
  - His rationale: $500 lets weak-commitment buyers try Rev.io casually.
  - Source: RC m/06-03.
- **Contract end dates (Jun 11):** Evan said "every call that mentions a contract and end date must be systematically logged" (RC m/06-11).
- **AVIT:** closed $8,500 on Jun 26 (Channel; RC m/10-06).
- **H1 close:** $123,827 against $309,154 (40.1%), 226 records (OFFSITE).
- **Placeholder amounts:** $1,000 opp amounts start in June, on 66 of 141 New Rev.io opps (`pace@f21ca74 public/pipeline.json`).

**July.**
- **Bookings:** $18.8K against $75.4K (PACING).
- **H1 correction (Jul 1):** H1 corrected from cached $105,901 to live $123,827 (RC m/07-01).
- **Sol math:** H2 needs $82,723 a month (4.0x the H1 pace) (SOL).
- **ELT offsite (Jul 20), Evan's choices (OFFSITE):**
  - Start: "a new definition of qualified buyer".
  - Stop: "Chasing the number / short-term mindset".
  - Lessons: "Bookings are not the finish line"; "ICP must become operational, not aspirational".
  - Adopted Scale/Fix/Narrow/Stop, a pre-close workflow-fit gate, and a weekly retained-revenue review.
- **Activity:** OPS logged 347 meetings (`8b97b21` monthlyTrends).
- **Costs (Jul 28):** Onboarding cost $1,873,377 versus Sales $1,704,834, at 23 people each (RC m/07-28).

**August.**
- **Bookings:** $16.2K against $79.6K (PACING).
- **Board analysis, Aug 10–13, later cut from the deck:**
  - 103 New Rev.io accounts at $800+ MRR lost on missing capabilities ($194.0K) produced 0 wins after those features shipped.
  - The only two post-Apollo wins were $575 and $620 (`rv@d95df04 End of Day August 13th.html`; XCHK).
- **Board plan (Aug 24):**
  - North star: "live, paying, referenceable Raving Fans in Core ICP".
  - Priority stack: live Core ICP, booked-not-live, TigerPaw churn.
  - Core ICP was still an open Evan decision (RC m/08-24-board-plan-working-doc).
- **Classification lock (Aug 25):** the pacing dashboard is the deal-classification reference through Dec 31 (RC m/09-03).
- **Cross-sell (Aug 31):** Evan's cross-sell definition gives 23 YTD (RC m/08-31).
- **Activity peak:** 24,510 activities in the month (`pace@f21ca74 public/data.json`).

**September.**
- **Bookings:** $15.2K against $89.5K (PACING).
- **Migration guardrail (Sep 24):** Legacy Migration deals of $1K+ are held until a technical resource has been on a recorded call (RC m/09-24).
- **Growth Council first run (Sep 28):** FY "out of reach (the $707K gap needs about 9x YTD pace)". Consensus: "convert/protect existing revenue (not demand spend)" (RC m/09-28).
- **Q3 close:** $50,244 against $244,546 (21%) (PACING).

**October.**
- **Bookings:** $19.1K against $90.9K (PACING). $14,250 of October was two COEO deals (RC m/11-02).
- **New logos:** New Rev.io new-business October was $1,500 (`pace@f21ca74 public/data.json`).
- **Deal desk (Oct 13):** live; converting Classic clients "can't pay less than on Classic" (RC m/10-13; `dd@2fb53aa public/config.js`).
- **Oct 14 decisions:**
  - "Rev.io no longer sells $500 New Rev.io deals", floor not set.
  - Growth goal: New Rev.io only, from the June high of $19,735 to about 2x by April 2027 and 3x by October 2027.
  - Every rep's target sits above his or her P90 capacity (RC m/10-14; `pace@f21ca74 config/targets.json`).
- **Readout (Oct 19):** SDR calls about 310 a day but about 0.8 first appointments a day. 36 of 43 late-October opps were flat $1,000 placeholders. Recommendation: create the opp only after a held discovery (RC m/10-19).
- **Channel (Oct 23):** draft says New Rev.io's direct-only sales to IT MSPs is something "Evan considers not working". Not decided (RC m/10-23).
- **Q4 target:** Finance re-baselined it to $53,976 (RC m/10-26).

**November.**
- **Scrub (Nov 2):** open opps cut from 204 to 115 (RC m/11-02).
- **Teams (Nov 3):** sales split into Team Green and Team Blue (`pace@c879e59 README.md`; RC m/11-04).
- **TigerPaw (Nov 3):** "always reported separately, never blended into win rates" (RC m/11-03).
- **ICP (Nov 5):** unified ICP rule (RC m/11-05). October ICP close rate was 2 of 31 (6.5%) (RC m/11-06).
- **Nov 9:** YTD $194,968 / 299; council FY forecast about $199K to $221K (RC m/11-09).
- **Nov 12:** YTD $195,691 / 302 (PACING `177966f`).

### Funnel numbers for 2026, New Rev.io new business only

Source: `pace@f21ca74 public/data.json` and `public/pipeline.json`; totals computed from the file.

| Month | Activities | Sets | Held | Opps (roster) | Bookings | Wins |
| --- | --- | --- | --- | --- | --- | --- |
| Jan | 9,401 | 139 | 79 | 114 | $4,740 | 8 |
| Feb | 9,980 | 166 | 81 | 109 | $7,730 | 12 |
| Mar | 15,763 | 173 | 102 | 104 | $15,270 | 13 |
| Apr | 15,780 | 204 | 118 | 110 | $11,130 | 15 |
| May | 13,471 | 151 | 114 | 107 | $6,265 | 10 |
| Jun | 13,713 | 192 | 113 | 138 | $17,665 | 14 |
| Jul | 17,724 | 128 | 82 | 98 | $9,330 | 8 |
| Aug | 24,510 | 133 | 93 | 85 | $8,122 | 9 |
| Sep | 22,684 | 131 | 74 | 83 | $8,650 | 8 |
| Oct | 21,414 | 114 | 78 | 68 | $1,500 | 2 |
| Nov (to 12th) | 7,222 | 51 | 20 | 22 | $1,000 | 1 |
| **Total** | 171,662 | 1,582 | 954 | 1,038 | $91,402 | 100 |

Same file:
- **Losses:** 1,175 in 2026; 655 (55.7%) died at stage 1 Discovery Scheduled.
- **Top loss reasons:** Discovery No Show 359 ($324,745), Not the Right Time 201, Software Missing Capabilities 115.
- **Deal size:** 30 of 100 wins are $1K+ (the ICP proxy; employee count is not in the file); median win $680.
- **Levers at Nov 12:** 90-day win rate 8.0% (19 of 237) versus 12.8% required; held rate 64.5% versus 75%; SDR activities per set 582 versus 86.

### What worked
- **June showed the ceiling:** New Rev.io $19.7K (PACING), AVIT $8,500 via Channel (RC m/10-06), 14 new logos (`pace@f21ca74`).
- **Migration and client-base sequences** replied at 8.0% ("Tigerpaw/PSA Migration") and 9.6% (CBR Sequence Q4'26), versus about 0% on cold integrator and MSP sequences (OPS `7ceb86b`, `2d7d9d6`).
- **ICP deals:** larger and stickier. ICP average $1,558 versus $783 (RC m/11-02), and ICP clients cancel at 16% versus 41% (RC m/11-09).

### What failed
- **Activity without output:** activity rose 2.6x from January to August while sets fell from 204 in April to 114 in October (`pace@f21ca74`).
- **Win rate after March:** never recovered. October new-logo wins were 2 of 86 closed (`pace@f21ca74 public/pipeline.json`).
- **The Apollo 2 win-back:** 4 wins / $4,475 recaptured by Apr 28 (DD2), and 0 among $800+ accounts by Aug 13 (XCHK).
- **The Q4 forecast:** re-cut five times in four weeks, from $40K base to $33K base (RC m/10-12 to m/11-09).

### Recurring problems
- **Discovery no-shows:** the top loss reason in February, March, May, July and November (`legal@ae0217d`; GTMA; SPD; `rv@0f4f80f`; `pace@f21ca74`).
- **Loss data quality:** loss data is thin, with Loss Reason 39% blank in May (V2) and competitor fields nearly empty (`pace@f21ca74 public/pipeline.json`).
- **Selling the roadmap:** Novalera was promised NinjaOne "by end of February" (RC m/04-23). The issue returns in the Oct 7 rule to "only claim live, demoable GA features" (RC m/10-07).

### Handoffs to Onboarding and where they broke
See [How it all fits together](#how-it-all-fits-together), stages 4 and 5.

---

## Onboarding (including RTS)

RTS is used throughout as a Notion onboarding status (with Graduated, Canceled, On Hold, "RTS - Functionality", "RTAM - Functionality"). No file in any repo defines the acronym or gives an RTS or go-live time metric (RC agents/onboarding.md; RC m/09-11-evan-list-match). Go-live is tracked only as kickoff-to-graduation (New Rev.io) and kickoff-to-activation (Billing) (RC m/09-15).

### Month by month

**January.** No contemporaneous record. Retroactively, Revolve Tech cancelled Jan 12 and Global Data Technologies cancelled New Rev.io Jan 23 but stayed on Billing (`wb@0fb80a5 config/accounts.json`). Apollo 1 shipped Feb 1 (`rv@7e088eb onboarding-webonly.html`).

**February.**
- **Book on Feb 25** (`rv@9159bc1 onboarding-analysis.html`):
  - 152 clients: 10 graduated (6.6%), 34 cancelled (22%, $24,356 MRR), 32 on hold.
  - Median kickoff to graduation 77 days (n=9).
  - All 486 milestones "Not Started".
  - Billing cross-sells graduated at 13% versus 5% for net new.
- **Capacity:** two New Rev.io Web SAs at 202% of capacity; "Constraint is product, not people" (`rv@1f7853b onboarding-team-efficiency.html`).
- **Wrike:** 110 Web projects with 3 graduated (2.7%); cancel rate 19.8% versus a 15% target (`rv@46e6f1f onboarding-process-analysis.html`).
- **Leadership:** Fran Timothy is onboarding head (RC m/02-27).

**March.**
- **Handoff scores (Mar 6):** every SA's early-stage score, which measures sales-handoff quality, was red at 14–23/100 (RC m/03-06).
- **Discovery data (Mar 11):** accounting system, payment processor and user count are "almost NEVER captured in sales process". Readiness was 62% with a pre-sales transcript versus 40% without (RC m/03-11).
- **CEO parameters (Mar 18), seven in all:**
  - Kickoff the same or next day.
  - One-week go-live for $700 or less with no migration.
  - Cancellation from "current ~25%" to 15% (RC m/03-24).
- **Breaches:** GuentherTech kickoff was 19 days overdue on Mar 25; Frontline was promised "early next week" (RC m/03-26).
- **Briefs:** pre-filled sales-to-onboarding briefs started Mar 26 (`rv@9159bc1 brief-data-sources.html`).

**April.**
- **Leadership:** Fran Timothy listed as "(resigned)" by Apr 2 (RC m/04-02).
- **VCP (Apr 16):** goal "Onboard 50 PSA Web clients by end of Apr '26". Evan rewrote the unlock to "graduate clients within 2-6 weeks depending on size" (VCP; edit in `rv@1cc916f`).
- **First Tuesday report (Apr 22):** 42 active accounts, 4 Critical, 18 High; Halle Taylor held all 4 critical (`rv@30b2117 tuesday-onboarding-report.html`).
- **Cancellations (Apr 23):**
  - Class 5 cancelled after 4.5 months, never live.
  - Ravguard churned 31 days after the win.
  - Named pattern: "selling the roadmap" (`rv@76f5f66 halo-churn-brief.html`; RC m/04-23).
- **April graduations:** 26 (ONE).

**May.**
- **Intake channel (May 15):** Evan renamed the intake chat "Onboarding Intake - Sales Briefs" so Billing and New Rev.io share one channel (RC m/05-15).
- **Emergency brief (May 20):**
  - 26 May forecast, 0 actual graduation dates.
  - In the 35 highest-risk calls: Product Gap 34/35, Data Migration 31/35, Billing/QB 29/35.
  - "Not primarily an SA effort problem… system-level conversion failure" (`rv@95ce19f psa-onboarding-emergency-brief-2026-05-20.html`).
- **Flywheel (May 30):** close-to-kickoff median 7 days; kickoff-to-graduation median 79 days (p75 134) (FLY).
- **May graduations:** 12 (ONE), but see conflict 34.

**June.**
- **First won-to-live join (Jun 2):** 136 clients (RC m/06-02).
- **Briefs (Jun 24):** Evan required editable briefs "because Onboarding will push back on Sales for incomplete data" (RC m/06-24).
- **June graduations:** 9 against a commit of 19 (ONE), or 6 (WS-0629 `7523f3b`); see conflict 35.
- **Q2 story (Jun 30), Evan:**
  - Billing and New Rev.io onboarding combined into one team.
  - SA and PM merged into "Onboarding Consultant".
  - Q3 focus: native invoicing over QuickBooks, fast TigerPaw migrations, QuickBooks 2-way-to-1-way re-implementation, cross-training (RC m/06-30).
- **H1 graduations:** 68 of 100, Evan-confirmed (OFFSITE).

**July.**
- **Dashboard on Jul 1:**
  - New Rev.io active 53, graduated 68, on hold 11, RTS 17, cancelled 91.
  - Billing active 23, graduated 38, cancelled 4 (RC m/07-01).
- **Budget variance:** New Rev.io Web −$86,737 YTD against onboarding budget (OFFSITE).
- **Cancel analysis (Jul 8):** Evan asked for every cancelled New Rev.io onboarding at $800+. Result: 20 accounts and $27,853, 12 of them "Functionality" (RC m/07-08).
- **Durations (Jul 20):** median kickoff to graduation fell from 111 days (April) to 92 (May) to 48 (June) while volume fell (ONE).
- **July graduations:** 2 (WS-0727 `3ecdea2`).
- **Workflow-fit gate:** pre-close New Rev.io gate adopted (OFFSITE).

**August.**
- **Feedback (Aug 12):** 60 days of onboarding-call feedback; integrations 23 clients / 62 mentions, data import 19 / 63 (RC m/08-12).
- **Board (Aug 14–17):**
  - Hire a VP of Onboarding.
  - "training and enablement are lagging".
  - Of 17 workflow examples, 1 fully met (AUG).
- **Book (Aug 26):** open 89, assigned 79, unstaffed 10 (RC m/08-26-domain-bots-pickup).
- **August graduations:** 0 (WS-0824 `ef8ead1`) or 1 (FB-0825 `57b8121`).

**September.**
- **Book (Sep 11):** 174 live non-cancelled clients, 73 of them Graduated (RC m/09-11-evan-list-match).
- **Duration (Sep 15):** the Mar–Aug graduated cohort averaged about 118 days against about 75 expected; New Rev.io 60 expected versus about 118 (RC m/09-15).
- **Commitment mechanisms (Sep 23):** deposit and no-show-fee deck, on hold (RC m/09-23).
- **Leadership (Sep 30):** new VP Onboarding Andy Thorson (RC m/09-30).
- **September graduations:** 0. The original forecast of 24 fell to 5 (WS-0928 `4d50efc`).

**October.**
- **Capacity (Oct 12):** council "cap New Rev.io onboarding starts to capacity (24 grads vs 96 starts)". Evan had not answered cap-versus-pause by Nov 2 (RC m/10-12, m/11-02).
- **Cancellation:** DFW Security ($2,970) cancelled (WS-1005 `7543021`).
- **October graduations:** 0. The snapshot ledger did not change for three weeks (WS-1019 `656e8b4`, WS-1026 `3de448e`).

**November.**
- **Graduations:** 0 through Nov 10 (FB-1110 `ea8c66a`).
- **Backlog (Nov 9):** not-billed backlog 96 clients / $95.7K, up from 90 / $83.8K. Andy Thorson to triage by Nov 13 (RC m/11-09).
- **ICP:** ICP clients cancel at 16% versus 41% non-ICP; 22 of 22 ICP clients since the Aug 18 board are active (RC m/11-09).

### Weekly graduation series, May to November

Derived from the forecast briefs and weekly snapshots. The snapshot ledger holds every row; the brief shows only active rows from Jun 16 on.

| Month | Original forecast (snapshot) | Graduated in month (snapshot) | Actual dates (last brief) | Source |
| --- | --- | --- | --- | --- |
| May | 17 | 4 ($3,019) | 2 | WS-0526 `18fc49e`; FB-0526 `86ebecb` |
| Jun | 25 | 6 ($3,445) | 6 | WS-0629 `7523f3b`; FB-0630 `9a2c9be` |
| Jul | 20 | 2 ($2,844) | 2 | WS-0727 `3ecdea2`; FB-0728 `d003a84` |
| Aug | 11 | 0 | 1 | WS-0824 `ef8ead1`; FB-0825 `57b8121` |
| Sep | 24 | 0 | 0 | WS-0928 `4d50efc`; FB-0929 `28c6048` |
| Oct | 18 | 0 | 0 | WS-1026 `3de448e`; FB-1027 `4cf25dc` |
| Nov (to 10th) | 18 | 0 | 0 | WS-1109 `aca904e`; FB-1110 `ea8c66a` |

Over the same span, the New Rev.io client dashboard grew from 201 rows (May 20) to 326 (Nov 10) (`rv@55e9e87` historical; FB-1110 `ea8c66a`).

### What worked
- **Close-to-kickoff:** fast, at a 7-day median (FLY).
- **Durations in Q2:** median duration for completed projects fell to 48 days in June (ONE).
- **Combining teams:** combining Billing and New Rev.io onboarding and creating the Onboarding Consultant role (RC m/06-30).
- **Migration guardrail:** its first passes, JES and Sons on Sep 25 (RC m/09-25).

### What failed
- **Graduations:** stopped after July (series above).
- **Cancellations:** the New Rev.io onboarding book showed Cancel 107 / $74,478, 35.7% of $208.7K fees, plus RTS 24 / $19,653 as of Aug 7. A Will/Evan note: "new platform churns roughly half of what it sells" (RC m/08-16).
- **Forecasts:** missed every month from May to November (series above).

### Recurring problems
- **The same product gaps all year:** integrations/QuickBooks, data import, quoting/CPQ, dispatch and billing/tax. They show up in Feb (`rv@e1173f8 psa-transcript-analysis.html`), May (`rv@95ce19f`), Aug (RC m/08-12) and Nov (FB-1110 `ea8c66a`).
- **SA load concentration:** Halle Taylor had 4 of 4 critical accounts in April (RC m/04-22) and 5 critical calls in May (V2).
- **Leadership churn:** Fran Timothy, then Bill Hayes (August), then Andy Thorson (October); see conflict 47.

### Handoffs and where they broke
See [How it all fits together](#how-it-all-fits-together), stages 5 to 7.

---

## Client Success (adoption, retention, expansion, fans)

### Month by month

**January.**
- **Retention baseline:** gross 88.4% and net 97.3% at end of 2025 (VCP).
- **CS forecast actuals for January:** Billing T1 points 1,091 forecast / 1,178 actual, TigerPaw 607 / 513, incident tickets 20, Fans 15 (RC agents/client-success.md).

**February.**
- **Support history (Feb 25):** the historical CS analysis showed 7,218 SLA tickets with CSAT at 0 responses. The "Client Churn" queue was unused (`rv@2e7a4c6 cs-analysis.html`).
- **Leadership:** Will Steiner is VP CS (RC m/02-27).
- **CS forecast:** February Fans 15 (RC agents/client-success.md).

**March.**
- **Scorecard:** Reference Fans 25 against 30+ (RC m/03-01).
- **Adoption gap:** a billing client of about $905K MRR had dormant New Rev.io because of the billing-to-New Rev.io sync gap (RC m/03-05).
- **TigerPaw base:** about 650 not migrated, about 540 real targets, "Retention priority, not new bookings" (GTMA).
- **Q1 retention:** later owner-confirmed at gross 97.3% and net 101.5% (OFFSITE).
- **CS forecast:** March Fans 25 (RC agents/client-success.md).

**April.**
- **VCP (Apr 16):** retention "At Risk", plus a "75+ Raving Fans using new Rev.io" unlock (VCP).
- **Class 5 (Apr 23):** goal "protect $2,250 billing, NOT save PSA". Evan made save calls through Apr 25 (RC m/04-23; V2).
- **Fans:** "24 Raving Fans Q1 — Q1 goal hit"; "2/24 reviews from raving fans tapped" (DD2).
- **CS forecast:** April Fans 24 (RC agents/client-success.md).

**May.**
- **Retention driver (May 21):** "Downsell, not logo churn, is the systemic retention problem". April net revenue was $3.191M, $186K below budget. 5,108 Zendesk tickets since Mar 22, with Onboarding the second-largest queue (1,451) and CSAT "incomplete/sparse" (SPD).
- **Roadmap (May 28):** Evan made client-experience roadmap items a priority (RC m/05-28-1748).
- **Flywheel guardrails (May 30):** gross 87.9% and net 98.3% trailing 12 months; New Rev.io seats −11.7%; Payments residual −23.4% (FLY).
- **CS forecast:** May Fans 25 (RC agents/client-success.md).

**June.**
- **Fans framing (Jun 12):** Evan reframed the support story from "cost of keeping" to turning clients into fans (RC m/06-12).
- **Joins (Jun 15):** no Zendesk-to-revenue crosswalk, and no margin or cost-to-serve (RC m/06-15).
- **At-risk brief (Jun 25):** 548 root posts and 283 cancellation signals. Themes: support 275, Billing/QBO 214, competitor 196, price 180, onboarding failure 138 (`rv@028dd39 psa-tigerpaw-churn-brief-2026-06-25.html`).
- **H1 incentives:** cross-sell 13 of 55, Client Fans 13 of 75, run-rate MRT $3.23M of $3.54M (OFFSITE).

**July.**
- **H1 retention (Jul 20, final June package):**
  - Gross 86.2% and net 94.6% against 90%+ and 100%+.
  - By line: Billing 89.8/98.2, legacy New Rev.io (source label: PSA Legacy) 78.7/84.9, New Rev.io Web about 103/110, Payments 73.1/83.7.
  - ARR $36.9M, −1.9% YoY (OFFSITE).
- **Source of truth:** Will's retention and fans dashboards named the source of truth; they are external and not in GitHub (OFFSITE).
- **Meeting cancelled:** Will cancelled the Jul 26 Retention Analysis Meeting (RC m/07-26).

**August.**
- **Aug 3 retention meeting:** YTD net 95.7% and gross 91.3%; TigerPaw February cohort 92.3% (RC m/08-16).
- **Aug 13 Will/Evan 1:1:**
  - 49 closed/lost TigerPaw migrations worth $60,900.
  - Contracts & agreements still beta.
  - AM internal ops over 50% of time.
  - "Fan column + graduated-client outreach still open" (RC m/08-16).
- **Functionality win-back:** 14 clients / $17,987 (RC m/08-16).
- **Board plan (Aug 24):** do not fill Fan % until owners pull it (RC m/08-24-board-plan-working-doc).
- **Cross-sell (Aug 31):** 23 YTD; Add-On/Expansion on prior-win accounts 114 / $39,583 (RC m/08-31).

**September.**
- **Council lens B (Sep 28):** "Retention is the constraint this week".
  - Gross 86.9% against 90% (was 88.5% YoY); net 96.4% (was 97.7%).
  - Saves named: Hunter, Titanium, Nuve.
  - TigerPaw Unleashed 224-account triage (RC m/09-28).

**October.**
- **Zendesk cutover (Oct 17):** "no SLA evidence was recorded" (RC m/10-19).
- **Win-back report (Oct 9):** launched with 17 accounts / $29,084 (`wb@fe3ff59`).
- **Spectrotel:** treated as a $90K+ save (RC m/10-12).
- **Classic-to-New fee exposure (Oct 23):** 328 Classic clients, $170.7M (RC m/10-23).

**November.**
- **Churn risk (Nov 4):** Computer Brilliance ($700, off ConnectWise) (RC m/11-04).
- **Expansion (Nov 5):** COEO $5,000 Classic-to-New Rev.io expansion (RC m/11-05).
- **Board slides (Nov 6):** support slides switched to ICP versus non-ICP ticket volume and utilization (RC m/11-06).
- **Spectrotel (Nov 9):** about $54,158 a month at risk (RC m/11-09).
- **Fans (Nov 12):** the Fan tracker was locked as source of truth. Its URL is outside GitHub (RC CONTEXT.md).
- **Win-back (Nov 12):** 16 / $27,924, with 1 won back (ITR Systems, $1,240, Aug 31) (`wb@0fb80a5 public/data.json`).

### Expansion record
- **New Rev.io Add-On wins:** 40 deals / $22,165.28 in 2026; Billing/Classic Add-On 30 / $24,739 (`pace@f21ca74 public/pipeline.json`).
- **Cross-sell count:** 23 YTD at Aug 31 (New Rev.io 16, Billing 5, Cyber Protect 2) (RC m/09-14-pickup).
- **Payments:** no new-logo motion; October $819, all expansion (RC m/10-19).

### Fans record
The Fan tracker, the locked source of truth, is not in any GitHub repo. Its last page state is "blank since 2026-05-14" per `RC agents/client-success.md`. Every fans number in GitHub is therefore non-authoritative and is listed in conflict 54.

### What worked
- **Billing retention:** Billing was the healthiest line at 89.8% gross / 98.2% net (OFFSITE).
- **FIN chat:** resolved about 91% of 414 conversations after Jul 1 (RC m/08-16).
- **Win-back report:** made onboarding cancellations visible to Sales (`wb@0fb80a5`).

### What failed
- **Retention targets:** missed after Q1. The legacy New Rev.io line was at 78.7% gross (OFFSITE).
- **Reviews:** 2 of 24 tapped (DD2).
- **Win-back recovery:** 1 of 16 cancellations recovered (`wb@0fb80a5`).

### Recurring problems
- **No joins:** support never joined to revenue all year (RC m/06-15, m/07-29, m/08-16).
- **QuickBooks/QBO trust:** a finance-trust problem in April (RC m/04-22), May (`rv@f53561d voc-dispatch-qbo.html`) and June (`rv@028dd39`).

---

## How it all fits together

The chain below follows one client from lead to fan. At each stage it shows the volume or quality that leaked and the reason the sources give. New Rev.io new business is used as the spine because it is the only line with a full 2026 funnel in GitHub.

**1. Lead to appointment set.**
- **Activity up, sets down:** 171,662 activities produced 1,582 appointments set (`pace@f21ca74`). Activities rose from 9,401 in January to 24,510 in August while sets fell from 204 in April to 114 in October.
- **SDR efficiency:** SDR activities per set rose from about 170 in April to 582 on Nov 12, against 86 in the model (`pace@f21ca74 public/data.json`).
- **Sequences:** cold sequences reply at 0–0.5% all year (OPS, every month-end snapshot).
- **Why:** volume replaced targeting. The ICP pivot moved paid media in March (RC m/03-03), but sales-outbound ICP share was only 10.6% of new-business opps in Q1 and 18.4% in Q3 (RC m/11-02).

**2. Set to held discovery.**
- **Held rate:** 954 of 1,582 sets were held. The held rate was 57–65% in every Oct–Nov snapshot against a 75% target (`pace@1158d04` to `@f21ca74`).
- **No-shows:** Discovery No Show is the top loss reason in every analysis of the year: 34.8% of losses in February (`legal@ae0217d`), 31.6% in March (GTMA), and 359 of 1,175 2026 losses (`pace@f21ca74`).
- **Placeholders:** from June, opps were created before discovery at a placeholder $1,000 (`pace@f21ca74 public/pipeline.json`).
- **Why:** meetings were set without confirmed decision makers. The SDR comp change to "meetings complete" in March (`rv@03a32e5`) did not move it.

**3. Held discovery to win.**
- **Win rate:** 100 wins from 1,275 closed (computed from `pace@f21ca74`). 655 losses died at stage 1.
- **Missing capabilities:** 115 losses, plus the post-release evidence that unlocked features did not bring lost $800+ accounts back (XCHK).
- **Why:** the board deck reached the conclusion "Not a roadmap problem — a commercialization problem" (`rv@d95df04`), then cut that analysis from the final deck (AUG).

**4. Win quality.**
- **Small deals:** 70 of 100 New Rev.io new-logo wins were under $1,000, median $680 (`pace@f21ca74`).
- **Value quantified:** only 2 of 22 YTD ICP wins had a quantified Value Planner dollar value (RC m/11-05).
- **Why:** the $500 floor. Evan moved to raise it on Jun 3 (RC m/06-03) and said on Oct 14 that Rev.io "no longer sells $500" deals, without setting the new floor (RC m/10-14).

**5. Win to kickoff (Sales-to-Onboarding handoff).**
- **Speed:** fast, at a 7-day median (FLY).
- **Content broken from March onward:**
  - Handoff scores red at 14–23/100 (RC m/03-06).
  - Discovery data "almost NEVER captured" (RC m/03-11).
  - Two of the 20 $800+ cancels were "Sales Unable to KO" (RC m/07-08).
  - The Billing auto-brief failed with "valuePlan is not defined" in early August (RC m/08-04).
  - The unified handoff brief was paused awaiting Evan (RC m/08-12).
- **Fixes adopted:** a workflow-fit gate (OFFSITE) and a migration tech-coverage gate (RC m/09-24).

**6. Kickoff to graduation (time to value).**
- **Throughput collapse:** graduations went from 26 in April and 12 in May (ONE) to 0 from September through November 10 (weekly series), while the dashboard grew by 125 rows (`rv@55e9e87` to FB-1110 `ea8c66a`).
- **Duration:** about 118 days against 60 expected for New Rev.io (RC m/09-15).
- **Capacity:** 24 graduations versus 96 starts, and the backlog reached 96 / $95.7K (RC m/10-12, m/11-09).
- **Cost:** onboarding costs more than Sales ($1.87M versus $1.70M, RC m/07-28).
- **Why:** the May emergency brief and the August board both point to product gaps plus data migration, not SA effort (`rv@95ce19f`; AUG). The cap-versus-pause decision is still open (RC m/11-02).

**7. Onboarding to live client (cancellation).**
- **Cancellations:** 107 / $74,478 cancelled out of a $208.7K-fee book as of Aug 7 (RC m/08-16). 12 of 20 $800+ cancels were Functionality (RC m/07-08).
- **Recovery:** 1 of 16 won back (`wb@0fb80a5`).
- **Why:** selling the roadmap, cross-selling before the account was stable, and the "cost-neutral" pitch (RC m/04-23).
- **ICP effect:** ICP wins cancel at 16% versus 41% (RC m/11-09).

**8. Live client to retained revenue.**
- **H1:** gross 86.2% and net 94.6% (OFFSITE). The legacy New Rev.io line is worst at 78.7% gross.
- **Driver:** downsell rather than logo loss (SPD). TigerPaw carries its own churn season, Nov–Jan (RC MEMORY.md).
- **Gap:** no gross or net retention after Sep 28 is in GitHub.

**9. Retained to expansion and fans.**
- **Expansion:** cross-sell was 13 of 55 at H1 (OFFSITE) and 23 by Aug 31 (RC m/08-31).
- **Fans:** 13 of 75 at H1 as entered on the deck (OFFSITE). The Fan tracker is outside GitHub.
- **Reviews:** 2 of 24 fans tapped for reviews (DD2).
- **Loop back:** billing clients sold New Rev.io were named the "highest-risk" New Rev.io prospects (RC m/04-23), so expansion sometimes caused the churn it was meant to prevent.

**Where it breaks as a system.** Evan's own Aug 24 north star, "live, paying, referenceable Raving Fans in Core ICP" (RC m/08-24-board-plan-working-doc), needs every stage joined. The joins were opened on Jun 2 (RC m/06-02) and closed "for now" on Aug 13 (RC m/08-13). Since May, the ops command center shows 0 active onboardings and an empty at-risk list (OPS from `4159871` May 4 to `90abd40` Nov 12). The specialist GTM, Onboarding and Client Success agents have had "no activity since September" (RC CONTEXT.md). Each department kept its own scoreboard. None of them follows a client from lead to fan.

---

## Implications for 2027

These are implications drawn from the 2026 record, not a 2027 plan. Evan calls 2027 the most critical year in company history. Each line tests whether a 2027 target can be aspirational, accurate and executable at the same time.

1. **Start the target from demonstrated conversion.** The 2026 target needed about 5x the February run rate (`legal@ae0217d`). Monthly bookings then ran $10.8K–$32.0K (PACING). An aspirational number is executable only if the conversion changes it depends on are named, owned and funded. The October ramp already shows every rep above P90 (`pace@f21ca74 config/targets.json`).
2. **Onboarding capacity caps saleable volume.** With 24 graduations against 96 starts (RC m/10-12) and a 96-client not-billed backlog (RC m/11-09), more bookings without more implementation capacity turns into cancellations (Miss 2). The cap-versus-pause question is still open (RC m/11-02).
3. **ICP is the strongest lever found, but it is thin.** ICP wins are larger and stickier (RC m/11-02, m/11-09). Yet only 18.4% of sales new-business opps in Q3 were ICP (RC m/11-02), and only 30 of 100 New Rev.io wins were $1K+ (`pace@f21ca74`). An ICP-first plan has to say where the ICP pipeline comes from.
4. **Retention decides ARR more than bookings do.** At about $37–39M of ARR (OFFSITE; RC m/10-12), one point of gross retention is roughly $370K–$390K of ARR (derived). That is about the same as the best 2026 bookings month, $32.0K MRR ≈ $384K ARR (derived). Downsell, the legacy New Rev.io line, Payments and TigerPaw are where the points are (Miss 3).
5. **Lock definitions before January.** 2026 lost months to competing definitions:
   - marketing-sourced (conflict 33)
   - fans (conflict 64)
   - cross-sell (conflict 23)
   - graduation versus activation (RC m/09-15)
   - which retention package counts (conflict 63)
   - RTS (undefined)
   - the bookings classification, locked only Aug 25 (RC m/09-03)

   An accurate 2027 plan needs each written down with an owner on day one.
6. **Instrument lead to fan before scaling.** The joins were opened Jun 2 and closed "for now" Aug 13 (RC m/06-02, m/08-13). The ops onboarding and client-health feeds have been blank since May (OPS), and the Fan tracker is outside GitHub. Without those joins, 2027 progress on a "live, paying, referenceable Raving Fans in Core ICP" north star (RC m/08-24-board-plan-working-doc) cannot be inspected.
7. **Leadership continuity is a delivery risk.** Marketing had four leaders in one year (conflict 42). The onboarding head seat was vacant or in transition from April to September (conflict 61). Both functions missed hardest in those windows.
8. **Shipping features is not the same as winning with them.** Apollo 2/3 features shipped, but lost $800+ accounts did not come back (XCHK). The board's own diagnosis was "a commercialization problem" (`rv@d95df04`). Release enablement and buyer-ready proof have to be part of each release.
9. **Fund or drop each product line.** $226,385 of the 2026 plan sat on lines with no visible motion (Miss 5). A 2027 line that carries a number needs a motion and an owner.
10. **Close the decisions 2026 left open:**
    - Cap versus pause onboarding starts (RC m/11-02).
    - The New Rev.io minimum floor (RC m/10-14).
    - The marketing-sourced definition (RC m/10-05).
    - The event freeze (RC m/11-02).
    - Channel's role alongside direct sales (RC m/10-23).

---

## Open conflicts

Each item gives both (or all) values and their citations. None is resolved here. **Count: 70 open conflicts.**

### Already settled by locked facts (not counted)
- **FY bookings target:** $805,492 (OFFSITE) vs "~$848K" (RC m/03-23) vs "$854k" (VCP) vs $853,919 (PACING). Locked to $853,919. The deck's "$681,665 remaining to FY" (OFFSITE) rests on $805,492.
- **ICP definition:** "IT MSP primary" (RC m/03-03) vs $800+ "ICP-size" (`rv@d95df04`) vs $3M–$100M revenue fit system where "employee count is context" (OFFSITE) vs the "MSP 10–250" proxy (RC m/11-02). Locked to 10+ employees AND $1K+ MRR on Nov 5 (RC m/11-05).
- **TigerPaw:** blended into Brent's board draft (RC m/11-05) vs reported separately (RC m/11-03). Locked to separate.

### Bookings and sales
1. **Q1 budget:** $111,328 (Notion master budget, RC m/03-23) vs $116,078 (PACING `fcf650e`) vs $118,240 (OFFSITE).
2. **Q1 actual:** $63,555 / 94 deals at Mar 31 (PACING `fcf650e`) vs $67,455 / 98 from Apr 30 on (PACING `7aaad70`; Q1FB).
3. **Q2 actual:** $54,542 / 91 at Jun 30 (PACING `2fa5a25`) vs $56,372 / 94 from Jul 31 on (PACING `7e45c26`).
4. **August actual:** $16.9K (PACING `e79cfa8`; $16,943 mapped, RC m/09-03) vs $16.2K from Sep 30 on (PACING `5cba16b`).
5. **H1 direct bookings:** $105,901 (RC m/06-22; `rv@3ebe9a4 elt-offsite-evan-presentation-shell.html`) vs $123,827 (OFFSITE; RC m/07-01).
6. **Monthly bookings, ops snapshot vs pacing page:** May $9,600 (OPS `6b8343c`) vs $10.8K; Jun $21,409 (`1a0781d`) vs $25.5K; Jul $15,940 (`3b70249`) vs $18.8K; Aug $12,842 (`8b97b21`) vs $16.2K; Sep $14,940 (`7ceb86b`) vs $15.2K; Oct $14,737 (`2d7d9d6`) vs $19.1K; Nov MTD $2,166 (`90abd40`) vs $2.5K (all PACING `177966f`).
7. **Monthly target:** flat $75,000 every month (OPS, all snapshots) vs $62.7K–$110.5K monthly budget (PACING `177966f`).
8. **Early-year New Rev.io monthly bookings:** Jan / Feb / Mar of $4,100 / $7,200 / $14,900 (DD2) vs $5,740 / $10,034 / $15,870 (V2; SPD) vs $5.7K / $10.0K / $15.9K (PACING) vs $4,740 / $7,730 / $15,270 new-logo (`pace@f21ca74`). Billing January $1,800 (DD2) vs $13,900 (V2).
9. **April MRR:** $16,397 MTD (DD2) vs $18,877 (Salesforce, RC m/05-01) vs $20,059 full month (RC m/05-01) vs $20.1K (PACING).
10. **Win rate, Sep–Mar:** 13.5% (Q1 board deck) vs 8.4%, 103 / 1,229 (Salesforce, Q1FB).
11. **Monthly win rate:** Feb / Mar / Apr of 9.4% / 10.1% / 19.5% (DD2) vs 12.6% / 18.4% / 21.0% (V2). January 4.7% New Rev.io Web (`legal@beedc22`) vs 7.7% all products (DD2).
12. **New Rev.io all-time wins in early March:** 115 / $75,940 / 9.2% (`legal@ae0217d`, Feb 24) vs 129 / $82,794 / 8.3% (RC m/03-04) vs 131 / $85,464 (GTMA, which also says 129).
13. **Discovery no-show share of losses:** 396 of 1,137 (34.8%, `legal@ae0217d`) vs 448 of 1,417 (31.6%, RC m/03-04; GTMA) vs 359 of 1,175 for 2026 only (`pace@f21ca74`). The windows differ.
14. **Discovery no-show rate:** 35% (`rv@03a32e5`) vs 32.7% Feb / 20.8% Apr (DD2) vs 57.1% week of Nov 9 (`pace@f21ca74`). The definitions differ.
15. **Competitive displacements:** 17 / $11,683 (RC m/03-04) vs 29 / $21,852 (RC m/03-12) vs 25 / $22,573 (V2). Halo: 3 (RC m/03-04) vs 4 (RC m/03-12) vs 8 accounts (RC m/04-23).
16. **ICP win rate:** 12.0% vs 10.5% on the "MSP 10–250" proxy (RC m/11-02) vs 8.8%, 23 / 261, on the unified rule (RC m/11-05).
17. **October New Rev.io new-logo MRR:** $500 through Oct 21 (RC m/10-21) vs $1,500 (`pace@f21ca74`; RC m/11-04) vs $6.5K with COEO (RC m/11-05) vs $7.2K New Rev.io line (PACING `177966f`).
18. **June New Rev.io baseline:** $19,735 (RC m/10-14; PACING $19.7K) vs $17,665 new-logo only (RC m/10-21; `pace@f21ca74`).
19. **New Rev.io YTD:** $105,020 / 132 (RC m/10-19) vs $88,902 / 97 new-logo (RC m/10-21) vs $91,402 / 100 (`pace@f21ca74`, Nov 12) vs $113,884 (PACING `177966f`).
20. **Same-day YTD on Nov 2:** $194,208 / 297 (research pack) vs $193,208 / 296 (council) (RC m/11-02).
21. **YTD deal counts:** 257 / $173,780 (RC m/09-29-q3-marketing-booked-crosscheck) vs 277 / $174,071 (PACING `5cba16b`, Sep 30) vs 278 / $174,121 (RC m/10-05).
22. **Q4 target:** $295,386 (PACING) vs $53,976 Finance re-baseline (RC m/10-26).
23. **Cross-sell YTD:** 23 (Evan's definition, RC m/08-31) vs 24 / $20,559 (OpenClaw) vs 18 / $17,339 (interim) (both RC m/08-31). H1: 13 (OFFSITE).
24. **Open pipeline on Nov 12:** 77 deals / $176,639 (OPS `90abd40`) vs 44 / $114,665 new-logo (`pace@f21ca74`) vs 112 opps (80 mapped, $173,222) on Nov 9 (RC m/11-09).
25. **Apollo 2 win-back:** 4 won / $4,475 recaptured (DD2) vs "No evidence" (V2) vs 2 post-Apollo wins, 0 at $800+ (`rv@d95df04`; XCHK).
26. **Reopened-and-won after a capability loss:** 14 / $14,845 (`rv@a3243ae` snapshot) vs 2 (`rv@d95df04`) vs 11 latest-stage wins (`rv@d925c46` snapshot).
27. **Capability-loss cohort:** 230 losses / 208 accounts (`rv@75e00f2 board-roadmap-to-revenue-2026.html`) vs 260 / 235 / $272.6K (`rv@a3243ae`) vs 259 / 234 / $271,591 (XCHK).
28. **Activity pacing October:** 20,272 activities, 113 sets, 72 opps, $127,330 (`pace@6d6ecc9`, Oct 30) vs 21,414 / 114 / 68 / $126,945 (`pace@f21ca74`).
29. **Joe Abarno:** "departed in Q1; last close Mar 25" (V2) vs AE on Team Blue on Nov 3 (`pace@f21ca74 config/teams.json`) and the top win-back rep (`wb@0fb80a5 public/data.json`).
30. **AVIT:** "book AVIT" (council, RC m/09-28 and m/10-05) vs Closed Won $8,500 on Jun 26 (RC m/10-06).
31. **Forward Edge health:** 85 (RC m/10-07) vs 46 (RC m/10-15).
32. **Small Town Management Group:** ICP via the blank-employee rule vs forced non-ICP on Value Planner notes (RC m/11-05, m/11-06).

### Marketing
33. **Marketing share of bookings:** 47.5% YTD on `Marketing_Source__c` (RC m/09-29-q3-marketing-booked-crosscheck) vs 38.8% on `Lead_Direction__c` (RC m/10-05). Evan has not picked one.
34. **H1 marketing bookings:** $48,429 = 97.8% of a $49.5K target (RC m/06-22) vs marketing MRR $62,034 = 44.9% of $138,102 (OFFSITE).
35. **Q1 marketing MRR:** $29,549 (sales section) vs $29,008 (marketing table) vs $27,194 from components (Q1FB).
36. **Q1 marketing opps:** 276 (Q1 board deck, Q1FB) vs 285 (GOALS) vs 701 opps created in Q1 across all lines (Q1FB).
37. **H1 marketing set:** MRR $62,034, leads 859, opps 517, pipeline $526,353, closed-won 81 (OFFSITE) vs $47,679, 785, 473, $409,271, 67 (`rv@3ebe9a4 elt-offsite-evan-presentation-shell.html`).
38. **Marketing opps YTD:** 423 (FLY, May 30) vs 517 (OFFSITE, H1) vs 585 (`rv@70a5990`, Aug 13) vs 677 (RC m/09-29-q3-marketing-booked-crosscheck).
39. **Event pipeline ICP mix:** IT MSP 49% (table) vs "IT MSP at 26%" (text), on the same page (DD2; `bp@3bd8109 index.html`).
40. **MSP events added:** 5 (VCP) vs 9 (DD2).
41. **Tradeshow value:** "Rev.io's #1 revenue-generating channel" (DD2) vs $515,686 cost / $17,287 strict won MRR (RC m/10-26).
42. **Marketing leader:**
    - Jennifer Hopkins CMO and William Collins Interim CMO, both listed (`ws@2ca4611 revay-cursor/MEMORY.md`).
    - "Billy stepping into VP Marketing" (`rv@9a1d3eb`) and "Billy Owns The Marketing Plan" (OFFSITE).
    - VP Marketing a planned hire (AUG).
    - Kate Cohen as VP Marketing (RC m/11-04).
    - Kate Cohen's start: Oct 27 (RC m/10-19, m/11-05) vs "week of 2026-11-02" (RC m/11-03).
43. **Product marketing seat:** Kate Stevenson as PMM (RC m/08-13) vs a TBD planned hire (RC m/08-14; AUG).

### Onboarding
44. **Onboarding cancellation rate:** 19.8% (RC m/03-01; `rv@46e6f1f`) vs 22%, 34 / 152 (`rv@9159bc1 onboarding-analysis.html`) vs "current ~25%" (CEO, RC m/03-24) vs "75% churn" on decided cases (RC m/04-02; `rv@9159bc1 revay-roi-board-2026.html`).
45. **Graduation-rate baseline:** 6.6%, 10 / 152 (`rv@9159bc1`) vs 2.7%, 3 / 110 Web (`rv@46e6f1f`) vs 24%, 35 / 144 all Wrike (`rv@8db37d8 onboarding-wrike.html`).
46. **Kickoff to graduation:**
    - 77-day median, n=9 (`rv@9159bc1`) and 109 days (`rv@8db37d8`).
    - 79-day median, p75 134 (FLY).
    - 83-day median / 110.6 average for Q2 (RC m/07-01).
    - 111 / 92 / 48 by month (ONE).
    - About 118 average for Mar–Aug (RC m/09-15).
47. **May forecast and graduations:**
    - Original forecast: 30 (SPD) vs 26 (`rv@95ce19f`) vs 17 (WS-0526 `18fc49e`).
    - May graduations: 2 dates (FB-0526 `86ebecb`) vs 4 (WS-0526) vs 12 (ONE; RC m/06-30).
48. **June graduations:** 6 / $3,445 (WS-0629 `7523f3b`; FB-0630 `9a2c9be`; RC m/06-30) vs 9 / $5,883 (ONE; RC m/07-20) vs 9 by month in the Jul 1 pull (RC m/07-01).
49. **June commit:** 19 (ONE) vs 25 original (WS-0601 `42be88d`) vs 20 current / 19 original (Evan, RC m/06-12) vs 26 raw (RC m/06-12).
50. **Q2 graduations:** 44 / $36,563 (RC m/06-30) vs 47 / $38,956 (RC m/07-01).
51. **H1 graduations:** 68 (Evan, OFFSITE) vs 61 (Notion Jun 22, SOL) vs 55 (RC m/06-22) vs 59 or 62 derived from Q1 + Q2 vs 35 actual records on Jun 2 (FLY).
52. **Q2 Payments activations:** 30 / $5,108 (RC m/06-30) vs 32 / $5,208 (RC m/07-01).
53. **July graduations:**
    - Week 1: 1 (FB-0707 `d94283d`) vs 0 (WS-0706 `fb1a115`).
    - Month: 2 (WS-0727) vs "1 graduated so far" (ONE, Jul 20).
54. **August graduations:** 1 (FB-0825 `57b8121`) vs 0 (WS-0824 `ef8ead1`).
55. **Monthly forecast baselines:** August 12 (FB-0804 `6ddfa76`) vs 11 (WS-0814 `0e6891b`); September 22 (FB-0901 `ac9949d`) vs 24 (WS-0914 `3d68d4f`); October 15–16 vs 18; November 15 vs 18 (FB / WS for those weeks).
56. **Active onboardings in November:** 0 (OPS `90abd40`) vs 15 (FB-1110 `ea8c66a`) vs 18 (WS-1109 `aca904e`).
57. **Onboarding book size:**
    - Open 89 / assigned 79 (RC m/08-26-domain-bots-pickup).
    - 174 non-cancelled including 73 graduated (RC m/09-11-evan-list-match).
    - 114 open and 96 New Rev.io (RC m/09-23).
    - Not-billed 96 / $95.7K (RC m/11-09).
    - Dashboard 326 rows (FB-1110).
58. **Cancelled New Rev.io MRR:** $27.9K, 20 accounts at $800+ (OFFSITE) vs $37,379 booked MRR (FLY) vs 107 / $74,478 (RC m/08-16) vs 14 / $17,987 functionality cancels (RC m/08-16).
59. **Win-back cohort:** 17 / $29,084 (`wb@fe3ff59`, Oct 9) vs 16 / $27,924 (`wb@0437c99` onward).
60. **ICP onboarding cancels:** 15%, 3 / 23 (RC m/11-05) vs 16% (RC m/11-09).
61. **VP Onboarding:** Fran Timothy still listed (RC MEMORY.md) though "(resigned)" by Apr 2 (RC m/04-02), vs Bill Hayes "VP of Onboarding (August)" (RC agents/onboarding.md), vs Bill Hayes "evaluate or drop by Sep 18" (RC m/08-24-board-plan-working-doc), vs Andy Thorson from Sep 30 / Oct 1 (RC m/09-30; RC CONTEXT.md).
62. **VanRan:** cancellation signal on Jun 22 (`rv@028dd39`) vs graduated Jul 15 at $2,184 (WS-0720 `8c9c32b`).

### Client Success
63. **Gross / net retention:**
    - End of 2025: 88.4 / 97.3 (VCP).
    - Q1: 97.3 / 101.5 (OFFSITE) vs "Missing Finance source" (GOALS). Q1 gross equals the 2025 net figure.
    - Trailing 12 months: 87.9 / 98.3 (FLY).
    - H1: 94.9 / 99.1 (`rv@59364e4 metrics-lock-h1-2026.md`, reverted; RC m/06-30) vs 86.2 / 94.6 (OFFSITE; RC m/07-20).
    - YTD Aug 3: 91.3 / 95.7 (RC m/08-16).
    - Sep 21–28: 86.9 / 96.4, "was 88.5% YoY" (RC MEMORY.md; RC m/09-28).
64. **Client fans:**
    - Reference Fans 25 of 30+ (RC m/03-01).
    - "24 Raving Fans Q1" (DD2).
    - Monthly 15 / 15 / 25 / 24 / 25 / 13 for Jan–Jun (RC agents/client-success.md).
    - 25 of 75 (GOALS, Jun 22) vs 13 of 75 (OFFSITE, Jun 30).
    - "25 of 55+" on the slide vs "currently only 5" in the notes (RC agents/client-success.md, Aug 10).
    - Goal timing: 75 "by end of August" (DD2) vs an H1 incentive (OFFSITE).
    - None of these is the Fan tracker.
65. **CSAT:** "0 responses (0.0%)" vs "11% response rate" in the same file (`rv@2e7a4c6 cs-analysis.html`). AI deflection is per month (RC m/03-06) vs per year (RC m/03-08).
66. **Zendesk exit:**
    - Dates: Oct 1 (RC m/10-01) vs Oct 17 (RC m/10-19) vs about Oct 19 (RC m/10-12) vs license end of October (RC agents/client-success.md).
    - OPS open tickets fell from 364 (Oct 15) to 55 (Oct 30) to 0 (Nov 2) (OPS `4e0bfc2`, `2d7d9d6`, `5f5bfc9`).
    - Revenue scale: "MRR ex-payments ~$10M" (RC m/09-28) vs ARR $38.7M (RC m/10-12) vs ARR $36.9M (OFFSITE). Spectrotel base: $90K+ (RC m/10-12) vs about $54,158 a month (RC m/11-09).

### Plan baseline
67. **Marketing opps target:** 1,890+ (One Page Plan per Evan; VCP) vs 855 for the full year (PRIOR, earlier offsite deck). Quarterly targets: Q1 342 (VCP) vs 328 (MKWB) vs 148 (PRIOR); H1 810 (MKWB) vs 292 (PRIOR).
68. **Raving Fans target:** 50+ in H1 (One Page Plan per Evan) vs 75 as an H1 incentive (OFFSITE) vs "75+ Raving Fans using new Rev.io" (VCP) vs 75 "by end of August" (DD2).
69. **Marketing bookings target:** $129,000 for the full year and $49,500 for H1 (PRIOR) vs $138,102 H1 marketing MRR (MKWB). The workbook's H1 target is larger than the deck's full-year target.
70. **Product-line annual targets:**
    - Billing $117,564 + Odin $22,428 = $139,992 (PRIOR) vs Billing & Odin $147,534 (PACING) vs $140,736 (RC m/03-23).
    - Payments $119,200 (PRIOR) vs $120,080 (PACING) vs $120,580 (RC m/03-23).
    - The deck's $805,492 total excludes CommerceHub's $40,005 (PRIOR).

---

## Gaps

**Data that is not in any GitHub repo:**
- **The Jan 22, 2026 One Page Plan.** No text of it was found; the searches are described under [Plan vs actual scorecard](#plan-vs-actual-scorecard). Its targets are used as Evan stated them. The earlier offsite deck "H1_2026_ELTOffsite_ERice.pptx" was read only through its extracted targets (PRIOR); the .pptx sits on the agent machine.
- **ARR after June and EBITDA after April.** There is no ARR bridge (new, expansion, churn, downsell), no Rule of 40 actual, and no Payments revenue actual.
- **Fan tracker:** the locked fans source. RC CONTEXT.md gives its URL on an Azure static site, and RC agents/client-success.md says the page has been blank since May 14.
- **Will's retention and fans dashboards:** linked from OFFSITE, external.
- **Other decks:** Billy's marketing deck and Ryan's direct-sales deck, also linked from OFFSITE.
- **Q3 Board Deep Dive v27:** the Nov 10 board deck. It is referenced in RC m/11-06; no file or commit in revay matches.
- **Nov 10 board outcome:** not recorded.
- **Retention after Sep 28:** no gross or net retention.
- **Service metrics:** no NPS. CSAT is unusable (see conflict 65).
- **RTS:** not defined, and no RTS or go-live time metric.
- **Leads:** no monthly lead or MQL/SQL series after the Jul 1 workbook.
- **Tradeshow cost:** no 2026 cost by show in Salesforce (RC m/10-26).
- **ICP employee counts:** employee count is missing from the opp data, so ICP can only be applied on the $1K half (`pace@f21ca74`). `Account.ICP__c` is populated on 24 of 107,272 accounts (RC m/11-02).
- **Workbooks:** many named workbooks live on the agent machine, not in a repo (RC m/09-15 and later).
- **Open decisions:** cap versus pause onboarding starts, the minimum deal floor, the marketing-sourced definition and the event freeze are all unanswered at the source (RC m/11-02; RC m/10-15; RC m/10-05).

**Broken or frozen feeds in revay** (OPS history):
- **Onboarding and client health:** active, at-risk and overdue onboarding, and the at-risk account list, have been 0 or empty from May 4 16:06 (`4159871`) through Nov 12 (`90abd40`). Only the first prototype snapshot `12ec7ed` shows values (7 active, 2 at risk).
- **Competitor intel:** wins 361 / losses 174 / Tier-1 602 unchanged from May 5 (`1386eeb`) through Nov 12, while `generatedAt` refreshes daily.
- **Call intelligence:** `callsThisWeek` is 100 with the same four themes in every month-end snapshot.
- **Zendesk tickets:** 0 from Nov 2 (`5f5bfc9`).
- **`closingThisMonth`:** equals the entire open book on Nov 12.

**Time coverage:** January 2026 has no contemporaneous record. The weekly onboarding snapshot is missing for the weeks of Aug 3, Aug 10, Aug 31 and Sep 7 (the history lists runs, but no files exist).

---

## Sources reviewed

| Repo | HEAD reviewed | 2026 history used | What was read |
| --- | --- | --- | --- |
| erice320/revay (public) | `88d94fd`, Nov 12 | 1,921 commits; 2026 commits by month: Feb 17, Mar 217, Apr 286, May 211, Jun 251, Jul 230, Aug 270, Sep 192, Oct 177, Nov 70 | `bookings-pacing.html` (Mar 23–Nov 12, 549 refresh commits, month-end states above); `ops/ops-snapshot.json` (May 4–Nov 12, 246 commits); every `psa-onboarding-forecastbrief-*` and `psa-onboarding-weekly-snapshot-*`; board, GTM, ELT, VCP, onboarding, CS, TigerPaw, win-back and wins-gallery files; `snapshots/` (13 Aug 12–13 states); `data/board-roadmap/`; `elt-offsite-2026-12/`. The 119 per-prospect `*-brief.html` files were counted, not read. |
| erice320/Revay-Cursor (private) | `514c293`, Nov 12 | Repo created Aug 15 with imported content dated Feb 17 onward; sync commits through Nov 12 | `CONTEXT.md`, `MEMORY.md`, `EVAN-AND-REVIO-BRIEFING.md`, `agents/` (gtm, client-success, onboarding, msp, revii-full-desk), `wiki/` (hot, log, index, concepts, entities, syntheses, outputs), `coordination/`, `notes/`, and all 284 `memory/2026-*.md` day files (Feb 17–Nov 12) |
| erice320/revio-activity-pacing (private) | `f21ca74`, Nov 12 | 44 commits, Oct 14–Nov 12; data at `1158d04`, `4d0e9a7`, `6d6ecc9`, `0a43fbf`, `f21ca74` | README, DEPLOY_PLAN, config, scripts, `public/data.json`, `scoreboard.json`, `pipeline.json`, `competitors.json` |
| erice320/revio-winback-report (private) | `0fb80a5`, Nov 12 | 47 commits, Oct 9–Nov 12; data at `fe3ff59`, `0437c99`, `0fb80a5` | README, `config/accounts.json`, `scripts/refresh.py`, `public/data.json` |
| erice320/revio-dealdesk (private) | `2fb53aa`, Oct 13 | 7 commits, Oct 13 | README, `public/config.js` |
| erice320/revay-legal (public) | `800dcf4`, Mar 3 | Feb 23–Mar 3 | `phase1-baseline.html`, `phase2-funnel-autopsy.html`, `apollo2-deal-unlock.html`, commit messages |
| erice320/board-preview (public) | `3bd8109`, May 1 | 2 commits | `index.html` (May board deck) |
| erice320/revay-workspace (private), `main` | `2ca4611`, Aug 15 | — | Root and `revay-cursor/` MEMORY and CONTEXT. The rest duplicates Revay-Cursor. |
| erice320/revay-workspace (private), `master` | `b175654` | OpenClaw archive, 8,047 files (265 day files, which Revay-Cursor imports) | `data/elt-offsite-prep/` goal-attainment, objective-goal-metrics and marketing-workbook extracts (Jun 30); the Jul 9 ELT deck and linked-presentation export; a file-name search for plan documents. The rest was not read: node modules, video projects, nightly runs, and 1.2 MB Salesforce pulls. |
| erice320/revay-public, expert-bar-web-poc, eyeq-monitoring-onepager, revio-eyeq-overview, revay-voice (public) | `d91f13b`, `d0ebae7`, `244d7a3`, `85b16b4`, `1e2ac8a` | — | README, trees and guides. Little or no department content. |
| erice320/revitup-workspace, hq-tower, rice-personal (private) | `5caaa27`, `09a6fe9`, `b194dea` | — | Trees only. Empty backup, agent UI, and a personal repo with no Rev.io content. |

**Not reached or not read:**
- **`gh` CLI:** lists only 8 public erice320 repos. `gh repo view erice320/Revay-Cursor` returns "GraphQL: Could not resolve to a Repository with the name 'erice320/Revay-Cursor'". `gh api` on private repos returns HTTP 404 "Not Found", and `gh api user/repos` returns HTTP 403 "Resource not accessible by integration". Every private repo above was read through the Cursor GitHub connector instead.
- **`git clone`:** fails for every private repo with "fatal: repository 'https://github.com/erice320/<repo>.git/' not found".
- **Out of scope:** the Ember-Bots org repos (a separate venture) were not opened.
- **Not read by design:** Revay-Cursor `memory/self-improvement-log.md` and `-archive.md` (about 755 KB of agent-operations log).
- **Not paged:** hq-tower commits past page 1.
