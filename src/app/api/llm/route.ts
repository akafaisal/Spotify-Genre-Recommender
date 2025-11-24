import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  const response = await axios.post(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      model: "x-ai/grok-4.1-fast:free",
      messages: [{ role: "user", content: message }],
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "X-Title": "Genrify",
      },
    }
  );

  return NextResponse.json({
    reply: response.data.choices[0].message.content,
  });
}
