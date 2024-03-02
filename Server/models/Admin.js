import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
    Voter_ID: String,
    password: String
});

const adminModel = mongoose.model('admins', adminSchema);

export { adminModel as Admin };
