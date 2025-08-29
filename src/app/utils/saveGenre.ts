import { getSpotifyToken } from "./getSpotifyToken";

export const searchGenre = async (keyword: string, token: string) => {
  const res = await fetch(`https://api.spotify.com/v1/artists/${keyword}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  return data;
};

export const saveGenre = async (keyword: string) => {
  const token = await getSpotifyToken();

  const answer = await searchGenre(keyword, token);
  return answer.genres || [];
};
