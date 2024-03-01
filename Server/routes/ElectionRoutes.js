import express from "express";
import { Election } from "../models/Election.js";

const router = express.Router();


router.post('/createElection', async (req, res) => {
    try {
        const { electionId, electionName, startDate, endDate } = req.body;
        const newElection = new Election({
            electionId,
            electionName,
            startDate,
            endDate
        });
        await newElection.save();
        return res.json({ added: true })
    } catch (err) {
        return res.json({ error: err.message }) 
    }
});

router.get('/elections', async (req, res) => {
    try {
        const createElectionData = await Election.find()
        return res.json({ createElectionData })
    } catch (err) {
        return res.json({ err })
    }   
})

export { router as ElectionRouter };
