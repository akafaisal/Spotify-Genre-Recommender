import React from "react";
import Link from "next/link";
import Image from "next/image";
const AboutSection = () => {
  return (
    <div>
      {" "}
      <section className="flex flex-col relative overflow-hidden rounded-b-full justify-center text-center py-20 px-6 bg-gradient-to-t bg-white/20 animate-gradient-x text-white min-h-screen">
        {/* Main content */}
        <Image
          src="/logo.png" // path from /public
          alt="Cool photo"
          width={400}
          height={400}
          className="rounded-2xl  sticky mx-auto -mt-28 "
        />
        <div className=" w-full">
          {/* Animated background blobs */}
          <div>
            <div className="blob absolute blur-[1px] -top-20 -left-20 w-[400px] h-[400px] bg-white/30 opacity-60 rounded-full" />
            <div className="hidden md:block blob blob2 absolute blur-[1px] top-40 right-10 w-[300px] h-[300px] bg-white/30 opacity-60 rounded-full" />
            <div className="hidden md:block blob blob3 absolute blur-[1px] bottom-0 left-1/3 w-[250px] h-[250px]  bg-white/30 opacity-60 rounded-full" />
          </div>

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
          <div className="flex flex-col justify-center gap-5">
            <Link href="/#features">
              <button className="bg-black px-6 py-3 rounded-full text-5xl hover:bg-zinc-900 hover:scale-105  transition-all duration-200 cursor-pointer font-honk">
                🎧 Try Now
              </button>
            </Link>
            <Link href="/#working">
              <button className="bg-white/30 px-6 py-3 rounded-full text-l hover:bg-white/50  hover:scale-105 transition-all duration-200 cursor-pointer italic font-bold">
                🎼 How it Works?
              </button>
            </Link>
          </div>
        </div>

        {/* Disclaimer pinned at bottom */}
        <div className=""></div>
      </section>
    </div>
  );
};

export default AboutSection;
