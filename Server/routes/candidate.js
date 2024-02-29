import { verifyAdmin } from './auth.js';
import express from "express";
import { Candidate } from '../models/Candidate.js';

const router = express.Router();

router.post('add', verifyAdmin, async (req, res) => {
    try {
        const { name, party, constituency, age, } = req.body
        const newCandidate = new Candidate({
            name,
            party,
            manifesto
        })
        await newCandidate.save()
        res.status(200).json({ message: 'Candidate added successfully' })
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' })
    }
})

router.get('/candidates', async (req, res) => {
    try {
        const candidates = await Candidate.find()
        res.status(200).json(candidates)
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' })
    }
})

export {router as CandidateRouter}