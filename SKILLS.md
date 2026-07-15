# Equal AI Website — Skills, Tools, and Agent Routing Manual

**Document status:** review draft  
**Purpose:** tell AI coding and design agents which capabilities to use, when to use them, and when not to use them  
**Scope:** planning, design, implementation, review, and handoff for the Equal AI marketing website

---

## 1. Operating Principle

Installed skills are specialist lenses, not magic words. More skills do not automatically create a better website. For each task, select the smallest set that covers the work, read the full local instructions, apply them deliberately, and record their effect.

The agent must never claim that a skill was used merely because its name appeared in a prompt.

### Required sequence

1. Read the repository root AGENTS.md.
2. Read the nearest nested AGENTS.md for the files being changed.
3. Read DESIGN.md.
4. Inventory the actual .agents and skill directories.
5. Select the primary and validator skills for the current phase.
6. Read each selected skill in full.
7. Record selected skills and expected outputs in the scratchpad.
8. Execute only the approved task.
9. Run the matching validator or audit skills.
10. Report which skills materially changed the result.

If a named skill is absent, report it as unavailable and continue with the closest real capability. Do not fabricate its instructions.

---

## 2. Skill Selection Budget

For one bounded task, default to:

- one or two primary creation skills;
- one brand or design-system skill;
- one validation skill;
- one testing skill when code changes.

Use more only when the task genuinely spans several disciplines.

### Example

For the hero concept:

- Primary: high-end-visual-design.
- Primary: frontend-design.
- Brand: brandkit.
- Validator: design-auditor.
- Test: web-design-guidelines.

Do not activate minimalist-ui, industrialist-brutalist-ui, huashu-design, CRED-style references, and every animation library simultaneously.

---

## 3. Source-of-Truth Hierarchy

Skills advise the work. They do not override:

1. latest user instruction;
2. approved client feedback;
3. official Equal AI brand kit;
4. protected repository scope;
5. AGENTS.md;
6. DESIGN.md.

When a skill recommends a destructive redesign, generic component system, different brand palette, or new content that conflicts with the above, reject that recommendation and record why.

---

## 4. Skill Inventory and Routing

The following names were explicitly supplied for the project. Their exact local contents must be read from the repository before use.

### 4.1 Brand and identity

#### brand

Use for:

- defining the product voice;
- translating company values into visual choices;
- checking whether the result feels like Equal AI rather than a reference-site clone.

Expected output:

- concise brand characteristics;
- tone and visual personality;
- decision rationale.

Do not use for:

- inventing unapproved claims;
- redrawing the logo.

#### brand-guidelines

Use for:

- logo clear space;
- minimum size;
- color application;
- type hierarchy;
- allowed and forbidden treatments.

Expected output:

- implementable brand rules;
- compliance checklist.

Constraint:

- the official Equal AI brand kit outranks generic guideline advice.

#### brandkit

Use for:

- extracting official logo assets;
- mapping colors and typography;
- identifying component styles and brand-owned media.

Expected output:

- asset manifest;
- official design-token candidates;
- missing-export list.

Constraint:

- if connected access fails, request an exported SVG, font details, and token sheet. Do not approximate final assets.

### 4.2 Design direction and taste

#### design

Use for:

- overall composition;
- hierarchy;
- layout rhythm;
- concept framing.

#### design-system

Use for:

- turning brand decisions into tokens;
- typography, spacing, radii, surfaces, borders, elevation, and motion scales;
- component variants and state definitions.

#### design-taste-frontend

Use for:

- avoiding generic AI-generated frontend patterns;
- refining proportion, restraint, hierarchy, and visual pacing.

#### gpt-taste

Use as:

- a second-pass taste check;
- a critique layer, not a source of brand truth.

#### high-end-visual-design

Use for:

- premium art direction;
- cinematic composition;
- typography-led layouts;
- surface and lighting refinement.

This is a primary skill for the hero concept.

#### huashu-design

Use only after reading its actual instructions and confirming that its aesthetic is compatible with Equal AI.

Do not activate based on name alone.

#### minimalist-ui

Use for:

- restraint;
- removing unnecessary decoration;
- creating the Linear or Assemble fallback;
- simplifying mobile and reduced-motion layouts.

Do not let it remove the product demo or the approved dimensional idea.

#### industrialist-brutalist-ui

Use only if the client explicitly approves a brutalist direction.

Default status for Equal AI:

- inactive.

Reason:

- the requested feeling is premium, smooth, cinematic, and intelligent; hard industrial brutality may fight the brand unless used in a very small typographic detail.

#### impeccable

Use for:

- final polish;
- state completeness;
- spacing consistency;
- responsive refinements;
- visual QA.

#### v1

The name is ambiguous. Read its local description before routing work to it. Never assume what it does.

### 4.3 Frontend design and implementation

#### frontend-design

Use for:

- translating the approved concept into components;
- responsive composition;
- custom visual implementation;
- avoiding default framework aesthetics.

This is a primary implementation skill.

#### ui-styling or ui-syling

The supplied name appears as “ui-syling,” which may be a spelling variation.

Use for:

- token application;
- state styling;
- responsive visual refinement.

First confirm the actual local directory name.

#### web-interface-design

Use for:

- navigation;
- CTA behavior;
- transcript controls;
- scenario selection;
- mobile interaction;
- keyboard flow.

#### web-design-guidelines

Use for:

- accessibility;
- content hierarchy;
- responsive checks;
- form and navigation behavior;
- implementation review.

This is a required validator for each coded milestone.

#### ui-ux-pro-max

Use for:

- broad UX and visual audit;
- interaction completeness;
- responsive and accessibility review;
- identifying generic or under-designed sections.

Do not let it replace the approved Equal AI design system with a generic generated one.

#### full-output-enforcement

Use when:

- the task requires a complete deliverable;
- a partial component would be misleading;
- the agent must include states, responsive behavior, fallbacks, and validation.

Expected enforcement:

- no desktop-only “done” claim;
- no missing loading, error, reduced-motion, or fallback state;
- no hidden placeholder status.

#### redesign-existing-projects

Use after:

- repository inventory;
- route mapping;
- protected-file confirmation;
- client approval.

Critical constraint:

- this skill must work additively for the first cycle. It must not remove existing pages or convert the whole site to Next.js without approval.

#### image-to-code

Use for:

- understanding supplied screenshots;
- extracting relative composition and layout cues;
- validating the coded result against an approved frame.

Do not use for:

- pixel-copying CRED, Wispr Flow, Beside, Super.money, Linear, or Assemble;
- extracting proprietary assets;
- treating screenshots as exact brand specifications.

#### stich-design-taste

Confirm whether the actual local skill is “stitch-design-taste” or “stich-design-taste.”

Use only after reading its instructions. Likely use:

- screen composition review;
- design-to-interface synthesis.

### 4.4 Image generation and visual assets

#### imagegen-frontend-web

Use for:

- original atmospheric backgrounds;
- neutral concept posters;
- non-product decorative textures;
- temporary visual exploration.

Do not use for:

- the Equal AI logo;
- fake app screenshots;
- fake customer photos presented as real;
- QR codes;
- final caller video;
- copyrighted reference-site artwork.

#### imagegen-frontend-mobile

Use for:

- mobile-specific concept imagery or poster variants;
- approved non-product fallback art.

Apply the same restrictions as imagegen-frontend-web.

#### imagegen

If a general image-generation skill is available, use it only when a raster visual is actually required. SVG interface diagrams, exact logos, UI components, and precise 3D diagrams should be built with code or official assets.

### 4.5 Auditing and quality

#### design-auditor

Use after:

- every high-fidelity frame;
- hero implementation;
- scroll-2 implementation;
- responsive completion.

Audit:

- brand compliance;
- hierarchy;
- composition;
- token consistency;
- motion hierarchy;
- reference overfitting;
- accessibility;
- mobile adaptation;
- placeholder leakage.

#### webapp-testing

Use when code exists.

Test:

- route integrity;
- navigation destinations;
- CTA behavior;
- mobile menu;
- keyboard use;
- scenario controls;
- media fallback;
- reduced motion;
- sound permission flow;
- scroll and sticky behavior;
- browser resize;
- console errors.

#### web-design-guidelines

Also functions as a final compliance pass for:

- semantics;
- accessibility;
- responsive behavior;
- readable content;
- conventional interaction where convention improves usability.

### 4.6 Presentation and review

#### slides

Use only when the client needs a design presentation or review deck.

Possible deck:

- project goal;
- current problem;
- concept;
- hero frame;
- scroll-2 frame;
- motion storyboard;
- mobile frame;
- required assets;
- decisions and feedback.

Do not use slides as a substitute for a working demo when the client asked for interaction.

---

## 5. External Tools and Platforms

### 5.1 Figma

Primary use:

- inspect the official Equal AI brand kit;
- export the green SVG logo;
- read typography and color styles;
- create or review the two concept frames;
- map approved components to code later.

Current status:

- connector available;
- supplied node is 95:2316 in file EKtU0R3gRawpxxNs35S2Mu;
- connected inspection currently reports insufficient edit access.

Required next action:

- client grants edit-level access to the connected Figma identity, or
- client exports the logo SVG, fonts, colors, components, and screens.

Do not write to the client's Figma file unless the user explicitly requests a design change.

### 5.2 Google Drive

Primary use:

- retrieve approved brand videos, notification sound, posters, transcripts, and campaign assets.

Rules:

- preserve original filenames;
- do not edit or replace client assets without approval;
- record usage rights and intended scenario;
- download only the selected assets needed for the approved phase.

If connected access is unavailable, ask the client for direct exports or a reviewed asset package.

### 5.3 GitHub

Primary use:

- inspect the repository;
- understand current code and deployment;
- review history when needed;
- later create an intentional implementation branch and draft pull request if authorized.

Rules:

- read before writing;
- preserve unrelated changes;
- do not open a pull request, push, merge, or change repository settings during the planning phase;
- do not use the remote repository as a reason to ignore the user's local project instructions.

### 5.4 Browser and screenshots

Use for:

- verifying public live behavior;
- testing the approved build;
- comparing target viewports;
- checking responsive and interaction states.

Do not repeatedly re-research the same reference sites when the supplied screenshots and design notes already answer the question.

### 5.5 Claude Code and coding agents

All coding agents must:

- read AGENTS.md, DESIGN.md, and SKILLS.md first;
- respect protected pages;
- use the repository's package manager;
- avoid unnecessary migrations;
- keep a short decision log;
- show tests and screenshots before declaring completion.

---

## 6. Component and Inspiration Libraries

The project mentions:

- 21st.dev;
- shadcn MCP;
- Motion Primitives;
- React Bits;
- Aceternity;
- UI Verse;
- Cult UI;
- Skiper UI;
- componentry.fun;
- dotmatrix;
- GCAP animations;
- Magic MCP;
- Mobbin;
- Style Refero;
- Design Vocab Library;
- Stitch;
- UX Pilot;
- Figma Make;
- Haikei;
- Realtime Colors;
- Manus;
- Rive;
- Spline;
- Sketchfab.

These sources have different purposes. Route them deliberately.

### 6.1 Component exploration

Use 21st.dev, React Bits, Aceternity, UI Verse, Cult UI, Skiper UI, Motion Primitives, and similar sources to study:

- interaction mechanics;
- implementation patterns;
- accessibility gaps to fix;
- possible prototypes.

Before adoption:

- check package ownership and license;
- inspect bundle size;
- inspect dependencies;
- remove generic styling;
- map colors and spacing to Equal AI tokens;
- confirm keyboard and reduced-motion behavior;
- rewrite if the component is easier to own locally.

Never ship a collage of recognizably unrelated component-library demos.

### 6.2 Accessible primitives

Use shadcn or lower-level primitives for:

- dialog behavior;
- focus trapping;
- navigation menu semantics;
- tooltips;
- tabs;
- dismissible layers.

Do not use default shadcn cards, buttons, type, gray palette, or radii as the final visual system.

### 6.3 Design research

Use Mobbin, Style Refero, Design Vocab Library, Stitch, and UX Pilot for:

- pattern vocabulary;
- mobile behavior;
- information architecture;
- interaction comparison.

Do not scrape or copy proprietary screens.

### 6.4 Background and decorative generation

Use Haikei for:

- editable SVG signal fields;
- contour lines;
- subtle wave geometry.

Use Realtime Colors for:

- quick contrast and palette exploration only.

Official Equal AI tokens replace exploratory values before final implementation.

### 6.5 3D and motion creation

Use:

- Motion for React for interface and scroll motion;
- CSS transforms for lightweight depth;
- React Three Fiber for a justified interactive call-orbit scene;
- Rive for vector state machines;
- Spline for fast concepts or approved exported scenes;
- Sketchfab only for licensed assets.

Do not use all of them in one experience.

---

## 7. Technology Routing

### 7.1 Default

- Next.js App Router.
- TypeScript.
- Tailwind CSS v4 after browser-support confirmation.
- CSS custom properties.
- Motion for React.
- Native HTML media controls or carefully designed accessible controls.

### 7.2 3D decision

Choose CSS and SVG when:

- the scene uses layered cards, rings, phone tilt, and simple orbit paths;
- fastest delivery and mobile performance matter most.

Choose React Three Fiber when:

- true depth sorting, camera parallax, lighting, or interactive orbit selection is part of the approved concept;
- the fallback is designed;
- the bundle and runtime budget are accepted.

Choose Rive when:

- a compact state machine can represent call states more efficiently than a WebGL scene.

Choose Spline when:

- the team needs a same-day concept and accepts the trade-offs;
- ownership, export, runtime, mobile, and fallback are clear.

### 7.3 Animation-engine rule

Start with Motion. Add GSAP only after documenting a specific limitation in the approved sticky timeline. If GSAP is added, define clear ownership:

- Motion handles component state and micro-interaction.
- GSAP handles only the complex master scroll timeline.

Do not animate the same properties on the same element with both engines.

---

## 8. Phase-by-Phase Skill Recipes

### Phase 0 — Inventory

Primary:

- redesign-existing-projects;
- brandkit.

Validators:

- web-design-guidelines.

Tools:

- local repository inspection;
- GitHub read access if needed;
- Figma read access;
- Drive asset access.

Output:

- route map;
- protected-file list;
- asset matrix;
- content conflict list.

### Phase 1 — Visual concept

Primary:

- high-end-visual-design;
- design-taste-frontend.

Support:

- brand;
- brand-guidelines;
- design-system.

Validator:

- design-auditor.

Optional:

- imagegen-frontend-web for original non-brand concept art;
- Spline or Rive for a quick motion proof.

Output:

- hero frame;
- scroll-2 frame;
- mobile frame;
- motion storyboard;
- fallback frame.

### Phase 2 — Hero implementation

Primary:

- frontend-design;
- web-interface-design.

Support:

- design-system;
- ui-styling;
- full-output-enforcement.

Validators:

- web-design-guidelines;
- design-auditor.

Test:

- webapp-testing.

Output:

- coded hero;
- responsive states;
- reduced-motion fallback;
- keyboard behavior;
- test results.

### Phase 3 — Call showcase

Primary:

- frontend-design;
- ui-ux-pro-max.

Support:

- web-interface-design;
- image-to-code for approved frames;
- full-output-enforcement.

Validators:

- design-auditor;
- web-design-guidelines.

Test:

- webapp-testing.

Optional:

- Rive or React Three Fiber after approval.

Output:

- synchronized media, transcript, controls, summary, and fallbacks.

### Phase 4 — Audit

Primary:

- impeccable;
- design-auditor.

Validators:

- web-design-guidelines;
- ui-ux-pro-max.

Test:

- webapp-testing.

Output:

- issue list by severity;
- corrected implementation;
- viewport screenshots;
- accessibility and performance notes.

### Phase 5 — Client review

Primary:

- slides, only if a deck is useful.

Support:

- full-output-enforcement.

Output:

- demo link or local preview;
- concise walkthrough;
- decisions required;
- change log;
- next-step estimate.

---

## 9. Conflict Matrix

| Skill or direction | Potential conflict | Resolution |
|---|---|---|
| minimalist-ui | May remove the dramatic product proof | Use it to edit and simplify, not to define the whole concept |
| industrialist-brutalist-ui | May fight premium fluidity | Keep inactive unless explicitly approved |
| imagegen skills | May invent brand or product content | Restrict to original decorative exploration |
| image-to-code | May encourage copying references | Use only for approved Equal AI frames and structural analysis |
| redesign-existing-projects | May broaden scope | Protect all existing pages and change only approved scrolls |
| full-output-enforcement | May encourage overbuilding | Define “complete” as complete within the approved two-scroll scope |
| UI libraries | May create a template collage | Extract mechanics, then restyle or rewrite |
| 3D tools | May damage performance | Use one meaningful scene with fallback |
| minimalist Linear direction | May feel too safe | Keep as a fallback and interaction-discipline reference |
| CRED premium direction | May become derivative | Borrow finish, not layout or assets |
| Wispr product demo | May become a voice-to-text clone | Translate the mechanic into call screening and summaries |

---

## 10. Required Tool and Skill Log

For each active task, record:

| Field | Entry |
|---|---|
| Task | What is being built or reviewed |
| Primary skill | Main creator |
| Support skill | Brand, system, or interaction specialist |
| Validator | Audit skill |
| Tools | Figma, Drive, browser, code, media tooling |
| Input files | Exact project and asset files |
| Protected files | Files that must not change |
| Expected output | Reviewable artifact |
| Decision impact | What the selected skill changed |
| Gaps | Missing skill, asset, access, or approval |

This log belongs in the AGENTS.md scratchpad or a repository-local work note.

---

## 11. Validation Checklist

### Skill fidelity

- [ ] Every claimed skill was actually present.
- [ ] Every selected skill was read.
- [ ] No skill overrode brand or scope.
- [ ] Conflicting style skills were not blended accidentally.
- [ ] The effect of specialist skills is visible in the output.

### Brand

- [ ] Official green SVG used.
- [ ] Official or approved fallback fonts used.
- [ ] No unapproved logo treatment.
- [ ] No fabricated claims.
- [ ] No pricing.
- [ ] No named competitor comparison.

### Design

- [ ] Product understandable in the first viewport.
- [ ] Scroll 2 proves the product.
- [ ] Motion has hierarchy.
- [ ] 3D has product meaning.
- [ ] Mobile is specifically designed.
- [ ] Reduced-motion design exists.

### Engineering

- [ ] Existing pages and index.html preserved.
- [ ] No unrelated dependencies.
- [ ] No unnecessary full-site migration.
- [ ] Media loading is controlled.
- [ ] Sound requires interaction.
- [ ] WebGL has fallback.
- [ ] Tests and screenshots exist.

---

## 12. Current Availability Notes

Available in this working environment:

- the supplied Equal AI design brief;
- a large combined design reference document;
- a short tools and skills list;
- the existing backup HTML;
- full-page screenshots of the current and reference sites;
- the client-provided product and influencer brief;
- connected Figma capability.

Not present in this working copy:

- the actual Windows project folder;
- repository-local .agents skill files;
- a supplied root AGENTS.md;
- official exported green SVG logo;
- notification MP3;
- video assets;
- brand font files.

Connected Figma inspection is currently blocked by file permission. These gaps must remain explicit in the implementation plan.

---

## 13. Recommended First Skill Run After Approval

When the user authorizes implementation:

1. Open the actual Equal AI repository.
2. Read root and nested AGENTS.md.
3. Inventory the .agents directory and confirm exact skill names.
4. Select redesign-existing-projects, brandkit, and web-design-guidelines for the inventory phase.
5. Obtain brand exports and media assets.
6. Create the route and asset preservation map.
7. Stop for approval if the real repository contradicts this planning pack.
8. Select high-end-visual-design, frontend-design, design-system, and design-auditor for the concept.
9. Produce desktop, mobile, and reduced-motion frames.
10. Obtain visual approval before coding or integrating the home page.

---

## 14. Definition of Done for Skill Use

Skill use is complete only when:

- the correct skill was selected for a bounded purpose;
- its actual instructions were followed;
- its advice was reconciled with the brand and repository;
- its output was validated;
- the user can see how it improved the work;
- no unavailable capability was pretended;
- no protected scope was expanded.
