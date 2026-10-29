# NIAT website revamp

A redesigned home page for [niatindia.com](https://www.niatindia.com/): NxtWave of Innovation in Advanced Technologies.

Plain HTML, CSS and JavaScript. No build step and no dependencies.

## Run locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Structure

```
index.html            Page markup (all sections)
assets/css/styles.css Design tokens, layout and responsive rules
assets/js/main.js     Header state, mobile menu, curriculum tabs, scrollers, count-up, reveal
assets/img/           Optimised WebP images and SVG logos (taken from the current site)
```

## Page sections

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
