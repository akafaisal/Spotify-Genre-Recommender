import Script from "next/script";

export const Googly = () => {
  return (
    <>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5787069373355659"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />

      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-format="fluid"
        data-ad-layout-key="-fb+5w+4e-db+86"
        data-ad-client="ca-pub-5787069373355659"
        data-ad-slot="3338462826"
      ></ins>

      <Script id="googly" strategy="afterInteractive">
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </Script>
    </>
  );
};
