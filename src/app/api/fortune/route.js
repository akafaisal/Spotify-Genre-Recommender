export async function GET() {
  const fortunes = ["C", "B", "6", "G", "Mi"];

  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];

  return Response.json({ message: randomFortune });
}
