const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'kick',
  description: 'kick a member',
  option: [
    {
      name: 'user',
      description: 'Get a User',
      type: 6,
      required: true
    }
  ],
  async execute(interaction) {
    const role = interaction.member.permissions.has('ADMINISTRATOR')
    await interaction.deferReply()
    if (role) {
      const userKick = interaction.options.getUser('user')

      if (userKick) {
        await interaction.guild.members
          .kick(userKick, 'You are kicked from the server')
          .then(async () => {
            const kick = new MessageEmbed()
              .setAuthor({
                name: `Kicked by ${interaction.user.username}`,
                iconURL:
                  'https://media.discordapp.net/attachments/915469705219829771/1045033398718173345/kick-out-text-red-grungy-vintage-round-stamp-rubber-214095454-removebg-preview_1.png'
              })
              .setDescription(`**${userKick.tag}** has been successfully kicked from this server`)
              .setColor('#ff0000')
            await interaction.editReply({ embeds: [kick] })
          })
          .catch(async (err) => {
            console.log(err)
            await interaction.editReply(`I cant kick **${userKick.tag}**`)
          })
      } else {
        await interaction.editReply('Please mention the member you want to kick')
      }
    } else {
      return interaction.editReply("**You don't have permission to use this command**")
    }
  }
}
