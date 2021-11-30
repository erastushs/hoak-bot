const Discord = require('discord.js')
const bot = new Discord.Client

const token = 'OTE1MjY4MTM5MzE3NjA4NTA5.YaZH4Q.uH401K6qKG6kEOOpwTGeRYP30Ts'
var PREFIX = 'hoak'
var version = '1.0.1'

bot.on('ready', () => {
    console.log('Bot Online')
})

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(' ')

    switch (args[0]) {
        case 'ping' :
            message.reply('pong!')
            break


        case 'info' :
            if(!args[1]) {
                message.channel.send('Commands info) ; \n-author\n-version')
            }
            if (args[1] === 'author'){
                message.channel.send('This bot was created by <@398542246523437066>')
                break
            } else if (args[1] === 'version'){
                message.channel.send('Version : ' + version)
                break
            } 
    }
})

bot.login(token)