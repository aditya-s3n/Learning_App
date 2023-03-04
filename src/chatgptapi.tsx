import React, { useState } from 'react';
import OpenAI from '@openai/api';


const apiKey = process.env.OPENAI_API_KEY;
OpenAI.apiKey = apiKey;

function GptApiExample() {
  const [prompt, setPrompt] = useState('');

  const openai = new OpenAI(apiKey);

  async function generateText() {
    const completions = await openai.complete({
      engine: 'davinci',
      prompt: prompt,
      maxTokens: 150,
      n: 1,
      stop: '\n',
    });
    const generatedText = completions.choices[0].text.trim();
    console.log(generatedText);
  }

}

export default GptApiExample;
