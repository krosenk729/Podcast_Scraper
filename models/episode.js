const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const episodeSchema = new Schema({
  podcast: { type: String, required: true },
  episode: { type: String, required: true },
  link: { type: String, required: true, unique: true },
  eid: { type: String, required: true, unique: true },
  pid: String,
  duration: String,
  img: String,
  isSaved: Boolean,
  saved: { type: Date, default: Date.now }
});

const Episode = mongoose.model("Episode", episodeSchema);

module.exports = Episode;
