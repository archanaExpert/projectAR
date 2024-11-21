const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contact: { type: String, required: true },
  education: { type: String, required: true },
  role: { type: String, required: true },
  profileImage: { type: String}
});

module.exports = mongoose.model("Candidate", candidateSchema);