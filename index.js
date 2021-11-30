const Discord = require('discord.js')
const bot = new Discord.Client

const token = 'OTE1MjY4MTM5MzE3NjA4NTA5.YaZH4Q.uH401K6qKG6kEOOpwTGeRYP30Ts'

bot.on('ready', () => {
    console.log('Bot Online')
})



bot.login(token)