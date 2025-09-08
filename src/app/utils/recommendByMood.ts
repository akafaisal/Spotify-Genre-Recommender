import { getSpotifyToken } from "./getSpotifyToken";
import Moody from "../../models/Spotify";
import connectMongo from "@/lib/mongodb_spotify";

const searchSpotify = async (keyword: string, token: string) => {
  const res = await fetch(
    `https://api.spotify.com/v1/search?q=${encodeURIComponent(
      keyword
    )}&type=track&limit=10&sort=recent`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await res.json();
  return data.tracks?.items || [];
};

export const recommendByMood = async (mood: string) => {
  const token = await getSpotifyToken();
  await connectMongo();

  // Ensure "liked" doc exists
  let likedDoc = await Moody.findOne({ name: "liked" });
  if (!likedDoc) {
    await Moody.create({ name: "liked", genres: [] });
    likedDoc = await Moody.findOne({ name: "liked" }); // refresh after creation
  }

  // If mood is not "liked", add it to liked genres
  if (mood !== "liked") {
    await Moody.updateOne({ name: "liked" }, { $addToSet: { genres: mood } });
  }

  // Prepare genres to search
  let genresToSearch: string[];

  if (mood === "liked") {
    // refresh to get latest liked list
    likedDoc = await Moody.findOne({ name: "liked" });
    genresToSearch = likedDoc?.genres || [];
  } else {
    const moodDoc = await Moody.findOne({ name: mood });
    genresToSearch = moodDoc?.genres?.length ? moodDoc.genres : [mood];
  }

  // Remove duplicates
  genresToSearch = [...new Set(genresToSearch)];

  // Search Spotify for each unique genre

  interface Track {
    id: string;
    name: string;
    artist: string;
    artists: string[];
    albumName: string;
    albumImageUrl: string;
    uri: string;
    previewUrl: string | null;
    durationMs: number;
  }
  
  const results: Track[] = [];
  for (const keyword of genresToSearch) {
    const tracks = await searchSpotify(keyword, token);
    results.push(...tracks);
  }

  // Shuffle and return top 8
  return results.sort(() => 0.5 - Math.random()).slice(0, 8);
};
