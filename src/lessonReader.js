/**
 * Lecteur de cours : transforme une fiche (suite de .math-card-visual) en leçon
 * découpée en parties, une par écran, avec sommaire, progression et encadrés typés
 * (notion, exemple, piège, à retenir, formule).
 */

const DONE_KEY = 'tm_lessons_done';

export function getDoneLessons() {
  try { return new Set(JSON.parse(localStorage.getItem(DONE_KEY) || '[]')); } catch (e) { return new Set(); }
}
function markDone(key) {
  try {
    const s = getDoneLessons(); s.add(key);
    localStorage.setItem(DONE_KEY, JSON.stringify([...s]));
  } catch (e) { /* stockage indisponible : sans conséquence */ }
}

const RE_EXAMPLE = /^(mini-exemples?|exemples?|ex\s*:|application|cas pratique)/i;
const RE_TRAP = /^(pièges?|attention|⚠|erreur|ne pas confondre|faux ami)/i;
const RE_KEY = /^(astuce|réflexe|méthode|truc|résumé|conclusion|à retenir|règle d’or|règle|toujours|retenir)/i;

function plainStart(html) {
  return html.replace(/<[^>]+>/g, '').replace(/^[\s•·\-–]+/, '').trim();
}

// Retire la puce et l'étiquette « Mini-exemple : » pour ne garder que le contenu.
function splitLabel(html) {
  const clean = html.replace(/^\s*(•|&bull;|·)\s*/, '');
  const m = clean.match(/^\s*<strong>([^<]{1,40}?)\s*:?\s*<\/strong>\s*:?\s*/);
  if (m) return { label: m[1].replace(/\s*:$/, ''), body: clean.slice(m[0].length) };
  const m2 = clean.match(/^\s*([A-Za-zÀ-ÿ’' -]{2,25})\s*:\s*/);
  if (m2) return { label: m2[1], body: clean.slice(m2[0].length) };
  return { label: '', body: clean };
}

// Majuscule au début d'un texte HTML (en sautant les balises ouvrantes)
function capFirst(html) {
  return html.replace(/^((?:\s|<[^>]+>)*)([a-zà-ÿ])/, (_, pre, c) => pre + c.toUpperCase());
}
// Espaces insécables dans les guillemets français
function nbspQuotes(html) {
  return html.replace(/«\s/g, '«\u00a0').replace(/\s»/g, '\u00a0»');
}

function callout(kind, label, body) {
  body = capFirst(body);
  const names = { example: 'Exemple', trap: 'Piège', key: 'À retenir' };
  const el = document.createElement('div');
  el.className = `callout callout-${kind}`;
  el.innerHTML = `<div class="callout-label">${label || names[kind]}</div><div class="callout-body">${body}</div>`;
  return el;
}

function notion(html) {
  const clean = html.replace(/^\s*(•|&bull;|·)\s*/, '');
  const m = clean.match(/^\s*<strong>([\s\S]{1,90}?)<\/strong>\s*/);
  const el = document.createElement('div');
  el.className = 'notion';
  if (!m) {
    el.innerHTML = `<div class="notion-body">${clean}</div>`;
    return el;
  }
  const term = m[1].replace(/\s*:\s*$/, '');
  let body = clean.slice(m[0].length).replace(/^\s*:\s*/, '');
  // Les exemples en italique (« Ex : … ») passent sur leur propre ligne.
  const exs = [];
  body = body.replace(/<em>\s*(Ex\s*:|Exemple\s*:)\s*([\s\S]*?)<\/em>/gi, (_, __, t) => { exs.push(t); return ''; })
             .replace(/\s*(Ex\s*:)\s*<em>([\s\S]*?)<\/em>/gi, (_, __, t) => { exs.push(t); return ''; })
             .replace(/\s+([.;,])/g, '$1').trim();
  el.innerHTML = `<div class="notion-term">${term}</div>` +
    (body ? `<div class="notion-body">${capFirst(body)}</div>` : '') +
    exs.map(t => `<div class="notion-ex">${t}</div>`).join('');
  return el;
}

function enhanceSection(card) {
  const lists = card.querySelectorAll('.math-desc-list');
  lists.forEach(list => {
    const frag = document.createDocumentFragment();
    let group = null;
    [...list.children].forEach(child => {
      if (child.tagName !== 'P') { group = null; frag.appendChild(child); return; }
      const html = child.innerHTML;
      const start = plainStart(html);
      let node;
      if (RE_EXAMPLE.test(start)) { const s = splitLabel(html); node = callout('example', s.label, s.body); }
      else if (RE_TRAP.test(start)) { const s = splitLabel(html); node = callout('trap', s.label, s.body); }
      else if (RE_KEY.test(start)) { const s = splitLabel(html); node = callout('key', s.label, s.body); }
      if (node) { group = null; frag.appendChild(node); return; }
      if (!group) { group = document.createElement('div'); group.className = 'notion-list'; frag.appendChild(group); }
      group.appendChild(notion(html));
    });
    list.replaceWith(frag);
  });
  card.querySelectorAll('.math-formula-box-visual').forEach(box => {
    box.classList.add('formula');
    box.innerHTML = `<div class="formula-label">Formule</div><div class="formula-body">${box.innerHTML}</div>`;
  });
}

function parseTitle(text) {
  const m = (text || '').trim().match(/^(\d+)\s*[.)]\s*(.*)$/);
  return m ? { num: m[1], text: m[2] } : { num: null, text: (text || '').trim() };
}

/**
 * Monte la leçon dans `container`. Retourne false si la fiche n'a pas assez de parties
 * (on garde alors l'affichage classique).
 */
export function mountLesson(container, { title, subtitle, kicker, key, onExit, scrollEl }) {
  const cards = [...container.querySelectorAll('.math-card-visual')].filter(c => !c.parentElement.closest('.math-card-visual'));
  if (cards.length < 3) return false; // tableaux de référence : affichage d’un bloc

  const sections = cards.map((card, i) => {
    const t = card.querySelector('.math-card-title');
    const parsed = parseTitle(t ? t.textContent : `Partie ${i + 1}`);
    if (t) t.remove();
    enhanceSection(card);
    const words = card.textContent.split(/\s+/).length;
    return { num: parsed.num || String(i + 1), title: nbspQuotes(parsed.text), body: nbspQuotes(card.innerHTML), words };
  });
  const minutes = Math.max(2, Math.round(sections.reduce((a, s) => a + s.words, 0) / 180));
  const total = sections.length;

  container.innerHTML = `
    <div class="lesson">
      <div class="lesson-progress" aria-hidden="true">${sections.map(() => '<span></span>').join('')}</div>
      <div class="lesson-stage"></div>
      <div class="lesson-nav">
        <button class="lesson-btn lesson-prev" type="button">‹</button>
        <span class="lesson-count"></span>
        <button class="lesson-btn lesson-next" type="button">Suivant ›</button>
      </div>
    </div>`;

  const stage = container.querySelector('.lesson-stage');
  const bars = [...container.querySelectorAll('.lesson-progress span')];
  const btnPrev = container.querySelector('.lesson-prev');
  const btnNext = container.querySelector('.lesson-next');
  const count = container.querySelector('.lesson-count');
  const nav = container.querySelector('.lesson-nav');
  let page = 0; // 0 = sommaire, 1..total = parties, total+1 = fin

  const pad = n => String(n).padStart(2, '0');

  function cover() {
    return `<section class="lesson-page lesson-cover">
      <div class="lesson-kicker">${kicker || 'Cours'}</div>
      <h1 class="lesson-title">${nbspQuotes(title)}</h1>
      ${subtitle ? `<p class="lesson-sub">${nbspQuotes(subtitle)}</p>` : ''}
      <div class="lesson-meta"><span>${total} parties</span><span>≈ ${minutes} min</span></div>
      <ol class="lesson-toc">${sections.map((s, i) => `
        <li><button type="button" data-goto="${i + 1}"><span class="toc-num">${pad(i + 1)}</span><span class="toc-title">${s.title}</span><span class="toc-arrow">›</span></button></li>`).join('')}
      </ol>
      <button type="button" class="lesson-start" data-goto="1">Commencer la lecture</button>
    </section>`;
  }

  function sectionPage(i) {
    const s = sections[i];
    return `<section class="lesson-page lesson-section">
      <div class="section-head">
        <span class="section-num">${pad(i + 1)}</span>
        <h2 class="section-title">${s.title}</h2>
      </div>
      <div class="section-body">${s.body}</div>
    </section>`;
  }

  function endPage() {
    return `<section class="lesson-page lesson-end">
      <div class="end-mark">✓</div>
      <h2 class="lesson-title">Fiche terminée</h2>
      <p class="lesson-sub">${total} parties lues. Le meilleur moyen de retenir : passer tout de suite aux flashcards ou au quiz du même thème.</p>
      <button type="button" class="lesson-start" data-action="exit">Passer aux exercices</button>
      <button type="button" class="lesson-ghost" data-goto="0">Revoir le sommaire</button>
    </section>`;
  }

  function render(dir) {
    stage.innerHTML = page === 0 ? cover() : page > total ? endPage() : sectionPage(page - 1);
    const pageEl = stage.firstElementChild;
    if (dir) pageEl.classList.add(dir > 0 ? 'enter-right' : 'enter-left');
    bars.forEach((b, i) => b.classList.toggle('done', i < page));
    nav.style.display = page === 0 || page > total ? 'none' : '';
    count.textContent = page >= 1 && page <= total ? `${page} / ${total}` : '';
    btnNext.textContent = page === total ? 'Terminer ✓' : 'Suivant ›';
    stage.querySelectorAll('[data-goto]').forEach(b => b.addEventListener('click', () => go(parseInt(b.dataset.goto, 10))));
    const exit = stage.querySelector('[data-action="exit"]');
    if (exit) exit.addEventListener('click', () => onExit && onExit());
    if (page > total && key) markDone(key);
    (scrollEl || container).scrollTop = 0;
    if (scrollEl && scrollEl.scrollTo) scrollEl.scrollTo({ top: 0 });
  }

  function go(p) {
    const target = Math.max(0, Math.min(total + 1, p));
    const dir = Math.sign(target - page);
    page = target;
    render(dir);
  }

  btnPrev.addEventListener('click', () => go(page - 1));
  btnNext.addEventListener('click', () => go(page + 1));

  // Balayage gauche/droite sur mobile
  let x0 = null, y0 = null;
  stage.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
  stage.addEventListener('touchend', e => {
    if (x0 === null || page === 0) return;
    const dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0;
    if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.5) go(page + (dx < 0 ? 1 : -1));
    x0 = null;
  }, { passive: true });

  // Flèches du clavier (retirées quand on quitte la vue)
  const onKey = e => {
    if (!container.isConnected || !container.closest('.view.active')) { document.removeEventListener('keydown', onKey); return; }
    if (e.key === 'ArrowRight') go(page + 1);
    if (e.key === 'ArrowLeft') go(page - 1);
  };
  document.addEventListener('keydown', onKey);
  container._lessonCleanup = () => document.removeEventListener('keydown', onKey);

  render(0);
  return true;
}
