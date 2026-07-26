/*
 * The Friction Atlas — engine
 *
 * Zero dependencies. Renders the content in data.js, tracks station completion
 * and unlocked sources in localStorage, and enforces a few interaction rules
 * that encode the argument (see station 04).
 */

(function () {
  "use strict";

  var STORE_KEY = "friction-atlas-v1";

  /* ---------------------------------------------------------- state */

  var state = {
    done: {},        // stationId -> true
    sources: {},     // sourceKey -> true
    sortIndex: 0,
    sortAnswers: {}, // scenarioId -> chosen verdict
    arenaSolved: {}, // objectionId -> true
    arcSeen: {},     // stageId -> true
    builtLayers: {}  // frictionId -> true
  };

  function load() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      if (raw) {
        var parsed = JSON.parse(raw);
        Object.keys(state).forEach(function (k) {
          if (parsed[k] !== undefined) state[k] = parsed[k];
        });
      }
    } catch (e) {
      /* Private mode or corrupt payload: run with a clean in-memory state. */
    }
  }

  function save() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(state));
    } catch (e) { /* non-fatal */ }
  }

  /* ---------------------------------------------------------- helpers */

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === "class") node.className = attrs[k];
        else if (k === "html") node.innerHTML = attrs[k];
        else if (k === "text") node.textContent = attrs[k];
        else if (k.indexOf("on") === 0 && typeof attrs[k] === "function") {
          node.addEventListener(k.slice(2).toLowerCase(), attrs[k]);
        } else if (attrs[k] === true) node.setAttribute(k, "");
        else if (attrs[k] !== false && attrs[k] != null) node.setAttribute(k, attrs[k]);
      });
    }
    (children || []).forEach(function (c) {
      if (c == null) return;
      node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return node;
  }

  function unlock(keys) {
    var added = 0;
    (keys || []).forEach(function (k) {
      if (SOURCES[k] && !state.sources[k]) { state.sources[k] = true; added++; }
    });
    if (added) { save(); renderCodexTally(); }
    return added;
  }

  function sourceCount() { return Object.keys(state.sources).length; }
  function totalSources() { return Object.keys(SOURCES).length; }

  /* Renders "(Author, year)" as a clickable citation button. */
  function citeList(keys) {
    var frag = document.createDocumentFragment();
    keys.forEach(function (k, i) {
      if (!SOURCES[k]) return;
      if (i) frag.appendChild(document.createTextNode(" "));
      frag.appendChild(el("button", {
        class: "cite", type: "button", "data-cite": k,
        title: "Show the full reference",
        text: shortCite(k)
      }));
    });
    return frag;
  }

  function shortCite(key) {
    var ref = SOURCES[key].ref.replace(/<[^>]+>/g, "");
    var year = ref.match(/\((\d{4}[a-z]?)/);
    var author = ref.split(/,|\(/)[0].trim();
    return author + (year ? " " + year[1] : "");
  }

  /* ---------------------------------------------------------- completion */

  function complete(stationId, sources) {
    unlock(sources);
    // Completing a station also releases everything in its reference drawer, so
    // finishing all seven yields a complete codex rather than a partial one.
    var drawer = $("#station-" + stationId + " .source-drop");
    if (drawer) unlock((drawer.getAttribute("data-sources") || "").split(",").filter(Boolean));
    if (state.done[stationId]) { renderProgress(); return; }
    state.done[stationId] = true;
    save();
    renderProgress();
    var banner = $("#done-" + stationId);
    if (banner) banner.hidden = false;
  }

  function renderProgress() {
    var n = STATIONS.filter(function (s) { return state.done[s.id]; }).length;
    var pct = (n / STATIONS.length) * 100;
    $("#progressFill").style.width = pct + "%";
    $("#progressLabel").textContent = n + " / " + STATIONS.length;
    var track = $(".progress-track");
    track.setAttribute("aria-valuenow", String(n));
    renderMap();
    renderBadges();
  }

  function renderMap() {
    var grid = $("#mapGrid");
    grid.innerHTML = "";
    var firstOpen = STATIONS.find(function (s) { return !state.done[s.id]; });
    STATIONS.forEach(function (s) {
      var done = !!state.done[s.id];
      var card = el("a", {
        class: "map-card" + (done ? " is-done" : "") +
          (firstOpen && firstOpen.id === s.id ? " is-current" : ""),
        href: "#station-" + s.id,
        style: "--accent:var(--" + s.color + ")"
      }, [
        el("span", { class: "m-num", text: "Station " + s.num }),
        el("span", { class: "m-title", text: s.title }),
        el("span", { class: "m-kicker", text: s.kicker }),
        el("span", { class: "m-state", text: done ? "Complete ✓" : (firstOpen && firstOpen.id === s.id ? "You are here" : "Not visited") })
      ]);
      grid.appendChild(card);
    });
  }

  function renderBadges() {
    var row = $("#badgeRow");
    row.innerHTML = "";
    STATIONS.forEach(function (s) {
      row.appendChild(el("span", {
        class: "badge" + (state.done[s.id] ? " earned" : ""),
        text: (state.done[s.id] ? "★ " : "☆ ") + s.badge
      }));
    });
  }

  /* ---------------------------------------------------------- station 01 */

  var ARTIFACT_CHOICES = [
    {
      id: "a",
      text: "That the student can produce a competent historical argument.",
      verdict: false,
      why: "It establishes that a competent argument was produced. It does not establish who or what performed the interpretive work, and that is exactly the inference the draft says has become unreliable."
    },
    {
      id: "b",
      text: "That a competent argument now exists. Nothing more.",
      verdict: true,
      why: "This is the draft's position. In a pre-generative-AI environment a polished essay was imperfect evidence of learning but usually implied at least some relevant cognitive labor. Under tertiary algorithmicity the same artifact may be produced with minimal interpretive effort, so the artifact-as-proxy inference on which assessment depends becomes unreliable."
    },
    {
      id: "c",
      text: "That the student cheated.",
      verdict: false,
      why: "The draft is explicit that the educational risk extends beyond misconduct. A student may use AI in permitted ways that still bypass the learning process, and may use it in prohibited ways while still engaging deeply. Integrity framing leaves the learning-design problem untouched."
    }
  ];

  function initOrigin() {
    var wrap = $("#artifactChoices");
    var reveal = $("#artifactReveal");

    ARTIFACT_CHOICES.forEach(function (c) {
      wrap.appendChild(el("button", {
        class: "verdict", type: "button", "data-id": c.id, text: c.text,
        onclick: function () { pick(c); }
      }));
    });

    function pick(c) {
      $$(".verdict", wrap).forEach(function (b) {
        b.disabled = true;
        if (b.getAttribute("data-id") === c.id) b.classList.add("picked");
        else b.classList.add("dimmed");
      });

      reveal.innerHTML = "";
      reveal.appendChild(el("h4", { text: c.verdict ? "That is the draft's reading" : "The draft goes further" }));
      reveal.appendChild(el("p", { text: c.why }));
      reveal.appendChild(el("p", { html:
        "The framework names this <strong>unproductive success</strong>, adapted from Kapur's productive-failure work: " +
        "correct-looking academic performance achieved without the cognitive struggle that the performance would normally indicate." }));
      var p = el("p", { html: "Sources unlocked: " });
      p.appendChild(citeList(["kapur2016", "bastani2025", "miner2026b"]));
      reveal.appendChild(p);
      reveal.hidden = false;

      complete("origin", ["bastani2025", "kapur2016", "kizilcec2024", "schindler2023", "miner2026b", "doss2025"]);
    }

    var stats = [
      { n: "≈1,000", t: "high school mathematics students in a field experiment where AI-supported practice improved performance but post-access performance fell below control" },
      { n: "Guardrails", t: "learning-oriented guardrails largely mitigated that effect, which is why the framework is a response framework rather than a prohibition" },
      { n: "68.9%", t: "of public K–12 teachers reported AI use by fall 2025, while about one in eight reported a school policy that was both present and clear" }
    ];
    var strip = $("#originStats");
    stats.forEach(function (s) {
      strip.appendChild(el("div", { class: "stat" }, [
        el("b", { text: s.n }), el("span", { text: s.t })
      ]));
    });
  }

  /* ---------------------------------------------------------- station 02 */

  function initArc() {
    var rail = $("#arcRail");
    var detail = $("#arcDetail");

    STAGES.forEach(function (stage, i) {
      var stop = el("button", {
        class: "arc-stop" + (stage.isNew ? " is-new" : ""),
        type: "button", role: "tab", id: "arctab-" + stage.id,
        "aria-selected": i === 0 ? "true" : "false",
        "aria-controls": "arcDetail",
        onclick: function () { select(stage.id); }
      }, [
        el("span", { class: "a-era", text: stage.era }),
        el("span", { class: "a-label", text: stage.label }),
        el("span", { class: "a-dots" }, CONDITIONS.map(function (c) {
          return el("i", { class: "arc-dot " + stage.conditions[c.key], "aria-hidden": "true" });
        }))
      ]);
      rail.appendChild(stop);
    });

    rail.addEventListener("keydown", function (e) {
      var keys = { ArrowRight: 1, ArrowLeft: -1 };
      if (!(e.key in keys)) return;
      e.preventDefault();
      var tabs = $$(".arc-stop", rail);
      var cur = tabs.findIndex(function (t) { return t.getAttribute("aria-selected") === "true"; });
      var next = (cur + keys[e.key] + tabs.length) % tabs.length;
      tabs[next].click();
      tabs[next].focus();
    });

    function select(id) {
      var stage = STAGES.find(function (s) { return s.id === id; });
      $$(".arc-stop", rail).forEach(function (t) {
        t.setAttribute("aria-selected", t.id === "arctab-" + id ? "true" : "false");
      });

      detail.innerHTML = "";

      var left = el("div");
      left.appendChild(el("p", { class: "arc-attr", text: stage.attribution }));
      left.appendChild(el("h3", { text: stage.label }));
      left.appendChild(el("p", { text: stage.blurb }));
      var src = el("p", { class: "arc-attr", style: "margin-top:16px;color:var(--muted-dim)", html: "Sources: " });
      src.appendChild(citeList(stage.sources));
      left.appendChild(src);
      detail.appendChild(left);

      var right = el("div", { class: "cond-list" });
      CONDITIONS.forEach(function (c) {
        var st = stage.conditions[c.key];
        var stateWord = st === "held" ? "holds" : st === "strained" ? "strained" : "no longer holds";
        right.appendChild(el("div", { class: "cond " + st }, [
          el("span", { class: "cond-flag " + st, "aria-hidden": "true" }),
          el("div", {}, [
            el("div", { class: "cond-name" }, [
              document.createTextNode(c.short + " "),
              el("span", { class: "cond-state", text: "— " + stateWord })
            ]),
            el("p", { class: "cond-note", text: stage.conditionNotes[c.key] })
          ])
        ]));
      });
      detail.appendChild(right);

      if (!state.arcSeen[id]) { state.arcSeen[id] = true; save(); }
      unlock(stage.sources);

      if (STAGES.every(function (s) { return state.arcSeen[s.id]; })) {
        complete("arc", ["ong2002", "ong1977", "mcluhan1964", "postman1985", "postman1992", "stalder2018", "boyd2007", "bucher2012", "pariser2011", "zuboff2019"]);
      }
    }

    select(STAGES[0].id);
  }

  /* ---------------------------------------------------------- station 03 */

  function initRupture() {
    var tray = $("#conditionChips");
    var grid = $("#pressureGrid");
    var selectedChip = null;
    var placed = {}; // pressureId -> conditionKey

    CONDITIONS.forEach(function (c) {
      tray.appendChild(el("button", {
        class: "chip", type: "button", role: "option", "aria-selected": "false",
        "data-key": c.key, text: c.short,
        title: c.full,
        onclick: function () { chooseChip(c.key, this); }
      }));
    });

    function clearSelection() {
      selectedChip = null;
      $$(".chip", tray).forEach(function (n) {
        n.classList.remove("is-selected");
        n.setAttribute("aria-selected", "false");
      });
    }

    function chooseChip(key, node) {
      var wasSelected = selectedChip === key;
      clearSelection();
      if (wasSelected) return;
      selectedChip = key;
      node.classList.add("is-selected");
      node.setAttribute("aria-selected", "true");
    }

    PRESSURES.forEach(function (p) {
      var card = el("div", { class: "pressure-card" }, [
        el("span", { class: "p-domain", text: p.domain }),
        el("h3", { text: p.name }),
        el("p", { class: "p-def", text: p.definition })
      ]);

      var slot = el("button", {
        class: "match-slot", type: "button", "data-pressure": p.id,
        text: "Drop a condition here",
        onclick: function () { drop(p, this, card); }
      });
      card.appendChild(slot);

      var more = el("div", { class: "pressure-more", hidden: true });
      more.appendChild(el("p", { text: p.sharpening }));
      more.appendChild(el("p", { class: "p-stake", text: p.stake }));
      var s = el("p", { html: "" });
      s.appendChild(citeList(p.sources));
      more.appendChild(s);
      card.appendChild(more);

      grid.appendChild(card);
    });

    function drop(pressure, slot, card) {
      if (!selectedChip) {
        slot.textContent = "Select a condition first";
        window.setTimeout(function () {
          if (!placed[pressure.id]) slot.textContent = "Drop a condition here";
        }, 1400);
        return;
      }
      if (placed[pressure.id]) return;

      var cond = CONDITIONS.find(function (c) { return c.key === selectedChip; });
      var right = cond.pressure === pressure.id;

      slot.textContent = cond.short + (right ? "  ✓" : "  ✕");
      slot.classList.add("filled", right ? "correct" : "wrong");

      // Either way the selection is consumed, so a retry always starts from a
      // clean state rather than silently toggling the same chip back off.
      clearSelection();

      if (right) {
        placed[pressure.id] = cond.key;
        slot.disabled = true;
        $$(".chip", tray).forEach(function (n) {
          if (n.getAttribute("data-key") === cond.key) n.classList.add("is-used");
        });
        $(".pressure-more", card).hidden = false;
        unlock(pressure.sources);

        if (Object.keys(placed).length === PRESSURES.length) {
          complete("rupture", ["benderkoller2020", "bender2021", "clark2021", "jakesch2023", "jones2025", "frankfurt2005", "carr2011", "turkle2011", "bozkurt2025", "baudrillard1994"]);
        }
      } else {
        window.setTimeout(function () {
          if (placed[pressure.id]) return;
          slot.textContent = "Drop a condition here";
          slot.classList.remove("filled", "wrong");
        }, 1500);
      }
    }
  }

  /* ---------------------------------------------------------- station 04 */

  function initResponse() {
    var stack = $("#buildStack");

    function baseBuilt() { return !!state.builtLayers.infrastructural; }

    function render() {
      stack.innerHTML = "";
      // Learner-facing dimensions render above the base, which sits last as the
      // foundation. Order in the DOM is visual; the gate is what carries the argument.
      var ordered = FRICTIONS.filter(function (f) { return f.layer === "learner"; })
        .concat(FRICTIONS.filter(function (f) { return f.layer === "base"; }));

      ordered.forEach(function (f) {
        var built = !!state.builtLayers[f.id];
        var locked = f.layer === "learner" && !baseBuilt();
        var accent = f.id === "infrastructural" ? "var(--teal)" :
          f.id === "noetic" ? "var(--gold)" :
          f.id === "rhetorical" ? "var(--blue)" : "var(--rose)";

        var layer = el("div", {
          class: "build-layer" + (built ? " built" : "") + (locked && !built ? " locked" : ""),
          style: "--accent2:" + accent
        });

        if (f.layer === "base") layer.appendChild(el("span", { class: "base-marker", text: "CONDITIONING LAYER" }));

        layer.appendChild(el("div", { class: "build-layer-head" }, [
          el("span", { class: "build-place", text: f.place }),
          el("h3", { text: f.name })
        ]));
        layer.appendChild(el("p", { class: "b-def", text: f.definition }));

        if (built) {
          var body = el("div", { class: "build-body" });
          body.appendChild(el("p", { class: "b-arg", text: f.argument }));
          body.appendChild(el("h4", { text: "Preserved through" }));
          body.appendChild(el("ul", { class: "practice-list" }, f.practices.map(function (pr) {
            return el("li", { text: pr });
          })));
          if (f.counterpart) {
            var cp = PRESSURES.find(function (p) { return p.id === f.counterpart; });
            body.appendChild(el("p", { class: "b-claim", text: f.claim + " Counters: " + cp.name + "." }));
          } else {
            body.appendChild(el("p", { class: "b-claim", text: f.claim }));
          }
          var s = el("p", { style: "margin-top:14px" });
          s.appendChild(citeList(f.sources));
          body.appendChild(s);
          layer.appendChild(body);
        } else if (locked) {
          layer.appendChild(el("p", { class: "lock-note",
            text: "Locked — build the conditioning layer first" }));
        } else {
          layer.appendChild(el("div", { class: "build-cta" }, [
            el("button", {
              class: "button", type: "button",
              text: f.layer === "base" ? "Establish the conditioning layer" : "Build " + f.place.toLowerCase(),
              onclick: function () { build(f); }
            })
          ]));
        }

        stack.appendChild(layer);
      });

      if (baseBuilt() && FRICTIONS.every(function (f) { return state.builtLayers[f.id]; })) {
        var note = el("div", { class: "panel", style: "margin-top:14px;border-color:var(--teal)" });
        note.appendChild(el("h4", { style: "color:var(--teal)", text: "Why the order was enforced" }));
        note.appendChild(el("p", { style: "margin:0", text:
          "Individual teachers cannot preserve noetic, rhetorical, and existential friction alone if grades, " +
          "pacing guides, device environments, parent expectations, and district policy reward frictionless " +
          "completion. The framework treats infrastructural friction as the condition of possibility for the " +
          "other three dimensions — and that claim is the central relationship this study examines, not one " +
          "it assumes." }));
        stack.appendChild(note);
      }
    }

    function build(f) {
      if (f.layer === "learner" && !baseBuilt()) return;
      state.builtLayers[f.id] = true;
      save();
      unlock(f.sources);
      render();
      if (FRICTIONS.every(function (x) { return state.builtLayers[x.id]; })) {
        complete("response", ["bjork2011", "kapur2016", "sweller1988", "chi2014", "michaels2008", "bozkurt2024", "rice2025", "teachai2025", "vygotsky1978", "dewey1933"]);
      }
    }

    render();
  }

  /* ---------------------------------------------------------- station 05 */

  var SORT_OPTIONS = [
    { key: "productive", label: "Productive friction — keep it",
      hint: "Difficulty that builds capacity the task exists to develop." },
    { key: "exclusionary", label: "Exclusionary friction — remove it",
      hint: "Difficulty that blocks access or participation without producing educational benefit." },
    { key: "contested", label: "Genuinely contested — requires situated judgment",
      hint: "The same use may reduce both productive and exclusionary friction at once." }
  ];

  function initBoundary() {
    var card = $("#sortCard");
    var choices = $("#sortChoices");
    var reveal = $("#sortReveal");
    var scoreWrap = $("#sortScore");

    function renderScore() {
      var answered = Object.keys(state.sortAnswers).length;
      var matched = SCENARIOS.filter(function (s) { return state.sortAnswers[s.id] === s.verdict; }).length;
      var contested = SCENARIOS.filter(function (s) { return s.verdict === "contested" && state.sortAnswers[s.id] === "contested"; }).length;
      scoreWrap.innerHTML = "";
      [
        ["Sorted", answered + " / " + SCENARIOS.length],
        ["Matched the draft", String(matched)],
        ["Contested cases recognized", contested + " / 2"]
      ].forEach(function (pair) {
        scoreWrap.appendChild(el("span", { class: "score-pill", html: pair[0] + " <b>" + pair[1] + "</b>" }));
      });
    }

    function renderCard() {
      var i = Math.min(state.sortIndex, SCENARIOS.length - 1);
      var sc = SCENARIOS[i];
      var answered = state.sortAnswers[sc.id];

      card.innerHTML = "";
      card.appendChild(el("span", { class: "sort-counter", text: "Scenario " + (i + 1) + " of " + SCENARIOS.length }));
      card.appendChild(el("p", { class: "sort-text", text: sc.text }));
      card.appendChild(el("span", { class: "sort-dim", text: answered ? sc.dimension : "Dimension revealed after you sort" }));

      choices.innerHTML = "";
      SORT_OPTIONS.forEach(function (opt) {
        var b = el("button", {
          class: "verdict" + (answered === opt.key ? " picked" : "") + (answered && answered !== opt.key ? " dimmed" : ""),
          type: "button", disabled: !!answered,
          onclick: function () { answer(sc, opt.key); }
        }, [
          el("span", { text: opt.label }),
          el("p", { class: "hint", text: opt.hint })
        ]);
        choices.appendChild(b);
      });

      if (answered) showReveal(sc, answered); else reveal.hidden = true;
      renderScore();
    }

    function showReveal(sc, chosen) {
      var matched = chosen === sc.verdict;
      reveal.innerHTML = "";
      reveal.appendChild(el("h4", {
        text: matched ? "This matches the draft's reading" : "The draft reads this differently"
      }));
      if (sc.isBypass) {
        reveal.appendChild(el("p", { html:
          "<strong>Note the trap.</strong> This is not exclusionary friction. It is the removal of " +
          "<em>productive</em> friction — what the framework calls bypass." }));
      }
      reveal.appendChild(el("p", { text: sc.reveal }));
      var s = el("p", { html: "" });
      s.appendChild(citeList(sc.sources));
      reveal.appendChild(s);

      var nav = el("div", { style: "display:flex;gap:10px;flex-wrap:wrap;margin-top:16px" });
      if (state.sortIndex > 0) {
        nav.appendChild(el("button", { class: "button", type: "button", text: "← Previous",
          onclick: function () { state.sortIndex--; save(); renderCard(); } }));
      }
      if (state.sortIndex < SCENARIOS.length - 1) {
        nav.appendChild(el("button", { class: "button button-primary", type: "button", text: "Next scenario →",
          onclick: function () { state.sortIndex++; save(); renderCard(); } }));
      }
      reveal.appendChild(nav);
      reveal.hidden = false;
    }

    function answer(sc, key) {
      state.sortAnswers[sc.id] = key;
      save();
      unlock(sc.sources);
      renderCard();
      if (SCENARIOS.every(function (s) { return state.sortAnswers[s.id]; })) {
        complete("boundary", ["annamma2013", "dolmage2017", "kasneci2023", "kapur2008", "clark2021", "rice2025", "mollick2024", "ellington2003"]);
      }
    }

    renderCard();
  }

  /* ---------------------------------------------------------- station 06 */

  function initArena() {
    var nav = $("#arenaNav");
    var panel = $("#arenaPanel");
    var active = OBJECTIONS[0].id;

    OBJECTIONS.forEach(function (o) {
      nav.appendChild(el("button", {
        class: "arena-tab" + (state.arenaSolved[o.id] ? " solved" : ""),
        type: "button", role: "tab", id: "arenatab-" + o.id,
        "aria-selected": o.id === active ? "true" : "false",
        text: o.title.replace(/^The /, ""),
        onclick: function () { select(o.id); }
      }));
    });

    function select(id) {
      active = id;
      $$(".arena-tab", nav).forEach(function (t) {
        t.setAttribute("aria-selected", t.id === "arenatab-" + id ? "true" : "false");
        var oid = t.id.replace("arenatab-", "");
        t.classList.toggle("solved", !!state.arenaSolved[oid]);
      });
      render();
    }

    function render() {
      var o = OBJECTIONS.find(function (x) { return x.id === active; });
      var solved = !!state.arenaSolved[o.id];
      panel.innerHTML = "";

      var sm = el("div", { class: "steelman" });
      sm.appendChild(el("h4", { text: o.title + " — stated at full strength" }));
      sm.appendChild(el("p", { text: o.steelman }));
      panel.appendChild(sm);

      panel.appendChild(el("h4", { text: "Which reply does the draft actually make?" }));
      var list = el("div", { class: "verdict-list" });
      o.options.forEach(function (opt, i) {
        list.appendChild(el("button", {
          class: "verdict" + (solved && opt.correct ? " picked" : ""),
          type: "button", disabled: solved,
          text: opt.text,
          onclick: function () { pick(o, opt, i); }
        }));
      });
      panel.appendChild(list);

      var out = el("div", { class: "reveal", id: "arenaReveal", hidden: !solved });
      if (solved) fillReveal(out, o, o.options.find(function (x) { return x.correct; }), true);
      panel.appendChild(out);
    }

    function fillReveal(node, o, opt, correct) {
      node.innerHTML = "";
      node.appendChild(el("h4", { text: correct ? "That is the draft's reply" : "Not the draft's reply" }));
      node.appendChild(el("p", { text: opt.why }));
      if (correct) {
        node.appendChild(el("h4", { style: "margin-top:16px", text: "And the limit the draft concedes" }));
        node.appendChild(el("p", { text: o.limit }));
        var s = el("p", { html: "" });
        s.appendChild(citeList(o.sources));
        node.appendChild(s);
      }
      node.hidden = false;
    }

    function pick(o, opt) {
      var out = $("#arenaReveal");
      if (opt.correct) {
        state.arenaSolved[o.id] = true;
        save();
        unlock(o.sources);
        select(o.id); // re-runs the tab pass so this tab's solved check appears now
        if (OBJECTIONS.every(function (x) { return state.arenaSolved[x.id]; })) {
          complete("arena", ["mollick2024", "riva2025", "ellington2003", "feenberg2002", "hutchby2001", "dron2023", "baudrillard1994", "smithmarx1994"]);
        }
      } else {
        fillReveal(out, o, opt, false);
      }
    }

    select(active);
  }

  /* ---------------------------------------------------------- station 07 */

  function initGap() {
    var controls = $("#evControls");
    var chart = $("#evChart");
    var shown = "all";

    controls.appendChild(el("button", {
      class: "ev-filter", type: "button", "aria-pressed": "true", "data-g": "all", text: "All indicators",
      onclick: function () { setFilter("all"); }
    }));
    EVIDENCE_GROUPS.forEach(function (g) {
      controls.appendChild(el("button", {
        class: "ev-filter", type: "button", "aria-pressed": "false", "data-g": g.group, text: g.group,
        onclick: function () { setFilter(g.group); }
      }));
    });

    function setFilter(g) {
      shown = g;
      $$(".ev-filter", controls).forEach(function (b) {
        b.setAttribute("aria-pressed", b.getAttribute("data-g") === g ? "true" : "false");
      });
      renderChart();
    }

    function renderChart() {
      chart.innerHTML = "";
      EVIDENCE_GROUPS.filter(function (g) { return shown === "all" || g.group === shown; })
        .forEach(function (g) {
          var wrap = el("div", { class: "ev-group" });
          wrap.appendChild(el("h4", { text: g.group }));
          g.rows.forEach(function (r) {
            var bar = el("div", { class: "ev-bar", style: "background:var(--" + g.color + ")" });
            wrap.appendChild(el("div", { class: "ev-row" }, [
              el("div", { class: "ev-label" }, [
                document.createTextNode(r.label),
                el("small", { text: r.wave + "  ·  n = " + r.n + "  ·  " + r.rq + "  ·  " + r.note })
              ]),
              el("div", { class: "ev-bar-wrap" }, [
                el("div", { class: "ev-track" }, [bar]),
                el("span", { class: "ev-pct", text: r.pct.toFixed(1) + "%" })
              ])
            ]));
            window.requestAnimationFrame(function () { bar.style.width = r.pct + "%"; });
          });
          chart.appendChild(wrap);
        });
    }

    renderChart();
    $("#evNote").innerHTML = "<strong>Note.</strong> " + EVIDENCE_NOTE;

    var gapGrid = $("#gapGrid");
    GAPS.forEach(function (g) {
      var c = el("div", { class: "gap-card" }, [
        el("h3", { text: g.field }),
        el("p", { class: "g-has", text: g.has }),
        el("p", { class: "g-lacks", text: g.lacks })
      ]);
      var s = el("p", { style: "margin-top:12px" });
      s.appendChild(citeList(g.sources));
      c.appendChild(s);
      gapGrid.appendChild(c);
    });

    var rqList = $("#rqList");
    RESEARCH_QUESTIONS.forEach(function (rq) {
      rqList.appendChild(el("div", { class: "rq" }, [
        el("b", { text: rq.id }),
        el("div", {}, [
          el("p", { text: rq.text }),
          el("div", { class: "rq-links" }, rq.connects.map(function (c) {
            return el("span", { text: c });
          }))
        ])
      ]));
    });

    // Reaching this station and scrolling it into view is the completion condition:
    // there is no puzzle here, the point is the synthesis.
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            complete("gap", ["diliberti2024", "doss2025", "kaufman2025", "nces2025", "schwartz2026", "rice2025", "teachai2025", "miner2026a", "miner2026b", "maitlis2014", "weick2005", "bacalja2022", "greene2025"]);
            io.disconnect();
          }
        });
      }, { threshold: 0.25 });
      io.observe($("#rqList"));
    } else {
      complete("gap", ["diliberti2024", "doss2025", "kaufman2025", "nces2025", "miner2026a", "miner2026b"]);
    }
  }

  /* ---------------------------------------------------------- codex */

  function renderCodexTally() {
    var n = sourceCount();
    $("#codexTally").textContent = n;
    var modalTally = $("#codexTallyModal");
    if (modalTally) modalTally.textContent = n + " of " + totalSources() + " unlocked";
  }

  function renderCodex() {
    var list = $("#codexList");
    var locked = $("#codexLocked");
    list.innerHTML = "";

    var keys = Object.keys(SOURCES).filter(function (k) { return state.sources[k]; });
    keys.sort(function (a, b) {
      return SOURCES[a].ref.replace(/<[^>]+>/g, "").localeCompare(SOURCES[b].ref.replace(/<[^>]+>/g, ""));
    });

    if (!keys.length) {
      list.appendChild(el("li", { class: "codex-empty",
        text: "No sources unlocked yet. Work through a station and its references are collected here." }));
    }

    keys.forEach(function (k) {
      var s = SOURCES[k];
      list.appendChild(el("li", { "data-search": (s.ref + " " + s.tag).replace(/<[^>]+>/g, "").toLowerCase() }, [
        el("span", { class: "codex-tag", text: s.tag }),
        el("p", { class: "codex-ref", html: s.ref })
      ]));
    });

    var remaining = totalSources() - keys.length;
    locked.textContent = remaining > 0
      ? remaining + " reference" + (remaining === 1 ? "" : "s") + " still locked. Complete the remaining stations to collect them."
      : "Complete codex. All " + totalSources() + " references from Chapters One and Two are unlocked.";

    renderCodexTally();
  }

  function initModals() {
    var codex = $("#codexModal");
    var cite = $("#citeModal");
    var lastFocus = null;

    function open(modal) {
      lastFocus = document.activeElement;
      modal.hidden = false;
      var close = $(".modal-close", modal);
      if (close) close.focus();
    }
    function close(modal) {
      modal.hidden = true;
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    function openCodex() { renderCodex(); open(codex); }
    $("#codexBtn").addEventListener("click", openCodex);
    $("#codexBtnHero").addEventListener("click", openCodex);
    $("#codexClose").addEventListener("click", function () { close(codex); });
    $("#citeClose").addEventListener("click", function () { close(cite); });

    [codex, cite].forEach(function (m) {
      m.addEventListener("click", function (e) { if (e.target === m) close(m); });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape") return;
      if (!codex.hidden) close(codex);
      if (!cite.hidden) close(cite);
    });

    $("#codexSearch").addEventListener("input", function () {
      var q = this.value.trim().toLowerCase();
      $$("#codexList li").forEach(function (li) {
        var hay = li.getAttribute("data-search") || "";
        li.hidden = q && hay.indexOf(q) === -1;
      });
    });

    // Delegated citation buttons — they exist all over the page and are re-rendered often.
    document.addEventListener("click", function (e) {
      var btn = e.target.closest && e.target.closest(".cite");
      if (!btn) return;
      var key = btn.getAttribute("data-cite");
      if (!SOURCES[key]) return;
      $("#citeBody").innerHTML = SOURCES[key].ref;
      $("#citeTitle").textContent = SOURCES[key].tag;
      open(cite);
    });
  }

  /* Fills each station's "Sources for this station" drawer. */
  function initSourceDrawers() {
    $$(".source-drop").forEach(function (d) {
      var keys = (d.getAttribute("data-sources") || "").split(",").filter(Boolean);
      var ul = $("ul", d);
      keys.sort(function (a, b) {
        if (!SOURCES[a] || !SOURCES[b]) return 0;
        return SOURCES[a].ref.replace(/<[^>]+>/g, "").localeCompare(SOURCES[b].ref.replace(/<[^>]+>/g, ""));
      });
      keys.forEach(function (k) {
        if (!SOURCES[k]) return;
        ul.appendChild(el("li", { html: SOURCES[k].ref }));
      });
      var summary = $("summary", d);
      summary.textContent = "Sources for this station (" + ul.children.length + ")";
    });
  }

  function initReset() {
    $("#resetBtn").addEventListener("click", function () {
      if (!window.confirm("Clear all progress, badges, and collected sources? This cannot be undone.")) return;
      try { localStorage.removeItem(STORE_KEY); } catch (e) { /* non-fatal */ }
      window.location.reload();
    });
  }

  /* ---------------------------------------------------------- boot */

  function boot() {
    load();
    initOrigin();
    initArc();
    initRupture();
    initResponse();
    initBoundary();
    initArena();
    initGap();
    initSourceDrawers();
    initModals();
    initReset();
    renderProgress();
    renderCodexTally();

    // Re-show completion banners for stations finished in an earlier visit.
    STATIONS.forEach(function (s) {
      if (state.done[s.id]) {
        var b = $("#done-" + s.id);
        if (b) b.hidden = false;
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
