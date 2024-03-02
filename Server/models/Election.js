import mongoose from 'mongoose';

const electionSchema = new mongoose.Schema({
    electionId: String,
    electionName: String,
    startDate: Date,
    endDate: Date
});

const ElectionSchema = mongoose.model('Election', electionSchema);

export {ElectionSchema as Election };
