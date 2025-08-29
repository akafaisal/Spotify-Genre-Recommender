import mongoose from "mongoose";

const spotifySchema = new mongoose.Schema({
  name: { type: String, required: true },
  genres: { type: [String] },
});

export default mongoose.models.Moody || mongoose.model("Moody", spotifySchema);
