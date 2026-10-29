# Indian new-age tech schools: home page teardown (SST, NST, Polaris, Plaksha) vs NIAT

Method: each live home page was rendered on 29 Oct 2026 with Playwright/Chromium (1440×900, scrolled to the bottom so lazy sections load). I pulled the visible text, H1–H3 tags, CTA labels, computed fonts and colours, and `<video>`/`<iframe>` sources, and took hero and full-page screenshots. I also grepped the raw HTML for hex codes and compliance wording. Hex values marked "(CSS)" come from the page's own markup or computed styles. Anything marked "est." is my visual estimate.

Pages checked:
- SST: https://www.scaler.com/school-of-technology/ (+ /admission/)
- NST: https://www.newtonschool.co/newton-school-of-technology (+ /newton-school-of-technology-nst/admission)
- Polaris: https://www.polariscampus.com/ (+ /admissions)
- Plaksha: https://plaksha.edu.in/
- NIAT for comparison: https://www.niatindia.com/

## Hero: headline, subheadline, media, CTAs

### Takeaway
SST and Polaris lead with a big positioning claim ("India's Ivy League for the AI Age"; "India's only 4-year CS program built for Global careers"). NST leads with the product name ("B.Tech in CS & AI") and puts the exam date in the hero. All three run a status bar above the nav that creates urgency: "closed / waitlist / now open". Plaksha uses a plain institutional statement in a carousel. NIAT's hero ("Start Your Journey in ✦ …" / "INDUSTRY-READY Upskilling | OFFERED AT 35+ UGC approved Institutions") is the only one that leads with a soft verb and not a claim or a product.

### Cited Findings
**Scaler School of Technology (SST)**
- Title tag: "India's Ivy League for the AI Age | Scaler School of Technology"; the H1 is "India's Ivy League for the AI Age" — [SST](https://www.scaler.com/school-of-technology/)
- Subheadline, right-aligned opposite the H1: "Industry Integrated UG Programmes Built by 100+ leaders from" followed by a logo rotator. Primary CTA "Join Waitlist →" (solid blue). Secondary CTA "Explore Programmes ⌄" (white outline). Microcopy under the CTAs: "Application Closed for 2026 Batch" — [SST](https://www.scaler.com/school-of-technology/)
- Hero media: a full-bleed background video (framerusercontent.com mp4) under a grey-to-black gradient. The hero is followed by 4 overlapping feature cards: "Learn by Building – Future-proof curriculum with AI embedded from day one"; "Industry Led Innovation Lab – India's only deep tech lab for UG with funding support for startup"; "Bangalore – Fully residential Urban Campus in India's Silicon Valley"; "Talented Peers – In 2026, only the top 3.9% talented students were shortlisted." — [SST](https://www.scaler.com/school-of-technology/)
- Above the nav: a pastel-gradient banner reading "Application Closed for 2026 Batch", then a black utility bar (Our Students | Campus Tour | Hire from us | Events | Guide). Main nav: Home, Programmes, Admission & Fees, Degree, Outcomes, Campus Life, FAQs, plus "Login" and "Join Waitlist" buttons. A sticky in-page tab bar (Highlights / Programmes / Outcomes / Why SST / Our Team / CS-AI vs AI-B / Campus Life / Admissions / FAQs) and a floating blue phone-call button — [SST](https://www.scaler.com/school-of-technology/)

**Newton School of Technology (NST)**
- Title tag: "India's Best UG Program In Computer Science & AI". H1: "B.Tech in CS & AI". Subheadline: "At leading universities built for the AI era". Below that, keyword chips: "Computer Science ✦ Artificial Intelligence ✦ Machine Learning ✦ Data Science" — [NST](https://www.newtonschool.co/newton-school-of-technology)
- The hero has two data points: "COURSE DURATION 4 Years Residential" | "NSAT EXAM DATE 7 Jan, 2027". A recruiter logo marquee sits inside the hero (Swiggy, Zomato, PhonePe, Uber…). There is a single CTA, "Register For NSAT" (solid blue) — [NST](https://www.newtonschool.co/newton-school-of-technology)
- Hero media: a drone video of the campus (cloudfront mp4) in an inset rounded card with a dark left-side gradient, not full-bleed. The top green bar reads "Admissions are now open for the 2027 batch". Nav: Home, Admissions, Programs & Fees, Life With NST, Placements, Entrance Tests, More, Contact Us, plus an "Apply Now" button. Sub-nav: Apply to / Admission process / Faculty / News & Media — [NST](https://www.newtonschool.co/newton-school-of-technology)

**Polaris School of Technology (PST)**
- Title tag: "Polaris School of Technology - 4 Years Computer Science program in AI, PM & Cloud Engineering | Bangalore". Hero headline: "India's only 4-year CS program built for *Global careers*". "Global careers" is set in amber Playfair Display italic, the rest in a white sans. Sub-line: "Applied AI | Product Management | Cloud & Big Data" — [Polaris](https://www.polariscampus.com/)
- CTAs: primary "Apply for PAT" (amber-gradient pill) and secondary "Download Brochure" (outline pill with a download icon). The nav also has "Book Campus Tour" (dark pill) and "Apply Now" (amber pill). The top bar reads "Applications for 2026 are closed. New applications will be considered for the 2027 cohort." — [Polaris](https://www.polariscampus.com/)
- Hero media: a full-bleed photo of the campus building (DivyaSree Technopark tower, Bengaluru) with a bottom fade to black. No `<video>` element was found on the page. The full-page capture also shows a "Built in Partnership with Google, AWS & Microsoft" frame at the top, which suggests the hero rotates or animates between states — [Polaris](https://www.polariscampus.com/)

**Plaksha University (brief)**
- H1: "Technology university of the future". Sub: "Plaksha University is reimagining technology education and research for India and the world. It opened its door in 2021. Today it has 800 students and more than 50 faculty - across all academic programs and research centers." The hero is a photo carousel (campus building) with arrows, then a row of news cards. The only CTA is "APPLY NOW ⌄" in the teal utility bar. Teal utility links include "Public Self Disclosure" — [Plaksha](https://plaksha.edu.in/)

**NIAT (comparison, observed the same day)**
- Hero (inset rounded video card, hands-on-electronics footage): "Start Your Journey in ✦" (the word after "in" appears to rotate) / "INDUSTRY-READY Upskilling | OFFERED AT 35+ UGC approved Institutions". CTAs: "● Apply Now" (maroon) and "Download Brochure" (white). Also a floating "Chat with us" WhatsApp pill and a sticky in-page tab bar (Highlights, Collaborations, Outcomes, Life of NIATians, Mentors, Curriculum, Why NIAT, Contact, FAQs) — [NIAT](https://www.niatindia.com/)

### Inferences
- NST puts the most working information in the hero: what the program is, how long it lasts, the exam date, recruiters and one CTA. SST and Polaris put the most aspiration in it. NIAT's hero has the least specific claim and no date.
- The sticky in-page tab bar (SST, NIAT) is now a category convention. It is not a point of difference.
- A "batch status" bar is standard across all three competitors. NIAT has none above the nav.

### Gaps
- I could not confirm the word sequence in NIAT's rotating hero word or the full content of Polaris's possible hero carousel from a static capture.
- I did not inspect the mobile hero layouts.

## Information architecture (sections top to bottom)

### Takeaway
All three competitors run long pages (about 17–21k px at 1440 wide) with roughly the same arc: hero → hard outcomes → programmes → proof/stories → people → campus → admissions → news → FAQ. SST and NST put placement numbers immediately after the hero. Polaris puts programmes (3 tracks) first and saves numbers for later.

### Cited Findings
- **SST order:** status banner → hero + 4 feature cards → "PLACEMENT HIGHLIGHTS – Offers came in, before the placement season started." (₹44 L highest, ₹20.4 L avg, 76%, ₹33 L top-25%) → "COMPANIES ON CAMPUS TO HIRE" logos → "INTERNSHIP + PPO HIGHLIGHTS" (student photo cards) → "Internship Highlights Exceptional Results in just 2nd Year" + Anupam Mittal quote + "Download SST internship Report 2026" / "Audited by" → "Placements & the Degree Question at SST - Answered" (video) → "Stellar Career Prospects" (GSoC, 1200+ hiring partners, 10+ startups, Amitabh Kant quote) → "Explore Programmes" (CS & AI, AI & Business cards) → "HEADLINES FROM SST" carousel → "STORIES FROM THE BUILDERS AT SST" (11 story cards) → "SUPER MENTORS – Built & Delivered By 100+ Industry Leaders" → "What makes SST India's Ivy League for the AI Age" (01 Learn By Building, 02 Access To Industry Leaders, 03 Innovation Focus, 04 Talented Peers with admission funnel stats) → "Student Directory"/"Students who joined us leaving behind prestigious offers" → "Plan your next step with confidence" counsellor callback → "Meet the Team Behind SST" → "Choose Your Best Fit" comparison table → campus ("Our campus sits at the centre of India's startup capital: Bengaluru", Matterport 3D tour embed) → "Exclusive Free Events" → "How to join SST" (eligibility + 5 steps) → "IN THE NEWS" → Instagram/YouTube → FAQs → footer with disclaimer — [SST](https://www.scaler.com/school-of-technology/)
- **NST order:** green status bar → hero (with logo marquee) → "Companies hiring from us" + 4 stat tiles → "INTERNATIONAL TRIPS – NST Students, Going Global" (China/America/Thailand/Singapore/Germany tabs) → "EARLY PLACEMENT OUTCOMES" (₹20–50 L CTC, ₹23 L avg, 98.3%, "BATCH MOMENTUM… Live Tracking", scrolling student/company marquee) → "Internships and placement offers" (Pune vs Delhi batch cards) → "INTERNSHIP REPORT 2026/2025" audited reports → "Making Mark Across the Nation" → "Standings with IIT's & NIT's" → startups → "Student Research & Academic Impact" (ICML, UK Parliament, IEEE) → "To enable more student startups NST Launched" (₹1 Crore+ fund) → ICPC → "12 students secured internships through Google" → WorldQuant IQC → "Deep Tech for the Global Stage" (videos) → "Student Internship Stories" → "Apply to" (4 partner universities) → "Admission Process" (6 steps + OTP lead form) → "Industry First, Advanced Curriculum" (Year 1–4 Build/Achieve/Innovate/Succeed tabs) → "Best in class Faculty" → "Masterclasses with Industry Experts" → fests (Neutron, Tekron) → "Festival Celebration" → podcast → "Coverage from finest Media house" + Govt of Goa tie-up → closing CTA "India's AI century is being engineered right now. Are you in the room?" → footer disclaimer — [NST](https://www.newtonschool.co/newton-school-of-technology)
- **Polaris order:** status bar → hero → "This is what New Age Engineering looks like, at Polaris" (video/reel strip) → "Three Specialised Tracks. Designed for The Next Gen." (AI with Microsoft / PM with AWS / Cloud with Google Cloud, AWS & Microsoft; "Take Quiz" track finder) → "Internships Across 12 Countries. From Year 1." (world map: UN Habitat, USA, Dubai) → "The Campus That Global Tech Comes To." → "Built by a Founder, for Future Founders" → "Polaris' Vision Supported by Top Tech Leaders" (LinkedIn-linked cards) → "Real Outcomes. From Year 1." (stipend stats + sector clusters) → "Polaris Builds Founders, Not Just Engineers" (6 startup cards with "Traction/Revenue") → "Silicon Valley, Right Here at Polaris" (YC partner Jared Friedman quote) → "Polaris In The News" → "The Decision That Changed Everything" (parent testimonials) → "Life At POLARIS" → "Hear it directly. From The Students" → scholarship band → FAQ ("Got more questions?" with tabs General/PAT/PEEP/Scholarship/Programs/Campus/Placements) → footer — [Polaris](https://www.polariscampus.com/)
- **Plaksha order:** hero carousel → "Featured Information" news cards → "Happening Now" (dated cards: "APPLY BEFORE OCT 15", "REGISTER BEFORE NOV 22") → "Academic Programs" (BTech/Master's/PhD) → "Plaksha Faculty at a Glance" → "Career Pathways Chosen by Students" (Outcomes Report 2025) → "Spotlight on Innovation and Impact" → "Global and Industry Partnerships" → "Events" → "In the News" — [Plaksha](https://plaksha.edu.in/)

### Inferences
- SST and NST put an "outcomes" block in the second section. This is now the default expectation, and NIAT should not bury its numbers.
- Polaris and SST each have a section that names and answers the parent's hidden objection: Polaris has "The Decision That Changed Everything", built on parent video testimonials, and SST has "Placements & the Degree Question at SST - Answered". NIAT has no section that explicitly speaks to parents.
- NST's page is the longest and densest. It reads as a stack of achievements and is likely to suffer from scroll fatigue.

### Gaps
- I did not capture section heights or exact pixel positions. I also did not check whether any sections are hidden on mobile.

## Proof: stats, placements, internships, people, logos, projects, media

### Takeaway
Everyone now uses audited reports and named, photographed students. The differences are in framing. SST uses an IIT-benchmark framing ("Top tech companies that hire from IITs & NITs are already hiring from SST"). NST uses a "live" first-batch-in-progress framing. Polaris uses global-from-Year-1 and founders framing, with traction stated for each startup. Plaksha uses a sober outcomes split (63/24/13).

### Cited Findings
**SST**
- "FIRST EVER PLACEMENT CYCLE – ₹44 Lakhs /Annum – Highest CTC offered via PPO route · Before placement season officially opens"; "₹20.4 L Average CTC"; "76% batch obtained offers"; "₹33 L Top 25% average CTC" — [SST](https://www.scaler.com/school-of-technology/)
- "96.3% of eligible students from the first batch received at least one internship offer"; "International Internships in Bali, Singapore, New York, Germany, etc"; "Download SST internship Report 2026", with an "Audited by… Auditor for placement reports of:" logo pair — [SST](https://www.scaler.com/school-of-technology/)
- "14 SST students selected for GSoC 2026 from 15K+ global applicants"; "1200+ Hiring Partners including MAANG companies & AI Startups"; "10+ Startups Founded by SST Students, 1 SIL incubated startup featured on Shark Tank"; "Scaler placed more learners in Amazon than all IITs combined." The last claim is about the parent company's upskilling programmes ("Outcomes through our Scaler's Academy & DSML Program") — [SST](https://www.scaler.com/school-of-technology/)
- Selectivity is used as proof: "Batch 2026 Admission Stats 15,000 NSET PAYMENTS · 1,000 INTERVIEWED · 250 SELECTED · 3.9% SELECTION RATE"; "180+ SST students also secured offers from… IITs, NITs, University of Toronto…"; "Students who joined us leaving behind prestigious offers" (e.g., "Karthikeya JEE 98.8%", "Anurag Jha IIT BHU Offer") — [SST](https://www.scaler.com/school-of-technology/)
- Mentors carry famous-employer labels: Rajan Anandan, "Arvind N – Co-Creator GPT 3 & 4", "Varun Mohan… Building Antigravity at Google Deepmind", "Yash Kumar, Lead Engineer at Open AI". Endorsements: Anupam Mittal, Amitabh Kant (Ex-CEO NITI Aayog). News items include "TIME magazine World's Top EdTech Companies 2024" and an IIT Madras/IIT Roorkee partnership — [SST](https://www.scaler.com/school-of-technology/)
- Story cards: Percevia (Samsung Solve for Tomorrow, ₹25 L grant), "First Student at Apple" Academy, NeoSapiens (Shark Tank), SIH 2025, "India's First Humanoid" (Xspecies AI), ICPC, Meta Hacker Cup, and Trackaroo ("revenue of 25 lakhs") — [SST](https://www.scaler.com/school-of-technology/)

**NST**
- Hero-adjacent tiles: "12 Students Got paid internships through [Google]"; "2.5 lakhs Highest stipend in just their 2nd year"; "7 International trips around the world"; "98.3% Paid internships in their 2nd Year" — [NST](https://www.newtonschool.co/newton-school-of-technology)
- "EARLY PLACEMENT OUTCOMES… via Internships that convert to full time – CTC offered for freshers ₹20-50 Lakhs /Annum – ₹23 Lakhs/Annum AVERAGE CTC OFFERED ON CAMPUS"; "98.3% of a 300+ student batch has already secured paid internships in their second year - AGAIN!"; "BATCH MOMENTUM… • Live Tracking". Per-campus split: Pune 98.3% (highest ₹1,90,000/mo, avg ₹23,364/mo); Delhi 93%+ (highest ₹1,25,000/mo) — [NST](https://www.newtonschool.co/newton-school-of-technology)
- Audited reports: "INTERNSHIP REPORT 2026 – 98.3%… Certified by: (Placement Auditor for Multiple IIM's)"; "INTERNSHIP REPORT 2025 – 93.07%… Certified by B2K Analytics, IIM Ahmedabad's Placement Auditors" — [NST](https://www.newtonschool.co/newton-school-of-technology)
- Competitive benchmarks: "NST Ranked above all NITs in the International Olympics of Coding, ICPC" (Rank #22); "1st ever college to move their foundation batch into ASIA_WEST"; "WorldQuant IQC 2026 India Rank #4. First attempt."; research accepted at ICML 2026; PM Modi appreciation letter (Arctic leadership); "Govt-Funded AI Platform… 260 Million+ Lives" — [NST](https://www.newtonschool.co/newton-school-of-technology)
- Faculty cards show an "SDE 3 + Senior Instructor / EX-[logo]" format with "ICPC World Finalist" tags. Masterclass mentors include "MD, Microsoft for Startups" and "Head of Engineering, PhonePe". Govt tie-up with the Goa CM. Media logos include Times of India and UK Parliament — [NST](https://www.newtonschool.co/newton-school-of-technology)

**Polaris**
- "₹50k per month Average Stipend"; "79% Interns Earned more than ₹1Lakh"; "₹2L per month Highest Stipend"; "Internships Across 12 Countries. From Year 1." Text elsewhere on the page says "across 7 countries", which is an internal inconsistency — [Polaris](https://www.polariscampus.com/)
- Named orgs by sector cluster: Native AI (Eazy AI, revrag.ai…), Global Open Source (MIT App Inventor, VLC, Linux Foundation), International (Zuvees, Mstack Dubai, UN Habitat Kenya), VC & Founders Office (Antler, Weekday) — [Polaris](https://www.polariscampus.com/)
- Startup cards each carry a "Traction/Revenue" field, including candid ones such as "Functional platform under development… no external funding pursued". Leader cards link to LinkedIn: Sajith Pai (Blume), Jacob Singh (ex-CTO Blinkit), Vaibhav Sisinty. Pull-quote from Jared Friedman (YC Partner). "Scholarships worth ₹15 Crores were granted". Badge: "AWARDED IN 2025 – Biggest Offline Tech Hackathon in Asia" — [Polaris](https://www.polariscampus.com/)
- Student testimonials put the stipend inside the quote ("₹2.1L paid internship by my second semester"; "Ranked 1,328 in JEE Advanced, I chose Polaris over IIT Bombay… GSoC… ₹2.55L stipend") — [Polaris](https://www.polariscampus.com/)

**Plaksha**
- "STUDENT OUTCOMES REPORT 2025 – 63% Graduates opted for roles in companies · 24% chose higher studies and research · 13% Built their ventures…". Faculty from "Cornell, UC Berkeley, CMU… IITs and IISc". Alumni startups in "Y Combinator S26" and "Forbes 30 Under 30 Asia". National Quantum Mission consortium led by IIT Bombay — [Plaksha](https://plaksha.edu.in/)

### Inferences
- An "audited by IIM placement auditor" badge next to a downloadable report is now table stakes (SST, NST). If NIAT's ₹80 LPA claim has no audited, downloadable report beside it, it will look weaker even with disclaimers.
- Peers anchor on average and top-25% numbers (SST ₹20.4 L avg / ₹33 L top-25%; NST ₹23 L avg) and on monthly stipends. A single "highest package" figure is read sceptically. NIAT's ₹80 LPA headline would gain credibility from an average, median or percentile next to it.
- Selectivity stats (SST's 3.9% funnel) present the school as hard to get into. NIAT's "35+ partner universities" scale message points the other way: broad access.

### Gaps
- I did not verify the auditor names behind SST's and NST's logos. They are images, not text.
- I could not check NST's ₹20–50 L "CTC offered for freshers" range against a public report from this session.

## Admissions funnel

### Takeaway
SST: NSET plus two interviews (one AI-led), ₹1,000 application fee, fast track for JEE/SAT, waitlist while closed. NST: free registration for NSAT with an OTP lead form, a fixed exam date (7 Jan 2027), a live registration counter and university choice. Polaris: PAT (₹1,500 application fee), interview, scholarship block, an early-entry programme for Class X–XI, and a JEE/SAT fast track. All three offer callback/counsellor CTAs. Only NST puts a WhatsApp link in the source (footer).

### Cited Findings
- **SST:** eligibility "Age ≤ 20 as of 1 July 2027 · ≥60% in Grade 12 Mathematics · open to all streams". Steps: 1 Application Form (with "video essay"), 2 Qualify for Interviews ("NSET – SST's Entrance Test. The application fee is ₹1000" or "Fast-track (Skip NSET) – Based on your JEE & SAT scores"), 3 "1:1 Interview (Online) – Two rounds - an AI-led interview… followed by an industry-led interview", 4 "Admission Decision – Within 7-10 days", 5 "Final Enrollment". Counsellor block: "Plan your next step with confidence… REQUEST CALLBACK". There is a floating call button and an "Exclusive Free Events" section — [SST](https://www.scaler.com/school-of-technology/)
- SST admissions page: "NSET is a 120-minute online test… Mathematics and Logical Reasoning. A student can take NSET thrice in an academic year." The first interview is "an AI version of Anshuman Singh, Co-founder of Scaler". Three admission rounds. Urgency copy: "Early applicants are twice as likely to secure scholarships." Fees: admission fee ₹50,000; tuition ₹4.5 L + ₹5 L + ₹5 L + ₹2.5 L = ₹17 L; hostel & mess ₹5.49 L; total "₹22.99 lakh". Parallel degree fee (BITS Pilani) ₹88,000/yr, or ₹1.14 L/yr for the other option — [SST admission](https://www.scaler.com/school-of-technology/admission/)
- **NST:** "NSAT (Newton Scholastic Aptitude Test) is your gateway…". Steps: 01 Register for NSAT, 02 Appear (Mathematics, English, General Aptitude; "3 mock tests will be unlocked after registration"; "Download Prep Kit"), 03 Online Interview Round (GD for Rishihood), 04 Counselling (on campus), 05 Block your seat, 06 "Pack your Bags for Campus and Hostel". Inline lead form: Name, Email, Phone (+91), "Send OTP". Live counters: "31,352 students have registered" and, in the closing CTA, "30,700+ students have already registered". Exam date "07th January, 2027", registration deadline "06th January". Callback CTAs: "Request a Callback from NST Student", "Talk to NST Seniors", "Get a call from us". WhatsApp: api.whatsapp.com link in the footer — [NST](https://www.newtonschool.co/newton-school-of-technology); [NST admission](https://www.newtonschool.co/newton-school-of-technology-nst/admission)
- NST fees are not on the home page. Third-party listings put the 4-year total at about ₹22.6–22.85 L including hostel (Rishihood campus), but the figures conflict and are unverified — [CollegeYaar](https://www.collegeyaar.in/blog/private-university/newton-school-of-technology-fees/); [CollegeDekho](https://www.collegedekho.com/colleges/newton-school-of-technology-fee-structure)
- **Polaris:** "Not Everybody Gets In. Limited by Design." A 3-step process: "Take PAT… A 30-minute test - choose Aptitude or Coding track. Your score is released immediately", then "1:1 Interview… Industry Experts from Google, Amazon, Visa", then "Block your Scholarship… up to ₹5 Lakhs". The same page also says "Duration 120 minutes", which contradicts the 30-minute figure. "Fee: Included in the ₹1,500 application fee". "Next exam date: First week of November, 2026". Fast track: "90th percentile or above in JEE Mains or Advanced, or 1200 or above in SAT". PEEP: "India's 1st Early Entry Engineering Program" for Class X/XI, "Conditional offer… MacBook on joining". Home page CTAs: "Apply for PAT", "Download Brochure", "Book Campus Tour", "Take Quiz" (2-minute track finder) — [Polaris admissions](https://www.polariscampus.com/admissions); [Polaris](https://www.polariscampus.com/)
- Polaris fees are not on the home page. Third-party listings conflict (about ₹6.6 L/yr vs ₹26.09 L total) — [CollegeDekho](https://www.collegedekho.com/colleges/polaris-school-of-technology-fee-structure); [Collegedunia](https://s3.collegedunia.com/college/64976-polaris-school-of-technology-pst-bangalore)
- **Plaksha:** dated "Happening Now" cards ("APPLY BEFORE OCT 15", "REGISTER BEFORE NOV 22") and "Pre-register for Intake 2027 for BTech Program" — [Plaksha](https://plaksha.edu.in/)

### Inferences
- NST's fixed exam date plus live registrant counter is the strongest urgency device in the set. NIAT's NAT could copy this (show the next NAT date in the hero, plus a registrant count).
- SST's AI-led interview and the "video essay" add a sense of rigour to the process. Polaris's "Take Quiz" track finder is a low-commitment, mid-funnel CTA that NIAT lacks.
- Fee transparency varies: SST publishes a full fee table one click from the nav ("Admission & Fees"). NST and Polaris keep fees off the home page.

### Gaps
- I could not confirm the NST or Polaris fee schedule for 2027 from an official page in this session.
- I did not see a chat widget on SST or Polaris. Third-party widgets (WebEngage on SST) may show chat after a delay that was not captured.

## Visual direction

### Takeaway
SST: corporate royal blue on black/white, Plus Jakarta Sans, built in Framer, video hero. NST: light, clean SaaS look, Mona Sans + Inter, electric blue #0673F9 with amber/purple accents, lots of marquees. Polaris: the most distinctive — near-black (#0A0A0A) with cream text (#FFFAEB), amber-gold gradients (#FFCC3F→#F99707), Montserrat + Playfair Display italic accents, cinematic and dark. Plaksha: institutional teal (#005078 / #007878) with Open Sans, light.

### Cited Findings
- **SST:** H1 computed as "Plus Jakarta Sans" 54px / 700, white. Most frequent hexes in the HTML: #212121, #E4E4E4, #083CA0, #121212, #0041CA, #0052CC; accent #FFCC00 (CSS). Computed backgrounds: white sections, CTA blue rgb(0,65,202) = #0041CA, dark navy rgb(10,38,97) = #0A2661. Built on Framer (framerusercontent assets). Hero mp4 background, Matterport 3D campus tour, many YouTube embeds — [SST](https://www.scaler.com/school-of-technology/)
- **NST:** H1 computed as "monaSans" 52px / 600, white. Body text in Inter. Most frequent hexes: #16191D (ink), #5B6271 (muted), #E1E5EA (borders), #0673F9 (primary blue, also in the logo SVG), #F6F7F9 (surface), #61A8FF, #D17300 / #EC8E00 (amber), #FFF3D6 (amber tint), #6138D3 (purple, computed), #007A51 (green, computed) (CSS). Light background with dark band sections. Four mp4 videos, plus multiple horizontal marquees (logos, student/company chips) — [NST](https://www.newtonschool.co/newton-school-of-technology)
- **Polaris:** body background rgb(10,10,10) = #0A0A0A. Text #FFFAEB (cream), with #FFFAEB33/#FFFAEB99 for borders. Accents #FFCC3F, #FF9A3F, #F99707, #EE9511; light surface #F6F0E8 (CSS). Fonts: Montserrat (main), Playfair Display italic for emphasis words, Inter in small spots. Built on Framer ("Placeholder" font fallbacks). Photography is warm and cinematic, showing real students and founders. The full-page capture shows dark throughout, with gold glows — [Polaris](https://www.polariscampus.com/)
- **Plaksha:** "Open Sans" throughout. Colours #333333 text, rgb(0,80,120) = #005078, rgb(0,120,120) = #007878, rgb(0,85,90) = #00555A, tint #E6F5F8 (computed). Light theme, editorial photo cards — [Plaksha](https://plaksha.edu.in/)
- **NIAT (for contrast):** white page with an inset dark video hero card, maroon CTA (est. #9B1C1C–#A51D24 range; not measured, since the capture was overwritten), white secondary button, cream/peach-tinted sticky tab bar (est.), green WhatsApp pill — [NIAT](https://www.niatindia.com/)

### Inferences
- Blue is everywhere in this category (SST, NST, also Masai and others). Maroon/amber is a real point of difference for NIAT and should be kept. Polaris shows that a dark, premium amber look reads as "elite" and not "edtech".
- Polaris's mix of a serif italic accent with a geometric sans is the most memorable type treatment in the set. SST and NST look interchangeable with SaaS sites.
- Motion: everyone relies on marquees, video and carousels. None appear to use scroll-linked storytelling. That leaves room for NIAT to differentiate.

### Gaps
- I did not extract animation timings, easing, or scroll-trigger behaviour.
- NIAT's exact hexes were not measured here (a parallel capture overwrote my NIAT file).

## Trust / compliance: degree partner disclosure and disclaimers

### Takeaway
SST is the most explicit: it states it is not a university and recommends a separate IIT Madras BS or BITS BSc. NST's footer disclaimer says it is "not a UGC-regulated HEI" and names 4 partner universities on the home page. Polaris keeps the Medhavi Skills University degree inside FAQ answers, with no visible disclaimer above the fold. Plaksha, a real university, puts "Public Self Disclosure" in its top utility bar.

### Cited Findings
- SST footer: "Scaler School of Technology offers a certificate-based program. It is not a university/college and does not confer degrees." A home page section, "Placements & the Degree Question at SST - Answered", says: "SST students are recommended to independently pursue a BS from IIT Madras or BSc Hons from BITS Pilani - UGC recognised, and fully eligible for top tech jobs, MS and MBA abroad". The nav has a "Degree" item. Footer © "InterviewBit Technologies Pvt. Ltd." — [SST](https://www.scaler.com/school-of-technology/)
- NST footer: "Disclaimer: Newton School of Technology (NST) is a brand of Incanus Technologies Pvt. Ltd. and is not a UGC-regulated Higher Education Institution (HEI), nor a constituent unit, department, or faculty of any University. NST provides industry-skilling and support services; all academic operations and degree awards are solely managed by the respective University." Partner universities are shown as an "Apply to" section and in the footer: Rishihood University (Delhi NCR), Ajeenkya DY Patil University (Pune), S-VYASA University (Bengaluru), St. Mary's University (Hyderabad). The hero still says "B.Tech in CS & AI… At leading universities" — [NST](https://www.newtonschool.co/newton-school-of-technology)
- Polaris FAQ: "Medhavi Skills University, a UGC-recognized Skills University offering a 4 Year Computer Science Program, Polaris School of Technology being the Industry Skilling Partner facilitates the On-the-Job Learning…". Also: "A degree awarded by Medhavi Skills University, being a UGC-recognised University, is valid for employment and higher studies in India and abroad, subject to the specific eligibility, equivalence and recognition requirements…". The hero says "4-year CS program", and the track names use "CSE: …". No footer disclaimer was seen — [Polaris](https://www.polariscampus.com/)
- Outcome disclaimers: SST and NST rely on "audited/certified by" badges and downloadable reports, not small-print caveats. No "past results don't guarantee" text was seen on any of the three home pages — [SST](https://www.scaler.com/school-of-technology/); [NST](https://www.newtonschool.co/newton-school-of-technology)
- NIAT's hero states "OFFERED AT 35+ UGC approved Institutions" — [NIAT](https://www.niatindia.com/)

### Inferences
- SST turns its compliance weakness into a content section ("the Degree Question – Answered"). That pattern lets NIAT explain "35+ UGC-approved partner universities + IIT Kharagpur OCN micro-specialisations" proactively. Hiding it in fine print is the weaker option.
- NST's model (skilling partner + named universities + footer disclaimer) is structurally closest to NIAT's. NST names only 4 universities; NIAT's 35+ is a scale advantage but harder to show. A searchable "find your campus" module would beat a logo wall.

### Gaps
- I did not review legal or regulatory commentary (for example, UGC advisories on these models) in this session.

## What they do better / worse than niatindia.com

### Takeaway
The competitors do four things better: sharper one-line positioning, dated urgency, outcome stats framed with averages, percentiles and audit badges, and explicit sections that answer objections (degree, parents). They do worse on clarity: NST and SST pages are 18–21k px of repeated marquees, and Polaris's degree disclosure is buried. NIAT's open lanes: the scale of partner universities, the IIT Kharagpur OCN association, and its brand colour.

### Cited Findings (each comparison point is backed by the findings above)
- Better than NIAT:
  - SST and Polaris heroes make one bold claim ("India's Ivy League for the AI Age"; "…built for Global careers") — [SST](https://www.scaler.com/school-of-technology/); [Polaris](https://www.polariscampus.com/)
  - NST shows the exam date and a registrant counter in the hero and form — [NST](https://www.newtonschool.co/newton-school-of-technology)
  - SST shows avg, top-25% and % offered next to the highest CTC, plus "Audited by" — [SST](https://www.scaler.com/school-of-technology/)
  - Polaris addresses parents directly ("The Decision That Changed Everything") and offers a 2-minute track quiz — [Polaris](https://www.polariscampus.com/)
  - SST publishes its full fee table — [SST admission](https://www.scaler.com/school-of-technology/admission/)
- Worse than or equal to NIAT:
  - NST repeats the same student marquee about 6 times in the DOM (visible in the text extraction), and the page runs to about 21k px — [NST](https://www.newtonschool.co/newton-school-of-technology)
  - Polaris states the degree-awarding university only in FAQs, has conflicting PAT durations (30 vs 120 min) and conflicting country counts (12 vs 7) — [Polaris admissions](https://www.polariscampus.com/admissions); [Polaris](https://www.polariscampus.com/)
  - SST was in "Application Closed / Join Waitlist" mode at capture time — [SST](https://www.scaler.com/school-of-technology/)

### Inferences
- Suggested NIAT moves:
  - (1) A claim-led H1, with the "35+ UGC-approved universities" fact as supporting data.
  - (2) The next NAT date and a registrant count in the hero.
  - (3) Report ₹80 LPA alongside median/average plus an audited report download.
  - (4) A "Degree question answered" section covering the university partners and IIT Kharagpur OCN.
  - (5) A parent-facing section.
  - (6) Keep maroon/amber as the only non-blue palette among the direct competitors. Consider Polaris-style serif-italic accents for premium feel.

### Gaps
- No user-testing or conversion data is available to show which of these patterns actually performs better.
