# 🤖 Interview-AI

![Status](https://img.shields.io/badge/Status-Active-success.svg)
![Stack](https://img.shields.io/badge/Stack-MERN-blue.svg)

**Interview-AI** is a comprehensive full-stack web application designed to streamline the interview and resume verification process. Powered by Google's Gemini AI, it helps process resumes, extract insights, verify user profiles, and automatically generate detailed, customized feedback or PDF resumes.

---

## ✨ Features

- **AI-Powered Intelligence**: Integrates **Google Gemini AI** (`@google/genai`) to analyze resumes and generate insights based on job descriptions.
- **Resume Processing**: Upload and parse PDF resumes seamlessly using `pdf-parse` and `multer`.
- **Dynamic PDF Generation**: Automatically formats and generates detailed PDFs using headless Chrome (`Puppeteer`).
- **Secure Authentication**: Robust user authentication and authorization built with JWT and `bcryptjs`.
- **Modern UI/UX**: Blazing-fast frontend built with **React**, **Vite**, and styled with **Sass**.
- **RESTful API**: Scalable Node.js & Express backend architecture connected to **MongoDB**.

---

## 📸 Screenshots

*(Note: Replace these placeholder image links with your actual project screenshots)*

### 1. Dashboard View
![Dashboard View](https://placehold.co/800x400/1e1e2f/4ade80?text=Interview-AI+Dashboard)

### 2. Resume Upload & Analysis
![Resume Analysis](https://placehold.co/800x400/1e1e2f/3b82f6?text=Resume+Upload+&+Analysis)

### 3. AI Generated Feedback
![AI Feedback](https://placehold.co/800x400/1e1e2f/a855f7?text=AI+Generated+Feedback)

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React (v19)
- **Build Tool**: Vite
- **Routing**: React Router
- **Styling**: Sass
- **HTTP Client**: Axios

### Backend
- **Environment**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB & Mongoose
- **AI Integration**: Google Gemini AI API
- **Utilities**: Puppeteer (PDF generation), Multer (File uploads), PDF-Parse (PDF reading)
- **Security**: JSON Web Tokens (JWT), Bcrypt.js

---

## 🚀 Getting Started

### Prerequisites
Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [MongoDB](https://www.mongodb.com/) (Local instance or MongoDB Atlas)
- Google Gemini API Key

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd Interview-Ai
   ```

2. **Setup the Backend:**
   ```bash
   cd Backend
   npm install
   ```
   Start the backend development server (runs on `http://localhost:3000`):
   ```bash
   npm run dev
   ```

3. **Setup the Frontend:**
   ```bash
   cd ../Frontend
   npm install
   ```
   Start the frontend development server:
   ```bash
   npm run dev
   ```

---

## ⚙️ Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file inside the `Backend` directory:

```env
# Server Port (Default is 3000)
PORT=3000

# MongoDB Connection String
MONGO_URI=your_mongodb_connection_string

# JWT Secret for Authentication
JWT_SECRET=your_jwt_secret_key

# Google Gemini API Key for AI features
GOOGLE_API_KEY=your_google_gemini_api_key
```

---

## 📂 Project Structure

```text
Interview-Ai/
├── Backend/               # Node.js backend application
│   ├── src/               # Controllers, Models, Routes, Services
│   ├── server.js          # Main entry point for backend
│   └── package.json       # Backend dependencies
├── Frontend/              # React frontend application
│   ├── public/            # Static assets
│   ├── src/               # React components, pages, and styles
│   ├── vite.config.js     # Vite configuration and API proxy
│   └── package.json       # Frontend dependencies
└── README.md              # Project documentation (You are here!)
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📝 License

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License.