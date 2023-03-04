require('dotenv').config();
import OpenAI from "openai-api";


function chatgpt() {

    // Set up your API key
    const apiKey = process.env.REACT_APP_OPEN_API_KEY;
    // const openai = new OpenAI(apiKey);
    

    // Set up the prompt for the API
    const prompt = 'Hello, how are you?';

    // Set up the API parameters
    const modelEngine = 'text-davinci-002';
    const temperature = 0.7;
    const maxTokens = 50;

    // Generate text using the OpenAI API
    // async function generateText() {
    // // const response = await OpenAI.completions.create({
    // //     engine: modelEngine,
    // //     prompt: prompt,
    // //     temperature: temperature,
    // //     maxTokens: maxTokens
    // // });

    // // Print the generated text
    // console.log(response.choices[0].text.trim());
    // }

    console.log("hello");
    // generateText();
}

//export
export default chatgpt;