# Magic Link for Windows

Magic Link is an independent Windows app for Magic Trackpad, Magic Mouse, and Magic Keyboard.

**Official website:** [magic-link.app](https://magic-link.app/) · [简体中文](https://magic-link.app/zh-cn)

- Controls for supported Magic Trackpad models: tracking, clicking, scrolling, zooming, and multi-finger gestures.
- Discover and manage Magic Mouse and Magic Keyboard. Basic use relies on Windows built-in drivers; advanced Magic Link controls are still in development.
- Windows 10 & 11, x64. Wired and Bluetooth support depends on the device.

The 30-day free trial and purchases open with the first production-signed release.
Magic Link is not affiliated with or endorsed by Apple.

## Website development

Minimal bilingual product website for Magic Link, deployed as a static site on Cloudflare Pages.

- `/` — global English page
- `/zh-cn` — Simplified Chinese page
- `/third-party-notices` — existing third-party notices, hosted locally
- `public/404.html` — real not-found page for Cloudflare Pages; keep this file to prevent unknown URLs from serving the homepage
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

After deployment, verify that an unknown URL returns HTTP 404, both language pages return HTTP 200, and `/third-party-notices` opens. Vite's local development fallback is not a substitute for checking Cloudflare's HTTP behavior.

Before adding a model-by-model compatibility table or installation guide, confirm the tested hardware list and the production-signed installer workflow. Do not present development-build instructions as a released consumer installation process.
