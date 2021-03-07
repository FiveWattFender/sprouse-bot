const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json')
require('dotenv').config();

client.on('ready', () => {
    console.log('Bot Running');
});

// logon to server with token
client.login(process.env.BOT_TOKEN) 


