# Final audit: Variation A and Variation B

Run on 29 Oct 2026 against both pages served locally, in headless Chromium at 1440px and 390px (plus overflow checks at 360, 768 and 1024px).

## Summary

| Check | Variation A (`/`) | Variation B (`/variation-b/`) |
|---|---|---|
| Accessibility scan (axe-core 4.10, WCAG 2.0/2.1/2.2 AA + best practice) | **0 violations** (12 found and fixed) | **0 violations** (11 found and fixed) |
| JavaScript errors | 0 | 0 |
| Horizontal overflow at 360 / 390 / 768 / 1024 / 1440px | none | none |
| Images without `alt` | 0 | 0 |
| Empty or `#` links | 0 | 0 |
| niatindia.com links (24 unique) | all 200 | all 200 |
| Page height, desktop | 15,744px | 11,091px |
| Page weight, mobile (all lazy images loaded) | ~2.6 MB | ~1.6 MB |
| Page weight, desktop | ~5.8 MB (includes 3.3 MB hero video) | ~1.6 MB |
| Interactive parts tested | curriculum tabs (click + arrow keys), placements scroller, mobile menu (open + Escape), mobile bar | outcome filters (counts 8 / 7 / 6 / 3), rail prev/next, campus chips + empty state, FAQ tabs (arrow keys wrap), drawer, mobile bar |

For reference, the live niatindia.com home page is about 20,500px tall.

## Fixed in this pass

### Compliance (from the research report: ASCI 2023, CCPA Nov 2024, UGC notices)
- **"UGC-approved institutions" → "UGC-recognised partner universities"** everywhere, in both variations. The old wording could imply UGC endorses NIAT.
- **The "₹80 LPA highest package" hero card was removed from A.** That figure comes from NxtWave programs, not NIAT batches, and ASCI expects year and batch size for package claims. The card now shows ₹2.92 Cr in internship stipends secured by NIATians.
- **Disclaimers are readable.** Raised from 12px at 2.5:1 contrast to 14–15px at 4.6:1 or better, and placed directly beside the claims. "Past record is no guarantee of future prospects" was added to the outcome disclaimers in both variations.
- **Variation B labels placement cards "NxtWave placement"** and states that the figures are individual outcomes, not NIAT batch averages.
- **No false urgency on either page:** no countdowns, "seats left" or "slots booked" counters.

### Accessibility
- **Muted grey text in A** (`--ink-300`) raised from 2.5:1 to 4.6:1 contrast. It's used for fine print, the comparison table, startup teams and curriculum tab labels.
- **WhatsApp green** changed from `#25D366` (white icon at 2.0:1) to `#0F7A41` (5.4:1) in both variations.
- **Floating WhatsApp button, mobile bar and announcement bar** now sit inside labelled landmarks.
- **A's placements scroller** can now be focused with the keyboard and has a label.
- **A's comparison table** has a screen-reader label for its empty corner header.
- **B's outcomes rail** keeps proper list semantics; the filter tabs now control a wrapper panel.
- **B's "What happens next" card** no longer creates a nested landmark.
- **Both pages:** `scroll-padding` keeps focused elements clear of the sticky header and bottom bar (WCAG 2.4.11).

### Performance
- **A's hero video** no longer autoplays on phones (≤760px). They keep the poster image, which saves about 3.3 MB on mobile data.
- **B:** poster-first real photo, 2 font families, all images lazy-loaded below the fold. About 1.6 MB total, close to the research's ~1.5 MB target.

### Visual fixes in B (caught in screenshot review)
- **Campus empty-state box:** it showed while campuses were listed, because CSS `display` overrode `[hidden]`. A global `[hidden]{display:none!important}` fixes it.
- **Headline wrap:** the hero headline broke "B.Tech." onto its own line, so the size is capped at 72px.
- **Benefit cards:** the ₹30,000 and ₹100 Cr cards had large empty areas; they now stack beside the IIT Kharagpur card.
- **Reassurance line:** it wrapped with a stray "·" on phones; dots are replaced with check marks.

## Still open (needs NIAT team input, not code)
1. **Placement data source.** Confirm whether the 80 / 57 / 35 LPA offers are from NIAT students or other NxtWave programs. Publish year and batch size, and ideally an audited report.
2. **Testimonial consent.** CCPA 2024 needs written consent obtained after the result for every named student. Confirm consent for all photos and names used.
3. **Fees.** Not published on the site; parents will look for them. Add a fee page or ranges per campus.
4. **Campus directory.** Only 3 of the 35+ partner universities have pages. A full filterable directory would satisfy ASCI's "name and location of the degree-awarding institution" rule and is a gap no competitor fills well.
5. **DPDP parental consent.** The NAT application form (apply.niatindia.com) will need a verifiable parental-consent step for under-18 applicants once the rules apply (about May 2027).
6. **Legal review** of all claim copy, especially "Build like an AI engineer from year one" and the benefit cards.
7. **Image dimensions.** A's images don't all declare width and height. Layout shift is low because they sit in fixed containers, but add them when moving to production.
8. **Hero video for B.** A brief for a real campus film is in `docs/variation-b/05-power-prompt.md`; B's hero is a single swappable slot.
