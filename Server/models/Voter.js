import mongoose from 'mongoose';


const voterSchema = new mongoose.Schema({
    Voter_ID: { type: String, required: true, unique: true }, // Assuming alphanumeric voter IDs
    Name: { type: String, required: true },
    DOB: { type: Date, required: true },
    Contact_No: { type: String, required: true }, // Assuming phone numbers are stored as strings
    Address: { type: String, required: true },
    State: { type: String, required: true },
    City: { type: String, required: true },
    PIN: { type: String, required: true }, // Assuming PIN codes are stored as strings
    Password: { type: String, required: true },
    Roles: { type: [String], required: true } // Assuming multiple roles stored as an array of strings
});

const voterModel = mongoose.model('Voter', voterSchema);

export { voterModel as Voter }