import mongoose from "mongoose";
import Mood from "../models/Spotify.js";

const data = {
  sad: [
    "Adele",
    "Billie Eilish",
    "Lana Del Rey",
    "sad piano",
    "melancholy acoustic",
  ],
  happy: [
    "Pharrell Williams",
    "Katy Perry",
    "Shawn Mendes",
    "feel good pop",
    "sunshine indie",
  ],
  workout: ["Eminem", "Drake", "Trap Nation", "beast mode", "cardio edm"],
  chill: [
    "lofi beats",
    "Chillhop Music",
    "study vibes",
    "ambient electronic",
    "slow jazz",
  ],
  new: ["fresh finds", "rising artists", "fresh pop", "indian hits"],
};

async function insertMoods() {
  await mongoose.connect("mongodb://localhost:27017/Playlist");

  const moodsArray = Object.entries(data).map(([name, genres]) => ({
    name,
    genres,
  }));
  await Mood.insertMany(moodsArray);
}

insertMoods().then(() => {
  console.log("Moods inserted successfully");
});
