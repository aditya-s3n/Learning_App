import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: import.meta.env.VITE_OPEN_AI_ORGANIZATION_ID,
    apiKey: import.meta.env.VITE_OPEN_AI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function requestGPTData(prompt: string) {
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 2048  
    });

    return completion.data.choices[0].text;
}

export default requestGPTData

