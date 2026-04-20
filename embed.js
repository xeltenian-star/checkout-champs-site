(function () {
  const styleId = 'checkout-champs-style';
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      #checkout-champs-root{--cc-bg:#f7f4ee;--cc-panel:#ffffff;--cc-panel-2:#fffaf3;--cc-line:rgba(32,27,18,.12);--cc-text:#1f1b14;--cc-muted:#6d655a;--cc-accent:#c89b3c;--cc-accent-strong:#9d7421;--cc-win:#1f9d55;--cc-shadow:0 18px 40px rgba(20,16,10,.12);--cc-shell-glow:linear-gradient(180deg,rgba(255,255,255,.96),rgba(255,255,255,.94));--cc-header-glow:linear-gradient(135deg,rgba(200,155,60,.16),rgba(255,255,255,.40));--cc-soft-fill:rgba(255,255,255,.72);--cc-card-hover:rgba(200,155,60,.08);--cc-code-bg:#f8f1df;--cc-meter-bg:linear-gradient(90deg,#ff825f 0%,#ffcf5d 38%,#53d17c 50%,#ffcf5d 62%,#ff825f 100%);--cc-light-idle:#7a2f2f;--cc-light-waiting:#a45c20;--cc-light-go:#1f9d55;--cc-light-busted:#b12d2d;font-family:Arial,Helvetica,sans-serif;color:var(--cc-text)}
      #checkout-champs-root[data-cc-theme="dark"]{--cc-bg:#0e1015;--cc-panel:#151923;--cc-panel-2:#1b2130;--cc-line:rgba(255,255,255,.10);--cc-text:#f5f7fb;--cc-muted:#b0b7c6;--cc-accent:#f3c65d;--cc-accent-strong:#ffdc87;--cc-win:#44d17a;--cc-shadow:0 18px 40px rgba(0,0,0,.35);--cc-shell-glow:linear-gradient(180deg,rgba(255,255,255,.02),rgba(255,255,255,0));--cc-header-glow:linear-gradient(135deg,rgba(243,198,93,.10),rgba(255,255,255,0));--cc-soft-fill:rgba(255,255,255,.03);--cc-card-hover:rgba(243,198,93,.08);--cc-code-bg:#111621;--cc-light-idle:#442020;--cc-light-waiting:#6e3b18;--cc-light-go:#1d8f4f;--cc-light-busted:#973434}
      #checkout-champs-root .cc-shell{width:min(100%,780px);margin:24px auto;background:var(--cc-shell-glow),var(--cc-panel);border:1px solid var(--cc-line);border-radius:22px;overflow:hidden;box-shadow:var(--cc-shadow)}
      #checkout-champs-root .cc-header{padding:18px 18px 14px;border-bottom:1px solid var(--cc-line);background:var(--cc-header-glow)}
      #checkout-champs-root .cc-kicker{display:inline-block;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--cc-accent-strong);margin-bottom:10px}
      #checkout-champs-root .cc-title-row{display:flex;justify-content:space-between;gap:12px;align-items:start}
      #checkout-champs-root .cc-title{margin:0;font-size:30px;line-height:1.1}
      #checkout-champs-root .cc-subtitle{margin:8px 0 0;color:var(--cc-muted);font-size:14px}
      #checkout-champs-root .cc-pill,#checkout-champs-root .cc-theme-badge{white-space:nowrap;align-self:center;border:1px solid color-mix(in srgb,var(--cc-accent) 35%,transparent);color:var(--cc-accent-strong);padding:8px 12px;border-radius:999px;font-weight:700;font-size:13px;background:color-mix(in srgb,var(--cc-accent) 10%,transparent)}
      #checkout-champs-root .cc-pill-row{display:flex;gap:8px;flex-wrap:wrap;justify-content:flex-end}
      #checkout-champs-root .cc-body{padding:18px}
      #checkout-champs-root .cc-grid{display:grid;grid-template-columns:1.2fr .8fr;gap:18px}
      #checkout-champs-root .cc-panel{background:var(--cc-panel-2);border:1px solid var(--cc-line);border-radius:18px;padding:16px}
      #checkout-champs-root .cc-game-list{display:grid;gap:12px}
      #checkout-champs-root .cc-game-card{background:var(--cc-soft-fill);border:1px solid var(--cc-line);border-radius:16px;padding:14px;cursor:pointer;transition:transform .16s ease,border-color .16s ease,background .16s ease}
      #checkout-champs-root .cc-game-card:hover,#checkout-champs-root .cc-game-card.active{transform:translateY(-2px);border-color:color-mix(in srgb,var(--cc-accent) 45%,transparent);background:var(--cc-card-hover)}
      #checkout-champs-root .cc-game-card h4{margin:0 0 6px;font-size:18px}
      #checkout-champs-root .cc-game-card p{margin:0;color:var(--cc-muted);font-size:14px}
      #checkout-champs-root .cc-badges{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}
      #checkout-champs-root .cc-badge{padding:5px 9px;border-radius:999px;background:color-mix(in srgb,var(--cc-panel) 72%,transparent);color:var(--cc-text);font-size:12px;border:1px solid var(--cc-line)}
      #checkout-champs-root .cc-stage{min-height:420px}
      #checkout-champs-root .cc-stage-title{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:12px}
      #checkout-champs-root .cc-stage-title h3{margin:0;font-size:24px}
      #checkout-champs-root .cc-stage-title p{margin:6px 0 0;color:var(--cc-muted)}
      #checkout-champs-root .cc-status,#checkout-champs-root .cc-summary-card,#checkout-champs-root .cc-stat{border:1px solid var(--cc-line);background:var(--cc-soft-fill)}
      #checkout-champs-root .cc-status{margin:14px 0;padding:12px 14px;border-radius:14px;color:var(--cc-text);min-height:48px}
      #checkout-champs-root .cc-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:16px}
      #checkout-champs-root .cc-btn{padding:11px 15px;border-radius:12px;border:none;cursor:pointer;background:var(--cc-accent);color:#16120a;font-weight:800}
      #checkout-champs-root .cc-btn.secondary{background:transparent;color:var(--cc-text);border:1px solid var(--cc-line)}
      #checkout-champs-root .cc-btn.ghost{background:transparent;color:var(--cc-muted);border:1px dashed var(--cc-line)}
      #checkout-champs-root .cc-summary-card{padding:14px;border-radius:16px}
      #checkout-champs-root .cc-discount-big{font-size:38px;font-weight:900;color:var(--cc-accent-strong);line-height:1;margin-bottom:8px}
      #checkout-champs-root .cc-note,#checkout-champs-root .cc-trust-line{font-size:13px;color:var(--cc-muted)}
      #checkout-champs-root .cc-code{margin-top:10px;font-family:Consolas,monospace;background:var(--cc-code-bg);border:1px dashed color-mix(in srgb,var(--cc-accent) 45%,transparent);border-radius:12px;padding:12px;color:var(--cc-accent-strong);font-size:15px}
      #checkout-champs-root .cc-trust-line{margin-top:12px;font-size:12px}
      #checkout-champs-root .cc-ttt-board{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:12px}
      #checkout-champs-root .cc-ttt-cell{aspect-ratio:1/1;border-radius:16px;border:1px solid var(--cc-line);background:color-mix(in srgb,var(--cc-panel) 85%,transparent);color:var(--cc-text);font-size:32px;font-weight:900;cursor:pointer}
      #checkout-champs-root .cc-meter-wrap{margin-top:20px}
      #checkout-champs-root .cc-meter{position:relative;width:100%;height:30px;border-radius:999px;border:1px solid var(--cc-line);overflow:hidden;background:var(--cc-meter-bg)}
      #checkout-champs-root .cc-marker{position:absolute;top:0;width:16px;height:100%;background:rgba(255,255,255,.95);box-shadow:0 0 14px rgba(255,255,255,.5);border-radius:10px;transform:translateX(-50%)}
      #checkout-champs-root .cc-center-zone{position:absolute;top:0;left:50%;transform:translateX(-50%);width:16%;height:100%;border-left:2px solid rgba(255,255,255,.8);border-right:2px solid rgba(255,255,255,.8);background:rgba(255,255,255,.08)}
      #checkout-champs-root .cc-reaction-stage{margin-top:16px;padding:18px;border-radius:18px;border:1px solid var(--cc-line);background:color-mix(in srgb,var(--cc-panel) 82%,transparent);text-align:center}
      #checkout-champs-root .cc-light{width:150px;height:150px;border-radius:50%;margin:8px auto 16px;border:4px solid rgba(255,255,255,.12);box-shadow:inset 0 0 25px rgba(0,0,0,.35);background:var(--cc-light-idle)}
      #checkout-champs-root .cc-light.waiting{background:var(--cc-light-waiting)}
      #checkout-champs-root .cc-light.go{background:var(--cc-light-go);box-shadow:0 0 40px color-mix(in srgb,var(--cc-win) 55%,transparent)}
      #checkout-champs-root .cc-light.busted{background:var(--cc-light-busted)}
      #checkout-champs-root .cc-mini-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:14px}
      #checkout-champs-root .cc-stat{border-radius:14px;padding:12px}
      #checkout-champs-root .cc-stat span{color:var(--cc-muted);font-size:12px}
      #checkout-champs-root .cc-stat strong{display:block;font-size:22px;color:var(--cc-accent-strong)}
      #checkout-champs-root .cc-footer{padding:14px 18px 18px;color:var(--cc-muted);font-size:12px}
      @media (max-width:760px){#checkout-champs-root .cc-grid{grid-template-columns:1fr}#checkout-champs-root .cc-title-row{flex-direction:column}#checkout-champs-root .cc-pill-row{justify-content:flex-start}#checkout-champs-root .cc-stage{min-height:auto}}
    `;
    document.head.appendChild(style);
  }

  const root = document.createElement('div');
  root.id = 'checkout-champs-root';
  document.body.appendChild(root);

  function escapeHtml(str) {
    return String(str).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');
  }
  function hexToRgb(hex) {
    const clean = String(hex).replace('#', '').trim();
    if (![3,6].includes(clean.length)) return null;
    const full = clean.length === 3 ? clean.split('').map((c) => c + c).join('') : clean;
    const value = Number.parseInt(full, 16);
    if (Number.isNaN(value)) return null;
    return { r:(value>>16)&255, g:(value>>8)&255, b:value&255 };
  }
  function parseColor(value) {
    if (!value) return null;
    const v = String(value).trim();
    if (v.startsWith('#')) return hexToRgb(v);
    const m = v.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
    if (!m) return null;
    return { r:Number(m[1]), g:Number(m[2]), b:Number(m[3]) };
  }
  function luminance(rgb) {
    if (!rgb) return 1;
    const map = [rgb.r, rgb.g, rgb.b].map((value) => {
      const s = value / 255;
      return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * map[0] + 0.7152 * map[1] + 0.0722 * map[2];
  }
  function detectTheme(source) {
    const explicit = source?.dataset?.ccTheme || source?.getAttribute?.('data-cc-theme');
    if (explicit === 'light' || explicit === 'dark') return explicit;
    const bodyStyle = getComputedStyle(document.body || document.documentElement);
    const rootStyle = getComputedStyle(document.documentElement);
    const candidates = [source ? getComputedStyle(source).backgroundColor : '', bodyStyle.backgroundColor, rootStyle.backgroundColor, bodyStyle.colorScheme];
    for (const value of candidates) {
      if (typeof value === 'string' && value.includes('dark')) return 'dark';
      const rgb = parseColor(value);
      if (rgb) return luminance(rgb) < 0.45 ? 'dark' : 'light';
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function createApp(rootEl) {
    const state = {
      theme: detectTheme(document.body),
      selectedGame: 'ttt',
      bestDiscount: Number(localStorage.getItem('cc_discount') || 0),
      bestResult: null,
      ttt: { board: Array(9).fill(''), finished: false, result: null },
      timing: { running: false, marker: 10, direction: 1, rafId: null, result: null },
      reaction: { phase: 'idle', startTime: null, timeoutId: null, result: null },
    };
    rootEl.dataset.ccTheme = state.theme;

    const savedGame = localStorage.getItem('cc_game');
    const savedSummary = localStorage.getItem('cc_summary');
    const savedCode = localStorage.getItem('cc_discount_code');
    if (state.bestDiscount && savedGame && savedSummary && savedCode) state.bestResult = { discount: state.bestDiscount, game: savedGame, summary: savedSummary, code: savedCode };

    const gameMeta = {
      ttt: { name: 'Tic Tac Toe', desc: 'Beat the house brain in one fast strategy round.', badges:['Strategy','Top: 12%'] },
      timing: { name: 'Timing Bar', desc: 'Stop the marker as close to dead center as you can.', badges:['Precision','Top: 15%'] },
      reaction: { name: 'Reaction Rush', desc: 'Wait for green, then strike fast without jumping early.', badges:['Reflex','Top: 14%'] },
    };
    function saveReward(discount, game, summary) {
      if (discount > state.bestDiscount) state.bestDiscount = discount, state.bestResult = { discount, game, summary, code: 'CHAMPS' + discount };
      localStorage.setItem('cc_discount', String(state.bestDiscount));
      localStorage.setItem('cc_game', game);
      localStorage.setItem('cc_summary', summary);
      localStorage.setItem('cc_discount_code', 'CHAMPS' + state.bestDiscount);
    }
    function winning(board, mark) { const combos=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]; return combos.some((c)=>c.every((i)=>board[i]===mark)); }
    function empties(board) { return board.map((v,i)=>v===''?i:-1).filter((i)=>i!==-1); }
    function critical(board, mark) { for (const i of empties(board)) { const copy=[...board]; copy[i]=mark; if (winning(copy, mark)) return i; } return null; }
    function aiMove() {
      const board = [...state.ttt.board];
      const w = critical(board, 'O'); if (w !== null) { board[w] = 'O'; state.ttt.board = board; return; }
      const b = critical(board, 'X'); if (b !== null) { board[b] = 'O'; state.ttt.board = board; return; }
      if (board[4] === '') { board[4] = 'O'; state.ttt.board = board; return; }
      const corners = [0,2,6,8].filter((i) => board[i] === '');
      if (corners.length) { board[corners[Math.floor(Math.random()*corners.length)]]='O'; state.ttt.board=board; return; }
      const e = empties(board); if (e.length) board[e[Math.floor(Math.random()*e.length)]]='O'; state.ttt.board=board;
    }
    function finishTtt(outcome) {
      state.ttt.finished = true; state.ttt.result = outcome;
      const map = { win:[12,'You outplayed the house and earned the top reward.'], draw:[7,'Solid defense. You held the line and earned a strong reward.'], lose:[3,'No full victory, but effort still earns a reward.'] };
      saveReward(map[outcome][0], 'Tic Tac Toe', map[outcome][1]); render();
    }
    function playTtt(i) { if (state.ttt.finished || state.ttt.board[i]) return; state.ttt.board[i]='X'; if (winning(state.ttt.board,'X')) return finishTtt('win'); if (!empties(state.ttt.board).length) return finishTtt('draw'); aiMove(); if (winning(state.ttt.board,'O')) return finishTtt('lose'); if (!empties(state.ttt.board).length) return finishTtt('draw'); render(); }
    function resetTtt(){ state.ttt={board:Array(9).fill(''),finished:false,result:null}; render(); }
    function renderTimingOnly(){ const m = rootEl.querySelector('.cc-marker'); if (m) m.style.left = state.timing.marker + '%'; }
    function startTiming(){ if(state.timing.running) return; state.timing.running=true; state.timing.result=null; let marker=10, dir=1, last=performance.now(); function tick(now){ const d=now-last; last=now; marker += dir*d*.11; if(marker>=98){marker=98;dir=-1} if(marker<=2){marker=2;dir=1} state.timing.marker=marker; state.timing.direction=dir; renderTimingOnly(); state.timing.rafId=requestAnimationFrame(tick);} state.timing.rafId=requestAnimationFrame(tick); render(); }
    function stopTiming(){ if(!state.timing.running) return; cancelAnimationFrame(state.timing.rafId); state.timing.running=false; const distance=Math.abs(50-state.timing.marker); let discount=3, rating='Good try', summary='You got on the board with a baseline reward.'; if(distance<=2.5){discount=15;rating='Bullseye';summary='Dead center. That was sniper-grade precision.'} else if(distance<=6){discount=10;rating='Sharp';summary='Very close to center. Strong reward unlocked.'} else if(distance<=12){discount=6;rating='Solid';summary='Clean stop. You still earned a respectable reward.'} state.timing.result={distance,discount,rating,summary}; saveReward(discount,'Timing Bar',summary); render(); }
    function resetTiming(){ if(state.timing.rafId) cancelAnimationFrame(state.timing.rafId); state.timing={running:false,marker:10,direction:1,rafId:null,result:null}; render(); }
    function startReaction(){ if(state.reaction.phase==='waiting') return; if(state.reaction.timeoutId) clearTimeout(state.reaction.timeoutId); state.reaction.phase='waiting'; state.reaction.result=null; const delay=1200+Math.random()*1800; state.reaction.timeoutId=setTimeout(()=>{state.reaction.phase='go';state.reaction.startTime=performance.now();state.reaction.timeoutId=null;render();},delay); render(); }
    function clickReaction(){ if(state.reaction.phase==='waiting'){ if(state.reaction.timeoutId) clearTimeout(state.reaction.timeoutId); state.reaction.phase='busted'; state.reaction.result={label:'Too early',time:null,discount:2,summary:'Trigger discipline failed, but you still get a small save-the-sale reward.'}; saveReward(2,'Reaction Rush',state.reaction.result.summary); return render(); } if(state.reaction.phase!=='go') return; const ms=Math.round(performance.now()-state.reaction.startTime); let discount=3,label='Quick',summary='Fast enough to claim a small reward.'; if(ms<=220){discount=14;label='Lightning';summary='Ridiculous reaction speed. Top-tier reward unlocked.'} else if(ms<=320){discount=9;label='Sharp';summary='Very fast response. Strong reward earned.'} else if(ms<=430){discount=5;label='Clean';summary='Good reflexes. You earned a decent reward.'} state.reaction.phase='done'; state.reaction.result={label,time:ms,discount,summary}; saveReward(discount,'Reaction Rush',summary); render(); }
    function resetReaction(){ if(state.reaction.timeoutId) clearTimeout(state.reaction.timeoutId); state.reaction={phase:'idle',startTime:null,timeoutId:null,result:null}; render(); }
    function summaryHtml(){ if(!state.bestResult) return `<div class="cc-summary-card"><div class="cc-discount-big">0%</div><div>No reward locked yet.</div><p class="cc-note">Play one of the games to generate a discount code and simulate a checkout reward flow.</p></div>`; return `<div class="cc-summary-card"><div class="cc-discount-big">${state.bestDiscount}% OFF</div><div><strong>${escapeHtml(state.bestResult.game)}</strong></div><p>${escapeHtml(state.bestResult.summary)}</p><div class="cc-code">${escapeHtml(state.bestResult.code)}</div><p class="cc-note">Saved to localStorage as cc_discount, cc_game, cc_summary, and cc_discount_code.</p><div class="cc-trust-line">Theme auto-detected from the host site so the widget feels native instead of bolted on.</div></div>`; }
    function tttHtml(){ const status = state.ttt.finished ? (state.ttt.result==='win'?'You won the board. That is the top strategy payout.':state.ttt.result==='draw'?'Draw secured. You still earned a strong discount.':'The house got this round, but Checkout Champs still gives you something.') : 'Place X. The house answers with O. No dead round, no dead reward.'; return `<div class="cc-stage-title"><div><h3>Tic Tac Toe</h3><p>Fast strategy. Clean dopamine. Instant reward.</p></div><div class="cc-pill">Top reward: 12%</div></div><div class="cc-status">${escapeHtml(status)}</div><div class="cc-ttt-board">${state.ttt.board.map((cell,index)=>`<button class="cc-ttt-cell" data-ttt-index="${index}" ${cell||state.ttt.finished?'disabled':''}>${cell||''}</button>`).join('')}</div><div class="cc-actions"><button class="cc-btn secondary" data-action="reset-ttt">Play this round again</button></div>`; }
    function timingHtml(){ const r=state.timing.result; const status = r ? `${r.rating} — ${r.discount}% unlocked.` : state.timing.running ? 'Stop the marker as close to the center zone as possible.' : 'Precision game. Start the bar, then stop it in the sweet spot.'; return `<div class="cc-stage-title"><div><h3>Timing Bar</h3><p>Simple to understand. Hard to nail perfectly.</p></div><div class="cc-pill">Top reward: 15%</div></div><div class="cc-status">${escapeHtml(status)}</div><div class="cc-meter-wrap"><div class="cc-meter"><div class="cc-center-zone"></div><div class="cc-marker" style="left:${state.timing.marker}%"></div></div></div>${r?`<div class="cc-mini-stats"><div class="cc-stat"><span>Rating</span><strong>${escapeHtml(r.rating)}</strong></div><div class="cc-stat"><span>Distance</span><strong>${r.distance.toFixed(1)}</strong></div><div class="cc-stat"><span>Reward</span><strong>${r.discount}%</strong></div></div>`:''}<div class="cc-actions"><button class="cc-btn" data-action="${state.timing.running?'stop-timing':'start-timing'}">${state.timing.running?'Stop marker':'Start game'}</button><button class="cc-btn secondary" data-action="reset-timing">Reset</button></div>`; }
    function reactionHtml(){ const p=state.reaction.phase, r=state.reaction.result; let light='', text='Click start. Wait for green. Tap too early and you still get a tiny mercy reward.'; if(p==='waiting'){light='waiting';text='Wait… do not click yet.'} else if(p==='go'){light='go';text='GO. HIT IT.'} else if(p==='busted'){light='busted';text='Too early. Trigger discipline matters.'} else if(p==='done'&&r){light='go';text=`${r.label}${r.time?` — ${r.time}ms.`:'.'} Reward locked at ${r.discount}%.`;} return `<div class="cc-stage-title"><div><h3>Reaction Rush</h3><p>A single clean reflex challenge. Fast, brutal, satisfying.</p></div><div class="cc-pill">Top reward: 14%</div></div><div class="cc-status">${escapeHtml(text)}</div><div class="cc-reaction-stage"><div class="cc-light ${light}"></div><div class="cc-actions" style="justify-content:center;"><button class="cc-btn" data-action="start-reaction">Start round</button><button class="cc-btn secondary" data-action="click-reaction">Tap</button><button class="cc-btn ghost" data-action="reset-reaction">Reset</button></div></div>${r?`<div class="cc-mini-stats"><div class="cc-stat"><span>Tier</span><strong>${escapeHtml(r.label)}</strong></div><div class="cc-stat"><span>Time</span><strong>${r.time!==null?`${r.time}ms`:'—'}</strong></div><div class="cc-stat"><span>Reward</span><strong>${r.discount}%</strong></div></div>`:''}`; }
    function stageHtml(){ if(state.selectedGame==='ttt') return tttHtml(); if(state.selectedGame==='timing') return timingHtml(); return reactionHtml(); }
    function render(){ rootEl.innerHTML = `<div class="cc-shell"><div class="cc-header"><div class="cc-kicker">Checkout conversion game layer</div><div class="cc-title-row"><div><h1 class="cc-title">Checkout Champs</h1><p class="cc-subtitle">Three fast reward games, one purpose: make checkout feel earned instead of annoying.</p></div><div class="cc-pill-row"><div class="cc-theme-badge">Theme: ${state.theme}</div><div class="cc-pill">Wix MVP build</div></div></div></div><div class="cc-body"><div class="cc-grid"><div class="cc-panel"><h2>Pick your challenge</h2><p class="cc-note">Theme is auto-detected from the host site so Checkout Champs feels native by default.</p><div class="cc-game-list">${Object.entries(gameMeta).map(([k,m])=>`<div class="cc-game-card ${state.selectedGame===k?'active':''}" data-game="${k}"><h4>${escapeHtml(m.name)}</h4><p>${escapeHtml(m.desc)}</p><div class="cc-badges">${m.badges.map((badge)=>`<span class="cc-badge">${escapeHtml(badge)}</span>`).join('')}</div></div>`).join('')}</div></div><div class="cc-panel"><h2>Reward lock</h2>${summaryHtml()}</div></div><div class="cc-panel cc-stage" style="margin-top:18px;">${stageHtml()}</div></div><div class="cc-footer">Front-end demo build for Checkout Champs. Current session stores reward data in localStorage so you can simulate discount flow before wiring platform checkout rules.</div></div>`;
      rootEl.querySelectorAll('[data-game]').forEach((el)=>el.addEventListener('click',()=>{state.selectedGame=el.getAttribute('data-game');render();}));
      rootEl.querySelectorAll('[data-ttt-index]').forEach((el)=>el.addEventListener('click',()=>playTtt(Number(el.getAttribute('data-ttt-index')))));
      rootEl.querySelectorAll('[data-action]').forEach((el)=>el.addEventListener('click',()=>{const a=el.getAttribute('data-action'); if(a==='reset-ttt')resetTtt(); if(a==='start-timing')startTiming(); if(a==='stop-timing')stopTiming(); if(a==='reset-timing')resetTiming(); if(a==='start-reaction')startReaction(); if(a==='click-reaction')clickReaction(); if(a==='reset-reaction')resetReaction();}));
    }
    render();
  }
  createApp(root);
})();
