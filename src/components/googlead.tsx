import Script from "next/script";

export const Googly = () => {
  return (
    <>
      {/* Load Google AdScript asynchronously */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5787069373355659"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />

      {/* Ad Slot */}
      <ins
        className="adsbygoogle w-251"
        style={{ display: "block" }}
        data-ad-format="fluid"
        data-ad-layout-key="-fb+5w+4e-db+86"
        data-ad-client="ca-pub-5787069373355659"
        data-ad-slot="3338462826"
      ></ins>

      {/* Push the ad script to load after interactive */}
      <Script
        id="googly-push"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(adsbygoogle = window.adsbygoogle || []).push({});`,
        }}
      />
    </>
  );
};
