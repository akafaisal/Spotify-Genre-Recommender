import mongoose from "mongoose";

export default async function connectMongo() {
  await mongoose.connect("mongodb://localhost:27017/feedback");
  console.log("MongoDB connected");
}
