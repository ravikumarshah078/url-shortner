import mongoose from "mongoose";

const UrlSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  urlId: {
    type: String,
    required: true,
  },
  origUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: Date.now,
  },
});

const Url = mongoose.model("Url", UrlSchema);
export default Url;