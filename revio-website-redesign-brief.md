# Rev.io Website Visual Redesign Brief
**For use with Claude Design — Dark Enterprise Visual Renovation**
*Prepared by Revay | April 2026*

---

## THE MISSION

Total visual renovation of rev.io — same content, completely new visual layer. The goal is to transform a functional but visually dated HubSpot site into a dark enterprise design system that matches the premium positioning of the product. The summit site hero (dark navy/space, cyan CTAs, clean typography with serif/sans contrast) is the north star.

**What changes:** Every visual element — colors, typography, spacing, section layouts, component styles, imagery treatment, iconography.
**What stays:** All copy, content hierarchy, page structure, navigation, CTA language, and messaging.

---

## DESIGN DIRECTION: DARK ENTERPRISE

### Visual Reference
The Rev.io Summit 2026 hero page (already built in Claude Design) establishes the system:
- **Background:** Deep navy to near-black (#0a0e1a to #050810), with subtle atmospheric depth (space/depth texture or gradient)
- **Primary text:** White/off-white (#f0f4ff, #e8edf8)
- **Accent/CTA:** Cyan-teal (#00c8d4, #1dd3e0) — used for buttons, highlights, key callouts
- **Secondary accent:** Warm white with italic serif for headline contrast moments
- **Nav:** Dark glass/frosted with logo white wordmark
- **Surfaces/cards:** Dark semi-transparent panels with subtle border glow (#ffffff08 background, #ffffff12 border)

### Typography System
- **Display/Hero headlines:** Mix of modern sans (bold, tight tracking) + italic serif for emphasis word — mimicking the "Prepare for *Tomorrow.*" treatment
- **Body:** Clean sans, medium weight, generous line height — highly legible against dark
- **Labels/overlines:** All-caps, wide tracking, muted (#8b95a8 or similar)
- **Suggested fonts:** Inter or Plus Jakarta Sans (sans) + Fraunces or DM Serif Display (italic serif accent)

### Component Style
- **Buttons:** Pill-shaped, cyan fill for primary, ghost/outline for secondary — match summit "Register Now →" style
- **Cards:** Dark panel with very subtle border, soft shadow — no harsh white boxes
- **Section dividers:** Gradient fades, not hard lines
- **Icons:** Thin line style, cyan-tinted
- **Stats/metrics:** Large bold number + label — displayed as standalone heroes, not buried in tables
- **Partner/integration logos:** Grayscale → white against dark, with hover color treatment
- **Testimonials:** Full-bleed dark quote treatment with attribution

---

## SITE ARCHITECTURE + PAGE INVENTORY

### Tier 1 — High Priority (Conversion Critical)
These pages drive the most traffic and demo requests. Redesign these first.

**1. Homepage (rev.io)**
Current state: Light gray/white HubSpot template, mixed visual hierarchy, busy section-by-section layout. Sections: hero, platform overview, product pillars (Billing/PSA/Payments), industries, social proof/stats, integrations, blog, CTA.
Redesign priority: Hero section is the most critical — currently looks like generic SaaS. Needs the dark depth treatment from the summit. Stats section (100%, 2x, 300%, 5:1) should be displayed as large bold callouts over a dark surface. Integration logo grid should be white-on-dark.

**2. Products — PSA (/products/psa)**
Current state: Mixed dark header, then white content — feels split/inconsistent. Feature grid uses light card tiles.
Redesign priority: Maintain dark throughout. Feature cards should be dark glass panels. The feature list (Service Desk, Time Tracking, Scheduling, etc.) should use icon + headline + short copy in a dark grid layout.

**3. Products — Billing (/products/psa/billing)**
Similar to PSA. Needs consistent dark treatment.

**4. Products — Payments (/products/payments-processing)**
Same.

**5. Industries — MSP (/industries/msp)**
Current state: Mostly text-heavy, light background, three-column "problem/solution" layout.
Redesign priority: Dark hero with industry-specific atmospheric visual. Problem/solution sections should be presented as contrasting dark panels, not light text columns.

**6. Industries — Communications (/industries/communications)**
Same pattern as MSP.

**7. Industries — Security Integrators (/industries/security-alarm-system)**
Same.

**8. Demo/Contact (/demo)**
Critical conversion page. Should feel premium and frictionless — dark form with teal CTA, minimal distraction.

### Tier 2 — Secondary Pages
Redesign with the template system built from Tier 1.

- /integrations — Integration ecosystem page. Logo grid + category descriptions. Great candidate for dark glass card treatment per integration category.
- /about — Company page. Currently sparse. Dark with team/mission feel.
- /pricing (if exists) — Pricing table. Dark with highlighted plan.
- /careers — If exists.
- /resources / /blog — Blog listing and article pages. Dark editorial template.
- /company-news / press releases

### Tier 3 — Template Pages (Apply System)
These just need the system applied — no bespoke design needed:
- Individual blog posts (dark editorial template)
- Individual product sub-pages (/products/psa/service-desk, /products/psa/time-tracking, etc.)
- Individual press release pages

---

## CURRENT VISUAL PROBLEMS TO SOLVE

Based on live site audit:

1. **Split personality** — Some pages start dark (hero header) then go bright white below the fold. Feels broken. The dark should sustain throughout.

2. **Light card tiles on white background** — The feature grid on PSA and other pages uses bright white cards on white/light gray background. Zero depth, no visual hierarchy.

3. **Typography inconsistency** — Mix of font weights, sizes, and casing across pages. No clear display/body/label system.

4. **Stats buried instead of celebrated** — Metrics like "2x revenue" and "300% higher ops efficiency" are displayed in small icon+text blocks. These are the most powerful social proof on the site and should be visual anchors.

5. **CTA button inconsistency** — Multiple button styles across pages. No unified treatment.

6. **Integration logos look like a vendor list** — Currently displayed in a cluttered grid. Should be white-on-dark with category grouping.

7. **Blog listing is generic** — Standard HubSpot template. No visual identity.

8. **Mobile rendering** — The current site on mobile shows aggressive vertical stacking without visual interest. Dark surfaces with proper spacing fix this naturally.

---

## WHAT TO TELL CLAUDE DESIGN

### Onboarding Prompt (paste this first):
> "I need to redesign the visual layer of rev.io, a B2B SaaS platform for MSPs and telecom providers. The site runs on HubSpot. I am NOT changing any content — only the visual system. Here is the design direction: **dark enterprise**. The reference is a summit event page we already built in Claude Design — dark navy backgrounds (#0a0e1a), white/off-white text, cyan-teal CTAs (#00c8d4), subtle atmospheric depth in backgrounds, italic serif contrast on headline emphasis words, dark glass card panels. This is a full design system rollout across a 50+ page site."

### Per-Page Prompt Template:
> "Redesign the [PAGE NAME] page of rev.io with our dark enterprise system. The content and copy stay exactly the same. Apply: dark navy background throughout the full page (no white sections below the fold), dark glass card panels for feature grids, white primary text, cyan CTA buttons, all-caps label overlines in muted gray, large display numbers for stats, white-on-dark treatment for all logos. Reference the design system we built for the summit hero."

### Priority Order:
1. Homepage hero section (get this perfect — it sets everything)
2. Homepage full page
3. PSA product page
4. One industry page (MSP) as the industry template
5. Demo/contact page
6. Integrations page
7. Remaining product pages (apply template)
8. Remaining industry pages (apply template)
9. Blog template
10. About page

---

## HANDOFF NOTES FOR YOUR DESIGNER

**The design system already exists in Claude Design** (from the summit site). The main task is:
1. Export or document the design tokens from the summit project (colors, type scale, component styles)
2. Apply them systematically to each page type
3. The homepage will need the most bespoke work — it's the most complex page
4. Product and industry pages share enough structure that one template covers both
5. Blog is entirely template-based — design once, apply everywhere

**HubSpot constraints to be aware of:**
- The site is in HubSpot CMS — actual implementation will require a developer to translate the designs into HubSpot modules
- Claude Design output will be the design spec/prototype — handoff to dev for implementation
- Claude Code handoff (Claude Design → Claude Code) could potentially generate HubSpot-compatible HTML/CSS for the module components

---

## QUICK-REFERENCE: PAGE URLS

| Page | URL | Priority |
|------|-----|----------|
| Homepage | rev.io | T1 |
| PSA Platform | rev.io/products/psa | T1 |
| Billing | rev.io/products/psa/billing | T1 |
| Payments | rev.io/products/payments-processing | T1 |
| MSP Industry | rev.io/industries/msp | T1 |
| Communications | rev.io/industries/communications | T1 |
| Security | rev.io/industries/security-alarm-system | T1 |
| Demo | rev.io/demo | T1 |
| Integrations | rev.io/integrations | T2 |
| About | rev.io/about | T2 |
| Blog listing | rev.io/blog | T2 |
| Service Desk | rev.io/products/psa/service-desk | T3 |
| Time Tracking | rev.io/products/psa/time-tracking | T3 |
| Dispatch | rev.io/products/psa/dispatch | T3 |
| CRM | rev.io/products/psa/customer-relationship-management | T3 |
| Reporting | rev.io/products/psa/reporting-analytics | T3 |
| Inventory | rev.io/products/psa/inventory-management | T3 |
| Project Mgmt | rev.io/products/psa/project-management | T3 |
| AI Automation | rev.io/products/psa/ai-automation | T3 |
