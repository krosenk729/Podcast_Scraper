const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const podcastSchmea = new Schema({
  podcast: { type: String, required: true },
  episode: { type: String, required: true },
  link: { type: String, required: true, unique: true },
  eid: { type: String, required: true, unique: true },
  pid: String,
  duration: String,
  img: String,
  saved: { type: Date, default: Date.now }
});

const Podcast = mongoose.model("Podcast", podcastSchmea);

module.exports = Podcast;
