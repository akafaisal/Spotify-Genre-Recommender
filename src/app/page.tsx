"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { LucideHeart } from "lucide-react";
import { SpinnerCircular } from "spinners-react";
{/*import Link from "next/link";*/}


// Define types
type Track = {
  id: string;
  name: string;
  artists: { id: string; name: string }[];
  album: { images: { url: string }[] };
  external_urls: { spotify: string };
};

export default function Page() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);
  const [mood, setMood] = useState("happy");
  const [refreshCount, setRefreshCount] = useState(0);
  const [liked, setLiked] = useState<Record<string, boolean>>({});
  const [recm, setRecm] = useState<Set<string>>(new Set());
  const [latestGenres, setLatestGenres] = useState<Set<string>>(new Set());
  const moods = ["sad", "happy", "workout", "chill", "new"];

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



  return (
    <>
      <div className="md:px-4 md:pt-6 px-4 pt-2 bg-gradient-to-br min-h-screen ">
        <div className="flex flex-row justify-between max-w-10/11 ">
          <h1 className="text-4xl mb-2 font-honk font-extrabold tracking-wider">
            Select Mood
          </h1>
          {/*<Link href={"/fav"}>
            <button className="px-3 mb-2 flex flex-row gap-2 items-center rounded-xl  bg-white/30 hover:bg-white/50 transition-all duration-300 border border-white/20 cursor-pointer hover:scale-105">
              <h1 className="text-xl font-honk">Favourites here</h1>
              <LucideHeart className="hover:scale-120 hover:rotate-6 transition-transform mt-2 cursor-pointer mb-2"></LucideHeart>
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
                className={`px-3 py-1 rounded-md md:text-center text-left cursor-pointer min-w-[30%] ${
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
          <div className="flex flex-wrap gap-4 backdrop-blur-3xl ">
            {tracks.map((t) => (
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
                      className="rounded"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLike(t.id, t.artists[0].id);
                      }}
                    >
                      <LucideHeart
                        className={
                          liked[t.id]
                            ? "mt-4 mr-1 scale-140 transition-all  hover:rotate-6 transition-transform cursor-pointer "
                            : "hover:scale-120 hover:rotate-6 transition-transform mt-2 cursor-pointer mt-4 scale-120 mr-1"
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
      </div>
    </>
  );
}
