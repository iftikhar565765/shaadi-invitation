# Amoris — a romantic garden-swing wedding invitation

A romantic garden at first light: rose-ivory skies washed with blush
and dusty rose, rose-gold ribbonwork and antique gold shimmer, sage
rose-vines breathing in the understory, petals and little hearts
drifting over the names, the couple swaying on their garden swing,
and twin ivory garden doors beneath a rose arch that part onto the
celebration. Fully customisable
in the browser with a guided, auto-saving visual editor — then
published live with one click on Cloudflare.

**Live template pieces**

| Piece | Where |
| --- | --- |
| Guest invitation (opening + ten scenes + RSVP) | `index.html` |
| Visual editor ("Invitation Atelier") | `customize.html` |
| Guest submissions page | `replies.html` |
| Static assets + D1 API | `worker.js`, `functions/` |
| Sample content & copy | `js/config.js` |

## Stack

- **Cloudflare Workers** — static assets (`dist/`) + a small JSON API
- **Cloudflare D1** — stores published invitations and guest replies
- **No build framework** — vanilla HTML/CSS/JS; `scripts/build.mjs`
  copies source into `dist/` and cache-busts asset URLs with content
  hashes, and stamps every page with the build version
- GSAP (CDN) for the opening choreography — everything degrades
  gracefully without it
- The drifting dust motes are pure CSS (a dozen wandering lights);
  they still, dim and disappear politely under `prefers-reduced-motion`

## Quick start (local)

```bash
npm install
npx wrangler d1 migrations apply amoris-invitations --local
npm run build
npx wrangler dev            # http://localhost:8788
```

The invitation runs in honest demonstration mode until published:
RSVPs validate and preview but are not stored. Deploy with a D1
database (see `DEPLOY.md`) and everything — the atelier, publishing,
guest replies, the submissions page — goes live.

## Deploying to Cloudflare

`DEPLOY.md` walks through it step by step (dashboard path and CLI
path): create the D1 database, paste its id into `wrangler.jsonc`,
run `npx wrangler d1 migrations apply amoris-invitations --remote`,
then `npm run build && npx wrangler deploy`.
