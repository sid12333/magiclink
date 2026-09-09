import TrackpadArticle from "./TrackpadArticle";

const links = {
  home: "https://magic-link.app/",
  releases: "https://github.com/sid12333/magiclink/releases",
  issues: "https://github.com/sid12333/magiclink/issues",
  communityDriver: "https://github.com/vitoplantamura/MagicTrackpad2ForWindows",
  magicUtilities: "https://magicutilities.net/",
};

type PageKind = "trackpad" | "install" | "compare" | "article";

const pages = {
  article: {
    eyebrow: "Windows 11 buying and setup guide",
    title: "What Is the Best Way to Use an Apple Magic Trackpad on Windows 11?",
    intro: "Compare a free Precision Touchpad driver, Magic Utilities, and Magic Link by your hardware, daily gestures, and release availability.",
  },
  trackpad: {
    eyebrow: "Magic Trackpad for Windows",
    title: "Native-feeling Trackpad controls, in one focused Windows app.",
    intro: "Magic Link brings tracking, clicking, scrolling, zooming, and multi-finger gesture settings for supported Magic Trackpad models to Windows 10 and 11.",
  },
  install: {
    eyebrow: "Installation guide",
    title: "Prepare Windows 11 for Magic Trackpad.",
    intro: "The signed Magic Link installer is not public yet. Use this checklist now; exact installation and rollback steps will be added to the release notes before download opens.",
  },
  compare: {
    eyebrow: "Windows options compared",
    title: "Choose the Magic-device setup that fits you.",
    intro: "Magic Link, the community Magic Trackpad driver, and Magic Utilities solve different problems. This comparison makes product scope and availability explicit.",
  },
} satisfies Record<PageKind, { eyebrow: string; title: string; intro: string }>;

export default function ResourcePage({ kind }: { kind: PageKind }) {
  const page = pages[kind];
  return (
    <main className="resourcePage">
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="/">Magic Link</a>
        <div className="navLinks resourceNav">
          <a href="/magic-trackpad-windows">Trackpad</a>
          <a href="/guides/install-magic-trackpad-windows-11">Install</a>
          <a href="/compare/magic-link-vs-magic-utilities">Compare</a>
          <a className="language" href={links.releases}>Releases</a>
        </div>
      </nav>

      <header className="resourceHero shell">
        <p className="sectionLabel">{page.eyebrow}</p>
        <h1>{page.title}</h1>
        <p className="lede">{page.intro}</p>
        <div className="statusStrip"><b>Current status</b><span>Controls complete for Trackpad, Mouse, and Keyboard</span><span>Public signed installer in preparation</span></div>
      </header>

      {kind === "trackpad" && <TrackpadContent />}
      {kind === "install" && <InstallContent />}
      {kind === "compare" && <CompareContent />}
      {kind === "article" && <TrackpadArticle />}

      <footer>
        <div className="shell footerInner">
          <div><a className="brand" href="/">Magic Link</a><p>Independent Windows software for Apple input devices.</p></div>
          <div className="footerLinks"><a href={links.home}>Website</a><a href={links.releases}>Releases</a><a href={links.issues}>Support</a><a href="/third-party-notices">Third-party notices</a></div>
        </div>
        <p className="legal shell">Magic Link is independent software and is not affiliated with or endorsed by Apple Inc. Product and company names are trademarks of their respective owners.</p>
      </footer>
    </main>
  );
}

function TrackpadContent() {
  return <>
    <section className="section shell splitFeature">
      <div>
        <p className="sectionLabel">What it controls</p>
        <h2 className="sectionTitle compact">The settings you reach for every day.</h2>
        <ul className="checkList">
          <li>Pointer tracking and click behavior</li>
          <li>Two-finger scrolling and zoom</li>
          <li>Multi-finger gesture configuration</li>
          <li>Wired and Bluetooth device visibility</li>
          <li>Connection status and troubleshooting</li>
        </ul>
      </div>
      <figure className="settingsFigure"><img src="/products/trackpad-settings-en.png?v=2" width="702" height="607" alt="Magic Link Trackpad settings screen" /><figcaption>Actual Magic Link settings interface.</figcaption></figure>
    </section>
    <section className="section compatibility">
      <div className="shell">
        <p className="sectionLabel">Compatibility promise</p>
        <h2 className="sectionTitle compact">Specific claims, published with the release.</h2>
        <p className="sectionBody">Magic Link targets Windows 10 and Windows 11 on x64 PCs. Because the public installer is still being prepared, we will not claim every Trackpad generation or connection mode yet. The first release notes will list each validated model, wired/Bluetooth support, driver requirements, and known limitations.</p>
        <div className="evidenceGrid">
          <article><b>Verified now</b><span>Trackpad controls are implemented.</span></article>
          <article><b>Published at release</b><span>Exact model and connection matrix.</span></article>
          <article><b>Test before buying</b><span>Planned 30-day trial.</span></article>
        </div>
      </div>
    </section>
    <Cta title="Want to know when the installer is ready?" />
  </>;
}

function InstallContent() {
  return <>
    <section className="section shell articleSection">
      <p className="sectionLabel">Before the public release</p>
      <h2 className="sectionTitle compact">A clean starting point prevents most driver conflicts.</h2>
      <ol className="stepList">
        <li><b>Confirm your PC.</b><span>Magic Link currently targets Windows 10 or 11 on x64 hardware.</span></li>
        <li><b>Identify the exact device.</b><span>Record the Magic Trackpad model or part number and whether you plan to use Bluetooth or a cable.</span></li>
        <li><b>Inventory existing drivers.</b><span>Note any Apple Boot Camp, community Trackpad driver, Trackpad++, or Magic Utilities installation. Do not run overlapping Trackpad drivers.</span></li>
        <li><b>Back up custom gestures.</b><span>Take screenshots of settings you want to reproduce before changing drivers.</span></li>
        <li><b>Wait for the signed release notes.</b><span>They will contain the supported-model matrix, installer hash, exact install sequence, restart requirements, and rollback steps.</span></li>
      </ol>
      <aside className="callout"><b>No download is available yet.</b><p>Avoid files claiming to be Magic Link installers unless they are attached to the official GitHub Releases page linked from magic-link.app.</p></aside>
    </section>
    <section className="section compatibility">
      <div className="shell compactCopy"><p className="sectionLabel">When download opens</p><h2 className="sectionTitle compact">The guide will be versioned, not generic.</h2><p className="sectionBody">Installation instructions will be tied to a specific Magic Link version and test date. That keeps device IDs, screenshots, Windows behavior, and known limitations auditable instead of presenting guesses as support.</p></div>
    </section>
    <Cta title="Follow the official release channel." />
  </>;
}

function CompareContent() {
  return <>
    <section className="section shell comparisonSection">
      <p className="lastChecked">Facts checked 9 September 2026. Verify linked product pages before installing or purchasing.</p>
      <div className="tableWrap"><table className="comparisonTable">
        <thead><tr><th>Option</th><th>Best for</th><th>Devices</th><th>Availability</th><th>Price model</th></tr></thead>
        <tbody>
          <tr><th>Magic Link</th><td>One interface for all three Magic device families</td><td>Supported Trackpad, Mouse, and Keyboard models</td><td>Controls complete; public signed installer in preparation</td><td>Planned 30-day trial; displayed license pricing is not yet for sale</td></tr>
          <tr><th><a href={links.communityDriver}>Community Trackpad driver</a></th><td>A free Windows Precision Touchpad driver</td><td>Magic Trackpad 2 family; consult its README and releases</td><td>Public GitHub releases</td><td>Free, open-source driver</td></tr>
          <tr><th><a href={links.magicUtilities}>Magic Utilities</a></th><td>An established, immediately available commercial option</td><td>Magic Keyboard, Mouse, and Trackpad products listed by the vendor</td><td>Public trial/download</td><td>Paid per device and license term; check current vendor pricing</td></tr>
        </tbody>
      </table></div>
      <div className="decisionGrid">
        <article><b>Choose Magic Link later if…</b><p>You want a single focused app for supported Trackpad, Mouse, and Keyboard models and are comfortable waiting for the public installer.</p></article>
        <article><b>Choose the community driver if…</b><p>You need a free Trackpad-only solution now and are comfortable following driver-focused GitHub instructions.</p></article>
        <article><b>Choose Magic Utilities if…</b><p>You need an established commercial download now and its device-based licensing fits your setup.</p></article>
      </div>
      <p className="sourceNote">Comparison is based on each product’s public website or repository. No affiliation or endorsement is implied.</p>
    </section>
    <Cta title="Track Magic Link’s first public release." />
  </>;
}

function Cta({ title }: { title: string }) {
  return <section className="section shell ctaPanel"><div><p className="sectionLabel">Release updates</p><h2>{title}</h2><p>Use the official GitHub Releases page for version notes, installer assets, hashes, and compatibility details.</p></div><a className="button primary" href={links.releases}>View GitHub Releases</a></section>;
}
