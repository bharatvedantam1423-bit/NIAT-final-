(() => {
  const doc = document.documentElement;
  doc.classList.add('js');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Header: transparent over the hero, solid after scrolling */
  const header = document.querySelector('[data-header]');
  const hero = document.querySelector('.hero');
  const mobileBar = document.querySelector('[data-mobile-bar]');
  const onScroll = () => {
    const pastHero = hero ? hero.getBoundingClientRect().bottom < 80 : window.scrollY > 40;
    header.classList.toggle('is-solid', window.scrollY > 24 || menuOpen);
    if (mobileBar) mobileBar.classList.toggle('is-visible', pastHero);
  };

  /* Mobile menu */
  let menuOpen = false;
  const menuBtn = document.querySelector('[data-menu-btn]');
  const mobileNav = document.querySelector('[data-mobile-nav]');
  const setMenu = (open) => {
    menuOpen = open;
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    mobileNav.hidden = !open;
    onScroll();
  };
  menuBtn.addEventListener('click', () => setMenu(!menuOpen));
  mobileNav.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && menuOpen) { setMenu(false); menuBtn.focus(); } });

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Active nav link */
  const navLinks = [...document.querySelectorAll('.nav__list a')];
  const sections = navLinks.map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window && sections.length) {
    const navObs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === '#' + entry.target.id));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach((s) => navObs.observe(s));
  }

  /* Curriculum tabs (WAI-ARIA tabs pattern) */
  document.querySelectorAll('[data-tabs]').forEach((root) => {
    const tabs = [...root.querySelectorAll('[role="tab"]')];
    const bar = root.querySelector('.phases__progress');
    const select = (i, focus) => {
      tabs.forEach((t, j) => {
        const on = i === j;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
      });
      if (bar) bar.style.transform = `translateX(${i * 100}%)`;
      if (focus) tabs[i].focus();
    };
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => select(i));
      t.addEventListener('keydown', (e) => {
        const map = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 };
        if (e.key in map) { e.preventDefault(); select((map[e.key] + tabs.length) % tabs.length, true); }
      });
    });
  });

  /* Horizontal scroller buttons */
  document.querySelectorAll('[data-scroller]').forEach((list) => {
    const prev = document.querySelector(`[data-scroll-prev="${list.id}"]`);
    const next = document.querySelector(`[data-scroll-next="${list.id}"]`);
    const step = () => (list.firstElementChild ? list.firstElementChild.getBoundingClientRect().width + 16 : 300);
    const update = () => {
      if (prev) prev.disabled = list.scrollLeft <= 4;
      if (next) next.disabled = list.scrollLeft + list.clientWidth >= list.scrollWidth - 4;
    };
    prev && prev.addEventListener('click', () => list.scrollBy({ left: -step(), behavior: 'smooth' }));
    next && next.addEventListener('click', () => list.scrollBy({ left: step(), behavior: 'smooth' }));
    list.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  });

  /* Marquees: duplicate the track once so the loop is seamless */
  document.querySelectorAll('[data-marquee] .marquee__track').forEach((track) => {
    if (reduceMotion) return;
    [...track.children].forEach((node) => {
      const clone = node.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      clone.alt = '';
      track.appendChild(clone);
    });
  });

  /* Reveal on scroll + count-up numbers */
  const countUp = (el) => {
    const target = Number(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    if (reduceMotion || !target) return;
    const start = performance.now();
    const dur = 1400;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString('en-IN') + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        if (el.classList.contains('reveal')) el.classList.add('is-in');
        if (el.dataset.count) countUp(el);
        io.unobserve(el);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal, [data-count]').forEach((el) => io.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-in'));
  }

  /* Hero video: only autoplay when motion is OK and the connection isn't constrained */
  const video = document.querySelector('[data-hero-video]');
  const conn = navigator.connection || {};
  const wideEnough = window.matchMedia('(min-width: 761px)').matches; // phones keep the poster: saves ~MBs on mobile data
  if (video && wideEnough && !reduceMotion && !conn.saveData && !/2g/.test(conn.effectiveType || '')) {
    video.preload = 'auto';
    const play = () => video.play().catch(() => {});
    if (document.readyState === 'complete') play();
    else window.addEventListener('load', play, { once: true });
  }

  /* Footer year */
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
