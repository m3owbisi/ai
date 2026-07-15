# Equal AI — Premium Motion Landing Page Design Direction

**Document status:** review draft  
**Concept name:** The Call Orbit  
**Scope:** scroll 1 and scroll 2, with navigation continuity  
**Design objective:** make unknown-call handling visible, desirable, and instantly understandable

---

## 1. Creative North Star

Equal AI should not look like a generic dark SaaS website with a phone mockup pasted beside a headline. The product has a naturally cinematic idea: many people and unknown numbers compete for a user's attention, while one intelligent assistant quietly decides what deserves to pass through.

The proposed visual metaphor is **The Call Orbit**:

- callers appear as small identity objects orbiting around the user's phone;
- each object carries a different intent: family, client, courier, stranger, or promotion;
- Equal AI is visualized as a luminous green intelligence field around the phone;
- valuable calls are guided inward;
- unwanted calls are calmly redirected;
- conversation fragments become flowing transcript ribbons;
- the second scroll opens the phone and shows the assistant handling one call in detail.

This turns 3D and motion into product explanation. It is original enough to feel like Equal AI, while still carrying the premium confidence requested from the references.

---

## 2. Reference Synthesis

The references are ingredients, not templates.

| Reference | Use for Equal AI | Do not copy |
|---|---|---|
| Wispr Flow | Immediate product proof, flowing words, conversational UI, button text motion | Cream palette as the main identity or voice-product layout verbatim |
| CRED Club | Cinematic restraint, large type, premium darkness, blended media, morphing mobile menu | CRED logos, exact type treatment, room imagery, or exclusivity language |
| CRED AI | Selective outline typography, luminous edges, controlled glitch or flicker | Orange palette, bank-card art direction, or constant blinking |
| Beside | One-time headline sweep, elegant whitespace, small rotating-purpose chip | White business-SaaS composition or exact phone layout |
| Super.money | Dimensional product objects, glow, playful depth, QR or download-card presence | Blue-purple fintech universe or decorative 3D unrelated to calls |
| Linear | Slow reveal, UI precision, disciplined interface motion | Flat product-dashboard aesthetic as the primary brand language |
| Assemble | Clear top navigation, strong hierarchy, minimal fallback | Oversimplifying the hero until the product proof disappears |
| Existing Equal AI prototype | Core message, lime-on-black identity, phone and transcript concept | Current small scale, generic layout, weak logo formatting, or the entire page copied into Next.js unchanged |

The result should feel approximately:

- 35 percent Equal AI brand and real product;
- 25 percent Wispr-style live proof;
- 20 percent CRED-style premium finish;
- 10 percent Super.money-style dimension;
- 10 percent Beside and Linear-style motion discipline.

These percentages describe emphasis, not literal visual borrowing.

---

## 3. Brand Authority and Temporary Tokens

The official Equal AI Figma brand kit is the final authority for:

- logo artwork;
- green values;
- neutral colors;
- typography;
- type weights;
- spacing;
- icon treatment;
- photography or video grading;
- product-screen styling.

The connected Figma node currently cannot be inspected because the authenticated account does not have edit access. Until access or exports are supplied, the values below are **prototype tokens only**.

### 3.1 Prototype dark palette

| Token | Working value | Role |
|---|---:|---|
| Canvas | #050605 | Main near-black background |
| Canvas elevated | #080B08 | Sticky stage and large media surfaces |
| Surface 1 | #0D110D | Phone panels, nav, controls |
| Surface 2 | #131913 | Hover and selected states |
| Hairline | rgba(229, 254, 64, 0.16) | Subtle lime border |
| Hairline neutral | rgba(255, 255, 255, 0.10) | Quiet separators |
| Text primary | #F6F8F2 | Headlines and important copy |
| Text secondary | #A9B0A5 | Descriptions |
| Text quiet | #737A71 | Meta labels |
| Accent working | #E5FE40 | Temporary lime, derived from the supplied design reference |
| Accent glow | rgba(229, 254, 64, 0.32) | Atmospheric light |
| Danger | #FF5D5D | Decline or blocked call state |
| Success | #66F29A | Allowed or completed call state |
| Cream fallback | #F5F1E6 | Future light-mode canvas |

Do not use a flat, fully saturated green page background in light mode. If a light theme is later approved, use the cream fallback with dark text and lime as a controlled accent.

### 3.2 Color discipline

- Near-black owns most of the canvas.
- Lime appears on the logo, key word, active path, primary CTA, and live AI state.
- Red and success green are semantic and brief.
- White is slightly softened to avoid a harsh dashboard look.
- Gradients simulate light, glass, depth, and signal movement; they should not become rainbow decoration.
- Every accent glow must have a crisp source object. Avoid unexplained fog.

---

## 4. Logo Specification

The logo must use the official green SVG from the Equal AI brand kit or repository.

### Required rules

- Preserve the original viewBox and aspect ratio.
- Use the original path data rather than tracing a screenshot.
- Do not rebuild the mark with CSS circles.
- Do not stretch, skew, bevel, extrude, or animate the core logo geometry.
- Do not add a thick glow directly to the SVG.
- Use a subtle surrounding light field if the scene needs presence.
- Maintain clear space of at least one dot-unit around the full lockup until official clear-space rules are available.
- Use the symbol-only mark only when the brand kit confirms it is permitted.
- Use one approved green version on dark and an approved dark or green version on light.
- Supply a text alternative or accessible brand name.

### Desired hero use

The full green lockup sits in the navigation. The symbol may appear once inside the AI field as a tiny state indicator if approved. It should not become a floating decorative particle.

---

## 5. Typography Direction

Typography must create the premium feeling before animation begins.

### 5.1 Authority

Use the official brand fonts when access and licensing are confirmed. Do not treat CRED's proprietary typography, SF Pro, or another brand's custom font as freely available.

### 5.2 Prototype fallback

If no official font can be used during concept development:

- use DM Sans or Geist for interface, navigation, body, transcript, and controls;
- use DM Serif Display or Instrument Serif for one controlled editorial display layer;
- keep product UI in sans-serif;
- do not combine more than two type families.

The existing backup already references DM Sans and DM Serif Display, making that pair a safer continuity fallback than inventing an entirely unrelated system. It remains provisional.

### 5.3 Type roles

| Role | Desktop | Mobile | Weight | Notes |
|---|---:|---:|---:|---|
| Hero display | clamp from 72px to 116px | clamp from 44px to 62px | 400 to 600 | Tight leading, optical tracking |
| Section display | clamp from 56px to 88px | clamp from 38px to 52px | 400 to 600 | Maximum two to three lines |
| Hero explanation | 18px to 22px | 16px to 18px | 400 | Must remain visible in first viewport |
| Navigation | 14px to 15px | 14px | 500 | High clarity |
| CTA | 14px to 16px | 15px | 600 | Do not uppercase automatically |
| Transcript | 17px to 22px | 15px to 18px | 400 to 500 | Readable while moving |
| Eyebrow | 11px to 13px | 11px to 12px | 600 | Moderate positive tracking |
| Meta | 12px to 14px | 12px | 500 | Timing, language, status |

### 5.4 Display behavior

- Use a clean sans-first headline unless the official brand system supports serif display.
- A single word may switch to editorial serif, outline, italic, or lime to create rhythm.
- The outline or flicker effect may occur on one glyph or one word only.
- Flicker runs during the first load, settles quickly, and does not continue indefinitely.
- A one-time light sweep may reveal selected headline text.
- Do not animate every line with a different effect.
- Respect the approved sentence case.

### 5.5 Recommended content hierarchy

**Eyebrow or announcement:**  
What is Equal AI

**Primary headline option A:**  
Not all calls deserve your attention.

**Primary headline option B:**  
Your calls finally have an assistant.

**Supporting hook:**  
Meet your AI assistant.

**Required explanatory meaning:**  
Equal AI answers your calls, filters spam, takes messages, coordinates deliveries, shares updates and makes sure important callers still reach you.

Headline options are design proposals. Final wording needs content approval.

---

## 6. Page Rhythm

The first two scrolls are not two unrelated rectangular sections. They are one continuous product reveal.

1. **Scroll 1:** the user sees call chaos being organized around a phone.
2. **Transition:** the selected call object travels into the device.
3. **Scroll 2:** the phone opens into a live product demonstration.
4. **Exit:** the conversation collapses into a clear summary and returns control to the existing page.

Use near-black throughout the two-scroll sequence so the transition feels cinematic. A subtle tonal shift, not a hard color cut, separates the scenes.

---

## 7. Scroll 1 — Hero Viewport

### 7.1 Core requirement

A visitor must understand the following without scrolling:

- Equal AI is a call assistant.
- It handles unknown calls.
- It filters, speaks, and summarizes.
- Android is available.
- iOS is coming soon.

The 3D or motion stage supports this explanation; it does not replace the copy.

### 7.2 Desktop composition

Use a 12-column grid inside a wide container.

- Header spans the width.
- Copy occupies approximately columns 1 through 7.
- The call-orbit stage occupies approximately columns 6 through 12 and intentionally overlaps the copy zone at its edges.
- The headline is large enough to feel cinematic but leaves space for the full explanation and CTAs.
- The orbit may extend beyond the viewport edges, creating scale without hiding controls.
- Trust signals sit below the CTAs or attach to the orbit as quiet factual markers.

The composition should feel asymmetrical but balanced. Avoid a conventional 50/50 SaaS split with a boxed phone on the right.

### 7.3 Hero layers

#### Layer A — Atmospheric canvas

- Near-black canvas.
- One diagonal or elliptical lime light field behind the phone.
- Fine grain or dither at very low opacity.
- One subtle contour grid or signal ring, not a full cyberpunk background.
- No bright green wall.

#### Layer B — Navigation

- Green SVG logo on the left.
- Existing approved page links in the middle or right.
- Contact and Download on the right.
- Pricing must not appear unless the content restriction is changed.
- Header begins visually quiet and becomes a translucent sticky capsule after leaving the hero.

#### Layer C — Announcement chip

A small capsule above the headline may rotate short purpose labels such as:

- screens unknown calls;
- speaks your language;
- sends the summary;
- keeps interruptions out.

The capsule stays still while its text changes. Change text on a calm interval and pause when the page is hidden. The first label must make sense without waiting for rotation.

#### Layer D — Headline and explanation

Headline arrives in two slow, controlled beats. A one-time lime light sweep or outline-to-fill transition affects the chosen word. The explanatory sentence appears shortly after and never starts at zero opacity for so long that users miss the meaning.

#### Layer E — Primary actions

- Primary: Download for Android.
- Secondary: iOS coming soon or an approved waitlist label.
- Optional QR expansion on desktop only.

The primary CTA can feel dimensional through layered borders, controlled internal glow, and a slight pointer tilt. It must still read as a normal accessible link or button.

#### Layer F — The Call Orbit

The visual stage contains:

- a slightly tilted phone or abstract glass call object;
- a green intelligence field;
- five orbit nodes representing caller types;
- one active transcript ribbon;
- one waveform or voice pulse;
- one clearly visible outcome: allow, handle, summarize, or mute.

The active caller changes during the intro sequence:

1. unknown number enters;
2. AI field activates;
3. a short caller phrase appears;
4. Equal AI asks one clarifying question;
5. the call is categorized;
6. a summary chip appears;
7. the next node begins approaching but waits for scroll.

### 7.4 Hero intro timing

Approximate sequence:

| Time | Event |
|---:|---|
| 0 to 0.3s | Canvas and logo visible immediately |
| 0.2 to 0.9s | Navigation and announcement settle |
| 0.35 to 1.4s | Headline reveals |
| 0.8 to 1.6s | Explanation and CTAs appear |
| 1.0 to 2.2s | Phone and orbit establish |
| 1.8 to 3.6s | Transcript ribbon demonstrates one exchange |
| 3.2 to 4.4s | Summary and trust signal settle |

Users must not wait for the animation to learn what the product does.

### 7.5 Sticky navigation morph

At the bottom of the hero, a compact scroll or download capsule may expand into the sticky navigation shell.

Behavior:

- before scroll: capsule reads as a hero control;
- during transition: width and internal spacing increase;
- after threshold: logo, page links, and download action occupy the capsule;
- header backdrop becomes translucent black with blur and a fine lime or white hairline;
- layout animation must not cause content shift;
- reduced-motion mode switches states without morphing.

This should be one coherent shared-element transition, not two navbars cross-fading awkwardly.

---

## 8. Scroll 2 — Live Call Showcase

### 8.1 Core idea

The orbit resolves into a sticky product stage. One caller at a time enters the phone, the approved brand video plays inside the device, and a synchronized transcript makes the AI behavior understandable without sound.

The story is not “look at five feature cards.” It is “watch one assistant handle five real-world intentions.”

### 8.2 Desktop layout

Use a 100svh sticky frame inside approximately 220svh to 300svh of narrative scroll, depending on the number of approved scenarios.

- Left: caller rail or floating identity nodes.
- Center: iPhone or approved device frame with product video.
- Right: live transcript, AI action, and summary.
- Bottom or floating edge: progress, audio control, replay, and scenario label.

The three areas remain visually connected by transcript curves, signal lines, or depth perspective. Avoid three separate dashboard cards.

### 8.3 Scenario model

The requested categories currently include:

- family member;
- pitch or promotional caller;
- stranger;
- client;
- courier.

Use only scenarios supported by approved media and copy. Each scenario has four beats:

1. **Identity:** who is calling and in which language.
2. **Intent:** what the caller wants.
3. **Equal AI action:** screen, clarify, coordinate, mute, nudge, or pass through.
4. **Outcome:** live nudge, recording, or clean summary.

### 8.4 Transcript behavior

- Reveal transcript by meaningful word groups or phrases, not a frantic single-character typewriter.
- Match timing to the approved video or a documented prototype timeline.
- Keep previous text readable while the newest phrase highlights.
- Use different roles with position, label, and subtle tone, not color alone.
- Announce completed transcript blocks accessibly without flooding screen readers.
- Provide a full static transcript in the fallback or expanded details.
- Do not imply real-time backend processing when the demo is pre-timed.

### 8.5 Device treatment

- Use an approved iPhone or neutral device representation.
- Device must feel integrated into the scene through lighting and surface color.
- Avoid a stock PNG with a visible rectangular video boundary.
- Match the video crop, radius, safe area, and perspective to the frame.
- Reflections and glass edges should be restrained.
- On mobile, the device can occupy most of the width but must leave room for transcript controls.

### 8.6 Transition between scenarios

Recommended sequence:

- active caller node brightens;
- current transcript completes;
- a summary card compresses into a small history chip;
- phone media cross-fades or wipes using a call-wave mask;
- next caller node travels inward;
- transcript begins when the scene is stable.

Do not spin the entire phone between every scenario.

### 8.7 Scroll-2 exit

The final call becomes a concise summary stack:

- caller;
- intent;
- decision;
- recording;
- next action.

The stack collapses into the Equal AI symbol or a “handled” chip, then releases the sticky section and returns the user to the untouched existing content.

---

## 9. Motion System

### 9.1 Principles

- Motion explains state.
- Large movement is slow and confident.
- Interface response is quick and precise.
- The scene settles before the next important action.
- Text remains readable.
- Scrolling always stays under user control.

### 9.2 Duration tokens

| Token | Range | Use |
|---|---:|---|
| Instant | 80 to 120ms | Press feedback |
| Micro | 140 to 220ms | Icons, focus, small hover |
| UI | 240 to 420ms | Tabs, chips, transcript role change |
| Layout | 450 to 750ms | Nav morph, panel transition |
| Narrative | 800 to 1400ms | Phone move, orbit shift, scene reveal |
| Ambient | 4 to 12s | Slow orbit, glow breathing |

### 9.3 Easing

- Entrance: smooth deceleration.
- Exit: slightly faster acceleration.
- Shared layout: soft spring with low bounce.
- Orbit: linear for base movement, eased during selection.
- Avoid elastic bounce on premium surfaces.

### 9.4 One-time headline effect

The gradient sweep or outline fill:

- runs once on initial page entry;
- marks completion in session state if needed;
- does not re-trigger on normal upward scroll;
- is skipped in reduced-motion mode;
- does not hide the headline before it runs.

### 9.5 Button character flow

For primary and selected secondary actions:

- label characters shift or reveal in a short stagger on hover;
- button width remains fixed;
- screen-reader label remains stable;
- keyboard focus receives an equivalent non-hover state;
- mobile press uses a brief fill or highlight rather than waiting for hover.

### 9.6 Mobile menu

The hamburger icon morphs from three lines into a close symbol using the same geometry.

Open state:

- full-viewport or near-full-viewport overlay;
- near-black translucent background with blur;
- navigation labels at a large display scale;
- staggered entrance with clear focus order;
- primary download action anchored safely above browser UI;
- no background scroll;
- Escape closes;
- focus returns to the trigger.

The menu should feel dramatic without delaying navigation.

---

## 10. 3D Strategy

### 10.1 Preferred order

1. Prove the concept with CSS 3D, layered SVG, and Motion.
2. Add React Three Fiber only if real parallax, orbit depth, glass, or lighting materially improves the approved concept.
3. Use Spline only for a rapid client concept or a scene whose exported runtime passes the performance budget.
4. Use Rive for vector state-machine behavior such as the Equal field or call-status morph.

### 10.2 Meaningful 3D objects

Good:

- caller tokens orbiting a protected phone;
- transcript ribbon flowing through the Equal field;
- call object being accepted, redirected, or muted;
- device opening into the scroll-2 interface;
- layered QR or download card responding subtly to pointer depth.

Bad:

- random metallic sphere;
- spinning logo;
- unrelated coins, cubes, or cards;
- full-screen WebGL scene that delays the headline;
- 3D that cannot be controlled without a mouse.

### 10.3 WebGL fallback

If WebGL is unavailable, disabled, slow, or reduced motion is requested:

- show a static high-quality poster or SVG composition;
- keep one active transcript example;
- preserve both CTAs;
- preserve the scroll-2 scenario controls;
- never display an empty canvas.

---

## 11. Sound Design

The notification MP3 can provide a memorable reveal, but only after user consent.

### Recommended use

- A visible “hear how Equal handles it” control starts the sound and matching scene.
- One short notification marks the AI's completed summary.
- Waveform motion is driven by documented timing or analyzed amplitude after interaction.
- The control changes to pause or replay.

### Rules

- No audible autoplay.
- Do not play on hover.
- Do not play on every scroll threshold.
- Do not layer several call sounds.
- Stop when the user changes scenario if audio would overlap.
- Pause when the page becomes hidden.
- Preserve a complete silent experience.

---

## 12. Media Integration

### Required per video

- original source;
- commercial usage approval;
- scenario name;
- transcript;
- duration;
- intended crop;
- mobile crop;
- poster image;
- whether audio is required;
- accessibility description.

### Encoding plan

- provide an efficient modern format and a broadly supported MP4 fallback;
- avoid loading every scenario video during the first viewport;
- preload only the first demonstrated asset when justified;
- use responsive posters;
- pause off-screen media;
- keep loops short and seamless if they are decorative;
- do not loop narrative recordings without an intentional reset.

### Blending media into the site

- grade footage toward the scene's black and lime atmosphere;
- mask to the device frame;
- add a controlled inner edge, not a heavy outer shadow;
- fade transcript light into the video edge;
- use the same noise or grain treatment across the surrounding scene;
- keep overlaid typography within safe areas.

---

## 13. Component Styling

### 13.1 Navigation shell

- Height: approximately 56px desktop, 52px mobile trigger row.
- Radius: full capsule after morph.
- Surface: translucent near-black.
- Border: 1px neutral or lime hairline.
- Blur: enough to separate content without creating milky gray.
- Shadow: extremely soft; border and light do most of the work.

### 13.2 Primary download CTA

- Lime fill or controlled lime inner surface.
- Near-black text.
- Minimum 44px height.
- Slight bevel through inset borders, not thick skeuomorphism.
- Optional QR expansion on desktop.
- Pointer tilt capped to a few degrees.
- Clear pressed and focus states.

### 13.3 Secondary CTA

- Dark transparent surface.
- Soft white border.
- White primary label with quiet availability note.
- Equal height to primary CTA.

### 13.4 Caller nodes

- Small identity image or icon.
- Short caller label.
- Status ring.
- One active lime halo.
- Inactive nodes remain readable but quiet.
- Relationship must not rely on color only.

### 13.5 Transcript surface

- Integrated glass or dark surface.
- Maximum comfortable line width.
- Strong role labels.
- New phrase highlighted briefly.
- Completed phrases return to stable contrast.
- Summary is visually distinct from raw dialogue.

### 13.6 Trust signals

Use a compact row, not a loud badge wall.

Possible items after verification:

- 40 lakh+ users;
- crores of calls handled;
- built in India;
- Android available;
- up to 10 Indian languages.

Do not display all of them if they overcrowd the first viewport.

---

## 14. Responsive Composition

### 14.1 Tablet

- Reduce orbit radius.
- Move explanation below headline.
- Keep device visible within the first viewport.
- Collapse trust signals to two or three visible items.
- Use a simpler nav.
- Reduce pinned-scroll distance.

### 14.2 Mobile hero

Suggested order:

1. compact header;
2. announcement chip;
3. headline;
4. explanation;
5. call-stage crop;
6. CTAs;
7. compact trust line.

The phone or call object may sit behind the lower headline edge, but it must not reduce text contrast.

Avoid forcing everything into exactly 100vh on small screens. Use a minimum of 100svh and allow natural extension when browser chrome, localization, or accessibility text size requires it.

### 14.3 Mobile scroll 2

- Replace long desktop pinning with a shorter sticky device plus explicit swipe or tap scenario controls.
- Show caller selector as a horizontal rail.
- Place transcript below or over the lower portion of the device in a draggable or expanding sheet.
- Preserve a visible progress indicator.
- Keep the summary fully readable without precision scrolling.

### 14.4 Large screens

- Cap line lengths and stage scale.
- Increase negative space before increasing font indefinitely.
- Avoid letting orbit nodes reach browser edges where they appear accidental.

---

## 15. Light Mode

Light mode is secondary to the dark launch concept and should not be built in the first demo unless required.

If approved later:

- canvas becomes warm cream;
- text becomes near-black;
- elevated surfaces use soft white or cream;
- official lime stays an accent;
- 3D glass adapts to visible edge contrast;
- media receives light-theme posters or framing;
- the page must not become a solid green field.

Theme switching must not replay all motion or restart audio.

---

## 16. Accessibility Design

- Important copy is ordinary text, not canvas-rendered text.
- Video has transcript or captions.
- Waveform is decorative unless it communicates a labeled state.
- Outline text retains a filled accessible representation.
- Focus states are as polished as hover states.
- Reduce transparency if the operating system requests it where supported.
- Reduced-motion mode removes orbiting, parallax, character stagger, long morphs, and scroll pinning.
- Scenario change is available through explicit controls.
- Time-based media offers pause and replay.
- Contrast is measured against the actual composite background.
- Dynamic transcript updates are announced in complete chunks, not every word.

---

## 17. Content and Asset Checklist

### Required before final visual lock

- [ ] Official green SVG logo.
- [ ] Official typography names, weights, and licenses.
- [ ] Official brand color tokens.
- [ ] Approved Android store URL.
- [ ] Approved iOS CTA wording and destination.
- [ ] Final navigation routes.
- [ ] Final metric value.
- [ ] Approval status of “India's #1.”
- [ ] Product videos for each scenario.
- [ ] Posters or key frames.
- [ ] Timed transcripts.
- [ ] Notification MP3.
- [ ] App UI screenshots or screen recordings.
- [ ] QR code destination and official QR asset, if used.
- [ ] Privacy and accessibility approval for family or caller media.

### Placeholder policy

Every placeholder must be labeled in the implementation notes. Use neutral prototype names and synthetic transcript text only for internal review. Remove or replace all placeholders before production.

---

## 18. Design Anti-Patterns

- Generic centered headline plus a floating glass card.
- Unrelated 3D objects.
- A phone PNG pasted on top of a gradient.
- Constant neon glow on every edge.
- All text in lime.
- Tiny body copy used to preserve an oversized headline.
- Multiple autoplay videos above the fold.
- Audible sound without interaction.
- Endless marquee motion with no pause.
- Typewriter animation for long paragraphs.
- Heavy blur that makes the interface muddy.
- Mobile layout treated as a scaled desktop composition.
- A hamburger overlay that is visually dramatic but keyboard-inaccessible.
- Copying reference-site components without adapting them to Equal AI.
- Using generated logo art instead of the official SVG.
- Hiding product meaning until the animation finishes.

---

## 19. Visual Walkthrough

### First impression

The page opens on near-black. The official green logo is already crisp and visible. A small “What is Equal AI” capsule rests above a large headline. The word “attention” receives a brief lime outline-to-fill pulse, then settles.

The complete product explanation is visible below. Android and iOS actions sit close enough to be read as one availability group.

At the right edge, caller identities slowly orbit a glass phone. One unknown caller approaches. A transcript ribbon appears for a single short exchange. Equal AI labels the intent and produces a clean summary. This all happens without blocking the user from reading or clicking.

### First scroll

The active caller node travels into the phone. The bottom capsule expands into the sticky navigation. The phone straightens and moves toward the center. The dark canvas deepens slightly.

### Second scroll

The selected video plays inside the phone. A readable transcript grows beside it in phrase-sized blocks. The caller's intent becomes clear. An Equal AI action chip appears. The final summary compresses into history, and the next caller becomes selectable.

The user can scroll, click, use the keyboard, or swipe between approved scenarios. Audio remains off unless requested.

### Exit

The last summary resolves into a compact “handled by Equal” state. The sticky stage releases. The existing rest of the site continues untouched.

---

## 20. Design Acceptance Criteria

The concept is ready for implementation approval when:

- the hero communicates the product within five seconds;
- the official logo is correctly used;
- copy fits at the required desktop and mobile sizes;
- motion supports the call-handling story;
- the second scroll proves the product without requiring audio;
- the design feels original rather than like a CRED or Wispr clone;
- no prohibited pricing or competitor language appears;
- reduced-motion and non-WebGL fallbacks are designed;
- existing page continuity is visible in the handoff;
- the client can review desktop and mobile before code integration.
