import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";

export default function HomePage() {
  return (
    <main>
      <section id="about">
        <AboutSection />
      </section>

      <section id="features" className=" pl-6 lg:pl-30 md:pl-15">
        <FeaturesSection />
      </section>
    </main>
  );
}
