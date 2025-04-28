import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

export default mongoose.models.Feedback ||
  mongoose.model("Feedback", FeedbackSchema);
