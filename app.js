/* ================================================
   WBJEE MASTER — style.css
   Advanced animations, dark/light theme
   ================================================ */

:root {
  --bg:        #07070d;
  --bg2:       #0f0f1a;
  --bg3:       #16162a;
  --card:      #111120;
  --border:    rgba(255,255,255,0.08);
  --border2:   rgba(255,255,255,0.14);
  --accent:    #7c6fff;
  --accent2:   #ff5e7e;
  --gold:      #ffd166;
  --green:     #06d6a0;
  --text:      #eeeef5;
  --muted:     #8888aa;
  --muted2:    #555570;
  --font-head: 'Bebas Neue', sans-serif;
  --font-body: 'DM Sans', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --r:         14px;
  --r2:        20px;
  --shadow:    0 20px 60px rgba(0,0,0,0.5);
  --glow:      0 0 40px rgba(124,111,255,0.15);
}

.light {
  --bg:     #f0eff8;
  --bg2:    #e8e7f5;
  --bg3:    #dddcf0;
  --card:   #ffffff;
  --border: rgba(0,0,0,0.08);
  --border2:rgba(0,0,0,0.15);
  --text:   #1a1a2e;
  --muted:  #666688;
  --muted2: #aaaacc;
  --shadow: 0 20px 60px rgba(0,0,0,0.08);
  --glow:   0 0 40px rgba(124,111,255,0.08);
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body {
  font-family: var(--font-body);
  background: var(--bg);
  color: var(--text);
  overflow-x: hidden;
  cursor: none;
  transition: background 0.4s, color 0.4s;
}

/* ── PARTICLES CANVAS ── */
#particles {
  position: fixed; inset: 0; z-index: 0;
  pointer-events: none; opacity: 0.6;
}

/* ── CUSTOM CURSOR ── */
.cursor {
  position: fixed; width: 12px; height: 12px;
  background: var(--accent);
  border-radius: 50%; pointer-events: none;
  z-index: 9999; transform: translate(-50%,-50%);
  transition: transform 0.1s, width 0.2s, height 0.2s, background 0.2s;
  mix-blend-mode: difference;
}
.cursor-trail {
  position: fixed; width: 36px; height: 36px;
  border: 1.5px solid rgba(124,111,255,0.4);
  border-radius: 50%; pointer-events: none;
  z-index: 9998; transform: translate(-50%,-50%);
  transition: left 0.12s ease, top 0.12s ease, transform 0.2s;
}
body:hover .cursor { width: 12px; height: 12px; }
a:hover ~ .cursor, button:hover ~ .cursor { transform: translate(-50%,-50%) scale(2.5); }

/* ── NAVBAR ── */
nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  background: rgba(7,7,13,0.7);
  backdrop-filter: blur(24px);
  border-bottom: 1px solid var(--border);
  transition: background 0.3s, border 0.3s;
}
.light nav { background: rgba(240,239,248,0.8); }

.nav-inner {
  max-width: 1300px; margin: 0 auto;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 24px; height: 64px;
}

.nav-logo {
  display: flex; align-items: baseline; gap: 4px;
  font-family: var(--font-head);
  font-size: 28px; letter-spacing: 1px;
  text-decoration: none;
}
.logo-w { color: var(--accent); }
.logo-b { color: var(--text); }
.logo-tag {
  font-family: var(--font-mono);
  font-size: 9px; font-weight: 700;
  color: var(--gold); letter-spacing: 3px;
  border: 1px solid rgba(255,209,102,0.3);
  padding: 2px 6px; border-radius: 3px;
  margin-left: 6px; vertical-align: middle;
}

.nav-links { display: flex; gap: 8px; }
.nav-link {
  color: var(--muted); font-size: 14px; font-weight: 500;
  text-decoration: none; padding: 6px 14px; border-radius: 8px;
  transition: all 0.2s; cursor: none; border: none; background: none;
}
.nav-link:hover, .nav-link.active { color: var(--text); background: var(--border); }

.nav-theme {
  width: 38px; height: 38px; border-radius: 10px;
  border: 1px solid var(--border2);
  background: var(--bg3); color: var(--text);
  font-size: 18px; cursor: none;
  display: flex; align-items: center; justify-content: center;
  transition: all 0.2s;
}
.nav-theme:hover { background: var(--accent); border-color: var(--accent); color: #fff; }

/* ── HERO ── */
.hero {
  min-height: 100vh; display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  position: relative; overflow: hidden; z-index: 1;
  padding: 80px 24px 40px;
}

.hero-bg-text {
  position: absolute; font-family: var(--font-head);
  font-size: clamp(120px, 25vw, 320px); font-weight: 900;
  color: transparent;
  -webkit-text-stroke: 1px rgba(124,111,255,0.08);
  pointer-events: none; user-select: none;
  top: 50%; left: 50%; transform: translate(-50%, -50%);
  white-space: nowrap; letter-spacing: -5px;
  animation: bgTextFloat 8s ease-in-out infinite;
}
@keyframes bgTextFloat {
  0%,100% { transform: translate(-50%,-52%); }
  50%      { transform: translate(-50%,-48%); }
}

.hero-content { position: relative; z-index: 1; text-align: center; max-width: 860px; }

.hero-badge {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: var(--font-mono); font-size: 12px; font-weight: 700;
  color: var(--green); letter-spacing: 2px; text-transform: uppercase;
  background: rgba(6,214,160,0.08);
  border: 1px solid rgba(6,214,160,0.25);
  padding: 6px 16px; border-radius: 100px; margin-bottom: 28px;
  animation: badgePulse 3s ease-in-out infinite;
}
.badge-dot {
  width: 6px; height: 6px; background: var(--green);
  border-radius: 50%;
  animation: dotPulse 2s ease-in-out infinite;
}
@keyframes badgePulse { 0%,100%{box-shadow:0 0 0 0 rgba(6,214,160,0.3)} 50%{box-shadow:0 0 0 8px rgba(6,214,160,0)} }
@keyframes dotPulse { 0%,100%{opacity:1} 50%{opacity:0.3} }

.hero-title {
  display: flex; flex-direction: column; gap: 0;
  font-family: var(--font-head);
  font-size: clamp(54px, 10vw, 110px);
  line-height: 1; letter-spacing: -2px; margin-bottom: 24px;
}

.title-line {
  display: block;
  opacity: 0; transform: translateY(40px);
  animation: titleReveal 0.8s cubic-bezier(0.22,1,0.36,1) forwards;
}
.title-line:nth-child(1) { animation-delay: 0.1s; }
.title-line:nth-child(2) { animation-delay: 0.25s; }
.title-line:nth-child(3) { animation-delay: 0.4s; }
.title-line.accent {
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent2) 60%, var(--gold) 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
}
@keyframes titleReveal {
  to { opacity: 1; transform: translateY(0); }
}

.hero-sub {
  font-size: clamp(15px, 2vw, 18px); color: var(--muted);
  line-height: 1.7; margin-bottom: 36px; max-width: 560px; margin-inline: auto;
  opacity: 0; animation: fadeUp 0.8s 0.6s ease forwards;
}

.hero-ctas {
  display: flex; gap: 14px; justify-content: center; flex-wrap: wrap;
  margin-bottom: 56px;
  opacity: 0; animation: fadeUp 0.8s 0.75s ease forwards;
}

@keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:none; } }

.btn-primary {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--accent); color: #fff;
  border: none; padding: 14px 28px; border-radius: 12px;
  font-family: var(--font-body); font-size: 15px; font-weight: 600;
  cursor: none; transition: all 0.25s;
  box-shadow: 0 4px 24px rgba(124,111,255,0.4);
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 40px rgba(124,111,255,0.6);
  background: #9080ff;
}
.btn-primary:active { transform: scale(0.97); }

.btn-secondary {
  display: inline-flex; align-items: center; gap: 8px;
  background: transparent; color: var(--text);
  border: 1px solid var(--border2); padding: 14px 28px; border-radius: 12px;
  font-family: var(--font-body); font-size: 15px; font-weight: 500;
  cursor: none; transition: all 0.25s;
}
.btn-secondary:hover { border-color: var(--accent); color: var(--accent); background: rgba(124,111,255,0.06); }

.hero-stats {
  display: flex; align-items: center; justify-content: center;
  gap: 0; flex-wrap: wrap;
  opacity: 0; animation: fadeUp 0.8s 0.9s ease forwards;
}
.hstat { text-align: center; padding: 0 32px; }
.hstat-num {
  font-family: var(--font-head); font-size: 48px;
  color: var(--text); line-height: 1;
}
.hstat-unit { font-family: var(--font-head); font-size: 32px; color: var(--accent); }
.hstat-label { font-size: 12px; color: var(--muted); font-weight: 500; margin-top: 4px; letter-spacing: 1px; text-transform: uppercase; }
.hstat-div { width: 1px; height: 50px; background: var(--border2); }

.scroll-hint {
  position: absolute; bottom: 30px; left: 50%; transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  color: var(--muted2); font-size: 11px; letter-spacing: 2px; text-transform: uppercase;
  animation: hintBob 2s ease-in-out infinite;
}
.scroll-mouse {
  width: 22px; height: 34px; border: 1.5px solid var(--muted2);
  border-radius: 11px; display: flex; justify-content: center; padding-top: 6px;
}
.scroll-wheel {
  width: 3px; height: 6px; background: var(--muted2);
  border-radius: 2px; animation: wheelScroll 2s ease-in-out infinite;
}
@keyframes wheelScroll { 0%,100%{transform:translateY(0);opacity:1} 50%{transform:translateY(8px);opacity:0.3} }
@keyframes hintBob { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(-6px)} }

/* ── APP SECTION ── */
.app-section { position: relative; z-index: 1; }

/* ── FILTER BAR ── */
.filter-bar {
  position: sticky; top: 64px; z-index: 90;
  background: rgba(7,7,13,0.9); backdrop-filter: blur(24px);
  border-bottom: 1px solid var(--border);
  padding: 16px 0;
  transform: translateY(-20px); opacity: 0;
  animation: slideDown 0.6s 0.3s ease forwards;
}
.light .filter-bar { background: rgba(240,239,248,0.92); }
@keyframes slideDown { to { transform: none; opacity: 1; } }

.filter-inner {
  max-width: 1300px; margin: 0 auto; padding: 0 24px;
  display: flex; flex-wrap: wrap; gap: 14px; align-items: center;
}

.filter-group { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.filter-label {
  font-family: var(--font-mono); font-size: 10px; font-weight: 700;
  color: var(--muted2); text-transform: uppercase; letter-spacing: 1.5px;
  white-space: nowrap;
}

.filter-chips { display: flex; gap: 6px; flex-wrap: wrap; }
.chip {
  padding: 5px 12px; border-radius: 100px;
  border: 1px solid var(--border2);
  background: transparent; color: var(--muted);
  font-size: 12px; font-weight: 600; cursor: none;
  font-family: var(--font-body);
  transition: all 0.18s; white-space: nowrap;
}
.chip:hover { border-color: var(--accent); color: var(--text); }
.chip.active { background: var(--accent); border-color: var(--accent); color: #fff; }
.chip.easy.active { background: var(--green); border-color: var(--green); }
.chip.medium.active { background: var(--gold); border-color: var(--gold); color: #111; }
.chip.hard.active { background: var(--accent2); border-color: var(--accent2); }

.year-chips { max-width: 600px; }

.search-group { position: relative; flex: 1; min-width: 200px; }
.search-input {
  width: 100%; background: var(--bg3);
  border: 1px solid var(--border2); border-radius: 10px;
  padding: 8px 36px 8px 14px; color: var(--text);
  font-family: var(--font-body); font-size: 13px;
  transition: border-color 0.2s;
  outline: none;
}
.search-input:focus { border-color: var(--accent); }
.search-input::placeholder { color: var(--muted2); }
.search-icon { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); color: var(--muted2); font-size: 18px; pointer-events: none; }

.filter-meta {
  font-size: 12px; color: var(--muted2);
  display: flex; align-items: center; gap: 12px;
  margin-left: auto; white-space: nowrap;
}
.filter-meta span { color: var(--accent); font-weight: 700; font-family: var(--font-mono); }

.reset-btn {
  background: none; border: 1px solid var(--border2); color: var(--muted);
  font-size: 11px; padding: 4px 10px; border-radius: 6px; cursor: none;
  font-family: var(--font-body); transition: all 0.2s;
}
.reset-btn:hover { border-color: var(--accent2); color: var(--accent2); }

/* ── QUESTIONS CONTAINER ── */
.questions-container {
  max-width: 1000px; margin: 0 auto; padding: 32px 24px;
}

.q-loading {
  display: flex; flex-direction: column; align-items: center;
  justify-content: center; gap: 16px; padding: 80px 0; color: var(--muted);
}
.loading-spinner {
  width: 40px; height: 40px; border-radius: 50%;
  border: 2px solid var(--border2);
  border-top-color: var(--accent);
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

.no-results {
  text-align: center; padding: 80px 0; color: var(--muted);
}
.no-results-icon { font-size: 64px; margin-bottom: 16px; opacity: 0.3; }
.hidden { display: none !important; }

/* ── QUESTION CARD ── */
.q-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--r2);
  margin-bottom: 20px;
  overflow: hidden;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
  opacity: 0;
  animation: cardReveal 0.5s ease forwards;
}
@keyframes cardReveal {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: none; }
}
.q-card:hover {
  border-color: rgba(124,111,255,0.3);
  box-shadow: var(--glow);
  transform: translateY(-2px);
}

/* Top accent bar per subject */
.q-card::before {
  content: ''; display: block; height: 3px;
  background: var(--accent);
  transition: opacity 0.2s;
  opacity: 0.6;
}
.q-card[data-subject="physics"]::before   { background: linear-gradient(90deg, #6366f1, #8b5cf6); }
.q-card[data-subject="math"]::before      { background: linear-gradient(90deg, #ef4444, #f97316); }
.q-card[data-subject="chemistry"]::before { background: linear-gradient(90deg, #10b981, #06b6d4); }
.q-card:hover::before { opacity: 1; }

.q-header { padding: 18px 20px 12px; }

.q-meta-row {
  display: flex; align-items: center; gap: 8px; flex-wrap: wrap;
  margin-bottom: 12px;
}

.q-id {
  font-family: var(--font-mono); font-size: 10px; font-weight: 700;
  color: var(--muted2); background: var(--bg3);
  padding: 3px 8px; border-radius: 5px; border: 1px solid var(--border);
}

.q-tag {
  font-size: 10px; font-weight: 700;
  padding: 3px 9px; border-radius: 4px;
  font-family: var(--font-mono);
}
.tag-phys  { background: rgba(99,102,241,0.12); color: #818cf8; border: 1px solid rgba(99,102,241,0.2); }
.tag-math  { background: rgba(239,68,68,0.10);  color: #f87171; border: 1px solid rgba(239,68,68,0.2); }
.tag-chem  { background: rgba(16,185,129,0.10); color: #34d399; border: 1px solid rgba(16,185,129,0.2); }
.tag-year  { background: rgba(255,209,102,0.10); color: #fbbf24; border: 1px solid rgba(255,209,102,0.2); }
.tag-cat1  { background: rgba(99,102,241,0.08); color: #a5b4fc; border: 1px solid rgba(99,102,241,0.15); }
.tag-cat2  { background: rgba(139,92,246,0.08); color: #c4b5fd; border: 1px solid rgba(139,92,246,0.15); }
.tag-cat3  { background: rgba(245,158,11,0.08); color: #fcd34d; border: 1px solid rgba(245,158,11,0.15); }
.tag-easy  { background: rgba(6,214,160,0.08);  color: #34d399; border: 1px solid rgba(6,214,160,0.15); }
.tag-med   { background: rgba(245,158,11,0.08); color: #fbbf24; border: 1px solid rgba(245,158,11,0.15); }
.tag-hard  { background: rgba(239,68,68,0.08);  color: #f87171; border: 1px solid rgba(239,68,68,0.15); }

.q-chapter-topic { font-size: 11px; color: var(--muted2); margin-left: auto; }

.q-text {
  font-size: 15px; line-height: 1.75; color: var(--text);
  font-weight: 400;
}
.q-text strong { color: var(--accent); font-weight: 600; }

/* ── OPTIONS ── */
.q-options {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 8px; padding: 0 20px 16px;
}
@media (max-width: 540px) { .q-options { grid-template-columns: 1fr; } }

.option {
  display: flex; align-items: flex-start; gap: 10px;
  padding: 11px 14px; border-radius: 10px;
  border: 1px solid var(--border);
  background: var(--bg2); color: var(--text);
  font-size: 13.5px; line-height: 1.5;
  cursor: none; transition: all 0.18s; text-align: left;
  font-family: var(--font-body);
}
.option:hover { border-color: var(--accent); background: rgba(124,111,255,0.06); }
.option.selected { border-color: var(--accent); background: rgba(124,111,255,0.12); }
.option.correct  { border-color: var(--green); background: rgba(6,214,160,0.08); color: var(--green); }
.option.wrong    { border-color: var(--accent2); background: rgba(255,94,126,0.08); color: var(--accent2); }
.option.reveal-correct { border-color: var(--green); background: rgba(6,214,160,0.08); }

.opt-badge {
  flex-shrink: 0; width: 26px; height: 26px; border-radius: 50%;
  border: 1px solid var(--border2);
  display: flex; align-items: center; justify-content: center;
  font-size: 12px; font-weight: 700; font-family: var(--font-mono);
  color: var(--muted); transition: all 0.18s; margin-top: 1px;
}
.option.selected  .opt-badge { background: var(--accent); border-color: var(--accent); color: #fff; }
.option.correct   .opt-badge { background: var(--green);  border-color: var(--green);  color: #fff; }
.option.wrong     .opt-badge { background: var(--accent2); border-color: var(--accent2); color: #fff; }
.option.reveal-correct .opt-badge { background: var(--green); border-color: var(--green); color: #fff; }

/* ── ACTION ROW ── */
.q-actions {
  padding: 0 20px 18px;
  display: flex; gap: 8px; flex-wrap: wrap; align-items: center;
}

.btn-action {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 7px 14px; border-radius: 8px; border: 1px solid var(--border2);
  background: var(--bg3); color: var(--muted);
  font-size: 12px; font-weight: 600; cursor: none;
  font-family: var(--font-body); transition: all 0.18s;
}
.btn-action:hover { color: var(--text); border-color: var(--text); }
.btn-trick  { border-color: rgba(255,209,102,0.3); color: var(--gold); background: rgba(255,209,102,0.04); }
.btn-trick:hover  { background: rgba(255,209,102,0.1); border-color: var(--gold); }
.btn-solution { border-color: rgba(124,111,255,0.3); color: var(--accent); background: rgba(124,111,255,0.04); }
.btn-solution:hover { background: rgba(124,111,255,0.1); }
.btn-bkm { transition: all 0.18s; }
.btn-bkm.bkm-active { border-color: var(--accent2); color: var(--accent2); background: rgba(255,94,126,0.06); }

.q-bench {
  margin-left: auto;
  font-family: var(--font-mono); font-size: 11px; color: var(--muted2);
  display: flex; align-items: center; gap: 4px;
}
.q-bench span { color: var(--green); font-weight: 700; }

/* ── TRICK BOX ── */
.trick-box {
  margin: 0 20px 18px;
  border: 1px solid rgba(255,209,102,0.22);
  border-radius: 14px; overflow: hidden;
  background: rgba(255,209,102,0.03);
  max-height: 0; opacity: 0;
  transition: max-height 0.45s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease, margin 0.3s;
}
.trick-box.open {
  max-height: 600px; opacity: 1;
}
.trick-box-inner { padding: 16px; }

.trick-header {
  display: flex; align-items: center; gap: 10px;
  padding: 10px 16px;
  background: rgba(255,209,102,0.08);
  border-bottom: 1px solid rgba(255,209,102,0.15);
}
.trick-icon {
  width: 28px; height: 28px; background: var(--gold);
  border-radius: 8px; display: flex; align-items: center; justify-content: center;
  font-size: 14px; flex-shrink: 0;
  animation: trickIconGlow 2s ease-in-out infinite;
}
@keyframes trickIconGlow {
  0%,100% { box-shadow: 0 0 0 0 rgba(255,209,102,0.4); }
  50%      { box-shadow: 0 0 0 6px rgba(255,209,102,0); }
}
.trick-title-label {
  font-family: var(--font-mono); font-size: 11px; font-weight: 700;
  color: var(--gold); letter-spacing: 1.5px; text-transform: uppercase;
}
.trick-time-badge {
  margin-left: auto; font-family: var(--font-mono); font-size: 10px;
  color: var(--muted2); background: var(--bg3);
  padding: 2px 8px; border-radius: 4px; border: 1px solid var(--border);
}

.trick-text {
  font-size: 14px; line-height: 1.75; color: #e8d98a; margin-bottom: 12px;
}
.trick-formula {
  background: var(--bg); border: 1px solid rgba(255,209,102,0.2);
  border-radius: 10px; padding: 12px 14px; margin-bottom: 12px;
  font-family: var(--font-mono); font-size: 13px; color: var(--gold);
  line-height: 1.7; white-space: pre-wrap; overflow-x: auto;
}
.trick-steps { display: flex; flex-direction: column; gap: 8px; }
.trick-step {
  display: flex; gap: 10px; align-items: flex-start;
  opacity: 0; transform: translateX(-10px);
  transition: all 0.3s ease;
}
.trick-box.open .trick-step { opacity: 1; transform: none; }
.trick-box.open .trick-step:nth-child(1) { transition-delay: 0.1s; }
.trick-box.open .trick-step:nth-child(2) { transition-delay: 0.2s; }
.trick-box.open .trick-step:nth-child(3) { transition-delay: 0.3s; }
.trick-box.open .trick-step:nth-child(4) { transition-delay: 0.4s; }
.step-num {
  flex-shrink: 0; width: 22px; height: 22px;
  background: rgba(124,111,255,0.2); color: var(--accent);
  border-radius: 6px; display: flex; align-items: center; justify-content: center;
  font-size: 11px; font-weight: 700; font-family: var(--font-mono); margin-top: 2px;
}
.step-text { font-size: 13px; line-height: 1.65; color: var(--muted); }
.step-text strong { color: var(--text); }

/* ── SOLUTION BOX ── */
.solution-box {
  margin: 0 20px 18px;
  border: 1px solid rgba(124,111,255,0.2);
  border-radius: 14px; overflow: hidden;
  background: rgba(124,111,255,0.03);
  max-height: 0; opacity: 0;
  transition: max-height 0.45s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease;
}
.solution-box.open { max-height: 700px; opacity: 1; }
.solution-box-inner { padding: 16px; }
.sol-header {
  display: flex; align-items: center; gap: 8px;
  padding: 10px 16px; background: rgba(124,111,255,0.08);
  border-bottom: 1px solid rgba(124,111,255,0.15);
  font-family: var(--font-mono); font-size: 11px; font-weight: 700;
  color: var(--accent); letter-spacing: 1.5px; text-transform: uppercase;
}
.sol-text {
  font-size: 14px; line-height: 1.85; color: var(--muted);
  white-space: pre-wrap;
}
.sol-text strong { color: var(--green); }
.sol-answer {
  margin-top: 12px; padding: 10px 14px; border-radius: 8px;
  background: rgba(6,214,160,0.08); border: 1px solid rgba(6,214,160,0.2);
  font-family: var(--font-mono); font-size: 14px; color: var(--green);
  font-weight: 700;
}

/* ── STATS SECTION ── */
.stats-section {
  position: relative; z-index: 1;
  padding: 80px 24px;
  background: var(--bg2);
  border-top: 1px solid var(--border);
}
.stats-inner { max-width: 1200px; margin: 0 auto; }

.section-title {
  font-family: var(--font-head); font-size: clamp(36px, 5vw, 56px);
  text-align: center; margin-bottom: 8px;
  background: linear-gradient(135deg, var(--text) 40%, var(--accent));
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
}
.section-sub {
  text-align: center; color: var(--muted); font-size: 15px; margin-bottom: 48px;
}

.freq-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
}
.freq-card {
  background: var(--card); border: 1px solid var(--border);
  border-radius: var(--r2); padding: 20px;
  transition: all 0.25s;
}
.freq-card:hover { border-color: var(--accent); transform: translateY(-2px); box-shadow: var(--glow); }
.freq-subj { font-size: 10px; font-weight: 700; letter-spacing: 1.5px; font-family: var(--font-mono); text-transform: uppercase; margin-bottom: 6px; }
.freq-chapter { font-size: 16px; font-weight: 600; margin-bottom: 12px; }
.freq-bar-wrap { height: 4px; background: var(--bg3); border-radius: 2px; overflow: hidden; margin-bottom: 8px; }
.freq-bar { height: 100%; border-radius: 2px; transition: width 1.2s cubic-bezier(0.4,0,0.2,1); width: 0; }
.freq-meta { display: flex; justify-content: space-between; font-size: 11px; color: var(--muted2); }
.freq-count { font-family: var(--font-mono); font-weight: 700; }

/* ── TRICKS SECTION ── */
.tricks-section {
  position: relative; z-index: 1; padding: 80px 24px;
  border-top: 1px solid var(--border);
}
.tricks-inner { max-width: 1200px; margin: 0 auto; }
.tricks-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }

.trick-card {
  background: var(--card); border: 1px solid var(--border);
  border-radius: var(--r2); padding: 24px; cursor: none;
  transition: all 0.25s; position: relative; overflow: hidden;
}
.trick-card::after {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(135deg, transparent 60%, rgba(124,111,255,0.04));
  pointer-events: none;
}
.trick-card:hover { border-color: var(--gold); transform: translateY(-3px); box-shadow: 0 10px 40px rgba(255,209,102,0.1); }
.tc-subj { font-size: 10px; font-weight: 700; letter-spacing: 1.5px; font-family: var(--font-mono); text-transform: uppercase; margin-bottom: 8px; }
.tc-title { font-size: 16px; font-weight: 600; margin-bottom: 10px; }
.tc-text { font-size: 13px; color: var(--muted); line-height: 1.6; margin-bottom: 12px; }
.tc-formula {
  font-family: var(--font-mono); font-size: 12px;
  color: var(--gold); background: rgba(255,209,102,0.06);
  padding: 8px 12px; border-radius: 8px;
  border: 1px solid rgba(255,209,102,0.15);
}
.tc-time { font-size: 11px; color: var(--muted2); margin-top: 10px; display: flex; align-items: center; gap: 4px; }
.tc-time span { color: var(--green); font-weight: 700; font-family: var(--font-mono); }

/* ── TOAST ── */
.toast {
  position: fixed; bottom: 28px; left: 50%; transform: translateX(-50%) translateY(20px);
  background: var(--bg3); border: 1px solid var(--border2);
  color: var(--text); padding: 12px 24px; border-radius: 12px;
  font-size: 13px; font-weight: 500;
  z-index: 9000; opacity: 0; pointer-events: none;
  transition: all 0.3s; box-shadow: var(--shadow);
  white-space: nowrap;
}
.toast.show { opacity: 1; transform: translateX(-50%) translateY(0); }

/* ── SCROLL TOP ── */
.scroll-top {
  position: fixed; bottom: 28px; right: 24px;
  width: 44px; height: 44px; border-radius: 12px;
  background: var(--accent); color: #fff; border: none;
  font-size: 18px; cursor: none; z-index: 500;
  transition: all 0.2s; opacity: 0; pointer-events: none;
  box-shadow: 0 4px 20px rgba(124,111,255,0.4);
}
.scroll-top.visible { opacity: 1; pointer-events: all; }
.scroll-top:hover { transform: translateY(-3px); box-shadow: 0 8px 30px rgba(124,111,255,0.6); }

/* ── RESPONSIVE ── */
@media (max-width: 768px) {
  .nav-links { display: none; }
  .hero-stats { gap: 8px; }
  .hstat { padding: 0 16px; }
  .hstat-div { height: 30px; }
  .hstat-num { font-size: 36px; }
  .q-options { grid-template-columns: 1fr; }
  .filter-inner { gap: 10px; }
}

@media (max-width: 480px) {
  .hero-title { font-size: 48px; }
  .hero-stats { flex-wrap: wrap; gap: 0; }
  .hstat-div { display: none; }
  .hstat { padding: 8px 20px; }
}

/* ── SCROLLBAR ── */
::-webkit-scrollbar { width: 6px; height: 6px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--border2); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: var(--accent); }

/* ── SELECTION ── */
::selection { background: rgba(124,111,255,0.3); color: var(--text); }
