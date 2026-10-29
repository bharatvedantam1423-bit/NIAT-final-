# Power prompt: NIAT home page, Variation B

**Classification**
- **Archetype:** a blend of *Premium Restrained Editorial* and *Editorial Cinematic*. It uses a cream paper ground, a display serif with large serif numerals, and real event photography.
- **Primary pattern:** *Infinite Card Slider*, adapted for the outcomes rail. It is not cloned or looped, so the filter and keyboard navigation stay accessible (WCAG 2.5.7).
- **Decoration:** *Masked Text-Line Reveal* on section headings.
- **Reduced motion:** always on.

**Hero asset:** a real static photo (Telangana Hackathon winners). The research says campus imagery must be genuine (ASCI 2023), and a poster-first hero keeps it fast on low-end Android. A video stays available as a swap slot.

**Packaging:** split into the site prompt plus a separate asset brief for a future real campus film.

**Checkpoint:** the user asked to proceed without stopping, so these defaults were chosen and are stated here.

---

## Site prompt

```
0. BRIEF + CONSTRAINTS
Build the NIAT (NxtWave of Innovation in Advanced Technologies) home page, Variation B: a light, editorial,
mobile-first single page that sells "your B.Tech + industry-ready AI skills" to Class 12 students and their parents.
Files: variation-b/index.html, variation-b/styles.css, variation-b/main.js. No frameworks, no build step.
Images are read from ../assets/img/ (already optimised WebP/SVG). No invented URLs.
Do NOT add: countdowns, "seats left"/"slots booked" counters, pop-ups, lead forms, carousels that auto-advance,
WebGL/Lottie, autoplaying audio, a "highest package" stat tile.
<html lang="en">, <title>NIAT | B.Tech + industry-ready AI, robotics & data science</title>,
favicon ../assets/img/favicon.svg, theme-color #2B0909.

1. FONTS (2 families only)
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400..600;1,6..72,400..500&display=swap" rel="stylesheet">
--serif: "Newsreader", Georgia, "Times New Roman", serif  → h1, h2, big numerals, quotes, step numbers
--sans:  "Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif → everything else
Italic Newsreader (400) for the one emphasised phrase per heading, coloured --maroon.
Labels/eyebrows: Inter 600, 12px, letter-spacing .12em, uppercase.

2. TOKENS
:root{
 --paper:#FBF6EF; --paper-2:#F3E9DC; --card:#FFFFFF;
 --ink:#1F1414; --ink-2:#56463F; --ink-3:#7A6A64;            /* ink-2 ≥ 7:1, ink-3 ≥ 4.5:1 on paper and white only, never on paper-2 */
 --line:rgba(31,20,20,.12); --line-strong:rgba(31,20,20,.22);
 --maroon:#991B1B; --maroon-600:#7F1717; --maroon-50:#F8E7E4;
 --wine:#2B0909; --wine-2:#3D0E0E;
 --amber:#FFB218; --amber-soft:#FFE8B3;
 --wa:#128C4A;                                               /* white icon 4.3:1, icons need ≥3:1 */
 --radius-s:12px; --radius:20px; --radius-l:28px;
 --shadow-1:0 1px 2px rgba(31,20,20,.06),0 4px 14px rgba(31,20,20,.06);
 --shadow-2:0 2px 6px rgba(31,20,20,.06),0 18px 40px -12px rgba(31,20,20,.18);
 --container:1200px; --gutter:clamp(20px,5vw,48px); --section:clamp(72px,10vw,128px);
 --ease:cubic-bezier(.2,.7,.2,1); --header:68px;
}
Dark sections (outcomes, final CTA, footer) use background var(--wine), text #FFF, muted rgba(255,255,255,.72).

3. ASSET SLOTS
HERO_ASSET_URL = ../assets/img/hero-hackathon.webp (816×480), alt "NIATians with prize cheques at the Telangana Hackathon"
  Image markup (default): <img class="hero-media__asset" src="HERO_ASSET_URL" width="816" height="480" fetchpriority="high">
  Video markup (swap):    <video class="hero-media__asset" muted playsinline loop preload="none" poster="HERO_ASSET_URL"><source src="HERO_VIDEO_URL" type="video/mp4"></video>
  Both use .hero-media__asset {width:100%;height:100%;object-fit:cover;object-position:50% 40%}
Other assets: logo.svg, logo-white.svg, iitkgp-ocn.webp, pl-*.webp, co-*.webp, st-*.webp, ach-*.webp,
m-*.webp, mc-*.webp, adv-*.webp, campus-1..3.webp, life-*.webp, life-garba.webp, rec-*.webp, tool-*.webp, anupam.webp.

4. LAYER STACK
skip link z 100 · header z 50 · mobile action bar z 45 · WhatsApp FAB z 40 · page content z 1.

5. DOM (source order)
a.skip-link
header.hdr[data-header] > .container > a.brand(img logo) + nav.hdr-nav(5 links) + a.btn.btn--primary "Apply for NAT" + button.menu-btn
  + div.drawer#drawer[hidden]
main#main
 01 section.hero > .container.hero__grid
      > div.hero__copy: p.eyebrow, h1.display, p.lede, div.hero__ctas(a.btn--primary "Apply for NAT", a.link-arrow "Download brochure"), p.reassure
      > div.hero__visual: figure.hero-media(img), aside.next-card(h2 "What happens next", ol.next-steps×3)
 02 section.stats > .container > dl.stats__grid(4× div.stat(dd.stat__num, dt.stat__label)) + p.disclaimer
 03 section.how#how > .container: header.s-head, div.equation(3 cards + 2 operators), div.how-points(3)
 04 section.journey#programme > .container.journey__grid: div.journey__intro(sticky on ≥1024), ol.timeline(4× li.year)
      + ul.tools(6 logos)
 05 section.extras > .container: header.s-head, div.extras__grid(article.extra--kgp, article.extra×2)
 06 section.outcomes#outcomes (dark): header.s-head + div.rail-ctrl(filters role=tablist + prev/next),
      ul.rail#rail(li.story[data-type] × 14), p.disclaimer--light, div.logos(marquee 2 rows)
 07 section.mentors#mentors: header.s-head, div.advisors(2), ul.mentor-list(12)
 08 section.parents#parents: div.parents__grid(intro+CTA+quote | dl.qa×4)
 09 section.campuses#campuses: header.s-head(+link), div.chips(role=tablist), ul.campus-grid(3 cards) + p.empty[hidden]
 10 section.admissions#admissions: div.adm__grid(intro+CTA | ol.steps×4)
 11 section.faq#faq: div.faq__grid(intro | div.faq-tabs + details×n per panel)
 12 section.cta-final (dark)
footer.ftr (dark) + a.fab-wa + div.mbar

6. CSS PER COMPONENT (key values)
body: background var(--paper); color var(--ink); font 400 17px/1.6 var(--sans); -webkit-font-smoothing:antialiased
.container: max-width var(--container); margin-inline:auto; padding-inline:var(--gutter)
.display (h1): font 500 clamp(44px,6.2vw,84px)/1.02 var(--serif); letter-spacing -.02em; max-width 14ch; text-wrap balance
h2.s-title: font 500 clamp(34px,4.6vw,60px)/1.05 var(--serif); letter-spacing -.015em; max-width 18ch
em inside titles: font-style italic; color var(--maroon) (amber on dark)
.eyebrow: Inter 600 12px/1 uppercase .12em; color var(--maroon); display flex gap 10px; ::before 24×1px currentColor
.lede: 19px/1.6 (17px <600px); color var(--ink-2); max-width 54ch
.btn: height 52px; padding 0 26px; radius 999px; Inter 600 16px; transition background .2s, transform .2s var(--ease)
.btn--primary: bg var(--maroon); color #fff; box-shadow 0 8px 20px -8px rgba(153,27,27,.55); :hover bg var(--maroon-600); translateY(-1px)
.btn--ghost: border 1.5px solid var(--line-strong); color var(--ink); :hover border-color var(--ink)
.btn--amber (dark sections): bg var(--amber); color var(--wine)
.link-arrow: Inter 600 16px; color var(--ink); border-bottom 1.5px solid var(--line-strong); arrow translateX(4px) on hover
HEADER: height var(--header); position sticky top 0; bg rgba(251,246,239,.86) + backdrop-filter blur(14px) saturate(1.4);
  border-bottom 1px solid transparent → var(--line) when scrolled (class .is-scrolled)
HERO: padding clamp(32px,6vw,72px) 0 clamp(48px,7vw,96px); grid 1.15fr .85fr gap clamp(32px,5vw,72px) align center
  .hero-media: aspect-ratio 4/5; radius var(--radius-l); overflow hidden; box-shadow var(--shadow-2)
  .next-card: position absolute; left -48px; bottom -32px; width min(320px,90%); bg var(--card); radius var(--radius);
     padding 22px 24px; shadow var(--shadow-2); steps = 28px circle (border 1.5px var(--maroon), serif 15px) + title 15px/600 + meta 13px ink-3
  .reassure: 14px ink-3, items separated by "·"
STATS: border-block 1px solid var(--line); grid 4 cols; .stat padding 28px 24px; + .stat border-left 1px var(--line)
  .stat__num: serif 500 clamp(40px,4.6vw,64px)/1; letter-spacing -.02em; tabular-nums; sup "*" 0.45em maroon
  .stat__label: 15px ink-2 ; disclaimer: 15px ink-2 (same size as labels: compliance)
HOW: .equation grid "1fr 48px 1fr 48px 1fr"; cards radius var(--radius) border 1px var(--line) bg var(--card) padding 28px;
  operator: serif 40px maroon centred; third card bg var(--wine) color #fff (the "You" card)
  .how-points grid 3 cols; h3 Inter 600 18px; p 16px ink-2
JOURNEY: grid .9fr 1.4fr; intro position sticky top calc(var(--header) + 40px) (≥1024 only)
  .timeline: position relative; ::before 2px line left 23px top 8px bottom 8px bg linear-gradient(var(--maroon),var(--amber))
  .year: padding-left 72px; margin-bottom 40px; marker 48px circle bg var(--paper) border 2px var(--maroon) serif 18px "01"
  .year__tag Inter 600 12px uppercase maroon; h3 serif 500 28px; .year__build 16px ink-2 with "Build:" in 600 ink
EXTRAS: grid 1.4fr 1fr 1fr gap 20px; cards radius var(--radius-l) padding 32px
  .extra--kgp bg var(--wine) color #fff; logo 56px white tile radius 12px; disclaimer 14px rgba(255,255,255,.72) (not 11px)
  .extra big number serif 500 clamp(44px,4.4vw,60px) maroon; fine print 14px ink-3
OUTCOMES (dark): bg var(--wine) + radial-gradient(60% 50% at 90% 0%, rgba(153,27,27,.5), transparent)
  .filters button: height 40px padding 0 16px radius 999px border 1px rgba(255,255,255,.24); [aria-selected=true] bg #fff color var(--wine)
  .rail: display grid; grid-auto-flow column; grid-auto-columns 300px (78vw <600); gap 16px; overflow-x auto; scroll-snap-type x mandatory;
     scrollbar-width none; padding-bottom 8px
  .story: bg var(--card); color var(--ink); radius var(--radius); overflow hidden; snap start
     photo aspect 4/3 object-fit cover top; type tag (absolute top 12px left 12px, 12px/600, bg rgba(255,255,255,.92));
     title serif 500 24px; meta 14px ink-2; figure value serif 500 32px maroon
  .disclaimer--light: 15px rgba(255,255,255,.78) (same size as story meta)
  .logos: white band (bg #fff), 2 marquee rows, logos height 32px grayscale opacity .6
MENTORS: advisors 2 cards (photo 88px radius 16px); .mentor-list grid 3 cols gap 12px 24px; row: 56px photo radius 14px + name 16px/600 + "role · company" 14px ink-3
PARENTS: grid 1fr 1.2fr; qa items: dt Inter 600 18px; dd 16px ink-2; each item padding 20px 0 border-top 1px var(--line)
  answer lead word ("Yes." / "No.") in 600 maroon. Quote card: serif italic 24px, bg var(--paper-2), radius var(--radius)
CAMPUSES: chips height 40px border 1px var(--line-strong) radius 999px; [aria-selected=true] bg var(--ink) color #fff
  cards grid 3 cols; photo aspect 4/3 radius var(--radius); h3 Inter 600 19px; meta 14px ink-3; tag "UGC recognised"/"Deemed to be University"
ADMISSIONS: grid 1fr 1.1fr; .steps counter list; each step padding 24px; border 1px var(--line); radius var(--radius); bg var(--card);
  numeral serif 500 40px maroon; connected by 2px dashed var(--line-strong) between cards (::after)
FAQ: tabs like chips; details summary Inter 600 19px; padding 22px 44px 22px 0; plus icon 28px circle rotates 45° on open
CTA FINAL: centred; h2 serif clamp(40px,6vw,76px) white, em amber; buttons amber + ghost-light
FOOTER: bg #1A0606; 4 columns; disclaimer 14px rgba(255,255,255,.62) (readable, not fine print)
MOBILE BAR (<760): fixed bottom; grid 1fr 1fr; padding 10px 16px + safe-area; bg rgba(251,246,239,.96); shows after hero
WHATSAPP FAB: 56px circle var(--wa), bottom 24px right 24px (bottom 88px when mobile bar visible)

7. INTERACTIVE ELEMENT LANGUAGE
Primary button rest: bg #991B1B, shadow 0 8px 20px -8px rgba(153,27,27,.55). Hover: bg #7F1717, translateY(-1px),
shadow 0 12px 24px -10px rgba(153,27,27,.6). Active: translateY(0). Focus-visible: outline 3px solid #FFB218, offset 3px.
No metallic/liquid-glass treatment (off-archetype).

8. MOTION
@keyframes rise { from {opacity:0; transform:translateY(18px)} to {opacity:1; transform:none} }
@keyframes line-up { from {transform:translateY(105%)} to {transform:none} }
Hero timeline (on load):
 | element         | animation | delay | duration |
 | .eyebrow        | rise      | 0ms   | 600ms |
 | h1 lines        | line-up   | 80ms + 90ms×i | 800ms |
 | .lede           | rise      | 320ms | 700ms |
 | .hero__ctas     | rise      | 420ms | 700ms |
 | .hero-media     | rise      | 200ms | 900ms |
 | .next-card      | rise      | 560ms | 800ms |
Section reveal: [data-reveal] → IntersectionObserver threshold .15, rootMargin 0 0 -8% 0 → add .is-in (rise 700ms var(--ease)).
Elements stay fully visible if JS fails (the hidden state only applies under html.js).
Stats count-up: 1200ms easeOutCubic, en-IN formatting, once.
Marquee: translateX(-50%) linear 60s infinite; pause on hover; disabled under reduced motion.

9. BREAKPOINTS
≤1024px: hero grid 1 col (visual below copy, max-width 560px); journey intro static; extras grid "1fr 1fr" with kgp spanning 2;
          mentor-list 2 cols; parents/admissions/faq grids 1 col; nav links hidden → menu button
≤760px:   --header 60px; body 16px; stats 2×2 (borders: odd cols no left border, row 2 border-top);
          equation stacks 1 col with operators rotated 0°, centred; how-points 1 col; extras 1 col; campus grid 1 col;
          .next-card position static, margin -40px 16px 0, width auto; buttons in hero 100% width; mobile bar on
≤380px:   .display 40px; .s-title 32px; gutter 16px

10. REDUCED MOTION
@media (prefers-reduced-motion:reduce){ *,*::before,*::after{animation:none!important;transition:none!important}
 html{scroll-behavior:auto} [data-reveal]{opacity:1!important;transform:none!important} .marquee__track{animation:none;flex-wrap:wrap} }

11. ACCEPTANCE CRITERIA
1. First viewport at 390×844 shows the eyebrow, headline, lede, a full-width "Apply for NAT" and the reassurance line. No photo above the fold.
2. At 1440×900 the hero shows copy left, photo right with the next-steps card overlapping its bottom-left corner.
3. The header is the only sticky element on desktop. On mobile the bottom bar appears only after the hero leaves view.
4. No horizontal page scroll at 360, 390, 768, 1024 or 1440px.
5. Every outcome claim has a disclaimer at the same or larger size than its meta text, within the same section.
6. Outcome filters change the visible cards. Prev/next buttons work, and are disabled at the ends.
7. Campus chips filter cards; a state without a featured card shows the empty-state line with a link.
8. FAQ tabs switch panels with arrow keys (WAI-ARIA tabs).
9. All text passes 4.5:1 contrast; all interactive targets are ≥44px tall; focus rings are visible, not hidden by sticky bars.
10. With reduced motion, everything is visible immediately and nothing moves.
```

---

## Asset brief: campus film (future swap for HERO_ASSET_URL)

```
Video brief: hero background / hero panel loop
Subject: real NIATians on a partner campus. Hands on a robot chassis, a laptop running a model, a team at a whiteboard,
a demo-day handshake. Real students and real labs only (ASCI: campus imagery must be genuine). No actors, no AI-generated people.
Mood & palette: warm daylight interiors; wardrobe and props that sit near maroon #991B1B, amber #FFB218 and cream #FBF6EF;
avoid blue-dominant labs (competitors own blue).
Camera: slow push-in or lateral dolly at walking pace; one shot per subject; no whip pans.
Duration & loop: 16–20 s, seamless loop (last frame dissolves into first); export 1080×1350 (4:5) and 1920×1080; H.264 ≤ 3 MB.
Composition: the subject sits in the upper two-thirds; keep the bottom-left 35% quiet, because the next-steps card overlaps it.
Exclude: baked-in text, logos as overlays, fast motion, flashing lights, hard cuts.
Swap note: drop the file into HERO_VIDEO_URL and switch the hero markup to the <video> branch in section 3. Nothing else changes.
To phrase this for a specific video model (e.g. Seedance), use the higgsfield-seedance-prompt skill. For a real shoot, hand this brief to the camera team.
```
