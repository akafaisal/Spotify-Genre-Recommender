"use client";
import HeroSection from "./components/HeroSection";
import AboutPage from "./components/About";
import FeaturesSection from "./components/FeaturesSection";
import Working from "./components/Working";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section id="hero">
        <HeroSection />
      </section>
      <section id="about">
        <AboutPage />
      </section>
      <section id="working">
        <Working />
      </section>
      <div className="mt-2 flex justify-center ">
        <a
          className=""
          href="https://hilltopads.com/?ref=340274"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://static.hilltopads.com/other/banners/pub/make_big_money/728x90.gif?v=1761217211"
            alt="Make Big Money Banner"
            width={728}
            height={90}
          />
        </a>
      </div>
      <section id="features" className=" pl-6 lg:pl-30 md:pl-15 ">
        <FeaturesSection />
      </section>
    </main>
  );
}
