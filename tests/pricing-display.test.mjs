import assert from "node:assert/strict";
import test from "node:test";
import { createElement, act } from "react";
import { renderToString } from "react-dom/server";
import { JSDOM } from "jsdom";
import { createServer } from "vite";

test("public price comparison covers all 21 plans without payment or persistent state", async () => {
  const vite = await createServer({ server: { middlewareMode: true }, appType: "custom" });
  let root;
  let dom;
  const previous = new Map();
  try {
    const { default: Picker } = await vite.ssrLoadModule("/app/LicensePicker.tsx");
    const html = renderToString(createElement(Picker, { language: "en" }));
    dom = new JSDOM(`<div id="root">${html}</div>`, { url: "https://magic-link.app/" });
    for (const [key, value] of Object.entries({ window: dom.window, document: dom.window.document, navigator: dom.window.navigator, HTMLElement: dom.window.HTMLElement, IS_REACT_ACT_ENVIRONMENT: true })) {
      previous.set(key, Object.getOwnPropertyDescriptor(globalThis, key));
      Object.defineProperty(globalThis, key, { configurable: true, writable: true, value });
    }
    const { hydrateRoot } = await import("react-dom/client");
    const container = document.getElementById("root");
    const errors = [];
    await act(async () => { root = hydrateRoot(container, createElement(Picker, { language: "en" }), { onRecoverableError: (error) => errors.push(error) }); });
    assert.deepEqual(errors, []);
    const boxes = [...container.querySelectorAll('input[type="checkbox"]')];
    const radios = [...container.querySelectorAll('input[type="radio"]')];
    const expected = { 1: [20, 36, 48], 2: [34, 61.2, 81.6], 3: [45, 81, 108] };
    for (let mask = 1; mask < 8; mask++) {
      for (let i = 0; i < 3; i++) if (boxes[i].checked !== Boolean(mask & (1 << i))) await act(async () => boxes[i].click());
      const count = boxes.filter((box) => box.checked).length;
      for (let term = 0; term < 3; term++) {
        await act(async () => radios[term].click());
        assert.equal(container.querySelector(".orderTotal dd").textContent, `$${expected[count][term].toFixed(2)} USD`);
        assert.equal(container.querySelector("button").disabled, true);
        assert.equal(container.querySelector("a"), null);
      }
    }
    for (const box of boxes) if (box.checked) await act(async () => box.click());
    assert.deepEqual([...container.querySelectorAll(".termPrice")].map((node) => node.textContent), ["—", "—", "—"]);
    assert.equal(window.localStorage.length, 0);
    await act(async () => root.render(createElement(Picker, { language: "zh" })));
    assert.match(container.textContent, /暂未开放购买/);
  } finally {
    if (root) await act(async () => root.unmount());
    dom?.window.close();
    for (const [key, descriptor] of previous) {
      if (descriptor) Object.defineProperty(globalThis, key, descriptor);
      else delete globalThis[key];
    }
    await vite.close();
  }
});
