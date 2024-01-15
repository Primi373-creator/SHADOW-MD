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
var config = require("../config");
var commands = [];


function cmd(info, func) {
    var data = info;
    data.function = func;
    if (!data.dontAddCommandList) data.dontAddCommandList = false;
    if (!info.desc) info.desc = '';
    if (!data.fromMe) data.fromMe = false;
    if (!info.category) data.category = 'misc';
    if (!info.filename) data.filename = "Not Provided";
    commands.push(data);
    return data;
}
module.exports = {
    cmd,
    AddCommand:cmd,
    Function:cmd,
    Module:cmd,
    commands,
};