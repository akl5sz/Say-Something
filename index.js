import inquirer from 'inquirer';
import { ElevenLabsClient, play } from "elevenlabs";
//https://elevenlabs.io/docs/api-reference/text-to-speech/convert

//I downloaded "ffmpeg-master-latest-win64-gpl-shared.zip" from https://github.com/BtbN/FFmpeg-Builds/releases
// and set the .../bin folder as an environment variable for this project to work

let userInput = "";
inquirer
  .prompt([
    {message:"Enter message: ", name: "input"}
  ])
  .then(async (answers) => {
    //https://elevenlabs.io/docs/api-reference/text-to-speech/convert?playground=%2Fdocs%2Fapi-reference%2Ftext-to-speech%2Fconvert
    const client = new ElevenLabsClient({
      apiKey: "sk_7187afc6d34659ea73d01ef96325efd351a3ceede0c7f79d",
    });
    const audio = await client.textToSpeech.convert("pFZP5JQG7iQjIQuC4Bku", {
    text: answers.input,
    model_id: "eleven_multilingual_v2",
    output_format: "mp3_44100_128",
    });
    await play(audio);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });