const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const podcastSchmea = new Schema({
	link: { type: String, required: true, unique: true },
	podcast: String,
	about: String,
	pid: String,
	img: String,
});

const Podcast = mongoose.model("Podcast", podcastSchmea);
module.exports = Podcast;
