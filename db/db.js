const mongoose = require("mongoose");

const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Successfully connected: ${conn.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;