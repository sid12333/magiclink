type Language = "en" | "zh";

const links = {
  download: process.env.NEXT_PUBLIC_DOWNLOAD_URL || "",
  checkout: process.env.NEXT_PUBLIC_PADDLE_CHECKOUT_URL || "",
  github: "https://github.com/sid12333/magic-link-windows",
};

const copy = {
  en: {
    nav: ["Features", "Compatibility", "FAQ"],
    navTrial: "Free trial",
    navSoon: "Coming soon",
    eyebrow: "Made for Windows 10 & 11",
    title: <>Use your Magic devices <br />on Windows.</>,
    intro: "Connect and manage Magic Trackpad, Magic Mouse, and Magic Keyboard. Get full gestures and controls for supported Magic Trackpad models.",
    trial: "Download free trial",
    trialSoon: "Free trial coming soon",
    purchase: "Buy license",
    licenseDetails: "License details",
    purchaseSoon: "Purchase coming soon",
    tryFirst: "Free for 30 days. Check compatibility before you buy.",
    facts: ["Windows 10 & 11", "64-bit", "USB + Bluetooth", "English + Chinese"],
    featureLabel: "Why Magic Link",
    featureTitle: "The controls you expect.\nNothing you don’t.",
    features: [
      ["Full Trackpad controls", "Tune tracking, clicking, scrolling, zooming, and multi-finger gestures from one clean screen."],
      ["A steadier connection", "See how your device is connected, repair the connection, and export diagnostics when Bluetooth misbehaves."],
      ["One app for all three", "Discover and manage Magic Trackpad, Magic Mouse, and Magic Keyboard in one place."],
    ],
    compatibilityLabel: "Compatibility",
    compatibilityTitle: "Check compatibility before you buy.",
    compatibilityBody: "Full drivers and settings are available for supported Magic Trackpad models. Magic Mouse and Magic Keyboard already work with Windows built-in drivers and can be managed in Magic Link. Advanced Magic Link controls are still in development.",
    supported: "Fully supported",
    supportedValue: "Supported Magic Trackpad models over USB or Bluetooth",
    system: "System",
    systemValue: "Windows 10 or 11, x64",
    developing: "In development",
    developingValue: "Advanced Magic Mouse and Magic Keyboard controls",
    buyLabel: "Try it free for 30 days",
    buyTitle: "One license. One Windows PC.",
    buyBody: "Download the free trial and make sure your setup works. One license covers every supported Magic Link device on that PC.",
    checkoutNote: "Purchases open with the first production-signed release.",
    promoNote: "The free trial and purchases open with the first production-signed release.",
    faqLabel: "Questions",
    faqTitle: "Good to know.",
    faqs: [
      ["Can I test it before purchasing?", "Yes. The trial is designed so you can confirm device and driver compatibility first."],
      ["Does it work without an internet connection?", "Core settings and device use are local. License activation and update checks may require a connection."],
      ["Do Magic Mouse and Magic Keyboard work now?", "Yes. Windows built-in drivers provide basic use. Magic Link can discover and manage them, while advanced controls are still in development."],
      ["Is Magic Link made by Apple?", "No. Magic Link is an independent Windows utility and is not affiliated with or endorsed by Apple."],
      ["Where do I report a problem?", "Use GitHub Issues and include your Windows version, device model, connection type, and diagnostics."],
    ],
    github: "GitHub",
    notice: "Independent software for Apple input devices on Windows.",
  },
  zh: {
    nav: ["功能", "兼容性", "常见问题"],
    navTrial: "免费试用",
    navSoon: "即将开放",
    eyebrow: "为 Windows 10 与 11 打造",
    title: <>在 Windows 上使用<br />你的 Magic 设备。</>,
    intro: "连接和管理 Magic Trackpad、Magic Mouse 与 Magic Keyboard，并为受支持的 Magic Trackpad 提供完整手势和控制。",
    trial: "下载免费试用版",
    trialSoon: "试用版即将开放",
    purchase: "购买许可证",
    licenseDetails: "了解许可证",
    purchaseSoon: "即将开放购买",
    tryFirst: "免费试用 30 天，购买前先确认兼容性。",
    facts: ["Windows 10 与 11", "64 位", "USB + 蓝牙", "中文 + 英文"],
    featureLabel: "为什么选择 Magic Link",
    featureTitle: "需要的控制，\n刚刚好。",
    features: [
      ["完整的触控板控制", "在一个清晰界面中调整跟踪、点按、滚动、缩放和多指手势。"],
      ["更稳定的连接", "查看设备连接方式、修复异常连接，并在蓝牙出现问题时导出诊断信息。"],
      ["一个应用管理三种设备", "集中识别和管理 Magic Trackpad、Magic Mouse 与 Magic Keyboard。"],
    ],
    compatibilityLabel: "兼容性",
    compatibilityTitle: "购买前确认兼容性。",
    compatibilityBody: "受支持的 Magic Trackpad 已提供完整驱动和设置。Magic Mouse 与 Magic Keyboard 可通过 Windows 自带驱动完成基本使用，也可以在 Magic Link 中识别和管理；高级控制仍在开发。",
    supported: "完整支持",
    supportedValue: "通过 USB 或蓝牙连接的受支持 Magic Trackpad",
    system: "系统要求",
    systemValue: "Windows 10 或 11，x64",
    developing: "正在开发",
    developingValue: "Magic Mouse 与 Magic Keyboard 高级控制",
    buyLabel: "免费试用 30 天",
    buyTitle: "一份许可证，一台 Windows 电脑。",
    buyBody: "先下载免费试用版，确认你的设备可以正常工作。一份许可证覆盖该电脑上所有受支持的 Magic Link 设备。",
    checkoutNote: "首个正式签名版本发布后开放购买。",
    promoNote: "首个正式签名版本发布后开放试用和购买。",
    faqLabel: "常见问题",
    faqTitle: "购买前需要知道的事。",
    faqs: [
      ["购买前可以试用吗？", "可以。请先通过试用确认你的设备、系统和驱动兼容性。"],
      ["断网后还能使用吗？", "设备使用和核心设置在本地运行；许可证激活与检查更新可能需要联网。"],
      ["Magic Mouse 和 Magic Keyboard 现在能用吗？", "可以。Windows 自带驱动支持基本使用，Magic Link 可以识别和管理设备，高级控制仍在开发。"],
      ["Magic Link 是 Apple 官方软件吗？", "不是。Magic Link 是独立开发的 Windows 工具，与 Apple 没有关联，也未获得 Apple 背书。"],
      ["遇到问题在哪里反馈？", "请前往 GitHub Issues，并附上 Windows 版本、设备型号、连接方式和诊断信息。"],
    ],
    github: "前往 GitHub",
    notice: "为 Windows 上的 Apple 输入设备打造的独立软件。",
  },
};

export default function LandingPage({ language }: { language: Language }) {
  const c = copy[language];
  const isZh = language === "zh";
  const hasDownload = Boolean(links.download);
  const hasCheckout = Boolean(links.checkout);
  return (
    <main lang={isZh ? "zh-CN" : "en"}>
      <nav className="nav shell" aria-label={isZh ? "主导航" : "Primary navigation"}>
        <a className="brand" href="#top" aria-label="Magic Link home">Magic Link</a>
        <div className="navLinks">
          <a href="#features">{c.nav[0]}</a>
          <a href="#compatibility">{c.nav[1]}</a>
          <a href="#questions">{c.nav[2]}</a>
          {hasDownload
            ? <a className="navTrial" href={links.download}>{c.navTrial}</a>
            : <span className="navTrial navDisabled" aria-disabled="true">{c.navSoon}</span>}
          <a className="language" href={isZh ? "/" : "/zh-cn"} aria-label={isZh ? "Switch to English" : "切换到中文"}>{isZh ? "EN" : "中文"}</a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <p className="eyebrow">{c.eyebrow}</p>
        <h1>{c.title}</h1>
        <p className="lede">{c.intro}</p>
        <div className="heroActions">
          {hasDownload
            ? <a className="button primary" href={links.download}>{c.trial}</a>
            : <span className="button disabled" aria-disabled="true">{c.trialSoon}</span>}
          <a className="button secondary" href="#buy">{hasCheckout ? c.purchase : c.licenseDetails}</a>
        </div>
        <p className="microcopy">{c.tryFirst}</p>
        <DeviceStage />
      </section>

      <div className="factBar" aria-label={isZh ? "产品信息" : "Product facts"}>
        {c.facts.map((fact) => <span key={fact}>{fact}</span>)}
      </div>

      <section className="section shell" id="features">
        <p className="sectionLabel">{c.featureLabel}</p>
        <h2 className="sectionTitle preserveLines">{c.featureTitle}</h2>
        <div className="featureGrid">
          {c.features.map(([title, body], index) => (
            <article className="featureCard" key={title}>
              <div className={`featureVisual visual${index + 1}`} aria-hidden="true">
                {index === 0 && <><div className="gesturePad"><i /><i /></div><div className="gestureLine" /></>}
                {index === 1 && <><div className="statusDot" /><b>{isZh ? "蓝牙已连接" : "Bluetooth connected"}</b><span>Magic Trackpad · 92%</span></>}
                {index === 2 && <><DeviceRow name="Magic Trackpad" /><DeviceRow name="Magic Mouse" /><DeviceRow name="Magic Keyboard" /></>}
              </div>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section compatibility" id="compatibility">
        <div className="shell compatibilityGrid">
          <div>
            <p className="sectionLabel">{c.compatibilityLabel}</p>
            <h2 className="sectionTitle compact">{c.compatibilityTitle}</h2>
            <p className="sectionBody">{c.compatibilityBody}</p>
          </div>
          <dl className="compatibilityList">
            <div><dt>{c.supported}</dt><dd>{c.supportedValue}</dd></div>
            <div><dt>{c.system}</dt><dd>{c.systemValue}</dd></div>
            <div><dt>{c.developing}</dt><dd>{c.developingValue}</dd></div>
          </dl>
        </div>
      </section>

      <section className="section shell buy" id="buy">
        <p className="sectionLabel">{c.buyLabel}</p>
        <h2 className="sectionTitle compact">{c.buyTitle}</h2>
        <p className="sectionBody centered">{c.buyBody}</p>
        <div className="buyActions">
          {hasDownload
            ? <a className="button primary" href={links.download}>{c.trial}</a>
            : <span className="button disabled" aria-disabled="true">{c.trialSoon}</span>}
          {hasCheckout
            ? <a className="button blue" href={links.checkout}>{c.purchase}</a>
            : <span className="button disabled" aria-disabled="true">{c.purchaseSoon}</span>}
        </div>
        {!hasDownload && !hasCheckout && <p className="checkoutNote">{c.promoNote}</p>}
        {hasDownload && !hasCheckout && <p className="checkoutNote">{c.checkoutNote}</p>}
      </section>

      <section className="section questions shell" id="questions">
        <p className="sectionLabel">{c.faqLabel}</p>
        <h2 className="sectionTitle compact">{c.faqTitle}</h2>
        <div className="faqList">
          {c.faqs.map(([question, answer]) => (
            <details key={question}><summary>{question}</summary><p>{answer}</p></details>
          ))}
        </div>
      </section>

      <footer>
        <div className="shell footerInner">
          <div><a className="brand" href="#top">Magic Link</a><p>{c.notice}</p></div>
          <div className="footerLinks"><a href={links.github}>{c.github}</a><a href="https://github.com/sid12333/magic-link-windows/blob/main/THIRD_PARTY_NOTICES.md">{isZh ? "第三方声明" : "Third-party notices"}</a></div>
        </div>
        <p className="legal shell">Magic Link is independent software and is not affiliated with or endorsed by Apple Inc. Apple, Magic Trackpad, Magic Mouse, and Magic Keyboard are trademarks of Apple Inc.</p>
      </footer>
    </main>
  );
}

function DeviceStage() {
  return <div className="deviceStage" aria-label="Magic Trackpad, Magic Keyboard, and Magic Mouse"><div className="trackpad" /><div className="keyboard"><i /><i /><i /></div><div className="mouse"><i /></div></div>;
}

function DeviceRow({ name }: { name: string }) {
  return <div className="deviceRow"><i /><span>{name}</span><b>●</b></div>;
}
