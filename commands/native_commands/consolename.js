/**
 * - author: g0dswisdom
 * - description: A command that changes the console's title
 */

const { osiris } = require ("../../api/osiris.js");
const nodeBashTitle = require("node-bash-title");

function execute(XSessionToken, data, sharedObj) {
    const Channel = data.ChannelId;
    const Content = data.Content;
    var Args = osiris.utils.getArgs(Content);
    if (Args[1]) {
        nodeBashTitle(Args[1]);
        osiris.sendMessage(XSessionToken, Channel, `Changed console name to ${Args[1]}`).then((message) => {
            console.log("[REVOLT]: SENT!");
        })
    } else {
        osiris.sendMessage(XSessionToken, Channel, "No argument for title").then((message) => {
            console.log("[REVOLT]: SENT!");
        })
    }
    //(XSessionToken, Channel, )
}

module.exports = {
    name: "consolename",
    description: "Changes the name of the console",
    native: true,
    category: "text",
    usage: "consolename",
    arguments: [
        {
            name: "name",
            type: "STRING"
        }
    ],  
    execute,
}