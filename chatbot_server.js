const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();
const PORT = process.env.BASE2_URL || 3001;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';

app.use(bodyParser.json());

// Enable CORS only for the specified frontend URL
app.use(cors({
    origin: FRONTEND_URL,
    credentials: true, // If using cookies or authentication
    methods: "GET,POST,PUT,DELETE", // Specify allowed methods
    allowedHeaders: "Content-Type,Authorization", // Specify allowed headers
}));

const genAI = new GoogleGenerativeAI(process.env.api_generative_ai);

app.post('/generate', async (req, res) => {
    const prompt = req.body.prompt;
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const completePrompt = `You are a fitness coach and I want you to give a solution to my problem: '${prompt}'.`;

    try {
        const result = await model.generateContent(completePrompt);
        const text = await result.response.text();
        res.json({ text });
    } catch (error) {
        console.error('Error generating content:', error);
        res.status(500).json({ error: 'An error occurred. Please try again.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at backend URL: http://localhost:${PORT}`);
});
