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
const { tlang, ffmpeg,cmd } = require('../lib')
const fs = require('fs')
const { exec } = require('child_process')
//---------------------------------------------------------------------------
cmd({
        pattern: "bass",
        desc: "adds bass in given sound",
        category: "audio",
        use: '<reply to any audio>',
      //  react:"✅",
    },
    async(Void, citel) => {
        let mime = citel.quoted.mtype
        let set = "-af equalizer=f=54:width_type=o:width=2:g=20";
        if (/audio/.test(mime)) {
            citel.reply(tlang().wait);
            let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
            let ran = citel.sender.slice(6) + (".mp3");
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media);
                if (err) return reply(err);
                let buff = fs.readFileSync(ran);
                Void.sendMessage(
                    citel.chat, {
                        audio: buff,
                        mimetype: "audio/mpeg",
                    }, {
                        quoted: citel,
                    }
                );
                fs.unlinkSync(ran);
            });
        } else
            citel.reply(
                `Reply to the audio you want to change with*`
            );
    }
)
//---------------------------------------------------------------------------
cmd({
        pattern: "blown",
        desc: "adds blown in given audio",
        category: "audio",
        use: '<reply to any audio>',
       // react:"✅",
    },
    async(Void, citel) => {
        let mime = citel.quoted.mtype
        let set = "-af acrusher=.1:1:64:0:log";
        if (/audio/.test(mime)) {
            citel.reply(tlang().wait);
            let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
            let ran = citel.sender.slice(6) + (".mp3");
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media);
                if (err) return reply(err);
                let buff = fs.readFileSync(ran);
                Void.sendMessage(
                    citel.chat, {
                        audio: buff,
                        mimetype: "audio/mpeg",
                    }, {
                        quoted: citel,
                    }
                );
                fs.unlinkSync(ran);
            });
        } else
            citel.reply(
                `Reply to the audio you want to change with.*`
            );
    }
)
//---------------------------------------------------------------------------
cmd({
        pattern: "deep",
        desc: "adds deep effect in given audio",
        category: "audio",
        use: '<reply to any audio>',
      //  react:"✅",
    },
    async(Void, citel) => {
        let mime = citel.quoted.mtype
        let set = "-af atempo=4/4,asetrate=44500*2/3";
        if (/audio/.test(mime)) {
            citel.reply(tlang().wait);
            let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
            let ran = citel.sender.slice(6) + (".mp3");
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media);
                if (err) return reply(err);
                let buff = fs.readFileSync(ran);
                Void.sendMessage(
                    citel.chat, {
                        audio: buff,
                        mimetype: "audio/mpeg",
                    }, {
                        quoted: citel,
                    }
                );
                fs.unlinkSync(ran);
            });
        } else
            citel.reply(
                `Reply to the audio you want to change with.*`
            );
    }
)
//---------------------------------------------------------------------------
cmd({
        pattern: "fast",
        desc: "Adds fast(equilizer) in quoted audio.",
        category: "audio",
        use: '<reply to any audio>',
       // react:"✅",
    },
    async(Void, citel) => {
        let mime = citel.quoted.mtype
        let set = '-filter:a "atempo=1.63,asetrate=44100"';
        if (/audio/.test(mime)) {
            citel.reply(tlang().wait);
            let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
            let ran = citel.sender.slice(6) + (".mp3");
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media);
                if (err) return reply(err);
                let buff = fs.readFileSync(ran);
                Void.sendMessage(
                    citel.chat, {
                        audio: buff,
                        mimetype: "audio/mpeg",
                    }, {
                        quoted: citel,
                    }
                );
                fs.unlinkSync(ran);
            });
        } else
            citel.reply(
                `Reply to the audio you want to change with.*`
            );
    }
)
//---------------------------------------------------------------------------
cmd({
        pattern: "reverse",
        desc: "Adds reverse(equilizer) in quoted audio.",
        category: "audio",
        use: '<reply to any audio>',
      //  react:"✅",
    },
    async(Void, citel) => {
        let mime = citel.quoted.mtype
        let set = '-filter_complex "areverse"';
        if (/audio/.test(mime)) {
            citel.reply(tlang().wait);
            let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
            let ran = citel.sender.slice(6) + (".mp3");
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media);
                if (err) return reply(err);
                let buff = fs.readFileSync(ran);
                Void.sendMessage( citel.chat, {  audio: buff, mimetype: "audio/mpeg",}, { quoted: citel, });
                fs.unlinkSync(ran);
            });
        } else  citel.reply(`Reply to the audio you want to change with.*`);
    }
)