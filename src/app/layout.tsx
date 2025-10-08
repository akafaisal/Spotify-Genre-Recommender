import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Spotify Mood Selector",
  description: "Select your mood and get personalized recommendations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics Tag */}
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
        <div className="bg-gradient-to-r from-purple-900 to-red-500 animate-gradient-x min-h-screen text-white pl-15">
          {children}
        </div>
      </body>
    </html>
  );
}
