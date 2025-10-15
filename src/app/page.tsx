import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import Working from "./components/Working";

export default function HomePage() {
  return (
    <main>
      <section id="about">
        <AboutSection />
      </section>
      <section id="working">
        <Working />
      </section>
      <section id="features" className=" pl-6 lg:pl-30 md:pl-15">
        <FeaturesSection />
      </section>
    </main>
  );
}
