// ============================================================
// STEP 14: Test Data (development/testing ke liye sample data)
// Use: server start par AI test karne ke liye (optional)
// Production mein asal data PDF + form se aata hai
// ============================================================

// Sample resume text
const resume = `
Name : Abdul Rehman
Full Stack Developer

Experience:
- 2+ years of experience in React.js, React Native, Node.js, and MongoDB.
- Developed e-commerce, food delivery, and dashboard applications.
- Integrated payment gateways, Firebase notifications, and REST APIs.

Skills:
- React.js
- React Native
- JavaScript
- TypeScript
- Node.js
- Express.js
- MongoDB
- Tailwind CSS
- Git
- Redux

Education:
Bachelor's Degree in Computer Science
`

// Candidate apne baare mein likhta hai
const selfDescription = `
I am a Full Stack Developer with experience building scalable web and mobile applications. I specialize in React.js, React Native, Node.js, and MongoDB. I focus on writing clean, maintainable code and delivering responsive user experiences. I enjoy solving complex technical problems and collaborating with teams to build reliable software products.
`

// Job posting ka description
const jobDescription = `
We are looking for a Full Stack Developer to build and maintain web applications. The ideal candidate should have experience with React.js, Node.js, REST APIs, MongoDB, and modern JavaScript. Responsibilities include developing new features, optimizing performance, integrating third-party services, and collaborating with designers and backend engineers to deliver high-quality products.
`

module.exports = {
    resume,
    selfDescription,
    jobDescription
}
