/**
CURRENTLY RUNNING ON BETA VERSION!!
*
   * @project_name : SHADOW-MD
   * @author : Cipher
   * @description :SHADOW-MD ,A Multi-functional whatsapp user bot.
   * @version 1.0.0
*
   * Licensed under the  GPL-3.0 License;
* 
   * Created By Cipher.
   * © 2024 SHADOW-MD.
* 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.

 ⛥
  //┌┤\n`
 **/
const axios = require('axios')
const { sck1, tiny, fancytext,getBuffer, listall,cmd , TelegraPh , Config} = require('../lib/')
const fs = require('fs-extra');
const { exec } = require('child_process')
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");

    //---------------------------------------------------------------------------
cmd({
            pattern: "photo",
            desc: "Makes photo of replied sticker.",
            category: "converter",
            use: '<reply to any gif>',
            filename: __filename
        },
        async(Void, citel, text) => {
            const getRandom = (ext) => {
                return `${Math.floor(Math.random() * 10000)}${ext}`
            }
            if (!citel.quoted) return citel.reply(`_Reply to Any Sticker._`)
            let mime = citel.quoted.mtype
  if (mime =="imageMessage" || mime =="stickerMessage")
  {
            let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
            let name = await getRandom('.png')
            exec(`ffmpeg -i ${media} ${name}`, (err) => {
                let buffer = fs.readFileSync(media)
                Void.sendMessage(citel.chat, { image: buffer }, { quoted: citel })
              
             fs.unlink(media, (err) => {
             if (err) { return console.error('File Not Deleted from From TOPHOTO AT : ' , media,'\n while Error : ' , err);  }
             else return console.log('File deleted successfully in TOPHOTO  at : ' , media);
             });
             
            })
            
  } else return citel.reply ("```Uhh Please, Reply To A Non Animated Sticker```")
        }
    )
//---------------------------------------------------------------------------
    
 cmd({
             pattern: "vv",
             alias : ['viewonce','retrive'],
             desc: "Flips given text.",
             category: "misc",
             use: '<query>',
             filename: __filename
         },
         async(Void, citel, text) => {
try {
const quot = citel.msg.contextInfo.quotedMessage.viewOnceMessageV2;
  if(quot)
  {
    if(quot.message.imageMessage) 
    { console.log("Quot Entered") 
       let cap =quot.message.imageMessage.caption;
       let anu = await Void.downloadAndSaveMediaMessage(quot.message.imageMessage)
       return Void.sendMessage(citel.chat,{image:{url : anu},caption : cap })
    }
    if(quot.message.videoMessage) 
    {
       let cap =quot.message.videoMessage.caption;
       let anu = await Void.downloadAndSaveMediaMessage(quot.message.videoMessage)
       return Void.sendMessage(citel.chat,{video:{url : anu},caption : cap })
    }
     
  }
  //else citel.reply("```This is Not A ViewOnce Message```") 
           
}  
         
 catch(e) {  console.log("error" , e ) }     

           
if(!citel.quoted) return citel.reply("```Uh Please Reply A ViewOnce Message```")           
if(citel.quoted.mtype === "viewOnceMessage")
{ console.log("ViewOnce Entered") 
     if(citel.quoted.message.imageMessage )
    { 
      let cap =citel.quoted.message.imageMessage.caption;
      let anu = await Void.downloadAndSaveMediaMessage(citel.quoted.message.imageMessage)
      Void.sendMessage(citel.chat,{image:{url : anu},caption : cap })
    }
    else if(citel.quoted.message.videoMessage )
    {
      let cap =citel.quoted.message.videoMessage.caption;
      let anu = await Void.downloadAndSaveMediaMessage(citel.quoted.message.videoMessage)
      Void.sendMessage(citel.chat,{video:{url : anu},caption : cap })
    }
 
}
else return citel.reply("```This is Not A ViewOnce Message```")
 
})
 //---------------------------------------------------------------------------
 //---------------------------------------------------------------------------
cmd({
            pattern: "attp",
            alias: ["circlestic","circlesticker","cs"],
            desc: "Makes sticker of replied image/video.",
            category: "sticker",
filename: __filename,
            use: '<reply to any image/video.>'
        },
        async(Void, citel, text) => {
if(!text) return citel.reply("```Uhh Please, Give Me text```")
let url = `https://raganork-api.onrender.com/api/attp?text=${text}&apikey=with_love_souravkl11`
let media  = await getBuffer(url)

                let sticker = new Sticker(media, {
                    pack: Config.packname, 
                    author: Config.author, 
                    type: StickerTypes.FULL,
                    categories: ["🤩", "🎉"], 
                    id: "12345", 
                    quality: 100,
                    background: "transparent", 
                });
                const buffer = await sticker.toBuffer();
                return Void.sendMessage(citel.chat, {sticker: buffer}, {quoted: citel });

        }
    )
    //---------------------------------------------------------------------------
 //---------------------------------------------------------------------------
cmd({
            pattern: "sticker",
            alias: ["s"],
            desc: "Makes sticker of replied image/video.",
            category: "sticker",
filename: __filename,
            use: '<reply to any image/video.>'
        },
        async(Void, citel, text) => {
 let mime = citel.mtype;
let media ;
let pack = Config.packname
let author = Config.author 
if (mime =="imageMessage" || mime =="videoMessage") {  media = await citel.download(); }
else if (citel.quoted){ 
 mime = citel.quoted.mtype; 
 if (mime =="imageMessage" || mime =="videoMessage" || mime =="stickerMessage") {  media = await citel.quoted.download(); }
 else return citel.reply("```Uhh,Please reply to any image or video```")
}
else return citel.reply("```Uhh,Please reply to any image or video```");
          
if(mime =="videoMessage")
{
    let caption = { packname :Config.packname, author:Config.author}
    const { writeExifVid }  = require("../lib/exif.js")
    let buffer = await writeExifVid(media , caption  );   
    return await Void.sendMessage(   citel.chat ,  { sticker: { url: buffer }, } );
}





                let sticker = new Sticker(media, {
                    pack: pack, // The pack name
                    author: author, // The author name
                    type: StickerTypes.FULL ,
                    categories: ["🤩", "🎉"], // The sticker category
                    id: "12345", // The sticker id
                    quality: 100, // The quality of the output file
                    background: "transparent",
                });
                const buffer = await sticker.toBuffer();
                return Void.sendMessage(citel.chat, {sticker: buffer}, {quoted: citel });
            
        }
    )
 //---------------------------------------------------------------------------
cmd({
            pattern: "circle",
            alias: ["circlestic","circlesticker","cs"],
            desc: "Makes sticker of replied image/video.",
            category: "sticker",
filename: __filename,
            use: '<reply to any image/video.>'
        },
        async(Void, citel, text) => {
            if (!citel.quoted) return citel.reply(`*Reply To any Image or video Sir.*`);
          //console.log("Quoted Data here : ",citel.quoted);
            let mime = citel.quoted.mtype
            pack = Config.packname
            author = Config.author
           if (mime =="imageMessage" || mime =="stickerMessage") {
                let media = await citel.quoted.download();
                //citel.reply("*Processing Your request*");
                let sticker = new Sticker(media, {
                    pack: pack, // The pack name
                    author: author, // The author name
                    type: StickerTypes.CIRCLE ,
                    categories: ["🤩", "🎉"], // The sticker category
                    id: "12345", // The sticker id
                    quality: 75, // The quality of the output file
                });
                const buffer = await sticker.toBuffer();
                return Void.sendMessage(citel.chat, {sticker: buffer}, {quoted: citel });
            }else return citel.reply("*Uhh,Please reply to any image*");

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "crop",
            alias: ["cropstic","csticker","cropsticker"],
            desc: "Makes sticker of replied image/video.",
            category: "sticker",
filename: __filename,
            use: '<reply to any image/video.>'
        },
        async(Void, citel, text) => {
            if (!citel.quoted) return citel.reply(`*Reply To any Image or video Sir.*`);
          //console.log("Quoted Data here : ",citel.quoted);
            let mime = citel.quoted.mtype
            pack = Config.packname
            author = Config.author
            if (mime =="imageMessage"  || mime =="stickerMessage") {
                let media = await citel.quoted.download();
                //citel.reply("*Processing Your request*");
                let sticker = new Sticker(media, {
                    pack: pack, // The pack name
                    author: author, // The author name
                    type: StickerTypes.CROPPED,
                    categories: ["🤩", "🎉"], // The sticker category
                    id: "12345", // The sticker id
                    quality: 75, // The quality of the output file
                });
                const buffer = await sticker.toBuffer();
                return Void.sendMessage(citel.chat, {sticker: buffer}, {quoted: citel });
            }else return citel.reply("*Uhh,Please reply to any image*");

        }
    )
   //---------------------------------------------------------------------------
cmd({
            pattern: "round",
            alias: ["roundstic","roundsticker"],
            desc: "Makes sticker of replied image/video.",
            category: "sticker",
filename: __filename,
            use: '<reply to any image/video.>'
        },
        async(Void, citel, text) => {
            if (!citel.quoted) return citel.reply(`*Reply To any Image or video Sir.*`);
          //console.log("Quoted Data here : ",citel.quoted);
            let mime = citel.quoted.mtype
            pack = Config.packname
            author = Config.author
           if (mime =="imageMessage" || mime =="stickerMessage") {
                let media = await citel.quoted.download();
                //citel.reply("*Processing Your request*");
                let sticker = new Sticker(media, {
                    pack: pack, // The pack name
                    author: author, // The author name
                    type: StickerTypes.ROUNDED ,
                    categories: ["🤩", "🎉"], // The sticker category
                    id: "12345", // The sticker id
                    quality: 75, // The quality of the output file
                });
                const buffer = await sticker.toBuffer();
                return Void.sendMessage(citel.chat, {sticker: buffer}, {quoted: citel });
            }else return citel.reply("*Uhh,Please reply to any image*");

        }
    )
//---------------------------------------------------------------------------

cmd({
            pattern: "memegen",
            desc: "Write text on quoted image.",
            category: "sticker",
            filename: __filename,
            use: '<text>',
        },
        async(Void, citel, text) => {
            if(!text && !citel.quoted) return await citel.reply("*Reply to Photo With text To Create Meme.*")
            if (citel.quoted.mtype != 'imageMessage') return citel.reply(`*Uhh Please, Reply to Photo Only.*`)

          let textt = text.split('|')[0] || '' ;
          let isCheck = text.split('|')[1] || 'sticker'; 
          let tex1 =  textt.split(';')[0] || 'Suhail' ;    
          let tex2 =  textt.split(';')[1] || '_' ;

            let mee = await Void.downloadAndSaveMediaMessage(citel.quoted)
            let bg = await TelegraPh(mee)
            let thmb =await getBuffer(`https://api.memegen.link/images/custom/${tex2}/${tex1}.png?background=${bg}`)

          if (isCheck.startsWith('p') || isCheck.startsWith('P')) { await Void.sendMessage(citel.chat , {image : thmb , caption : Config.caption })  }
          else
          {
            let sticker = new Sticker(thmb, {
                    pack: Config.packname, 
                    author: Config.author, 
                    type: StickerTypes.FULL,
                    categories: ["🤩", "🎉"], 
                    id: "12345", 
                    quality: 100,
                    background: "transparent", 
                });
                const buffer = await sticker.toBuffer();
                return Void.sendMessage(citel.chat, {sticker: buffer}, {quoted: citel }); 
          }
          
            return await fs.unlinkSync(mee)

        }
    )

 //---------------------------------------------------------------------------
 //---------------------------------------------------------------------------
cmd({
            pattern: "quotely",
            desc: "Makes Sticker of quoted text.",
            alias: ["q"],
            category: "sticker",
            use: '<reply to any message.>',
            filename: __filename
        },
        async(Void, citel, text) => {
            if (!citel.quoted) return citel.reply(`Please quote/reply to any message`);
            let textt = citel.quoted.text;
            let pfp;
            try {
                pfp = await Void.profilePictureUrl(citel.quoted.sender, "image");
            } catch (e) {
                pfp = THUMB_IMAGE;
            }
            let todlinkf = ["#FFFFFF", "#000000"];
            let todf = todlinkf[Math.floor(Math.random() * todlinkf.length)];
            let username = await sck1.findOne({ id: citel.quoted.sender })
            var tname;
            if (username.name && username.name !== undefined) {
                tname = username.name
            } else {
                tname = Void.getName(citel.quoted.sender)
            }
            let body = {
                type: "quote",
                format: "png",
                backgroundColor: todf,
                width: 512,
                height: 512,
                scale: 3,
                messages: [{
                    avatar: true,
                    from: {
                        first_name: tname,
                        language_code: "en",
                        name: tname,
                        photo: {
                            url: pfp,
                        },
                    },
                    text: textt,
                    replyMessage: {},
                }, ],
            };
            let res = await axios.post("https://bot.lyo.su/quote/generate", body);
            let img = Buffer.alloc(res.data.result.image.length, res.data.result.image, "base64");
            return citel.reply(img,{packname:Config.packname,author:''},"sticker")

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "fancy",
            desc: "Makes stylish/fancy given text",
            category: "converter",
            use: '56 Secktor',
            react: "✅",
            filename: __filename
        },
        async(Void, citel, text) => {
            if (isNaN(text.split(" ")[0]) || !text) {
                let text = tiny(
                    "Fancy text generator\n\n*_______________________________*\n*Example: .fancy 32 Suhail Md*\n*_______________________________*\n\n"
                );
                listall("Secktor").forEach((txt, num) => {
                    text += `${(num += 1)} ${txt}\n`;
                });
                return await citel.reply(text);
            }

            let fancytextt = await fancytext(`${text.slice(2)}`, text.split(" ")[0])
            citel.reply(fancytextt)

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "tiny",
            desc: "Makes url tiny.",
            category: "converter",
            use: '<url>',
            react: "✅",
            filename: __filename
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`Provide me a link`)
            try {
                let link = text.split(" ")[0];
                let anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`);
                citel.reply(`*🛡️Your Shortened URL*\n\n${anu.data}`);
            } catch (e) {
                console.log(e);
            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
        pattern: "toaudio",
        alias:['mp3','tomp3'],
        desc: "changes type to audio.",
        category: "converter",
        use: '<reply to any Video>',
        filename: __filename
    },
   async(Void, citel, text) => {
        if (!citel.quoted) return citel.reply(`_Reply to Any Video_`);
        let mime = citel.quoted.mtype
if (mime =="audioMessage" || mime =="videoMessage")
{
        let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
         const { toAudio } = require('../lib');
         let buffer = fs.readFileSync(media);
        let audio = await toAudio(buffer);
        Void.sendMessage(citel.chat, { audio: audio, mimetype: 'audio/mpeg' }, { quoted: citel });
     
 
 fs.unlink(media, (err) => {
  if (err) { return console.error('File Not Deleted from From TOAUDIO AT : ' , media,'\n while Error : ' , err);  }
  else return console.log('File deleted successfully in TOAUDIO MP3 at : ' , media);
});

}
 else return citel.reply ("*Uhh Please, Reply To A video Message*")
    }
)
     //---------------------------------------------------------------------------
cmd({
    pattern: "toMp4",
    alias:['mp4','tovideo','tovid'],
    desc: "changes type to audio.",
    category: "converter",
    use: '<reply to any Video>',
    filename: __filename
},
async(Void, citel, text) => {
    const { webp2mp4File } = require ("../lib")
    if (!citel.quoted) return citel.reply('*Uhh Dear, Reply To Animated Sticker or Gif*')
    let mime = citel.quoted.mtype
    let mimetype = citel.quoted.mimetype
    if( mime !="videoMessage" && !/webp/.test(mimetype)) return await citel.send("*Damn... Reply To An Animated Sticker or Gif *")
    let media = await Void.downloadAndSaveMediaMessage(citel.quoted)
    try {
        if (/webp/.test(mimetype)) {  let webpToMp4 = await webp2mp4File(media);  media =  webpToMp4.result; }
        await Void.sendMessage(citel.chat, { video: { url: media ,}, caption: Config.caption  },)
        try{ return await fs.unlink(media);}catch(e){ return console.log("Error While Deleting Tomp4 File :  ", e)}
    }catch(e){ return console.log("*Your Request Not Be Proceed due to Error.*  \n*_Error :_* ", e)}
}
)