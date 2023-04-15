const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const askToChatGpt = async function (req, res) {


  try {
    const configuration = new Configuration({
      apiKey: process.env.CHATGPT_TOKEN,
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: req.body.messages[0].data,
      max_tokens: 7,
      temperature: 0,
    });
  
    const repliedMessage = response.data.choices[0].text;
    res.send({ from: "chatGpt", data: repliedMessage });
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
};

module.exports = {
  askToChatGpt,
};
