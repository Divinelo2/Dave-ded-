const { getStreamFromURL } = require("fb-watchman");
module.exports = {
  config: {
    name: "info",
    version: 2.0,
    author: "OtinXSandip",
    longDescription: "0info about bot and owner",
    category: "ai",
    guide: {
      en: "{p}{n}",
    },
  },

  onStart: async function ({ api, event, args, message, usersData }) {
    const imgURL = "https://i.imgur.com/oeF21Tq.gif";
    const attachment = await global.utils.getStreamFromURL(imgURL);

    const id = event.senderID;
    const userData = await usersData.get(id);
    const name = userData.name;

    const ment = [{ id: id, tag: name }];
    const a = "YANZU BOT TABACHOY";
    const b = "✱";
    const c = "KYLE BAIT-IT";
const e = "Male";
    const d = "m.me/kyleyukaro";
const f = "rx_editz";
const g = "have a girlfriend rn plss dnd✋";

    message.reply({ 
      body: `${name}, here is the information ツ
❐ Bot's Name: ${a}
❐ Bot's prefix: ${b}  
❐ Owner: ${c}
❐ Gender: ${e}
❐ Messenger: ${d}
❐ Insta: ${f}
❐ Relationship: ${g}`,
mentions: ment,
      attachment: attachment });
  }
};