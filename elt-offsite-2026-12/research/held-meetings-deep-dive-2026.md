# Held meetings deep dive, 2026: ICP first

Research input for Evan's December offsite pre-work. Draft only. Not sent to anyone.

Question: what happens to New Rev.io new-business meetings that do show up, with ICP as the main lens. In 2026 (Jan 1 to Nov 12), 1,582 first appointments were set, 954 were held and 100 New Rev.io new-logo deals were won worth $91,402 MRR. Source: `pace@f21ca74 public/data.json`, team months summed.

Locked facts used without reopening:
- ICP is 10+ employees AND $1K+ MRR. A $1K+ deal with unknown employee count counts as ICP.
- TigerPaw is reported separately.
- The 2026 bookings target is $853,919.

Language: "client" means a Rev.io client. "New Rev.io" replaces "PSA" in prose; Salesforce labels keep their spelling.

## Citation key

| Short form | File |
| --- | --- |
| P | `erice320/revio-activity-pacing@f21ca74 public/pipeline.json`. Opportunity records, generated Nov 12, 2026 6:43 AM CT: 1,772 records (New Rev.io and Billing / Classic, New Logo and Add-On). Fields are defined in `scripts/pipeline.py` at the same commit. |
| D | `erice320/revio-activity-pacing@f21ca74 public/data.json`. Activity, set, held, opp and win counts by month and rep. Definitions in `scripts/refresh.py`. |
| TG | `erice320/revio-activity-pacing@f21ca74 config/targets.json`. The v2 ramp model of 2026-10-14. |
| SRC | `erice320/revay-workspace@b175654 (master) data/elt-offsite-prep/salesforce-goal-source-2026-06-30.json`. 1,429 opps created in H1 2026, with `Marketing_Source__c`. |
| JOIN | `erice320/revay-workspace@b175654 (master) data/gtm-alignment/opportunity-call-transcript-join-2026-07-20.json`. Salesforce opps joined to Kaia/Notion call evidence, Jun 20–Jul 20, 2026. |
| WB | `erice320/revio-winback-report@0fb80a5 public/data.json`. New Rev.io onboarding cancels over $1K, Nov 12, 2026. |
| RC m/MM-DD | `erice320/Revay-Cursor@514c293 memory/2026-MM-DD.md` |
| GTMA | `erice320/revay@9159bc1 gtm-analysis.html` (data as of Mar 9, 2026) |
| DD | `erice320/revio-dealdesk@2fb53aa public/config.js` |

"Computed" means arithmetic I did on the cited file. Nothing else is derived.

## What the data can and cannot do

**1. Strict ICP cannot be applied opp by opp.** No GitHub export carries an employee count. I searched P, SRC, JOIN, the July GTM refreshes and the Aug 11 account audit, and none has `Account.NumberOfEmployees` or an equivalent field. The employee-based ICP numbers exist only as summaries from the Q3 Board Deep Dive cohort engine, quoted in RC m/11-02 through m/11-09. The engine and its pull (`v19_live_pull_2026-11-06.json`) sit on the agent machine, not in a repo. This file therefore uses two ICP lenses:
- **Board ICP (authoritative, summary only):** the employee + MRR rule as computed for the Q3 Board Deep Dive.
- **ICP-eligible (opp-level, computed from P):** New Rev.io MRR of $1K+. Every record in P lacks an employee count, so under the locked rule every $1K+ opp counts as ICP. Some of these are truly under 10 employees, such as Small Town Management Group at $1,000 with 4 employees (RC m/11-05).

**2. From June, the $1K split is distorted by placeholders.** New opps are created at a flat $1,000. Exactly-$1,000 lost opps go from 1–2 a month (Jan–May) to 37 in June, 65 in July, 45 in August, 58 in September and 63 in October (P, computed). Lost opps keep the placeholder while won opps carry the real price. So after June almost every loss lands in the $1K+ bucket, and the H2 under-$1K win rate (31.8%) is an artifact. **January–May 2026 is the only clean window for comparing ICP and non-ICP by size**, and the tables below show it separately.

**3. "Held" is an Event status, not an opp field.** The 954 are first appointments (`Event.Type = '1-Discovery Call'`) with `Appointment_Status__c = 'Completed'` (D; `scripts/refresh.py`). No export joins an event to its opportunity. The opp-level proxy for a held discovery is **reaching stage 2 (Discovery Completed) or later**: won opps, plus lost opps whose stage at loss was 2 or later. For 2026 New Rev.io new logos that is 618 closed opps (P, computed), against 954 held events. The two counts measure different things; see conflict C1.

**4. Time in stage is partial.** P keeps only the date of the last stage change and the stage at loss, not a timestamp per stage. The file instead shows days from creation to loss by the stage where the deal died, cycle days for wins, and days in the current stage for open opps.

**5. Out of scope in P by design** (`scripts/pipeline.py`): Payments, Cyber Protect / CommerceHub, Legacy Migration (TigerPaw), Renewals and Add-Ons are excluded from the New Logo analysis. Those lines have bookings totals only.

---

## 1. ICP held meetings

### 1.1 The two ICP lenses side by side

| Measure | Board ICP (employee + MRR) | ICP-eligible, $1K+ (P, computed, 2026) | Non-ICP / under $1K (P, computed, 2026) |
| --- | --- | --- | --- |
| Win rate, all closed | 8.8% (23 of 261) YTD, unified rule with COEO (RC m/11-05) | 5.0% (30 of 602) | 10.4% (70 of 673) |
| Win rate, excluding Discovery No Show | 12.0% ICP vs 10.5% non-ICP; by MRR 15.8% vs 8.6% ("MSP 10–250" proxy; RC m/11-02) | — | — |
| Win rate after a held discovery (reached stage 2+) | GAP | 9.8% (30 of 306) | 22.4% (70 of 312) |
| Same, clean Jan–May window | GAP | 11.5% (10 of 87) | 18.2% (48 of 264) |
| Deal size | ICP $1,558 mean vs $783 (RC m/11-02); avg ICP won MRR $1,874 with COEO (RC m/11-05) | Median $1,150; mean $1,627 ($48,800 / 30) | Median $575; mean $609 ($42,602 / 70) |
| Cycle on wins | Median 28 days ICP vs 14 non-ICP (RC m/11-02) | Median 17.5 days created → won (p75 30) | Median 13.5 days (p75 26) |
| Share of new-business opps | Q1 10.6% → Q2 17.0% → Q3 18.4% (RC m/11-02). Marketing-created: Q1 21% → Q2 37% → Q3 50% → Oct 52%. Since the Aug 18 board: marketing + tradeshow 49% vs sales outbound 66% (RC m/11-06) | Distorted after June by placeholders (point 2 above) | |
| Onboarding cancels | ICP 16% vs non-ICP 41%; 22 of 22 ICP clients since the Aug 18 board still active (RC m/11-09). 15% (3 of 23) with COEO (RC m/11-05) | 7 of 30 2026 wins are on the win-back cancel list (23%). 7 of the 8 wins closed Jan–Mar cancelled; 0 of the 22 later wins have (WB joined to P, computed) | Not joinable: the win-back cohort covers cancels over $1K only |
| October close rate | 2 of 31 met-ICP (6.5%). 2 of 27 after removing 4 with no decision maker (7.4%). 2 of 25 after removing 2 in-contract (8.0%). Wins: COEO $5.0K and EXL Technical $1.0K (RC m/11-06) | 1 of 82 closed in October (1.2%) | |

How to read it:
- **Sizes and starting points.** ICP deals are two to three times larger. They start from a smaller and growing share of the funnel.
- **Win rate.** After a held discovery, ICP-eligible deals win at about half the non-ICP rate on the size lens (9.8% versus 22.4%; 11.5% versus 18.2% in the clean Jan–May window). On the employee lens, the board shows ICP slightly ahead excluding no-shows (12.0% versus 10.5%). These lenses conflict (C2) and are not reconciled here.
- **Cancellations.** What both lenses agree on is that, recently, ICP wins have stayed live. The Q1 cohort did not.

### 1.2 Conversion by stage, ICP-eligible vs non-ICP

Closed 2026 New Rev.io New Logo opps: number that reached each stage, then stage-to-stage conversion (P, computed). Won opps count as having passed every stage, because P has no per-stage history. If some wins skipped stages, the upper-stage rates are overstated.

| Stage reached | ICP-eligible 2026 | Conversion | Non-ICP 2026 | Conversion | ICP-eligible Jan–May | Non-ICP Jan–May |
| --- | --- | --- | --- | --- | --- | --- |
| 1 Discovery Scheduled | 600 | — | 673 | — | 170 | 602 |
| 2 Discovery Completed (held proxy) | 306 | 51.0% | 312 | 46.4% | 87 (51.2%) | 264 (43.9%) |
| 3 Initial Product Demo | 166 | 54.2% | 176 | 56.4% | 57 (65.5%) | 140 (53.0%) |
| **4 Proposal Sent** | **53** | **31.9%** | 96 | 54.5% | **17 (29.8%)** | 70 (50.0%) |
| 5 Product / Contract Validated | 33 | 62.3% | 77 | 80.2% | 11 | 54 |
| 6 Verbal Commit | 30 | 90.9% | 72 | 93.5% | 10 | 50 |
| Won | 30 | 100% | 70 | 97.2% | 10 | 48 |

**The ICP leak is demo to proposal.** Only about 3 in 10 ICP-eligible demos reach a proposal, against about 5 in 10 for non-ICP. That holds in the clean window too (29.8% versus 50.0%). After a proposal, ICP-eligible deals close at 56.6% (30 of 53), close to non-ICP's 72.9% (70 of 96).

For Billing / Classic new logos at $1K+: 132 → 80 → 47 → 15 → 7 → 6 → 6, so demo to proposal is 31.9% there as well (P, computed).

### 1.3 Time in stage

| Measure | ICP-eligible | Non-ICP | Source |
| --- | --- | --- | --- |
| Median days, opp created → lost, dying at stage 1 | 12 (n=294) | 12 (n=361) | P, computed |
| … dying at stage 2 | 17 (n=140) | 13.5 (n=136) | P, computed |
| … dying at stage 3 (demo) | 24 (n=113) | 17.5 (n=80) | P, computed |
| … dying at stage 4 (proposal) | 32.5 (n=20) | 29 (n=19) | P, computed |
| Median days, created → won | 17.5 (p75 30) | 13.5 (p75 26) | P, computed |
| Average close-date pushes, wins vs post-discovery losses | 0.43 vs 0.77 | 0.33 vs 0.51 | P `push`, computed |
| Open New Rev.io New Logo opps (Nov 12), median days in current stage | Stage 1: 6 (n=15). Stage 2: 8 (n=19). Stage 3: 23 (n=8). Stages 4–6: 3 opps. All 44 open opps are $1K+ | — | P `ls`, computed |

ICP-eligible deals spend longer before dying at the demo stage (24 days versus 17.5). Open demo-stage deals sit a median 23 days, which is above the 21-day "stalled" rule in `scripts/pipeline.py`. Named stalls on Nov 12: Altourage 86 days ($5,250), Forward Edge 52 ($11,250), Prime Secured 44 ($4,500), Nucleus 36 ($8,100) (D `stage_flow.snapshot`). GAP: days in each stage for closed opps needs OpportunityHistory timestamps per stage.

### 1.4 Why ICP held meetings die

Loss reasons on ICP-eligible opps that reached stage 2+ (276 losses, `Loss_Reason__c`; P, computed). The excluding-exact-$1,000 column removes placeholder-priced losses.

| Reason | ICP-eligible, post-discovery | Same, excluding exactly $1,000 (n=162) | Non-ICP, post-discovery (n=242) |
| --- | --- | --- | --- |
| Not the Right Time | 97 (35%) | 63 | 51 |
| Lack of Decision Maker Involvement | 56 (20%) | 35 | 36 |
| Software Missing Capabilities | 34 (12%) | 26 | 40 |
| No Business Issue | 26 | 7 | 39 |
| Price | 23 | 3 | 25 |
| In existing contract | 19 | 12 | 11 |
| Not Right Customer Type (picklist label) | 9 | 6 | 6 |
| Lost to Competitor | 7 | 5 | 7 |
| No Decision / Non-Responsive | 5 | 5 | 22 |
| "Went dark" wording in `Reason_Lost_Detail__c` (ghost, no response, non-responsive and similar) | 15 | 7 | 16 |

Where the ICP-eligible losses die (stage at loss): Discovery Completed 140, Initial Product Demo 113, Proposal Sent 20, Validated 3. At the demo stage the top reasons are Not the Right Time 47, Lack of Decision Maker 21 and Software Missing Capabilities 21 (P, computed).

How to read it:
- **Timing and buyer access dominate.** For ICP they outweigh features and price. Price nearly disappears once placeholder-priced deals are removed (3 of 162).
- **In-contract losses are a timing problem.** "In existing contract" (19) plus "Not the Right Time" (97) is the contract-calendar problem that the Competitor Contracts tab now targets. It tracks 196 in-window accounts with a ConnectWise, Autotask or Halo contract ending Nov 2026 to Oct 2027 (`pace@f21ca74 public/competitors.json`).

### 1.5 Competitors on ICP held meetings

Competitor named in `If_Lost_to_Competitor__c` or in the loss notes, ICP-eligible post-discovery losses (P, computed; a mention in the notes is not necessarily a loss to that vendor):
- ConnectWise 14, Autotask 6, Halo 5, D-Tools 4, Sedona 4, Zendesk 3, Zoho 3, Odoo 2.
- One each: QuickBooks, HousecallPro, Tigerpaw, Kaseya, OneBill.

Only 7 ICP-eligible losses carry the "Lost to Competitor" reason. The structured competitor field is filled on 13 of all 2026 New Rev.io losses: Halo 3, Halo PSA 1, and one each of ServiceBox, Cube, Jobber, Zendesk, HousecallPro, GitBit, D-Tools, Odoo, Zoho and "AI" (P, computed). Most ICP losses are to the status quo, not to a named rival.

### 1.6 SE / TAM coverage

There is no Salesforce field for SE or TAM attendance in any export (GAP: Event attendee or relation records, or an SE field on the opp). The evidence that does exist:
- **Readiness:** on Mar 11, the 6 of 12 Feb–Mar wins with a Tony Mehner pre-sales call scored 62% handoff readiness, against 40% without one (RC m/03-11).
- **Graduation:** Tony's projects graduated at 67% (2 of 3) in Wrike (`rv@46e6f1f onboarding-process-analysis.html`).
- **Call-transcript join, Jun 20–Jul 20:** an SE (Tony Mehner or Michael Young) is named in transcripts for 4 of 29 matched accounts. Those opps were 1 won (Millennium Systems Integration), 2 lost (Michigan Security And Lock, Alarm New England) and 1 open at proposal (Masterpiece Audio Video). The sample is too small to judge (JOIN, computed).
- **Migration guardrail:** since Sep 24, Legacy Migration deals of $1K+ are held at Closed Won until a technical resource has been on a recorded call. JES and Sons passed on Sep 25, and NATG was held (RC m/09-24, m/09-25). This applies to TigerPaw migrations, not to new business.

### 1.7 Value Planner

Value Planner use is not a Salesforce field in any export (GAP). On Nov 5, only AVIT, Enetek and COEO among ICP wins had a quantified hard-dollar value: "2 of 22 YTD / 1 of 8 since board" (RC m/11-05). Value Planner fields were added to the Notion onboarding briefs on Jul 10, but the planner UI deploy was blocked (RC m/07-10). No win-versus-loss comparison by Value Planner use is possible from GitHub.

### 1.8 ICP held meetings by source

Source comes from joining P to SRC on opp ID (`Marketing_Source__c`). The join only covers opps created in H1 2026: 848 of 1,275 closed New Rev.io opps (computed).

| Source (H1-created) | ICP-eligible: closed / won / win rate | Post-discovery win rate | Median win | Non-ICP: closed / won / win rate | Post-discovery win rate |
| --- | --- | --- | --- | --- | --- |
| Website | 31 / 4 / 12.9% | 19.0% | $1,120 | 42 / 10 / 23.8% | 31.2% |
| Tradeshow | 76 / 5 / 6.6% | 10.9% | $2,070 | 91 / 10 / 11.0% | 22.7% |
| Paid Media | 19 / 1 / 5.3% | 20.0% (1 of 5) | $2,970 | 43 / 2 / 4.7% | 10.5% |
| SEO / Email / Summit | 7 / 0 | 0% | — | 23 / 5 | 31.3% (5 of 16) |
| Sales (AE or SDR self-sourced) | 143 / 5 / 3.5% | 7.5% | $1,220 | 353 / 30 / 8.5% | 18.4% |
| Partner / Channel | 2 / 1 (AVIT $8,500) | 50% | $8,500 | 1 / 0 | — |

SDR influence (`SDR_Influence__c` is a roster SDR):
- **ICP-eligible:** SDR-influenced opps won 4 of 170 (2.4%; 5.1% after discovery), against 26 of 432 (6.0%; 11.4%) without an SDR (P, computed).
- **Non-ICP:** 12.4% with an SDR versus 10.1% without.

Sales-sourced ICP-eligible opps win at 3.5%, a quarter of Website's 12.9%. GAP: source for opps created after Jun 30 (P carries `Marketing_Source__c` and `Lead_Direction__c` only on the 66 open opps).

### 1.9 ICP held meetings by rep

ICP-eligible 2026 New Rev.io closed opps by owner (P, computed), with each AE's overall 2026 activity and held meetings (D, computed):

| AE | ICP-eligible closed / won / post-discovery win rate | ICP won MRR | All 2026 New Rev.io: held → won | Activities per win |
| --- | --- | --- | --- | --- |
| Connor Flynn | 50 / 4 / 17.4% | $12,105 | 10.9% | 1,156 |
| Jamie Butler | 64 / 4 / 11.1% | $7,150 | 5.6% | 1,399 |
| Jake Borah | 120 / 5 / 10.0% | $9,240 | 13.7% | 687 |
| Jaylin Bender | 94 / 4 / 9.8% | $4,240 | 13.5% | 796 |
| Andy Whisenant | 71 / 3 / 8.8% | $4,070 | 7.4% | 1,578 |
| Abbey McIntosh | 48 / 2 / 8.3% | $3,025 | 8.9% | 3,372 |
| Patrick Davies | 96 / 5 / 7.1% | $5,730 | 11.2% | 949 |
| Joseph Abarno | 14 / 0 / 0% | $0 | 2.3% | 4,205 |
| Other owners | 45 / 3 / 15.8% | $3,240 | — | — |

ICP win counts are small for every rep (0 to 5), so the rep differences are not significant. Patrick Davies runs the most ICP demos (41 reached stage 3) but converts 8 of them to proposal. Jaylin Bender converts 13 of 27. Jamie Butler holds the most meetings (180) at the lowest held-to-win rate (5.6%). He also carries the large stalled War Room deals ($36,600 of Team Green's $40,935 Q4 War Room on 85 calls QTD; `pace@f21ca74 public/scoreboard.json`).

### 1.10 Trend, and the June minimum change

ICP-eligible New Rev.io closed opps by close quarter (P, computed):

| Quarter | Closed / won | Win rate | Post-discovery win rate | Median win |
| --- | --- | --- | --- | --- |
| Q1 | 107 / 8 | 7.5% | 14.5% | $1,355 |
| Q2 | 138 / 5 | 3.6% | 8.1% | $1,270 |
| Q3 | 255 / 15 | 5.9% | 11.3% | $1,020 |
| Q4 (to Nov 12) | 102 / 2 | 2.0% | 3.6% | $1,000 |

Before versus after the Jun 3 minimum-fee decision (RC m/06-03): ICP-eligible closed opps won 10 of 173 before (11.4% after discovery, median win $1,370), against 20 of 429 after (9.2%, median $1,000). After June, 11 of the 20 ICP-eligible wins were priced at exactly $1,000. That matches the deal desk's $1,000 starter pack of 8 standard plus 4 field users (DD). The minimum change raised the count of $1K+ wins (10 to 20) but lowered their median price to the floor. GAP: ICP win counts on the employee lens by month (the board's Q3 monthly ICP bars live on the agent machine).

### 1.11 What the 30 ICP-eligible wins have in common

The 30 wins are listed in P (computed). Shared traits:
- **Fast.** Median 17.5 days from opp creation to win, versus 21 days for ICP-eligible deals that died after discovery (P, computed).
- **Rarely SDR-led.** 4 of 30 had a roster SDR (P).
- **Marketing- or channel-sourced where known.** Of the 15 created in H1: Tradeshow 5, Website 4, Sales 5, Paid 1, plus channel AVIT ($8,500). The tradeshow wins were the larger ones (median $2,070) (SRC join).
- **Security/AV-heavy by name**, a low-confidence keyword proxy: 10 of 30 account names contain security, alarm, AV, integration or access-control terms. Examples are DFW Security, NetWatch, Planet Secure, PSD Integrations, Intec Security Solutions, Midwest Security Systems, B&S Integrated Security Systems, New York Security Solutions, Access Control Group and Millennium Systems Integration (P, computed).
- **At the floor after June.** 11 of the 20 H2 ICP-eligible wins are exactly $1,000.
- **Earlier wins went live; later ones are holding.**
  - 7 of the 8 wins closed Jan–Mar are on the onboarding cancel list: HELP, POS Innovation, GuentherTech, NetWatch, ITR Systems, DFW Security and Integrated Technologies. Only Remote Technology is absent (WB).
  - The cancel reasons are quoting, dispatch and project-management gaps, bandwidth, and discovery fit (`wb@0fb80a5 config/accounts.json`).
  - None of the 22 wins from April onward is on the list (WB). The board reports 22 of 22 ICP clients won since Aug 18 still active (RC m/11-09).
  - Later cohorts have had less time to cancel.
- **Hard-dollar value rarely quantified:** 2 of 22 (RC m/11-05).
- **Number of meetings:** in the only meeting-count data (JOIN, Jun 20–Jul 20), won opps had a median 2 matched call or transcript items, against 1 for lost. That is 10 won and 23 lost opp rows across all segments, with some opps listed twice in the source, so treat it as directional. GAP: meeting count per opp, demo type (`Event.Type = '2-Initial DEMO'` exists but is not joined to opps), time to proposal, and contact roles on closed opps. Multi-threading is visible only on open opps: 43 of 44 have one primary or decision-maker contact role (P `ocr`).

---

## 2. Non-ICP held meetings: what to keep and what to let go

Win rates are from P (computed, 2026; the clean Jan–May window where it differs). "Effort per win" is closed opps per win, plus post-discovery opps per win. Cancel and support data are given where joinable.

| Segment | Closed / won / win rate | Post-discovery win rate | Effort per win (closed / post-discovery opps) | Deal size (median won) | Cancel or onboarding outcome | Support load | Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **10+ employees but under $1K MRR** | Not separable: GAP `Account.NumberOfEmployees`. All under $1K: 673 / 70 / 10.4% (Jan–May 602 / 48 / 8.0%) | 22.4% (Jan–May 18.2%) | 9.6 / 4.5 | $575 | Board non-ICP cancel 41% (RC m/11-09) | GAP | **Keep with conditions.** Re-price to the floor rather than drop. A 10+ employee firm at New Rev.io seat prices ($105–$115 per user; DD) reaches $1,000 with about 9 users, so a sub-$1K quote usually means an under-scoped deal. Condition: quote at the $1,000 starter pack or above (DD) and apply the workflow-fit gate (`rv@b6595de elt-offsite-h2-2026-evan.html`) |
| **$1K+ but under 10 employees** | Not separable: GAP employee count. Known case: Small Town Management Group, $1,000, 4 employees (RC m/11-05) | — | — | — | GAP | GAP | **Keep with conditions (data first).** The locked rule makes unknown-employee $1K+ deals ICP. Capture employee count at discovery so these can be measured. No evidence yet to drop them |
| **Small and low-MRR (under $500, or $0 / blank)** | Under $500: 8 / 0. $0 / blank: 61 / 0 | 0% | No wins | — | — | — | **Let go.** Zero wins in 69 closed opps (P). Evan: "Rev.io no longer sells $500 New Rev.io deals" (RC m/10-14) |
| $500–$999 band | 604 / 70 / 11.6% | 23.2% | 8.6 / 4.3 | $575 | Non-ICP cancel 41% (board) | GAP | **Keep with conditions**, as for the 10+ / under-$1K row: move to the $1,000 floor and gate on workflow fit. The highest post-discovery win rate here comes with the highest onboarding cancel rate |
| **Billing / Classic, under $1K** | 99 / 10 / 10.1% | 19.6% | 9.9 / 5.1 | $500 | Billing H1 retention 89.8% gross / 98.2% net, the best line (`rv@b6595de`) | GAP | **Keep with conditions.** Billing start-up tier minimum is $1,000 (DD), and on Jun 3 Billing was recommended to move faster to a $1K floor (RC m/06-03). Keep at the floor |
| Billing / Classic, $1K+ | 134 / 6 / 4.5% | 7.5% | 22.3 / 13.3 | $2,125; cycle 69.5 days | Same | GAP | **Keep** (ICP-like value; long cycle) |
| **Payments, Cyber Protect / CommerceHub** | No opp-level data (excluded from P by `scripts/pipeline.py`). Bookings YTD: Payments $21,503; Cyber Protect & CommerceHub $600 (`rv@177966f bookings-pacing.html`) | GAP | GAP | Payments average win small: $24,098 from 110 AR deals (RC m/10-05) | Payments H1 retention 73.1% / 83.7% (`rv@b6595de`) | GAP | **Payments: keep as an attach only.** "Payments has no new-logo motion" (RC m/10-19). **Cyber Protect / CommerceHub: let go as a new-logo motion** unless funded; $0 every month since March |
| **TigerPaw (separate)** | Excluded from P. Legacy Migration 2026: 59 deals / $53,783 renewal MRR (RC m/11-02). 49 lost migrations = $60,900 (RC m/08-16) | — | — | — | Retention motion | — | **Keep, reported separately.** It is retention, not new business (RC m/11-03) |
| **Vertical: integrators** (name keyword proxy, low confidence) | Non-ICP: 281 / 26 / 9.3%. ICP-eligible: 244 / 10 / 4.1% | Non-ICP 18.6%; ICP 8.3% | 10.8 / 5.4 non-ICP | $595 non-ICP; $1,110 ICP | Most cancels on the win-back list are security/AV integrators with quoting or dispatch gaps (`wb@0fb80a5 config/accounts.json`) | Anti-ICP ticket signals are noted for New Rev.io Web / TigerPaw accounts with workflow, sync and reporting tickets; no counts (`rv@0f4f80f gtm-alignment.html`) | **Keep with conditions.** Historically the largest win group (Security Integrator 51 wins / $30,465 Jul 2025–Mar 2026, GTMA), but lower post-discovery conversion. Condition: pass the workflow-fit gate on quoting, dispatch and catalog before proposal |
| **Vertical: MSP / telecom / other** (unclassified by name) | Non-ICP: 392 / 44 / 11.2%. ICP-eligible: 358 / 20 / 5.6% | Non-ICP 25.6%; ICP 10.8% | 8.9 / 3.9 non-ICP | $558 non-ICP; $1,150 ICP | GAP | GAP | **Keep.** Where sub-$1K, move to the floor. GTMA (Mar 9): UCaaS/VoIP 23 wins / $19,041 and MSP-No Voice 9 / $4,640 |
| **Source: Website / SEO / Email (non-ICP)** | Website 42 / 10 / 23.8%; SEO 11 / 3; Email 12 / 2 | 31.2% (Website) | 4.2 closed opps per win (Website) | About $500–550 | Board non-ICP cancel 41% | GAP | **Keep with conditions.** The cheapest wins per opp. Condition: floor pricing and a low-touch path. No AE time on sub-$1K inbound without a fit check |
| **Source: Tradeshow (non-ICP)** | 91 / 10 / 11.0% | 22.7% | 9.1 / 4.4 | $553 | — | — | **Keep with conditions.** Tradeshow ROI is weak overall ($515,686 of cost on 29 shows against $17,287 strict won MRR; RC m/10-26). Keep shows only where ICP share is proven |
| **Source: Sales / SDR outbound (non-ICP)** | Sales 353 / 30 / 8.5%; SDR-influenced 89 / 11 / 12.4% | 18.4% | 11.8 / 5.4 | $568 | Non-ICP cancel 41% | GAP | **Let go** for sub-$1K outbound targets. SDR activities per set are 582 against 86 needed (`pace@f21ca74 public/data.json` leading). Point outbound at ICP lists, which run at 66% ICP since Aug 18 (RC m/11-06) |
| **Source: Paid Media (non-ICP)** | 43 / 2 / 4.7% | 10.5% | 21.5 / 9.5 | $568 | — | — | **Let go.** Paid stayed off from Aug 24 (RC m/08-24-board-plan-working-doc) |

Two cautions on this table:
- **Placeholder bias.** The under-$1K win rates are flattered after June by the placeholder effect. Use the Jan–May figures: 8.0% overall and 18.2% after discovery.
- **Cancel risk.** The only cancel evidence for non-ICP is the board's 41% (RC m/11-09). On that figure, a non-ICP win is roughly 2.5x as likely to cancel in onboarding as an ICP win.

---

## 3. Size of the prize: conversion vs volume

No 2027 New Rev.io new-business bookings target exists in GitHub. Two sourced reference points:
- **Growth goal (Oct 14):** about 2x the June 2026 monthly high of $19,735 by April 2027 and about 3x by October 2027 (RC m/10-14).
- **v2 ramp model:** monthly targets from $29,602.92 (Jan 2027) to $59,205.84 (Oct 2027). Jan–Oct 2027 sums to $444,044 (TG, computed). The ramp stops at October 2027.

The 2027 target is therefore a parameter, **T** (annual New Rev.io new-business MRR booked).

**Inputs (2026, Jan 1–Nov 12):** held H = 954; held → won w = 100 / 954 = 10.48%; average win A = $91,402 / 100 = $914; held rate (held / set) = 954 / 1,582 = 60.3%; activities per set = 171,662 / 1,582 = 108.5 (D, computed). Bookings = H × w × A.

| T (annual) | Volume only: held needed | Sets needed | Activities needed (2026 ratio) | Activities at the Nov SDR ratio (582 per set) | Conversion only: held → won needed (H = 954, A = $914) | Deal size only: A needed (H = 954, w = 10.5%) | Mixed: w 15% and A $1,250, held needed |
| --- | --- | --- | --- | --- | --- | --- | --- |
| $91,402 (2026 repeat) | 954 | 1,582 | 171,662 | 920,724 | 10.5% | $914 | 487 |
| $182,804 (2x) | 1,908 | 3,164 | 343,324 | 1,841,448 | 21.0% | $1,828 | 975 |
| $274,206 (3x) | 2,862 | 4,746 | 514,986 | 2,762,172 | 31.4% | $2,742 | 1,462 |
| $444,044 (ramp Jan–Oct 2027) | 4,635 | 7,686 | 833,958 | 4,473,007 | 50.9% | $4,440 | 2,368 |

All values computed from D and TG. The Nov SDR column applies the current SDR ratio (`pace@f21ca74 public/data.json` leading) to every set, as a sensitivity.

Unit comparison (computed):
- **One point of held → won** (10.5% to 11.5%) on 954 held meetings adds about $8,720 MRR a year.
- **The same gain from volume** needs about 95 more held meetings: about 158 more sets and about 17,100 more activities at the 2026 ratio, before any SDR-efficiency decline.

The ICP demo-to-proposal lever (P, computed):
- **Today:** ICP-eligible deals move from demo to proposal at 31.9% (166 → 53), then win 56.6% from proposal, at a mean $1,627.
- **If demo → proposal matched non-ICP (54.5%):** about 21 more ICP wins, worth about $34,570 MRR on the 2026 base. That is 38% of all 2026 New Rev.io new-business bookings, with no new meetings.

What the math implies (inputs, not a plan):
- At 2x, volume alone means doubling held meetings while SDR efficiency is falling (about 170 activities per set in April, 582 in November).
- At 3x or the ramp, conversion and deal size have to move together. The ramp model itself assumes win rates of 14.7% (Jan 2027) to 31.7% (Oct 2027) (TG `win_rate_needed`), and every rep's target sits above that rep's P90 capacity (TG `over_cap`).

---

## 4. Supporting funnel (all held meetings)

All 2026 New Rev.io New Logo closed opps (P, computed):
- **Funnel:** 1,273 reached stage 1, then 618 stage 2 (48.5%), 342 stage 3 (55.3%), 149 stage 4 (43.6%), 110 stage 5 (73.8%), 102 stage 6 (92.7%), and 100 won (98.0%).
- **Win rate after discovery:** 16.2%.
- **Pre-discovery losses:** 655 opps died at stage 1, and Discovery No Show is the top reason (359; full-year review, `pace@f21ca74 public/pipeline.json`). These are the meetings that did not show and are outside this file's scope.

---

## Conflicts

Each conflict lists both values and both sources. None is resolved here.

- **C1. Held meetings:** 954 held first appointments (D, Event-based) vs 618 closed opps reaching stage 2+ (P, computed) vs 1,038 opps created by roster reps (D). Opps are often created before discovery, so opps created exceed meetings held.
- **C2. ICP win rate:** 5.0% (30 / 602, $1K+ size lens, P) vs 8.8% (23 / 261, unified employee + MRR rule with COEO, RC m/11-05) vs 12.0% ICP vs 10.5% non-ICP excluding no-shows ("MSP 10–250" proxy, RC m/11-02). After discovery, the size lens shows ICP-eligible at 9.8% vs non-ICP at 22.4% (P).
- **C3. ICP onboarding cancels:** 7 of 30 (23%; WB names joined to P wins) vs 16% (RC m/11-09) vs 15%, 3 of 23 (RC m/11-05). The cohorts differ in employee filter, COEO, Classic expansions and window.
- **C4. ICP cycle:** median 17.5 days created → won (P) vs 28 days (RC m/11-02).
- **C5. ICP deal size:** median $1,150 / mean $1,627 (P) vs mean $1,558 (RC m/11-02) vs $1,874 with COEO (RC m/11-05).
- **C6. October ICP:** 1 of 82 closed $1K+ (P) vs 2 of 31 met-ICP, falling to 2 of 25 (RC m/11-06). The board count includes COEO, a Classic → New Rev.io expansion that P's New Logo scope excludes.
- **C7. Held-to-won in the model vs actual:** 7.76% (TG `held_to_won`) vs 10.48% (D, 2026 actual, computed). Average deal $803 (TG) vs $914 (D, computed).
- **C8. Rep held totals:** per-rep held counts summed across AEs and SDRs exceed the team's 954, because SDR-set meetings count for both setter and owner (D; `scripts/refresh.py`).
- **C9. Joseph Abarno:** "departed in Q1; last close Mar 25" (`rv@136f256 gtm-alignment-v2.html`) vs a 2026 roster AE with 4,205 activities and 1 win (D) and a Team Blue AE on Nov 3 (`pace@f21ca74 config/teams.json`).
- **C10. Win-back cohort size:** 16 accounts / $27,924 (WB, Nov 12) vs "Evan counts 17 accounts" (RC m/10-09).

## Data gaps, by missing field

- **Employee count** (`Account.NumberOfEmployees` or equivalent): not in P, SRC, JOIN or any other export. Strict ICP per opp, and the 10+/under-$1K and $1K+/under-10 segments, cannot be computed. `Account.ICP__c` is populated on 24 of 107,272 accounts (RC m/11-02).
- **Industry / vertical** (`Account.Industry`): not exported, though the board proxy used it (RC m/11-02). The vertical split above is an account-name keyword proxy.
- **Per-stage timestamps** (OpportunityHistory rows by stage): P keeps only the last stage change `ls` and stage at loss `ps`. No days-in-stage for closed opps and no time to proposal.
- **Event-to-Opportunity link** (`Event.WhatId` for `1-Discovery Call` and `2-Initial DEMO`): not exported, so held meetings cannot be tied to opp outcomes, demo type, or meeting counts per opp.
- **Source after Jun 30** (`Marketing_Source__c`, `Lead_Direction__c` on closed opps): only H1-created opps (SRC) and open opps (P) have it.
- **SE/TAM attendance:** no field. Event attendee or relation records are not exported, and transcript evidence covers Jun 20–Jul 20 only (JOIN).
- **Value Planner use:** no Salesforce field. Only the board summary exists (RC m/11-05).
- **Contact roles on closed opps** (`OpportunityContactRole`): exported for open opps only, so multi-threading on wins vs losses is unknown.
- **Support tickets by account:** not joined. The ICP vs non-ICP ticket and utilization slide (Q3 Board Deep Dive slide 10) has no numbers in GitHub (RC m/11-06). Zendesk was retired Oct 17 (RC m/10-19).
- **Onboarding outcome for under-$1K wins:** the win-back cohort covers cancels over $1K only (WB).
- **Opp-level data for Payments, Cyber Protect / CommerceHub and Legacy Migration:** excluded by `scripts/pipeline.py`.
- **True deal size on lost opps after June:** the $1,000 placeholder replaces it. `la` (amount at loss) is filled only where the amount changed after the loss.
- **2027 target:** none sourced. T is a parameter.
- **Q3 Board Deep Dive cohort engine** (`v19_engine.py`, `v19_live_pull_2026-11-06.json`) and research packs: on the agent machine, not in a repo (RC m/11-06).
