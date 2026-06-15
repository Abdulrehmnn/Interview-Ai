const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cookieParser());

// SAFE CORS (NO CRASH)
app.use(cors({
    origin: true,
    credentials: true
}));

// ROUTES
const authRouter = require("./routes/auth.route");
const interviewRouter = require("./routes/interview.routes");

// HEALTH CHECK
app.get("/", (req, res) => {
    res.status(200).json({
        status: "InterviewAI Backend is running smoothly!"
    });
});

app.use("/api/auth", authRouter);
app.use("/api/interview", interviewRouter);

module.exports = app;