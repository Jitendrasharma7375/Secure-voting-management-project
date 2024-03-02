import mongoose from 'mongoose';


const Connection = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/Voting_Project", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error:', error);
    }
}

Connection();
