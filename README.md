# 🎵 Spotify Mood & Genre Recommender  

A **Next.js + TypeScript** app that recommends **Spotify tracks** based on user-selected moods or liked genres. The system integrates the **Spotify Web API** with a **MongoDB database** to adapt to user preferences over time, creating a more personalized recommendation flow.  

---

## ✨ Features  

- 🎭 **Mood-based music discovery** — Choose moods like *happy, sad, chill, workout, new* to get curated recommendations.  
- ❤️ **Like system** — Save your favorite tracks; related genres are learned and influence future recommendations.  
- 🧠 **Adaptive learning** — MongoDB stores liked genres and dynamically updates recommendations.  
- 🔄 **Auto-refresh** — Re-clicking a mood refreshes recommendations.  
- 🎨 **Modern UI** — Built with TailwindCSS, responsive design, smooth hover/like animations.  

---

## 🛠️ Tech Stack  

- **Framework:** Next.js (App Router, TypeScript)  
- **Styling:** TailwindCSS  
- **Database:** MongoDB (Mongoose)  
- **API:** Spotify Web API (Client Credentials flow)  
- **Icons/Components:** lucide-react, spinners-react  



📂 Project Structure
📁 src/
 ├── app/
 │   ├── page.tsx           # Main UI (mood selection, track display, like system)
 │   └── api/mood/route.ts  # API route handling mood & liked genres
 │
 ├── models/
 │   └── Spotify.ts         # Mongoose schema for storing moods/genres
 │
 ├── utils/
 │   ├── getSpotifyToken.ts # Auth helper (Client Credentials flow)
 │   ├── recommendByMood.ts # Logic for fetching mood/genre recommendations
 │   └── saveGenre.ts       # Saves liked artist's genres to DB
 │
 └── lib/
     └── mongodb_spotify.ts # MongoDB connection utility

