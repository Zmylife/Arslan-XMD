const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')

cmd({
    pattern: "play1",
    desc: "download songs",
    category: "download",
    react: "🎵",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*PROVIDE YOUR URL OR TITLE 🔎...*")
const search = await yts(q)
const data = search.videos[0]
const url = data.url

let desc = `╭━❮◆𝗔𝗥𝗦𝗟𝗔𝗡-𝗫𝗠𝗗 𝗦𝗢𝗡𝗚𝗦 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥◆❯━╮

┃➤✰ 𝚃𝙸𝚃𝙻𝙴 : ${data.title}

┃➤✰ 𝚅𝙸𝙴𝚆𝚂 : ${data.views}

┃➤✰ 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽 : ${data.description}

┃➤✰𝚃𝙸𝙼𝙴 : ${data.timestamp}

┃➤  𝙰𝙶𝙾 :  ${data.ago}
╰━━━━━━━━━━━━━━━⪼


> ©𝗖𝗥𝗘𝗔𝗧𝗘𝗗 𝗕𝗬 𝗔𝗥𝗦𝗟𝗔𝗡-𝗫𝗠𝗗
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download audio

let down = await fg.yta(url)  
let downloadUrl = down.dl_url

//send audio
await conn.sendMessage(from,{audio:{url: downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document:{url: downloadUrl},mimetype:"audio/mpeg",fileName:data.title + "mp3",caption:"©𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗔𝗥𝗦𝗟𝗔𝗡-𝗫𝗠𝗗"},{quoted:mek})
}catch(e){
reply(`${e}`)
}
})

//===========video-dl===========

cmd({
    pattern: "video1",
    desc: "download video",
    category: "download",
    react: "🎥",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*PROVIDE YOUR URL OR TITLE 🔎...*")
const search = await yts(q)
const data = search.videos[0]
const url = data.url

let des = `╭━❮◆ 𝗔𝗥𝗦𝗟𝗔𝗡-𝗫𝗠𝗗 𝗩𝗜𝗗𝗘𝗢 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 ◆❯━╮

┃➤✰ 𝚃𝙸𝚃𝙻𝙴 : ${data.title}

┃➤✰ 𝚅𝙸𝙴𝚆𝚂 : ${data.views}

┃➤✰ 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽 : ${data.description}

┃➤✰𝚃𝙸𝙼𝙴 : ${data.timestamp}

┃➤  𝙰𝙶𝙾 :  ${data.ago}
╰━━━━━━━━━━━━━━━⪼


> ©𝗖𝗥𝗘𝗔𝗧𝗘𝗗 𝗕𝗬 𝗔𝗥𝗦𝗟𝗔𝗡-𝗫𝗠𝗗 
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:des},{quoted:mek});

//download video

let down = await fg.ytv(url)  
let downloadUrl = down.dl_url

//send video
await conn.sendMessage(from,{video:{url: downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document:{url: downloadUrl},mimetype:"video/mp4",fileName:data.title + "mp4",caption:"©𝙮𝙤𝙪𝙧 𝙫𝙞𝙙𝙚𝙤 𝙮𝙤𝙪 𝙝𝙞𝙜𝙝𝙣𝙚𝙨𝙨"},{quoted:mek})
    
}catch(a){
reply(`${a}`)
}
})
