# Visual Design Audit & Forensic Screenshot Analysis

**Analyzed Render Artifacts:** `visual-qa/*.png` (19 Screenshots across 10 viewports)  
**Date:** August 19, 2026  
**Auditor:** Antigravity AI Art Direction & Product Design Suite

---

## OVERALL VISUAL SCORE: 6.8 / 10

| Category | Mobile Score (320-430px) | Desktop Score (1440-1728px) | Visual Evaluation Notes |
| :--- | :---: | :---: | :--- |
| **Hero Composition** | 6.5 / 10 | 7.5 / 10 | Background image overlay reduces text contrast; cookie banner covers hero CTAs on mobile. |
| **Typography & Contrast** | 6.8 / 10 | 7.8 / 10 | Playfair Display is elegant, but lacks dark contrast backing over background photos. |
| **Mobile Navigation** | 7.0 / 10 | N/A | Navigation drawer open state is clean, but numbered list items have low visibility. |
| **3D Sculpture & Depth** | 5.5 / 10 | 6.5 / 10 | WebGL sculpture is partially obscured by fixed photographic scene backdrops. |
| **Editorial Practice Index** | 7.2 / 10 | 7.8 / 10 | Monograph copy is structured, but photographic background clutter degrades readability. |
| **Case Studies & Portfolio** | 7.0 / 10 | 8.0 / 10 | Good metadata structure, but contrast over interior photos needs dark vignette backing. |
| **Intake Desk & Forms** | 7.5 / 10 | 8.2 / 10 | Clean intake desk structure, but cookie notice banner covers submit buttons. |
| **Footer & Publication Finish** | 7.8 / 10 | 8.5 / 10 | Structured 4-column layout with legal overview and GDPR compliance. |

---

## TOP 10 VISUAL PROBLEMS (Ranked by Visual Damage)

### 1. Cookie Notice Banner Obscuring Mobile CTAs
- **SCREENSHOT:** `01_hero_closed.png`, `07_contact_desk.png`, `09_mobile_nav_open.png`
- **SECTION:** Global Fixed Cookie Banner
- **PROBLEM:** The fixed cookie notice banner covers ~180px at the bottom of mobile screens, hiding primary conversion CTAs (*REQUEST PRIVATE CONSULTATION*, *WHATSAPP DESK*) and lower form buttons.
- **WHY IT LOOKS BAD:** Obstructs conversion actions and creates visual clutter across every section.
- **EXACT DESIGN FIX:** Compact the cookie banner into a minimal floating bar or discrete bottom pill with high z-index and padding.

### 2. Photographic Scene Overlap Reducing Headline Contrast
- **SCREENSHOT:** `01_hero_closed.png`, `03_advisor.png`
- **SECTION:** Hero & Executive Monograph
- **PROBLEM:** White Playfair serif headings ("PRIVATE ADVICE.", "Make savvy investment decisions.") are rendered directly over complex, bright architectural interior photos (`ResidenceViewport.tsx`).
- **WHY IT LOOKS BAD:** Text degrades in legibility over bright window frames and glass chandeliers.
- **EXACT DESIGN FIX:** Add a subtle dark radial gradient vignette backing or dark surface backdrop (`bg-surface-primary/85 border border-white/10`) behind lead copy blocks.

### 3. WebGL Spatial Sculpture Obscured by Photo Backdrops
- **SCREENSHOT:** `01_hero_closed.png`, `desktop_1440x900_full.png`
- **SECTION:** Spatial Canvas / Hero
- **PROBLEM:** The brushed-metal and dark-stone WebGL sculpture in `SpatialCanvas.tsx` is rendered behind `<ResidenceViewport />` photographic backdrops, rendering the 3D sculpture invisible on full-bleed photo scenes.
- **WHY IT LOOKS BAD:** The 3D element fails to act as an integrated architectural focal point.
- **EXACT DESIGN FIX:** Layer the WebGL canvas clearly or blend residence scenes with an opacity gradient to expose the monolithic sculpture.

### 4. Low Visibility of Navigation Drawer Numbers
- **SCREENSHOT:** `09_mobile_nav_open.png`
- **SECTION:** Mobile Navigation Drawer
- **PROBLEM:** The numbered indexes (`01` through `07`) on the right side of the open mobile menu are styled with faint gray text (`text-text-secondary/60`), making them nearly invisible against pure black.
- **WHY IT LOOKS BAD:** Decreases technical typography elegance and legibility.
- **EXACT DESIGN FIX:** Update drawer numbers to use high-contrast metallic champagne styling (`text-accent/90 font-mono`).

### 5. Hero Button Touch Stack Proximity to Cookie Notice
- **SCREENSHOT:** `01_hero_closed.png`
- **SECTION:** Hero CTAs
- **PROBLEM:** The dual CTA button stack (*REQUEST PRIVATE CONSULTATION* / *EXPLORE THE RESIDENCE ↓*) collides with the cookie notice bar on screens under 390px height.
- **WHY IT LOOKS BAD:** Creates a cramped, crowded first viewport.
- **EXACT DESIGN FIX:** Adjust hero bottom vertical padding (`pb-8 sm:pb-16`) to provide generous separation from fixed bottom banners.

### 6. Background Image Noise in Case Study Section
- **SCREENSHOT:** `07_contact_desk.png`
- **SECTION:** Curated Engagements
- **PROBLEM:** Project headlines ("Prime Northern Bucharest Penthouse & Residence") sit over high-contrast photographic window frames without a dark container card.
- **WHY IT LOOKS BAD:** Letterforms bleed into background room details.
- **EXACT DESIGN FIX:** Encapsulate case study details within clean charcoal backdrop containers (`bg-surface-primary/90 border border-white/10`).

### 7. Unrestrained Line Heights on Mobile Headlines
- **SCREENSHOT:** `03_advisor.png`
- **SECTION:** Executive Profile
- **PROBLEM:** Display statement headline spans 4 short lines with wide leading on 390px screens.
- **WHY IT LOOKS BAD:** Consumes vertical space and breaks reading flow.
- **EXACT DESIGN FIX:** Fine-tune mobile line-height (`leading-[1.1]`) and max-width (`max-w-md`) for mobile viewports.

### 8. Faint Eyebrow Separators
- **SCREENSHOT:** `01_hero_closed.png`, `03_advisor.png`
- **SECTION:** Section Headers
- **PROBLEM:** Micro-eyebrows (`01 / 08 ARRIVE`) use thin rules that blend into background photography.
- **WHY IT LOOKS BAD:** Section indexes lose visual anchor weight.
- **EXACT DESIGN FIX:** Increase eyebrow rule opacity (`bg-accent/60`) and add text shadow or dark backdrop.

### 9. High Density in Footer Navigation Links
- **SCREENSHOT:** `08_footer.png`
- **SECTION:** Footer
- **PROBLEM:** Navigation links in Column 2 & Column 3 feel densely stacked on mobile screen width (320px–390px).
- **WHY IT LOOKS BAD:** Lacks the generous whitespace of a luxury publication.
- **EXACT DESIGN FIX:** Increase vertical padding between footer list items (`space-y-3`).

### 10. Form Field Focus States Contrast
- **SCREENSHOT:** `07_contact_desk.png`
- **SECTION:** Private Intake Desk
- **PROBLEM:** Form inputs in `<PrivateConsultationForm />` blend into background when unfocused.
- **WHY IT LOOKS BAD:** Form inputs lack clear visual affordance.
- **EXACT DESIGN FIX:** Apply distinct surface styling (`bg-surface-primary border border-white/15 focus:border-accent`).
