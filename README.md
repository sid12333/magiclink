# Magic Link website

Minimal bilingual product website for Magic Link, deployed as a static site on Cloudflare Pages.

- `/` — global English page
- `/zh-cn` — Simplified Chinese page
- `VITE_DOWNLOAD_URL` — latest signed installer or GitHub Release
- `VITE_PADDLE_CHECKOUT_URL` — Paddle checkout URL

```bash
npm install
npm run dev
npm run build
```

Cloudflare Pages build settings:

- Build command: `npm run build`
- Build output directory: `dist`
- Production branch: `main`
- Node.js: `22`

The website contains no application source code, license private keys, or activation tools.
