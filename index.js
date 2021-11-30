const {
    Client, 
    MessageEmbed,
    Collection
} = require('discord.js')
const bot = new Client

const token = 'OTE1MjY4MTM5MzE3NjA4NTA5.YaZH4Q.uH401K6qKG6kEOOpwTGeRYP30Ts'
var prefix = 'hoak'
var version = '1.0.1'
var creator = '<@398542246523437066>'

const fs = require('fs')
const commands = new Collection()
const files = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
for(const file of files) {
    const command = require(`./commands/${file}`)
    commands.set(command.name, command)
}

bot.on('ready', () => {
    console.log('Bot Online')

    bot.user.setActivity('hoakhelp', {
        type: "PLAYING"
    }).catch(console.error)
})

bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(' ')

    switch (args[0]) {
        case 'ping' :
            commands.get('ping').execute(message)
            break

        case 'info':
            commands.get('info').execute(message)
            break
            
        case 'help':
            commands.get('help').execute(message)
            break

        case 'clear':
            commands.get('clear').execute(message, args)
            break
    }
})

bot.login(token)