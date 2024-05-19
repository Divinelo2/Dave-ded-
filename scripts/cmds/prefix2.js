module.exports = {
 config: {
   name: "prefix",
   version: "1.0",
   author: "Mr perfect",
   countDown: 5,
   role: 0,
   shortDescription: "no prefix",
   longDescription: "no prefix",
   category: "auto 🪐",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "prefix") {
 return message.reply({
 body: `heyy bro, my prefix is [  ✱  ]\n\n______________________________\n𝗛𝗢𝗪 𝗧𝗢 𝗨𝗦𝗘?\nexample please type: ✱help - to view all cmds\n✱menu\n✱info\n✱owner\n✱ping\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥: 𝐾𝑌𝐿𝐸 𝐵𝐴𝐼𝑇-𝐼𝑇 ツ\n______________________________
`,
  attachment: await global.utils.getStreamFromURL("https://i.imgur.com/YMrKLFn.gif")
 });
 }
 }
}