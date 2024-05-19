const axios = require("axios");
const fs = require("fs-extra");
const request = require("request");
module.exports = {
	config: {
		name: "Out",
		aliases: ["l"],
		version: "1.0",
		author: "Sandy",
		countDown: 5,
		role: 2,
		shortDescription: "bot will leave gc",
		longDescription: "",
		category: "admin",
		guide: {
			vi: "{pn} [tid,blank]",
			en: "{pn} [tid,blank]"
		}
	},

	onStart: async function ({ api,event,args, message }) {
 var id;
 if (!args.join(" ")) {
 id = event.threadID;
 } else {
 id = parseInt(args.join(" "));
 }
 return api.sendMessage('𝗚𝗢𝗢𝗗 𝗕𝗬𝗘 𝗡𝗜𝗚𝗚𝗔𝗦\n\n𝗜𝗠 𝗟𝗘𝗔𝗩𝗜𝗡𝗚 𝗡𝗢𝗪 𝗕𝗖𝗭 𝗧𝗛𝗘 𝗣𝗘𝗥𝗠𝗜𝗦𝗦𝗜𝗢𝗡 𝗧𝗢 𝗟𝗘𝗔𝗩𝗘 𝗕𝗬 𝗔𝗗𝗠𝗜𝗡 𝗖𝗢𝗠𝗠𝗔𝗡𝗗....', id, () => api.removeUserFromGroup(api.getCurrentUserID(), id))
		}
	};