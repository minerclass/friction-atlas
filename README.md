# The Friction Atlas

An interactive, gamified literature review for Micah J. Miner's dissertation proposal,
*Pedagogical Friction in the Age of Generative AI and Tertiary Algorithmicity: A
Qualitative-Dominant Convergent Mixed Methods Study* (Ed.D. in Curriculum, Advocacy, and
Policy, National Louis University).

Where [`pedagogical-friction`](https://minerclass.github.io/pedagogical-friction/) is the
scrollytelling walk through the whole proposal and
[`dissertation-overview`](https://minerclass.github.io/dissertation-overview/) is the front
door, this repo does one job: it turns **Chapter Two's literature review** into something a
reader moves through rather than reads past.

## The seven stations

| # | Station | What it covers | The mechanic |
|---|---------|----------------|--------------|
| 01 | The Artifact Test | Ch. 1 problem; unproductive success | Judge a polished student essay, then watch the artifact-as-proxy inference come apart |
| 02 | The Long Arc | Ong's stages + the two Miner extensions | Timeline with a live monitor on three tacit conditions; watch them go from held → strained → broken |
| 03 | The Rupture | Tertiary algorithmicity's three pressures | Match each broken condition to the pressure that names its collapse |
| 04 | The Response | The Pedagogical Friction Framework | **The learner-facing layers are locked until you build the infrastructural base** |
| 05 | The Boundary | Productive vs. exclusionary friction | Ten-scenario sort with a genuine *contested* option |
| 06 | The Arena | Counterarguments and stated limits | Four objections at full strength; pick the reply the draft actually makes |
| 07 | The Landscape and the Gap | Table 1 evidence, the gap, the RQs | Filterable weighted-estimate chart, then the four-literature gap and RQ1–RQ3 |

### The mechanics carry the argument

Two interactions are deliberately more than decoration:

- **Station 04 gates the framework.** You cannot build noetic, rhetorical, or existential
  friction until infrastructural friction is in place. That is the framework's structural
  claim — the four dimensions are not co-equal peers, and infrastructural friction is the
  conditioning layer. The site enforces it so the reader feels the claim rather than reading it.
- **Station 05 rewards saying "contested."** Two of the ten scenarios (AI translation for a
  multilingual writer; AI-brainstormed counterarguments the student must adjudicate) have no
  clean answer, and the draft says so explicitly. Marking them contested is the correct
  response, not a hedge.

## Progress, badges, and the Source Codex

Completing a station earns a badge and unlocks its references into a searchable **Source
Codex** — all 105 references cited across Chapters One and Two. Finishing all seven stations
yields a complete codex. Any inline citation on the page opens its full APA reference.

Progress lives in `localStorage` under `friction-atlas-v1` and is cleared by the **Reset**
button in the header. Nothing is transmitted anywhere.

## Scholarly guardrails

- **Proposal stage.** The site presents reviewed literature and the conceptual framework. It
  reports **no findings**. Data collection has not occurred.
- **Station 07 is secondary analysis.** The Table 1 figures are weighted descriptive estimates
  from public RAND/Gallup microdata and published NCES School Pulse Panel results, reproduced
  with the draft's full noncomparability note. They are not results from the proposed
  participant study. Methods and scripts live in the companion (Miner, 2026a).
- **The three conditions are reconstructed, not quoted.** Ong did not present them as a formal
  list; Chapter Two names them to locate where generative AI applies pressure. The site says so
  at station 02.
- **No data collection.** No analytics, no cookies, no third-party requests, no fonts or
  scripts from a CDN.

## Terminology (current as of the submitted July 2026 draft)

Sibling repos carry some older wording. This repo follows the **submitted Chapters 1–3**:

- **Design:** *qualitative-dominant convergent mixed methods study*. The case-study framing
  was dropped — do **not** reintroduce Merriam, Stake, or Yin here.
- **Five stages:** primary orality, literacy, secondary orality, **algorithmic secondary
  orality** (Miner, mid-2000s–early 2020s), **tertiary algorithmicity** (Miner, generative-AI
  present).
- **Three pressures:** noetic displacement, rhetorical saturation, existential abstraction.
- **Framework:** three learner-facing dimensions (noetic/head, rhetorical/room,
  existential/world) over **infrastructural friction (system) as the conditioning layer**.
- **Equity distinction:** productive vs. exclusionary friction, cutting across all dimensions.
- **Citations:** Miner **2026a** = Zenodo secondary-data companion; Miner **2026b** = the
  *i.e.: inquiry in education* article. (This scheme matches the submitted draft and reverses
  what some older sibling repos say.)

## Structure

```
index.html        static section shells; JS fills the interactive regions
css/atlas.css     design tokens matched to minerclass.github.io
js/data.js        all content — sources, stages, pressures, frictions, scenarios, evidence
js/atlas.js       engine: rendering, state, localStorage, modals
```

`js/data.js` is the single source of truth for text. The engine renders it and never invents
content. To correct a claim or citation, edit `data.js` — not the engine.

## Local development

```bash
python -m http.server 8210 --directory friction-atlas
```

Then open `http://localhost:8210`.

## Deployment

Built for GitHub Pages at `https://minerclass.github.io/friction-atlas/`. Push to `main`, then
set Pages source to `main` / root. All links are absolute or relative, so no base-path config
is needed.

## Accessibility

Keyboard-navigable throughout, including arrow-key movement across the station-02 timeline.
Skip link, ARIA tablists and progressbar, visible focus rings, `prefers-reduced-motion`
support, and a dark palette whose gold-on-near-black text clears WCAG AA. Wide content (the
timeline) scrolls inside its own container rather than the page.

## License

Source code MIT; prose and framework content CC BY 4.0. See `LICENSE`.
