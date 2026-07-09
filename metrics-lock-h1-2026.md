# Metrics Lock - H1 2026

Generated: 2026-07-09T23:28:58.128Z

Purpose: one presentation-control file for H1/H2 metric values. These are the current candidate values from the active deck package. Certification status is explicit; uncertified values must stay labeled in the deck.

| Metric | Definition | Unit | Period | Source / retrieval | Owner | Certification | Approved value |
|---|---|---:|---|---|---|---|---:|
| Direct bookings actual | Closed-won product bookings/MRR as represented in active scorecard | MRR dollars | H1 2026 | Salesforce Opportunity pull noted as HTTP 200, 226 records through 2026-06-30 | Finance / RevOps | Needs certification | $123,827 |
| Direct bookings target | H1 direct bookings target from prior deck table | MRR dollars | H1 2026 | Prior deck slide 15/16 target table | Finance | Needs certification | $309,154 |
| H2 budget target | Original H2 direct bookings target | MRR dollars | H2 2026 | Derived from FY target minus H1 target | Finance | Needs certification | $496,338 |
| Full-year target | Full-year direct bookings target | MRR dollars | FY 2026 | Prior target table / active scorecard | Finance | Needs certification | $805,492 |
| Remaining FY catch-up | FY target minus H1 actual | MRR dollars | H2 2026 | Calculated: $805,492 - $123,827 | Finance | Formula pending certification | $681,665 |
| Marketing MRR actual | Marketing workbook H1 MRR actual | MRR dollars | H1 2026 | Evan-uploaded SLT tracker workbook Marketing_KPIs_7.1.26, direct XLSX XML extraction on 2026-07-01 | RevOps / Marketing | Needs certification | $62,034 |
| Marketing MRR target | Marketing workbook H1 MRR target | MRR dollars | H1 2026 | Same workbook | RevOps / Marketing | Needs certification | $138,102 |
| Total leads | Marketing workbook total leads | Count | H1 2026 | Same workbook | RevOps / Marketing | Needs certification | 859 |
| Total opportunities | Marketing workbook total opportunities | Count | H1 2026 | Same workbook | RevOps / Marketing | Needs certification | 517 |
| Pipeline value | Marketing workbook pipeline value | MRR dollars | H1 2026 | Same workbook | RevOps / Marketing | Needs certification | $526,353 |
| Closed-won count | Marketing workbook closed-won count | Count | H1 2026 | Same workbook; conflicts with other source-system definitions | RevOps / Marketing | Needs definition reconciliation | 81 |
| PSA graduations | H1 PSA graduated client count | Count | H1 2026 | Evan owner-confirmed in Discord on 2026-07-01; prior Notion pull showed 61 | Implementation / CS | Needs source-system certification | 68 |
| GRR | Gross revenue retention | Percent | H1 2026 | Owner-confirmed in active deck | Finance / CS | Needs Finance certification | 94.9% |
| NRR | Net revenue retention | Percent | H1 2026 | Owner-confirmed in active deck | Finance / CS | Needs Finance certification | 99.1% |
| Cancelled onboarding MRR | Cancelled PSA onboarding cohort MRR reviewed | MRR dollars | H1 / review cohort | Cancelled PSA analysis, 20 accounts, 12 with usable transcript evidence | Implementation / CS | Needs denominator and reason-code certification | $27,900 |
| Cross-sell deals | Company incentive cross-sell count | Count | H1 2026 | Evan self-report / active deck | Finance / CS | Needs source-system certification | 13 |
| Client Fans | Company incentive Client Fans count | Count | H1 2026 | Active deck / owner-confirmed value; definition not operationalized | CS / Marketing | Needs lifecycle definition | 13 |

## Conflicts Resolved For This Draft

- Active deck values supersede stale live-copy override values for this update.
- Billing and Odin should be separated where product performance matters; combining can mask Odin at zero actual.
- The new active deck does not call the live copy override API, preventing stale override text from changing current slide copy.

## Still Required

1. Finance certification: direct bookings, H2 target, FY target, GRR, NRR, expansion, churn.
2. RevOps certification: funnel, marketing source attribution, source-system definitions.
3. Implementation/CS certification: graduations, backlog, cancellations, close-to-live, time-to-first-value.
4. Product certification: release outcomes and claim readiness.
