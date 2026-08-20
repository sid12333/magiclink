import assert from "node:assert/strict";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);

async function render(pathname) {
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}

test("renders the English landing page", async () => {
  const response = await render("/");
  const html = await response.text();
  assert.equal(response.status, 200);
  assert.match(html, /Magic Link/);
  assert.match(html, /Use your Magic devices/);
  assert.match(html, /Free trial coming soon/);
  assert.match(html, /Windows built-in drivers/);
  assert.doesNotMatch(html, /codex-preview/);
});

test("renders the Chinese landing page", async () => {
  const response = await render("/zh-cn");
  const html = await response.text();
  assert.equal(response.status, 200);
  assert.match(html, /在 Windows 上使用/);
  assert.match(html, /试用版即将开放/);
  assert.match(html, /Windows 自带驱动/);
});
