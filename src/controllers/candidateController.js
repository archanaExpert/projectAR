const Candidate = require("../models/candidateModel");

const createCandidate = async (req, res) => {
  const { name, email, contact, education, role ,profileImage} = req.body;
  try {
    
    const candidate = await Candidate.create({ name, email, contact, education, role,profileImage });
    
    res.status(201).json({ message: "Candidate uploaded successfully" });
  }  catch (error) {
    console.error("error", error)
    res.status(500).send({ message: "internal server error", error })
}
};

const getCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find();
    res.status(200).json({message:"get the candidate details:",candidates});
  }
  catch (error) {
    console.error("error", error)
    res.status(500).send({ message: "internal server error", error })
  }
};

module.exports = { createCandidate, getCandidates };