import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function builtFile(path) {
  return readFile(new URL(`../dist/${path}`, import.meta.url), "utf8");
}

test("builds the English landing page with search metadata", async () => {
  const html = await builtFile("index.html");
  assert.match(html, /<html lang="en">/);
  assert.match(html, /Magic Link — Magic Trackpad, Mouse &amp; Keyboard for Windows/);
  assert.match(html, /rel="canonical" href="https:\/\/magic-link\.app\/"/);
  assert.match(html, /hreflang="zh-CN" href="https:\/\/magic-link\.app\/zh-cn"/);
  assert.match(html, /Use your Magic devices/);
  assert.match(html, /Free trial coming soon/);
  assert.match(html, /What is Magic Link for Windows\?/);
});

test("builds the Chinese landing page with search metadata", async () => {
  const html = await builtFile("zh-cn.html");
  assert.match(html, /<html lang="zh-CN">/);
  assert.match(html, /Magic Link — Windows 苹果触控板、鼠标与键盘软件/);
  assert.match(html, /rel="canonical" href="https:\/\/magic-link\.app\/zh-cn"/);
  assert.match(html, /hreflang="en" href="https:\/\/magic-link\.app\/"/);
  assert.match(html, /在 Windows 上使用/);
  assert.match(html, /试用版即将上线/);
  assert.match(html, /Magic Link 是什么？/);
});

for (const [file, language, url] of [
  ["index.html", "en", "https://magic-link.app/"],
  ["zh-cn.html", "zh-CN", "https://magic-link.app/zh-cn"],
]) {
  test(`${language} search and sharing metadata describe the same product`, async () => {
    const html = await builtFile(file);
    const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
    const description = html.match(/name="description" content="([^"]+)"/)?.[1];
    assert.ok(title);
    assert.ok(description);
    for (const field of ["og:title", "twitter:title"]) {
      assert.ok(html.includes(`="${field}" content="${title}"`));
    }
    for (const field of ["og:description", "twitter:description"]) {
      assert.ok(html.includes(`="${field}" content="${description}"`));
    }
    assert.match(html, /property="og:site_name" content="Magic Link"/);
    assert.equal((html.match(/<h1[\s>]/g) || []).length, 1);
    assert.match(html, /href="https:\/\/github\.com\/sid12333\/magiclink"/);

    const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
    assert.equal(blocks.length, 1);
    const data = JSON.parse(blocks[0][1]);
    assert.equal(data["@context"], "https://schema.org");
    const graph = data["@graph"];
    const website = graph.find((item) => item["@type"] === "WebSite");
    const software = graph.find((item) => item["@type"] === "SoftwareApplication");
    const page = graph.find((item) => item["@type"] === "WebPage");
    assert.equal(website.name, "Magic Link");
    assert.equal(website.url, "https://magic-link.app/");
    assert.equal(website.alternateName, "magic-link.app");
    assert.equal(software["@id"], "https://magic-link.app/#software");
    assert.equal(software.name, "Magic Link");
    assert.equal(software.operatingSystem, "Windows 10 or Windows 11, x64");
    assert.equal(page.url, url);
    assert.equal(page.inLanguage, language);
    assert.equal(page.name, title.replaceAll("&amp;", "&"));
    assert.equal(page.isPartOf["@id"], website["@id"]);
    assert.equal(page.mainEntity["@id"], software["@id"]);
    // Do not invent commercial or review data for the coming-soon product.
    for (const field of ["offers", "aggregateRating", "review", "downloadUrl"]) {
      assert.equal(Object.hasOwn(software, field), false);
    }
  });
}

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
