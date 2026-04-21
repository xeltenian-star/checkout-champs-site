const express = require('express');
const cors = require('cors');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = process.env.PORT || 3000;
const DB_PATH = path.join(__dirname, 'checkout_champs.db');
const db = new sqlite3.Database(DB_PATH);

app.use(cors());
app.use(express.json({ limit: '1mb' }));

function run(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function(err) {
      if (err) reject(err);
      else resolve({ id: this.lastID, changes: this.changes });
    });
  });
}

function all(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => err ? reject(err) : resolve(rows));
  });
}

function get(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.get(sql, params, (err, row) => err ? reject(err) : resolve(row));
  });
}

function makeId(prefix) {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}`;
}

async function init() {
  await run(`CREATE TABLE IF NOT EXISTS merchants (
    id TEXT PRIMARY KEY,
    business_name TEXT,
    email TEXT,
    platform TEXT,
    niche TEXT,
    plan TEXT,
    status TEXT DEFAULT 'active',
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  )`);

  await run(`CREATE TABLE IF NOT EXISTS merchant_settings (
    merchant_id TEXT PRIMARY KEY,
    theme_mode TEXT,
    reward_style TEXT,
    reward_cap TEXT,
    entry_trigger TEXT,
    brand_voice TEXT,
    updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (merchant_id) REFERENCES merchants(id)
  )`);

  await run(`CREATE TABLE IF NOT EXISTS event_logs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    merchant_id TEXT,
    session_id TEXT,
    event_type TEXT,
    page TEXT,
    metadata_json TEXT,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  )`);
}

app.get('/api/health', async (req, res) => {
  const count = await get('SELECT COUNT(*) as count FROM merchants');
  res.json({ ok: true, merchants: count.count });
});

app.post('/api/merchant/create', async (req, res) => {
  try {
    const { business_name = '', email = '', platform = '', niche = '', plan = 'starter' } = req.body || {};
    if (!email) return res.status(400).json({ error: 'email is required' });

    const existing = await get('SELECT * FROM merchants WHERE email = ?', [email]);
    if (existing) return res.json({ merchant_id: existing.id, existing: true });

    const merchantId = makeId('cc');
    await run(
      'INSERT INTO merchants (id, business_name, email, platform, niche, plan, status) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [merchantId, business_name, email, platform, niche, plan, 'active']
    );

    await run(
      'INSERT INTO event_logs (merchant_id, session_id, event_type, page, metadata_json) VALUES (?, ?, ?, ?, ?)',
      [merchantId, null, 'merchant_created', 'landing', JSON.stringify({ business_name, email, platform, niche, plan })]
    );

    res.json({ merchant_id: merchantId, existing: false });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/merchant/save-settings', async (req, res) => {
  try {
    const { merchant_id, theme_mode = '', reward_style = '', reward_cap = '', entry_trigger = '', brand_voice = '' } = req.body || {};
    if (!merchant_id) return res.status(400).json({ error: 'merchant_id is required' });

    const existing = await get('SELECT merchant_id FROM merchant_settings WHERE merchant_id = ?', [merchant_id]);
    if (existing) {
      await run(
        'UPDATE merchant_settings SET theme_mode = ?, reward_style = ?, reward_cap = ?, entry_trigger = ?, brand_voice = ?, updated_at = CURRENT_TIMESTAMP WHERE merchant_id = ?',
        [theme_mode, reward_style, reward_cap, entry_trigger, brand_voice, merchant_id]
      );
    } else {
      await run(
        'INSERT INTO merchant_settings (merchant_id, theme_mode, reward_style, reward_cap, entry_trigger, brand_voice) VALUES (?, ?, ?, ?, ?, ?)',
        [merchant_id, theme_mode, reward_style, reward_cap, entry_trigger, brand_voice]
      );
    }

    res.json({ ok: true, merchant_id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/widget-config', async (req, res) => {
  try {
    const merchantId = req.query.merchant_id;
    if (!merchantId) return res.status(400).json({ error: 'merchant_id is required' });
    const merchant = await get('SELECT * FROM merchants WHERE id = ?', [merchantId]);
    const settings = await get('SELECT * FROM merchant_settings WHERE merchant_id = ?', [merchantId]);
    if (!merchant) return res.status(404).json({ error: 'merchant not found' });
    res.json({ merchant, settings: settings || {} });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/events/log', async (req, res) => {
  try {
    const { merchant_id = 'unknown', session_id = null, event_type = 'unknown', page = '', metadata = {} } = req.body || {};
    await run(
      'INSERT INTO event_logs (merchant_id, session_id, event_type, page, metadata_json) VALUES (?, ?, ?, ?, ?)',
      [merchant_id, session_id, event_type, page, JSON.stringify(metadata || {})]
    );
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/admin/merchants', async (req, res) => {
  try {
    const merchants = await all('SELECT * FROM merchants ORDER BY created_at DESC');
    res.json({ merchants });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/admin/events', async (req, res) => {
  try {
    const limit = Math.min(Number(req.query.limit || 100), 1000);
    const events = await all('SELECT * FROM event_logs ORDER BY created_at DESC, id DESC LIMIT ?', [limit]);
    res.json({ events });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

init().then(() => {
  app.listen(PORT, () => {
    console.log(`Checkout Champs backend running on http://localhost:${PORT}`);
    console.log(`DB path: ${DB_PATH}`);
  });
}).catch(err => {
  console.error('Failed to initialize database:', err);
  process.exit(1);
});
