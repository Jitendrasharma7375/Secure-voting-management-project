import { Candidate } from "../models/Candidate.js";

const createCandidate = async (candidateData) => {
    try {
        const candidate = new Candidate(candidateData);
        await candidate.save();
        return candidate;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export default createCandidate;