const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("643467863205609477")
setInterval(function() {
channel.send(`ANA ZWIN ZWIN ZWIN`);
}, 30)
})

client.login(process.env.BOT_TOKEN);