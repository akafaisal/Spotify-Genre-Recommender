import React from "react";
import Link from "next/link";
const AboutSection = () => {
  return (
    <div>
      <section className="flex flex-col rounded-b-full justify-center text-center py-20 px-6 bg-gradient-to-t bg-white/20 animate-gradient-x text-white min-h-screen">
        {/* Main content */}
        <div>
          <h1 className="text-5xl font-bold mb-4">
            Discover{" "}
            <span className="font-light italic bg-gradient-to-t from-white/30 to-white animate-gradient-x bg-clip-text text-transparent">
              Music
            </span>{" "}
            That Speaks Your
            <span className="font-honk"> Genre 🎶</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Genrify.live recommends songs, artists & playlists based on your
            favorite genres — powered by Spotify’s music intelligence.
          </p>
          <button className="bg-black px-6 py-3 rounded-full text-3xl hover:bg-white/30 scale-105 transition-all duration-500 cursor-pointer font-honk">
            <Link href="/#features">🎧 Try Now</Link>
          </button>
        </div>

        {/* Disclaimer pinned at bottom */}
        <p className="text-sm italic text-gray-300  border-white/30 mt-8 pt-4">
          This project is not affiliated with Spotify. It simply uses the
          Spotify Web API for educational purpose.
        </p>
      </section>
    </div>
  );
};

export default AboutSection;
