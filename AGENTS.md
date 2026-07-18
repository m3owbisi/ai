<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# Equal AI Website — Agent Operating Contract

**Document status:** review draft  
**Current phase:** planning and approval only  
**Implementation authority:** not granted by this document  
**Primary delivery focus:** home-page scroll 1 and scroll 2  
**Protected scope:** all existing pages, routes, content, assets, and the current index.html

---

## 1. Mission

Build an original, premium, motion-led marketing experience for Equal AI that makes the product understandable in the first viewport and proves it in the second scroll.

The result must feel designed for Equal AI rather than assembled from a template. It may learn from the client references, but it must not reproduce any reference site literally. The visual idea should combine:

- Wispr Flow's immediate product demonstration;
- CRED's restraint, typography-led confidence, and cinematic finish;
- Beside's one-time headline treatment and elegant rhythm;
- Super.money's dimensional, playful product presentation;
- Linear's controlled interface animation;
- Assemble's clarity and disciplined hierarchy;
- Equal AI's official green identity, product UI, voice, and India-first positioning.

The website is a marketing surface for an existing product. It is not a rebuild of the Android or iOS application, a backend project, or an excuse to replace unrelated pages.

---

## 2. Instruction Precedence

When instructions disagree, use this order:

1. The user's latest explicit instruction in the active conversation.
2. Approved client feedback and the latest signed-off copy or brand document.
3. The official Equal AI Figma brand kit and original brand assets.
4. This AGENTS.md.
5. The approved DESIGN.md.
6. Repository-local instructions and approved skill files.
7. The implementation brief and earlier meeting notes.
8. Reference websites and screenshots.
9. Agent preference.

The latest instruction currently overrides the older note that suggested removing secondary content. Therefore:

- preserve Founder's Vision, Contact, Blogs, and any other currently existing pages;
- preserve index.html and its current non-target sections;
- do not delete Careers, Press, pricing-related code, or any route merely because an older brief mentioned removing it;
- surface content conflicts for approval instead of resolving them destructively.

---

## 3. Non-Negotiable Scope

### 3.1 In scope for the first implementation cycle

- A concept and implementation for scroll 1, the hero viewport.
- A concept and implementation for scroll 2, the live AI call showcase.
- A premium navigation treatment that supports the existing information architecture.
- Correct use of the official green SVG logo.
- Responsive behavior for desktop, tablet, and mobile.
- Motion, optional 3D, sound, and video behavior with accessible fallbacks.
- A reviewable demo that can be shown to the client before deeper page work.
- Documentation of decisions, assumptions, unknowns, and client feedback.

### 3.2 Out of scope until separately approved

- Rewriting the Android or iOS application.
- Backend services, authentication, dashboards, databases, or real call handling.
- A full-site Next.js migration.
- Redesigning or deleting Founder's Vision, Contact, Blogs, footer content, or other existing sections.
- Changing client-approved typography casing or rewriting final copy without approval.
- Creating final logo artwork from a screenshot.
- Publishing, merging, pushing, deploying, or changing the production domain.
- Adding pricing or plan messaging.

### 3.3 Safe implementation boundary

Work additively. Build the two-scroll concept in an isolated branch, route, feature folder, or prototype entry point first. Integration into the existing home page happens only after the concept is approved and the repository structure is inventoried.

---

## 4. Product Truth and Copy Guardrails

Equal AI is an AI call assistant that answers unknown calls, speaks to callers, identifies who they are and what they want, and sends the user a clean summary.

The client-provided influencer brief currently states:

- 40 lakh+ users;
- crores of calls handled;
- built in India;
- available on Android;
- iOS coming soon;
- free to download;
- support for up to 10 Indian languages;
- promotional-call controls;
- multiple voice options;
- real-time conversation and live nudges;
- call summary and recording after the call.

These are client-provided claims, not independently verified facts. Before production publication, the content owner must approve the final wording and numbers.

### 4.1 Known copy conflicts

The supplied materials contain different scale claims, including 300K+, 30L+, and 40 lakh+. The latest script says 40 lakh+, but an agent must not silently update all surfaces. Create a content verification item and use one approved value consistently after confirmation.

The current site also uses “India's #1 AI Call Assistant.” Do not repeat or expand that superiority claim unless the client confirms that it is approved and supportable.

The supplied language list repeats Tamil and may be incomplete. Use “up to 10 Indian languages” until the exact final list is confirmed.

### 4.2 Prohibited marketing language

- Do not mention pricing or plans.
- Do not add “link in bio.”
- Do not add “comment for link.”
- Do not compare Equal AI with Truecaller by name.
- Do not frame Equal AI as a better caller-ID application.
- Do not fabricate testimonials, ratings, call counts, download counts, awards, security certifications, or app features.
- Do not claim that a visual prototype is a real live call unless it is connected to real product data.

### 4.3 Copy hierarchy for the prototype

The first viewport must contain enough language to explain the product without scrolling. The required meaning is:

“Equal AI answers your calls, filters spam, takes messages, coordinates deliveries, shares updates and makes sure important callers still reach you.”

The phrases “What is Equal AI” and “Meet your AI assistant.” should remain available as supporting copy, an eyebrow, or a controlled reveal. They do not need to dominate the hero if the stronger value proposition is approved.

Preserve client-approved capitalization and sentence case. Do not impose an all-lowercase rule on the website unless the brand kit or client explicitly requires it.

---

## 5. Repository Protection Rules

Before any implementation:

1. Read the repository-level AGENTS.md and all nested instruction files.
2. Inspect the repository tree, package manager, build command, hosting configuration, current routes, public assets, and git status.
3. Identify index.html, index.backup.html, existing page files, static assets, fonts, audio, videos, and SVGs.
4. Record existing routes for Founder's Vision, Contact, Blogs, and all other visible navigation destinations.
5. Confirm whether the current deployment is GitHub Pages, Vercel, another static host, or a custom pipeline.
6. Create a non-destructive working branch or equivalent isolated checkpoint.
7. Take before screenshots at the agreed desktop and mobile viewport sizes.

### 5.1 Forbidden repository actions

- Do not delete, truncate, replace, or rename index.html without approval.
- Do not overwrite the backup HTML.
- Do not run a blanket formatter across unrelated files.
- Do not migrate the whole repository to Next.js in the first pass.
- Do not remove routes because they are not part of the two-scroll demo.
- Do not replace official media with generated approximations.
- Do not commit lockfile churn unrelated to the approved stack.
- Do not push, merge, force-push, publish, or alter production settings without explicit approval.
- Do not conceal existing dirty-worktree changes.

### 5.2 Preferred integration strategy

- Build the approved concept as isolated React components.
- Mount or route the concept without disturbing secondary content.
- Preserve current link destinations and footer content.
- If the repository remains static, either integrate a small compiled bundle into the current site or use a separately approved static export.
- If the repository is formally migrated to Next.js later, map every existing page and asset first and prove route parity before replacing the entry point.

---

## 6. Recommended Technical Direction

### 6.1 Preferred production stack

- Next.js App Router with TypeScript.
- React server components for static page structure; client components only for interactive motion, audio, video controls, and WebGL.
- Tailwind CSS v4 for layout, responsive utilities, and token-backed styling when the browser-support requirement allows it.
- CSS custom properties as the canonical design-token layer, so the system is not locked to Tailwind utilities.
- Motion for React, formerly Framer Motion, for entrance, layout, gesture, presence, hover, and scroll-linked UI animation.
- Native CSS transforms and perspective for lightweight dimensional treatments.
- React Three Fiber with Three.js only for one justified hero-stage effect that cannot be achieved convincingly in CSS.
- Playwright for end-to-end and responsive checks.
- Vitest plus React Testing Library for interactive component behavior where useful.
- ESLint and TypeScript strict checks.
- Vercel for the cleanest Next.js workflow, or Next static export if GitHub Pages must remain the deployment target.

Official references:

- Next.js App Router: https://nextjs.org/docs/app
- Tailwind with Next.js: https://tailwindcss.com/docs/guides/nextjs
- Motion for React: https://motion.dev/docs/react
- React Three Fiber: https://r3f.docs.pmnd.rs/getting-started/introduction

### 6.2 Why this stack

The site is visually ambitious but functionally a static marketing page. Next.js provides structured routing and asset optimization without requiring a backend. Tailwind speeds responsive composition, while CSS variables preserve a real design system. Motion is enough for most interaction and transition work. React Three Fiber should remain optional because premium does not automatically mean WebGL; an unnecessary 3D canvas can damage mobile performance, accessibility, and delivery speed.

### 6.3 Libraries and resources that are not automatic dependencies

- 21st.dev, React Bits, UI Verse, Aceternity, Cult UI, Motion Primitives, and similar libraries are exploration sources. Do not paste unreviewed components into production.
- shadcn/ui or accessible primitives may be used for behavior, but their default visual style must be replaced by Equal AI tokens.
- GSAP may be introduced only if the approved sticky timeline cannot be implemented cleanly with Motion and native browser APIs. Do not run two animation engines for the same behavior.
- Lenis or another smooth-scroll library is not required. Native scrolling is the default.
- Spline may be used for a fast concept, but an embedded Spline scene is not the preferred final runtime unless its weight, loading, ownership, and mobile fallback are approved.
- Rive is suitable for a small vector state machine, not for recreating the entire site.
- Sketchfab assets require clear commercial usage rights and are not a substitute for brand-owned visuals.

### 6.4 Tailwind v4 compatibility gate

Tailwind v4 targets modern browsers. Confirm the client's required browser matrix before locking it. If older browser support is mandatory, use an approved compatible strategy instead of forcing v4.

---

## 7. Concept Architecture

The approved concept should be decomposed approximately as follows:

- SiteHeader
- AnnouncementChip
- HeroCopy
- HeroCallStage
- EqualLogo
- DownloadCTA
- IOSWaitlistCTA
- TrustSignals
- ScrollCue
- StickyCallStory
- CallerSelector
- DeviceFrame
- ProductVideoViewport
- LiveTranscript
- Waveform
- CallSummary
- AudioControl
- ReducedMotionFallback
- MobileNavigation

Data for call scenarios must be separated from presentation. Each scenario should define:

- stable identifier;
- caller label;
- relationship category;
- avatar or approved media;
- video source and poster;
- optional sound source;
- transcript lines with timing;
- AI action;
- summary;
- language;
- accessibility description.

Do not bury final copy directly inside animation timelines.

---

## 8. Approval-Gated Implementation Plan

### Gate 0 — Repository and asset inventory

**Goal:** understand the real project without changing it.

Tasks:

- inspect repository instructions and file structure;
- map current routes and page ownership;
- identify current framework and hosting;
- locate official logo, fonts, screenshots, video assets, notification MP3, and product copy;
- compare the Figma brand kit with the assets in the repository;
- record content conflicts;
- capture the current desktop and mobile state.

Deliverable:

- inventory summary;
- route preservation map;
- asset readiness matrix;
- list of blockers and questions.

Exit criteria:

- no unresolved uncertainty about which files are protected;
- official asset source identified;
- implementation location approved.

### Gate 1 — Visual concept frames

**Goal:** approve the art direction before code polish.

Tasks:

- create one hero composition and one scroll-2 composition;
- establish the dark canvas, lime accent, type pairing, logo treatment, motion hierarchy, and device treatment;
- show desktop and mobile frames;
- show the no-motion fallback;
- mark official assets versus temporary placeholders.

Deliverable:

- two high-fidelity frames or an isolated coded storyboard.

Exit criteria:

- client approves the overall visual world;
- copy hierarchy and CTA labels are approved;
- 3D direction is accepted or rejected.

### Gate 2 — Scroll 1 coded prototype

**Goal:** explain Equal AI in the first viewport.

Tasks:

- implement header, logo, announcement chip, headline, product explanation, CTAs, and the hero call stage;
- create the one-time headline reveal;
- create button character-flow hover behavior;
- add the dimensional call object or approved 3D scene;
- implement responsive layout and reduced motion;
- keep sound disabled until a user gesture.

Deliverable:

- shareable desktop and mobile hero prototype.

Exit criteria:

- a first-time visitor can explain the product within five seconds;
- all content fits intentionally at target viewport sizes;
- no overlap, clipping, or unreadable copy;
- keyboard and reduced-motion flows work.

### Gate 3 — Scroll 2 coded prototype

**Goal:** prove the product through a cinematic call-handling story.

Tasks:

- implement the sticky device stage;
- connect caller selection to approved video and transcript data;
- animate transcript, waveform, AI response, and clean summary;
- cover family member, pitch or promotional caller, stranger, client, and courier scenarios when assets exist;
- provide click or swipe controls in addition to scroll;
- create a compact mobile sequence without requiring excessive pinned scrolling.

Deliverable:

- interactive two-scroll demo.

Exit criteria:

- video, transcript, and UI state remain synchronized;
- the product demonstration is understandable without audio;
- the sequence is controllable by keyboard and touch;
- placeholders are visibly documented, never disguised as production media.

### Gate 4 — Design and engineering audit

**Goal:** prove quality before integration.

Tasks:

- compare implementation against DESIGN.md;
- audit logo, typography, color, spacing, transitions, and responsive behavior;
- run accessibility checks;
- test keyboard order and focus visibility;
- test reduced motion, muted media, slow connection, video failure, and WebGL failure;
- test current Chrome, Edge, Safari, and Firefox targets;
- measure layout shift, largest contentful paint, and animation frame stability;
- optimize images, SVGs, fonts, videos, and code splitting.

Exit criteria:

- no critical accessibility errors;
- no broken route or existing-page regression;
- no unexpected autoplay sound;
- no console errors in the approved browsers;
- performance budget accepted.

### Gate 5 — Controlled integration

**Goal:** insert the approved scrolls without collateral changes.

Tasks:

- integrate only the approved components;
- retain the existing page order after scroll 2;
- retain existing routes, content, metadata, analytics, and footer behavior;
- verify before-and-after route parity;
- create an implementation walkthrough and rollback note;
- request approval before deployment.

Exit criteria:

- visual approval received;
- regression checks pass;
- rollback is straightforward;
- deployment authority is explicit.

---

## 9. Motion and Media Rules

### 9.1 Motion hierarchy

Use motion in three layers:

1. **Narrative motion:** the hero call scene and scroll-2 scenario transition.
2. **Interface motion:** transcript typing, waveform response, CTA morph, nav reveal, device state.
3. **Micro-interaction:** character-flow hover, icon response, focus and press feedback.

If every element moves, nothing feels important. Reserve the most dramatic movement for the product proof.

### 9.2 One-time reveal behavior

Headline gradient or light-sweep effects should run once per page load, matching the requested Beside-like behavior. They should not replay every time the user scrolls up and down. Replaying may be allowed only on an explicit replay control.

### 9.3 Audio

- Never autoplay audible sound.
- Notification MP3 may play only after a user presses a clearly labeled control.
- The experience must work with sound off.
- Provide pause or mute.
- Respect browser autoplay rules.
- Use the real client-provided MP3; do not generate or substitute a final brand sound.

### 9.4 Video

- Prefer approved product or campaign media.
- Use muted, plays-inline loops only when they improve the story.
- Supply poster images and accessible descriptions.
- Avoid harsh rectangles by using controlled masking, matching surfaces, edge treatments, and color grading.
- Lazy-load media outside the first viewport.
- Do not loop a video forever when the page is hidden.

### 9.5 3D

- 3D must communicate call routing, filtering, or the assistant's presence.
- A decorative spinning object with no product meaning is not enough.
- Provide a static or CSS fallback.
- Dynamically load the WebGL layer.
- Pause rendering when out of view or when the page is hidden.
- Cap device pixel ratio on mobile.
- Avoid making the main CTA dependent on a canvas.

---

## 10. Accessibility, Responsiveness, and Quality Bar

### 10.1 Accessibility

- Semantic landmarks and real buttons or links.
- Visible keyboard focus.
- Logical focus order.
- Minimum 44 by 44 pixel touch targets.
- Captions or equivalent text for meaningful video.
- Transcripts readable by assistive technology.
- Decorative canvas and SVG hidden from screen readers.
- Color contrast checked against actual gradients and video frames.
- prefers-reduced-motion support.
- No essential information conveyed by color, motion, or sound alone.
- Mobile navigation must trap focus while open and restore focus when closed.

### 10.2 Responsive behavior

Required review widths:

- 1440px desktop;
- 1280px laptop;
- 1024px tablet landscape;
- 768px tablet or mobile breakpoint;
- 430px modern mobile;
- 390px common mobile;
- 360px narrow mobile.

Use dynamic viewport units carefully. The hero should feel like a complete first screen, but browser chrome must not clip primary copy or CTAs.

### 10.3 Performance budget

Targets for an approved production build:

- no unexpected cumulative layout shift;
- largest hero assets preloaded selectively, not everything;
- initial experience remains useful before 3D or video loads;
- avoid shipping WebGL to users who receive the fallback;
- use modern video formats with sensible MP4 fallback;
- avoid multiple full-resolution looping videos above the fold;
- audit third-party embeds before accepting them.

Suggested acceptance targets are Lighthouse accessibility at 95 or higher and mobile performance at 85 or higher, with final thresholds adjusted for the approved media treatment.

---

## 11. Required Review Artifacts

Every implementation handoff must contain:

- what changed;
- exact files changed;
- what was intentionally not changed;
- screenshots or recordings at approved viewports;
- placeholder asset list;
- claim verification list;
- accessibility and performance notes;
- test commands and results;
- known limitations;
- rollback instructions;
- next approval required.

Do not say “finished” when only a desktop animation has been built.

---

## 12. Working Task Board

### Now — planning package

- [x] Consolidate current scope.
- [x] Resolve destructive-scope conflict in favor of preservation.
- [x] Recommend a technology direction.
- [x] Define approval gates.
- [x] Define motion, 3D, sound, and responsive rules.
- [ ] User reviews AGENTS.md, DESIGN.md, and SKILLS.md.

### After approval

- [ ] Access the actual repository.
- [ ] Read repository-local AGENTS.md and .agents skill files.
- [ ] Inventory routes and assets.
- [ ] Obtain official Figma access or exported brand kit.
- [ ] Obtain official green SVG logo.
- [ ] Obtain brand fonts and license details.
- [ ] Obtain product videos, posters, transcripts, and notification MP3.
- [ ] Confirm final claim numbers.
- [ ] Confirm deployment target and deadline.
- [ ] Build Gate 1 concept frames.
- [ ] Build Gate 2 hero.
- [ ] Build Gate 3 call showcase.
- [ ] Audit and integrate only after approval.

---

## 13. Scratchpad Template

Maintain this block during active work. Move durable decisions into the appropriate section instead of allowing the scratchpad to become the only source of truth.

### Current objective

Planning only. No website code changes.

### Locked decisions

- First two scrolls receive the highest design and engineering priority.
- Existing pages and index.html are protected.
- Brand kit and original assets outrank reference-site styling.
- No pricing content.
- No named competitor comparison.
- Sound requires user interaction.
- Motion and 3D require reduced-motion and non-WebGL fallbacks.

### Open decisions

- Exact repository architecture.
- Final deployment target.
- Final approved metric: 30L+ or 40 lakh+.
- Approval status of “India's #1.”
- Exact font families and weights.
- Exact official green values.
- Whether iOS CTA says “Join waitlist,” “iOS coming soon,” or another approved label.
- Whether the hero uses CSS 3D, React Three Fiber, Rive, or an approved video.
- Final caller scenarios and media mapping.
- Final scroll-2 duration and pinning behavior.

### Blockers

- The supplied Figma node requires edit-level access for connected inspection.
- The actual Windows project folder and its .agents directory are not present in this workspace copy.
- The official logo SVG, notification MP3, and video assets are not included in the supplied local attachments.

### Decisions log

| Date       | Decision                                   | Source                  | Impact                                              |
| ---------- | ------------------------------------------ | ----------------------- | --------------------------------------------------- |
| 2026-07-15 | Preserve all existing pages and index.html | Latest user instruction | No destructive migration or page deletion           |
| 2026-07-15 | Planning package precedes implementation   | Latest user instruction | No site code changes in this phase                  |
| 2026-07-15 | First two scrolls are the approval surface | Client and user brief   | Design effort is concentrated on hero and call demo |

---

## 14. Definition of Done for This Planning Phase

This phase is complete when:

- the user has reviewed all three planning files;
- scope and file-preservation rules are accepted;
- the preferred stack and deployment strategy are accepted;
- the hero and second-scroll concept are accepted at the narrative level;
- the list of required client assets and unanswered questions is accepted;
- the user explicitly authorizes implementation.

Until then, do not modify the website.
