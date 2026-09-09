import LicensePicker from "./LicensePicker";

type Language = "en" | "zh";

const links = {
  github: "https://github.com/sid12333/magiclink",
  releases: "https://github.com/sid12333/magiclink/releases",
  issues: "https://github.com/sid12333/magiclink/issues",
};

const copy = {
  en: {
    nav: ["Features", "Compatibility", "Guides"],
    title: <>Use your Magic devices <br />on Windows</>,
    intro: "One app to connect and manage Magic Trackpad, Magic Mouse, and Magic Keyboard.",
    trialSoon: "Follow the public release",
    licenseDetails: "Preview pricing",
    tryFirst: "Product controls are complete. The production-signed public installer is being prepared.",
    facts: ["Windows 10 & 11", "64-bit", "Wired + Bluetooth"],
    featureLabel: "Why Magic Link",
    features: [
      ["Complete Trackpad controls", "Tune tracking, clicking, scrolling, zooming, and multi-finger gestures in one app."],
      ["Complete Mouse controls", "Configure your supported Magic Mouse and see how it is connected."],
      ["Complete Keyboard controls", "Manage supported Magic Keyboard models alongside your Trackpad and Mouse."],
    ],
    compatibilityLabel: "Compatibility",
    compatibilityTitle: "Check compatibility before you buy.",
    compatibilityBody: "Controls for Magic Trackpad, Magic Mouse, and Magic Keyboard are complete. The first signed public release will publish the exact validated model and connection matrix so you can confirm compatibility before installing.",
    supported: "Product status",
    supportedValue: "Device-specific controls complete for Trackpad, Mouse, and Keyboard",
    system: "System requirements",
    systemValue: "Windows 10 or 11, x64",
    developing: "Release status",
    developingValue: "Production-signed public installer and final compatibility matrix in preparation",
    faqLabel: "FAQ",
    faqTitle: "Before you buy",
    faqs: [
      ["What is Magic Link for Windows?", "Magic Link is an independent app with device-specific controls for supported Magic Trackpad, Magic Mouse, and Magic Keyboard models on Windows 10 and 11."],
      ["Does Magic Trackpad work with Windows 11?", "Yes. Magic Link supports compatible Magic Trackpad models on Windows 10 and 11 over wired or Bluetooth connections."],
      ["Can I use Magic Trackpad gestures on Windows?", "Yes. For supported models, Magic Link provides tracking, clicking, scrolling, zooming, and multi-finger gesture settings."],
      ["Can I try it before buying?", "A 30-day free trial is planned for the first public release so you can test device, system, and driver compatibility."],
      ["Does it work without an internet connection?", "Core settings and device use are local. License activation and update checks may require a connection."],
      ["Are Magic Mouse and Magic Keyboard controls complete?", "Yes. Magic Link controls for all three device families are complete. The public installer is still being prepared."],
      ["Is Magic Link made by Apple?", "No. Magic Link is an independent Windows utility and is not affiliated with or endorsed by Apple."],
      ["Where do I report a problem?", "Use GitHub Issues and include your Windows version, device model, connection type, and diagnostics."],
    ],
    github: "GitHub",
    releases: "Releases",
    support: "Support",
    notice: "Independent software for Apple input devices on Windows.",
  },
  zh: {
    nav: ["功能", "兼容性", "使用指南"],
    title: <>在 Windows 上使用 <br />Magic 设备</>,
    intro: "一个 App，连接和管理 Magic Trackpad、Magic Mouse、Magic Keyboard",
    trialSoon: "关注正式发布",
    licenseDetails: "查看价格方案",
    tryFirst: "三类设备控制功能均已完成，正式签名安装包正在准备中。",
    facts: ["Windows 10 & 11", "64 位", "有线 + 蓝牙"],
    featureLabel: "为什么选择 Magic Link",
    features: [
      ["完整的触控板控制", "调整跟踪、点按、滚动、缩放和多指手势。"],
      ["完整的鼠标控制", "配置受支持的 Magic Mouse，并查看设备连接状态。"],
      ["完整的键盘控制", "在同一应用中管理受支持的 Magic Keyboard、触控板和鼠标。"],
    ],
    compatibilityLabel: "兼容性",
    compatibilityTitle: "购买前确认兼容性。",
    compatibilityBody: "Magic Trackpad、Magic Mouse 和 Magic Keyboard 的控制功能均已完成。首个正式签名版本会同时公布经过验证的具体型号与连接方式，方便你在安装前确认兼容性。",
    supported: "产品状态",
    supportedValue: "触控板、鼠标和键盘的专用控制功能均已完成",
    system: "系统要求",
    systemValue: "Windows 10 或 11，x64",
    developing: "发布状态",
    developingValue: "正式签名安装包与最终兼容性表正在准备中",
    faqLabel: "常见问题",
    faqTitle: "购买前须知",
    faqs: [
      ["Magic Link 是什么？", "Magic Link 是用于 Windows 10 和 11 的独立软件，为受支持的 Magic Trackpad、Magic Mouse 和 Magic Keyboard 提供专用控制。"],
      ["Magic Trackpad 可以在 Windows 11 上使用吗？", "可以。Magic Link 支持兼容的 Magic Trackpad 型号，通过有线或蓝牙连接在 Windows 10 和 11 上使用。"],
      ["可以在 Windows 上使用 Magic Trackpad 手势吗？", "可以。对于受支持的型号，Magic Link 提供跟踪、点按、滚动、缩放和多指手势设置。"],
      ["购买前可以试用吗？", "首个公开版本计划提供 30 天免费试用，方便你测试设备、系统和驱动兼容性。"],
      ["断网后还能使用吗？", "设备使用和核心设置在本地运行；许可证激活与检查更新可能需要联网。"],
      ["Magic Mouse 和 Magic Keyboard 的控制完成了吗？", "已完成。Magic Link 的三类设备控制功能均已完成，目前正在准备公开安装包。"],
      ["Magic Link 是 Apple 官方软件吗？", "不是。Magic Link 是独立开发的 Windows 工具，与 Apple 没有关联，也未获得 Apple 背书。"],
      ["遇到问题在哪里反馈？", "请前往 GitHub Issues，并附上 Windows 版本、设备型号、连接方式和诊断信息。"],
    ],
    github: "前往 GitHub",
    releases: "版本发布",
    support: "问题反馈",
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
          <a href="#guides">{c.nav[2]}</a>
          <a href="#buy">{isZh ? "价格" : "Pricing"}</a>
          <details className="mobileMenu">
            <summary>{isZh ? "菜单" : "Menu"}</summary>
            <div className="mobileMenuLinks">
              <a onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")} href="#features">{c.nav[0]}</a>
              <a onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")} href="#compatibility">{c.nav[1]}</a>
              <a onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")} href="#buy">{isZh ? "价格" : "Pricing"}</a>
              <a onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")} href="#guides">{c.nav[2]}</a>
            </div>
          </details>

          <a className="language" href={isZh ? "/" : "/zh-cn"} aria-label={isZh ? "Switch to English" : "切换到中文"}>{isZh ? "EN" : "中文"}</a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <h1>{c.title}</h1>
        <p className={`lede${isZh ? " zhLede" : ""}`}>{c.intro}</p>
        <div className="heroActions">
          <a className="button primary" href={links.releases}>{c.trialSoon}</a>
          <a className="button secondary" href="#buy">{c.licenseDetails}</a>
        </div>
        <p className="microcopy">{c.tryFirst}</p>
        <p className="releaseFollow"><a href="/magic-trackpad-windows">{isZh ? "查看 Magic Trackpad for Windows 专页（英文）" : "Explore Magic Trackpad for Windows"}</a></p>
        <DeviceStage />
      </section>

      <div className="factBar" aria-label={isZh ? "产品信息" : "Product facts"}>
        {c.facts.map((fact) => <span key={fact}>{fact}</span>)}
      </div>

      <section className="section shell" id="features">
        <p className="sectionLabel">{c.featureLabel}</p>
        <div className="featureGrid">
          {c.features.map(([title, body], index) => (
            <article className="featureCard" key={title}>
              <div className={`featureVisual visual${index + 1}`} aria-hidden="true">
                {index === 0 && <img className="featureProduct trackpadSettings" src={isZh ? "/products/trackpad-settings.png?v=2" : "/products/trackpad-settings-en.png?v=2"} width={isZh ? 713 : 702} height={isZh ? 612 : 607} loading="lazy" decoding="async" alt="" />}
                {index === 1 && <><img className="featureProduct mouseProduct" src="/products/mouse-top.jpg" width="1144" height="1144" loading="lazy" decoding="async" alt="" /><div className="connectionCard"><b>{isZh ? "蓝牙已连接 / 有线连接" : "Bluetooth / Wired connection"}</b></div></>}
                {index === 2 && <><DeviceRow name="Magic Trackpad" image="/products/trackpad-top.jpg" /><DeviceRow name="Magic Mouse" image="/products/mouse-top.jpg" /><DeviceRow name="Magic Keyboard" image="/products/keyboard-front.jpg" /></>}
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

      <section className="section shell resourceSection" id="guides">
        <p className="sectionLabel">{isZh ? "深入了解" : "Learn more"}</p>
        <h2 className="sectionTitle compact">{isZh ? "安装前，把关键信息看清楚。" : "Know what to expect before installing."}</h2>
        <div className="resourceGrid">
          <a href="/guides/apple-magic-trackpad-windows-11"><strong>{isZh ? "Windows 11 触控板选型指南" : "The best way to use Magic Trackpad on Windows 11"}</strong><span>{isZh ? "免费驱动、Magic Utilities 与 Magic Link 如何选择（英文）" : "Choose by device model, gestures, and availability"}</span></a>
          <a href="/magic-trackpad-windows"><strong>Magic Trackpad for Windows</strong><span>{isZh ? "功能、发布状态与兼容性说明（英文）" : "Features, release status, and compatibility notes"}</span></a>
          <a href="/guides/install-magic-trackpad-windows-11"><strong>{isZh ? "Windows 11 安装指南" : "Windows 11 installation guide"}</strong><span>{isZh ? "安装前检查、驱动冲突与发布后步骤（英文）" : "Preflight checks, driver conflicts, and release steps"}</span></a>
          <a href="/compare/magic-link-vs-magic-utilities"><strong>{isZh ? "方案对比" : "Compare Windows options"}</strong><span>{isZh ? "与免费驱动、Magic Utilities 的透明比较（英文）" : "A transparent comparison with free drivers and Magic Utilities"}</span></a>
        </div>
      </section>

      <section className="section shell buy" id="buy">
        <LicensePicker language={language} />
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
          <div className="footerLinks"><a href={links.github}>{c.github}</a><a href={links.releases}>{c.releases}</a><a href={links.issues}>{c.support}</a><a href="/third-party-notices">{isZh ? "第三方声明" : "Third-party notices"}</a>
          </div>
        </div>
        <p className="legal shell">Magic Link is independent software and is not affiliated with or endorsed by Apple Inc. Apple, Magic Trackpad, Magic Mouse, and Magic Keyboard are trademarks of Apple Inc.</p>
      </footer>
    </main>
  );
}

function DeviceStage() {
  return (
    <div className="deviceStage" aria-label="Magic Trackpad, Magic Keyboard, and Magic Mouse">
      <img className="stageProduct stageTrackpad" src="/products/trackpad-top.jpg" width="2000" height="2000" alt="Magic Trackpad" fetchPriority="high" />
      <img className="stageProduct stageKeyboard" src="/products/keyboard-front.jpg" width="1144" height="1144" alt="Magic Keyboard" fetchPriority="high" />
      <img className="stageProduct stageMouse" src="/products/mouse-top.jpg" width="1144" height="1144" alt="Magic Mouse" fetchPriority="high" />
    </div>
  );
}

function DeviceRow({ name, image }: { name: string; image: string }) {
  return <div className="deviceRow"><img src={image} width="40" height="40" loading="lazy" decoding="async" alt="" /><span>{name}</span><b>●</b></div>;
}
