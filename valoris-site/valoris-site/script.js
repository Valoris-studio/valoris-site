/* Valoris Studio : assemble la page à partir de content.js. Normalement, rien à modifier ici. */
(() => {
  const S = window.SITE;
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const shown = (list) => (list || []).filter((x) => !x.draft || S.showDrafts);
  const tag = (x) => (x.draft ? '<span class="draft">Valoris Studio</span>' : '');
  const mail = (subject) => `mailto:${S.contact.email}?subject=${encodeURIComponent(subject)}`;
  const sec = (id, cls, inner) => `<section class="sec ${cls}" id="${id}"><div class="wrap">${inner}</div></section>`;

  /* ---------- Sections ---------- */
  const hero = () => {
    const h = S.hero;
    return `<section class="hero" id="accueil">
      ${h.video
        ? `<video class="hero-video" src="${esc(h.video)}" poster="${esc(h.image)}" autoplay muted loop playsinline preload="auto" aria-hidden="true" tabindex="-1"></video>`
        : `<img class="hero-img" src="${esc(h.image)}" alt="${esc(h.alt)}" fetchpriority="high">`}
      <div class="wrap hero-copy">
        <h1>${esc(h.title)}</h1><p>${esc(h.text)}</p>
        <div class="actions"><a class="btn" href="#realisations">${esc(h.primary)}</a><a class="btn ghost" href="#contact">${esc(h.secondary)}</a></div>
      </div></section>`;
  };

  const rail = (items) => `<div class="rail"><button class="arr l" type="button" aria-label="Précédent" data-dir="-1">‹</button><div class="track">${items.join('')}</div><button class="arr r" type="button" aria-label="Suivant" data-dir="1">›</button></div>`;

  const services = () => {
    const s = S.services;
    return sec('prestations', 'rails', `<h2>${esc(s.title)}</h2>${rail(s.items.map((i) =>
      `<a class="card svc" href="${mail('Projet vidéo : ' + i.title)}"${i.image ? ` style="--img:url('${esc(i.image)}')"` : ''}><span class="cap"><h3>${esc(i.title)}</h3><p>${esc(i.text)}</p></span></a>`))}`);
  };

  const workshops = () => {
    const w = S.workshops;
    return sec('ateliers', 'alt', `<div class="split media">
      <img class="cover" src="${esc(w.image)}" alt="${esc(w.alt)}" loading="lazy">
      <div><h2>${esc(w.title)}</h2><p class="muted lead">${esc(w.text)}</p>
        <ol class="steps">${w.steps.map((t) => `<li>${esc(t)}</li>`).join('')}</ol>
        <a class="btn" href="${mail('Atelier cinéma')}">${esc(w.cta)}</a></div>
    </div>`);
  };

  const projects = () => sec('realisations', 'rails', `<h2>Réalisations</h2>${rail(S.projects.map((p, i) =>
    `<button class="card proj" type="button" data-i="${i}" aria-label="Lire : ${esc(p.title)}"><img src="${esc(p.image)}" alt="${esc(p.alt)}" loading="lazy"><span class="play" aria-hidden="true"></span><span class="cap"><h3>${esc(p.title)}</h3><p>${esc(p.type)}</p></span></button>`))}`);

  const press = () => {
    const p = S.press, list = shown(p.items);
    if (!list.length) return '';
    return sec('presse', 'light', `<h2>${esc(p.title)}</h2>${p.text ? `<p class="muted lead">${esc(p.text)}</p>` : ''}
      <div class="articles">${list.map((i) => `<a class="article" href="${esc(i.url)}" target="_blank" rel="noopener">
        ${i.image ? `<img src="${esc(i.image)}" alt="${esc(i.title)}" loading="lazy">` : ''}
        <span class="art-body"><span class="src">${esc(i.source)}${i.date ? ` · ${esc(i.date)}` : ''}</span>
          <h3>${esc(i.title)}</h3>${i.text ? `<p class="muted">${esc(i.text)}</p>` : ''}
          <span class="link">${esc(i.linkLabel || "Lire l'article")}</span></span></a>`).join('')}</div>`);
  };

  const team = () => {
    const list = shown(S.team.people);
    if (!list.length) return '';
    return sec('equipe', '', `<h2>${esc(S.team.title)}</h2><div class="people">${list.map((m) => `<div class="person">
      ${m.video ? `<video class="ph" src="${esc(m.video)}" poster="${esc(m.photo || '')}" autoplay loop muted playsinline preload="metadata" aria-label="${esc(m.name)}"></video>` : m.photo ? `<img class="ph" src="${esc(m.photo)}" alt="${esc(m.name)}" loading="lazy">` : '<div class="ph" role="img" aria-label="Photo à ajouter"></div>'}
      <h3>${esc(m.name)}</h3><p>${esc(m.role)}</p>${tag(m)}</div>`).join('')}</div>`);
  };

  const partners = () => {
    const list = shown(S.partners.items);
    if (!list.length) return '';
    return sec('partenaires', 'tight', `<h2>${esc(S.partners.title)}</h2><ul class="logos">${list.map((p) => {
      const inner = p.logo ? `<img src="${esc(p.logo)}" alt="${esc(p.name)}" loading="lazy">` : `<span class="logo-ph">${esc(p.name)}</span>`;
      return `<li>${p.url ? `<a href="${esc(p.url)}" target="_blank" rel="noopener">${inner}</a>` : inner}${tag(p)}</li>`;
    }).join('')}</ul>`);
  };

  const about = () => sec('association', 'alt about', `<h2>${esc(S.about.title)}</h2><p>${esc(S.about.text)}</p>`);

  const contact = () => {
    const c = S.contact;
    const links = (c.links || []).filter((l) => l.url).map((l) => `<a class="link" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`);
    if (c.phone) links.unshift(`<a class="link" href="tel:${esc(c.phone.replace(/\s/g, ''))}">${esc(c.phone)}</a>`);
    return sec('contact', '', `<h2>${esc(c.title)}</h2><p class="muted lead">${esc(c.text)}</p>
      <a class="mail" href="${mail('Projet vidéo')}">${esc(c.email)}</a>
      ${links.length ? `<div class="contact-list">${links.join('')}</div>` : ''}`);
  };

  /* ---------- Assemblage ---------- */
  $('#main').innerHTML = [hero(), projects(), services(), workshops(), press(), team(), partners(), about(), contact()].join('');
  const hv = $('.hero-video');
  if (hv) {
    hv.muted = true;
    const go = () => hv.play().catch(() => {});
    go();
    // si le navigateur a bloqué la lecture automatique, on relance dès le premier geste
    ['pointerdown', 'touchstart', 'keydown', 'scroll'].forEach((e) => addEventListener(e, () => { if (hv.paused) go(); }, { once: true, passive: true }));
  }

  const navItems = S.nav.filter((n) => document.getElementById(n.href.slice(1)));
  $('#top').innerHTML = `<div class="wrap">
    <a class="brand" href="#accueil" aria-label="${esc(S.brand.name)}, accueil"><img src="${esc(S.brand.logo)}" alt="${esc(S.brand.name)}"></a>
    <button class="menu-btn" type="button" aria-expanded="false" aria-controls="nav">Menu</button>
    <nav class="nav" id="nav" aria-label="Navigation principale">${navItems.map((n) => `<a href="${esc(n.href)}">${esc(n.label)}</a>`).join('')}</nav></div>`;
  const legal = (S.footer.links || []).filter((l) => l.url);
  $('#foot').innerHTML = `<div class="wrap"><img src="${esc(S.brand.logo)}" alt="${esc(S.brand.name)}">
    <span>© ${new Date().getFullYear()} ${esc(S.brand.name)}</span>
    ${legal.length ? `<nav aria-label="Informations légales">${legal.map((l) => `<a href="${esc(l.url)}">${esc(l.label)}</a>`).join('')}</nav>` : ''}</div>`;

  /* ---------- Interactions ---------- */
  const top = $('#top'), nav = $('#nav'), btn = $('.menu-btn');
  const onScroll = () => top.classList.toggle('solid', window.scrollY > 40);
  onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
  btn.addEventListener('click', () => btn.setAttribute('aria-expanded', nav.classList.toggle('open')));
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); } });

  document.addEventListener('click', (e) => {
    const a = e.target.closest('.arr');
    if (a) { const t = a.parentElement.querySelector('.track'); t.scrollBy({ left: a.dataset.dir * t.clientWidth * 0.8, behavior: 'smooth' }); }
  });

  // Lecteur vidéo : YouTube (lien classique ou court) ou fichier .mp4
  const embed = (url, title) => {
    if (/\.mp4($|\?)/i.test(url)) return `<video src="${esc(url)}" controls autoplay playsinline></video>`;
    let id = '';
    try {
      const u = new URL(url);
      if (u.hostname.includes('youtu.be')) id = u.pathname.slice(1);
      else if (u.hostname.includes('youtube.com')) id = u.searchParams.get('v') || u.pathname.split('/embed/')[1] || '';
    } catch (e) { /* lien invalide */ }
    return id ? `<iframe src="https://www.youtube-nocookie.com/embed/${esc(id)}?autoplay=1&rel=0" title="${esc(title)}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>` : '';
  };
  const dlg = $('#dlg');
  $('#realisations').addEventListener('click', (e) => {
    const b = e.target.closest('[data-i]');
    if (!b) return;
    const p = S.projects[b.dataset.i], media = embed(p.video, p.title);
    if (!media) { if (p.video) window.open(p.video, '_blank', 'noopener'); return; }
    dlg.innerHTML = `<div class="dlg-bar"><span>${esc(p.title)}</span><button type="button" data-close>Fermer</button></div><div class="dlg-media">${media}</div>`;
    dlg.showModal();
  });
  dlg.addEventListener('click', (e) => { if (e.target === dlg || e.target.closest('[data-close]')) dlg.close(); });
  dlg.addEventListener('close', () => { dlg.innerHTML = ''; });
})();
