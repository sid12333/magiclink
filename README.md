<p align="center">
  <a href="https://magic-link.app/">
    <img src="public/og.png" width="900" alt="Magic Link — Magic Trackpad, Mouse, and Keyboard on Windows">
  </a>
</p>

<h1 align="center">Magic Link for Windows</h1>

<p align="center">
  Complete controls for supported Magic Trackpad, Magic Mouse, and Magic Keyboard models on Windows 10 and 11.
</p>

<p align="center">
  <a href="https://magic-link.app/"><strong>Official website</strong></a>
  · <a href="https://magic-link.app/zh-cn">简体中文</a>
  · <a href="https://magic-link.app/magic-trackpad-windows">Trackpad for Windows</a>
  · <a href="https://magic-link.app/guides/install-magic-trackpad-windows-11">Install guide</a>
  · <a href="https://github.com/sid12333/magiclink/releases">Releases</a>
  · <a href="https://github.com/sid12333/magiclink/issues">Support</a>
</p>

## Product status

Magic Link's device controls are complete for all three supported device families. The first production-signed public installer and final compatibility matrix are being prepared; **there is no public download or purchase flow yet**.

When release opens, the official GitHub release will include the versioned installer, integrity information, exact supported-model and connection matrix, known limitations, and rollback steps. A 30-day trial is planned so you can verify compatibility before buying.

## What Magic Link does

**Using an Apple Magic Trackpad on Windows 11?** Read our [practical selection guide](https://magic-link.app/guides/apple-magic-trackpad-windows-11) comparing the free community driver, Magic Utilities, and Magic Link. It covers model compatibility, setup trade-offs, release availability, and what to test before choosing.

| Device family | Magic Link controls | Connection information |
| --- | --- | --- |
| Magic Trackpad | Tracking, clicking, scrolling, zooming, and multi-finger gestures | Wired or Bluetooth, depending on the validated model |
| Magic Mouse | Dedicated controls and device management | Model-specific details will ship with the release notes |
| Magic Keyboard | Dedicated controls and device management | Model-specific details will ship with the release notes |

Magic Link currently targets **Windows 10 and Windows 11 on x64 PCs**. We do not claim untested models: the exact model numbers, connection modes, driver requirements, and known limitations will be published with the first signed release.

## Install and support

- Download only from [official Magic Link releases](https://github.com/sid12333/magiclink/releases) linked by `magic-link.app`.
- Before installing, read the version-specific release notes and remove or disable conflicting third-party device drivers as instructed.
- To report a problem, [open a GitHub issue](https://github.com/sid12333/magiclink/issues) with your Windows version, exact device model, connection type, Magic Link version, and reproduction steps.
- Never publish activation codes, license files, or personal information in an issue.

## 中文说明

Magic Link 为 Windows 10 和 11 上受支持的 Magic Trackpad、Magic Mouse 和 Magic Keyboard 提供完整控制。三类设备的控制功能均已完成；首个正式签名安装包与最终兼容性表正在准备中，**目前尚无公开下载或购买入口**。

正式发布时，GitHub Release 将提供版本化安装包、完整性信息、经过验证的具体型号与连接方式、已知限制和回退步骤。计划提供 30 天免费试用，方便购买前确认兼容性。

## Independence and trademarks

Magic Link is independent software and is not affiliated with or endorsed by Apple Inc. Apple, Magic Trackpad, Magic Mouse, and Magic Keyboard are trademarks of Apple Inc. Windows is a trademark of the Microsoft group of companies. See the [third-party notices](https://magic-link.app/third-party-notices).

---

<details>
<summary><strong>Website development and deployment</strong></summary>

This public repository contains the bilingual product website, product guides, comparison content, public pricing display, and build/test files. It does not contain the Magic Link application source, payment integration, order processing, license private keys, or activation tools.

- `/` — English product page
- `/zh-cn` — Simplified Chinese product page
- `/magic-trackpad-windows` — Trackpad product page
- `/guides/install-magic-trackpad-windows-11` — installation preparation guide
- `/compare/magic-link-vs-magic-utilities` — product comparison
- `/third-party-notices` — third-party notices

```bash
npm install
npm run dev
npm test
```

Cloudflare Workers uses `npm run build`, `npx wrangler deploy`, the `main` branch, and the `dist` asset directory.

</details>
