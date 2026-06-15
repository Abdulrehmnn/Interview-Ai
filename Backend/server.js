require("dotenv").config();

const app = require("./src/app");
const connectDB = require("./src/config/database");

// Connect DB safely
connectDB().catch((err) => {
    console.error("MongoDB connection failed:", err);
});

// Only run locally (NOT on Vercel)
if (process.env.NODE_ENV !== "production") {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

// Vercel requires export
module.exports = app;