import { Admin } from "./models/Admin.js";
import './db.js'

export const adminAccount = async (voterID, password) => {
    try {
        const adminCount = await Admin.countDocuments();
        if (adminCount === 0) {
            const newAdmin = new Admin({
                Voter_ID: voterID,
                password: password
            })
            await newAdmin.save()
            console.log('Admin account created')
        } else {
            console.log('Admin account already exists')
        }
    } catch (error) {
        console.log('Error:' + error)
    }
}

