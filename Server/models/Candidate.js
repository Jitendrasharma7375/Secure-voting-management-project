import mongoose from 'mongoose';

const candidateSchema = new mongoose.Schema({
    name: { type: String, required: true },
    party: { type: String, required: true },
    constituency: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
    contact: {
        email: { type: String },
        phone: { type: String }
    }
});

const candidateModel = mongoose.model('Candidate', candidateSchema);

export {candidateModel as Candidate}
