import mongoose from 'mongoose';

const electionSchema = new mongoose.Schema({
    electionId: String,
    electionName: String,
    startDate: Date,
    endDate: Date
});

const Election = mongoose.model('Election', electionSchema);

export { Election };
