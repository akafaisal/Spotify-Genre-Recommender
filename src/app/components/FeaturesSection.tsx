"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { LucideHeart } from "lucide-react";
import { Info } from "lucide-react";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import SpotifyEmbed from "./Spotify-embed";

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
        setVisibleCount((prev) => Math.min(prev + 64, tracks.length));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tracks]);

  // Spotify Embed state (not fully utilized in this snippet)

  const [currentTrackUri, setCurrentTrackUri] = useState<string>();
  let clickBlocked = false;
  return (
    <>
      {/*main content*/}
      <section className="relative ">
        <div className="px-4 pt-2 md:pt-6 bg-gradient-to-br min-h-screen">
          <div className="bg-white/15 rounded-3xl p-4 mb-4 max-w-12/13">
            <div>
              <div className=" blob pointer-events-none absolute blur-[1px] rotate-45 md:-left-20 w-[250px] h-[200px] bg-white/30 opacity-60 rounded-full " />
              <div className="hidden  md:block blob blob2 absolute blur-[1px] top-100 right-70 w-[600px] h-[800px] bg-white/30 opacity-60 rounded-full pointer-events-none" />
            </div>
            <div className="flex flex-row justify-center items-center">
              <h1 className="text-4xl mb-2 font-honk font-extrabold tracking-wider mr-2">
                ✨ Select Mood
              </h1>

              {/*Popover for how to use*/}
              <Popover>
                <PopoverTrigger>
                  <div className="mb-1.5 hover:scale-110 hover:rotate-2 transition-transform cursor-pointer">
                    <Info className="text-white" />
                  </div>
                </PopoverTrigger>
                <PopoverContent className="p-5 pb-6 font-extrabold w-85 bg-black text-white">
                  <p className="font-honk text-lg -mb-1">HOW TO USE?</p>
                  <p>
                    Single Tap: <span className="italic">💗 Like a Song</span>
                  </p>
                  <p>
                    Double Tap:{" "}
                    <span className="italic">🎵 Open Spotify Player</span>
                  </p>
                </PopoverContent>
              </Popover>

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
                    className={`px-3 py-1 rounded-md md:text-center text-left cursor-pointer min-w-[30%]  transition-all ${
                      isActive && isNew
                        ? "bg-purple-800 animate-pulse"
                        : isActive
                        ? "bg-green-600"
                        : isNew
                        ? "bg-amber-600 animate-pulse"
                        : "bg-black hover:bg-zinc-800"
                    } text-white`}
                  >
                    {m}
                  </button>
                );
              })}
            </div>
          </div>

          {loading ? (
            <div className="flex items-center justify-center min-h-screen bg-white/30 rounded-2xl  w-[91.4%]">
              <div className="wobble flex flex-col items-center">
                <h1 className="font-honk text-2xl ">Loading...</h1>

                <Image
                  src="/android-chrome-512x512.png"
                  alt="Logo image"
                  width={100}
                  height={100}
                  className=" rounded-2xl  "
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-wrap gap-4 backdrop">
              {visibleTracks.map((t) => (
                <div
                  key={t.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (clickBlocked) return;
                    handleLike(t.id, t.artists[0].id);
                  }}
                  onDoubleClick={(e) => {
                    e.stopPropagation();
                    clickBlocked = true; // block next single click
                    setTimeout(() => (clickBlocked = false), 300); // reset after short delay
                    setCurrentTrackUri(`spotify:track:${t.id}`);
                  }}
                  className={`w-[45%] sm:w-[30%] md:w-[22%] rounded-xl hover:scale-105 p-6  transition-all  duration-200 border cursor-pointer  border-white 
    ${
      liked[t.id]
        ? "bg-black border-white "
        : "bg-white/5 hover:bg-white/20 hover:scale-105"
    }`}
                >
                  <Image
                    src={t.album.images[0].url}
                    alt={t.name}
                    width={300}
                    height={300}
                    className="w-full h-auto rounded-xl transition-all duration-100 object-cover shadow-lg border-2 border-white/50"
                  />
                  <div className="flex md:flex-row mt-2 flex-col items-center ">
                    <div className="mt-2 text-sm  md:w-5/6">
                      <div className="font-bold text-zinc-100 ">{t.name}</div>
                      <div className="text-gray-300 font-light ">
                        {t.artists[0].name}
                      </div>
                    </div>
                    <div className="md:ml-auto ">
                      <button
                        className="  hover:scale-110 transition-transform "
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLike(t.id, t.artists[0].id);
                        }}
                      >
                        <LucideHeart
                          className={
                            liked[t.id]
                              ? "mt-4 mr-1 scale-140 transition-all  hover:rotate-6  cursor-pointer "
                              : "hover:scale-120 hover:rotate-6 transition-all duration-100 cursor-pointer mt-4 scale-120 mr-1 "
                          }
                          color={liked[t.id] ? " red" : "white"}
                          fill={liked[t.id] ? "red" : "none"}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>{" "}
        {currentTrackUri && (
          <div className="fixed bottom-0  left-0 w-full rounded-t-xl bg-black/80  backdrop-blur-xl  z-50 p-2">
            <SpotifyEmbed uri={currentTrackUri} />
          </div>
        )}
      </section>
    </>
  );
}
