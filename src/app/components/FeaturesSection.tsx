"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { LucideHeart } from "lucide-react";

import { SpinnerCircular } from "spinners-react";
import Menu from "./Menu";

{
  /*import Link from "next/link";*/
}

// Define types
type Track = {
  id: string;
  name: string;
  artists: { id: string; name: string }[];
  album: { images: { url: string }[] };
  external_urls: { spotify: string };
};

export default function FeaturesSection() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);
  const [mood, setMood] = useState("happy");
  const [refreshCount, setRefreshCount] = useState(0);
  const [liked, setLiked] = useState<Record<string, boolean>>({});
  const [recm, setRecm] = useState<Set<string>>(new Set());
  const [latestGenres, setLatestGenres] = useState<Set<string>>(new Set());
  const moods = ["sad", "happy", "workout", "chill", "new"];
  const [visibleCount, setVisibleCount] = useState(8);

  const getTracks = async (mood: string) => {
    try {
      const res = await fetch("/api/mood", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mood }),
      });
      const data = await res.json();
      setTracks(data.tracks || []);
    } catch (error) {
      console.error("Error fetching tracks:", error);
    } finally {
      setLoading(false);
    }
  };

  const getGenre = async (fav: string) => {
    const res = await fetch("/api/mood", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fav }),
    });
    return await res.json();
  };

  useEffect(() => {
    setLoading(true);
    setVisibleCount(8); // ✅ reset to 8 on new mood
    getTracks(mood);
  }, [mood, refreshCount]);

  const handleLike = async (trackId: string, artistId: string) => {
    setLiked((prev) => ({
      ...prev,
      [trackId]: !prev[trackId],
    }));

    const savedGenre = await getGenre(artistId);
    const newLikedState = !liked[trackId];

    if (newLikedState) {
      const newGenres: string[] = savedGenre.relatedfavtracks || [];
      setRecm((prev) => new Set([...prev, ...newGenres]));
      setLatestGenres(new Set(newGenres));
    } else {
      setRecm((prev) => {
        const updated = new Set(prev);
        (savedGenre.relatedfavtracks || []).forEach((track: string) =>
          updated.delete(track)
        );
        return updated;
      });
    }
  };

  // Update visibleCount based on screen size
  const visibleTracks = tracks.slice(0, visibleCount);
  useEffect(() => {
    if (typeof window === "undefined") return; // ✅ ensure client-side only

    const handleScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;
      if (bottom) {
        setVisibleCount((prev) => Math.min(prev + 8, tracks.length));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tracks]);

  return (
    <>
      <div className="fixed z-10 top-0 right-1 -ml-17">
        <Menu />
      </div>
      {/*main content*/}

      <div className="px-4 pt-2 md:pt-6 bg-gradient-to-br min-h-screen  ">
        <div className="bg-white/15 rounded-3xl p-4 mb-4 max-w-12/13">
          <div>
            <h1 className="text-4xl mb-2 font-honk font-extrabold tracking-wider">
              Select Mood
            </h1>

            {/*<Link href={"/fav"}>
            <button className="px-3 mb-2 flex flex-row gap-2 items-center rounded-xl  bg-white/30 hover:bg-white/50 transition-all duration-300 border border-white/20 cursor-pointer hover:scale-105">
              <h1 className="text-xl font-honk">Favourites here</h1>
              <LucideHeart className="hover:scale-120 hover:rotate-6 transition-transform  cursor-pointer mb-2"></LucideHeart>
            </button>
          </Link>*/}
          </div>
          <div className="flex flex-wrap gap-2 mb-4 font-mono font-extrabold tracking-widest">
            {[...moods, ...recm].map((m) => {
              const isActive = m === mood;
              const isNew = latestGenres.has(m);
              return (
                <button
                  key={m}
                  onClick={() => {
                    if (isActive) {
                      setRefreshCount((prev) => prev + 1);
                    } else {
                      setMood(m);
                    }
                  }}
                  className={`px-3 py-1 rounded-md md:text-center text-left cursor-pointer min-w-[30%] hover:bg-zinc-800 transition-all ${
                    isActive && isNew
                      ? "bg-purple-800 animate-pulse"
                      : isActive
                      ? "bg-green-600"
                      : isNew
                      ? "bg-amber-600 animate-pulse"
                      : "bg-black"
                  } text-white`}
                >
                  {m}
                </button>
              );
            })}
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center  bg-white/30 rounded-2xl h-screen w-[91.4%]">
            <div className="animate-[bassPulse_2s_ease-in-out_infinite] flex flex-col items-center">
              <h1 className="font-honk text-2xl ">Loading...</h1>

              <SpinnerCircular
                size={90}
                thickness={80}
                speed={100}
                color="#090909"
                secondaryColor="rgb(255, 255, 255)"
                enabled={true}
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap gap-4 backdrop-blur-xl ">
            {visibleTracks.map((t) => (
              <div
                key={t.id}
                onClick={() => {
                  handleLike(t.id, t.artists[0].id);
                }}
                onDoubleClick={() => {
                  window.open(
                    t.external_urls.spotify,
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
                className=" w-[45%] sm:w-[30%] md:w-[22%] rounded-xl p-6 bg-white/5 hover:bg-white/20 transition-all duration-300 border border-white/20 cursor-pointer hover:scale-105"
              >
                <Image
                  src={t.album.images[0].url}
                  alt={t.name}
                  width={300}
                  height={300}
                  className="w-full h-auto rounded-xl transition-all duration-1000 object-cover shadow-lg"
                />
                <div className="flex md:flex-row mt-2 flex-col items-center ">
                  <div className="mt-2 text-sm ">
                    <div className="font-bold text-zinc-100 line-clamp-1">
                      {t.name}
                    </div>
                    <div className="text-gray-300 font-light line-clamp-1">
                      {t.artists[0].name}
                    </div>
                  </div>
                  <div className="md:ml-auto ">
                    <button
                      className="focus:outline focus:rounded- hover:scale-110 transition-transform "
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLike(t.id, t.artists[0].id);
                      }}
                    >
                      <LucideHeart
                        className={
                          liked[t.id]
                            ? "mt-4 mr-1 scale-140 transition-all  hover:rotate-6  cursor-pointer "
                            : "hover:scale-120 hover:rotate-6 transition-transform cursor-pointer mt-4 scale-120 mr-1"
                        }
                        color={liked[t.id] ? "red" : "grey"}
                        fill={liked[t.id] ? "red" : "none"}
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {visibleCount < tracks.length && (
          <div className="text-center w-full py-6 text-zinc-400 animate-pulse">
            Loading more...
          </div>
        )}
        <div className="flex flex-wrap gap-4 backdrop-blur-xl pb-20"></div>
      </div>
    </>
  );
}
