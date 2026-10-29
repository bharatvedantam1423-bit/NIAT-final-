(() => {
  const root = document.documentElement;
  root.classList.add('js');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  /* Header border, mobile action bar */
  const header = $('[data-header]');
  const hero = $('.hero');
  const mbar = $('[data-mbar]');
  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
    if (!mbar) return;
    const show = hero.getBoundingClientRect().bottom < 0;
    mbar.classList.toggle('is-visible', show);
    root.classList.toggle('has-mbar', show && getComputedStyle(mbar).display !== 'none');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();

  /* Mobile drawer */
  const menuBtn = $('[data-menu]');
  const drawer = $('[data-drawer]');
  const setDrawer = (open) => {
    drawer.hidden = !open;
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };
  menuBtn.addEventListener('click', () => setDrawer(drawer.hidden));
  drawer.addEventListener('click', (e) => { if (e.target.closest('a')) setDrawer(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !drawer.hidden) { setDrawer(false); menuBtn.focus(); } });

  /* Active nav link */
  const navLinks = $$('.hdr-nav a');
  if ('IntersectionObserver' in window) {
    const navIO = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) navLinks.forEach((a) => a.classList.toggle('is-active', a.hash === '#' + en.target.id));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    navLinks.forEach((a) => { const t = $(a.hash); if (t) navIO.observe(t); });
  }

  /* Generic WAI-ARIA tablist: arrow keys, Home/End, roving tabindex */
  const tablist = (list, onSelect) => {
    const tabs = $$('[role="tab"]', list);
    const select = (i, focus) => {
      tabs.forEach((t, j) => { t.setAttribute('aria-selected', String(i === j)); t.tabIndex = i === j ? 0 : -1; });
      if (focus) tabs[i].focus();
      onSelect(tabs[i], i);
    };
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => select(i));
      t.addEventListener('keydown', (e) => {
        const map = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 };
        if (e.key in map) { e.preventDefault(); select((map[e.key] + tabs.length) % tabs.length, true); }
      });
    });
  };

  /* Outcomes rail: filter + prev/next */
  const rail = $('[data-rail]');
  if (rail) {
    const stories = $$('.story', rail);
    const prev = $('[data-prev]');
    const next = $('[data-next]');
    const step = () => {
      const card = stories.find((s) => !s.hidden);
      return card ? card.getBoundingClientRect().width + 16 : 300;
    };
    const update = () => {
      prev.disabled = rail.scrollLeft <= 4;
      next.disabled = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 4;
    };
    prev.addEventListener('click', () => rail.scrollBy({ left: -step(), behavior: reduce ? 'auto' : 'smooth' }));
    next.addEventListener('click', () => rail.scrollBy({ left: step(), behavior: reduce ? 'auto' : 'smooth' }));
    rail.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    tablist($('[data-filters]'), (tab) => {
      const f = tab.dataset.filter;
      stories.forEach((s) => { s.hidden = f === 'featured' ? !s.hasAttribute('data-featured') : s.dataset.type !== f; });
      rail.scrollLeft = 0;
      update();
    });
    stories.forEach((s) => { s.hidden = !s.hasAttribute('data-featured'); });
    update();
  }

  /* Campus filter */
  const chips = $('[data-chips]');
  if (chips) {
    const items = $$('.campus-grid li');
    const empty = $('[data-empty]');
    const emptyName = $('[data-empty-state]');
    tablist(chips, (tab) => {
      const st = tab.dataset.state;
      let shown = 0;
      items.forEach((li) => { const on = st === 'all' || li.dataset.state === st; li.hidden = !on; if (on) shown++; });
      empty.hidden = shown > 0;
      emptyName.textContent = tab.textContent.trim();
    });
  }

  /* FAQ tabs */
  const faqTabs = $('[data-faq-tabs]');
  if (faqTabs) {
    tablist(faqTabs, (tab) => {
      $$('[role="tab"]', faqTabs).forEach((t) => { document.getElementById(t.getAttribute('aria-controls')).hidden = t !== tab; });
    });
  }

  /* Marquee: duplicate items once for a seamless loop */
  if (!reduce) {
    $$('[data-marquee] .marquee__track').forEach((track) => {
      [...track.children].forEach((n) => { const c = n.cloneNode(true); c.alt = ''; c.setAttribute('aria-hidden', 'true'); track.appendChild(c); });
    });
  }

  /* Reveal on scroll + count-up */
  const countUp = (el) => {
    const target = Number(el.dataset.count);
    if (reduce || !target) return;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / 1200);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))).toLocaleString('en-IN');
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        if (en.target.hasAttribute('data-reveal')) en.target.classList.add('is-in');
        if (en.target.dataset.count) countUp(en.target);
        io.unobserve(en.target);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    $$('[data-reveal], [data-count]').forEach((el) => io.observe(el));
  } else {
    $$('[data-reveal]').forEach((el) => el.classList.add('is-in'));
  }

  const y = $('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();
