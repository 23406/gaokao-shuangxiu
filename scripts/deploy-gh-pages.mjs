// Deploy built site (dist/) to the gh-pages branch via GitHub Contents API.
// Usage:  $env:GITHUB_TOKEN='ghp_xxx'; npm run build; node scripts/deploy-gh-pages.mjs
const TOKEN = process.env.GITHUB_TOKEN;
if (!TOKEN) { console.error('set GITHUB_TOKEN env var (classic token with repo scope)'); process.exit(1); }
const REPO = '23406/gaokao-shuangxiu';
const BASE = `https://api.github.com/repos/${REPO}`;
const H = { Authorization: `Bearer ${TOKEN}`, 'User-Agent': 'dsh', Accept: 'application/vnd.github+json', 'Content-Type': 'application/json' };
const { readFileSync, readdirSync, statSync } = await import('node:fs');
const path = (await import('node:path')).default;

function walk(dir, base = '') {
  const out = [];
  for (const name of readdirSync(dir)) {
    const full = path.join(dir, name);
    const p = base ? `${base}/${name}` : name;
    if (statSync(full).isDirectory()) out.push(...walk(full, p));
    else out.push(p);
  }
  return out;
}
const files = walk(path.join(process.cwd(), 'dist'));
console.log(`files to upload to gh-pages: ${files.length}`);

async function putOne(p, attempt = 0) {
  const bytes = readFileSync(path.join(process.cwd(), 'dist', ...p.split('/')));
  // fetch existing sha so updates work (404 = new file)
  const get = await fetch(`${BASE}/contents/${p}?ref=gh-pages`, { headers: H });
  const body = { message: `deploy ${p}`, content: bytes.toString('base64'), branch: 'gh-pages' };
  if (get.ok) {
    const meta = await get.json();
    body.sha = meta.sha;
    // skip if content already matches
    if (meta.content && Buffer.from(meta.content, 'base64').equals(bytes)) { return 200; }
  }
  const res = await fetch(`${BASE}/contents/${p}`, { method: 'PUT', headers: H, body: JSON.stringify(body) });
  const text = await res.text();
  if ((res.status === 403 || res.status === 429) && attempt < 8) {
    console.log(`rate-limited (${p}), sleeping ${60 * (attempt + 1)}s`);
    await new Promise(r => setTimeout(r, 60000 * (attempt + 1)));
    return putOne(p, attempt + 1);
  }
  if (!res.ok) throw new Error(`PUT ${p} -> ${res.status} ${text.slice(0, 300)}`);
  return res.status;
}

let done = 0;
for (const p of files) {
  try { await putOne(p); } catch (e) { console.log('ERR on ' + p + ': ' + e.message); process.exit(1); }
  done++;
  if (done % 25 === 0) console.log(`progress: ${done}/${files.length}`);
}
console.log('DEPLOY-DONE (site updates on gh-pages branch within ~1 min)');
