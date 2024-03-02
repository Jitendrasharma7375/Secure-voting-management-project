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

router.get("/getElectionDetails", (req, res) => {
    Election.find()
        .then(ElectionDetails => res.json(ElectionDetails))
        .catch(res => res.json({ err }))
})

router.put('/updateElection', async (req, res) => {
    try {
        const { electionId, electionName, startDate, endDate } = req.body;
        const updatedElection = await Election.findOneAndUpdate({ electionId }, {
            electionName,
            startDate,
            endDate
        });
        if(updatedElection)
        {
            return res.json({ message: "Election updated successfully" })
        }
        else
        {
            return res.json({ message: "Election not found" })
        }
    } catch (err) {
        return res.json({ error: err.message })
    }
});
 

router.delete('/deleteElection/:electionId', async (req, res) => {
    try {
        
        const { electionId } = req.params;
        const deletedElection = await Election.findOneAndDelete({ electionId });
        if(deletedElection) {
            return res.json({ message: "Election deleted successfully" });
        } else {
            return res.json({ message: "Election not found" });
        }
    } catch (err) {
        return res.json({ error: err.message });
    }
});



export { router as ElectionRouter };