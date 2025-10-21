"use client";
import HeroSection from "./components/HeroSection";
import AboutPage from "./components/About";
import FeaturesSection from "./components/FeaturesSection";
import Working from "./components/Working";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section id="hero">
        <HeroSection />
      </section>
      <section id="hero">
        <AboutPage />
      </section>
      <section id="working" className="">
        <Working />
      </section>
      <section id="features" className="mt-15 pl-6 lg:pl-30 md:pl-15 ">
        <FeaturesSection />
      </section>
    </main>
  );
}
