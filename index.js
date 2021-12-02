const {
    Client, 
    MessageEmbed,
    Collection
} = require('discord.js')
const bot = new Client

var prefix = 'hoak'
var version = '1.1.2'
var creator = '<@398542246523437066>'

const fs = require('fs')

const cooldown = new Collection()

const commands = new Collection()
const files = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
for(const file of files) {
    const command = require(`./commands/${file}`)
    commands.set(command.name, command)
}

//greeting selamat datang
bot.on('guildMemberAdd', member => {
    const welcomeEmbed = new MessageEmbed()

    welcomeEmbed.setColor('#5cf000')
    welcomeEmbed.setDescription(`🔰 THANK YOU FOR JOINING 🔰 \n====================================\nHello ${member} Welcome To ${member.guild.name} \n♦️ Please fill in the form <#504845048618287104>\n♦️ Please obey the rules you know\n♦️ Hope you don't do anything stupid that can get you kicked out of this server\n♦️ If there is something you want to ask\nplease contact <@398542246523437066>  or other admins, Thank you\n====================================`)
    welcomeEmbed.setImage('https://i.gifer.com/Buo.gif')

    member.guild.channels.cache.find(ch => ch.name === '👋-welcome-leave').send(welcomeEmbed)
})
bot.on('guildMemberRemove', member => {
    const goodbyeEmbed = new MessageEmbed()

    goodbyeEmbed.setColor('#f00000')
    goodbyeEmbed.setTitle('Good Bye:(')
    goodbyeEmbed.setDescription(`We will miss you ${member}`)
    goodbyeEmbed.setImage('https://i.imgur.com/UMoeRlr.gif')

    member.guild.channels.cache.find(ch => ch.name === '👋-welcome-leave').send(goodbyeEmbed)
})

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

        case 'testAdmin':
            commands.get('testAdmin').execute(message)
            break
        
        case 'kick':
            commands.get('kick').execute(message)
            break

        case 'ban':
            commands.get('ban').execute(message)
            break
    }
})

bot.login(process.env.TOKEN)