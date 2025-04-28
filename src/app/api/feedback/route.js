import mongoose from "mongoose";
import connectMongo from "@/lib/mongodb";
import Feedback from "@/models/Feedback";

export async function POST(request) {
  const { namey, emaily, messagey } = await request.json();

  await connectMongo();

  const feedback = await Feedback.create({
    name: namey,
    email: emaily,
    message: messagey,
  });

  //only now diconnect
  if (mongoose.connection.readyState === 1) {
    await mongoose.disconnect();
    console.log("MongoDB disconnected");
  }
  return Response.json({ success: true, feedback });
}
