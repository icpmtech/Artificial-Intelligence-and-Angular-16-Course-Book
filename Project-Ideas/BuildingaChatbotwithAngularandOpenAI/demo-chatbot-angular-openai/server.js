const express = require('express');
// configure dotenv
require("dotenv").config();
// import modules from OpenAI library
const OpenAIApi = require("openai");
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();
const PORT = 3000;
const openai = new OpenAIApi.OpenAI({ apiKey: 'APIKEY' });
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.post('/getChatbotResponse', async(req, res) => {
    try {
        const userInput = req.body.text;
        // Get response from OpenAI
        const gptResponse = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{
                "role": "user",
                "content": userInput
            }],
            temperature: 0.5,
            max_tokens: 1024,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            max_tokens: 150
        });

        res.json({ response: gptResponse.choices[0].message.content });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Something went wrong.');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});