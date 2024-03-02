import mongoose from 'mongoose';

const candidateSchema = new mongoose.Schema({
    totalCandidate: Number,
    name: String,
    party: String,
    age: Number,
    district: String,
    state: String
});

const CandidateSchema = mongoose.model('Candidate', candidateSchema);
export { CandidateSchema as Candidate }
