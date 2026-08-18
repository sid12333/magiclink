import LandingPage from "../LandingPage";
import type { Metadata } from "next";
import { magicLinkMetadata } from "../siteMetadata";

export async function generateMetadata(): Promise<Metadata> {
  return magicLinkMetadata("zh");
}

export default function ChineseHome() {
  return <LandingPage language="zh" />;
}
