const axios = require('axios');

const Prefixes = [
  'ai',
  'anya',
  'perfect',
  '+ai',
  'hi',
  '.ai',
  'ask',
];

module.exports = {
  config: {
    name: "ask",
    version: 1.0,
    author: "OtinXSandip",
    longDescription: "AI",
    category: "ai",
    guide: {
      en: "{p} questions",
    },
  },
  onStart: async function () {},
  onChat: async function ({ api, event, args, message }) {
    try {

      const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }
      const prompt = event.body.substring(prefix.length).trim();
   if (!prompt) {
        await message.reply("hi I'm zephyrus 𝘼𝙞 please provide a questionʕง•ᴥ•ʔง");
        return;
      }


      const response = await axios.get(`https://sandipbaruwal.onrender.com/gpt?prompt=${encodeURIComponent(prompt)}`);
      const answer = response.data.answer;


    await message.reply({ body: `𝙆𝙔𝙇𝙀'𝙎 𝘼𝙄
______________________________ 
𝗤𝗨𝗘𝗦𝗧𝗜𝗢𝗡: ${question}?
______________________________
𝗔𝗡𝗦𝗪𝗘𝗥: ${answer}
______________________________
𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥
m.me/kyleyukaro`,
});

   } catch (error) {
      console.error("Error:", error.message);
    }
  }
};