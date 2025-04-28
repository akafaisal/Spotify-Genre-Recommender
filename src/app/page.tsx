"use client";

import Script from "next/script";

export default function Home() {
  return (
    <>
      {/* Load Google Ads Script */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5787069373355659"
        crossOrigin="anonymous"
      />

      {/* Main Content */}
      <div className="flex justify-center gap-6 h-screen items-center">S</div>
    </>
  );
}
