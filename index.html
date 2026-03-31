// ============================================================
// app.js — WBJEE Master
// Particles, Custom Cursor, Filtering, Question Cards, Animations
// ============================================================

'use strict';

// ── STATE ──────────────────────────────────────────────────
const state = {
  subject:'all', year:'all', cat:'all', diff:'all',
  search:'', bookmarks: new Set(JSON.parse(localStorage.getItem('wbjee_bookmarks')||'[]')),
  answeredMap: new Map(), // qId → selected options
};

// ── YEAR RANGE ─────────────────────────────────────────────
const YEARS = Array.from({length:21}, (_,i)=>2025-i); // 2025→2005

// ── INIT ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildYearChips();
  initParticles();
  initCursor();
  initScrollBehavior();
  animateCounters();
  renderQuestions();
  renderFreqGrid();
  renderTricksGrid();
  setTimeout(() => document.getElementById('qLoading').style.display='none', 600);
});

// ── YEAR CHIPS ─────────────────────────────────────────────
function buildYearChips() {
  const wrap = document.getElementById('yearChips');
  YEARS.forEach(y => {
    const btn = document.createElement('button');
    btn.className = 'chip';
    btn.textContent = y;
    btn.onclick = () => setFilter('year', String(y), btn);
    wrap.appendChild(btn);
  });
}

// ── FILTER LOGIC ───────────────────────────────────────────
function setFilter(type, val, btn) {
  state[type] = val;
  // Update chip active state
  const groupMap = {subject:'subjectChips', year:'yearChips', cat:'catChips', diff:'diffChips'};
  document.querySelectorAll(`#${groupMap[type]} .chip`).forEach(c=>c.classList.remove('active'));
  btn.classList.add('active');
  renderQuestions();
}

function resetFilters() {
  state.subject='all'; state.year='all'; state.cat='all'; state.diff='all'; state.search='';
  document.getElementById('searchInput').value = '';
  document.querySelectorAll('.chip').forEach(c=>c.classList.remove('active'));
  document.querySelectorAll('.chip[onclick*="\'all\'"]').forEach(c=>c.classList.add('active'));
  renderQuestions();
}

function searchQuestions(val) {
  state.search = val.toLowerCase();
  renderQuestions();
}

function getFiltered() {
  return WBJEE_DATA.filter(q => {
    if (state.subject!=='all' && q.subject!==state.subject) return false;
    if (state.year!=='all' && String(q.year)!==state.year) return false;
    if (state.cat!=='all' && String(q.cat)!==state.cat) return false;
    if (state.diff!=='all' && q.diff!==state.diff) return false;
    if (state.search) {
      const txt = (q.chapter+q.topic+q.q+q.trick.text).toLowerCase();
      if (!txt.includes(state.search)) return false;
    }
    return true;
  });
}

// ── RENDER QUESTIONS ───────────────────────────────────────
function renderQuestions() {
  const filtered = getFiltered();
  const list = document.getElementById('questionsList');
  const noRes = document.getElementById('noResults');
  const count = document.getElementById('countDisplay');

  count.textContent = filtered.length;

  if (filtered.length === 0) {
    list.innerHTML = '';
    noRes.classList.remove('hidden');
    return;
  }
  noRes.classList.add('hidden');

  // Build HTML
  list.innerHTML = filtered.map((q, i) => buildQuestionCard(q, i)).join('');

  // Stagger animation
  list.querySelectorAll('.q-card').forEach((card, i) => {
    card.style.animationDelay = `${Math.min(i * 0.06, 0.6)}s`;
  });
}

// ── BUILD QUESTION CARD ────────────────────────────────────
function buildQuestionCard(q, idx) {
  const subjectTag = {physics:'tag-phys', math:'tag-math', chemistry:'tag-chem'}[q.subject];
  const subjectLabel = {physics:'Physics', math:'Math', chemistry:'Chemistry'}[q.subject];
  const diffTag = {easy:'tag-easy', medium:'tag-med', hard:'tag-hard'}[q.diff];
  const catTag = {1:'tag-cat1', 2:'tag-cat2', 3:'tag-cat3'}[q.cat];
  const catLabel = {1:'Cat 1 · +1/−0.25', 2:'Cat 2 · +2/−0.5', 3:'Cat 3 · Partial'}[q.cat];
  const bkm = state.bookmarks.has(q.id);

  const opts = ['A','B','C','D'].map(opt => `
    <button class="option" id="opt-${q.id}-${opt}" onclick="selectOption('${q.id}','${opt}')">
      <span class="opt-badge">${opt}</span>
      <span>${escHtml(q.opts[opt])}</span>
    </button>`).join('');

  const trickSteps = (q.trick.steps||[]).map((s,i)=>`
    <div class="trick-step">
      <span class="step-num">${i+1}</span>
      <span class="step-text">${escHtml(s)}</span>
    </div>`).join('');

  const formulaHtml = q.trick.formula ? `<div class="trick-formula">${escHtml(q.trick.formula)}</div>` : '';

  return `
<div class="q-card" id="card-${q.id}" data-subject="${q.subject}" data-year="${q.year}" data-id="${q.id}">
  <div class="q-header">
    <div class="q-meta-row">
      <span class="q-id">${q.id}</span>
      <span class="q-tag ${subjectTag}">${subjectLabel}</span>
      <span class="q-tag tag-year">${q.year}</span>
      <span class="q-tag ${catTag}">${catLabel}</span>
      <span class="q-tag ${diffTag}">${q.diff}</span>
      <span class="q-chapter-topic">${escHtml(q.chapter)} · ${escHtml(q.topic)}</span>
    </div>
    <p class="q-text">${escHtml(q.q)}</p>
  </div>

  <div class="q-options">${opts}</div>

  <div class="q-actions">
    <button class="btn-action btn-trick" onclick="toggleTrick('${q.id}')">
      ⚡ Short Trick
    </button>
    <button class="btn-action btn-solution" onclick="toggleSolution('${q.id}')">
      📖 Full Solution
    </button>
    <button class="btn-action btn-bkm ${bkm?'bkm-active':''}" id="bkm-${q.id}" onclick="toggleBookmark('${q.id}')">
      ${bkm?'🔖':'🔖'} ${bkm?'Saved':'Save'}
    </button>
    <span class="q-bench">⏱ Trick: <span>${q.trick.time}s</span></span>
  </div>

  <!-- TRICK BOX -->
  <div class="trick-box" id="trick-${q.id}">
    <div class="trick-header">
      <div class="trick-icon">⚡</div>
      <span class="trick-title-label">Short Trick</span>
      <span class="trick-time-badge">~${q.trick.time} seconds</span>
    </div>
    <div class="trick-box-inner">
      <p class="trick-text">${escHtml(q.trick.text)}</p>
      ${formulaHtml}
      <div class="trick-steps">${trickSteps}</div>
    </div>
  </div>

  <!-- SOLUTION BOX -->
  <div class="solution-box" id="sol-${q.id}">
    <div class="sol-header">📖 Detailed Solution</div>
    <div class="solution-box-inner">
      <p class="sol-text">${escHtml(q.sol)}</p>
      <div class="sol-answer">✓ Correct Answer: ${q.ans.join(', ')}</div>
    </div>
  </div>
</div>`;
}

// ── OPTION SELECT ──────────────────────────────────────────
function selectOption(qId, opt) {
  const q = WBJEE_DATA.find(x=>x.id===qId);
  if (!q) return;

  // Disable all options for this question
  ['A','B','C','D'].forEach(o => {
    const el = document.getElementById(`opt-${qId}-${o}`);
    if (el) el.onclick = null;
  });

  const selected = document.getElementById(`opt-${qId}-${opt}`);
  if (!selected) return;
  selected.classList.add('selected');

  const isCorrect = q.ans.includes(opt);

  setTimeout(() => {
    // Show correct
    q.ans.forEach(a => {
      const el = document.getElementById(`opt-${qId}-${a}`);
      if (el) { el.classList.remove('selected'); el.classList.add('correct'); }
    });

    if (!isCorrect) {
      selected.classList.remove('selected');
      selected.classList.add('wrong');
      // Auto-show trick on wrong
      setTimeout(() => openTrick(qId), 300);
    } else {
      showToast('✓ Correct! Great job! 🎉');
    }
  }, 400);

  state.answeredMap.set(qId, opt);
}

// ── TRICK TOGGLE ──────────────────────────────────────────
function toggleTrick(id) {
  const box = document.getElementById(`trick-${id}`);
  if (!box) return;
  box.classList.toggle('open');
}
function openTrick(id) {
  const box = document.getElementById(`trick-${id}`);
  if (box && !box.classList.contains('open')) box.classList.add('open');
}

// ── SOLUTION TOGGLE ───────────────────────────────────────
function toggleSolution(id) {
  const box = document.getElementById(`sol-${id}`);
  if (!box) return;
  box.classList.toggle('open');
}

// ── BOOKMARK ──────────────────────────────────────────────
function toggleBookmark(id) {
  const btn = document.getElementById(`bkm-${id}`);
  if (state.bookmarks.has(id)) {
    state.bookmarks.delete(id);
    if (btn) { btn.classList.remove('bkm-active'); btn.innerHTML='🔖 Save'; }
    showToast('Bookmark removed');
  } else {
    state.bookmarks.add(id);
    if (btn) { btn.classList.add('bkm-active'); btn.innerHTML='🔖 Saved'; }
    showToast('🔖 Bookmarked!');
  }
  localStorage.setItem('wbjee_bookmarks', JSON.stringify([...state.bookmarks]));
}

// ── SECTION SCROLL ────────────────────────────────────────
function showSection(s) {
  document.getElementById('app-section').scrollIntoView({behavior:'smooth'});
  if (s==='tricks') {
    setTimeout(()=>document.getElementById('tricks-section').scrollIntoView({behavior:'smooth'}), 100);
  }
}
function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
}

// ── FREQ GRID ─────────────────────────────────────────────
function renderFreqGrid() {
  const grid = document.getElementById('freqGrid');
  const labelMap = {math:'Mathematics', physics:'Physics', chem:'Chemistry'};
  grid.innerHTML = CHAPTER_FREQ.map(item => `
    <div class="freq-card">
      <div class="freq-subj" style="color:${item.color}">${labelMap[item.subject]||item.subject}</div>
      <div class="freq-chapter">${item.chapter}</div>
      <div class="freq-bar-wrap">
        <div class="freq-bar" data-pct="${item.pct}" style="background:${item.color}; width:0"></div>
      </div>
      <div class="freq-meta">
        <span class="freq-count">${item.count} questions</span>
        <span>${item.pct}% papers</span>
      </div>
    </div>`).join('');

  // Animate bars on scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.freq-bar').forEach(bar => {
          bar.style.width = bar.dataset.pct + '%';
        });
      }
    });
  }, {threshold:0.3});
  observer.observe(grid);
}

// ── TRICKS GRID ───────────────────────────────────────────
function renderTricksGrid() {
  const grid = document.getElementById('tricksGrid');
  const colorMap = {math:'#ef4444', physics:'#6366f1', chem:'#10b981'};
  const labelMap = {math:'Mathematics', physics:'Physics', chem:'Chemistry'};
  grid.innerHTML = QUICK_TRICKS.map(t => `
    <div class="trick-card">
      <div class="tc-subj" style="color:${colorMap[t.subject]}">${labelMap[t.subject]}</div>
      <div class="tc-title">${t.title}</div>
      <div class="tc-text">${t.text}</div>
      <div class="tc-formula">${t.formula}</div>
      <div class="tc-time">⏱ Solve in <span>~${t.time}s</span></div>
    </div>`).join('');
}

// ── TOAST ─────────────────────────────────────────────────
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'), 2500);
}

// ── THEME TOGGLE ──────────────────────────────────────────
function toggleTheme() {
  document.body.classList.toggle('light');
  localStorage.setItem('wbjee_theme', document.body.classList.contains('light')?'light':'dark');
}
if (localStorage.getItem('wbjee_theme')==='light') document.body.classList.add('light');

// ── COUNTER ANIMATION ─────────────────────────────────────
function animateCounters() {
  const nums = document.querySelectorAll('.hstat-num');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.dataset.target);
      if (!target) { el.textContent = '₹0'; return; }
      let start = 0;
      const duration = 1800;
      const step = timestamp => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target).toLocaleString();
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = target.toLocaleString();
      };
      requestAnimationFrame(step);
      observer.unobserve(el);
    });
  }, {threshold:0.5});
  nums.forEach(n => observer.observe(n));
}

// ── SCROLL BEHAVIOR ───────────────────────────────────────
function initScrollBehavior() {
  const navbar = document.getElementById('navbar');
  const scrollBtn = document.getElementById('scrollTop');
  let lastY = 0;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    // Navbar shrink
    navbar.style.background = y > 60
      ? (document.body.classList.contains('light') ? 'rgba(240,239,248,0.97)' : 'rgba(7,7,13,0.97)')
      : '';
    // Scroll top btn
    scrollBtn.classList.toggle('visible', y > 400);
    lastY = y;
  }, {passive:true});
}

// ── CUSTOM CURSOR ─────────────────────────────────────────
function initCursor() {
  const cursor = document.getElementById('cursor');
  const trail  = document.getElementById('cursorTrail');
  let mx=0, my=0, tx=0, ty=0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx+'px';
    cursor.style.top  = my+'px';
  });

  // Trail follows with lag
  function animTrail() {
    tx += (mx - tx) * 0.12;
    ty += (my - ty) * 0.12;
    trail.style.left = tx+'px';
    trail.style.top  = ty+'px';
    requestAnimationFrame(animTrail);
  }
  animTrail();

  // Scale on hover
  document.querySelectorAll('a, button, .q-card, .trick-card, .freq-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(2)';
      trail.style.transform  = 'translate(-50%,-50%) scale(0.5)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = '';
      trail.style.transform  = '';
    });
  });

  // Click effect
  document.addEventListener('mousedown', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(0.7)';
  });
  document.addEventListener('mouseup', () => {
    cursor.style.transform = '';
  });
}

// ── PARTICLES CANVAS ──────────────────────────────────────
function initParticles() {
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const isLight = () => document.body.classList.contains('light');

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random()*W;
      this.y = Math.random()*H;
      this.r = Math.random()*1.5+0.3;
      this.vx = (Math.random()-0.5)*0.3;
      this.vy = (Math.random()-0.5)*0.3;
      this.alpha = Math.random()*0.5+0.1;
      this.color = ['124,111,255','255,94,126','255,209,102','6,214,160'][Math.floor(Math.random()*4)];
    }
    update() {
      this.x+=this.vx; this.y+=this.vy;
      if (this.x<0||this.x>W||this.y<0||this.y>H) this.reset();
    }
    draw() {
      const a = isLight() ? this.alpha*0.4 : this.alpha;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
      ctx.fillStyle = `rgba(${this.color},${a})`;
      ctx.fill();
    }
  }

  for (let i=0; i<80; i++) particles.push(new Particle());

  // Connection lines between close particles
  function drawLines() {
    for (let i=0; i<particles.length; i++) {
      for (let j=i+1; j<particles.length; j++) {
        const dx=particles[i].x-particles[j].x, dy=particles[i].y-particles[j].y;
        const dist = Math.sqrt(dx*dx+dy*dy);
        if (dist < 100) {
          const a = (1-dist/100) * (isLight()?0.05:0.15);
          ctx.strokeStyle = `rgba(124,111,255,${a})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0,0,W,H);
    particles.forEach(p => { p.update(); p.draw(); });
    drawLines();
    requestAnimationFrame(animate);
  }
  animate();
}

// ── ESCAPE HTML (security) ─────────────────────────────────
function escHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;')
    .replace(/'/g,'&#39;')
    .replace(/\n/g,'<br>');
}
