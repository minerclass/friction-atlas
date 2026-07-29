/*
 * The Friction Atlas — content data
 *
 * Every claim, definition, and citation below is drawn from the submitted
 * Chapters One through Three of Micah J. Miner's dissertation proposal,
 * "Pedagogical Friction in the Age of Generative AI and Tertiary Algorithmicity:
 * A Qualitative-Dominant Convergent Mixed Methods Study" (National Louis
 * University, July 2026). This file is the single source of truth for the site's
 * text; the engine in atlas.js renders it and never invents content.
 *
 * Citation scheme (matches the submitted draft):
 *   Miner, 2026a = Zenodo secondary-data companion (K-12 teacher AI evidence arc)
 *   Miner, 2026b = i.e.: inquiry in education article (framework source)
 */

/* ------------------------------------------------------------------ */
/* Source codex — unlocked as the reader moves through the atlas       */
/* ------------------------------------------------------------------ */

const SOURCES = {
  acharya2025: { ref: "Acharya, D. B., Kuppan, K., & Divya, B. (2025). Agentic AI: Autonomous intelligence for complex goals: A comprehensive survey. <em>IEEE Access, 13</em>, 18912–18936.", tag: "Agentic AI" },
  alfarwan2025: { ref: "Alfarwan, A. (2025). Generative AI use in K–12 education: A systematic review. <em>Frontiers in Education, 10</em>, Article 1647573.", tag: "K–12 evidence" },
  an2025: { ref: "An, Y., & James, S. (2025). Generative AI integration in K–12 settings: Teachers' perceptions and levels of integration. <em>TechTrends, 69</em>, 1304–1317.", tag: "K–12 evidence" },
  annamma2013: { ref: "Annamma, S. A., Connor, D., & Ferri, B. (2013). Dis/ability critical race studies (DisCrit): Theorizing at the intersections of race and dis/ability. <em>Race Ethnicity and Education, 16</em>(1), 1–31.", tag: "Equity" },
  bacalja2022: { ref: "Bacalja, A., Beavis, C., & O'Brien, A. (2022). Shifting landscapes of digital literacy. <em>The Australian Journal of Language and Literacy, 45</em>(3), 253–263.", tag: "Digital literacy" },
  bailenson2021: { ref: "Bailenson, J. N. (2021). Nonverbal overload: A theoretical argument for the causes of Zoom fatigue. <em>Technology, Mind, and Behavior, 2</em>(1).", tag: "Mediated dialogue" },
  bakshy2015: { ref: "Bakshy, E., Messing, S., & Adamic, L. A. (2015). Exposure to ideologically diverse news and opinion on Facebook. <em>Science, 348</em>(6239), 1130–1132.", tag: "Platform studies" },
  bastani2025: { ref: "Bastani, H., Bastani, O., Sungu, A., Ge, H., Kabakcı, Ö., & Mariman, R. (2025). Generative AI without guardrails can harm learning: Evidence from high school mathematics. <em>PNAS, 122</em>(26), Article e2422633122.", tag: "Learning evidence" },
  baudrillard1994: { ref: "Baudrillard, J. (1994). <em>Simulacra and simulation</em> (S. F. Glaser, Trans.). University of Michigan Press. (Original work published 1981)", tag: "Simulation" },
  bender2021: { ref: "Bender, E. M., Gebru, T., McMillan-Major, A., & Shmitchell, S. (2021). On the dangers of stochastic parrots: Can language models be too big? In <em>FAccT '21</em> (pp. 610–623). ACM.", tag: "Language models" },
  benderkoller2020: { ref: "Bender, E. M., & Koller, A. (2020). Climbing towards NLU: On meaning, form, and understanding in the age of data. In <em>ACL 2020</em> (pp. 5185–5198).", tag: "Language models" },
  bjork2011: { ref: "Bjork, E. L., & Bjork, R. A. (2011). Making things hard on yourself, but in a good way: Creating desirable difficulties to enhance learning. In <em>Psychology and the real world</em> (pp. 56–64). Worth.", tag: "Learning science" },
  bolter1999: { ref: "Bolter, J. D., & Grusin, R. (1999). <em>Remediation: Understanding new media</em>. MIT Press.", tag: "Media theory" },
  bond2024: { ref: "Bond, M., Khosravi, H., De Laat, M., Bergdahl, N., Negrea, V., Oxley, E., Pham, P., Chong, S. W., & Siemens, G. (2024). A meta systematic review of artificial intelligence in higher education. <em>IJETHE, 21</em>, Article 4.", tag: "AI in education" },
  boyd2007: { ref: "boyd, d. m., & Ellison, N. B. (2007). Social network sites: Definition, history, and scholarship. <em>Journal of Computer-Mediated Communication, 13</em>(1), 210–230.", tag: "Platform studies" },
  bozkurt2024: { ref: "Bozkurt, A. (2024). GenAI et al.: Cocreation, authorship, ownership, academic ethics and integrity in a time of generative AI. <em>Open Praxis, 16</em>(1), 1–10.", tag: "Authorship" },
  bozkurt2025: { ref: "Bozkurt, A. (2025). Algorithmically manufactured minds: Generative and agentic AI in a time of post-truth. <em>Open Praxis, 17</em>(2), 206–210.", tag: "Agentic AI" },
  brady2017: { ref: "Brady, W. J., Wills, J. A., Jost, J. T., Tucker, J. A., & Van Bavel, J. J. (2017). Emotion shapes the diffusion of moralized content in social networks. <em>PNAS, 114</em>(28), 7313–7318.", tag: "Platform studies" },
  bruner1996: { ref: "Bruner, J. (1996). <em>The culture of education</em>. Harvard University Press.", tag: "Constructivism" },
  bucher2012: { ref: "Bucher, T. (2012). Want to be on the top? Algorithmic power and the threat of invisibility on Facebook. <em>New Media &amp; Society, 14</em>(7), 1164–1180.", tag: "Platform studies" },
  carr2011: { ref: "Carr, N. G. (2011). <em>The shallows: What the Internet is doing to our brains</em>. W. W. Norton.", tag: "Attention" },
  chi2014: { ref: "Chi, M. T. H., & Wylie, R. (2014). The ICAP framework: Linking cognitive engagement to active learning outcomes. <em>Educational Psychologist, 49</em>(4), 219–243.", tag: "Learning science" },
  clark2021: { ref: "Clark, E., August, T., Serrano, S., Haduong, N., Gururangan, S., & Smith, N. A. (2021). All that's 'human' is not gold: Evaluating human evaluation of generated text. In <em>ACL 2021</em> (pp. 7282–7296).", tag: "Detection" },
  coburn2001: { ref: "Coburn, C. E. (2001). Collective sensemaking about reading: How teachers mediate reading policy in their professional communities. <em>EEPA, 23</em>(2), 145–170.", tag: "Sensemaking" },
  coburn2005: { ref: "Coburn, C. E. (2005). Shaping teacher sensemaking: School leaders and the enactment of reading policy. <em>Educational Policy, 19</em>(3), 476–509.", tag: "Sensemaking" },
  cordon2024: { ref: "Cordón-García, J.-A., & Muñoz-Rico, M. (2024). De la oralidad primaria a la tercera oralidad. <em>Anuario ThinkEPI, 18</em>.", tag: "Tertiary orality" },
  creswell2018: { ref: "Creswell, J. W., & Plano Clark, V. L. (2018). <em>Designing and conducting mixed methods research</em> (3rd ed.). SAGE.", tag: "Methods" },
  crotty1998: { ref: "Crotty, M. (1998). <em>The foundations of social research: Meaning and perspective in the research process</em>. SAGE.", tag: "Epistemology" },
  dewey1933: { ref: "Dewey, J. (1933). <em>How we think</em>. D. C. Heath.", tag: "Constructivism" },
  diliberti2024: { ref: "Diliberti, M. K., Schwartz, H. L., Doan, S., Shapiro, A., Rainey, L. R., & Lake, R. J. (2024). <em>Using artificial intelligence tools in K–12 classrooms</em> (RR-A956-21). RAND Corporation.", tag: "K–12 evidence" },
  diliberti2025: { ref: "Diliberti, M. K., Lake, R. J., & Weiner, S. R. (2025). <em>More districts are training teachers on artificial intelligence</em> (RR-A956-31). RAND Corporation.", tag: "K–12 evidence" },
  dolmage2017: { ref: "Dolmage, J. T. (2017). <em>Academic ableism: Disability and higher education</em>. University of Michigan Press.", tag: "Equity" },
  doss2025: { ref: "Doss, C. J., Bozick, R., Schwartz, H. L., Chu, L., Rainey, L. R., Woo, A., Reich, J., & Dukes, J. (2025). <em>AI use in schools is quickly increasing but guidance lags behind</em> (RR-A4180-1). RAND Corporation.", tag: "K–12 evidence" },
  dreyfus1992: { ref: "Dreyfus, H. L. (1992). <em>What computers still can't do: A critique of artificial reason</em>. MIT Press.", tag: "Philosophy of AI" },
  dron2023: { ref: "Dron, J. (2023). The human nature of generative AIs and the technological nature of humanity: Implications for education. <em>Digital, 3</em>(4), 319–335.", tag: "Counterargument" },
  ellington2003: { ref: "Ellington, A. J. (2003). A meta-analysis of the effects of calculators on students' achievement and attitude levels in precollege mathematics classes. <em>JRME, 34</em>(5), 433–463.", tag: "Counterargument" },
  feenberg2002: { ref: "Feenberg, A. (2002). <em>Transforming technology: A critical theory revisited</em>. Oxford University Press.", tag: "Determinism" },
  floridi2020: { ref: "Floridi, L., & Chiriatti, M. (2020). GPT-3: Its nature, scope, limits, and consequences. <em>Minds and Machines, 30</em>, 681–694.", tag: "Language models" },
  frankfurt2005: { ref: "Frankfurt, H. G. (2005). <em>On bullshit</em>. Princeton University Press.", tag: "Truth &amp; claim" },
  gadamer2004: { ref: "Gadamer, H.-G. (2004). <em>Truth and method</em> (2nd rev. ed.). Continuum. (Original work published 1960)", tag: "Hermeneutics" },
  greene2025: { ref: "Greene, J. A., & Crompton, H. (2025). Synthesizing definitions of digital literacy for the Web 3.0. <em>TechTrends, 69</em>, 21–37.", tag: "Digital literacy" },
  guba1994: { ref: "Guba, E. G., & Lincoln, Y. S. (1994). Competing paradigms in qualitative research. In <em>Handbook of qualitative research</em> (pp. 105–117). SAGE.", tag: "Epistemology" },
  hayles2012: { ref: "Hayles, N. K. (2012). <em>How we think: Digital media and contemporary technogenesis</em>. University of Chicago Press.", tag: "Media theory" },
  hayles2017: { ref: "Hayles, N. K. (2017). <em>Unthought: The power of the cognitive nonconscious</em>. University of Chicago Press.", tag: "Media theory" },
  heyd2021: { ref: "Heyd, T. (2021). Tertiary orality? New approaches to spoken CMC. <em>Anglistik, 32</em>(2), 131–147.", tag: "Tertiary orality" },
  hutchby2001: { ref: "Hutchby, I. (2001). Technologies, texts and affordances. <em>Sociology, 35</em>(2), 441–456.", tag: "Determinism" },
  jakesch2023: { ref: "Jakesch, M., Hancock, J. T., & Naaman, M. (2023). Human heuristics for AI-generated language are flawed. <em>PNAS, 120</em>(11), Article e2208839120.", tag: "Detection" },
  jones2025: { ref: "Jones, C. R., Rathi, I., Taylor, S., & Bergen, B. K. (2025). People cannot distinguish GPT-4 from a human in a Turing test. In <em>FAccT '25</em> (pp. 1615–1639). ACM.", tag: "Detection" },
  kamalov2026: { ref: "Kamalov, F., Santandreu Calonge, D., Smail, L., Azizov, D., Thadani, D. R., Kwong, T., & Atif, A. (2026). <em>Evolution of AI in education: Agentic workflows</em> (Version 2) [Preprint]. arXiv.", tag: "Agentic AI" },
  kapur2008: { ref: "Kapur, M. (2008). Productive failure. <em>Cognition and Instruction, 26</em>(3), 379–424.", tag: "Learning science" },
  kapur2016: { ref: "Kapur, M. (2016). Examining productive failure, productive success, unproductive failure, and unproductive success in learning. <em>Educational Psychologist, 51</em>(2), 289–299.", tag: "Learning science" },
  kasneci2023: { ref: "Kasneci, E., et al. (2023). ChatGPT for good? On opportunities and challenges of large language models for education. <em>Learning and Individual Differences, 103</em>, Article 102274.", tag: "Equity" },
  kaufman2025: { ref: "Kaufman, J. H., Woo, A., Eagan, J., Lee, S., & Kassan, E. B. (2025). <em>Uneven adoption of artificial intelligence tools among U.S. teachers and principals in the 2023–2024 school year</em> (RR-A134-25). RAND Corporation.", tag: "K–12 evidence" },
  kittler1990: { ref: "Kittler, F. A. (1990). <em>Discourse networks 1800/1900</em>. Stanford University Press. (Original work published 1985)", tag: "Media theory" },
  kittler1999: { ref: "Kittler, F. A. (1999). <em>Gramophone, film, typewriter</em>. Stanford University Press. (Original work published 1986)", tag: "Media theory" },
  kizilcec2024: { ref: "Kizilcec, R. F., et al. (2024). Perceived impact of generative AI on assessments. <em>Australasian Journal of Educational Technology</em>.", tag: "Assessment" },
  korchinski2026: { ref: "Korchinski, K., MacDowell, P., & McKee, L. (2026). Preparing for the demands of tomorrow: Using AI to support Grade 12 academic writing instruction. <em>OTESSA Journal, 4</em>(2), 1–6.", tag: "Assessment" },
  kostopoulos2025: { ref: "Kostopoulos, G., Gkamas, V., Rigou, M., & Kotsiantis, S. (2025). Agentic AI in education: State of the art and future directions. <em>IEEE Access, 13</em>, 177467–177491.", tag: "Agentic AI" },
  krutka2022a: { ref: "Krutka, D. G., Heath, M. K., & Smits, R. M. (2022). Toward a civics of technology. <em>JTATE, 30</em>(2), 229–237.", tag: "Technoskepticism" },
  krutka2022b: { ref: "Krutka, D. G., Metzger, S. A., & Seitz, R. Z. (2022). Technology inevitably involves trade-offs: The framing of technology in social studies standards. <em>TRSE, 50</em>(2), 226–254.", tag: "Technoskepticism" },
  maitlis2014: { ref: "Maitlis, S., & Christianson, M. (2014). Sensemaking in organizations: Taking stock and moving forward. <em>Academy of Management Annals, 8</em>(1), 57–125.", tag: "Sensemaking" },
  mayer2009: { ref: "Mayer, R. (2009). L'oralité tertiaire: Positionnement, statut, modalités. <em>Parcours anthropologiques, 7</em>, 5–9.", tag: "Tertiary orality" },
  mcluhan1964: { ref: "McLuhan, M. (1964). <em>Understanding media: The extensions of man</em>. McGraw-Hill.", tag: "Media ecology" },
  metzger2023: { ref: "Metzger, S. A., & Krutka, D. G. (2023). Interrogating the smartphone: Teaching through technoskeptical questions. <em>Social Education, 87</em>(5), 313–318.", tag: "Technoskepticism" },
  michaels2008: { ref: "Michaels, S., O'Connor, C., & Resnick, L. B. (2008). Deliberative discourse idealized and realized: Accountable talk in the classroom and in civic life. <em>Studies in Philosophy and Education, 27</em>(4), 283–297.", tag: "Dialogue" },
  miner2026a: { ref: "Miner, M. J. (2026a). <em>K–12 teacher AI evidence arc, 2024–2026</em> (Version 0.1.0) [Data analysis, code, and interactive visualization]. Zenodo.", tag: "Companion" },
  miner2026b: { ref: "Miner, M. J. (2026b). When the output looks like learning: Tertiary algorithmicity, unproductive success, and the case for pedagogical friction in K–12 schools. <em>i.e.: inquiry in education, 18</em>(1), Article 4.", tag: "Framework source" },
  mollick2024: { ref: "Mollick, E. (2024). <em>Co-intelligence: Living and working with AI</em>. Portfolio.", tag: "Counterargument" },
  nces2025: { ref: "National Center for Education Statistics. (2025). <em>School Pulse Panel: Interactive results</em> [Data set]. U.S. Department of Education, Institute of Education Sciences.", tag: "K–12 evidence" },
  ong1977: { ref: "Ong, W. J. (1977). <em>Interfaces of the word: Studies in the evolution of consciousness and culture</em>. Cornell University Press.", tag: "Media ecology" },
  ong2002: { ref: "Ong, W. J. (2002). <em>Orality and literacy: The technologizing of the word</em> (2nd ed.). Routledge. (Original work published 1982)", tag: "Media ecology" },
  ong2017: { ref: "Ong, W. J. (2017). <em>Language as hermeneutic: A primer on the word and digitization</em>. Cornell University Press.", tag: "Media ecology" },
  pariser2011: { ref: "Pariser, E. (2011). <em>The filter bubble: What the Internet is hiding from you</em>. Penguin Press.", tag: "Platform studies" },
  phillips1995: { ref: "Phillips, D. C. (1995). The good, the bad, and the ugly: The many faces of constructivism. <em>Educational Researcher, 24</em>(7), 5–12.", tag: "Constructivism" },
  pleasants2025: { ref: "Pleasants, J., Radloff, J., & Mueller, A. (2025). Learning to be technoskeptical: Engaging pre-service teachers in critical examinations of educational technologies. <em>CITE Journal, 25</em>(2).", tag: "Technoskepticism" },
  postman1985: { ref: "Postman, N. (1985). <em>Amusing ourselves to death: Public discourse in the age of show business</em>. Viking.", tag: "Media ecology" },
  postman1992: { ref: "Postman, N. (1992). <em>Technopoly: The surrender of culture to technology</em>. Knopf.", tag: "Media ecology" },
  postman1998: { ref: "Postman, N. (1998, March 28). <em>Five things we need to know about technological change</em> [Address]. Denver, CO.", tag: "Technoskepticism" },
  rice2025: { ref: "Rice, M. (2025). The micropolitical landscape of publicly discoverable policies for generative AI in large US school districts. <em>Technology, Pedagogy and Education, 34</em>(2), 201–217.", tag: "Policy" },
  richardson2003: { ref: "Richardson, V. (2003). Constructivist pedagogy. <em>Teachers College Record, 105</em>(9), 1623–1640.", tag: "Constructivism" },
  riva2025: { ref: "Riva, G. (2025). <em>The architecture of cognitive amplification: Enhanced cognitive scaffolding as a resolution to the comfort-growth paradox</em>. arXiv.", tag: "Counterargument" },
  ryu2023: { ref: "Ryu, S. (2023). Exploring tertiary orality in virtual reality. In <em>HCI International 2023</em> (pp. 287–296). Springer.", tag: "Tertiary orality" },
  schindler2023: { ref: "Schindler, J., & Richter, T. (2023). Text generation benefits learning: A meta-analytic review. <em>Educational Psychology Review, 35</em>(2), Article 44.", tag: "Learning science" },
  schneider2025: { ref: "Schneider, J. (2025). <em>Generative to agentic AI: Survey, conceptualization, and challenges</em>. arXiv.", tag: "Agentic AI" },
  schwartz2026: { ref: "Schwartz, H. L., & Diliberti, M. K. (2026). <em>More students use AI for homework, and more believe it harms critical thinking</em> (RR-A4742-1). RAND Corporation.", tag: "K–12 evidence" },
  smithmarx1994: { ref: "Smith, M. R., & Marx, L. (Eds.). (1994). <em>Does technology drive history? The dilemma of technological determinism</em>. MIT Press.", tag: "Determinism" },
  soffer2020: { ref: "Soffer, O. (2020). From textual orality to oral textuality: The case of voice queries. <em>Convergence, 26</em>(4), 927–941.", tag: "Tertiary orality" },
  spillane2002: { ref: "Spillane, J. P., Reiser, B. J., & Reimer, T. (2002). Policy implementation and cognition: Reframing and refocusing implementation research. <em>RER, 72</em>(3), 387–431.", tag: "Sensemaking" },
  stalder2018: { ref: "Stalder, F. (2018). <em>The digital condition</em> (V. A. Pakis, Trans.). Polity Press. (Original work published 2016)", tag: "Algorithmicity" },
  stiegler2010: { ref: "Stiegler, B. (2010). <em>Technics and time, 3: Cinematic time and the question of the new sophist</em>. Stanford University Press.", tag: "Media theory" },
  sweller1988: { ref: "Sweller, J. (1988). Cognitive load during problem solving: Effects on learning. <em>Cognitive Science, 12</em>(2), 257–285.", tag: "Learning science" },
  tashakkori2010: { ref: "Tashakkori, A., & Teddlie, C. (Eds.). (2010). <em>SAGE handbook of mixed methods in social and behavioral research</em> (2nd ed.). SAGE.", tag: "Methods" },
  teachai2025: { ref: "TeachAI. (2025). <em>AI guidance for schools toolkit</em>. Code.org, CoSN, ETS, ISTE+ASCD, Khan Academy, and World Economic Forum.", tag: "Policy" },
  tomprou2021: { ref: "Tomprou, M., Kim, Y. J., Chikersal, P., Woolley, A. W., & Dabbish, L. A. (2021). Speaking out of turn: How video conferencing reduces vocal synchrony and collective intelligence. <em>PLOS ONE, 16</em>(3).", tag: "Dialogue" },
  tufekci2017: { ref: "Tufekci, Z. (2017). <em>Twitter and tear gas: The power and fragility of networked protest</em>. Yale University Press.", tag: "Platform studies" },
  turkle2011: { ref: "Turkle, S. (2011). <em>Alone together: Why we expect more from technology and less from each other</em>. Basic Books.", tag: "Dialogue" },
  turner2013: { ref: "Turner, D., & Allen, W. (2013). Documents, dialogue and the emergence of tertiary orality. <em>Information Research, 18</em>(3), Paper C44.", tag: "Tertiary orality" },
  vonglasersfeld1995: { ref: "von Glasersfeld, E. (1995). <em>Radical constructivism: A way of knowing and learning</em>. Falmer Press.", tag: "Constructivism" },
  vosoughi2018: { ref: "Vosoughi, S., Roy, D., & Aral, S. (2018). The spread of true and false news online. <em>Science, 359</em>(6380), 1146–1151.", tag: "Platform studies" },
  vygotsky1978: { ref: "Vygotsky, L. S. (1978). <em>Mind in society: The development of higher psychological processes</em>. Harvard University Press.", tag: "Constructivism" },
  weick2005: { ref: "Weick, K. E., Sutcliffe, K. M., & Obstfeld, D. (2005). Organizing and the process of sensemaking. <em>Organization Science, 16</em>(4), 409–421.", tag: "Sensemaking" },
  wu2016: { ref: "Wu, T. (2016). <em>The attention merchants</em>. Knopf.", tag: "Platform studies" },
  zawacki2019: { ref: "Zawacki-Richter, O., Marín, V. I., Bond, M., & Gouverneur, F. (2019). Systematic review of research on artificial intelligence applications in higher education. <em>IJETHE, 16</em>, Article 39.", tag: "AI in education" },
  zhang2024: { ref: "Zhang, P., & Tur, G. (2024). A systematic review of ChatGPT use in K–12 education. <em>European Journal of Education, 59</em>(2), Article e12599.", tag: "K–12 evidence" },
  zuboff2019: { ref: "Zuboff, S. (2019). <em>The age of surveillance capitalism</em>. PublicAffairs.", tag: "Platform studies" }
};

/* ------------------------------------------------------------------ */
/* Station 2 — Ong's arc and the three conditions under pressure        */
/* ------------------------------------------------------------------ */

/*
 * Condition states: "held" | "strained" | "broken"
 * The three conditions are reconstructed in Chapter Two from Ong's account.
 * Ong did not present them as a formal list.
 */

const STAGES = [
  {
    id: "primary",
    label: "Primary orality",
    era: "Before writing",
    attribution: "Ong (1982/2002)",
    blurb:
      "Knowledge cannot be stored outside the human mind, so it depends on repetition, rhythm, formula, and participatory presence. Ong treats this as a complete cognitive ecology, not a deficit condition.",
    conditions: { authorship: "held", interlocutors: "held", claimant: "held" },
    conditionNotes: {
      authorship: "The artifact is the speaking person. Composition and performance are the same act.",
      interlocutors: "Exchange is face to face among finite, situated people who can interrupt and contest.",
      claimant: "Speaker and speech are inseparable. There is no text to stand apart from the person."
    },
    sources: ["ong2002", "ong1977"]
  },
  {
    id: "literacy",
    label: "Literacy",
    era: "Writing and print",
    attribution: "Ong (1982/2002)",
    blurb:
      "Writing externalizes memory. Analytical distance, abstraction, and introspection become possible, while some of the existential immediacy of oral exchange is reduced.",
    conditions: { authorship: "held", interlocutors: "strained", claimant: "strained" },
    conditionNotes: {
      authorship: "A person still composes the text. Externalization moves memory to the page, not composition to a machine.",
      interlocutors: "The audience is displaced across time and space, but it remains an audience of people.",
      claimant: "Authorial distance opens, yet the text still points toward a person responsible for its claims."
    },
    sources: ["ong2002", "postman1992", "mcluhan1964"]
  },
  {
    id: "secondary",
    label: "Secondary orality",
    era: "Radio and television",
    attribution: "Ong (1977, 1982/2002)",
    blurb:
      "Electronic broadcast media retrieve communal participation inside literate systems of scripts, schedules, and institutions. Postman extends the implication that each medium carries an epistemology.",
    conditions: { authorship: "held", interlocutors: "strained", claimant: "strained" },
    conditionNotes: {
      authorship: "Broadcast stores and distributes expression that people spoke, wrote, scripted, or performed.",
      interlocutors: "One-to-many logic with shared temporality. A teacher could assume a shared informational baseline.",
      claimant: "Mediation deepens, but scripts and performances still point toward identifiable, accountable people."
    },
    sources: ["ong1977", "ong2002", "postman1985"]
  },
  {
    id: "algorithmic",
    label: "Algorithmic secondary orality",
    era: "Mid-2000s to early 2020s",
    attribution: "Miner — first extension",
    isNew: true,
    blurb:
      "Humans still create symbolic content, but algorithms increasingly determine which content reaches which consciousness. The feed replaces the schedule, and the shared symbolic environment fragments.",
    conditions: { authorship: "held", interlocutors: "strained", claimant: "held" },
    conditionNotes: {
      authorship: "Content creation remains human. This is the decisive reason the stage still belongs to secondary orality.",
      interlocutors: "Two users opening the same application encounter different content sequenced to capture attention.",
      claimant: "A human still stands behind the post, even when engagement ranking decides who sees it."
    },
    sources: ["stalder2018", "boyd2007", "bucher2012", "pariser2011", "zuboff2019", "tufekci2017", "wu2016", "bakshy2015", "brady2017", "vosoughi2018"]
  },
  {
    id: "tertiary",
    label: "Tertiary algorithmicity",
    era: "Generative AI present",
    attribution: "Miner — the study's central construct",
    isNew: true,
    isFocus: true,
    blurb:
      "A media environment in which algorithmic systems both curate and generate symbolic content, rendering human authorship optional at scale. The study treats this as a qualitative rupture, not an intensification.",
    conditions: { authorship: "broken", interlocutors: "broken", claimant: "broken" },
    conditionNotes: {
      authorship: "A system can produce a fluent essay, analysis, image, or argument without a person composing the immediate artifact.",
      interlocutors: "Systems supply the surface form of dialogue without a participant who has history, standpoint, vulnerability, or stake.",
      claimant: "Statements take the form of assertion without a speaker who experienced, believes, or accepts responsibility for them."
    },
    sources: ["benderkoller2020", "bender2021", "clark2021", "jones2025", "frankfurt2005", "bastani2025", "turkle2011"]
  }
];

const CONDITIONS = [
  {
    key: "authorship",
    short: "Human composition",
    full: "Producing a symbolic artifact ordinarily requires human cognitive and compositional activity.",
    pressure: "noetic"
  },
  {
    key: "interlocutors",
    short: "Situated interlocutors",
    full: "Symbolic exchange occurs among finite, socially situated human interlocutors.",
    pressure: "rhetorical"
  },
  {
    key: "claimant",
    short: "Accountable claimant",
    full: "Symbolic claims remain connected to an identifiable human claimant.",
    pressure: "existential"
  }
];

/* ------------------------------------------------------------------ */
/* Station 3 — the three pressures                                     */
/* ------------------------------------------------------------------ */

const PRESSURES = [
  {
    id: "noetic",
    name: "Noetic displacement",
    domain: "Cognition",
    conditionKey: "authorship",
    definition:
      "The condition in which the externalization of cognitive labor moves from storage to generation, so that generative and interpretive operations that previously had to occur within the learner's own noetic activity are increasingly offloaded to an external socio-technical system.",
    sharpening:
      "Earlier critics worried that digital media distract learners from thinking. Generative systems can perform the thinking itself, returning finished symbolic products before the learner has done the work those products once demonstrated.",
    stake:
      "When a student can generate a competent analysis of a poem, a historical event, or a scientific process without the interpretive labor such analysis traditionally required, it is not clear what the student has learned.",
    sources: ["carr2011", "ong2002", "bozkurt2024", "bastani2025"]
  },
  {
    id: "rhetorical",
    name: "Rhetorical saturation",
    domain: "Communication environment",
    conditionKey: "interlocutors",
    definition:
      "The condition in which algorithmic systems produce discourse at scale, flooding communication environments with synthetic text, image, video, and audio increasingly indistinguishable from human production.",
    sharpening:
      "Three aspects converge: origin uncertainty, the simulation of expression, and the simulation of dialogue. Humans distinguish AI-generated from human text at rates close to chance, and in a controlled Turing test could not distinguish a leading model from a human.",
    stake:
      "Simulated interlocutors can be infinitely patient and rarely resistant, so learners may experience the surface form of dialogue without the productive friction of disagreement, misunderstanding, challenge, or accountability to another person.",
    sources: ["clark2021", "jakesch2023", "jones2025", "bender2021", "floridi2020", "turkle2011", "kapur2016"]
  },
  {
    id: "existential",
    name: "Existential abstraction",
    domain: "The person behind the claim",
    conditionKey: "claimant",
    definition:
      "The condition in which symbolic production is severed from lived experience, situated perspective, and personal accountability.",
    sharpening:
      "Generated text expresses positions without having stakes and simulates conviction without being committed. Ong traced a progression from orality's inseparability of speaker and speech through literacy's authorial distance; tertiary algorithmicity extends this trajectory not toward distance but toward elimination.",
    stake:
      "Students can produce without investing, performing competence without the vulnerability that accompanies genuine authorship. Procedural ownership of an artifact does not establish intellectual authorship of its reasoning.",
    sources: ["benderkoller2020", "frankfurt2005", "bozkurt2024", "turkle2011"]
  }
];

/* ------------------------------------------------------------------ */
/* Station 4 — the four frictions                                      */
/* ------------------------------------------------------------------ */

const FRICTIONS = [
  {
    id: "infrastructural",
    name: "Infrastructural friction",
    place: "The System",
    layer: "base",
    counterpart: null,
    definition:
      "The policy, assessment, leadership, professional learning, governance, and institutional permission structures that make friction-preserving pedagogy possible.",
    argument:
      "This dimension is different in kind from the other three. It names an institutional condition rather than a form of resistance located in the student's own activity, so it sits beneath them as their condition rather than beside them as a fourth peer. Individual teachers cannot preserve noetic, rhetorical, and existential friction alone if grades, pacing guides, device environments, parent expectations, and district policy reward frictionless completion.",
    practices: [
      "AI policy that names learning, not only misconduct",
      "Assessment expectations that value visible thinking",
      "Professional learning priorities",
      "Privacy governance and approved-tool ecosystems",
      "Leadership language and schedules that permit slow learning"
    ],
    claim:
      "That institutional conditions enable or constrain classroom friction is the central relationship this study examines — a claim the study tests rather than assumes.",
    sources: ["rice2025", "kittler1990", "kittler1999", "teachai2025"]
  },
  {
    id: "noetic",
    name: "Noetic friction",
    place: "The Head",
    layer: "learner",
    counterpart: "noetic",
    definition:
      "The internal cognitive resistance required to transform external information into internalized understanding: the struggle to comprehend a difficult text, synthesize competing sources, construct an argument from evidence, and revise one's own thinking when it proves inadequate.",
    argument:
      "It encompasses germane cognitive load, the generation effect and desirable difficulties, and productive failure. The instructional design question it poses is not whether students may use AI, but whether the schema construction the learning task was meant to produce still occurs somewhere in the student's own activity.",
    practices: [
      "Generation before solution",
      "Retrieval practice",
      "Annotated reading",
      "Slow writing and argument mapping",
      "Worked-example fading",
      "Structured reflection before any AI use"
    ],
    claim: "Direct counterpart to noetic displacement. It names the labor that displacement bypasses.",
    sources: ["bjork2011", "kapur2016", "sweller1988", "schindler2023"]
  },
  {
    id: "rhetorical",
    name: "Rhetorical friction",
    place: "The Room",
    layer: "learner",
    counterpart: "rhetorical",
    definition:
      "The dialogic work of articulating, defending, and revising claims in response to others.",
    argument:
      "Human interlocutors add productive unpredictability, misunderstanding, and accountability that prepared responses may not provide. This is where a teacher can most directly recover the evidence of understanding that saturation erodes, because a student who can defend a claim under unscripted questioning demonstrates something the artifact alone no longer reliably shows.",
    practices: [
      "Socratic seminars",
      "Peer review and critique protocols",
      "Oral explanation and conferences",
      "Debate",
      "Authentic audiences that respond to the person behind the ideas"
    ],
    claim: "Counterpart to rhetorical saturation.",
    sources: ["chi2014", "michaels2008", "bailenson2021", "clark2021", "tomprou2021"]
  },
  {
    id: "existential",
    name: "Existential friction",
    place: "The World",
    layer: "learner",
    counterpart: "existential",
    definition:
      "The experience of being held personally accountable for claims made in physical and social space, including the vulnerability of presenting one's own thinking to others who can respond to the person rather than the text alone.",
    argument:
      "The distinction between authorship and ownership matters here. A student may own an artifact procedurally, by submitting and being graded on it, while educational authorship requires the deeper relation of having engaged the ideas, chosen the claims, considered alternatives, and accepted the vulnerability of being wrong.",
    practices: [
      "Oral defenses",
      "Reflective authorship statements",
      "Process memos",
      "Place-based inquiry",
      "Assignments connecting claims to the student's own reasoning and experience"
    ],
    claim: "Counterpart to existential abstraction.",
    sources: ["bozkurt2024", "turkle2011"]
  }
];

/* ------------------------------------------------------------------ */
/* Station 5 — the equity boundary card sort                           */
/* ------------------------------------------------------------------ */

/*
 * verdict: "productive" (difficulty that builds capacity and should be preserved)
 *          "exclusionary" (difficulty that blocks access without cognitive benefit)
 *          "contested" (the same use may reduce both at once; requires situated judgment)
 *
 * The framework is explicit that no mechanical resolution is possible for the
 * contested cases. Scoring rewards recognizing that, rather than punishing it.
 */

const SCENARIOS = [
  {
    id: "s1",
    text: "A student writing in an additional language uses AI translation to draft a history argument, then revises the translated draft themselves.",
    verdict: "contested",
    dimension: "Noetic / equity boundary",
    reveal:
      "The multilingual learner paradox. The student may bypass an exclusionary barrier while also complicating the relationship among language choice, voice, reasoning, and authorship. The same tool use may reduce both productive and exclusionary friction at once. No policy document can fully specify the answer.",
    sources: ["annamma2013", "kasneci2023"]
  },
  {
    id: "s2",
    text: "A student prompts a model to produce a finished literary analysis and submits it without reading the poem.",
    verdict: "exclusionary",
    isBypass: true,
    dimension: "Noetic displacement",
    reveal:
      "This is not exclusionary friction — it is the removal of productive friction. The interpretive labor the task was designed to develop happened in the model-and-interface stack rather than in the student's own activity. The framework calls the result unproductive success: correct-looking performance without the cognitive struggle the performance would normally indicate.",
    sources: ["kapur2016", "miner2026b"]
  },
  {
    id: "s3",
    text: "A student with dyslexia uses text-to-speech to access a dense primary source, then annotates and argues from it in writing.",
    verdict: "exclusionary",
    dimension: "Access support",
    reveal:
      "The difficulty removed was decoding, which was not the learning goal. The disciplinary work — annotation, evidence use, argument — remains with the student. This is the removal of exclusionary friction, and treating it as bypass would recode legitimate accommodation as cheating.",
    sources: ["dolmage2017", "kasneci2023", "annamma2013"]
  },
  {
    id: "s4",
    text: "Before any AI use, students attempt an unfamiliar problem on their own and record what they tried and where they got stuck.",
    verdict: "productive",
    dimension: "Noetic friction",
    reveal:
      "Generation before solution. Grappling with a problem before receiving instruction prepares learners to notice deep structure and construct more durable schemas. The felt ease a tool provides is precisely the fluency that desirable-difficulties research identifies as a poor proxy for learning.",
    sources: ["kapur2008", "kapur2016", "bjork2011"]
  },
  {
    id: "s5",
    text: "A teacher requires every student to defend a written claim in an unscripted five-minute oral conference.",
    verdict: "productive",
    dimension: "Rhetorical and existential friction",
    reveal:
      "This is where a teacher can most directly recover the evidence of understanding that saturation erodes. A student who can defend a claim under unscripted questioning demonstrates something the artifact alone no longer reliably shows.",
    sources: ["chi2014", "michaels2008"]
  },
  {
    id: "s6",
    text: "An AI tool summarizes the four competing sources students were assigned to read and synthesize themselves.",
    verdict: "exclusionary",
    isBypass: true,
    dimension: "Noetic displacement",
    reveal:
      "Synthesis was the learning goal, so the tool removed the work the task existed to develop. The analytic question the framework asks is what kind of work the tool removed and whether that work was relevant to the learning goal — not simply whether AI was used.",
    sources: ["sweller1988", "bjork2011"]
  },
  {
    id: "s7",
    text: "A timed handwritten essay exam is required of a student whose disability affects motor control, with no alternative format offered.",
    verdict: "exclusionary",
    dimension: "Equity boundary",
    reveal:
      "What higher education often names rigor has functioned historically as gatekeeping, preserving access for students whose embodied relationship to reading, writing, and timed performance already matches institutional expectations. The difficulty here is unrelated to the intended learning.",
    sources: ["dolmage2017", "annamma2013"]
  },
  {
    id: "s8",
    text: "A student uses AI to brainstorm counterarguments, then must cite which ones they rejected and explain why.",
    verdict: "contested",
    dimension: "Noetic / rhetorical",
    reveal:
      "This sits close to the cognitive-augmentation objection. The framework's narrower question is whether the tool extends an already developing schema or substitutes for the practice through which that schema is built. Requiring the student to adjudicate the generated options keeps evaluative work with the learner, but whether the generative work mattered to the goal is a situated judgment.",
    sources: ["mollick2024", "riva2025", "ellington2003"]
  },
  {
    id: "s9",
    text: "A district requires an AI-detection score on every submitted essay and bases consequences on it.",
    verdict: "exclusionary",
    dimension: "Infrastructural friction",
    reveal:
      "Humans and heuristics distinguish AI-generated from human text at rates close to chance, so the burden falls unevenly and the learning-design problem remains untouched. Schools need assessment designs that distinguish output from understanding without reducing AI policy to surveillance or detection.",
    sources: ["clark2021", "jakesch2023", "rice2025"]
  },
  {
    id: "s10",
    text: "A school schedules protected time and states in policy that teachers may slow a unit when slowing it is educationally necessary.",
    verdict: "productive",
    dimension: "Infrastructural friction",
    reveal:
      "When infrastructure names productive struggle as a protected value, friction-preserving pedagogy can be designed with institutional support. When it does not, friction preservation becomes an individual burden carried against the grain of the system.",
    sources: ["rice2025", "teachai2025"]
  }
];

/* ------------------------------------------------------------------ */
/* Station 6 — counterarguments                                        */
/* ------------------------------------------------------------------ */

const OBJECTIONS = [
  {
    id: "augmentation",
    title: "The cognitive-augmentation objection",
    steelman:
      "Generative AI extends human cognition as prior tools did. Resistance repeats the historical error of condemning writing or the calculator. Mollick frames AI as co-intelligence that amplifies human capability, and Riva theorizes enhanced cognitive scaffolding as a resolution to the comfort-growth paradox.",
    options: [
      {
        text: "The analogy fails because calculators demonstrably harmed mathematical skill development.",
        correct: false,
        why: "The draft concedes the opposite. Calculator research complicates the analogy: when integrated appropriately, calculator use has generally not hindered mathematical skill development and has often improved achievement (Ellington, 2003)."
      },
      {
        text: "The framework concedes tools extend cognition, then narrows the question to whether routine use during formation prevents novices from building the schemas expertise requires.",
        correct: true,
        why: "This is the reply as written. The educational question is whether a tool extends an already developing schema or substitutes for the practice through which that schema is built — not whether a tool extends adult expert cognition."
      },
      {
        text: "Any cognitive offloading is harmful and should be prohibited in schools.",
        correct: false,
        why: "The framework explicitly rejects this. It is not a call to ban AI tools, reject technology, or make school unnecessarily difficult."
      }
    ],
    limit:
      "The framework's limits are stated plainly: it is a conceptual and normative instrument whose categories require situated judgment, it has not yet been examined empirically, and its central claim that infrastructural friction conditions the other three dimensions is one the study examines rather than a finding it assumes.",
    sources: ["mollick2024", "riva2025", "ellington2003"]
  },
  {
    id: "determinism",
    title: "The determinism objection",
    steelman:
      "A media-ecological argument overstates the medium's power and understates human agency, sliding toward the claim that a technology autonomously dictates social and cognitive outcomes.",
    options: [
      {
        text: "The framework accepts that the outcome is determined but argues educators should resist anyway.",
        correct: false,
        why: "If the effects of generative AI were determined, pedagogical friction would be pointless. The argument runs the reverse direction."
      },
      {
        text: "The framework's own structure answers it: naming friction as something educators design asserts agency within a powerful default rather than claiming the default is destiny.",
        correct: true,
        why: "Because the friction-reducing affordances of generative AI are powerful defaults rather than fixed outcomes, deliberate institutional and pedagogical choices can preserve the cognitive struggle learning requires. Tertiary algorithmicity names a dominant tendency, not an inevitability."
      },
      {
        text: "Media ecology is not deterministic because Ong never discussed technology's effects on cognition.",
        correct: false,
        why: "Ong's entire account is about how media restructure consciousness. What he resisted was determinism specifically, emphasizing loss alongside gain at every transition."
      }
    ],
    limit:
      "Technologies are socially ambivalent, their effects settled through design, policy, and contestation rather than fixed at invention (Feenberg, 2002), and they present affordances that constrain and enable without determining (Hutchby, 2001).",
    sources: ["smithmarx1994", "feenberg2002", "hutchby2001", "ong2002"]
  },
  {
    id: "equity",
    title: "The equity objection",
    steelman:
      "Defending friction defends privilege. An argument for preserving difficulty can become an argument for preserving inequity, and generative AI carries genuine democratizing potential for learners whose traditional schooling has failed them.",
    options: [
      {
        text: "The productive and exclusionary distinction answers it, but it places a demand on the user rather than resolving the tension in advance.",
        correct: true,
        why: "This is how the draft states it, and it concedes that Dron (2023) is right about the democratizing potential. Determining what counts as productive or exclusionary is always a question of standpoint and value as much as of technique."
      },
      {
        text: "Equity concerns are addressed by allowing accommodations as exceptions to the friction rule.",
        correct: false,
        why: "Treating access as an exception is precisely the move the framework warns against, since it risks recoding legitimate accommodation as bypass."
      },
      {
        text: "The framework resolves the tension by specifying in advance which difficulties are productive.",
        correct: false,
        why: "No mechanical resolution is possible. This is one reason the dissertation investigates how educators actually draw the line in practice rather than assuming the framework resolves it in advance."
      }
    ],
    limit:
      "Dis/ability critical race studies show how race and disability intersect such that what counts as productive struggle for one student may be documented as deficit for another (Annamma et al., 2013).",
    sources: ["dron2023", "dolmage2017", "annamma2013", "kasneci2023"]
  },
  {
    id: "simulacrum",
    title: "The objection from within the tradition",
    steelman:
      "If Baudrillard is correct that simulation has reached a point where resistance is always reabsorbed, then pedagogical friction could itself become performative — language institutions adopt while continuing to optimize for efficiency and measurable throughput.",
    options: [
      {
        text: "The framework dismisses Baudrillard as irrelevant to education.",
        correct: false,
        why: "Baudrillard is used as a structural diagnosis. His four phases of the image track a different object than Ong's stages, but the logic overlaps at tertiary algorithmicity."
      },
      {
        text: "The framework takes the risk seriously, then declines Baudrillard's totalization because learning science documents measurable differences in durable understanding.",
        correct: true,
        why: "Friction can degrade into a managerial slogan if schools adopt its rhetoric while removing the conditions for real intellectual struggle. But desirable difficulties, productive failure, and deliberate load management are mechanisms, not simulations of learning."
      },
      {
        text: "The framework accepts that the real has been supplanted and repositions friction as pure performance.",
        correct: false,
        why: "Baudrillard concludes the real has been entirely supplanted, leaving no ground for critical response. The framework does not follow him there, because if it did, the pedagogical response would be incoherent."
      }
    ],
    limit:
      "The framework holds, with Ong and Postman, that purposeful educational intervention in media environments remains both possible and necessary.",
    sources: ["baudrillard1994", "bjork2011", "kapur2016", "sweller1988", "postman1992"]
  }
];

/* ------------------------------------------------------------------ */
/* Station 7 — the empirical landscape (Table 1) and the gap           */
/* ------------------------------------------------------------------ */

const EVIDENCE_GROUPS = [
  {
    group: "Adoption and frequency",
    color: "teal",
    rows: [
      { label: "Overall AI tool adoption", wave: "Spring 2024 (AIR0424T)", pct: 23.5, n: "8,814", rq: "RQ1, RQ2", note: "Public K–12 teachers in AIRS-sampled assignments" },
      { label: "Overall AI tool adoption", wave: "Fall 2025 (GAL1025T)", pct: 68.9, n: "1,985", rq: "RQ1, RQ2", note: "Public K–12 teachers" },
      { label: "Frequent AI tool use (weekly+)", wave: "Fall 2025 (GAL1025T)", pct: 56.8, n: "1,383", rq: "RQ1, RQ2", note: "Teachers reporting AI use" }
    ]
  },
  {
    group: "Expected teaching impact",
    color: "violet",
    rows: [
      { label: "Expects teachers' AI use to make teaching easier", wave: "Fall 2025 (GAL1025T)", pct: 72.5, n: "1,984", rq: "RQ1", note: "Public K–12 teachers" },
      { label: "Expects students' AI use to make teaching harder", wave: "Fall 2025 (GAL1025T)", pct: 61.9, n: "1,986", rq: "RQ1", note: "Public K–12 teachers" }
    ]
  },
  {
    group: "Policy and infrastructure",
    color: "rust",
    rows: [
      { label: "Any school AI policy present", wave: "Fall 2025 (GAL1025T)", pct: 34.5, n: "1,987", rq: "RQ2", note: "Public K–12 teachers" },
      { label: "Present and clear school AI policy", wave: "Fall 2025 (GAL1025T)", pct: 12.5, n: "1,987", rq: "RQ2", note: "Infrastructural clarity" },
      { label: "Student AI-use policy present", wave: "Winter 2026 (GAL0226T)", pct: 25.5, n: "2,029", rq: "RQ2", note: "Public K–12 teachers" },
      { label: "Present and clear student AI-use policy", wave: "Winter 2026 (GAL0226T)", pct: 12.8, n: "2,029", rq: "RQ2", note: "Infrastructural clarity" },
      { label: "Don't know if student policy exists", wave: "Winter 2026 (GAL0226T)", pct: 31.1, n: "2,029", rq: "RQ2", note: "Infrastructural opacity" },
      { label: "Student AI-misuse policy present", wave: "Winter 2026 (GAL0226T)", pct: 17.2, n: "2,027", rq: "RQ2", note: "Public K–12 teachers" },
      { label: "Don't know if misuse policy exists", wave: "Winter 2026 (GAL0226T)", pct: 37.1, n: "2,027", rq: "RQ2", note: "Infrastructural opacity" }
    ]
  },
  {
    group: "Instructional guidance",
    color: "blue",
    rows: [
      { label: "Guidance for preparing to teach (any)", wave: "Winter 2026 (GAL0226T)", pct: 55.3, n: "1,958", rq: "RQ2", note: "Public K–12 teachers" },
      { label: "Guidance for preparing to teach (formal)", wave: "Winter 2026 (GAL0226T)", pct: 9.3, n: "1,958", rq: "RQ2", note: "Formal guidance only" },
      { label: "Guidance for student tutoring (any)", wave: "Winter 2026 (GAL0226T)", pct: 31.5, n: "1,894", rq: "RQ2", note: "Public K–12 teachers" },
      { label: "Guidance for coaching teaching (any)", wave: "Winter 2026 (GAL0226T)", pct: 29.1, n: "1,916", rq: "RQ2", note: "Public K–12 teachers" }
    ]
  },
  {
    group: "Resource adequacy and equity",
    color: "rose",
    rows: [
      { label: "High-quality AI tools available", wave: "Spring 2025 (GAL0425T)", pct: 75.8, n: "1,496", rq: "RQ2", note: "Excludes role-inapplicable responses" },
      { label: "High-quality AI, majority students of color", wave: "Spring 2025 (GAL0425T)", pct: 71.3, n: "764", rq: "RQ2", note: "Equity proxy" },
      { label: "High-quality AI, majority white", wave: "Spring 2025 (GAL0425T)", pct: 80.8, n: "722", rq: "RQ2", note: "Equity proxy" },
      { label: "Offer AI instruction, high-poverty school", wave: "Dec 2024 (NCES SPP)", pct: 39.0, n: "—", rq: "RQ2", note: "Equity signal (SE 3.1%)" },
      { label: "Offer AI instruction, low-poverty school", wave: "Dec 2024 (NCES SPP)", pct: 49.0, n: "—", rq: "RQ2", note: "Equity signal (SE 1.3%)" }
    ]
  }
];

const EVIDENCE_NOTE =
  "RAND/Gallup estimates are author calculations from public-use microdata weighted by PORTAL_WEIGHT; missing and role-inapplicable responses were excluded, so <em>n</em> varies by item. Approximate standard errors use Kish's weight-adjusted effective sample size. Because the public files lack the complete survey design, estimates are descriptive and no formal significance claims are made. NCES School Pulse Panel values are published school-level weighted estimates. Because waves, item wording, populations, and equity grouping variables differ, results are treated as convergent directional evidence, not change scores or a single comparable gap. The 23.5% spring 2024 estimate and the 68.9% fall 2025 estimate come from different instruments, samples, and item definitions; they are descriptive snapshots, not a same-item trend.";

const GAPS = [
  {
    field: "Media ecology",
    has: "Explains how communication technologies reshape consciousness.",
    lacks: "Has not been sufficiently operationalized in K–12 empirical research on generative AI.",
    sources: ["ong2002", "postman1992", "mcluhan1964"]
  },
  {
    field: "Learning science",
    has: "Explains why productive difficulty matters for durable understanding.",
    lacks: "Is not often connected to media ecology or AI policy.",
    sources: ["bjork2011", "kapur2016", "sweller1988"]
  },
  {
    field: "K–12 AI reports",
    has: "Document adoption and policy gaps at national scale.",
    lacks: "Do not explain how teachers preserve or redesign the learning processes generative AI may bypass.",
    sources: ["diliberti2024", "doss2025", "kaufman2025", "nces2025"]
  },
  {
    field: "Digital literacy scholarship",
    has: "Calls for more critical frameworks.",
    lacks: "Those frameworks often remain broad.",
    sources: ["bacalja2022", "greene2025"]
  }
];

const RESEARCH_QUESTIONS = [
  {
    id: "RQ1",
    text: "How do classroom-facing educators, building-level administrators, district or system-level leaders, and adult university students make sense of the ways generative AI changes the effort, dialogue, authorship, judgment, and participation involved in teaching and learning?",
    connects: ["Noetic displacement", "Rhetorical saturation", "Existential abstraction"]
  },
  {
    id: "RQ2",
    text: "How do educators and school-system leaders make sense of and respond to the policy, professional-learning, assessment, access, and governance conditions surrounding generative AI?",
    connects: ["Infrastructural friction"]
  },
  {
    id: "RQ3",
    text: "What language, assessment expectations, instructional practices, professional supports, and leadership approaches do educators and school-system leaders identify as important for preserving forms of friction that support learning while reducing unnecessary barriers?",
    connects: ["Productive vs. exclusionary friction", "All four dimensions"]
  }
];

/* ------------------------------------------------------------------ */
/* Station registry                                                    */
/* ------------------------------------------------------------------ */

const STATIONS = [
  {
    id: "origin",
    num: "01",
    title: "The Artifact Test",
    kicker: "Chapter One — the problem",
    color: "gold",
    lede:
      "Assessment has long relied on an inference: a polished artifact is evidence of the thinking that produced it. This station asks what that inference is still worth."
  },
  {
    id: "arc",
    num: "02",
    title: "The Long Arc",
    kicker: "Ong's developmental account, extended",
    color: "blue",
    lede:
      "Media ecology treats communication technologies as environments rather than neutral channels. Move through five stages and watch three tacit conditions come under pressure."
  },
  {
    id: "rupture",
    num: "03",
    title: "The Rupture",
    kicker: "Tertiary algorithmicity and its three pressures",
    color: "rust",
    lede:
      "Each broken condition names a pressure. Match them, then read what the draft says is at stake for education in each one."
  },
  {
    id: "response",
    num: "04",
    title: "The Response",
    kicker: "The Pedagogical Friction Framework",
    color: "teal",
    lede:
      "Four dimensions, but not four peers. Build the framework and find out why the order matters — the structure of this station is the argument."
  },
  {
    id: "boundary",
    num: "05",
    title: "The Boundary",
    kicker: "Productive and exclusionary friction",
    color: "rose",
    lede:
      "An argument for preserving friction can become an argument for preserving inequity. Ten scenarios. Some have no clean answer, and that is the point."
  },
  {
    id: "arena",
    num: "06",
    title: "The Arena",
    kicker: "Counterarguments and the limits of the framework",
    color: "violet",
    lede:
      "A responsible framework engages the strongest objections rather than the weakest. Four objections, stated at full strength. Find the reply the draft actually makes."
  },
  {
    id: "gap",
    num: "07",
    title: "The Landscape and the Gap",
    kicker: "K–12 evidence and what the literature has not done",
    color: "gold",
    lede:
      "National evidence on adoption, policy, and guidance — then the four literatures that each hold one piece, and the gap between them this study enters."
  }
];
