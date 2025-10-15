import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function Working() {
  return (
    <>
      <div className="fixed left-1/2 top-0 h-full w-[2px] bg-blue-500 -translate-x-1/2"></div>
      <Accordion
        type="single"
        collapsible
        className="space-y-2 bg-white/30 rounded-3xl w-full max-w-5xl mx-auto mt-10 p-10"
      >
        <p className="font-honk text-4xl text-center mb-6">HOW IT WORKS? </p>

        {/* Step 1 */}
        <AccordionItem value="step-1">
          <AccordionTrigger>Step 1: Pick Your Mood 🌈</AccordionTrigger>
          <AccordionContent>
            Start your music journey by choosing a mood that fits your current
            vibe. Whether you’re feeling happy, melancholic, energetic, or just
            want to chill, Genrify has options for every emotion. You can even
            mix moods to create a unique listening experience! Selecting your
            mood is the first step to discovering songs that resonate with you
            on a deeper level.
          </AccordionContent>
        </AccordionItem>

        {/* Step 2 */}
        <AccordionItem value="step-2">
          <AccordionTrigger>Step 2: Discover Songs 🎵</AccordionTrigger>
          <AccordionContent>
            Once you pick a mood, Genrify recommends songs that match it
            perfectly. Explore new tracks, rediscover old favorites, and find
            hidden gems. You can listen directly or add songs to your personal
            playlists seamlessly.
          </AccordionContent>
        </AccordionItem>

        {/* Step 3 */}
        <AccordionItem value="step-3">
          <AccordionTrigger>
            Step 3: Explore Sub-Genres & Dive Deep 🔍
          </AccordionTrigger>
          <AccordionContent>
            Dive into sub-genres and niche styles to match your exact music
            taste. Love lo-fi, indie, or experimental sounds? Genrify breaks
            down each mood into multiple sub-genres, helping you discover music
            that fits your exact taste profile. It’s like having a personal
            music guide that constantly learns and adapts to what you love.
          </AccordionContent>
        </AccordionItem>

        {/* Step 4 */}
        <AccordionItem value="step-4">
          <AccordionTrigger>Step 4: Personalize & Save ❤️</AccordionTrigger>
          <AccordionContent>
            Found a song you love? Save it for later, add it to your Spotify
            playlist, or share it with friends. Genrify lets you create
            personalized playlists based on your moods and preferences. Over
            time, the app learns your patterns and improves recommendations,
            making each music session uniquely yours.
          </AccordionContent>
        </AccordionItem>
        <p className="text-sm  italic text-gray-300  border-white/30 mt-8 pt-4">
          This project is not affiliated with Spotify. It simply uses the
          Spotify Web API for educational purpose.
        </p>
      </Accordion>
    </>
  );
}
