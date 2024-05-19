const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
  config: {
    name: "owner",
    aliases: ["info","Kyle Bait-it"],
    author: " Mr perfect ", 
    version: "2.0",
    cooldowns: 0,
    role: 0,
    shortDescription: {
      en: ""
    },
    longDescription: {
      en: "get bot owner info"
    },
    category: "owner",
    guide: {
      en: "{p}{n}"
    }
  },
  onStart: async function ({ api, event }) {
      try {
        const loadingMessage = "𝙇𝙤𝙖𝙙𝙞𝙣𝙜 𝙤𝙬𝙣𝙚𝙧 𝙞𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣......";
        await api.sendMessage(loadingMessage, event.threadID);

        const ownerInfo = {
          name: '𝑲𝒀𝑳𝑬 𝑩𝑨𝑰𝑻-𝑰𝑻',
          gender: '𝘽𝙤𝙮',
          hobby: '𝙥𝙡𝙖𝙮𝙞𝙣𝙜 𝙩𝙖𝙠𝙧𝙖𝙬',
          relationship: '𝙝𝙖𝙫𝙚 𝙖 𝙜𝙞𝙧𝙡𝙛𝙧𝙞𝙚𝙣𝙙 𝙧𝙣',
          facebookLink: 'https://www.facebook.com/kyleyukaro',
          bio: '𝙙𝙤𝙣𝙩 𝙥𝙖𝙣𝙞𝙘 𝙞𝙩𝙨 𝙤𝙧𝙜𝙖𝙣𝙞𝙘', 
        };

        const videoUrl = 
["https://i.imgur.com/kSVZkHH.mp4",
"https://i.imgur.com/Ebj77tA.mp4",
"https://i.imgur.com/5y3yaQQ.mp4",
"https://i.imgur.com/kDKmrsw.mp4",
"https://i.imgur.com/gYGp3WW.mp4",
"https://i.imgur.com/qqT3YRF.mp4",
 ];
        const tmpFolderPath = path.join(__dirname, 'tmp');

        if (!fs.existsSync(tmpFolderPath)) {
          fs.mkdirSync(tmpFolderPath);
        }

        const videoResponse = await axios.get(videoUrl, { responseType: 'arraybuffer' });
        const videoPath = path.join(tmpFolderPath, 'owner_video.mp4');

        fs.writeFileSync(videoPath, Buffer.from(videoResponse.data, 'binary'));

        const response = `
    𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡
««««««««««««««»»»»»»»»»»»»»»       
𝙉𝙖𝙢𝙚:${ownerInfo.name}          
𝙂𝙚𝙣𝙙𝙚𝙧:${ownerInfo.gender}
𝙃𝙤𝙗𝙗𝙮:${ownerInfo.hobby}
𝙍𝙚𝙡𝙚𝙖𝙩𝙞𝙤𝙣𝙨𝙝𝙞𝙥:${ownerInfo.relationship}
𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠 𝙡𝙞𝙣𝙠:${ownerInfo.facebookLink}
𝙂𝙤𝙖𝙡𝙨:${ownerInfo.bio} 
        `;

        await api.sendMessage({
          body: response,
          attachment: fs.createReadStream(videoPath)
        }, event.threadID);
      } catch (error) {
        console.error('Error in owner command:', error);
        api.sendMessage('An error occurred while processing the command.', event.threadID);
      }
    },
    onChat: async function({ api, event }) {
      try {
        const lowerCaseBody = event.body.toLowerCase();

        if (lowerCaseBody === "owner" || lowerCaseBody.startsWith("{p}owner")) {
          await this.onStart({ api, event });
        }
      } catch (error) {
        console.error('Error in onChat function:', error);
      }
    }
  };