# AGENTS.md

Guidance for any agent or collaborator editing this repository.

## Purpose

A public, gamified interactive literature review covering **Chapter Two** (with Chapter One's
problem statement as the entry point) of Micah J. Miner's dissertation proposal. Seven stations,
a badge/progress system, and a 105-reference Source Codex. It is orientation and argument, not a
findings report, and it collects no data.

## Hard rules

1. **No findings.** The study is at the proposal stage, before data collection and IRB approval.
   Never add language implying results, participant quotes, or themes. Station 07's numbers are
   *secondary* analysis of public datasets and must keep their noncomparability note.
2. **`js/data.js` is the single source of truth for content.** The engine in `js/atlas.js`
   renders it and must never hardcode scholarly text. Fix claims in `data.js`.
3. **No network requests.** No CDNs, fonts, analytics, or third-party scripts. Everything ships
   in-repo. A CSP-strict host must be able to serve this unchanged.
4. **Every source key must be reachable.** If you add a key to `SOURCES`, add it to at least one
   station's `data-sources` drawer in `index.html`, or the codex can never reach 105/105. Verify:

   ```bash
   python -c "import re;h=open('index.html',encoding='utf-8').read();d=open('js/data.js',encoding='utf-8').read();a=set(re.findall(r'^  (\w+): \{ ref:',d,re.M));r=set();[r.update(m.split(',')) for m in re.findall(r'data-sources=\"([^\"]+)\"',h)];print('unreachable:',sorted(a-r),'bogus:',sorted(r-a))"
   ```

## Canonical terminology (submitted July 2026 draft)

Several sibling repos carry **stale** wording. This repo follows the submitted Chapters 1–3.

- **Design:** *qualitative-dominant convergent mixed methods study* (QUAL + quan). The
  **case-study framing was dropped.** Do not reintroduce "case study," Merriam, Stake, or Yin.
- **Five media-ecology stages:** primary orality, literacy, secondary orality, **algorithmic
  secondary orality** (Miner; mid-2000s to early 2020s), **tertiary algorithmicity** (Miner;
  generative-AI present).
- **Three pressures of tertiary algorithmicity:** noetic displacement, rhetorical saturation,
  existential abstraction.
- **Three conditions under pressure:** human composition, situated interlocutors, accountable
  claimant. These are **reconstructed** in Chapter Two — Ong did not present them as a formal
  list, and the site must keep saying so at station 02.
- **Framework:** three **learner-facing** dimensions (noetic/head, rhetorical/room,
  existential/world) plus **infrastructural friction (system) as the conditioning layer**.
  Never present the four as co-equal peers. Station 04's lock encodes this; do not remove it.
- **Equity distinction:** **productive vs. exclusionary** friction, cutting across all
  dimensions. Contested cases stay contested — do not "resolve" them for the reader.
- **Agentic AI:** an intensification *within* tertiary algorithmicity, not a fourth stage.
- **Citations:** Miner **2026a** = Zenodo secondary-data companion; Miner **2026b** = the
  *i.e.: inquiry in education* article. Older sibling repos state this pair in reverse — this
  repo matches the submitted draft.

## Data and privacy restrictions

No participant data, transcripts, recruitment lists, IRB materials, district data, or student
work belong in this repo, in any form, including as examples. The station-01 sample essay is
invented for illustration and must stay invented. `localStorage` is the only persistence, and
the Reset button must keep clearing it.

## Style

- Match `minerclass.github.io` design tokens (gold `#f0bd45`, near-black `#111318`, teal, violet,
  blue, rust, rose). Keep gold-on-dark for contrast; `#8c6014` is the light-background gold and
  is not used here.
- Vanilla JS, no build step, no dependencies. ES5-compatible syntax in `atlas.js`.
- Keep keyboard access, ARIA roles, focus rings, and `prefers-reduced-motion` intact.
- Wide content scrolls inside its own container; the page body must never scroll horizontally.

## Verification before committing

Serve locally and confirm: no console errors, all seven stations completable, codex reaches
105/105, progress survives a reload, and mobile (375px) shows no page-level horizontal overflow.

```bash
python -m http.server 8210 --directory .
```

## Response format for changes

Summary / Files changed / Validation / Notes or risks.
