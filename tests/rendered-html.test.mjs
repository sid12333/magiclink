import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function builtFile(path) {
  return readFile(new URL(`../dist/${path}`, import.meta.url), "utf8");
}

test("builds the English landing page with search metadata", async () => {
  const html = await builtFile("index.html");
  assert.match(html, /<html lang="en">/);
  assert.match(html, /Magic Link — Apple input devices on Windows/);
  assert.match(html, /rel="canonical" href="https:\/\/magic-link\.app\/"/);
  assert.match(html, /hreflang="zh-CN" href="https:\/\/magic-link\.app\/zh-cn"/);
  assert.match(html, /Use your Magic devices/);
  assert.match(html, /Free trial coming soon/);
});

test("builds the Chinese landing page with search metadata", async () => {
  const html = await builtFile("zh-cn.html");
  assert.match(html, /<html lang="zh-CN">/);
  assert.match(html, /Magic Link — 让 Apple 输入设备自然融入 Windows/);
  assert.match(html, /rel="canonical" href="https:\/\/magic-link\.app\/zh-cn"/);
  assert.match(html, /hreflang="en" href="https:\/\/magic-link\.app\/"/);
  assert.match(html, /在 Windows 上使用/);
  assert.match(html, /试用版即将上线/);
});

test("copies crawler files into the deployment", async () => {
  const [robots, sitemap] = await Promise.all([
    builtFile("robots.txt"),
    builtFile("sitemap.xml"),
  ]);
  assert.match(robots, /Sitemap: https:\/\/magic-link\.app\/sitemap\.xml/);
  assert.match(sitemap, /https:\/\/magic-link\.app\/zh-cn/);
});

test("does not rewrite the Chinese clean URL back to its HTML file", async () => {
  // Pages already serves /zh-cn from zh-cn.html and redirects .html to /zh-cn.
  // Rewriting the clean URL to .html would create a redirect back to itself.
  const redirects = await builtFile("_redirects").catch((error) => {
    if (error.code === "ENOENT") return "";
    throw error;
  });
  assert.doesNotMatch(redirects, /^\s*\/zh-cn\/?\s+\/zh-cn\.html(?:\s|$)/m);
});
