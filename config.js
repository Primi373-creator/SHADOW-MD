const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════✘Required Variables✘════════\\
global.owner = process.env.OWNER_NUMBER || '2349067654525' ;
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority" ;
global.port=8000  ;
global.audio = '' ; 
global.video = '' ;
global.blockJids = process.env.BLOCK_JID ||'120363023983262391@g.us' ;
global.allowJids = process.env.ALLOW_JID ||'120363022922797633@g.us' ;
global.email = 'obasprom252@gmail.com' ;
global.github = 'https://github.com/Cipher0071/SHADOW-MD' ;
global.location = 'Benin Nigeria' ;
global.timezone  = process.env.TIME_ZONE || 'Africa/Lagos'
global.gurl = 'https://github.com/Cipher0071/SHADOW-MD' ; // add your username
global.sudo =  process.env.SUDO || "2349067654525" ;
global.devs = "2349067654525"; //Dont change it From here
global.website = 'https://github.com/Cipher0071/SHADOW-MD' ; //wa.me/+2340000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://i.pinimg.com/originals/51/a5/88/51a58806748ca1ee98507c287f9f8682.jpg' ;
module.exports = {
  sessionName: process.env.SESSION_ID || 'SESSION_14_57_01_13_FreedTowards',      //Put Your Session Id Here
  botname: process.env.BOT_NAME || 'SHADOW-MD',
  ownername:  process.env.OWNER_NAME || `Cipher`,
  author:  process.env.PACK_AUTHER || '', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'true',
  packname:  process.env.PACK_NAME || "Cipher " ,
  autoreaction: process.env.AUTO_REACTION || 'on',
  antibadword : process.env.ANTI_BAD_WORD || 'werey',
  alwaysonline: process.env.ALWAYS_ONLINE || 'false',
  antifake :   process.env.FAKE_COUNTRY_CODE ||'212',
  readmessage: process.env.READ_MESSAGE || 'false',
  HANDLERS: process.env.PREFIX || '#',
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "true",
  MsgsInLog:process.env.MSGS_IN_LOG ||'false',
  pmMsgsInLog:process.env.PM_MSGS_IN_LOGS ||'false',
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'true',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.BRANCH || 'remove',
  BRANCH: process.env.BRANCH || 'main',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  caption :process.env.CAPTION || "\tSHADOW-MD ",  //star my github repo @https://github.com/Cipher0071/SHADOW-MD,
  promote_demote_messages : process.env.PROMOTE_DEMOTE_MESSAGES || 'false' ,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY ||'' ,
  VERSION: process.env.VERSION || 'v.1.0.0',
  LANG: process.env.THEME|| 'SHADOW',
  menu : process.env.MENU || '', /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: SHADOW-MD Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  WORKTYPE: process.env.WORKTYPE || 'public'
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
