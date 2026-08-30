# Magic Link for Windows

Magic Link is an independent Windows app for Magic Trackpad, Magic Mouse, and Magic Keyboard.

**Official website:** [magic-link.app](https://magic-link.app/) · [简体中文](https://magic-link.app/zh-cn)

- Controls for supported Magic Trackpad models: tracking, clicking, scrolling, zooming, and multi-finger gestures.
- Discover and manage Magic Mouse and Magic Keyboard. Basic use relies on Windows built-in drivers; advanced Magic Link controls are still in development.
- Windows 10 & 11, x64. Wired and Bluetooth support depends on the device.

The 30-day free trial and purchases open with the first production-signed release.
Magic Link is not affiliated with or endorsed by Apple.

## Website development

Minimal bilingual product website for Magic Link, deployed with Cloudflare Workers Static Assets.

- `/` — global English page
- `/zh-cn` — Simplified Chinese page
- `/third-party-notices` — existing third-party notices, hosted locally
- `public/404.html` — not-found page, served with HTTP 404 when no asset matches
- `wrangler.json` — Workers deployment configuration; keep `assets.not_found_handling` set to `404-page`, not `single-page-application`
- `VITE_DOWNLOAD_URL` — latest signed installer or GitHub Release
- `VITE_PADDLE_CHECKOUT_URL` — Paddle checkout URL

```bash
npm install
npm run dev
npm run build
```

Cloudflare Workers build settings:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Version command: `npx wrangler versions upload`
- Root directory: `/` (repository root)
- Static asset directory: `./dist` (set in `wrangler.json`)
- Production branch: `main`
- Node.js: `22`

The Worker name is `magiclink`, matching the existing Cloudflare project. No Worker script or application backend is deployed. Custom domains remain managed in the Cloudflare dashboard. The compatibility date is preserved from the existing deployment.

The website contains no application source code, license private keys, or activation tools.

After deployment, verify that an unknown URL returns HTTP 404, both language pages return HTTP 200, and `/third-party-notices` opens. Vite's local development fallback is not a substitute for checking Cloudflare's HTTP behavior.

Before adding a model-by-model compatibility table or installation guide, confirm the tested hardware list and the production-signed installer workflow. Do not present development-build instructions as a released consumer installation process.
