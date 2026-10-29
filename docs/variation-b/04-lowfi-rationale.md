# NIAT home · Variation B: section rationale and laws audit

Pins in the wireframe (`03-lowfi-wireframe.html`, Annotations toggle) match the section numbers below.

> The "What the user might feel" notes are predictions grounded in the target users (Class 12 students and their parents). They are hypotheses to validate in user testing, not facts.

---

## 00 · Header

**Why this section**
The constant way to apply and to navigate. Without it, students who are already convinced have to scroll to find the CTA.

**UX laws applied**
- **Jakob's Law**: logo top-left, nav centre, CTA top-right, the layout every site uses.
- **Hick's Law**: 5 nav items instead of the 13 in the live site's "More" menu.
- **Serial Position Effect**: "Programme" first and "Admissions" last, the two items students look for most.

**UI principles applied**
- **Contrast**: the only filled button in the header is "Apply for NAT".
- **Mobile-first / thumb zone**: a sticky bottom bar on mobile after the hero.

**What the user might feel** (predictive)
- First 3 seconds: "This is a proper institution, not an ad."
- Thinking: "There's a section for my parents. Good, I can send them this."
- Risk: the sticky bottom bar may cover content or focus outlines (WCAG 2.4.11). It needs scroll padding.

## 01 · Hero

**Why this section**
Answers "what is this?" and "what happens if I click?". If either is unclear, students bounce or call a counsellor first.

**UX laws applied**
- **Hick's Law**: one primary action (Apply for NAT); the brochure is a text link.
- **Goal-Gradient Effect** (pin 1a): the "What happens next" panel shows a 3-step path, so the first step feels small.
- **Mental Model**: the headline uses the student's own frame (a B.Tech plus skills), not NxtWave's internal programme names.

**UI principles applied**
- **Visual hierarchy**: one display-size headline per viewport.
- **Transparency & trust**: reassurance microcopy (90 minutes, no negative marking) sits right under the CTA.

**Variations**
- A: split with a next-steps panel. Better when the audience is anxious about process (first-generation engineering families).
- B: centred with a photo collage. Better when brand awareness is already high and emotion matters more than process.
- Recommendation: **A**. Admissions anxiety is the main barrier, and A answers it in the first screen.

**What the user might feel** (predictive)
- First 3 seconds: "B.Tech plus AI. That's what I want."
- Thinking: "Only 90 minutes, and no negative marking? I can try that."
- Risk: "Build like an AI engineer" may read as an outcome promise. Legal should confirm it isn't a job claim.

## 02 · Proof stats

**Why this section**
A fast plausibility check right after the promise. Without numbers, the hero sounds like every other edtech ad.

**UX laws applied**
- **Chunking**: 4 numbers, 2–3-word labels.
- **Cognitive Bias (anchoring)**: large numbers set scale; the asterisk keeps it honest.

**UI principles applied**
- **Transparency & trust**: the footnote is attached to every number.
- **Rhythm & repetition**: identical anatomy for all 4 stats.

**What the user might feel** (predictive)
- First 3 seconds: "This is big, not a small startup."
- Thinking: "What does 'multiple NxtWave programs' mean? Is that NIAT or not?"
- Risk: parents may discount numbers once they notice the footnote. Section 08 has to address that directly.

## 03 · How NIAT works

**Why this section**
Removes the biggest point of confusion: who gives the degree. It used to sit in the FAQ and footer; competitors (SST, NST) now answer it on the home page.

**UX laws applied**
- **Mental Model**: University + NIAT = You matches how families think about it ("which college, plus what extra?").
- **Uniform Connectedness**: + and = connect the cards into one idea.
- **Law of Prägnanz**: a three-box equation is the simplest possible diagram.

**UI principles applied**
- **Von Restorff**: the "You" card has the strong border.
- **Clarity over cleverness**: plain labels such as "Your degree" and "Your skills".

**What the user might feel** (predictive)
- First 3 seconds: "Oh, so the degree is from the university."
- Thinking: "So NIAT is on top of my B.Tech. That's clear."
- Risk: some may conclude NIAT is optional or extra-cost. Fees aren't on the page (gap flagged).

## 04 · Four-year journey

**Why this section**
Turns "industry-ready" into concrete things a student will build each year.

**UX laws applied**
- **Uniform Connectedness**: a vertical line links Year 1 → Year 4.
- **Goal-Gradient Effect**: a visible progression from Decode to Ship.
- **Serial Position Effect**: Year 1 (starts now) and Year 4 (robotics, the exciting end) carry the most detail.

**UI principles applied**
- **Mobile-first**: a vertical timeline needs no sideways scrolling.
- **Progressive disclosure**: full module lists live in the brochure.

**Variations**
- A: vertical timeline. Scannable and works on phones.
- B: big-numeral year selector with a detail panel. Richer, but hides 3 of 4 years behind taps.
- Recommendation: **A**.

**What the user might feel** (predictive)
- First 3 seconds: "I'll be building robots by year 4."
- Thinking: "What exactly is in year 2?"
- Risk: years 2–4 are summaries. If the brochure is gated behind a form, curious students may drop off.

## 05 · NIATian benefits

**Why this section**
The differentiators no competitor has: IIT Kharagpur OCN, paid projects, AI tokens.

**UX laws applied**
- **Von Restorff Effect**: the IIT KGP card is wider and strongly bordered.
- **Law of Similarity**: the other two cards share one anatomy.
- **Chunking**: exactly 3 benefits.

**UI principles applied**
- **Transparency & trust**: fine print sits on each card, next to the claim.

**What the user might feel** (predictive)
- First 3 seconds: "IIT Kharagpur. That's a big name."
- Thinking: "Will I really earn ₹30,000? What's the eligibility?"
- Risk: "IIT Kharagpur" may be read as an IIT degree. The disclaimer must stay readable, not hidden.

## 06 · Student outcomes

**Why this section**
Social proof from people like them. It merges three separate proof blocks from Variation A into one rail.

**UX laws applied**
- **Choice Overload**: the filter (All / Placements / Wins / Startups) limits what's shown.
- **Cognitive Bias (social proof)**: real names, photos and numbers.
- **Law of Common Region**: each story is a self-contained card with a type tag.

**UI principles applied**
- **Consistency**: one card template for all three story types.
- **Accessibility**: prev/next buttons give a non-drag alternative (WCAG 2.5.7).

**Variations**
- A: one filterable rail. Shorter page, easy to scan.
- B: separate blocks per type, as in Variation A. More visible, but much longer.
- Recommendation: **A**.

**What the user might feel** (predictive)
- First 3 seconds: "These are students like me, from colleges like mine."
- Thinking: "80 LPA sounds unreal. Is that NIAT?"
- Risk: big packages from other NxtWave programmes can feel misleading. Year, batch size and the same-size disclaimer are required (ASCI/CCPA).

## 07 · Mentors

**Why this section**
Answers "who teaches me?". NN/g found faculty pages matter to prospective students.

**UX laws applied**
- **Law of Proximity**: role and company sit tight under each name.
- **Aesthetic-Usability Effect**: consistent photo treatment raises perceived quality.

**UI principles applied**
- **Visual hierarchy**: advisors (institutional trust) first, mentors (industry credibility) below.

**What the user might feel** (predictive)
- First 3 seconds: "NVIDIA, Microsoft, IBM."
- Thinking: "Will these people actually teach me, or just appear on the website?"
- Risk: the page doesn't say how often students meet mentors. Add frequency if known.

## 08 · For parents (new)

**Why this section**
Parents decide and pay. EAB found 93% of parents visit school sites. Turning compliance statements into straight answers builds trust instead of hiding it.

**UX laws applied**
- **Mental Model**: the four questions parents actually ask, in their words.
- **Cognitive Bias**: an honest "No" to "Are jobs guaranteed?" makes the other answers more believable.

**UI principles applied**
- **Transparency & trust**: the disclaimers become the content.
- **Contrast**: one CTA, "Talk to a counsellor".

**What the user might feel** (predictive)
- First 3 seconds (parent): "Finally, someone answering what I wanted to ask."
- Thinking: "They're not promising jobs. Good, at least they're honest."
- Risk: no fees or hostel information yet. The next question will be "how much?"

## 09 · Campuses

**Why this section**
"Is there one near me?" is a deciding question, especially for families who want to stay close to home.

**UX laws applied**
- **Hick's Law** and **Choice Overload**: state chips narrow 35+ options.
- **Jakob's Law**: filter chips behave like common filters.

**UI principles applied**
- **Feedback**: an empty state for states with no featured campus.

**What the user might feel** (predictive)
- First 3 seconds: "Let me check my state."
- Thinking: "Only 3 shown? Where are the other 32?"
- Risk: only 3 campuses have pages on the live site. "View all" must lead somewhere useful.

## 10 · Admissions

**Why this section**
Turns intent into action with a clear process. NN/g found users want step-by-step admission information.

**UX laws applied**
- **Goal-Gradient Effect** and **Uniform Connectedness**: 4 connected steps.
- **Fitts's Law**: a large CTA sits beside the steps, full-width on mobile.
- **Working Memory**: the fee and test format are shown inline, so nothing needs remembering from earlier.

**UI principles applied**
- **Transparency & trust**: the ₹1,200 non-refundable fee is stated upfront.

**What the user might feel** (predictive)
- First 3 seconds: "4 steps. I can do this."
- Thinking: "₹1,200 is fine to try."
- Risk: "At the university's discretion" may worry students. Pair it with the counselling reassurance.

## 11 · FAQ

**Why this section**
Catches the remaining doubts before the final CTA.

**UX laws applied**
- **Chunking** and **Miller's Law**: 3 categories of 3–5 questions.
- **Progressive disclosure**: accordions.

**UI principles applied**
- **Help & documentation** (Nielsen #10): a WhatsApp contact sits next to the FAQ.

**What the user might feel** (predictive)
- Thinking: "Let me check the NAT syllabus quickly."
- Risk: if a question isn't there, the user leaves to WhatsApp. That's acceptable, because it's still a lead.

## 12 · Final CTA

**Why this section**
The end of the page has to be a clear next step.

**UX laws applied**
- **Peak-End Rule**: a confident close with one primary action.
- **Serial Position Effect**: it repeats the hero's CTA.

**UI principles applied**
- **Contrast**: one filled button, one outline.

**What the user might feel** (predictive)
- Thinking: "OK, let me apply and show my parents."
- Risk: none significant.

## 13 · Footer

**Why this section**
Legal, contact details and the full disclaimer.

**UX laws applied**
- **Jakob's Law**: standard link columns, socials, legal links.

**UI principles applied**
- **Transparency**: the full "NIAT is not a university" disclaimer at readable size.

**What the user might feel** (predictive)
- Risk: none.

---

# Laws audit

| Law / principle | Status | Where / note |
|---|---|---|
| Law of Proximity | ✅ Applied | Mentors: role · company tight under name; stat labels under numbers |
| Law of Common Region | ✅ Applied | Outcome cards, benefit cards, parent Q&A cards |
| Law of Similarity | ✅ Applied | One primary button style ("Apply for NAT") across sections 00, 01, 10, 12 |
| Law of Uniform Connectedness | ✅ Applied | Journey timeline line; admissions step line; the + = equation in 03 |
| Law of Prägnanz | ✅ Applied | 03 equation diagram |
| Miller's Law | ✅ Applied | Nav cut to 5; FAQ in 3 groups |
| Chunking | ✅ Applied | 4 stats, 3 benefits, 4 years, 4 steps |
| Working Memory | ✅ Applied | 10: fee and test format shown inline beside the CTA |
| Serial Position Effect | ✅ Applied | Hero and final CTA repeat the same action; nav order |
| Von Restorff Effect | ✅ Applied | IIT KGP card; "You" card in 03 |
| Zeigarnik Effect | — Not relevant | No multi-step task on the home page |
| Hick's Law | ✅ Applied | One primary CTA per section; brochure as a link |
| Choice Overload | ⚠️ At risk | 06 rail could hold 20+ stories. Keep 8 per filter max |
| Cognitive Load | ✅ Applied | Three proof blocks merged into one; each section does one job |
| Selective Attention | ⚠️ At risk | Announcement-bar style may be ignored (banner blindness). Don't put critical info only there |
| Cognitive Bias | ✅ Applied | Social proof with honest anchors; no false urgency (CCPA) |
| Flow | — Not relevant | Static marketing page |
| Jakob's Law | ✅ Applied | Header, filter chips, accordion, footer |
| Mental Model | ✅ Applied | 03 degree equation; 08 parent questions |
| Paradox of the Active User | ✅ Applied | No "how to use" section; steps are contextual |
| Goal-Gradient Effect | ✅ Applied | Hero next-steps panel; admissions steps |
| Parkinson's Law | — Not relevant | No form on the home page (handled on apply.niatindia.com) |
| Peak-End Rule | ✅ Applied | 12 final CTA before the footer |
| Fitts's Law | ✅ Applied | ≥48px buttons, full-width on mobile, sticky mobile bar |
| Doherty Threshold | ⚠️ At risk | Hero video and 100+ images. Needs a poster-first, lazy-loaded performance budget |
| Postel's Law | — Not relevant | No inputs on the page |
| Occam's Razor | ✅ Applied | 14 sections vs 20+ on the live site |
| Tesler's Law | ✅ Applied | Counselling recommends the campus; students don't have to compare 35 universities |
| Pareto Principle | ✅ Applied | Hero, how-it-works and admissions carry the decision; everything else supports |
| Aesthetic-Usability Effect | ⚠️ At risk (hi-fi) | Low-fi only. Hi-fi must keep the brand polish of Variation A |
| Visual hierarchy | ✅ Applied | One display headline per viewport |
| Consistency | ✅ Applied | Repeated card anatomy |
| Accessibility | ⚠️ At risk | Sticky bar vs focus visibility (WCAG 2.4.11); rail needs buttons (2.5.7) |
| Transparency & trust | ✅ Applied | 08 for parents; same-size disclaimers |
| No dark patterns | ✅ Applied | No countdowns, no "seats left" |

## Top fixes for hi-fi
1. **Performance (Doherty):** poster-first hero, lazy images, WebP/AVIF, and a budget of LCP < 2.5s on a mid-range Android over 4G.
2. **Accessibility:** `scroll-padding` for the sticky header and bottom bar, visible focus rings, button controls for the rail, 4.5:1 text contrast on all photos.
3. **Outcome rail limits:** a maximum of 8 cards per filter, and the disclaimer at claim size directly under the rail.
