type Language = "en" | "zh";

const links = {
  download: process.env.NEXT_PUBLIC_DOWNLOAD_URL || "https://github.com/sid12333/magic-link-windows/releases/latest",
  checkout: process.env.NEXT_PUBLIC_PADDLE_CHECKOUT_URL || "#buy",
  github: "https://github.com/sid12333/magic-link-windows",
};

const copy = {
  en: {
    nav: ["Features", "Compatibility", "Questions"],
    eyebrow: "Made for Windows 10 & 11",
    title: <>Apple input devices.<br />At home on Windows.</>,
    intro: "One focused app for Magic Trackpad, Magic Mouse, and Magic Keyboard. Native gestures, clearer controls, and a more reliable connection.",
    trial: "Download free trial",
    purchase: "Purchase",
    tryFirst: "Try it on your own hardware before purchasing.",
    facts: ["Windows 10 & 11", "64-bit", "USB + Bluetooth", "Chinese + English"],
    featureLabel: "Why Magic Link",
    featureTitle: "The controls you expect.\nNothing you don’t.",
    features: [
      ["Natural gestures", "Tune tracking, clicking, scrolling, zooming, and multi-finger gestures from one clean screen."],
      ["A steadier connection", "See the active transport, repair the connection, and export useful diagnostics when Bluetooth misbehaves."],
      ["One place for every device", "Discover Magic Trackpad, Magic Mouse, and Magic Keyboard without juggling separate utilities."],
    ],
    compatibilityLabel: "Compatibility",
    compatibilityTitle: "Check your setup before you buy.",
    compatibilityBody: "Magic Link currently provides its complete driver and settings experience for supported Magic Trackpad models. Magic Mouse and Magic Keyboard discovery and device management are available; dedicated drivers and advanced settings are still in development.",
    supported: "Best experience",
    supportedValue: "Magic Trackpad over USB or Bluetooth",
    system: "System",
    systemValue: "Windows 10 or 11, x64",
    developing: "In development",
    developingValue: "Dedicated Magic Mouse and Magic Keyboard controls",
    buyLabel: "Try first. Purchase when it fits.",
    buyTitle: "A simple license for one Windows PC.",
    buyBody: "Download the trial, confirm that your device works, then purchase securely. Your license covers all supported Magic Link devices on the licensed computer.",
    checkoutNote: "Secure checkout will be enabled when the production-signed release is ready.",
    faqLabel: "Questions",
    faqTitle: "Good to know.",
    faqs: [
      ["Can I test it before purchasing?", "Yes. The trial is designed so you can confirm device and driver compatibility first."],
      ["Does it work without an internet connection?", "Core settings and device use are local. License activation and update checks may require a connection."],
      ["Is Magic Link made by Apple?", "No. Magic Link is an independent Windows utility and is not affiliated with or endorsed by Apple."],
      ["Where do I report a problem?", "Use GitHub Issues and include your Windows version, device model, connection type, and diagnostics."],
    ],
    github: "GitHub",
    notice: "Independent software for Apple input devices on Windows.",
  },
  zh: {
    nav: ["功能", "兼容性", "常见问题"],
    eyebrow: "为 Windows 10 与 11 打造",
    title: <>让 Apple 输入设备，<br />自然融入 Windows。</>,
    intro: "用一个简洁的应用管理 Magic Trackpad、Magic Mouse 与 Magic Keyboard，获得原生手势、清晰设置和更稳定的连接体验。",
    trial: "免费下载试用",
    purchase: "购买许可证",
    tryFirst: "先在你的电脑和设备上确认兼容，再决定是否购买。",
    facts: ["Windows 10 与 11", "64 位", "USB + 蓝牙", "中文 + English"],
    featureLabel: "为什么选择 Magic Link",
    featureTitle: "需要的控制，\n刚刚好。",
    features: [
      ["自然的手势", "在一个清晰界面中调整跟踪、点按、滚动、缩放和多指手势。"],
      ["更稳定的连接", "查看当前连接方式，修复异常连接，并在蓝牙出现问题时导出有效诊断信息。"],
      ["统一管理设备", "集中识别 Magic Trackpad、Magic Mouse 和 Magic Keyboard，不再切换多个工具。"],
    ],
    compatibilityLabel: "兼容性",
    compatibilityTitle: "购买前，先确认你的设备。",
    compatibilityBody: "当前版本已为受支持的 Magic Trackpad 提供完整驱动与设置功能。Magic Mouse 和 Magic Keyboard 已支持识别与设备管理，专用驱动和高级设置仍在开发。",
    supported: "最佳体验",
    supportedValue: "通过 USB 或蓝牙连接的 Magic Trackpad",
    system: "系统要求",
    systemValue: "Windows 10 或 11，x64",
    developing: "正在开发",
    developingValue: "Magic Mouse 与 Magic Keyboard 专用控制",
    buyLabel: "先试用，合适再购买",
    buyTitle: "一台 Windows 电脑，一份简单许可证。",
    buyBody: "下载试用版，确认设备可以正常工作后再安全购买。一份许可证覆盖该电脑上所有受支持的 Magic Link 设备。",
    checkoutNote: "正式签名版本准备完成后，将开放安全结账。",
    faqLabel: "常见问题",
    faqTitle: "购买前需要知道的事。",
    faqs: [
      ["购买前可以试用吗？", "可以。请先通过试用确认你的设备、系统和驱动兼容性。"],
      ["断网后还能使用吗？", "设备使用和核心设置在本地运行；许可证激活与检查更新可能需要联网。"],
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
  return (
    <main lang={isZh ? "zh-CN" : "en"}>
      <nav className="nav shell" aria-label={isZh ? "主导航" : "Primary navigation"}>
        <a className="brand" href="#top" aria-label="Magic Link home">Magic Link</a>
        <div className="navLinks">
          <a href="#features">{c.nav[0]}</a>
          <a href="#compatibility">{c.nav[1]}</a>
          <a href="#questions">{c.nav[2]}</a>
          <a className="language" href={isZh ? "/" : "/zh-cn"}>{isZh ? "EN" : "中文"}</a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <p className="eyebrow">{c.eyebrow}</p>
        <h1>{c.title}</h1>
        <p className="lede">{c.intro}</p>
        <div className="heroActions">
          <a className="button primary" href={links.download}>{c.trial}</a>
          <a className="button secondary" href="#buy">{c.purchase}</a>
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
          <a className="button primary" href={links.download}>{c.trial}</a>
          <a className="button blue" href={links.checkout}>{c.purchase}</a>
        </div>
        {!process.env.NEXT_PUBLIC_PADDLE_CHECKOUT_URL && <p className="checkoutNote">{c.checkoutNote}</p>}
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
          <div className="footerLinks"><a href={links.github}>{c.github}</a><a href="https://github.com/sid12333/magic-link-windows/blob/main/THIRD_PARTY_NOTICES.md">Third-party notices</a></div>
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
