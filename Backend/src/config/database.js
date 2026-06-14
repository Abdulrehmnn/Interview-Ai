// ============================================================
// STEP 3: Database Connection (server.js connectDB() call karta hai)
// ============================================================

const dns = require("dns")
const mongoose = require("mongoose")

// Step 3.1: Windows par MongoDB Atlas SRV lookup fix ke liye DNS servers set karo
if (process.env.NODE_ENV !== "production") {
    dns.setServers(["8.8.8.8", "1.1.1.1"])
}

async function connectDB() {
    try {
        // Step 3.2: .env se MONGO_URI le kar MongoDB Atlas se connect karo
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to MongoDB")
    } catch (error) {
        console.error("Error connecting to MongoDB:", error)
    }
}

module.exports = connectDB
