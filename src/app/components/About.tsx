"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AboutPage() {
  return (
    <>
      <div className="p-8 text-black">
        <div className="max-w-5xl mx-auto bg-white/30 backdrop-blur-md  p-10 rounded-3xl shadow-lg">
          <h1 className="text-4xl font-honk text-center mb-8">
            ✨ About Genrify
          </h1>

          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-white/40 backdrop-blur-sm rounded-xl mb-8">
              <TabsTrigger value="features">🌟 Features</TabsTrigger>
              <TabsTrigger value="tech">🛠️ Tech Stack</TabsTrigger>
              <TabsTrigger value="flow">🔑 Core Flow</TabsTrigger>
            </TabsList>

            {/* 🌟 FEATURES TAB */}
            <TabsContent value="features" className="space-y-4 mb-8">
              <p className="text-lg">
                <strong>Genrify</strong> makes music discovery simple and fun!
                Choose a mood like <em>happy</em>, <em>sad</em>, <em>chill</em>,
                or <em>workout</em>, and explore songs that perfectly match your
                vibe. With a like system that learns your taste, every
                recommendation feels smarter over time.
              </p>

              <ul className="list-disc pl-6 space-y-3 text-base leading-relaxed">
                <li>
                  🎭 <strong>Mood-based music discovery</strong> — Choose moods
                  like happy, sad, chill, workout, new to get curated
                  recommendations.
                </li>
                <li>
                  ❤️ <strong>Like system</strong> — Save your favorite tracks;
                  related genres are learned and influence future
                  recommendations.
                </li>
                <li>
                  🧠 <strong>Adaptive learning</strong> — MongoDB stores liked
                  genres and dynamically updates recommendations.
                </li>
                <li>
                  🔄 <strong>Auto-refresh</strong> — Re-clicking a mood
                  refreshes recommendations instantly.
                </li>
                <li>
                  🎨 <strong>Modern UI</strong> — Built with TailwindCSS,
                  responsive design, smooth hover/like animations.
                </li>
              </ul>
            </TabsContent>

            {/* ⚙️ TECH STACK TAB */}
            <TabsContent value="tech" className="space-y-4 mb-8">
              <p className="text-lg">
                Genrify combines cutting-edge web technologies to create a
                smooth, fast, and intelligent experience. Everything runs on a
                lightweight stack designed for scalability and personalization.
              </p>

              <ul className="list-disc pl-6 space-y-3 text-base leading-relaxed">
                <li>
                  ⚙️ <strong>Framework:</strong> Next.js (App Router,
                  TypeScript)
                </li>
                <li>
                  🎨 <strong>Styling:</strong> TailwindCSS for sleek, responsive
                  layouts.
                </li>
                <li>
                  🗄️ <strong>Database:</strong> MongoDB (via Mongoose) for
                  storing liked genres and preferences.
                </li>
                <li>
                  🎧 <strong>API:</strong> Spotify Web API (Client Credentials
                  flow) for real-time track data.
                </li>
                <li>
                  🧩 <strong>Icons/Components:</strong> lucide-react,
                  spinners-react for visuals and loading effects.
                </li>
              </ul>
            </TabsContent>

            {/* 🔑 CORE FLOW TAB */}
            <TabsContent value="flow" className="space-y-4 mb-8">
              <p className="text-lg">
                Genrify’s recommendation system connects your mood to the music
                universe through smart backend logic — powered by data learning
                and personalization.
              </p>

              <ol className="list-decimal pl-6 space-y-3 text-base leading-relaxed">
                <li>
                  The user selects a mood → app calls{" "}
                  <code className="bg-white/20 px-2 py-0.5 rounded-md">
                    /api/mood
                  </code>{" "}
                  → fetches recommendations from Spotify.
                </li>
                <li>
                  When the user likes a track → related artist genres are stored
                  into MongoDB.
                </li>
                <li>
                  Future requests use stored genres to generate richer, adaptive
                  recommendations.
                </li>
                <li>
                  Clicking a track → toggles like; double-clicking → opens it
                  directly on Spotify.
                </li>
              </ol>
            </TabsContent>
          </Tabs>
          <p className=" rounded-xl bg-white/20  md:w-1/2 lg:w-1/3 mx-auto mt-4 italic text-center font-bold text-md text-black/60 -mb-7">
            Crafted with ❤️ by Faisal A.
          </p>
        </div>

        {/* FOOTER */}
      </div>
    </>
  );
}
