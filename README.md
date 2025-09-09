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

---

## 🔑 Core Flow
User selects a mood → app calls /api/mood → fetches recommendations from Spotify.
User likes a track → related artist genres are saved into MongoDB.
Future requests use stored genres to generate richer, more adaptive recommendations.
Clicking a track → toggles like, double-click → opens it on Spotify.

## 📌 Roadmap
 Add NextAuth Spotify login for personalized user sessions.
 Enable playlist creation/export to Spotify directly.
 Improve recommendation algorithm (tempo, popularity, etc.).
 Add UI for managing liked tracks & genres.

## 🤝 Contributing
Pull requests are welcome! Open an issue first for major changes.



