const express = require("express");
const { createCandidate, getCandidates } = require("../controllers/candidateController");

const router = express.Router();

router.post("/createCandidate", createCandidate);
router.get("/getCandidate", getCandidates);

module.exports = router;