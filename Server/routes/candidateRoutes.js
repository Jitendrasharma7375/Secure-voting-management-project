import { Candidate } from "../models/Candidate.js";
import express from "express";

const router = express.Router();

router.post('/createCandidate', async (req, res) => {
    try {
        const {totalCandidates,name, party, age, district , state} = req.body;
        const newElection = new Candidate({
            totalCandidate: totalCandidates,
            name,
            party,
            age,
            district,
            state
        });
        await newElection.save();
        return res.json({ added: true })
    } catch (err) {
        return res.json({ error: err.message })
    }
});

router.get("/getCandidateDetails", (req, res) => {
    Candidate.find()
        .then(CandidateDetails => res.json(CandidateDetails))
        .catch(res => res.json({ err }))
})

export {router as CandidateRouter};