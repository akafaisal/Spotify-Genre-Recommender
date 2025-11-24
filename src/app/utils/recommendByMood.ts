import { getSpotifyToken } from "./getSpotifyToken";
import Moody from "../../models/Spotify";
import connectMongo from "@/lib/connect_mongodb";

// Search Spotify tracks with optional offset
const searchSpotify = async (
  keyword: string,
  token: string,
  offset: number
) => {
  const res = await fetch(
    `https://api.spotify.com/v1/search?q=${encodeURIComponent(
      keyword
    )}&type=track&limit=48&offset=${offset}`,
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

  // Ensure "liked" document exists
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
    likedDoc = await Moody.findOne({ name: "liked" }); // refresh to get latest liked list
    genresToSearch = likedDoc?.genres || [];
  } else {
    const moodDoc = await Moody.findOne({ name: mood });
    genresToSearch = moodDoc?.genres?.length ? moodDoc.genres : [mood];
  }

  // Remove duplicates
  genresToSearch = [...new Set(genresToSearch)];

  // Track interface
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

  // Collect tracks without duplicates
  const results: Track[] = [];
  const seenTrackIds = new Set<string>();

  // Only one run: offset = 0
  for (const keyword of genresToSearch) {
    const tracks = await searchSpotify(keyword, token, 0); // fetch first 48 tracks only
    for (const track of tracks) {
      if (!seenTrackIds.has(track.id)) {
        seenTrackIds.add(track.id);
        results.push(track);
      }
    }
  }

  // Shuffle and return top 50
  const recommendedTracks = results
    .sort(() => 0.5 - Math.random())
    .slice(0, 100);

  return recommendedTracks;
};
