module.exports = {
 config: {
 name: "Kyle",
 version: "1.0",
 author: "leeza", // xue editz
 countDown: 5,
 role: 0,
 shortDescription: "no prefix",
 longDescription: "no prefix",
 category: "no prefix",
 }, 
 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "Kyle") {
 return message.reply({
 body: "Dont Call Kyle Bait-it If he Aint Here !!",
 attachment: await global.utils.getStreamFromURL(" ")
 });
 }
 }
}