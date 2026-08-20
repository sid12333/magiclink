import type { Metadata } from "next";
import { headers } from "next/headers";

export async function magicLinkMetadata(language: "en" | "zh"): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") || requestHeaders.get("host") || "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") || (host.startsWith("localhost") ? "http" : "https");
  const image = `${protocol}://${host}/og.png`;
  const title = language === "zh"
    ? "Magic Link — 让 Apple 输入设备自然融入 Windows"
    : "Magic Link — Apple input devices on Windows";
  const description = language === "zh"
    ? "在 Windows 上连接和管理 Magic Trackpad、Magic Mouse 与 Magic Keyboard，并为受支持的 Magic Trackpad 提供完整控制。"
    : "Connect and manage Magic Trackpad, Magic Mouse, and Magic Keyboard on Windows, with full controls for supported Magic Trackpad models.";

  return {
    title,
    description,
    openGraph: { title, description, images: [image], type: "website" },
    twitter: { card: "summary_large_image", title, description, images: [image] },
    icons: { icon: "/favicon.ico", shortcut: "/favicon.ico" },
  };
}
