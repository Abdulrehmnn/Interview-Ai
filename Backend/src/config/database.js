const mongoose = require("mongoose");

let isConnected = false;

async function connectDB() {
    if (isConnected) return;

    try {
        await mongoose.connect(process.env.MONGO_URI);

        isConnected = true;
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
        throw error;
    }
}

module.exports = connectDB;