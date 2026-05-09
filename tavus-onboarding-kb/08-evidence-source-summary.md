# Evidence and Source Summary for Phase 1 Tavus KB

This document summarizes the source material used to build the Tavus onboarding knowledge base.

## Notion sources retrieved
- Onboarding Efficiency Project page: HTTP 200, 72 top-level blocks retrieved.
- Onboarding Calls DB: HTTP 200, 395 records returned.
- PSA client onboarding dashboard: HTTP 200, 195 client records returned through read-only Notion integration.
- Onboarding Account Health DB: HTTP 200, 0 records returned at retrieval time.

## Onboarding Calls DB snapshot
Records returned: 395.

Risk levels:
- Medium: 190
- High: 92
- Low: 90
- Critical: 23

Graduation stages:
- Configuration: 289
- Training: 42
- Fundamentals: 31
- Kickoff: 25
- Pre-Graduation: 5
- Graduated: 3

Client sentiment:
- Positive: 189
- Neutral: 154
- Frustrated: 46
- At Risk: 3
- Unknown: 3

Most common modules discussed:
- Billing Profiles: 313
- Invoicing: 274
- Integrations: 240
- Service Catalog: 226
- Reporting: 176
- Payments: 163
- Customer Portal: 110
- User Setup: 106
- QuickBooks: 70
- Project Management: 68
- GL Codes: 62
- Dispatch: 47
- Mobile App: 40

Average overall score across scored calls: 65.

## PSA client dashboard snapshot
Records returned: 195.
Active non-graduated/non-canceled records: 105.

Health categories:
- Canceled: 73
- Graduated: 47
- At Risk: 46
- Healthy: 21
- NKO: 8

Operational observations:
- Average milestone completion across records with milestone data: 44%.
- Overdue milestones counted: 12.
- On-hold records: 12.
- RTS records: 20.

## Local analysis reports consulted
- Onboarding Process Analysis
- PSA Transcript Intelligence
- PSA Call Intelligence
- PSA Onboarding Automation

Key synthesized lessons:
- Fundamentals is the practical graduation gate.
- Timeline/friction questions should be treated as a risk signal.
- Integration and billing/accounting topics dominate onboarding conversations.
- Feature-gap and roadmap-sensitive questions require careful escalation.
- Client-specific status should be tool-driven, not guessed from static knowledge.

## Data handling choice
This Tavus KB intentionally excludes raw client-specific notes and named sensitive account examples. Those should be served through authenticated backend tools during a live session, not through publicly hosted Tavus ingestion documents.
