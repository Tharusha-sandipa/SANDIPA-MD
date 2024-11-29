const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "🖤",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*

*𝙸'𝚖 SANDIPA-MD*

*👋 Hello tharusha-sandipa*

*𝙸'𝚖 sandipa-𝙼𝙳*

*┌───────────◉▸▷*
*├ʙᴏᴛ :- sandipa-ᴍᴅ*
*├ᴏᴡɴᴇʀ :- tharusha*
*├ꜰʀᴏᴍ :- anuradhapura*
*├ᴀɢᴇ :- 999*
*└──────────◉▸▷*

*ᴍᴏʀᴇ ᴅɪᴛᴇʟꜱ -* https://wa.me/+94740326138?text=_sandipa-md_👑📍`



await conn.sendMessage(from,{image:{url: `https://i.ibb.co/wcHwdPK/53d2bff096a99c23.jpg`},caption:dec},{quoted:mek});
}catch(e){
console.log(e)
reply(`${e}`)
}
})
