# Council v2 + Notion Vault Communication Substrate

**Version:** 2026-05-28 draft 1  
**Owner:** Revay / Evan Rice  
**Purpose:** Create a company-wide coordination substrate for bounded, evidence-backed work across Rev.io department specialty agents.

---

## 1. Executive Summary

Council v2 is a shared operating protocol for Rev.io agents. It is designed for situations where one executive question or bounded deliverable needs a 360-degree view from multiple departments: Sales, Marketing, Product, Client Success, Support, Onboarding, Finance, Ops, and others.

The system is not a group chat and not a debate room. It is a structured handoff process built on Notion, where agents receive packets, contribute source-backed perspectives, and leave durable outputs that humans and other agents can inspect later.

The central metaphor is **Notion as a shared coordination vault**, similar to an Obsidian vault:

- Human-readable page structure
- Stable packet files
- Agent inboxes and outboxes
- Append-only contribution pages
- Lightweight metadata databases for discoverability
- Discord or Teams used only as notification layers
- Evidence and retrieval status required for every contribution

Council v2 starts as the coordination substrate for the Revay Insight OS / Command Center, but the same pattern can support company-wide work such as executive offsite prep, board meeting prep, quarterly business reviews, client risk reviews, product launch readiness, annual planning, and cross-functional root-cause analysis.

---

## 2. Why This Exists

Rev.io will increasingly have specialized agents attached to different business areas. Each agent may know a lot about its domain, but no single agent has the full operating picture.

Common executive questions require cross-functional context:

- What are the biggest risks going into the board meeting?
- Where are we seeing PSA adoption friction, and who owns the next move?
- What changed in the pipeline, onboarding forecast, support burden, and churn risk this month?
- What should we discuss at the executive offsite?
- Are product gaps showing up consistently across Sales, Support, Onboarding, and CS?
- Which customer risks are real, source-backed, and urgent?

Without a substrate, these questions become one-off Slack/Discord threads, meetings, or manually compiled docs. The result is lost evidence, duplicated work, untraceable assumptions, and no durable memory.

Council v2 turns those questions into bounded coordination packets.

---

## 3. Design Principles

1. **Bounded work, not conversation**  
   Every Council item has an objective, scope, contributors, output contract, owner, deadline, and close condition.

2. **Evidence-first**  
   Agents must cite source systems, links, record counts, timestamps, retrieval status, and failures. A failed retrieval is a valid contribution; fabricated data is not.

3. **Notion is the source of truth**  
   Chat channels are only notification surfaces. The durable record lives in Notion.

4. **Vault, not monolith**  
   Use a readable page tree plus lightweight databases. Avoid overbuilt relational schemas that agents cannot reliably use.

5. **Agents are peers, not workers under one orchestrator**  
   Revay cannot control other agents. Each agent owns its inbox, outbox, and domain response.

6. **Append-only by default**  
   Agents should not mutate master packet pages or each other's contributions. They submit their own response pages.

7. **Human decision authority**  
   Agents can recommend, synthesize, and escalate. Humans decide strategic actions.

8. **Reusable across company workflows**  
   The substrate should support Grow Team intelligence and broader executive/company coordination.

---

## 4. Core Concept: Coordination Packets

A **Coordination Packet** is a bounded work item that asks specific agents for source-backed perspectives toward a concrete output.

Examples:

- `PKT-260528-BOARD-RISKS` — Board meeting business risk scan
- `PKT-260528-OFFSITE-THEMES` — Executive offsite prep: top cross-functional themes
- `PKT-260528-PSA-RETENTION` — PSA adoption and retention risk review
- `PKT-260528-PRODUCT-FRICTION` — Product friction appearing across Sales, Support, and CS
- `PKT-260528-QBR-VOICE` — QBR themes from customer-facing teams

Each packet has:

- Packet ID
- Title
- Objective
- Business context
- Scope
- Out of scope
- Required agents / departments
- Optional agents / departments
- Decision owner
- Synthesizer
- Deadline / SLA
- Output contract
- Evidence requirements
- Close condition
- Links to contributions
- Final synthesis
- Decision and actions

---

## 5. Recommended Notion Vault Structure

Create one top-level Notion page:

```text
Council Vault
├── 00 Protocol
│   ├── Council v2 Operating Protocol
│   ├── Packet Template
│   ├── Agent Contribution Contract
│   ├── Evidence + Data Integrity Rules
│   └── Naming + Status Conventions
│
├── 01 Packets
│   ├── Active Packets Index
│   └── Packet pages / packet database rows
│
├── 02 Agent Inboxes
│   ├── Revay Inbox
│   ├── Robin Inbox
│   ├── Rosie Inbox
│   ├── RevItUp Inbox
│   └── Future agent inboxes
│
├── 03 Agent Outboxes
│   ├── Revay Outbox
│   ├── Robin Outbox
│   ├── Rosie Outbox
│   ├── RevItUp Outbox
│   └── Future agent outboxes
│
├── 04 Syntheses
│   └── Final synthesis pages
│
├── 05 Decisions
│   └── Decision records
│
├── 06 Actions
│   └── Follow-up action records
│
└── 99 Archive
    └── Closed packets and old contributions
```

### Important Implementation Choice

Use a **hybrid vault**:

- The top-level structure is human-readable pages.
- Agent inboxes and outboxes are lightweight Notion databases for easy querying.
- Each database row is still a page, so the body can hold markdown/JSON.

This gives us the best of both worlds:

- Humans can browse it like a vault.
- Agents can query it like a queue.

---

## 6. Minimal Database Layer

Avoid complex relational schemas in v1. Use simple queue/index databases.

### 6.1 Packets Index

Purpose: discover active packets and high-level status.

Minimum properties:

- **Name** — title
- **Packet ID** — text, stable slug
- **Status** — Proposed, Collecting Inputs, Ready for Synthesis, Synthesized, Decided, Archived, Cancelled, Blocked
- **Priority** — Low, Normal, High, Critical
- **Domains** — multi-select
- **Decision Owner** — text/person
- **Synthesizer** — text
- **Deadline** — date
- **Required Agents** — multi-select/text
- **Optional Agents** — multi-select/text
- **Packet Link** — URL/relation if needed
- **Created At** — date
- **Last Updated** — date

The page body contains the full packet file.

### 6.2 Agent Inbox DBs

Purpose: let each agent efficiently find assigned work.

Minimum properties:

- **Name** — title
- **Packet ID** — text
- **Assigned Agent** — text/select
- **Status** — Unread, In Progress, Submitted, Blocked, Cancelled
- **Due Date** — date
- **Priority** — Low, Normal, High, Critical
- **Packet Link** — URL/relation
- **Created At** — date
- **Last Touched** — date

The page body contains the handoff note.

### 6.3 Agent Outbox DBs

Purpose: hold immutable-ish agent contributions.

Minimum properties:

- **Name** — title
- **Packet ID** — text
- **Agent** — text/select
- **Status** — Draft, Submitted, Needs Evidence, Accepted, Rejected
- **Confidence** — Low, Medium, High
- **Retrieval Status** — Success, Partial, Failed, Not Retrieved, Stale Snapshot
- **Submitted At** — date
- **Source Systems** — multi-select/text

The page body contains the contribution contract.

### 6.4 Syntheses / Decisions / Actions

These can begin as pages with optional lightweight indexes. Do not overbuild until packet and contribution flows are stable.

---

## 7. Agent Contribution Contract

Every agent contribution should use the same structure.

Recommended page body:

```markdown
# Agent Contribution — {Agent} — {Packet ID}

## Summary
One-paragraph answer from this agent's domain.

## Structured Response
```json
{
  "packet_id": "PKT-260528-EXAMPLE",
  "agent": "Agent Name",
  "department_or_lens": "Sales | Marketing | Product | CS | Support | Onboarding | Finance | Ops | Other",
  "signal": "What the agent sees from its domain.",
  "risk": "What could go wrong or what is concerning.",
  "recommendation": "What the agent recommends doing.",
  "confidence": "low | medium | high",
  "evidence": [
    {
      "source_system": "Salesforce | Zendesk | Notion | Outreach | Fireflies | Wrike | Other",
      "description": "What this evidence supports.",
      "url_or_id": "link or record id",
      "retrieved_at": "ISO timestamp",
      "record_count": 0,
      "status": "success | partial | failed | stale_snapshot",
      "raw_error_if_failed": ""
    }
  ],
  "dependency_or_ask": "What this agent needs from another team/human, if anything.",
  "suggested_action": "Concrete next step, if any."
}
```

## Notes
Additional human-readable context, caveats, or nuance.
```

Rules:

- Do not invent missing facts.
- If source retrieval fails, record the failure.
- If confidence is low, say why.
- Do not edit another agent's contribution.
- Do not update the master packet checklist directly.
- Submit one contribution page per packet unless explicitly asked for follow-up.

---

## 8. Packet Template

```markdown
# {Packet Title}

**Packet ID:** PKT-YYMMDD-SLUG  
**Status:** Proposed | Collecting Inputs | Ready for Synthesis | Synthesized | Decided | Archived | Blocked  
**Priority:** Low | Normal | High | Critical  
**Decision Owner:** Name  
**Synthesizer:** Name/Agent  
**Deadline:** Date/time  

## Objective
What question are we trying to answer or what output are we trying to produce?

## Business Context
Why this matters now.

## Scope
What should contributors consider?

## Out of Scope
What should contributors avoid spending time on?

## Required Contributors
- Agent / department / lens

## Optional Contributors
- Agent / department / lens

## Output Contract
What the final answer must include.

## Evidence Requirements
What counts as acceptable source support?

## Close Condition
What must be true for this packet to be considered done?

## Contribution Links
Contributions are added here by the synthesizer or by append-only link references.

## Synthesis
Pending until contributions are submitted and validated.

## Decision
Pending human decision.

## Actions
Pending.
```

---

## 9. Operating Lifecycle

1. **Create Packet**  
   A human or agent creates a packet with objective, scope, contributors, deadline, and output contract.

2. **Dispatch to Inboxes**  
   Each required agent gets an inbox item linked to the packet.

3. **Agent Reviews Packet**  
   Agent reads the packet and its own inbox handoff. It does not need to read other agents' pending responses.

4. **Agent Writes Outbox Contribution**  
   Agent creates a contribution page in its outbox using the contract.

5. **Synthesis Readiness Check**  
   Synthesizer checks whether all required contributions are present or whether timeout/escalation rules apply.

6. **Synthesis**  
   Synthesizer produces summary, areas of agreement, dissent, evidence quality, risks, options, recommended action, and unresolved dependencies.

7. **Decision**  
   Human decision owner accepts, rejects, defers, or asks for more data.

8. **Actions**  
   Accepted recommendations become action records.

9. **Archive / Learn**  
   Packet is archived after decision/action capture. Lessons update protocol if needed.

---

## 10. Timeout + Escalation Rules

Recommended v1 rules:

- If a required agent has not responded by deadline, packet becomes **Blocked** or **Partial - Missing Input**.
- Synthesizer may create a partial synthesis only if the decision owner allows it.
- Missing contributions must be explicitly listed.
- No silent assumption that a non-response means agreement.
- If an agent retrieval fails, the failure is included as evidence status, not hidden.
- Critical packets can trigger a manual notification to the relevant human owner.

---

## 11. Permission Model

v1 goal: practical containment, not perfect security.

Recommended default:

- All participating agents can read:
  - `00 Protocol`
  - relevant `01 Packets`
  - their own inbox
  - their own outbox
- Agents can write:
  - their own outbox
  - status of their own inbox item
- Agents should not write:
  - other agents' outboxes
  - final synthesis pages unless assigned
  - decision records unless assigned
  - master packet body except append-only contribution links, if permitted

Important Notion caveat: Notion API permissions are not true row-level security. Page/database sharing must be handled carefully, and v1 should assume social/procedural guardrails plus scoped Notion sharing.

---

## 12. How Humans Should Use It

Good packet prompts:

- “Prepare a 360-degree risk scan for the next board meeting.”
- “Give me cross-functional input on the top three PSA adoption blockers.”
- “Prepare executive offsite discussion themes from each department.”
- “Assess whether this churn risk is isolated, systemic, or product-driven.”
- “Create a full business view on why implementation timelines are slipping.”

Bad packet prompts:

- “Discuss strategy.”
- “What do you all think?”
- “Monitor everything.”
- “Debate this in chat.”

The packet should always produce a bounded output.

---

## 13. Example Use Cases Beyond Grow Team

### Executive Offsite Prep
Required agents:
- Sales/GTM
- Product
- Client Success
- Support
- Finance
- Operations
- Marketing

Output:
- Top 5 strategic themes
- Cross-functional tensions
- Decisions needed
- Pre-read evidence links
- Suggested agenda blocks

### Board Meeting Prep
Required agents:
- Finance
- Sales/GTM
- Product
- CS/Support
- Onboarding
- Revay synthesis

Output:
- Business performance narrative
- Material risks
- What changed since last board meeting
- Evidence-backed opportunities
- Recommended executive talking points

### Customer Risk Review
Required agents:
- CS/AM
- Support
- Product
- Onboarding
- Sales if expansion/renewal involved

Output:
- Root-cause view
- Account-specific risks
- Product/process themes
- Recommended owner/action

### Product Launch Readiness
Required agents:
- Product
- Marketing
- Sales Enablement
- Support
- CS
- Onboarding

Output:
- Launch readiness score
- Customer impact risks
- Enablement gaps
- Support burden forecast
- Go/no-go recommendation

---

## 14. Relationship to Revay Insight OS / Command Center

Council v2 is the coordination substrate. The Command Center is the executive surface.

Council outputs can feed:

- Insight Ledger
- Action Queue
- Weekly/monthly snapshots
- Board prep packs
- Executive offsite packs
- Domain dashboards
- “What changed?” changelogs

The Command Center should not be built on loose chat summaries. It should be built on durable packets, evidence-backed contributions, synthesized decisions, and action outcomes.

---

## 15. Recommended Rollout

### Phase 1 — Protocol + Vault Skeleton
- Create Council Vault page tree.
- Create protocol docs.
- Create packet/contribution templates.
- Create lightweight inbox/outbox DBs.

### Phase 2 — Revay-only Dry Run
- Create one sample packet.
- Submit Revay contribution.
- Validate output structure.
- Confirm Notion links/statuses work.

### Phase 3 — One Partner Agent Pilot
- Onboard one counterpart and their agent.
- Give them the agent brief.
- Run one bounded packet.
- Capture friction and revise protocol.

### Phase 4 — Multi-Agent Pilot
- Run one company-relevant packet, e.g. executive offsite prep or board risk scan.
- Require 3–5 agents.
- Produce synthesis and action list.

### Phase 5 — Command Center Integration
- Promote recurring outputs into Insight Ledger and Action Queue.
- Build executive views only after substrate is stable.

---

## 16. What To Share With Counterparts

Recommended sharing package:

1. **Short presentation** — explains why this matters, how it works, and what leaders need to approve.
2. **This markdown protocol/spec** — agent-readable operating contract.
3. **Agent onboarding brief** — a shorter file each agent can load into memory.
4. **Example packet** — one concrete use case like Executive Offsite Prep.

The presentation is for humans. The markdown spec is for agents. The example packet is for both.
