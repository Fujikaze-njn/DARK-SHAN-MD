const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://KUSHAN:5000@cluster0.zji09ho.mongodb.net/"
global.port= process.env.PORT || 5000
global.email = 'textnow1pak@gmail.com'
global.github = 'https://github.com/kushansewmina1234/DARK-SHAN-MD'
global.location = 'pakistan'
global.gurl = 'https://instagram.com/naveeddogar_' // add your username
global.sudo = process.env.SUDO || '2349127321026'
global.devs = '2348100835767';
global.website = 'https://github.com/kushansewmina1234/DARK-SHAN-MD' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/ee0f303f5da6d86d024e0.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'DARK-SHAN-MD' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'DARKSHAN' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWURHRUplSnJ6elNtM0tvcUoxdW1yTjFuWmlNYXlFU3AzcWJFR0xOMTduOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoick50Rm5yYitzOE0xeml5UWJpbmdnYmhGV1FSemtRQTlZdGJGbERaUDAxbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDSWVnQVFHcU5uMnl3eG8vNytwSmVwZy9tVTdCNVNsbnZ1U1JMR3JKdzFjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKeXRnSHBDcTZWQXl0cWcwZ2gyKzNWRFcwdkVWVDkvOGdETWI3YmhjcTFRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVLKy84NTNFRlRGUHkrZnN5d0FtaGRPdklZMVZ0N09WMkUreGR6endjSHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRDUlcrRCtXZmg2UGpsUXRyK2dwRDBxYWNyMXI0NHl3RDFXdkU2akhyVjg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU45eGVGTXNLQWova0xnVnMrS3RJNG9PaldreElXWk1HSFYrbHhLMzlscz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicStYNUFaT1FyVUoyc2trVDV2RldKTWQzbHdwWkVaZzc3TnNHYUJmQzVpUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5QUE9pU2J2bkVmR1VrUU9jOWM3QldWZjlObWV1WDF3ZDNYRnh1MVFEWStpT2h1VVIvQXZsN0w2NEx1c0JJalNOaHpzNzFaRFZMOXUzd0ZuZVE4bGpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjksImFkdlNlY3JldEtleSI6IjRwQXJ3K3dXNnVUNHQ4am4xY0RjUWZXVm5LZWVOVFppaFJBZThyNlREKzA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlBCWnluYkFTUmM2TWZISHE2S0dubkEiLCJwaG9uZUlkIjoiOTlkYzNhMGUtYzI4MS00NzQ5LThjMmMtOTEzNDdjYmI5MGRiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZSMDhmbndEV3RDbHR0cTdVYkZuRzB2R3dLVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYZHQ2dmFuU2ZtejVOVURlZXcrUjlZTFJ2UDQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiM1RFS1dIUEEiLCJtZSI6eyJpZCI6IjIzNDgxMDA4MzU3Njc6MzNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiS2luZyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTnJxdDRZRkVJNjFpclFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiN2EzUnpTZEp2VHZxbGtMMkZ5NjJtR3FHanRtZkg5ak1zL01BWS9Rd0Ftcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoidFNzTXVUdm1xcllJV2dEWWlHNnZmV1VvK1ZLNWZqb25sR0VESEtRbUJ1OEZGb2h6TFp2TkptcHMzREtzUXliY1gzUU9GbElIRHBGZVV4bU9BM01LQmc9PSIsImRldmljZVNpZ25hdHVyZSI6InlFVFk2a0dnUzkrUGFldjV4T2QrKzkrREg2UTR4VEpuazNPT2xMcVp2UGJsRmU0Zm9vT1haQURuM2NLVUg4TFpSZzBiTklHZFdBc2JuVDBoU1piSmlBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODEwMDgzNTc2NzozM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlMnQwYzBuU2IwNzZwWkM5aGN1dHBocWhvN1pueC9ZekxQekFHUDBNQUpyIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5ODM1MjkxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUxnQyJ9' : process.env.SESSION_ID,
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'DARKSHAN' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'DARK-SHAN-MD' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'true' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'fuck' : process.env.ANTI_BAD_WORD,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  ANTI_LINK: process.env.ANTI_LINK === undefined ? false : process.env.ALWAYS_ONLINE,
  WAPRESENCE:process.env.WAPRESENCE === undefined ? false : process.env.WAPRESENCE, // 'composing' (typing) | 'recording' (recording) | 'paused'	
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? true : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? true : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-0.０.１' : process.env.VERSION,
  LANG: process.env.THEME|| 'DARKSHAN',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
