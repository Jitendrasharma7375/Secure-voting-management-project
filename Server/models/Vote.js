import mongoose from "mongoose";

const submitVoteSchema = new mongoose.Schema({
    Voter_ID: String,
    Candidate_ID: String,
    Election_ID: String
});

const submitVoteModel = mongoose.model('submitVotes', submitVoteSchema);

export { submitVoteModel as SubmitVote };