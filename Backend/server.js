// ============================================================
// STEP 1: Server Entry Point (sab se pehle yahan se start hota hai)
// ============================================================

// Step 1.1: .env file se secrets load karo (MONGO_URI, JWT_SECRET, GOOGLE_API_KEY)
require("dotenv").config()

// Step 1.2: Express app import karo (middlewares + routes already setup hain)
const app = require("./src/app")

// Step 1.3: MongoDB connection function import karo
const connectDB = require("./src/config/database")

// Step 1.4: MongoDB se connect karo
connectDB()

// Step 1.5: Server port 3000 par listen karo — ab API requests accept karega
app.listen(3000, () => {
    console.log("Server is running on port 3000")
})
