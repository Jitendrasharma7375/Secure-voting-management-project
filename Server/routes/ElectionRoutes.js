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
        res.status(201).json({ message: 'Election created successfully' });
    } catch (error) {
        console.error('Error creating election:', error);
        res.status(500).json({ message: 'Failed to create election. Please try again later.' });
    }
});

router.get('/election', async (req, res) => {
    try {
        const elections = await Election.find()
        return res.json({ elections })
    } catch (err) {
        return res.json({ err })
    }
})

router.get('/updateElection/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const upElection = await Election.findById({ _id: id })
        return res.json(upElection)
    } catch (err) {
        return res.json(err)
    }
})

router.patch('/updateElection/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const { electionId, electionName, startDate, endDate } = req.body;
        const upElection = await Election.findByIdAndUpdate({ _id: id }, { electionId, electionName, startDate, endDate }, { new: true })
        if (upElection) {
            return res.json({ updated: true, manageElection: upElection })
        }
        else {
            return res.json({ updated: false, message: "Election not found" })
        }
    } catch (err) {
        return res.json(err)
    }
})

router.get('/getAllElections', async (req, res) => {
    try {
        const elections = await Election.find();
        res.status(200).json(elections);
    } catch (error) {
        console.error('Error fetching elections:', error);
        res.status(500).json({ message: 'Failed to fetch elections. Please try again later.' });
    }
});

router.put('/updateElection/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { electionId, electionName, startDate, endDate } = req.body;

        // Find the election by ID and update its fields
        const updatedElection = await Election.findByIdAndUpdate(id, {
            electionId,
            electionName,
            startDate,
            endDate
        }, { new: true });

        res.status(200).json({ message: 'Election updated successfully', updatedElection });
    } catch (error) {
        console.error('Error updating election:', error);
        res.status(500).json({ message: 'Failed to update election. Please try again later.' });
    }
});

router.delete('/election/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deletedElection = await Election.findByIdAndDelete(id);
        if (!deletedElection) {
            return res.status(404).json({ message: 'Election not found' });
        }
        res.status(200).json({ message: 'Election deleted successfully' });
    } catch (error) {
        console.error('Error deleting election:', error);
        res.status(500).json({ message: 'Failed to delete election. Please try again later.' });
    }
});

export { router as ElectionRouter };