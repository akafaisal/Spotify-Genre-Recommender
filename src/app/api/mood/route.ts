import { NextRequest, NextResponse } from "next/server";
import { recommendByMood } from "../../utils/recommendByMood";
import { saveGenre } from "../../utils/saveGenre";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { mood, fav } = body;

  if (mood) {
    const tracks = await recommendByMood(mood);
    return NextResponse.json({ tracks });
  }

  if (fav) {
    const relatedfavtracks = await saveGenre(fav);
    return NextResponse.json({ relatedfavtracks });
  }
}
