const {
    Client, 
    MessageEmbed
} = require('discord.js')
const bot = new Client

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


        case 'info':
            const info = new MessageEmbed()
                .setTitle(' Hoak Fam Information')
                .setDescription('**Author** : <@398542246523437066>\n **Version** : ' + version)
            message.channel.send(info)
        break
            
        case 'help':
        const help = new MessageEmbed()
                .setTitle(' Hoak Fam Help Menu')
                .addField('My prefix is `hoak`. Use `hoak<command>` to call me ', '[hoakinfo](https://s.id/HoakFam) : untuk informasi bot\n[hoakinfo](https://s.id/HoakFam) : untuk informasi bot')
            message.channel.send(help)
        break
    }
})

bot.login(token)