import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
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
  // Workers Static Assets serves /zh-cn from zh-cn.html and redirects .html to /zh-cn.
  // Rewriting the clean URL to .html would create a redirect back to itself.
  const redirects = await builtFile("_redirects").catch((error) => {
    if (error.code === "ENOENT") return "";
    throw error;
  });
  assert.doesNotMatch(redirects, /^\s*\/zh-cn\/?\s+\/zh-cn\.html(?:\s|$)/m);
});

test("configures Workers to serve real 404 responses without changing clean URLs", async () => {
  const config = JSON.parse(await readFile(new URL("../wrangler.json", import.meta.url), "utf8"));
  assert.equal(config.name, "magiclink");
  assert.equal(config.compatibility_date, "2026-08-28");
  assert.equal(config.assets.directory, "./dist");
  assert.equal(config.assets.not_found_handling, "404-page");
  assert.equal(config.assets.html_handling, "auto-trailing-slash");
  assert.equal(config.main, undefined);
  await access(new URL(`../${config.assets.directory}/404.html`, import.meta.url));
});

test("ships a standalone 404 page for Workers Static Assets", async () => {
  const html = await builtFile("404.html");
  assert.match(html, /<title>Page not found — Magic Link<\/title>/);
  assert.match(html, /name="robots" content="noindex"/);
  assert.match(html, /href="\/"/);
  assert.match(html, /href="\/zh-cn"/);
  assert.doesNotMatch(html, /<script|rel="canonical"/);
  assert.doesNotMatch(await builtFile("sitemap.xml"), /404/);
});

test("serves the existing third-party notice locally, without the broken GitHub link", async () => {
  const notice = await builtFile("third-party-notices.html");
  assert.match(notice, /GNU General Public License, version 2/);
  assert.match(notice, /Copyright 2018–2019 Bingxing Wang/);
  assert.match(notice, /AmtPtpDeviceUsbUm/);
  assert.match(notice, /AmtPtpDeviceUsbKm/);
  assert.match(notice, /corresponding source code or a valid written source offer/);
  assert.match(notice, /Magic Link application/);
  for (const file of ["index.html", "zh-cn.html"]) {
    const html = await builtFile(file);
    assert.match(html, /href="\/third-party-notices"/);
    assert.doesNotMatch(html, /magic-link-windows\/blob/);
  }
});

test("keeps hero images eager, defers secondary images, and ships every referenced asset", async () => {
  for (const file of ["index.html", "zh-cn.html"]) {
    const html = await builtFile(file);
    const images = [...html.matchAll(/<img\b[^>]*>/g)].map((match) => match[0]);
    assert.equal(images.length, 8);
    for (const img of images) {
      assert.match(img, /width="\d+"/);
      assert.match(img, /height="\d+"/);
      if (img.includes("stageProduct")) {
        assert.match(img, /fetchPriority="high"/i);
        assert.doesNotMatch(img, /loading="lazy"/);
      } else {
        assert.match(img, /loading="lazy"/);
        assert.match(img, /decoding="async"/);
      }
      const src = img.match(/src="([^"]+)"/)[1].split("?")[0];
      await access(new URL(`../dist${src}`, import.meta.url));
    }
    assert.doesNotMatch(html, /<link[^>]+rel="preload"[^>]+trackpad-settings/);
    assert.match(html, /class="releaseFollow"><a href="https:\/\/github.com\/sid12333\/magiclink\/releases"/);
    assert.match(html, /href="https:\/\/github.com\/sid12333\/magiclink\/issues"/);
  }
});

test("GitHub entry points connect product discovery, releases, support, and the official site", async () => {
  const [readme, issueForm, issueConfig] = await Promise.all([
    readFile(new URL("../README.md", import.meta.url), "utf8"),
    readFile(new URL("../.github/ISSUE_TEMPLATE/bug-report.yml", import.meta.url), "utf8"),
    readFile(new URL("../.github/ISSUE_TEMPLATE/config.yml", import.meta.url), "utf8"),
  ]);
  assert.match(readme, /https:\/\/magic-link\.app\//);
  assert.match(readme, /https:\/\/magic-link\.app\/zh-cn/);
  assert.match(readme, /https:\/\/github\.com\/sid12333\/magiclink\/releases/);
  assert.match(readme, /https:\/\/github\.com\/sid12333\/magiclink\/issues/);
  assert.match(readme, /There is no public download yet/);
  assert.match(readme, /production-signed installer/);
  assert.match(issueForm, /label: Magic Link version/);
  assert.match(issueForm, /label: Windows version/);
  assert.match(issueForm, /label: Device model/);
  assert.match(issueForm, /label: Connection type/);
  assert.match(issueForm, /contains no activation code, license file, or personal information/);
  assert.match(issueConfig, /blank_issues_enabled: false/);
  assert.match(issueConfig, /url: https:\/\/magic-link\.app\//);
});
