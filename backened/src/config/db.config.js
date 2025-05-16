const mongoose = require('mongoose');

const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`the database is connected with ${mongoose.connection.host}`);
    } catch{
        mongoose.disconnect();
        process.exit(1)
    }
}