const express = require('express');
const { OpenAI } = require('openai');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Initialize OpenAI instance
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,  // Use environment variable for API Key
});

// Middleware to parse JSON requests
app.use(express.json());

// Route to handle chart data generation from OpenAI API
app.post('/generate-chart-data', async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4',  // You can use gpt-3.5 or another model
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    });

    const generatedText = response.choices[0].message.content;

    // Send the generated data (could be in any form you want to use for charts)
    res.json({ chartData: generatedText });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data from OpenAI');
  }
});

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
