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
//-----------------------------------------------------------------------------------
const Secktor = require('../lib')
const Config = require('../config')
const maker = require('mumaker')
let { fancytext, tiny, runtime, formatp, botpic, prefix, sck1, tlang, cmd, fetchJson, getBuffer  } = require("../lib");
const axios = require('axios');
const fetch = require('node-fetch');



//-----------------------------------------------------------------------------------
cmd({ pattern: "slice", category: "logo", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
        if (!text) return citel.reply('*_Example : .slice shadow cipher_*');
        let anu = await maker.textpro('https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html', text);
        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `Made by ${tlang().title},For my ${tlang().greet}` }, { quoted: citel });
    })
//-----------------------------------------------------------------------------------
cmd({ pattern: "glow", category: "logo", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
        if (!text) return citel.reply('*_Example : .glow shadow cipher_*');
        let anu = await maker.textpro('https://textpro.me/free-advanced-glow-text-effect-873.html', text);
        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `Made by ${tlang().title},For my ${tlang().greet}` }, { quoted: citel });
    })
//----------------------------------------------------------------------------------- 
cmd({ pattern: "gitch1", category: "logo", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
        if (!text) return citel.reply('*_Example : .gitch1 shadow cipher_*');
        let anu = await maker.textpro('https://textpro.me/create-impressive-glitch-text-effects-online-1027.html', text);
        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `Made by ${tlang().title},For my ${tlang().greet}` }, { quoted: citel });
    }) 
//---------------------------------------------------------------------------
cmd({
            pattern: "stel",
            category: "logo",
            desc: "Some text to image feature with various styles."
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply('_Example : .steel shadow;cipher_');  
            let text1 = text ? text.split(';')[0] : '';
            let text2 = text ? text.split(';')[1] : '';
            if(!text2 || !text1) return await citel.reply("*Uhh Please Provide text. Example: .steel text1;text2*");
            let anu = await maker.textpro('https://textpro.me/3d-steel-text-effect-877.html', [text1, text2] );
            Void.sendMessage(citel.chat, { image: {url: anu },caption: `Made by ${tlang().title},For my ${tlang().greet}`}, { quoted: citel });
        }
    )

//-----------------------------------------------------------------------------------
cmd({
            pattern: "avenger",
            category: "logo",
            desc: "Some text to image feature with various styles."
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply('*_Example : .avenger shadow;cipher_*');  
            let text1 = text ? text.split(';')[0] : '';
            let text2 = text ? text.split(';')[1] : '';
            if(!text2 || !text1) return await citel.reply("*Uhh Please Provide text. Example: .avenger text1;text2*");
            let anu = await maker.textpro('https://textpro.me/create-3d-avengers-logo-online-974.html', [text1, text2] );
            Void.sendMessage(citel.chat, { image: {url: anu },caption: `Made by ${tlang().title},For my ${tlang().greet}`}, { quoted: citel });
        }
    )
//-----------------------------------------------------------------------------------
cmd({
            pattern: "marvel",
            category: "logo",
            desc: "Some text to image feature with various styles."
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply('*_Example : .marvel shadow;cipher_*');  
            let text1 = text ? text.split(';')[0] : '';
            let text2 = text ? text.split(';')[1] : '';
            if(!text2 || !text1) return await citel.reply("*Uhh Please Provide text. Example: .marvel text1;text2*");
            let anu = await maker.textpro('https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html', [text1, text2] );
            Void.sendMessage(citel.chat, { image: {url: anu },caption: `Made by ${tlang().title},For my ${tlang().greet}`}, { quoted: citel });
        }
    )
//-----------------------------------------------------------------------------------
cmd({
            pattern: "phub",
            category: "logo",
            desc: "Some text to image feature with various styles."
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply('*_Example : .phub shadow;cipher_*');  
            let text1 = text ? text.split(';')[0] : '';
            let text2 = text ? text.split(';')[1] : '';
            if(!text2 || !text1) return await citel.reply("*Uhh Please Provide text. Example: .phub text1;text2*");
            let anu = await maker.textpro('https://textpro.me/pornhub-style-logo-online-generator-free-977.html', [text1, text2] );
            Void.sendMessage(citel.chat, { image: {url: anu },caption: `Made by ${tlang().title},For my ${tlang().greet}`}, { quoted: citel });
        }
    )
//-----------------------------------------------------------------------------------

cmd({
            pattern: "glitch",
            category: "logo",
            desc: "Some text to image feature with various styles."
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply('*_Example : .glitch shadow;cipher_*');  
            let text1 = text ? text.split(';')[0] : '';
            let text2 = text ? text.split(';')[1] : '';
            if(!text2 || !text1) return await citel.reply("*Uhh Please Provide text. Example: .glitch text1;text2*");
            let anu = await maker.textpro('https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html', [text1, text2] );
            Void.sendMessage(citel.chat, { image: {url: anu },caption: `Made by ${tlang().title},For my ${tlang().greet}`}, { quoted: citel });
        }
    )
//-----------------------------------------------------------------------------------
cmd({
            pattern: "glitch2",
            category: "logo",
            desc: "Some text to image feature with various styles."
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply('*_Example : .glitch2 shadow;cipher_*');  
            let text1 = text ? text.split(';')[0] : '';
            let text2 = text ? text.split(';')[1] : '';
            if(!text2 || !text1) return await citel.reply("*Uhh Please Provide text. Example: .glitch2 text1;text2*");
            let anu = await maker.textpro('https://textpro.me/create-a-glitch-text-effect-online-free-1026.html', [text1, text2] );
            Void.sendMessage(citel.chat, { image: {url: anu },caption: `Made by ${tlang().title},For my ${tlang().greet}`}, { quoted: citel });
        }
    )

//-----------------------------------------------------------------------------------
cmd({
            pattern: "grafiti",
            category: "logo",
            desc: "Some text to image feature with various styles."
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply('*_Example : .grafiti shadow;cipher_*');  
            let text1 = text ? text.split(';')[0] : '';
            let text2 = text ? text.split(';')[1] : '';
            if(!text2 || !text1) return await citel.reply("*Uhh Please Provide text. Example: .grafiti text1;text2*");
            let anu = await maker.textpro('https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html', [text1, text2] );
            Void.sendMessage(citel.chat, { image: {url: anu },caption: `Made by ${tlang().title},For my ${tlang().greet}`}, { quoted: citel });
        }
    )
//-----------------------------------------------------------------------------------

