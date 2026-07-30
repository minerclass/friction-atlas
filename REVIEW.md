# Review — The Friction Atlas

**Reviewed:** July 29, 2026
**Reviewed at:** `https://minerclass.github.io/friction-atlas/` (commit `35994f6`)
**Method:** source read, played through at 1280×900 and 375×812, computed contrast and target
sizes against the rendered DOM, and ran the source-reachability check from `AGENTS.md`.

This file records the review findings and what was changed in response. It is a snapshot, not a
standing spec — `AGENTS.md` remains the authority on rules.

---

## 1. What was already working

Verified, not assumed:

- **Source integrity is clean.** The `AGENTS.md` verification snippet reports 105 sources defined,
  105 reachable through station drawers, zero unreachable, zero bogus keys. The codex can genuinely
  reach 105/105.
- **Zero console errors** across a full playthrough and reload.
- **Zero network requests.** No CDN, no fonts, no analytics — confirmed against the live page.
- **Terminology matches the submitted July 2026 draft.** No "case study," Merriam, Stake, or Yin.
- **No horizontal overflow at 375px.** `prefers-reduced-motion` is honored. Escape closes both
  modals and focus returns to the triggering element.
- **Station 04's lede is the strongest writing on the site.** It explains a mechanic while holding
  the epistemic line: the framework's layer claim is "a question to be examined rather than a
  finding to assume."
- **Station 05 rewarding *contested*** is the right scholarly call and is implemented faithfully.

---

## 2. Findings and disposition

### Fixed

| # | Finding | Change |
|---|---------|--------|
| 1 | **"Drop a condition here" was a false affordance.** There were zero draggable elements; the real interaction is select-chip → click-slot. `.chip` also carried `cursor: grab`. The corrective hint fired only *after* a failed click, teaching the model backwards. | Slots are now state-aware: `Select a condition above` when nothing is held, `Place "<condition>" here` once a chip is selected. `cursor` corrected to `pointer`. |
| 2 | **The station-01 right/wrong signal was too soft.** A wrong pick returned the heading "The draft goes further," which reads as continuation rather than correction, and the draft's own answer was never identified. | Wrong picks now read "Not quite — the draft goes further," and the draft's answer is labeled in place so a reader always learns which one it was. |
| 3 | **Heading hierarchy skipped H3** in stations 01, 04, 05, 06, 07 and the footer (H2→H4). | Promoted to H3, with genuine sub-headings kept at H4. |
| 4 | **No live region anywhere.** Every dynamic event — reveals, completion, progress, codex increments — was silent to screen readers. | Added a single polite `role="status"` region and an `announce()` helper, wired to completion, reveals, and unlock counts. |
| 5 | **`aria-modal="true"` without a focus trap.** `role="dialog"` and `aria-modal` were correctly set in `index.html`, but Tab walked straight out of an open modal into the page behind — so the attribute actively misdescribed the page. | Added a focus trap (Tab/Shift-Tab wrap) to both modals. Escape and focus-restore were already correct and are unchanged. |
| 6 | **Picked state was class-only** on station-01 and station-05 choices — a screen reader heard several disabled buttons with no indication which was chosen. | Added `aria-pressed` to the choice buttons. |
| 7 | **16 tap targets under 24×24 at 375px** (WCAG 2.5.8), including the inline citation chips at 16px — a core interaction — and footer links at 18px. | Citation buttons and footer links now meet the 24px minimum without disturbing text flow. |
| 8 | **~50 text elements below 12px**, several at 9–10.6px uppercase mono, including `.m-state` ("You are here" / "Complete") — the primary wayfinding signal. | Raised every sub-12px rule to a 0.75rem floor. |
| 9 | **One contrast failure:** `.a-era` ("Before writing") at 9px/700 measured 4.17:1 against a 4.5:1 requirement. | Recolored to `--muted` and enlarged; now clears AA. |
| 10 | **The condition tray claimed to be a listbox** (`role="listbox"` with `role="option"` children) but had no arrow-key handling or `aria-activedescendant`, so it did not behave as the pattern promises. | Replaced with an honest `role="group"` of `aria-pressed` toggle buttons, which is what the interaction actually is. |
| 11 | **The codex read "2" before the reader did anything.** Station 02 auto-selected its first stage on load, silently unlocking two Ong references and writing `arcSeen` to `localStorage`. | The initial stage now renders without recording progress or unlocking. Both happen on genuine activation. |

### Changed by request — badges

The badge system was doing two jobs badly. Every station completed on *any* interaction, including
a wrong answer at station 01, so the seven named badges ("Inference Broken", "Arc Traced", …)
measured attendance while the star iconography read as achievement. For a literature review that
wants exploration rather than scoring, attendance is the right thing to measure — so the
achievement framing was removed rather than the generosity.

- Removed the seven named badges, the ★/☆ badge row, and the `badge` field from `STATIONS`.
- Completion banners now read "Station 01 complete" and keep the onward link.
- Kept the progress bar, the `n / 7` count, and the station-map states. These are quiet wayfinding
  and answer a real question — how much is left — without implying a grade.

### Added — a visual layer

The site had **zero images and zero SVG**. For an argument that is inherently diagrammatic — a
five-stage arc, three conditions degrading, three layers over one conditioning base — this was the
largest gap between what the prose claims and what the page shows.

Two inline SVGs were added. Both are generated from existing `data.js` content, introduce no new
claims, and add no network requests:

- **Station 02 — condition matrix.** A 3×5 grid showing each tacit condition across the five
  stages, so held → strained → broken is visible at a glance rather than reconstructed by clicking
  through five tabs.
- **Station 04 — framework stack.** The three learner-facing dimensions resting on the
  infrastructural base, filling in as layers are built. This is the claim the station's lock already
  enforces; the diagram makes it visible instead of inferred.

Both carry `role="img"` with an accessible name and a text equivalent, so nothing is
diagram-only.

### Deferred — needs a decision from the author

| Finding | Why it was not changed |
|---|---|
| **Length: 11.8 screens desktop, 22.8 screens mobile** (18,514px). Station 07 alone is 5,589px — roughly 4× the median station and 6.9 mobile screens. | The fix is to split station 07 (the evidence table, the gap, and the RQs are three different jobs) or to soft-gate unvisited stations to a title and teaser. Both change the seven-station architecture that is the site's organizing spine. That is an authorial decision, not a consistency fix. |
| **Everything is visible at once**, which works against the station metaphor — the progress bar reads 0/7 while all seven stations sit fully readable below. | Same reason. Soft-gating would resolve both this and the scroll length in one move, but it adds machinery, and the brief for this pass was to simplify rather than add. |
| **No closing synthesis.** The seventh station ends and the footer begins. | Worth adding, but it is new scholarly content and belongs to the author. |
| Repository `homepage` field is unset. | Not settable from a commit; needs the repository settings or the API. |

### Surfaced by the new diagram, then corrected against the proposal

The condition matrix makes the full 3×5 grid visible at once, and that exposed one non-monotonic
value that five separate tab clicks had kept hidden. The *accountable claimant* row read:

| Primary orality | Literacy | Secondary orality | Algorithmic secondary orality | Tertiary algorithmicity |
|---|---|---|---|---|
| holds | strained | strained | **holds** | broken |

The condition recovered from *strained* back to *holds* in the platform era before breaking.

Checked against the submitted Chapters 1–3, this was an error. The proposal states that the three
tacit conditions "remain largely intact across Ong's account of primary orality, literacy, and
secondary orality," and characterizes this one as follows:

> The third condition is that symbolic claims remain connected to an identifiable human claimant.
> Literacy increased the distance between author and audience, and broadcast media further mediated
> that relation, but the text, script, or performance still pointed toward people who could be
> understood as responsible for its claims. **Generative AI weakens this connection.**

Two things follow. *Strained* at literacy and secondary orality is a faithful reading of "increased
the distance… further mediated that relation… but still pointed toward people." And it is
**generative AI** — tertiary algorithmicity — that breaks the condition. Nothing in the proposal's
account of algorithmic secondary orality restores accountable claimancy; that stage's change is to
*circulation*, and the sources cited there on false-news diffusion and emotional contagion
(Vosoughi et al., 2018; Brady et al., 2017) weaken the connection rather than strengthen it.

**Corrected** to `claimant: "strained"`, and the stage's `conditionNote` now names the mediation
instead of implying the condition is untroubled. All three rows are now monotonic: held or strained
across the first four stages, broken at tertiary algorithmicity.

This is the one substantive content change in the review pass, and it was made from the controlling
proposal rather than from inference.

---

## 3. Verification after changes

- `AGENTS.md` source-reachability check: 105 defined, 105 reachable, 0 unreachable, 0 bogus.
- Full playthrough of all seven stations: no console errors.
- Progress survives reload; Reset clears it.
- 375px: no page-level horizontal overflow.
- No new network requests; no CDN, font, or analytics references introduced.
- No participant, IRB, or district material touched. The station-01 sample essay remains invented.
- No citation or reference was altered. One scholarly value was corrected — the
  accountable-claimant state at algorithmic secondary orality — sourced to the submitted
  Chapters 1–3 and documented above. All other content edits were confined to interface copy.
- Condition matrix re-checked after the correction: all three rows monotonic, no stage regresses.
