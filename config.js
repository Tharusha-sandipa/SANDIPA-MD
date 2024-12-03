const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "WEJw0biD#prjvcFzLpoBve-cDiVQ_Xhsefeh0Y1vf5ITrRWnwluI",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "true",
AUTO_REPLY: process.env.AUTO_REPLY || "true",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/gP9btVt/aa75dcb6ee9d31a8.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "> *HEY MY DEAR FRIEND❤ I'M ALIVE NOW❤️‍🩹 I'M SANDIPA-MD WHATSAPP BOT 😊♻️*",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || ".",
FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
AUTO_REACT: process.env.AUTO_REACT || "true",
REJECT_CALL: process.env.REJECT_CALL || "true",
HEART_REACT: process.env.HEART_REACT || "true",
OWNER_REACT: process.env.OWNER_REACT || "true",
BOT_NAME: process.env.BOT_NAME || "SANDIPA-MD",
};
