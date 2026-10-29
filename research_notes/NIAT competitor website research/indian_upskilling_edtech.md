# Indian upskilling and work-integrated degree competitors: home page teardown (Kalvium, Masai, Sunstone)

**Method and date.** All three home pages loaded on 2026-10-29. I rendered each one with headless Chromium (Playwright) at 1440×900 desktop and 390×844 mobile (iPhone UA), scrolled it fully to trigger lazy content, and extracted:
- the rendered text and the H1–H3 outline
- computed colours and fonts (`getComputedStyle` counts across all visible elements)
- `:root` CSS variables
- image alt text in page order
- fixed and sticky elements
- third-party scripts and iframes
- full-page and mobile screenshots

Colour values marked "computed" are exact rendered values converted from rgb(). Values marked "CSS var" come from the site's own `:root` tokens. Nothing here is estimated unless marked as an estimate.

For comparison I captured niatindia.com the same way on the same day.

No substitutes were needed because all three target sites were reachable. **Masai, however, has repositioned away from the 4-year UG / work-integrated degree space.** Its home page is now a marketplace for IIT/IIM certification programs plus "LEAP" cohorts. That makes it a weaker direct comparison for NIAT than Kalvium or Sunstone.

Sources used throughout:
- Kalvium: [kalvium.com](https://kalvium.com/)
- Masai: [masaischool.com](https://www.masaischool.com/)
- Sunstone: [sunstone.in](https://sunstone.in/)
- NIAT: [niatindia.com](https://www.niatindia.com/)

---

## 1. Hero: headline, subheadline, media, CTAs

### Takeaway
The three heroes take different approaches:
- **Kalvium:** the most brand-led. A red highlighter-box headline, a striking editorial illustration, and a scrolling "registrations opening" ticker.
- **Masai:** leads with a product carousel above the actual H1, on a black background.
- **Sunstone:** the most conversion-led. A navy banner with three stats docked into the fold and a "Talk To Our Counsellor" CTA.

Every site keeps the hero to one headline, one subline and at most two CTAs.

### Cited Findings

**Kalvium**
- **Headline (verbatim):** "Powering Next-Gen" sits in a solid red box with white text. "AI-native Software Professionals" follows in black on the next line. — [Kalvium](https://kalvium.com/)
- **Subheadline:** "Rigorous. Practical. For students who choose challenge over comfort." — [Kalvium](https://kalvium.com/)
- **CTAs:**
  - Primary: "Register Now" (solid red)
  - Secondary: "Download Prospectus" (red outline)
  - Footnote directly under the buttons: "*Offered at UGC approved Universities." — [Kalvium](https://kalvium.com/)
- **Hero media:** a single right-side image (`Hero-Section-v02.webp`). It shows a classical marble philosopher (Socrates/Rodin "Thinker"-style), dressed in a red robe, working on a laptop, overlaid with thin red geometric construction lines and circles. The left background carries faint grey circuit-trace line art. On mobile the image stacks below the CTAs. — [Kalvium](https://kalvium.com/)
- **Above the hero:**
  - A dark (#222) full-width marquee repeats: "Registrations to join Kalvium's work-integrated upskilling program for the Enrolment Year 2027-28, are opening shortly."
  - The sticky header holds only the logo, "Reviews", the phone number "+91 9483 200 300" and a "Register Now" button. There is no full navigation menu. — [Kalvium](https://kalvium.com/)
- **Directly below the hero:** a dark band, "Designed with tech leaders from", with a logo carousel. Logos by alt text: CRED, Bajaj Finserv, Amazon, Zerodha, Tata 1MG, Rapido, PhonePe, Google, Microsoft, Jio, Ola. — [Kalvium](https://kalvium.com/)
- **Headings and SEO:**
  - The page has no `<h1>`; the hero headline is an H2.
  - Hidden legacy H2s remain in the DOM: " B.Tech in Computer Science Engineering for doers" and " India's #1 Work-integrated B.Tech in CSE for doers".
  - The visible copy now says "work-integrated upskilling" throughout.
  - The meta title is "Kalvium | Work-integrated Upskilling, offered at top universities". — [Kalvium](https://kalvium.com/)

**Masai**
- **Above the H1:** a rounded, full-width image carousel on a black page (4 dots) promotes "LEAP by Masai" cohorts.
  - Slide 1: "Founders Cohort - Goa" / "For Founders at an idea or an MVP stage. It concludes with a pitch to investors on the Demo Day." Chips: Goa · 6 weeks online · Bangalore. CTA "Explore Now →".
  - Other slides: "AI Forward Deployed Engineer"; "AI Residency: Beyond Vibe Coding"; and an "ADMISSIONS CLOSING SOON" slide for "Pay After Placement Certification Programme in Business Analytics With AI" (MICA certificate). — [Masai](https://www.masaischool.com/)
- **H1 (verbatim):** "Your AI Powered Future, Starts at Masai". It is centred, white, Poppins 62px/700. — [Masai](https://www.masaischool.com/)
- **Subheadline:** "India's Top Job-Ready Certification Platform" — [Masai](https://www.masaischool.com/)
- **CTA:** a single red pill, "Explore Now →". There is no secondary CTA. The header has "Login / Sign up" as a red pill. — [Masai](https://www.masaischool.com/)
- **Header navigation:** "Our Courses ▾" (white pill), For Students, For Graduates, For Professionals, Masai Live (NEW badge), MIT UAI (NEW badge), Masai Business. — [Masai](https://www.masaischool.com/)
- **Hero background:** black with a receding perspective grid in faint red lines and a red glow at the bottom edge. — [Masai](https://www.masaischool.com/)
- **Mobile:** a sticky bottom bar with a full-width red "Start Learning →" button. — [Masai](https://www.masaischool.com/)

**Sunstone**
- **Headline (verbatim):** "New-Age UG & PG Programs for the Jobs of 2030", in gold/sand text on a navy banner. — [Sunstone](https://sunstone.in/)
- **Subheadline:** "Across India's Top Campuses" — [Sunstone](https://sunstone.in/)
- **Hero media:** a cut-out photo of a young Indian man with a laptop, surrounded by floating tech icons (code, cloud, chart, shield, brain, graduation cap), on a navy background. It is a stock/3D-composite style. — [Sunstone](https://sunstone.in/)
- **Stat strip:** a white card overlaps the bottom edge of the hero with three stats:
  - "26 LPA Highest Salary"
  - "1200+ Total Recruiters"
  - "7,500+ Students Placed"
  - The CTA "Talk To Our Counsellor" (navy) sits in the same card. — [Sunstone](https://sunstone.in/)
- **Header:** logo, Programs ▾, Partner Campuses, About Us, a hamburger, a phone icon and "Apply Now" (navy). — [Sunstone](https://sunstone.in/)
- **Mobile:** a sticky bottom bar with "Chat With Us" (WhatsApp icon) and "Check Eligibility". — [Sunstone](https://sunstone.in/)

**NIAT, for reference (same-day capture)**
- **Hero copy:** "Start Your Journey in" with rotating words "AI/ML / Robotics / Data Science & More". Below it, "INDUSTRY-READY Upskilling" and "OFFERED AT 35+ UGC approved Institutions". — [NIAT](https://www.niatindia.com/)
- **CTAs:** "Apply Now" and "Download Brochure"; a floating WhatsApp button appears on mobile. — [NIAT](https://www.niatindia.com/)

### Inferences
- Kalvium's hero is the most distinctive brand asset in the category. The single strong metaphor (classical thinker + laptop = rigour + modernity), the red highlight-box typography and the challenge-framed tagline make it work. NIAT's rotating-word hero is generic by comparison.
- Sunstone's "stats docked into the hero" card is the most efficient proof-at-first-glance pattern. NIAT has stronger stats but places them in the section after the hero.
- Kalvium and Sunstone both avoid an `<h1>` (an SEO weakness). Masai uses many H1s. NIAT's redesign can win on basic semantic structure.
- Kalvium's hidden "India's #1 Work-integrated B.Tech" headings suggest it recently rewrote copy from "B.Tech" to "upskilling program". That would match the compliance posture NIAT also adopts.

### Gaps
- Kalvium's logo carousel did not render image text in the first viewport. The logo list comes from alt text, which was reliable.
- Masai's carousel slide order rotates, so which slide shows first varies by visit.

---

## 2. Information architecture (top to bottom)

### Takeaway
Kalvium has by far the longest page (≈15,250px at 1440 wide). It is organised as a narrative about pedagogy and rigour, with proof light and late.

Masai (≈7,650px) and Sunstone (≈6,650–9,700px depending on lazy load) are shorter, catalogue- and conversion-oriented pages.

NIAT (≈20,500px) is the longest of all.

### Cited Findings

**Kalvium section order** — [Kalvium](https://kalvium.com/)
1. Sticky slim header (logo, Reviews, phone, Register Now)
2. Dark marquee ticker ("Registrations … 2027-28 … opening shortly")
3. Hero (red-box headline, philosopher illustration, Register Now / Download Prospectus, UGC footnote)
4. "Designed with tech leaders from" company-logo carousel (dark band)
5. "Kalvium Students **Learn Differently**": 3 tall greyscale video cards with play buttons. Names Angel, Nehda and Prahlad sit in red name-bars, with overlay hooks such as "My Biology background didn't stop me from BECOMING A CODER.", "Rejections didn't end my journey, THEY BUILT MY SKILLS." and "I started with zero experience and STILL MADE IT INTO TECH." (7 "Play" buttons total on page)
6. "Start early with **Work-integrated** Learning": a 2×2 red card grid (Simulated Work / Internship / Open Source Projects / Entrepreneurship), followed by "Real-world exposure from Semester 3"
7. "Register for a 1:1 Session" banner (dark, with "Meet your academic advisor…", CTA "Register")
8. "You **build** something new / Every. Single. Day.": tabs for languages and tech stacks with photos; then "NO THEORY - LAB SPLIT" and "Learn it. Build it. Same session."
9. "HEROS: Higher Education Real-Time Operating System": a red/dark band with a 3D logo and 4 feature tiles
10. "Live Books - Curriculum that evolves" (red card)
11. "Daily coding practice, with DOJO" (belt tests)
12. "Autonomous **Learning**"
13. "How is Kalvium **different**": a comparison table of 7 criteria (With Kalvium in a red column vs Others)
14. "Student Success Report" download banner (dark, CTA "Download Report")
15. "Show what you build, **not just** what you know": project showcase (e.g. "WasteX – Turning Trash into Treasure" video tile)
16. "**Turn pro early** - while still in college" (professional traits, classroom-as-dev-workspace)
17. "Meet the humans of Kalvium" (CTA "View Student Stories")
18. "Discipline is the only path to **excellence**" ("6 days a week. It's hard work. That's why it works." / "Zero tolerance to plagiarism…" / video tile "What rigour looks like")
19. "Learn with diverse peers who **think like you**" (community, mentoring juniors, video)
20. "Offered at UGC-approved universities": university photo carousel (dark band)
21. "How to **join**": 4 steps
22. "Register for a 1:1 Session" (repeat)
23. "Kalvium in the **news**": 3–4 news cards
24. "Ideas, insights, and guides for **tech professionals**": blog carousel
25. Disclaimer box, then footer (HQ address, Company / Enrollments / Contact / Social)

**Masai section order** — [Masai](https://www.masaischool.com/)
1. Header: logo, Our Courses ▾, segment links, NEW badges, Login / Sign up
2. LEAP / promo carousel (image cards with chips and "Explore Now")
3. H1, subline and "Explore Now"
4. Three dark stat cards (40,000+ / 10,000+ / 16+), with avatar or institute-logo clusters
5. Institute logo strip (white band)
6. "Popular & Trending Courses": a 3×2 grid of course cards with campus photo, institute logo badge, title, duration, mode and "Batch Starts on <date>"
7. "Find the right program for you / Choose Your Area of Interest": 9 category tiles with 3D icons and course counts
8. "Choose from the best institutes of India": a tabbed institute switcher (sticky tab bar on desktop) with a campus hero and red program cards
9. "Be A Part Of Our Thriving Community": a photo strip of cohorts
10. "Shaping Success Stories Since 2019 / Your Goal. Our Mission": a stacked-card testimonial carousel (long text stories)
11. "Why AI & Why Now?": a masonry of third-party report cards (McKinsey, Adobe, Stanford HAI, Grand View) with big red stat tiles (65%, 35.9%)
12. "Masai In Spotlight": a red band with a Disney+ Hotstar "Indian Edtech Story" video and 3 press cards (The Week, Moneycontrol, CNBC)
13. Black footer with a full "Institute Partners" list

**Sunstone section order** — [Sunstone](https://sunstone.in/)
1. Sticky header
2. Navy hero with docked stat-plus-counsellor card
3. "Your Dream Career Starts with the Right Program": a 3D grad-cap illustration plus 3 gold bars ("AI-Integrated Learning", "Future-Ready Curriculum", "5+ Career Tracks & Specializations"), then program chips (MBA, MCA, BBA, BCA, B.Tech) and "Check Eligibility"
4. Image banner "Real outcomes, delivered across top campuses in India."
5. Image banner "INTERIM PLACEMENT REPORT 2026" with "View Full Report"
6. Bright-blue band "Book your guided college tour instantly" with "Explore College"
7. "New Age UG and PG Colleges in India": program filter chips plus a horizontally scrolling campus-card carousel, with "View All Colleges" and "Create Shortlist (0)"
8. "Learn from Industry Experts": a faculty headshot grid with "10+ Industry Experts" and "30+ Expert Sessions"
9. "Explore career opportunities with 1,200+ recruiters": a logo grid
10. "Awards and Recognition": an award-badge carousel
11. "Our Success Stories": YouTube embeds (3)
12. "Recruiter's Speak – Industry ready students, it's a real delight": an HR testimonial carousel
13. "Life at Sunstone": a gallery
14. Gold band "Take charge of your education" (fees/EMI/scholarship)
15. Navy band "Simplify Your Student Journey with the Sunstone App" (Play Store / App Store)
16. "Our Media Presence": press-card carousel
17. Navy "Enter a world of Possibilities" with a lead form
18. FAQ accordion (8 SEO-style questions)
19. Site map, "Download Placement Report", footer

### Inferences
- Kalvium sells a learning philosophy: pedagogy systems (HEROS, Live Books, DOJO) and rigour. Masai sells a catalogue. Sunstone sells campuses plus placement.
- NIAT's page is a hybrid of all three and is longer than any of them. A redesign could borrow:
  - Kalvium's named-system storytelling and two-colour highlight headings
  - Sunstone's filterable campus cards with fee and approval badges, plus "Create Shortlist"
  - Masai's area-of-interest tiles

### Gaps
- Sunstone's height varies between captures (6,655px vs 9,725px) because sections lazy-load. The order above comes from the fully loaded screenshot.

---

## 3. Proof: stats, placements, mentors, logos, stories, media

### Takeaway
Proof styles differ sharply:
- **Kalvium** shows almost no numeric outcome claims on its home page (no LPA, no placement %). It relies on video student stories, company logos for "designed with", UGC university logos, a downloadable "Student Success Report", and news (including a Ministry of Education recognition).
- **Sunstone** is stat-heavy, with highest, average and placed figures and an interim placement report.
- **Masai** uses scale stats plus long-form "rags-to-SDE" text stories and press.

### Cited Findings

**Kalvium** — [Kalvium](https://kalvium.com/)
- No salary or placement numbers appear anywhere on the home page.
- **Proof devices:**
  - "Designed with tech leaders from" logo carousel (CRED, Bajaj Finserv, Amazon, Zerodha, Tata 1MG, Rapido, PhonePe, Google, Microsoft, Jio, Ola)
  - Student video cards with first-person overlay hooks
  - A "Student Success Report" gated download ("See how Kalvium students grow – skills, projects, internships, outcomes, and more.")
  - "Meet the humans of Kalvium"
  - Blog story cards (e.g. "Yagna Taught Himself Python at 14. Here's What He's Building Now.")
- **University partners in the carousels (alt text):** AMET, JECRC University, Kalasalingam, LPU, Yenepoya (Mangalore and Bengaluru), St Joseph's University Chennai, SRM University AP, SGT University, Alliance, Chitkara, Christ University, Manipal University Jaipur, MIT-ADT, NICHE, RV University, SRM Trichy, Takshashila, The Apollo University, VELS.
- **News cards:**
  - "Kalvium at Bharat Bodhan AI Conclave 2026": "HEROS has been recognised as one of the top AI innovations in higher education by the Ministry of Education…"
  - "Kalvium Students Win at Smart India Hackathon 2025"
  - "Kalvium Partners with nasscom at Future Forge 2025"
  - "Kalvium Leads Conversation with 150+ Education and Industry Leaders"
- Third-party listings (not Kalvium's site) cite "82% placed, median CTC 16.5 LPA, highest 36 LPA" — [CollegeDekho](https://www.collegedekho.com/colleges/kalvium). This is unverified and does not appear on the home page.

**Masai** — [Masai](https://www.masaischool.com/)
- **Stat cards:**
  - "40,000+ Active Learners Accelerating Their Careers"
  - "10,000+ Masai Graduates Placed in Top Companies"
  - "16+ Institutes of National Importance such as IITs, IIMs, XLRI & BITS"
- **Institute logos:** a strip plus a tabbed switcher covering Vishlesan i-Hub IIT Patna, E&ICT Academy IIT Roorkee, iHUB Anubhuti IIITD, BITSoM, IIM Ranchi/Lucknow/Trichy/Mumbai/Rohtak/Sirmaur, IITM Pravartak, MICA, MIT Open Learning, SPJIMR, Rotman, XLRI, PwC Academy and others.
- **Testimonials:** 5 long-paragraph text stories with photo, name and transformation line, e.g.:
  - "Swiggy Delivery Partner to SDE1 at Swiggy" (Aman Kashyap)
  - "Workshop Trainee to SDE 2 at Sharechat" (Mohammed Hassan)
  - "Fresher to SDE1 at LogWinTech Pvt. Ltd." (Mayuri Samanta)
- **Press ("Masai In Spotlight"):**
  - "Masai Sees 300% Increase In Student Placement Amid Market Jitters"
  - "JobTech Startup Masai School Raises $10 Million In Series B"
  - "Masai School targets five-fold revenue growth in three years"
  - A Disney+ Hotstar "Indian Edtech Story" video
- **Market-context proof:** "Why AI & Why Now?" cites McKinsey, Adobe, Stanford HAI and Grand View Research ("65%", "35.9% Global Market CAGR 2025-2030").
- **Independent scrutiny:** one 2026 analysis says Masai's IIT/IIM partnership breadth and its 40,000-learner and placement claims could not be independently verified — [Fueler review](https://fueler.io/blog/masai-school-review-fees-placements-courses-and-roi); [Masai PAP analysis](https://deepaksood619.github.io/education/competitors/job-platforms/masai-school-analysis). These are secondary blog sources and should be treated cautiously.

**Sunstone** — [Sunstone](https://sunstone.in/)
- **Hero card:** "26 LPA Highest Salary", "1200+ Total Recruiters", "7,500+ Students Placed".
- **"Real outcomes" banner:** "₹26 LPA Highest Package", "20+ Partner campus", "1,200+ Recruiters Network", "20,000+ Student Community", and a gold strip: "Get 200+ placement opportunities or your 1st year fee back*" (labelled "Placement Opportunity Program").
- **"INTERIM PLACEMENT REPORT 2026" banner:**
  - "2,000+ Students Participated in the Ongoing Placement Season"
  - "16.5 LPA Highest CTC", "8 LPA Average CTC (Top 20% Batch)", "1,100+ Job Opportunities"
  - Recruiter logos: Blinkit, TCS, Flipkart, Zomato, Zepto, Lenskart
  - Footnote: "*Placement season is ongoing. The Final Placement Report will be published in December 2026."
- **Note the internal inconsistency:** 26 LPA is shown in the hero while the 2026 interim report shows 16.5 LPA highest.
- **Recruiter grid (alt text):** Amazon, IndiaMart, Paytm, Axis Bank, Genpact, TCS, PhonePe, Infosys, SBI, Bajaj Finserv, Zepto, PropertyPistol, Vodafone Idea, Shoppers Stop, IndusInd Bank, HDFC Bank.
- **Faculty:** "Learn from Industry Experts" headshot grid; "10+ Industry Experts", "30+ Expert Sessions".
- **Awards carousel:** "Edtech Company of the Year", "Best Placements Award", "100 Most Promising SouthAsia Edtech Startups", "Leading Innovation in AI-Powered Learning" and others.
- **Stories:** 3 YouTube video embeds plus a "Recruiter's Speak" carousel (e.g. Rishu Garg, CHRO, Zivame).
- **Media logos:** The Pioneer, India Today, ABP Live, The Statesman, The Hindu.

**NIAT, for comparison** — [NIAT](https://www.niatindia.com/)
- **Stats:** "1200+ AI-powered Projects Built", "100+ Startups Launched", "200+ NIATians Secured Internships with Stipends", "2500+ Companies Hired from Us"
- **Placements:** a "Top Placements By NxtWave" carousel (80 LPA, 57 LPA…), with disclaimers
- **Mentors:** a mentor grid
- **Advisors:** Dr. SS Mantha, Dr. Sandeep Sancheti

### Inferences
- Kalvium shows that a premium "rigour" brand can run a home page with almost no salary numbers, gating outcomes behind a downloadable report. NIAT's ₹80 LPA headline plus disclaimers is the opposite strategy. It is more persuasive to price-sensitive parents but carries more credibility and regulatory risk.
- Sunstone's "Interim Placement Report 2026" framing (cohort size, average of top 20%, a date for the final report) is a more transparent-looking device than one-off highest-package cards. NIAT could adopt a dated, cohort-scoped outcomes card.
- Masai's "Why AI & Why Now?" third-party data section is a borrowed-authority device that NIAT does not use.

### Gaps
- Kalvium's Student Success Report contents were not opened, because it is gated.
- Sunstone's video testimonials and Life-at-Sunstone tiles rendered as grey placeholders in the headless capture, so their content was not read.

---

## 4. Admissions funnel: tests, steps, fees, urgency, counselling, forms, chat, sticky bars

### Takeaway
- **Kalvium** runs a selective, test-gated funnel (KNET psychometric plus aptitude, then an in-person interview), with no fees on the home page. The urgency is a ticker, not countdowns.
- **Sunstone** runs an aggressive lead-capture funnel: counsellor CTA, eligibility check, college-tour booking, an inline callback form, a WhatsApp chat sticky bar, EMI and scholarship messaging, and a fee-back guarantee.
- **Masai** pushes course-catalogue browsing, with batch dates and "Admissions closing soon".

### Cited Findings

**Kalvium** — [Kalvium](https://kalvium.com/)
- **"How to join":**
  - "Step 1 Sign up on Kalvium's registration portal"
  - "Step 2 Take the KNET psychometric test & the KNET aptitude test"
  - "Step 3 Attend an in-person interview at a nearby centre"
  - "Step 4 Confirm your enrolment"
- **Counselling:** "Register for a 1:1 Session" banners appear twice ("Meet your academic advisor…").
- **Header and footer:** a phone number in the header. Footer links include "Enrolment Process 2027", "Register for KNET" and "Aspirant login".
- **Not present on the home page:** fees, forms, chat widget and mobile sticky bar. Lead capture happens off-page on the registration portal.
- **Urgency:** the marquee "Registrations … for the Enrolment Year 2027-28, are opening shortly."
- **Fees (third-party, not on Kalvium's site):** annual fees of roughly ₹2.2–4.6 lakh, varying by partner university; other listings show ₹8–14 lakh total — [CollegeDekho](https://www.collegedekho.com/colleges/kalvium). These figures conflict and are unverified.

**Masai** — [Masai](https://www.masaischool.com/)
- **Course cards:** "Batch Starts on 20 Jan 2027" / "21 Nov 2026" / "29 Nov 2026", plus duration ("06 months") and mode ("Online").
- **Urgency:** an "ADMISSIONS CLOSING SOON" carousel slide. One card shows "Qualifier Test Date 01 Nov 2026".
- **CTAs and widgets:** "Login / Sign up" in the header and a mobile sticky "Start Learning →". There is no form and no visible chat widget.
- **Fees:** none shown on the home page.
- **Pay After Placement:** surfaces only for the MICA Business Analytics slide. Masai's PAP terms have shifted toward prepaid; a 2026 analysis describes the remaining PAP as "₹0 upfront, ₹3.5 LPA trigger, 30-36 months" — [Masai PAP analysis](https://deepaksood619.github.io/education/competitors/job-platforms/masai-school-analysis); [Inc42](https://inc42.com/startups/masai-school-tactical-shift-trebles-topline-100-crore-revenue).

**Sunstone** — [Sunstone](https://sunstone.in/)
- **CTAs, in order:**
  - Header "Apply Now"
  - Hero "Talk To Our Counsellor"
  - "Check Eligibility" (after the program chips)
  - "Explore College" ("Book your guided college tour instantly")
  - Campus cards: "Grab a chance to Book College Tour"
  - "View All Colleges" / "Create Shortlist (0)"
  - Fee band: "Check Eligibility Now"
  - Form: "Request A Call Back"
  - Footer: "Download Placement Report"
- **Campus cards show fees and approvals**, e.g.:
  - "Ajeenkya DY Patil University, Pune · MBA, MCA, BCA | UGC recognised · 0% EMI available · Total Fees ₹ 4.20 - 7.00 Lacs"
  - "Rayat Bahra University, Mohali … ₹ 2.55 - 5.10 Lacs"
  - "SAGE University, Bhopal … AICTE approved … ₹ 2.40 - 4.40 Lacs"
- **Fee band "Take charge of your education":**
  - "Pay the college fee and a nominal amount to unlock your dream job with Sunstone."
  - "0 Cost EMI available"
  - "Up to 100% scholarship available"
  - "Get 200+ assured opportunities with Placement Opportunity Program"
  - "*Terms & conditions apply"
- **Inline lead form** ("Enter a world of Possibilities"): Full Name, Mobile Number, "I want to pursue" (MBA/PGDM, MCA, BBA, BCA, B.E/B.Tech), State, City, "Request A Call Back".
- **Mobile sticky bar:** "Chat With Us" (WhatsApp) plus "Check Eligibility".
- **Third-party scripts:**
  - MoEngage (engagement and push)
  - GetSiteControl (pop-ups)
  - Cashfree payments SDK (on-page payment capability)
  - Taboola, Meta and Bing pixels
  - Microsoft Clarity
- **App promotion:** "Simplify Your Student Journey with the Sunstone App".
- **Placement Opportunity Program refund terms vary by page:**
  - The Rayat Bahra campus page says 100% refund of first-year tuition if 200+ opportunities aren't provided.
  - Older Sunstone messaging was "Get Placed or Get 100% Fee Back".
  - — [Sunstone Rayat Bahra page](https://sunstone.in/campuses/rayat-bahra-university); [The Week wire](https://www.theweek.in/wire-updates/business/2024/07/27/dcm2-sunstone.html)

**NIAT, for comparison** — [NIAT](https://www.niatindia.com/)
- NAT Application in the navigation
- "71 Slots Booked in the last 2 Hours" urgency on "Speak Directly with NIATians – Book Your Slot"
- WhatsApp floating button
- Apply Now / Download Brochure

### Inferences
- Sunstone's campus cards (fees range, UGC/AICTE badge, EMI, "Book College Tour", favourite heart, shortlist counter) are the strongest pattern for NIAT's "35+ institutions" story. NIAT's current institution cards show only name, city and "UGC Recognised".
- Kalvium's visible 4-step "How to join" with a named test (KNET) and in-person interview signals selectivity. NIAT's NAT could get the same treatment (steps plus dates) instead of only a nav link.
- Kalvium avoids fake-feeling urgency counters. NIAT's "71 Slots Booked in the last 2 Hours" is the kind of device premium competitors avoid.

### Gaps
- Kalvium's enrolment and FAQ URLs that I guessed returned 404, so KNET dates and fees were not confirmed from Kalvium's own pages.
- The exact Sunstone POP terms and conditions document was not retrieved.

---

## 5. Visual direction: palette, type, motion, density, photography, theme

### Takeaway
- **Kalvium:** red, warm grey and charcoal, with Figtree type. A bold editorial style using red highlight-box words in headings and greyscale photos with red name-bars.
- **Masai:** a black hero turning into white/pink, with crimson accents and Poppins. A startup-SaaS style with glow grids.
- **Sunstone:** navy and gold, Public Sans, an institutional look.

None of the three uses NIAT's maroon/amber, but Sunstone's navy/gold is the closest in "heritage institution" tone.

### Cited Findings

**Kalvium** (WordPress / Elementor build) — [Kalvium](https://kalvium.com/)
- **Colours (computed):**
  - Primary red #EF3837 (rgb 239,56,55): the most common coloured background
  - Darker reds #CF2524 / #CD201F (hover/pressed)
  - Pink-red text accent #CC3366 (rgb 204,51,102)
  - Warm grey section background #EAE5E5
  - Charcoal bands #222222
  - Body text #333333
  - Tints #FEF2F2 / #F6E8E8
- **Fonts (computed):** Figtree for headings and UI (325 elements); the system UI stack for body text.
- **Motion:**
  - Marquee news ticker
  - Swiper carousels (logos, universities, news, blogs)
  - "animated-text" spans with a typewriter script
  - A Lottie module referenced
- **Photography:** real students in greyscale with red overlays and red name-bars; candid classroom and hackathon photos.
- **Signature typographic device:** a key word in a solid red box ("Learn **Differently**", "**Work-integrated**", "**build**", "**different**", "**join**", "**news**").
- **Theme:** light, with alternating dark-charcoal and red bands. Density is medium; it has lots of sections but each is sparse.

**Masai** (Astro + Tailwind build) — [Masai](https://www.masaischool.com/)
- **Colours (computed):**
  - Crimson #ED0331 (rgb 237,3,49) for CTAs and highlights
  - #AF322D
  - Near-black hero #0A0103
  - Pink tint #F3DEDE
  - #F6EDE7
  - Text oklch(0.21…) ≈ near-black
- **Font:** Poppins throughout; the H1 is 62px/700.
- **Visuals:**
  - Black hero with a red perspective grid and bottom glow
  - Rounded image-card carousel with glassy chips
  - 3D icon set for categories
  - Pink radial gradient washes behind white sections
  - A red band for press
- **Photography:** real campus photos (IIT/IIM buildings) on course cards, cohort group photos, and destination photography (Goa, Sri Lanka) for LEAP.
- **Theme:** dark hero, then light body, then black footer.

**Sunstone** (Next.js; design tokens in `:root`) — [Sunstone](https://sunstone.in/)
- **Colours (CSS vars):**
  - `--color-primary: #223668` (navy)
  - `--color-primary-dark: #16254b`
  - `--color-primary-4: #151f38`
  - `--color-primary-5: #405791`
  - `--color-secondary: #c88c32` (gold/amber)
  - `--color-secondary-2: #dec8a0`
  - `--color-secondary-3: #f2e8d9`
  - `--color-primary-3: #f5f6fa` (light background)
  - Plus a bright blue band (#0077BE computed)
- **Type:** "Public Sans"; the button token is 14px/600 with 4px radius.
- **Visuals:**
  - Navy hero with a cut-out model and floating icons
  - 3D grad-cap render
  - Gold bars
  - Image-based promo banners (text baked into images)
  - Campus photography on cards
- **Theme:** light with navy and gold bands. Density is high and commercial; it reads like an aggregator.

**NIAT (computed)** — [NIAT](https://www.niatindia.com/)
- **Colours:** maroon #991B1B, #7F1D1D, accent #B50D46; light backgrounds #FBF2F3 and #FEF7F1; dark #231E1C.
- **Fonts:** Satoshi (headings, H1 32px/700) and Inter, with stray Cormorant Garamond, Plus Jakarta Sans and Poppins instances.

### Inferences
- Kalvium's single-accent discipline (one red, one grey, one charcoal, one typeface) gives it the most coherent brand of the set.
- NIAT's capture shows five font families. Consolidating to two would immediately read as more premium.
- Sunstone bakes key proof into images (the outcomes and interim report banners), which hurts accessibility, SEO and maintainability. NIAT should keep stats as live text.

### Gaps
- Kalvium's hero illustration and Masai's grid may include subtle motion (Lottie, CSS) that static screenshots don't capture. Motion was inferred from class and script names.

---

## 6. Trust and compliance: university disclosure, disclaimers, PAP/ISA

### Takeaway
- **Kalvium** has the clearest compliance posture: it explicitly says it is not a university, mentions UGC and AICTE norms, and puts a "UGC approved" footnote right under the hero CTAs.
- **Sunstone** shows per-campus UGC/AICTE badges and asterisked terms and conditions.
- **Masai** relies on institute logos, with its PAP history in testimonials.

### Cited Findings
- **Kalvium:**
  - Hero footnote: "*Offered at UGC approved Universities."
  - Under "How to join": "Disclaimer: The University will process your admission following its own established eligibility criteria and admission policies. Note: The admission is solely at the discretion of the university as per UGC and AICTE norms."
  - Footer box: "Disclaimer: Kalvium is not a university or a degree-awarding body. Kalvium is an upskilling program. Admission into universities where the Kalvium's upskilling program is offered is solely at the discretion of the university based on its established admission policies."
  - Legal entity: "© KALVI CAREER EDUCATION PRIVATE LIMITED"
  - — [Kalvium](https://kalvium.com/)
- **Sunstone:**
  - Campus cards label each campus "UGC recognised" or "AICTE approved".
  - Placement and fee claims use "*" and "*Terms & conditions apply".
  - Interim report footnote: "*Placement season is ongoing. The Final Placement Report will be published in December 2026."
  - The footer has a "Grievance Redressal" and "Refund Policy".
  - "Highest Salary 26 LPA" in the hero carries no on-page qualifier (cohort, year).
  - The meta title claims "100% Placement Support".
  - — [Sunstone](https://sunstone.in/)
- **Masai:**
  - No outcome disclaimer is visible on the home page.
  - PAP/ISA appears in testimonials ("ISA, now Pay After Placement - PAP").
  - The footer links to "Student And Academic Policies".
  - Legal entity: "A Nolan Edutech Pvt Ltd Venture".
  - — [Masai](https://www.masaischool.com/)
- **NIAT:**
  - Disclaimers appear inline under the stats ("Outcomes are from multiple NxtWave programs…").
  - The IIT Kharagpur OCN disclaimer ("IIT Kharagpur does not award, co-award, or endorse any certification of NIAT…").
  - The placement disclaimer ("Enrollment in NIAT itself does not assure a job or internship…").
  - — [NIAT](https://www.niatindia.com/)

### Inferences
- NIAT's disclaimers are more extensive than any competitor's but are written defensively and at length, including a sentence that reads as patronising ("…a few students who might think that they can get a job/internship by just joining…"). Kalvium shows that one crisp "We are an upskilling program, not a university" line plus a short footnote under the CTA can do the compliance job with less friction.
- Sunstone's unqualified "26 LPA" hero stat next to a lower 16.5 LPA interim figure is a credibility gap. NIAT should avoid presenting a highest package without a cohort or year qualifier adjacent to it.

### Gaps
- No ISA or pay-after-placement terms are shown on any of the three home pages beyond the slogans quoted above.

---

## 7. What they do better and worse than niatindia.com

### Takeaway
- **Kalvium** beats NIAT on brand coherence, hero distinctiveness, pedagogy storytelling and compliance clarity, but under-delivers on outcome proof and conversion.
- **Sunstone** beats NIAT on campus discovery (filterable cards with fees, approvals, tours and shortlist), mobile sticky CTAs and the dated placement report, but looks generic and template-like.
- **Masai** beats NIAT on catalogue navigation and borrowed authority from press and market data, but is no longer a like-for-like UG competitor.

### Cited Findings and comparisons

**Kalvium is better at:**
- **A single bold idea in the hero.** The philosopher-with-laptop image and "challenge over comfort" tagline are distinctive.
- **Consistent red-box keyword typography** across ~15 section headings.
- **Named proprietary systems** (HEROS, Live Books, DOJO, Autonomous Learning) that make the method tangible.
- **A clear "How is Kalvium different" comparison table** (7 rows vs "Others").
- **An explicit 4-step admissions path** with a named test and interview.
- **Third-party credibility** from the Ministry of Education recognition news card.
- **A crisp "not a university" disclaimer.**
- — [Kalvium](https://kalvium.com/)

**Kalvium is worse at:**
- No hard outcome numbers on the home page.
- No fees.
- No mobile sticky CTA or chat.
- A very long, repetitive page (H2s duplicated for responsive variants).
- No `<h1>`.
- Hidden legacy "B.Tech" headings left in the DOM.
- — [Kalvium](https://kalvium.com/)

**Sunstone is better at:**
- Proof in the first viewport (a stat card docked to the hero).
- **Campus cards with fee range, UGC/AICTE badge, EMI, a tour CTA, a favourite button and "Create Shortlist"** (NIAT's comparable cards show only name, city and "UGC Recognised").
- A dated "Interim Placement Report 2026" with a promised final-report date.
- A two-button mobile sticky bar (Chat With Us / Check Eligibility).
- An inline lead form.
- Visible fee, EMI and scholarship reassurance.
- — [Sunstone](https://sunstone.in/)

**Sunstone is worse at:**
- Generic stock/3D imagery.
- Key stats baked into images.
- Inconsistent stats (26 vs 16.5 LPA).
- A cluttered CTA count (≈10 different CTAs).
- Aggregator feel with a weak brand voice.
- — [Sunstone](https://sunstone.in/)

**Masai is better at:**
- Course and area-of-interest navigation (9 category tiles with counts).
- Batch-start dates on every card.
- A press video (Disney+ Hotstar documentary).
- A third-party "Why AI & Why Now?" data section.
- A dark, high-contrast hero that feels contemporary.
- — [Masai](https://www.masaischool.com/)

**Masai is worse at:**
- A promo carousel placed above the H1 dilutes the hero.
- Long, unscannable testimonial paragraphs.
- No outcome disclaimers on the home page.
- Partnership breadth disputed by an independent analysis — [Masai PAP analysis](https://deepaksood619.github.io/education/competitors/job-platforms/masai-school-analysis).

**Where NIAT is ahead** — [NIAT](https://www.niatindia.com/):
- It has the richest outcomes of the group:
  - an 80 LPA highest package
  - ₹2.92 Crore in internship stipends
  - an OpenAI Academy × NxtWave Buildathon
  - an IIT Kharagpur OCN micro-specialisation
  - named advisors: ex-AICTE Chairman Dr. SS Mantha and Dr. Sandeep Sancheti
  - a 35+ institution footprint
- None of Kalvium, Sunstone or Masai has an IIT-linked credential for UG students or a former AICTE chair on the home page.

### Inferences
Recommendations for NIAT's redesign:
1. **Hero:** a Kalvium-style single brand idea and challenge-framed tagline, with a Sunstone-style docked stat strip (3 qualified stats) and a "UGC-approved institutions" footnote under the CTAs.
2. **NAT:** a visible "How to join" stepper.
3. **Institutions:** Sunstone-style filterable cards (state chips plus fee range, approval badge, "Book campus visit", shortlist).
4. **Outcomes:** a dated outcomes report card in place of standalone highest-package tiles.
5. **Pedagogy:** a named-system section, in the style of Kalvium's HEROS and DOJO.
6. **Mobile:** a sticky bottom bar (Apply / WhatsApp).
7. **Cleanup:** one consolidated disclaimer voice, two fonts, and maroon with a single amber accent used as consistently as Kalvium uses its red.

### Gaps
- Conversion performance data for any of these sites is not public, so "better" and "worse" are heuristic design judgements, not measured results.
- Coding Ninjas and upGrad degree pages were not reviewed because no substitution was needed.
