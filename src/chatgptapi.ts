import { Component} from 'react';


function chatgpt() {
    const openai = require('openai');
    require('dotenv').config();

    // Set up your API key
    const apiKey = process.env.OPENAI_API_KEY;
    openai.apiKey = apiKey;

    // Set up the prompt for the API
    const prompt = 'Hello, how are you?';

    // Set up the API parameters
    const modelEngine = 'text-davinci-002';
    const temperature = 0.7;
    const maxTokens = 50;

    // Generate text using the OpenAI API
    async function generateText() {
    const response = await openai.completions.create({
        engine: modelEngine,
        prompt: prompt,
        temperature: temperature,
        maxTokens: maxTokens
    });

    // Print the generated text
    console.log(response.choices[0].text.trim());
    }

    console.log("hello");
    generateText();
}

//export
export default chatgpt;