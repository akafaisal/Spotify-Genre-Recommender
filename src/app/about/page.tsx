const AboutPage = () => {
  return (
    <div className="min-h-screen p-8 text-black">
      <div className="max-w-3xl mx-auto bg-white/30 p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="mb-4">
          Welcome to <strong>Spotify Mood & Genre Recommender</strong>! Our
          mission is to help music lovers discover tracks tailored to their
          moods and favorite genres.
        </p>
        <p className="mb-4">
          Using the <strong>Spotify Web API</strong> and a{" "}
          <strong>MongoDB database</strong>, we track your liked genres to make
          smarter recommendations over time. Whether you’re happy, sad, or in
          need of a workout jam, our app suggests music that matches your vibe.
        </p>
        <p className="mb-4">
          Our goal is to combine technology and music for a personalized
          listening experience. Built with Next.js, TypeScript, and TailwindCSS,
          the app ensures a smooth, modern, and responsive interface.
        </p>
        <p className="mb-4">
          Thank you for using our app — we hope it makes discovering new music
          fun and effortless!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
