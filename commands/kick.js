const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'kick',
  description: 'kick a member',
  async execute(msg) {
    const role = msg.member.permissions.has('ADMINISTRATOR')
    if (role) {
      const userKick = msg.mentions.users.first()

      if (userKick) {
        await msg.guild.members
          .kick(userKick, 'You are kicked from the server')
          .then(async () => {
            const kick = new MessageEmbed()
              .setAuthor({
                name: `Kicked by ${msg.author.username}`,
                iconURL:
                  'https://media.discordapp.net/attachments/915469705219829771/1045033398718173345/kick-out-text-red-grungy-vintage-round-stamp-rubber-214095454-removebg-preview_1.png'
              })
              .setDescription(`**${userKick.tag}** has been successfully kicked from this server`)
              .setColor('#ff0000')
            msg.channel.bulkDelete(1)
            await msg.channel.send({ embeds: [kick] })
          })
          .catch(async (err) => {
            console.log(err)
            await msg.reply(`Sorry, I cant kick **${userKick.tag}**`)
          })
      } else {
        await msg.reply('Please mention the member you want to kick')
      }
    } else {
      await msg.reply("**You don't have permission to use this command**")
    }
  }
}
