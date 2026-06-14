require('dotenv').config();
const { generateResumePdf } = require('./src/services/ai.service');
const temp = require('./src/services/temp');

async function verify() {
    console.log("Verifying AI resume PDF generation...");
    try {
        const pdfBuffer = await generateResumePdf({
            resume: temp.resume,
            selfDescription: temp.selfDescription,
            jobDescription: temp.jobDescription
        });
        console.log("SUCCESS! Generated PDF buffer length:", pdfBuffer.length);
    } catch (err) {
        console.error("Verification failed:", err);
    }
}

verify();
