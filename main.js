const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot Running');
});
