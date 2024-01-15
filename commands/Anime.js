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
const Config = require('../config')
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1, cmd, GIFBufferToVideoBuffer } = require("../lib");
const axios = require('axios');
const fetch = require('node-fetch');
// let gis = '' // require("g-i-s")
const { Anime, Manga } = require("@shineiichijo/marika");
const {  fetchJson, getBuffer} = require('../lib/')

//----------------------------------------------------------------------
cmd({
            pattern: "poke",
            category: "reaction",
            use: '<quote|reply|tag>',
        },
        async(Void, citel) => {
            var bite = await fetchJson(`https://api.waifu.pics/sfw/poke`);
            const response = await axios.get(bite.url, {
                responseType: "arraybuffer",
            });
            const buffer = Buffer.from(response.data, "utf-8");
            let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
            let gif = await GIFBufferToVideoBuffer(buffer);
            if (users) {
                let cap = `@${citel.sender.split("@")[0]} poked to @${users.split("@")[0]} `;
                Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
            } else {
                let cap = `@${citel.sender.split("@")[0]} poked to everyone. `;
                Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
            }
        }
    )
//-----------------------------------------------------------------------
cmd({
            pattern: "hug",
            category: "reaction",
            use: '<quote|reply|tag>',
        },
        async(Void, citel) => {
            var bite = await fetchJson(`https://api.waifu.pics/sfw/hug`);
            const response = await axios.get(bite.url, {
                responseType: "arraybuffer",
            });
            const buffer = Buffer.from(response.data, "utf-8");
            let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
            let gif = await GIFBufferToVideoBuffer(buffer);
            if (users) {
                let cap = `@${citel.sender.split("@")[0]} hug to @${users.split("@")[0]} `;
                Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
            } else {
                let cap = `@${citel.sender.split("@")[0]} huged to everyone. `;
                Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
            }
        }
    )
//-----------------------------------------------------------------------
cmd({
            pattern: "hold",
            category: "reaction",
            use: '<quote|reply|tag>',
        },
        async(Void, citel) => {
            var bite = await fetchJson(`https://api.waifu.pics/sfw/handhold`);
            const response = await axios.get(bite.url, {
                responseType: "arraybuffer",
            });
            const buffer = Buffer.from(response.data, "utf-8");
            let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
            let gif = await GIFBufferToVideoBuffer(buffer);
            if (users) {
                let cap = `@${citel.sender.split("@")[0]} hold hand of @${users.split("@")[0]} `;
                Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
            } else {
                let cap = `@${citel.sender.split("@")[0]} holed to everyone. `;
                Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
            }
        }
    ) 
//-----------------------------------------------------------------------
cmd({
            pattern: "hifi",
            category: "reaction",
            use: '<quote|reply|tag>',
        },
        async(Void, citel) => {
            var bite = await fetchJson(`https://api.waifu.pics/sfw/highfive`);
            const response = await axios.get(bite.url, {
                responseType: "arraybuffer",
            });
            const buffer = Buffer.from(response.data, "utf-8");
            let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
            let gif = await GIFBufferToVideoBuffer(buffer);
            if (users) {
                let cap = `@${citel.sender.split("@")[0]} highfive with @${users.split("@")[0]} `;
                Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
            } else {
                let cap = `@${citel.sender.split("@")[0]} highfived with everyone. `;
                Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
            }
        }
    )
//-----------------------------------------------------------------------
cmd({
        pattern: "waifu",
        desc: "To get Waifu Random Pics",
        category: "Anime Pics",
        filename: __filename
    },

  async(Void, citel, text) => {
        
         let name1 = text.split("|")[0] || ''
        let name2 = text.split("|")[1] || `1`
        let cap = text.split("|")[1] ? '': '---Waifu Pics Here---'
         
for (let i = 0; i < name2; i++)
{
        let response;
        if(name1 == 'nsfw'){ response = await fetch("https://api.waifu.pics/nsfw/waifu");    }
        else  { response = await fetch("https://api.waifu.pics/sfw/waifu");  }
    
    const nekodds = await response.json();
    let buttonMessages = {
        image: { url: nekodds.url, },
        caption: cap,
        headerType: 1,
    };
     await Void.sendMessage(citel.chat, buttonMessages, { quoted: citel })
}

})
//-----------------------------------------------------------------------
cmd({
        pattern: "naruto",
        desc: "To get Naruto Random Videos",
        category: "Anime Pics",
        filename: __filename
    },
async(Void, citel,text) =>
{
        let res=await axios.get("https://raw.githubusercontent.com/mask-sir/api.mask-ser/main/Naruto.json")
        let url =  res.data.result[Math.floor(Math.random() * res.data.result.length)];
        return await Void.sendMessage(citel.chat,{video :{url : url } , caption: Config.caption }, { quoted: citel })
})
//-----------------------------------------------------------------------
cmd({
    pattern: "neko",
    category: "Anime Pics",
    desc: "Sends a Neko Image in chat",
    filename: __filename
},
async(Void, citel, text) => {
        let name1 = text.split("|")[0] || ''
        let name2 = text.split("|")[1] || `1`
        let cap = text.split("|")[1] ? '': "Here we go😊!!!!"
         
for (let i = 0; i < name2; i++)
{
        let response;
        if(name1 == 'nsfw'){ response = await fetch("https://waifu.pics/api/nsfw/neko");    }
        else  { response = await fetch("https://waifu.pics/api/sfw/neko");  }
    
    const nekodds = await response.json();
    let buttonMessages = {
        image: { url: nekodds.url, },
        caption: cap,
        headerType: 1,
    };
     await Void.sendMessage(citel.chat, buttonMessages, { quoted: citel })
}
        
})
//-----------------------------------------------------------------------
cmd({
    pattern: "foxgirl",
    category: "Anime Pics",
    desc: "Sends image of Fox Girl in current chat.",
    filename: __filename
},
async(Void, citel, text) => 
{
    let  waifuddfg = await axios.get(`https://nekos.life/api/v2/img/fox_girl`);
    await Void.sendMessage(citel.chat, {image: { url: waifuddfg.data.url } }, { quoted: citel })
})
//-----------------------------------------------------------------------
cmd({
        pattern: "animenews",
       category: "Anime Pics" ,
        desc: "Sends Anime News in chat",
        filename: __filename
    },
    async(Void, citel, text) => {
        let qq = [
            "Anime News Today",
            "New Anime",
            "Uocoming Anime News",
            "New Anime Info",
            "Whats news in Anime",
            "Anime Series",
            "Manga News today",
            "Anime New News",
            "Anime News today",
        ];
        let q1 = qq[Math.floor(Math.random() * qq.length)];
        //&domains=techcrunch.com,animenewsnetwork.com,myanimelist.net,comingsoon.net,crunchyroll.com
        let URL1 = `https://newsapi.org/v2/everything?q=${q1}&domains=techcrunch.com,animenewsnetwork.com,myanimelist.net,comingsoon.net,crunchyroll.com&language=en&sortby=publishedat&apikey=cd4116be09ef4a0caceedf21b6258460&pageSize=8`;
        const response = await axios.get(URL1);
        let result = await response;
        result = result.data.articles;
        result.map(async(r, idx) => {
            Void.sendMessage(
                citel.chat, {
                    image: { url: r.urlToImage },
                    caption: `*Title🔰:* ${r.title}\n\n*Content🧩:* ${r.content}\n*Author📌:* ${r.author}\n*Source♦️:* ${r.source.name}\n*Created On☘️:* ${r.publishedAt}\n*More on✨:* ${r.url}\n\n*Powered by ${tlang().title}*`,
                }, {
                    quoted: citel,
                }

            );
        });


    }
)
//-----------------------------------------------------------------------
cmd({
    pattern: "loli",
    category: "Anime Pics",
        filename: __filename,
    desc: "Sends image of loli in current chat."
},
async(Void, citel, text) => {
    waifud = await axios.get("https://waifu.pics/api/sfw/shinobu");
    var wbutss = [{
        buttonId: `${prefix}loli`,
        buttonText: { displayText: `Next Loli✨` },
        type: 1,
    }, ];

    await Void.sendMessage(citel.chat, {image: { url: waifud.data.url }}, {quoted: citel})
}
)
//-----------------------------------------------------------------------
/*
cmd({
    pattern: "pokepic",
    category: "Anime Pics",
        filename: __filename,
    desc: "Sends image of pokemon in current chat."
},
async(Void, citel, text) => {
    const gis = require('g-i-s')
        var pictured = "Pokemon Pics only HD ";
        gis(text + pictured, async(error, result) => {
            n = result;
            images = n[Math.floor(Math.random() * n.length)].url;
            let buttonMessage = {
                image: {
                    url: images,
                },
                caption: `*---「 Poke Pic 」---*`,
                footer: Void.user.name,
                headerType: 4,
                contextInfo: {
                    externalAdReply: {
                        title: tlang().title,
                        body: text,
                        thumbnail: log0,
                        mediaType: 2,
                        mediaUrl: ``,
                        sourceUrl: ``,
                    },
                },
            };
            Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        });

}
)
*/
//---------------------------------------------------------------------------
cmd({
    pattern: "pokemon",
    category: "Anime Pics",
         filename: __filename,
    desc: "Sends info of pokemon in current chat."
},
async(Void, citel, text) => {
        if(!text) return citel.reply("```Uhh Please Give Me Poki Name```")
    try {
        let { data: data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${text}`)
        if (!data.name) return citel.reply(`❌ Could not found any pokemon with that name`)
        let poinfo = `*•Name: ${data.name}*\n*•Pokedex ID: ${data.id}*\n*•Height: ${data.height}*\n*•Weight: ${data.weight}*\n*•Abilities: ${data.abilities[0].ability.name}, ${data.abilities[1].ability.name}*\n*•Base Experience: ${data.base_experience}*\n*•Type: ${data.types[0].type.name}*\n*•Base Stat: ${data.stats[0].base_stat}*\n*•Attack: ${data.stats[1].base_stat}*\n*•Defense: ${data.stats[2].base_stat}*\n*•Special Attack: ${data.stats[3].base_stat}*\n*•Special Defense:${data.stats[4].base_stat}*\n*•Speed: ${data.stats[5].base_stat}*\n`
        Void.sendMessage(citel.chat, { image: { url: data.sprites.front_default }, caption: poinfo }, { quoted: citel })
    } catch (err) {
        citel.reply("Ahh,Couldn't found any pokemon.")
        //console.log(err)
    }

}
)
//---------------------------------------------------------------------------
/*


cmd({
        pattern: "animepic",
        category: "Anime Pics",
        desc: "Anime image"
    },
    async(Void, citel, text) => {
        
        if(!text) return citel.reply(`give me Anime Name \n _Example: ${prefix}animepic luffy_`);
        var pictured = "Anime Pics HD ";
        gis(text  + pictured, async(error, result) => {
            n = result;
            images = n[Math.floor(Math.random() * n.length)].url;
            let buttonMessage = {
                image: {
                    url: images,
                },
                caption: `*-----「 Anime Image 」-----*`,
                footer: Void.user.name,
                headerType: 4,
                contextInfo: {
                    externalAdReply: {
                        title: tlang().title,
                        body: `Anime Pics`,
                        thumbnail: log0,
                        mediaType: 2,
                        renderLargerThumbnail: true,
                        mediaUrl: gurl,
                        sourceUrl: ``,
                    },
                },
            };
            Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        });

    }
)
*/
//-----------------------------------------------------------------------

/*
cmd({
        pattern: "animewall",
        category: "Anime Pics",
        desc: "Anime Wallpaper Random",
         filename: __filename
    },
    async(Void, citel, text) => {
        try {

            var ecchid = "anime wallpaper for desktop full hd";
            let gis = require("g-i-s");
            gis(ecchid, async(error, result) => {
                n = result;
                images = n[Math.floor(Math.random() * n.length)].url;
                let buttonMessage = {
                    image: {
                        url: images,
                    },
                    caption: `*--- Anime Wallpaper---*`,
                    footer: Void.user.name,
                    headerType: 4,
                    contextInfo: {
                        externalAdReply: {
                            title: tlang().title,
                            body: `Anime-Wallpaper`,
                            jpegThumbnail: log0,
                            thumbnail: log0,
                            mediaType: 2,
                            mediaUrl: ``,
                            sourceUrl: ``,
                        },
                    },
                };
                Void.sendMessage(citel.chat, buttonMessage, {
                    quoted: citel,
                });
            })
        } catch (e) {
                       citel.reply("```Error While Downloading Animy Wallpaper```") ;
                       
                      
                   
        }
    }
)
*/
//-----------------------------------------------------------------------
cmd({
    pattern: "manga",
     category: "Anime Pics",
        filename: __filename,
    desc: "Sends info about asked manga."
},
async(Void, citel, text) => {
    const { Manga } = require("@shineiichijo/marika");
    const manga = new Manga();
    if (!text) return citel.reply(`Which Manga do you want to Search? \n _Please give me a name._`);
    let srh = await manga.searchManga(text);
    let mang = `*🎀Title: ${srh.data[0].title}*\n`;
    mang += `*📈Status: ${srh.data[0].status}*\n`;
    mang += `*🌸Total Volumes: ${srh.data[0].volumes}*\n`;
    mang += `*🎗Total Chapters: ${srh.data[0].chapters}*\n`;
    mang += `*🧧Genres:*\n`;
    for (let i = 0; i < srh.data[0].genres.length; i++) {
        mang += `\t\t\t\t\t\t\t\t*${srh.data[0].genres[i].name}*\n`;
    }
    mang += `*✨Published on: ${srh.data[0].published.from}*\n`;
    mang += `*🌟Score: ${srh.data[0].scored}*\n`;
    mang += `*🎐Popularity: ${srh.data[0].popularity}*\n`;
    mang += `*🎏Favorites: ${srh.data[0].favorites}*\n`;
    mang += `*✍Authors:*\n`;
    for (let i = 0; i < srh.data[0].authors.length; i++) {
        mang += `\t\t\t\t\t\t\t\t\t*${srh.data[0].authors[i].name}* *(${srh.data[0].authors[0].type})*\n`;
    }
    mang += `\n*🌐URL: ${srh.data[0].url}*\n\n`;
    if (srh.data[0].background !== null) mang += `*🎆Background:* ${srh.data[0].background}`;
    mang += `*❄️Description:* ${srh.data[0].synopsis}`;
    Void.sendMessage(citel.chat, {  image: {  url: srh.data[0].images.jpg.large_image_url,  }, caption: mang, }, {  quoted: citel,  });

}
)
//----------------------------------------------------------------------------
cmd({
    pattern: "anime",
    category: "Anime Pics",
    desc: "Searches Info about Anime and Provides result."
},
async(Void, citel, text) => {
    const client = new Anime();
    if (!text) return citel.reply(`Which Anime do you want to search?\n _Please give me a name._`);
    let anime = await client.searchAnime(text);
    let result = anime.data[0];
    //console.log(result);
    let details = `🎀Title: ${result.title}\n`;
    details += `🎋Format: ${result.type}\n`;
    details += `*📈Status: ${result.status
    .toUpperCase()
    .replace(/\_/g, " ")}*\n`;
    details += `🍥Total episodes: ${result.episodes}\n`;
    details += `🎈Duration: ${result.duration}\n`;
    details += `🧧Genres:\n`;
    for (let i = 0; i < result.genres.length; i++) {
        details += `\t\t\t\t\t\t\t\t*${result.genres[i].name}*\n`;
    }
    details += `✨Based on: ${result.source.toUpperCase()}\n`;
    details += `📍Studio:\n`;
    for (let i = 0; i < result.studios.length; i++) {
        details += `\t\t\t\t\t\t\t\t*${result.studios[i].name}*\n`;
    }
    details += `🎴Producers:\n`;
    for (let i = 0; i < result.producers.length; i++) {
        details += `\t\t\t\t\t\t\t\t\t\t*${result.producers[i].name}*\n`;
    }
    details += `💫Premiered on: ${result.aired.from}\n`;
    details += `🎗Ended on: ${result.aired.to}\n`;
    details += `🎐Popularity: ${result.popularity}\n`;
    details += `🎏Favorites: ${result.favorites}\n`;
    details += `🎇Rating: ${result.rating}\n`;
    details += `🏅Rank: ${result.rank}\n\n`;
    if (result.trailer.url !== null)
        details += `♦Trailer: ${result.trailer.url}\n\n`;
    details += `🌐URL: ${result.url}\n\n`;
    if (result.background !== null)
        details += `🎆Background: ${result.background}*\n\n`;
    details += `❄Description: ${result.synopsis}`;

 Void.sendMessage( citel.chat, { image: {  url: result.images.jpg.large_image_url, }, caption: details, }, { quoted: citel,});
}
   )
//---------------------------------------------------------------------------

cmd({
        pattern: "wallpaper",
        desc: "To get Random Pics",
       category: "Anime Pics",
        filename: __filename
    },

    async(Void, citel, text) => {


const response = await fetch('https://api.unsplash.com/photos/random?client_id=72utkjatCBC-PDcx7-Kcvgod7-QOFAm2fXwEeW8b8cc');
const data = await response.json();
  const url =data.urls.regular
  //citel.reply ('url here :'+url);

                let buttonMessaged = {
                    image: { url: url },
                    caption: '*---Random Wallpapers Here---*',
                    footer: tlang().footer,
                    headerType: 4,
                   
                };
                return await Void.sendMessage(citel.chat, buttonMessaged , {quoted : citel});


}
   )
