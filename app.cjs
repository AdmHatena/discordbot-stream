const fs = require('fs');
const discord = require('discord.js');
const client = new discord.Client({intents: [discord.Intents.FLAGS.GUILDS]});

const botinfo = JSON.parse(fs.readFileSync('bot-info.json'));

client.on('ready', ()=>{
  console.log(`logged in with ${client.user.tag}`);
});

client.on('message', async msg=>{
  console.log(msg.content);
  if(msg.content == '!vid')
    msg.channel.send('Hello Discord!');
});

client.login(botinfo.token);
