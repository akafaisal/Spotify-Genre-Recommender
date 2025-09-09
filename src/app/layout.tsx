import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
      <body>
        <div className="bg-gradient-to-r from-purple-900 to-red-500 animate-gradient-x min-h-screen text-white pl-15">
          {children}
        </div>
      </body>
    </html>
  );
}

