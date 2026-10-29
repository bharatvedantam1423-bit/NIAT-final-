# NIAT website revamp

A redesigned home page for [niatindia.com](https://www.niatindia.com/): NxtWave of Innovation in Advanced Technologies.

Plain HTML, CSS and JavaScript. No build step and no dependencies.

## Two variations

| | Variation A | Variation B |
|---|---|---|
| URL | `/` | `/variation-b/` |
| Look | Dark cinematic hero, Satoshi + serif accents, bento cards | Light editorial: cream paper, Newsreader serif + Inter, real event photography |
| First audience | Students | Students **and** parents (adds "How NIAT works" and "For parents") |
| Length (desktop) | ~15,700px | ~11,100px |
| Weight (mobile) | ~2.6 MB | ~1.6 MB |

Both use the same real content, links and images from the live site. They are built to be A/B tested against each other.

## Run locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000 (Variation A) and http://localhost:8000/variation-b/ (Variation B).

## Structure

```
index.html                 Variation A markup
assets/css/styles.css      Variation A styles
assets/js/main.js          Variation A behaviour
variation-b/               Variation B (index.html, styles.css, main.js)
assets/img/                Shared optimised WebP images and SVG logos (from the live site)
docs/variation-b/          How Variation B was designed:
  01-copy-and-section-map.md    intake, journey map, refined copy, compliance changes
  02-mobbin-reference-report.md 63 Mobbin references across 11 sections
  03-lowfi-wireframe.html       grayscale wireframe with A/B section variations and annotations
  04-lowfi-rationale.md         per-section rationale + all 30 Laws of UX audit
  05-power-prompt.md            exact build spec + campus film brief
docs/06-final-audit.md     Accessibility, compliance, performance and link audit of both pages
reports/                   Competitor website research report (SST, NST, Polaris, Kalvium, Masai, Sunstone, Minerva, 42, Olin…)
research_notes/            Source notes behind the report
```

## Variation A sections

1. Announcement bar (NAT slots)
2. Hero with video background, key stats and highlight cards
3. Partner university marquee
4. Exclusive benefits: IIT Kharagpur OCN, ₹30,000 per project, ₹100 Cr AI tokens
5. Curriculum: Decode / Develop / Architect / Ship tabs, plus NIAT vs typical comparison
6. Outcomes: achievements, top placements, 2500+ hiring companies
7. Startups by NIATians
8. Campuses and certifications
9. Mentors and advisors
10. Life of NIATians
11. Recognition (Shark Tank quote, press, milestones)
12. Admissions: 4-step NAT process
13. FAQs
14. Final call to action and footer

## Design system

| Token | Value | Use |
| --- | --- | --- |
| Maroon | `#991B1B` | Primary brand, buttons, accents |
| Wine | `#450A0A` / `#1C0505` | Dark sections, footer |
| Amber | `#FFB218` | Highlight numbers, hero CTA |
| Cream | `#FEF7F1` / `#FFFCF8` | Page backgrounds |

Type: Satoshi (headings and UI), Instrument Serif italic (accent words), JetBrains Mono (labels).

## Notes

- All links (Apply, Brochure, NAT, campus pages, legal) point at the existing live URLs.
- Disclaimers from the current site (outcomes, IIT Kharagpur, placements, NIAT not a university) are kept.
- The hero video streams from the existing CloudFront URL and only autoplays when the visitor hasn't asked for reduced motion or data saving.
- Curriculum phases 2 to 4 show summaries and point to the brochure, because the live site only publishes full detail for phase 1.
