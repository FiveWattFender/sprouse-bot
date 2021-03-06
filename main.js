const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot Running');
});

client.login(process.env.BOT_TOKEN) // logon to server

// listen for "Hello" from a user, bot will reply "Hi!"
client.on('message', (msg) => {
    if (msg.content === 'Hello') msg.reply('Hi!');
});