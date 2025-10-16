import "./globals.css";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://spotify-genrify.vercel.app"),
  title: "Genrify: Mood Selector & Genre Recommender",
  description:
    "Tap your mood and discover new Spotify genres. Try Genrify now!",
  keywords: [
    "Genrify",
    "Genrify Mood Selector",
    "Genrify Genre Recommender",
    "Genrify Playlist Generator",
    "Mood Based Music",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", // optional but helps
  },
  openGraph: {
    title: "Genrify: Mood Selector & Genre Recommender",
    description:
      "Discover new Spotify genres that match your mood with Genrify.live",
    url: "https://genrify.live",
    siteName: "Genrify.live",
    type: "website",
    images: [
      {
        url: "https://genrify.live/og-image.png", // ✅ must be absolute URL
        width: 1200,
        height: 630,
        alt: "Genrify.live – Mood-based Music Recommender",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Genrify: Mood Selector & Genre Recommender",
    description: "Tap your mood and discover new Spotify genres with Genrify.",
    images: ["https://genrify.live/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅Google Adsense*/}

        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5787069373355659"
          crossOrigin="anonymous"
        ></Script>

        {/* ✅ Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PG88TFXP');
          `}
        </Script>

        {/* ✅ Google Analytics (GA4) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-TP5LP3NSM2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TP5LP3NSM2');
          `}
        </Script>
      </head>

      <body>
        {/* ✅ GTM Noscript Fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PG88TFXP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <div className="bg-gradient-to-r from-purple-900 to-red-500 animate-gradient-x min-h-screen text-white  ">
          {children}
        </div>
      </body>
    </html>
  );
}
