const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot Running');
});

// logon to server with token
client.login(process.env.BOT_TOKEN) 

// Basic commands, may be moved later (will also be converted to switches, im just lazy)
client.on('message', (msg) => {
    if (msg.channel.type !='text' || message.author.bot || !message.startsWith('!'))
    return;
    
    // ping pong lol
    if (message.conten === '*ping') {
        message.channel.send('pong');
    }
});
