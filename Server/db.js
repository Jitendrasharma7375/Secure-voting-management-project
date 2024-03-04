import mongoose from 'mongoose';


const Connection = async () => {
    try {
        await mongoose.connect("mongodb+srv://hiteshnatha15:Hn%402317412@cluster0.6rwpgxd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error:', error);
    }
}

Connection();
