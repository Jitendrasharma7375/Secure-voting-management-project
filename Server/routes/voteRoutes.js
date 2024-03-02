import express from "express";
import {SubmitVote} from "../models/Vote.js";

const router = express.Router();

router.post('/submitVote', async (req, res) => {
    try {
        const { Voter_ID, Candidate_ID, Election_ID } = req.body;
        const newVote = new SubmitVote({
            Voter_ID,
            Candidate_ID,
            Election_ID
        });
        await newVote.save();
        return res.json({ added: true });
    } catch (err) {
        console.error("Error submitting vote:", err);
        return res.status(500).json({ error: err.message });
    }
});

export {router as VoteRouter};
