import mongoose from 'mongoose';

const candidateSchema = new mongoose.Schema({
    name: String,
    party: String,
    age: Number,
    district: String,
    state: String
});

const Candidate = mongoose.model('Candidate', candidateSchema);
export { Candidate }
