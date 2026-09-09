import { useState } from "react";
import { devices, terms, licenseQuote, type Device, type Term } from "./license-catalog";

const names = { trackpad: "Magic Trackpad", mouse: "Magic Mouse", keyboard: "Magic Keyboard" };
const pictures = { trackpad: "trackpad-top.jpg", mouse: "mouse-top.jpg", keyboard: "keyboard-front.jpg" };
const dollars = (cents: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 }).format(cents / 100);

export default function LicensePicker({ language }: { language: "en" | "zh" }) {
  const zh = language === "zh";
  const [selected, setSelected] = useState<Device[]>(["trackpad"]);
  const [years, setYears] = useState<Term>(1);
  const quote = selected.length ? licenseQuote(selected, years) : null;
  const duration = (term: number) => zh ? `${term} 年` : `${term} ${term === 1 ? "year" : "years"}`;
  return <div className="licensePicker">
    <fieldset>
      <legend>{zh ? "1. 选择你的设备" : "1. Choose your devices"}</legend>
      <p className="selectionHint">{zh ? "可组合购买，授权用于一台 Windows 电脑。" : "Choose one or combine devices. Licensed for one Windows PC."}</p>
      <div className="deviceChoices">{devices.map((device) => <label className="choiceCard deviceCard" key={device}>
        <img className="devicePicture" src={`/products/${pictures[device]}`} width="240" height="160" alt="" loading="lazy" decoding="async" />
        <span className="choiceHeading"><input aria-label={names[device]} type="checkbox" checked={selected.includes(device)} onChange={(event) => setSelected(event.target.checked ? [...selected, device] : selected.filter((item) => item !== device))} />{names[device]}</span>
      </label>)}</div>
    </fieldset>
    <fieldset>
      <legend>{zh ? "2. 选择授权期限" : "2. Choose your license duration"}</legend>
      <div className="termChoices">{terms.map((term) => {
        const option = selected.length ? licenseQuote(selected, term) : null;
        return <label className="choiceCard termCard" key={term}>
          <span className="choiceHeading"><input aria-label={duration(term)} type="radio" name="license-term" checked={years === term} onChange={() => setYears(term)} />{duration(term)}</span>
          {term > 1 && <span className="termSaving">{zh ? `优惠 ${term === 2 ? 10 : 20}%` : `Save ${term === 2 ? 10 : 20}%`}</span>}
          <strong className="termPrice">{option ? dollars(option.totalCents) : "—"}</strong>
        </label>;
      })}</div>
    </fieldset>
    <section className="orderSummary" aria-labelledby="order-summary-title" aria-live="polite" aria-atomic="true">
      <h3 id="order-summary-title">{zh ? "所选套餐" : "Selected plan"}</h3>
      {quote ? <>
        <p className="selectedDevices">{quote.devices.map((device) => names[device]).join(" + ")}</p>
        <p>{duration(years)} · {zh ? "限一台 Windows 电脑，仅授权所选设备" : "One Windows PC · Selected devices only"}</p>
        <dl className="summaryTotal"><div className="orderTotal"><dt>{zh ? "一次付款总价" : "One-time total"}</dt><dd>{dollars(quote.totalCents)} <span>USD</span></dd></div></dl>
        <p className="renewalNote">{zh ? "到期手动续购，不会自动扣费。" : "Renew manually at expiry. No automatic charges."}</p>
        <details className="pricingDetails"><summary>{zh ? "查看价格明细" : "View price details"}</summary>
        <dl className="priceBreakdown">
          <div><dt>{zh ? `按一年 $20 × ${years} 年 × ${selected.length} 种设备` : `$20 per year × ${years} ${years === 1 ? "year" : "years"} × ${selected.length} ${selected.length === 1 ? "device" : "devices"}`}</dt><dd>{dollars(quote.originalCents)}</dd></div>
          {quote.termSavingsCents > 0 && <div><dt>{zh ? `期限优惠（${quote.termDiscountPercent}%）` : `Term saving (${quote.termDiscountPercent}%)`}</dt><dd>−{dollars(quote.termSavingsCents)}</dd></div>}
          <div><dt>{zh ? "所选期限小计" : "Subtotal for selected term"}</dt><dd>{dollars(quote.subtotalCents)}</dd></div>
          {quote.savingsCents > 0 && <div><dt>{zh ? `组合优惠（小计减 ${quote.bundleDiscountPercent}%）` : `Bundle saving (${quote.bundleDiscountPercent}% of subtotal)`}</dt><dd>−{dollars(quote.savingsCents)}</dd></div>}
        </dl>
        </details>
        {quote.originalCents > quote.totalCents && <p className="totalSaving">{zh ? `比逐年单买共省 ${dollars(quote.originalCents - quote.totalCents)}` : `Save ${dollars(quote.originalCents - quote.totalCents)} compared with buying each device yearly`}</p>}
      </> : <p>{zh ? "请至少选择一种设备，查看价格。" : "Select at least one device to see your price."}</p>}
    </section>
    <div className="purchaseFooter">
      <button type="button" className="button disabled" disabled>{zh ? "暂未开放购买" : "Not available yet"}</button>
      <noscript><p>{zh ? "启用 JavaScript 可比较不同套餐价格。" : "Enable JavaScript to compare plan prices."}</p></noscript>
    </div>
  </div>;
}
